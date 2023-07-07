const start = process.hrtime();

const {
  initDeepkitApp,
  deepKitSayHelloRoute,
} = require("../_compiled-apps/apps");

const { deepkitServer, deepKitRouter } = initDeepkitApp();

const totalRoutes = process.env.routes || 0;

for (let i = 0; i < totalRoutes; ++i) {
  deepKitRouter.post(`route-${i}`, deepKitSayHelloRoute);
}
const loadingTime = process.hrtime(start);

deepkitServer.listen(3000, () => {
  const listenTime = process.hrtime(start);
  const path = require("path");
  require("fs").writeFileSync(
    path.join(__dirname, `${totalRoutes}-${path.basename(__filename)}.txt`),
    `${loadingTime} | ${listenTime}| NA |\n`,
    { encoding: "utf-8", flag: "a" }
  );
  deepkitServer.close();
});
