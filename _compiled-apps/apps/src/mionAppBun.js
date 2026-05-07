"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const platformBun = require("@mionjs/platform-bun");
const router = require("@mionjs/router");
const mionRoutes = require("../../mionRoutes-CQQ65Qc8.js");
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const initHttpBun = __assignType(async (routerOpts, options) => {
  await router.initMionRouter(mionRoutes.routes, { aotCaches: mionRoutes.aotCaches, ...routerOpts });
  return platformBun.startBunServer(options);
}, [() => __ΩPartial, () => router.__ΩRouterOptions, "routerOpts", () => __ΩPartial, () => platformBun.__ΩBunHttpOptions, "options", "", `Pn"o!"2#8n%o$"2&8"/'`]);
exports.routes = mionRoutes.routes;
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=mionAppBun.js.map
