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

/**
 * Generate a sample user payload for benchmarking.
 * Uses template literal to avoid JSON.stringify overhead on each request.
 * Only the id is dynamic, rest is static string.
 *
 * @param {boolean} isMion - Whether to wrap in array for mion RPC-style API
 * @returns {string} JSON string of the user payload
 */
function generateSampleUser(isMion = false) {
  const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  // Use template literal to avoid JSON.stringify overhead
  // Only the id is dynamic, rest is static string
  const userJson = `{"id":${id},"username":"john_smith","email":"john.smith@example.com","profile":{"firstName":"John","lastName":"Smith","displayName":"John S.","bio":"Software developer and tech enthusiast","avatarUrl":"https://example.com/avatars/john.jpg","dateOfBirth":"1990-05-15T00:00:00.000Z"},"role":"user","status":"active","address":{"street":"123 Main Street","city":"San Francisco","state":"CA","zipCode":"94102","country":"USA"},"paymentMethods":[{"type":"credit_card","lastFourDigits":"4242","expiryMonth":12,"expiryYear":2025,"brand":"visa"},{"type":"paypal","email":"john.paypal@example.com"}],"preferences":{"theme":"dark","language":"en-US","timezone":"America/Los_Angeles","notifications":{"email":true,"sms":false,"push":true,"frequency":"daily"}},"createdAt":"2020-01-15T10:30:00.000Z","updatedAt":"2024-12-17T02:24:00.000Z","lastLoginAt":"2024-12-16T18:45:00.000Z","tags":["premium","early-adopter","verified"]}`;

  // mion wraps request body in array for RPC-style API
  return isMion ? `[${userJson}]` : userJson;
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

// Export for testing
module.exports.generateSampleUser = generateSampleUser;
