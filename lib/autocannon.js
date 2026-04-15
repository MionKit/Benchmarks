"use strict";

const autocannon = require("autocannon");
const fs = require("fs");
const compare = require("autocannon-compare");
const path = require("path");
const { promisify } = require("util");
const pidusage = require("pidusage");
const { generateSampleUser, generateSimpleUser } = require("./payloads");
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

const resultsDirectoryServer = path.join(process.cwd(), "results-update-user");
const resultsDirectoryServerHello = path.join(process.cwd(), "results-hello");
const resultsDirectorySimpleUser = path.join(
  process.cwd(),
  "results-simple-user",
);
let resultsDirectory;

function setResultsDirectory(benchmarkName) {
  switch (benchmarkName) {
    case "servers-hello":
      resultsDirectory = resultsDirectoryServerHello;
      break;
    case "servers-simple":
      resultsDirectory = resultsDirectorySimpleUser;
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
    const updateSimpleUserUrl = "http://127.0.0.1:3000/updateSimpleUser";
    const helloUrl = "http://127.0.0.1:3000/hello";

    // Set URL and method based on benchmark type
    if (opts.benchmark === "servers") {
      opts.url = updateUserUrl;
      opts.method = "POST";
    } else if (opts.benchmark === "servers-simple") {
      opts.url = updateSimpleUserUrl;
      opts.method = "POST";
    } else {
      opts.url = helloUrl;
      opts.method = "GET";
    }

    opts.headers = {
      accept: "*/*",
      "Content-Type": "application/json",
    };

    let maxMem = 0;
    let maxCpu = 0;
    let memSeries = [];
    let cpuSeries = [];

    if (opts.benchmark === "servers") {
      const isMion = handler.includes("mion");
      opts.requests = [
        {
          method: opts.method,
          setupRequest: (req, context) => {
            const body = generateSampleUser(isMion);
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
    } else if (opts.benchmark === "servers-simple") {
      const isMion = handler.includes("mion");
      opts.requests = [
        {
          method: opts.method,
          setupRequest: (req, context) => {
            const body = generateSimpleUser(isMion);
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
  result.testingTool = "autocannon";

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

// Export for testing
module.exports.generateSampleUser = generateSampleUser;
module.exports.generateSimpleUser = generateSimpleUser;
