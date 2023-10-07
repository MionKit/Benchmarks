#!/usr/bin/env node
"use strict";

const { fork, spawn, exec } = require("child_process");
const ora = require("ora");
const path = require("path");
const { fire } = require("./autocannon");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const doBench = async (opts, handler) => {
  const isBun = handler.includes(".bun");
  const isElysia = handler.includes("elysia.bun");
  const spinner = ora(`Started ${handler}`).start();
  const file = isElysia
    ? path.join(__dirname, "..", "app-elysia/src", handler)
    : path.join(__dirname, "..", "benchmarks", handler);
  const forked = isBun
    ? exec(`bun ${file}${isElysia ? ".ts" : ".js"}`, (err) => {
        if (err && err.signal !== "SIGINT") console.log(err);
      })
    : fork(file);
  const options = {
    forkedPid: forked.pid,
    ...opts,
  };

  spinner.color = "magenta";
  spinner.text = `starting server for ${handler}`;

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
    return console.log(error);
  } finally {
    spinner.color = "yellow";
    spinner.text = `Working ${handler} for ${options.duration}s `;
  }

  try {
    await fire(options, handler, true);
    forked.kill("SIGINT");
    spinner.text = `Results saved for ${handler}`;
    spinner.succeed();
    await timeout(2000); // time for process to finish before next one starts
    return true;
  } catch (error) {
    return console.log(error);
  }
};

let index = 0;
const start = async (opts, list) => {
  if (list.length === index) {
    return true;
  }

  try {
    await doBench(opts, list[index]);
    index += 1;
    return start(opts, list);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = start;
