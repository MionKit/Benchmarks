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

const routeNumbers = [10, 100, 500, 1000, 2000, 3000, 4000, 5000];

const measureStartupListen = runSample(() => {
  return new Promise((resolve) => {
    new Worker(path.join(__dirname, "./startup-listen.js")).on("exit", resolve);
  });
});

const measureStartupDeepkit = runSample(async () => {
  console.log("#### deepkit metrics ####");
  for (const n of routeNumbers) {
    await new Promise((resolve) => {
      new Worker(path.join(__dirname, "./startup-deepkit-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

const measureStartupMion = runSample(async () => {
  console.log("#### mion metrics ####");
  for (const n of routeNumbers) {
    await new Promise((resolve) => {
      console.log("parent pid", process.pid);
      new Worker(path.join(__dirname, "./startup-mion-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

const measureFastify = runSample(async () => {
  console.log("#### fastify metrics ####");
  for (const n of routeNumbers) {
    await new Promise((resolve) => {
      new Worker(path.join(__dirname, "./startup-fastify-routes.js"), {
        env: {
          routes: n,
        },
      }).on("exit", resolve);
    });
  }
});

measureStartupListen()
  .then(measureStartupMion)
  .then(measureStartupDeepkit)
  .then(measureFastify);
