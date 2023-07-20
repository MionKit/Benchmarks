const start = process.hrtime();

const {
  initHttp,
  addRoutes,
  routes,
} = require("../_compiled-apps/apps/src/mionApp");
const { startHttpServer } = require("@mionkit/http");
initHttp({});

const loadingTime = process.hrtime(start);

startHttpServer()
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
