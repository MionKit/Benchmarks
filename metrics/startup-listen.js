const start = process.hrtime();

const {
  initHttp,
  initRouter,
  registerRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionAppNode");

initRouter({});

const loadingTime = process.hrtime(start);

initHttp()
  .then((server) => {
    const listenTime = process.hrtime(start);
    require("fs").writeFileSync(
      `${__filename}.txt`,
      `${loadingTime} | ${listenTime} | 0 |}\n`,
      { encoding: "utf-8", flag: "a" }
    );
    server.close();
  })
  .catch((e) => {
    console.error("Error Starting Server", e);
  });
