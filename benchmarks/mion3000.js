"use strict";

const {
  initHttp,
  addRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionApp");
const { startHttpServer } = require("@mionkit/http");

// ###### check the apps/ directory for the original non compiled code
// mion needs to be compiled from typescript to be able to generate runtime types metadata

const totalRoutes = 3000;
// this handler contains type information.
const routerRoutes = {
  ...routes,
};
for (let i = 0; i < totalRoutes; ++i) {
  const defaultRoute = i % 2 === 0 ? routes["/"] : routes.updateUser;
  routerRoutes[`route-${i}`] = defaultRoute;
}

initHttp({});
addRoutes(routes);

startHttpServer({ port: 3000 });
