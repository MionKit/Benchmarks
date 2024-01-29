"use strict";

const {
  initHttp,
  initRouter,
  registerRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionAppNode");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initRouter({ skipClientRoutes: true });
registerRoutes(routes);
initHttp({ port: 3000 });
