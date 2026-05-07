"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const platformNode = require("@mionjs/platform-node");
const router = require("@mionjs/router");
const mionRoutes = require("../../mionRoutes-CQQ65Qc8.js");
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await router.initMionRouter(mionRoutes.routes, { aotCaches: mionRoutes.aotCaches, ...routerOpts });
  return platformNode.startNodeServer(httpOpts);
}, [() => __ΩPartial, () => router.__ΩRouterOptions, "routerOpts", () => __ΩPartial, () => platformNode.__ΩNodeHttpOptions, "httpOpts", "", `Pn"o!"2#8n%o$"2&8"/'`]);
exports.routes = mionRoutes.routes;
exports.initHttp = initHttp;
//# sourceMappingURL=mionAppNode.js.map
