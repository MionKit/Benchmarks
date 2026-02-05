"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const node = require("@mionkit/node");
const router = require("@mionkit/router");
const core = require("@mionkit/core");
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
var { __ΩUser } = require("./models");
let requestCount = 0;
const getCacheSize = __assignType((cache) => {
  if (cache instanceof Map)
    return cache.size;
  if (typeof cache === "object" && cache !== null)
    return Object.keys(cache).length;
  return 0;
}, ["cache", "", `P"2!'/"`]);
const routes = {
  hello: router.route(__assignType(() => {
    requestCount++;
    if (requestCount % 1e3 === 0) {
      const { jitFnsCache, pureFnsCache } = core.getJitFnCaches();
      const mem = process.memoryUsage();
      console.log(`[mion.node] Request #${requestCount} - JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)} - Memory: heapUsed=${(mem.heapUsed / 1024 / 1024).toFixed(1)}MB, rss=${(mem.rss / 1024 / 1024).toFixed(1)}MB`);
    }
    return "world";
  }, ["", "P&/!"])),
  updateUser: router.route(__assignType((ctx, user) => {
    requestCount++;
    if (requestCount % 1e3 === 0) {
      const { jitFnsCache, pureFnsCache } = core.getJitFnCaches();
      const mem = process.memoryUsage();
      console.log(`[mion.node] Request #${requestCount} - JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)} - Memory: heapUsed=${(mem.heapUsed / 1024 / 1024).toFixed(1)}MB, rss=${(mem.rss / 1024 / 1024).toFixed(1)}MB`);
    }
    user.updatedAt = /* @__PURE__ */ new Date();
    user.lastLoginAt = /* @__PURE__ */ new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }, ["ctx", () => __ΩUser, "user", () => __ΩUser, "", 'P"2!n"2#n$/%']))
};
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await router.initMionRouter(routes, routerOpts);
  const { jitFnsCache, pureFnsCache } = core.getJitFnCaches();
  console.log(`[mion.node] Initial JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)}`);
  return node.startNodeServer(httpOpts);
}, [() => __ΩPartial, "routerOpts", () => __ΩPartial, "httpOpts", "", 'P!o!"2"8!o#"2$8"/%']);
exports.initHttp = initHttp;
exports.routes = routes;
//# sourceMappingURL=mionAppNode-debug.js.map
