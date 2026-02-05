"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const bun = require("@mionkit/bun");
const router = require("@mionkit/router");
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
var { __ΩUser } = require("./models");
const routes = {
  hello: router.route(__assignType(() => "world", ["", "P&/!"])),
  updateUser: router.route(__assignType((ctx, user) => {
    user.updatedAt = /* @__PURE__ */ new Date();
    user.lastLoginAt = /* @__PURE__ */ new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }, ["ctx", () => __ΩUser, "user", () => __ΩUser, "", 'P"2!n"2#n$/%']))
};
const initHttpBun = __assignType(async (routerOpts, options) => {
  await router.initMionRouter(routes, routerOpts);
  return bun.startBunServer(options);
}, [() => __ΩPartial, "routerOpts", () => __ΩPartial, "options", "", 'P!o!"2"8!o#"2$8"/%']);
exports.initHttpBun = initHttpBun;
exports.routes = routes;
//# sourceMappingURL=mionAppBun.js.map
