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

const resultsDirectory = path.join(process.cwd(), "results");

const run = (opts = {}, handler) =>
  new Promise((resolve, reject) => {
    opts.url = "http://localhost:3000/updateUser";
    opts.method = "POST";

    // TODO: Move post param to pacakges
    opts.body =
      handler === "mion"
        ? '{"/updateUser":[{"id":123,"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}]}'
        : '{"/updateUser":{"id":123,"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}}';
    opts.headers = {
      accept: "*/*",
      "Content-Type": "application/json",
      "Content-Length": opts.body.length,
    };
    let maxMem = 0;
    let maxCpu = 0;
    const memCheck = setInterval(() => {
      pidusage(opts.forkedPid, (err, stats) => {
        if (err) {
          console.log(err);
        } else {
          if (stats.memory > maxMem) {
            maxMem = stats.memory;
          }
          if (stats.cpu > maxCpu) {
            maxCpu = stats.cpu;
          }
        }
      });
    }, 500);
    autocannon(opts, (err, result) => {
      clearInterval(memCheck);
      if (err) {
        reject(err);
      } else {
        const r = {
          ...result,
          maxMem,
          maxCpu,
        };
        resolve(r);
      }
    });
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
