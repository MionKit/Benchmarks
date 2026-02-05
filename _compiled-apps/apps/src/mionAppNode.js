"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const node = require("@mionkit/node");
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
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await router.initMionRouter(routes, routerOpts);
  return node.startNodeServer(httpOpts);
}, [() => __ΩPartial, "routerOpts", () => __ΩPartial, "httpOpts", "", 'P!o!"2"8!o#"2$8"/%']);
exports.initHttp = initHttp;
exports.routes = routes;
//# sourceMappingURL=mionAppNode.js.map
