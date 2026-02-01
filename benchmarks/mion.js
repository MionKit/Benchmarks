"use strict";

const { initHttp, routes } = require("../_compiled-apps/apps/src/mionAppNode");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initHttp({ aot: false }, { port: 3000 });
