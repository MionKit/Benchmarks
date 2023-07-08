#!/usr/bin/env node
"use strict";

const os = require("os");
const commander = require("commander");
const inquirer = require("inquirer");
const Table = require("cli-table");
const chalk = require("chalk");
const { join, relative } = require("path");
const { readdirSync, readFileSync, writeFileSync } = require("fs");
const { info } = require("./lib/packages");
const { compare } = require("./lib/autocannon");
const { chartScreenshot } = require("./lib/chart-screenshot");

const resultsPath = join(process.cwd(), "results");
const chartPaths = join(process.cwd(), "assets", "public", "charts");

commander
  .option("-t, --table", "print table")
  .option("-m --markdown", "format table for markdown")
  .option("-u --update", "update README.md")
  .parse(process.argv);

const opts = commander.opts();

if (opts.markdown || opts.update) {
  chalk.level = 0;
}

async function runCompare() {
  if (!getAvailableResults().length) {
    console.log(chalk.red("Benchmark to gather some results to compare."));
  } else if (opts.update) {
    const outputResults = getOutputResults();
    const markdownChartImages = await getMarkdownCharts(outputResults);
    await updateReadme(markdownChartImages, outputResults);
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

async function updateReadme(markdownChartImages, outputResults) {
  const machineInfo = `${os.platform()} ${os.arch()} | ${
    os.cpus().length
  } vCPUs | ${(os.totalmem() / 1024 ** 3).toFixed(1)}GB Mem`;
  const benchmarkMd = `### Benchmarks

* __Machine:__ ${machineInfo}
* __Node:__ \`${process.version}\`
* __Run:__ ${new Date()}
* __Method:__ \`autocannon -c 100 -d 40 -p 10 localhost:3000\` (two rounds; one to warm-up, one to measure)

${markdownChartImages ? markdownChartImages : ""}

${compareResults(true, outputResults)}
`;
  const md = readFileSync("README.md", "utf8");
  writeFileSync(
    "README.md",
    md.split("### Benchmarks")[0] + benchmarkMd,
    "utf8"
  );
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
  writeFileSync(
    "benchmark-results.json",
    JSON.stringify(outputResults),
    "utf8"
  );
  return table.toString();
}

function getOutputResults() {
  const results = getFormattedResults();
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
    { metricName: "maxCpu", metricLabel: "Max Cpu (%)" },
  ];

  const results = await Promise.all(
    charts.map(({ metricName, metricLabel }) =>
      getMarkdownChat(outputResults, metricName, metricLabel)
    )
  );

  return results.join("\n\n");
}

async function getMarkdownChat(outputResults, metricName, metricLabel) {
  const columnsData = outputResults.map((result) => [
    `${result.name}`,
    `${result[metricName]}`,
  ]);

  // const max = outputResults.reduce((acc, result) => {
  //   return Math.max(acc, parseFloat(result[metricName]));
  // }, 0);

  const file = await chartScreenshot(
    {
      data: {
        x: "x",
        columns: [["x", metricLabel], ...columnsData],
        type: "bar",
        labels: true,
      },
      axis: {
        // y: {
        //   show: false,
        //   type: "log",
        //   max: max * 1.5,
        // },
        x: {
          type: "category",
        },
      },
      transition: {
        duration: 0,
      },
    },
    chartPaths,
    metricName
  );

  const relativePath = relative(process.cwd(), file);
  console.log(`relativePath ${relativePath}`);

  return `#### ${metricLabel} \n\n![benchmarks](${relativePath})\n\n`;
}

runCompare();
