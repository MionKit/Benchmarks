"use strict";

const {
  initHttpBun,
  addRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionAppBun");
const { startBunHttpServer } = require("@mionkit/bun");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initHttpBun({ port: 3000 });
addRoutes(routes);
const server = startBunHttpServer();
console.log(server);
