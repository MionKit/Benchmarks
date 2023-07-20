#!/usr/bin/env node
"use strict";

const os = require("os");
const commander = require("commander");
const inquirer = require("inquirer");
const Table = require("cli-table");
const chalk = require("chalk");
const { join } = require("path");
const { readdirSync, readFileSync, writeFileSync } = require("fs");
const benchmarkServers = require("./lib/packages");
const benchmarkMion = require("./lib/packages-mion-options");
const { compare } = require("./lib/autocannon");
const {
  getMarkdownBarChart,
  getMarkdownChartMemSeries,
} = require("./lib/chart-screenshot");

let resultsMarkdownFilename;
let resultsJsonFilename;
let resultsPath;
let info;
let chartsDirectory;

let ranParameters = "--connections=100 --duration=40 --pipelining=10";

commander
  .option("-t, --table", "print table")
  .option("-m --markdown", "format table for markdown")
  .option("-u --update", "update README.md")
  .option(
    "-b --benchmark <benchmark>",
    "benchmark to compare (servers or mion)"
  )
  .parse(process.argv);

const opts = commander.opts();

if (opts.markdown || opts.update) {
  chalk.level = 0;
}

async function getBenchmarkOptions() {
  if (opts.benchmark) return opts;
  return inquirer.prompt([
    {
      type: "list",
      message: "Select what benchmark do you want to run?",
      name: "benchmark",
      choices: [
        {
          name: "servers: compare multiple libraries",
          value: "servers",
        },
        {
          name: "mion options:s benchmarks mion using different settings and options",
          value: "mion",
        },
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one benchmark.";
        }
        return true;
      },
    },
  ]);
}

async function runCompare() {
  const options = await getBenchmarkOptions();
  setBenchmark(options.benchmark);
  if (!getAvailableResults().length) {
    console.log(chalk.red("Benchmark to gather some results to compare."));
  } else if (opts.update) {
    const outputResults = getOutputResults();
    const markdownChartImages = await getMarkdownCharts(outputResults);

    // memory series only available for mion benchmark
    const memSeriesToDisplay =
      options.benchmark === "mion"
        ? ["mion", "mion3000", "http-node", "mion-no-reflection"]
        : outputResults.map((result) => result.name);
    const memSeriesChartImages = await getMarkdownChartMemSeries(
      outputResults,
      `memSeries`,
      `Memory Series (MB)`,
      chartsDirectory,
      0,
      memSeriesToDisplay
    );
    await updateReadme(
      markdownChartImages,
      memSeriesChartImages,
      outputResults
    );
  } else if (opts.table) {
    console.log(compareResults(opts.markdown));
  } else {
    compareResultsInteractive();
  }
}

function getAvailableResults() {
  return readdirSync(resultsPath)
    .filter((file) => file.match(/(.+)\.json$/))
    .sort()
    .map((choice) => choice.replace(".json", ""));
}

function formatHasRouter(hasRouter) {
  return typeof hasRouter === "string" ? hasRouter : hasRouter ? "✓" : "✗";
}

async function updateReadme(
  markdownChartImages,
  memSeriesChartImages,
  outputResults
) {
  const machineInfo = `${os.platform()} ${os.arch()} | ${
    os.cpus().length
  } vCPUs | ${(os.totalmem() / 1024 ** 3).toFixed(1)}GB Mem`;
  const benchmarkMd = `## Benchmark Results

* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`autocannon ${ranParameters} localhost:3000\` (two rounds; one to warm-up, one to measure)

${markdownChartImages ? markdownChartImages : ""}

${memSeriesChartImages ? memSeriesChartImages : ""}

${compareResults(true, outputResults)}
`;
  const md = readFileSync(resultsMarkdownFilename, "utf8");
  writeFileSync(
    resultsMarkdownFilename,
    md.split("## Benchmark Results")[0] + benchmarkMd,
    "utf8"
  );
}

function setBenchmark(benchmark) {
  switch (benchmark) {
    case "mion":
      resultsMarkdownFilename = "MION-OPTIONS.md";
      resultsPath = join(process.cwd(), "results-mion");
      resultsJsonFilename = "benchmark-results-mion.json";
      info = benchmarkMion.info;
      chartsDirectory = join(process.cwd(), "assets", "public", "charts-mion");
      break;
    default:
    case "servers":
      resultsMarkdownFilename = "README.md";
      resultsPath = join(process.cwd(), "results");
      resultsJsonFilename = "benchmark-results-servers.json";
      info = benchmarkServers.info;
      chartsDirectory = join(
        process.cwd(),
        "assets",
        "public",
        "charts-servers"
      );

      break;
  }
}

function compareResults(markdown, outputResults) {
  const tableStyle = !markdown
    ? {}
    : {
        chars: {
          top: "",
          "top-left": "",
          "top-mid": "",
          "top-right": "",
          bottom: "",
          "bottom-left": "",
          "bottom-mid": "",
          "bottom-right": "",
          mid: "",
          "left-mid": "",
          "mid-mid": "",
          "right-mid": "",
          left: "|",
          right: "|",
          middle: "|",
        },
        style: {
          border: [],
          head: [],
        },
      };

  const table = new Table({
    ...tableStyle,
    head: [
      "",
      "Version",
      "Router",
      "Req (R/s)",
      "Latency (ms)",
      "Output (Mb/s)",
      "Max Memory (Mb)",
      "Max Cpu (%)",
      "Validation",
      "Description",
    ],
  });

  if (markdown) {
    table.push([
      ":--",
      "--:",
      "--:",
      ":-:",
      "--:",
      "--:",
      "--:",
      "--:",
      ":-:",
      ":--",
    ]);
  }
  const results = outputResults || getOutputResults();

  for (const result of results) {
    const beBold = result.name === "mion";
    table.push([
      bold(beBold, chalk.blue(result.name), markdown),
      bold(beBold, result.version, markdown),
      bold(beBold, formatHasRouter(result.hasRouter), markdown),
      bold(beBold, result.requests, markdown),
      bold(beBold, result.latency, markdown),
      bold(beBold, result.throughput, markdown),
      bold(beBold, result.maxMem, markdown),
      bold(beBold, result.maxCpu, markdown),
      bold(beBold, result.validation, markdown),
      bold(beBold, result.description, markdown),
    ]);
  }
  writeFileSync(resultsJsonFilename, JSON.stringify(outputResults), "utf8");
  return table.toString();
}

function getOutputResults() {
  const results = getFormattedResults();
  const { connections, duration, pipelining } = results[0]; // assuming all results ran at the same time
  ranParameters = `-c ${connections} -d ${duration} -p ${pipelining}`;
  const outputResults = [];

  for (const result of results) {
    const { hasRouter, version, description, validation } =
      info(result.server) || {};
    const {
      requests: { average: requests },
      latency: { average: latency },
      throughput: { average: throughput },
    } = result;

    outputResults.push({
      name: result.server,
      version,
      hasRouter,
      requests: requests ? requests.toFixed(1) : "N/A",
      latency: latency ? latency.toFixed(2) : "N/A",
      throughput: formatThroughput(throughput),
      validation,
      description: description,
      maxMem: (result.maxMem / 1000_000).toFixed(0),
      maxCpu: result.maxCpu.toFixed(0),
      memSeries: result.memSeries.map((mem) => (mem / 1000_000).toFixed(0)),
    });
  }

  return outputResults;
}

function getFormattedResults() {
  return getAvailableResults()
    .map((file) => {
      const content = readFileSync(`${resultsPath}/${file}.json`);
      return JSON.parse(content.toString());
    })
    .sort((a, b) => parseFloat(b.requests.mean) - parseFloat(a.requests.mean));
}

function formatThroughput(throughput) {
  return throughput ? (throughput / 1024 / 1024).toFixed(2) : "N/A";
}

async function compareResultsInteractive() {
  let choices = getAvailableResults();

  const firstChoice = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What's your first pick?",
      choices,
    },
  ]);

  choices = choices.filter((choice) => choice !== firstChoice.choice);

  const secondChoice = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What's your second one?",
      choices,
    },
  ]);

  const [a, b] = [firstChoice.choice, secondChoice.choice];
  const result = compare(a, b);

  const fastest = chalk.bold.yellow(result.fastest);
  const fastestAverage = chalk.green(result.fastestAverage);
  const slowest = chalk.bold.yellow(result.slowest);
  const slowestAverage = chalk.green(result.slowestAverage);
  const diff = chalk.bold.green(result.diff);

  if (result === true) {
    console.log(chalk.green.bold(`${a} and ${b} both are fast!`));
    return;
  }

  console.log(`
 ${chalk.blue("Both are awesome but")} ${fastest} ${chalk.blue(
    "is"
  )} ${diff} ${chalk.blue("faster than")} ${slowest}
 • ${fastest} ${chalk.blue("request average is")} ${fastestAverage}
 • ${slowest} ${chalk.blue("request average is")} ${slowestAverage}`);
}

function bold(writeBold, str, markdown) {
  return writeBold ? chalk.bold(markdown ? `**${str}**` : str) : str;
}

async function getMarkdownCharts(outputResults) {
  const charts = [
    { metricName: "requests", metricLabel: "Req (R/s)" },
    { metricName: "throughput", metricLabel: "Throughput (Mb/s)" },
    { metricName: "latency", metricLabel: "Latency (ms)" },
    { metricName: "maxMem", metricLabel: "Max Memory (Mb)" },
  ];

  if (opts.benchmark === "mion") {
    charts.push({ metricName: "maxCpu", metricLabel: "Max Cpu (%)" });
  }

  const results = await Promise.all(
    charts.map(({ metricName, metricLabel }) =>
      getMarkdownBarChart(
        outputResults,
        metricName,
        metricLabel,
        chartsDirectory
      )
    )
  );

  return results.join("\n\n");
}

runCompare();
