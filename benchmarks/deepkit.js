"use strict";

const { initDeepkitApp, setRoutes } = require("../compiled-apps/apps");

// ###### check the apps/ directory for the original non compiled code
// deepkit needs to be compiled from typescript to be able to generate runtime types metadata

const { deepkitServer } = initDeepkitApp();
setRoutes();
deepkitServer.listen(3000);
