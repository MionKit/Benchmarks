"use strict";

const fs = require("fs");
const net = require("net");
const os = require("os");
const path = require("path");
const { spawn, execSync } = require("child_process");
const { promisify } = require("util");
const pidusage = require("pidusage");

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const access = promisify(fs.access);

try {
  execSync("command -v wrk", { stdio: "ignore" });
} catch (_err) {
  throw new Error(
    "wrk is not installed or not on PATH. Install it with `npm run install-wrk` before using --loader=wrk.",
  );
}

const LUA_SCRIPT = path.join(__dirname, "..", "scripts", "wrk", "benchmark.lua");

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

function benchmarkConfig(benchmark) {
  if (benchmark === "servers") {
    return { url: "http://127.0.0.1:3000/updateUser", type: "update-user" };
  }
  if (benchmark === "servers-simple") {
    return { url: "http://127.0.0.1:3000/updateSimpleUser", type: "update-simple-user" };
  }
  return { url: "http://127.0.0.1:3000/hello", type: "hello" };
}

const RESULT_MARKER = "__WRK_RESULT__";

function waitForPort(host, port, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryConnect = () => {
      const sock = net.connect({ host, port });
      sock.once("connect", () => { sock.destroy(); resolve(); });
      sock.once("error", () => {
        sock.destroy();
        if (Date.now() - start > timeoutMs) {
          return reject(new Error(`Server did not accept connections on ${host}:${port} within ${timeoutMs}ms`));
        }
        setTimeout(tryConnect, 100);
      });
    };
    tryConnect();
  });
}

async function run(opts, handler) {
  const { url, type } = benchmarkConfig(opts.benchmark);
  const isMion = handler.includes("mion");
  const threads = Math.min(os.cpus().length, 8);
  const connections = opts.connections || 100;
  const duration = opts.duration || 10;

  await waitForPort("127.0.0.1", 3000);

  return new Promise((resolve, reject) => {

    const args = [
      "-t", String(threads),
      "-c", String(connections),
      "-d", `${duration}s`,
      "--latency",
      "-s", LUA_SCRIPT,
      url,
    ];

    let maxMem = 0;
    let maxCpu = 0;
    const memSeries = [];
    const cpuSeries = [];

    const memCheck = setInterval(() => {
      pidusage(opts.forkedPid, (err, stats) => {
        if (err) return;
        if (stats.memory > maxMem) maxMem = stats.memory;
        if (stats.cpu > maxCpu) maxCpu = stats.cpu;
        memSeries.push(stats.memory);
        cpuSeries.push(stats.cpu);
      });
    }, 1000);

    const child = spawn("wrk", args, {
      env: {
        ...process.env,
        WRK_BENCH_TYPE: type,
        WRK_IS_MION: isMion ? "1" : "0",
        WRK_URL: url,
        WRK_CONNECTIONS: String(connections),
      },
    });

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (d) => { stdout += d.toString(); });
    child.stderr.on("data", (d) => { stderr += d.toString(); });

    child.on("error", (err) => {
      clearInterval(memCheck);
      reject(err);
    });

    child.on("close", (code) => {
      clearInterval(memCheck);

      if (code !== 0) {
        return reject(new Error(`wrk exited with code ${code}\n${stderr}`));
      }

      const markerIdx = stdout.lastIndexOf(RESULT_MARKER);
      if (markerIdx === -1) {
        return reject(new Error(`wrk did not emit a result line.\nstdout:\n${stdout}\nstderr:\n${stderr}`));
      }
      const jsonStart = markerIdx + RESULT_MARKER.length;
      const jsonEnd = stdout.indexOf("\n", jsonStart);
      const jsonStr = jsonEnd === -1
        ? stdout.slice(jsonStart)
        : stdout.slice(jsonStart, jsonEnd);

      let parsed;
      try {
        parsed = JSON.parse(jsonStr.trim());
      } catch (e) {
        return reject(new Error(`Failed to parse wrk result JSON: ${e.message}\nRaw: ${jsonStr}`));
      }

      resolve({
        ...parsed,
        maxMem,
        maxCpu,
        memSeries,
        cpuSeries,
      });
    });
  });
}

async function writeResult(handler, result) {
  try {
    await access(resultsDirectory);
  } catch (_e) {
    await mkdir(resultsDirectory);
  }
  result.server = handler;
  result.testingTool = "wrk";
  const dest = path.join(resultsDirectory, `${handler}.json`);
  return writeFile(dest, JSON.stringify(result));
}

module.exports.fire = async (opts, handler, save) => {
  setResultsDirectory(opts.benchmark);
  const result = await run(opts, handler);
  return save ? writeResult(handler, result) : null;
};

module.exports.compare = (a, b) => {
  const resA = require(`${resultsDirectory}/${a}.json`);
  const resB = require(`${resultsDirectory}/${b}.json`);
  const avgA = resA.requests.average;
  const avgB = resB.requests.average;
  if (avgA === avgB) return true;
  const fastest = avgA > avgB ? a : b;
  const slowest = avgA > avgB ? b : a;
  const fastestAverage = Math.max(avgA, avgB);
  const slowestAverage = Math.min(avgA, avgB);
  const diff = ((fastestAverage - slowestAverage) / slowestAverage) * 100;
  return { diff, fastest, slowest, fastestAverage, slowestAverage };
};
