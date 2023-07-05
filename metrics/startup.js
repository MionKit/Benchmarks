"use strict";

const { Worker } = require("worker_threads");
const path = require("path");

const minSamples = 5;

const runSample = (cb) => {
  return async () => {
    for (let i = 0; i < minSamples; ++i) {
      await cb();
    }
  };
};

const measureStartupListen = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./startup-listen.js")).on("exit", resolve);
  });
});

const measureStartupValidate = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(path.join(__dirname, "./startup-b-deepkit-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

const measureStartupNoValidate = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(path.join(__dirname, "./startup-a-mion-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

const measureFastifySchema = runSample(async () => {
  for (let n = 1; n <= 10000; n *= 10) {
    await new Promise((resolve) => {
      new Worker(path.join(__dirname, "./startup-c-fastify-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

measureStartupListen()
  .then(measureStartupNoValidate)
  .then(measureStartupValidate)
  .then(measureFastifySchema);
