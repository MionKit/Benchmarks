"use strict";

const { initHttp, addRoutes, routes } = require("../compiled-apps/apps");
const { startHttpServer } = require("@mionkit/http");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initHttp({});
addRoutes(routes);

startHttpServer({ port: 3000 });
