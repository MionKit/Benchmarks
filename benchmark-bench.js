"use strict";

const inquirer = require("inquirer");
const bench = require("./lib/bench");
const serverBenchmarks = require("./lib/packages");
const mionBenchmarks = require("./lib/packages-mion-options");
const argv = process.argv.slice(2);

let choices;
let list;
let getBenchmarkInfo;

run().catch((err) => {
  console.error("error general 2===>", err);
  process.exit(1);
});

function setBenchmarks(benchmarkName) {
  switch (benchmarkName) {
    case "update-user":
    default:
      choices = serverBenchmarks.choices;
      list = serverBenchmarks.list;
      getBenchmarkInfo = serverBenchmarks.info;
      break;
  }
}

async function run() {
  const options = await getBenchmarkOptions();
  setBenchmarks(options.benchmark);

  // Support selecting specific servers via BENCH_SERVERS environment variable
  // Example: BENCH_SERVERS=mion.bun,hono.bun node benchmark-bench.js y 100 10 4 servers
  const envServers = process.env.BENCH_SERVERS;
  let modules;
  if (envServers) {
    modules = envServers
      .split(",")
      .map((s) => s.trim())
      .filter((s) => choices.includes(s));
    console.log(`Running benchmarks for: ${modules.join(", ")}`);
  } else {
    modules = options.all ? choices : await select();
  }

  // Filter out Bun servers from hello world benchmarks
  // Reason: autocannon (Node.js-based) is not fast enough to accurately benchmark Bun servers
  // See: https://bun.sh/docs/project/benchmarking
  if (options.benchmark === "servers-hello") {
    const excludedModules = modules.filter(
      (m) => getBenchmarkInfo(m).excludeFromHelloWorld,
    );
    if (excludedModules.length > 0) {
      console.log(
        `Excluding Bun servers from hello world benchmark (autocannon limitation): ${excludedModules.join(", ")}`,
      );
    }
    modules = modules.filter((m) => !getBenchmarkInfo(m).excludeFromHelloWorld);
  }

  return bench(options, modules, getBenchmarkInfo);
}

async function getBenchmarkOptions() {
  if (argv.length) return parseArgv();
  return inquirer.prompt([
    {
      type: "list",
      message: "Select what benchmark do you want to run?",
      name: "benchmark",
      choices: [
        {
          name: "update-user => compare multiple libraries (update User)",
          value: "update-user",
        },
        {
          name: "servers => compare multiple libraries (hello world)",
          value: "servers-hello",
        },
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one benchmark.";
        }
        return true;
      },
    },
    {
      type: "confirm",
      name: "all",
      message: "Do you want to run all benchmark tests?",
      default: false,
    },
    {
      type: "input",
      name: "connections",
      message: "How many connections do you need?",
      default: 100,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || "Please enter a number";
      },
      filter: Number,
    },
    {
      type: "input",
      name: "pipelining",
      message: "How many pipelines do you need?",
      default: 10,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || "Please enter a number";
      },
      filter: Number,
    },
    {
      type: "input",
      name: "duration",
      message: "How long should it take?",
      default: 40,
      validate(value) {
        return !Number.isNaN(parseFloat(value)) || "Please enter a number";
      },
      filter: Number,
    },
  ]);
}

function parseArgv() {
  const [all, connections, pipelining, duration, benchmark] = argv;
  return {
    all: all === "y",
    connections: +connections,
    pipelining: +pipelining,
    duration: +duration,
    benchmark,
  };
}

async function select() {
  const result = await inquirer.prompt([
    {
      type: "checkbox",
      message: "Select packages",
      name: "list",
      choices: [
        new inquirer.Separator(" = The usual ="),
        ...list(),
        new inquirer.Separator(" = The extras = "),
        ...list(true),
      ],
      validate: function (answer) {
        if (answer.length < 1) {
          return "You must choose at least one package.";
        }
        return true;
      },
    },
  ]);
  return result.list;
}
