"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const http = require("@mionkit/http");
const router = require("@mionkit/router");
const apps_src_models = require("./models.js");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const routes = {
  hello: router.route(__assignType(() => "world", ["", "P&/!"])),
  updateUser: router.route(__assignType((ctx, user) => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  }, ["ctx", () => apps_src_models.__ΩUser, "user", () => apps_src_models.__ΩUser, "", 'P"2!n"2#n$/%']))
};
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await router.initMionRouter(routes, routerOpts);
  return http.startNodeServer(httpOpts);
}, ["routerOpts", "httpOpts", "", 'P!2!8!2"8"/#']);
exports.initHttp = initHttp;
exports.routes = routes;
//# sourceMappingURL=mionAppNode.js.map
