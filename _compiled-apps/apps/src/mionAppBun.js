"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const bun = require("@mionkit/bun");
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
const initHttpBun = __assignType(async (routerOpts, options) => {
  await router.initMionRouter(routes, routerOpts);
  return bun.startBunServer(options);
}, ["routerOpts", "options", "", 'P!2!8!2"8"/#']);
exports.initHttpBun = initHttpBun;
exports.routes = routes;
//# sourceMappingURL=mionAppBun.js.map
