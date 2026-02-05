"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const node = require("@mionkit/node");
const router = require("@mionkit/router");
const apps_src_models = require("./models.js");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const routes = {
  hello: router.route(__assignType(() => "world", ["", "P&/!"])),
  updateUser: router.route(__assignType((ctx, user) => {
    user.updatedAt = /* @__PURE__ */ new Date();
    user.lastLoginAt = /* @__PURE__ */ new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }, ["ctx", () => apps_src_models.__ΩUser, "user", () => apps_src_models.__ΩUser, "", 'P"2!n"2#n$/%'])),
  updateSimpleUser: router.route(__assignType((ctx, user) => {
    user.lastUpdate = /* @__PURE__ */ new Date();
    return user;
  }, ["ctx", () => apps_src_models.__ΩSimpleUser, "user", () => apps_src_models.__ΩSimpleUser, "", 'P"2!n"2#n$/%']))
};
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await router.initMionRouter(routes, routerOpts);
  return node.startNodeServer(httpOpts);
}, ["routerOpts", "httpOpts", "", 'P!2!8!2"8"/#']);
exports.initHttp = initHttp;
exports.routes = routes;
//# sourceMappingURL=mionAppNode.js.map
