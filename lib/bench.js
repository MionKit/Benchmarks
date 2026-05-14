#!/usr/bin/env node
"use strict";

const { fork, spawn, exec } = require("child_process");
const path = require("path");

const SPINNER_FRAMES = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
const ANSI = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  red: "\x1b[31m",
};

function createSpinner(initialText) {
  const tty = process.stdout.isTTY;
  const state = { text: initialText, color: "cyan", interval: null };
  const render = () => {
    if (!tty) return;
    const frame = SPINNER_FRAMES[Math.floor(Date.now() / 80) % SPINNER_FRAMES.length];
    const color = ANSI[state.color] || "";
    process.stdout.write(`\r\x1b[K${color}${frame}${ANSI.reset} ${state.text}`);
  };
  const stop = (symbol, msg) => {
    if (state.interval) { clearInterval(state.interval); state.interval = null; }
    const line = `${symbol} ${msg ?? state.text}`;
    if (tty) process.stdout.write(`\r\x1b[K${line}\n`);
    else process.stdout.write(`${line}\n`);
  };
  return {
    start() {
      if (tty && !state.interval) state.interval = setInterval(render, 80);
      render();
      return this;
    },
    get text() { return state.text; },
    set text(v) { state.text = v; render(); },
    get color() { return state.color; },
    set color(v) { state.color = v; },
    succeed(msg) { stop(`${ANSI.green}✔${ANSI.reset}`, msg); },
    fail(msg) { stop(`${ANSI.red}✖${ANSI.reset}`, msg); },
  };
}

const SUPPORTED_LOADERS = ["autocannon", "wrk"];

function getLoader(name) {
  const loader = name || "autocannon";
  if (!SUPPORTED_LOADERS.includes(loader)) {
    throw new Error(
      `Unknown loader '${loader}'. Supported loaders: ${SUPPORTED_LOADERS.join(", ")}`,
    );
  }
  return require(`./${loader}`);
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const doBench = async (opts, handler, getBenchmarkInfo) => {
  const { fire } = getLoader(opts.loader);
  const benchInfo = getBenchmarkInfo(handler);
  const spinner = createSpinner(`Started ${handler}`).start();
  const isBun = benchInfo.isBun;
  const srcDir = benchInfo.srcDir || "benchmarks";
  const file = path.join(__dirname, "..", srcDir, handler);
  const fileExtension = benchInfo.fileExtension || (isBun ? ".ts" : ".js");

  // Support verbose mode via BENCH_VERBOSE env var to see server output
  const verbose = process.env.BENCH_VERBOSE === "true";

  let forked;
  if (isBun) {
    forked = spawn("bun", [`${file}${fileExtension}`], {
      stdio: verbose ? "inherit" : "pipe",
      cwd: path.join(__dirname, ".."),
    });
    forked.on("error", (err) => {
      if (err && err.code !== "SIGINT") console.log(err);
    });
  } else {
    forked = fork(file);
  }

  const options = {
    forkedPid: forked.pid,
    ...opts,
  };

  spinner.color = "magenta";
  spinner.text = `starting server for ${handler}`;

  const killForked = async () => {
    try { forked.kill("SIGINT"); } catch (_e) { /* already dead */ }
    // give the OS a moment to release the port before the next server binds it
    await timeout(2000);
  };

  try {
    // warm up only half the time
    const reducedTimeOpts = {
      ...options,
      duration: Math.round(options.duration / 2),
    };
    spinner.color = "magenta";
    spinner.text = `Warming ${handler} for ${reducedTimeOpts.duration}s `;

    await fire(reducedTimeOpts, handler, false);
  } catch (error) {
    spinner.fail(`Warm-up failed for ${handler}`);
    console.log(error);
    await killForked();
    return;
  } finally {
    spinner.color = "yellow";
    spinner.text = `Working ${handler} for ${options.duration}s `;
  }

  try {
    await fire(options, handler, true);
    spinner.text = `Results saved for ${handler}`;
    spinner.succeed();
  } catch (error) {
    spinner.fail(`Measurement failed for ${handler}`);
    console.log(error);
  } finally {
    await killForked();
  }
};

/**
 * Run benchmarks for all servers in the list sequentially
 * @param {object} opts - Benchmark options (connections, duration, pipelining, etc.)
 * @param {string[]} list - List of server names to benchmark
 * @param {function} getBenchmarkInfo - Function to get benchmark info for a server
 */
const start = async (opts, list, getBenchmarkInfo) => {
  // Trigger the loader's presence/env checks before any server is forked.
  getLoader(opts.loader);

  // Use local index to avoid state pollution between multiple benchmark runs
  let index = 0;

  const runNext = async () => {
    if (index >= list.length) {
      return true;
    }

    try {
      await doBench(opts, list[index], getBenchmarkInfo);
      index += 1;
      return runNext();
    } catch (error) {
      return console.log(error);
    }
  };

  return runNext();
};

module.exports = start;
