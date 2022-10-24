"use strict";

const {
  initHttpBenchmarkOnly,
  addRoutes,
  routes,
} = require("@mikrokit/compiled-app");

const options = {
  enableValidation: false,
  enableSerialization: false,
};

const { startHttpServer } = initHttpBenchmarkOnly(options);

addRoutes(routes);

startHttpServer({ port: 3000 });
