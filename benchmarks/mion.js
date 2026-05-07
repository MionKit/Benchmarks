"use strict";

const { initHttp, routes } = require("../_compiled-apps/apps/src/mionAppNode");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata
// AOT caches are embedded in the compiled output via virtual:mion-aot/caches

initHttp({ strictTypes: true }, { port: 3000 });
