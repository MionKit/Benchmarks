const start = process.hrtime();

const {
  initHttp,
  initRouter,
  registerRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionAppNode");

const totalRoutes = process.env.routes || 0;
const defaultRoute = routes.hello; // this handler contains type information.
const routerRoutes = {};
for (let i = 0; i < totalRoutes; ++i) {
  routerRoutes[`route-${i}`] = defaultRoute;
}

initRouter();
const loadingTime = process.hrtime(start);

registerRoutes(routerRoutes);

initHttp({ port: 3000 })
  .then((server) => {
    const listenTime = process.hrtime(start);
    const path = require("path");
    require("fs").writeFileSync(
      path.join(__dirname, `${totalRoutes}-${path.basename(__filename)}.txt`),
      `${loadingTime} | ${listenTime} |\n`,
      { encoding: "utf-8", flag: "a" }
    );
    server.close();
  })
  .catch((e) => {
    console.error("Error Starting Server", e);
  });
