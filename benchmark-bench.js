"use strict";

const inquirer = require("inquirer");
const bench = require("./lib/bench");
const serverBenchmarks = require("./lib/packages");
const mionBenchmarks = require("./lib/packages-mion-options");
const argv = process.argv.slice(2);

let choices;
let list;

run().catch((err) => {
  console.error("error general 2===>", err);
  process.exit(1);
});

function setBenchmarks(benchmarkName) {
  switch (benchmarkName) {
    case "mion":
      choices = mionBenchmarks.choices;
      list = mionBenchmarks.list;
      break;
    case "servers":
    default:
      choices = serverBenchmarks.choices;
      list = serverBenchmarks.list;
      break;
  }
}

async function run() {
  const options = await getBenchmarkOptions();
  setBenchmarks(options.benchmark);
  const modules = options.all ? choices : await select();
  return bench(options, modules);
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
          name: "servers => compare multiple libraries (update User)",
          value: "servers",
        },
        {
          name: "servers => compare multiple libraries (hello world)",
          value: "servers-hello",
        },
        // {
        //   name: "mion options => benchmarks mion using different settings and options",
        //   value: "mion",
        // },
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
