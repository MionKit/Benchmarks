"use strict";

const autocannon = require("autocannon");
const fs = require("fs");
const compare = require("autocannon-compare");
const path = require("path");
const { promisify } = require("util");
const pidusage = require("pidusage");
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const resultsDirectoryServer = path.join(process.cwd(), "results");
const resultsDirectoryServerHello = path.join(process.cwd(), "results-hello");
const resultsDirectoryMion = path.join(process.cwd(), "results-mion");
let resultsDirectory;

function setResultsDirectory(benchmarkName) {
  switch (benchmarkName) {
    case "mion":
      resultsDirectory = resultsDirectoryMion;
      break;
    case "servers-hello":
      resultsDirectory = resultsDirectoryServerHello;
      break;
    case "servers":
    default:
      resultsDirectory = resultsDirectoryServer;
      break;
  }
}

const run = (opts = {}, handler) =>
  new Promise((resolve, reject) => {
    const updateUserUrl = "http://127.0.0.1:3000/updateUser";
    const helloUrl = "http://127.0.0.1:3000/hello";
    opts.url = opts.benchmark === "servers" ? updateUserUrl : helloUrl;
    opts.method = opts.benchmark === "servers" ? "POST" : "GET";

    opts.headers = {
      accept: "*/*",
      "Content-Type": "application/json",
    };

    let maxMem = 0;
    let maxCpu = 0;
    let memSeries = [];
    let cpuSeries = [];

    if (opts.benchmark === "servers") {
      opts.requests = [
        {
          method: opts.method,
          setupRequest: (req, context) => {
            const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            const body = handler.includes("mion")
              ? `[{"id":${id},"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}]`
              : `{"id":${id},"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}`;
            req.body = body;
            req.headers = {
              accept: "*/*",
              "Content-Type": "application/json",
              "Content-Length": body.length,
            };
            return req;
          },
        },
      ];
    }

    const memCheck = setInterval(() => {
      pidusage(opts.forkedPid, (err, stats) => {
        if (err) {
          return;
        } else {
          if (stats.memory > maxMem) {
            maxMem = stats.memory;
          }
          if (stats.cpu > maxCpu) {
            maxCpu = stats.cpu;
          }
          memSeries.push(stats.memory);
          cpuSeries.push(stats.cpu);
        }
      });
    }, 1000);
    const atc = autocannon(opts, (err, result) => {
      clearInterval(memCheck);
      if (err) {
        reject(err);
      } else {
        resolve({
          ...result,
          maxMem,
          maxCpu,
          memSeries,
          cpuSeries,
        });
      }
    });
    // atc.on("reqError", (err) => {
    //   console.error(err);
    // });
  });

const writeResult = async (handler, result) => {
  try {
    await access(resultsDirectory);
  } catch (e) {
    await mkdir(resultsDirectory);
  }

  result.server = handler;

  const dest = path.join(resultsDirectory, `${handler}.json`);
  return writeFile(dest, JSON.stringify(result));
};

module.exports.fire = async (opts, handler, save) => {
  setResultsDirectory(opts.benchmark);
  const result = await run(opts, handler);
  return save ? writeResult(handler, result) : null;
};

module.exports.compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`);
  const resB = require(`${resultsDirectory}/${b}.json`);
  const comp = compare(resA, resB);
  if (comp.equal) {
    return true;
  } else if (comp.aWins) {
    return {
      diff: comp.requests.difference,
      fastest: a,
      slowest: b,
      fastestAverage: resA.requests.average,
      slowestAverage: resB.requests.average,
    };
  }
  return {
    diff: compare(resB, resA).requests.difference,
    fastest: b,
    slowest: a,
    fastestAverage: resB.requests.average,
    slowestAverage: resA.requests.average,
  };
};
