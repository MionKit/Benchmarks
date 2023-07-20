"use strict";

const {
  initHttp,
  addRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionApp");
const { startHttpServer } = require("@mionkit/http");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initHttp({});
addRoutes(routes);

startHttpServer({ port: 3000 });
