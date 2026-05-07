"use strict";

const {
  initHttpBun,
  routes,
} = require("../_compiled-apps/apps/src/mionAppBun");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata
// AOT caches are embedded in the compiled output via virtual:mion-aot/caches

initHttpBun({ strictTypes: true }, { port: 3000 });
