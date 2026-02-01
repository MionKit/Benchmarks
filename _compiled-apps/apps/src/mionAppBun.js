"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const bun = require("@mionkit/bun");
const router = require("@mionkit/router");
const core = require("@mionkit/core");
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
let lastJitCacheSize = 0;
let lastPureCacheSize = 0;
let snapshotCount = 0;
const takeHeapSnapshot = async () => {
  const Bun = globalThis.Bun;
  if (!(Bun == null ? void 0 : Bun.generateHeapSnapshot)) {
    console.log("[HEAP] Bun.generateHeapSnapshot not available");
    return;
  }
  Bun.gc(true);
  const filename = `heap-snapshot-${snapshotCount++}.json`;
  const snapshot = Bun.generateHeapSnapshot();
  await Bun.write(filename, JSON.stringify(snapshot));
  console.log(`[HEAP] Snapshot saved to ${filename}`);
};
const logCacheGrowth = async () => {
  var _a, _b, _c, _d;
  const { jitFnsCache, pureFnsCache } = core.getJitFnCaches();
  const jitSize = Object.keys(jitFnsCache).length;
  const pureSize = Object.keys(pureFnsCache).length;
  if ((_a = globalThis.Bun) == null ? void 0 : _a.gc) {
    globalThis.Bun.gc(true);
  }
  const memUsage = ((_c = (_b = globalThis.Bun) == null ? void 0 : _b.memoryUsage) == null ? void 0 : _c.call(_b)) || ((_d = process.memoryUsage) == null ? void 0 : _d.call(process));
  const heapMB = ((memUsage == null ? void 0 : memUsage.heapUsed) || 0) / 1024 / 1024;
  const rssMB = ((memUsage == null ? void 0 : memUsage.rss) || 0) / 1024 / 1024;
  if (jitSize !== lastJitCacheSize || pureSize !== lastPureCacheSize) {
    console.log(`[CACHE CHANGE] JIT: ${lastJitCacheSize} -> ${jitSize}, Pure: ${lastPureCacheSize} -> ${pureSize}`);
    if (jitSize > lastJitCacheSize) {
      const keys = Object.keys(jitFnsCache);
      console.log(`[NEW JIT KEYS] Last 5: ${keys.slice(-5).join(", ")}`);
    }
    lastJitCacheSize = jitSize;
    lastPureCacheSize = pureSize;
  }
  console.log(`[MEMORY] JIT: ${jitSize}, Pure: ${pureSize}, Heap: ${heapMB.toFixed(2)}MB, RSS: ${rssMB.toFixed(2)}MB`);
  if (snapshotCount < 3) {
    await takeHeapSnapshot();
  }
};
const initHttpBun = __assignType(async (routerOpts, options) => {
  await router.initMionRouter(routes, routerOpts);
  console.log("[DIAGNOSTIC] Starting JIT cache monitoring with heap snapshots...");
  const { jitFnsCache, pureFnsCache } = core.getJitFnCaches();
  lastJitCacheSize = Object.keys(jitFnsCache).length;
  lastPureCacheSize = Object.keys(pureFnsCache).length;
  console.log(`[INITIAL] JIT Cache: ${lastJitCacheSize}, Pure Cache: ${lastPureCacheSize}`);
  await takeHeapSnapshot();
  setInterval(logCacheGrowth, 3e3);
  return bun.startBunServer(options);
}, ["routerOpts", "options", "", 'P!2!8!2"8"/#']);
exports.initHttpBun = initHttpBun;
exports.routes = routes;
//# sourceMappingURL=mionAppBun.js.map
