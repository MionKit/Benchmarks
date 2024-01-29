"use strict";

const {
  initHttpBun,
  registerRoutes,
  initRouter,
  routes,
} = require("../_compiled-apps/apps/src/mionAppBun");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

initRouter({ skipClientRoutes: true });
registerRoutes(routes);
initHttpBun({ port: 3000 });
