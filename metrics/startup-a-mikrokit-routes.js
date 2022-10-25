const start = process.hrtime();

const { initHttp, routes } = require("@mikrokit/compiled-app");
const { startHttpServer, MkRouter } = initHttp({});

const totalRoutes = process.env.routes || 0;
const defaultRoute = routes["/"]; // this handler contains type information.
const routerRoutes = {};
for (let i = 0; i < totalRoutes; ++i) {
  routerRoutes[`route-${i}`] = defaultRoute;
}
const loadingTime = process.hrtime(start);

MkRouter.addRoutes(routerRoutes);

startHttpServer({ port: 3000 })
  .then((server) => {
    const listenTime = process.hrtime(start);
    const path = require("path");
    require("fs").writeFileSync(
      path.join(__dirname, `${totalRoutes}-${path.basename(__filename)}.txt`),
      `${loadingTime} | ${listenTime} | ${MkRouter.getComplexity()} |\n`,
      { encoding: "utf-8", flag: "a" }
    );
    server.close();
  })
  .catch((e) => {
    console.err("Error Starting Server", e);
  });
