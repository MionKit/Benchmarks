"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const mionRoutes = require("./mionRoutes-D2bBEZx4.js");
const createRunTypeFunctions = require("./createRunTypeFunctions-CA6dDdr7.js");
require("@deepkit/core");
require("@deepkit/type");
const __ΩRecord = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩAOTCacheMessage = ["mion-aot-caches", "type", "jitFnsCode", "pureFnsCode", "routerCacheCode", "AOTCacheMessage", 'P.!4"&4#&4$&4%Mw&y'];
const __ΩPlatformReadyMessage = ["mion-platform-ready", "type", () => __ΩRecord, "routerConfig", () => __ΩRecord, "platformConfig", "PlatformReadyMessage", `P.!4"&#o##4$&#o%#4&Mw'y`];
const __ΩSerializedCaches = ["jitFnsCode", "pureFnsCode", "routerCacheCode", "SerializedCaches", 'P&4!&4"&4#Mw$y'];
const EXCLUDED_JIT_FN_IDS = [mionRoutes.JIT_FUNCTION_IDS.toJSCode];
const EXCLUDED_PURE_FN_NAMES = ["sanitizeCompiledFn"];
async function getSerializedCaches() {
  const { jitFnsCache, pureFnsCache } = mionRoutes.getJitFnCaches();
  const routerCache = mionRoutes.getPersistedMethods();
  return serializeCachesToCode(jitFnsCache, pureFnsCache, routerCache);
}
getSerializedCaches.__type = [() => __ΩSerializedCaches, "getSerializedCaches", 'Pn!`/"'];
async function emitAOTCaches() {
  if (!mionRoutes.isMionAOTEmitMode())
    return;
  if (mionRoutes.getENV("MION_COMPILE") === "middleware")
    return;
  if (typeof process.send !== "function")
    return;
  const { jitFnsCache, pureFnsCache } = mionRoutes.getJitFnCaches();
  const routerCache = mionRoutes.getPersistedMethods();
  const serialized = await serializeCachesToCode(jitFnsCache, pureFnsCache, routerCache);
  const message = {
    type: "mion-aot-caches",
    ...serialized
  };
  process.send(message);
}
emitAOTCaches.__type = ["emitAOTCaches", "P$`/!"];
async function serializeCachesToCode(jitFnsCache, pureFnsCache, routerCache) {
  const jitToJSCode = (createRunTypeFunctions.createToJavascriptFn.Ω = [[() => mionRoutes.__ΩSrcCodeJITCompiledFnsCache, "n!"]], createRunTypeFunctions.createToJavascriptFn());
  const pureToJSCode = (createRunTypeFunctions.createToJavascriptFn.Ω = [[() => mionRoutes.__ΩSrcCodePureFunctionsCache, "n!"]], createRunTypeFunctions.createToJavascriptFn());
  const routerToJSCode = (createRunTypeFunctions.createToJavascriptFn.Ω = [[() => mionRoutes.__ΩMethodsCache, "n!"]], createRunTypeFunctions.createToJavascriptFn());
  const finalJitFns = filterExcludedJitFns(jitFnsCache, EXCLUDED_JIT_FN_IDS);
  const finalPureFns = filterExcludedPureFns(pureFnsCache, EXCLUDED_PURE_FN_NAMES);
  return {
    jitFnsCode: jitToJSCode(finalJitFns),
    pureFnsCode: pureToJSCode(finalPureFns),
    routerCacheCode: routerToJSCode(routerCache)
  };
}
serializeCachesToCode.__type = [() => mionRoutes.__ΩJitFunctionsCache, "jitFnsCache", () => mionRoutes.__ΩPureFunctionsCache, "pureFnsCache", () => mionRoutes.__ΩMethodsCache, "routerCache", () => __ΩSerializedCaches, "serializeCachesToCode", "Pn!2\"n#2$n%2&n'`/("];
function filterExcludedJitFns(jitFnsCache, excludedFnIds) {
  if (!excludedFnIds.length)
    return jitFnsCache;
  return Object.fromEntries(Object.entries(jitFnsCache).filter(__assignType(([, value]) => !excludedFnIds.includes(value.fnID), ["param0", "", 'P"2!"/"'])));
}
filterExcludedJitFns.__type = [() => mionRoutes.__ΩJitFunctionsCache, "jitFnsCache", "excludedFnIds", () => mionRoutes.__ΩJitFunctionsCache, "filterExcludedJitFns", 'Pn!2"&F2#n$/%'];
function filterExcludedPureFns(pureFnsCache, excludedFnNames) {
  if (!excludedFnNames.length)
    return pureFnsCache;
  return Object.fromEntries(Object.entries(pureFnsCache).map(__assignType(([namespace, nsCache]) => [
    namespace,
    Object.fromEntries(Object.entries(nsCache).filter(__assignType(([, value]) => !excludedFnNames.includes(value.fnName), ["param0", "", 'P"2!"/"'])))
  ], ["param0", "", 'P"2!"/"'])));
}
filterExcludedPureFns.__type = [() => mionRoutes.__ΩPureFunctionsCache, "pureFnsCache", "excludedFnNames", () => mionRoutes.__ΩPureFunctionsCache, "filterExcludedPureFns", 'Pn!2"&F2#n$/%'];
exports.__ΩAOTCacheMessage = __ΩAOTCacheMessage;
exports.__ΩPlatformReadyMessage = __ΩPlatformReadyMessage;
exports.__ΩSerializedCaches = __ΩSerializedCaches;
exports.emitAOTCaches = emitAOTCaches;
exports.getSerializedCaches = getSerializedCaches;
exports.serializeCachesToCode = serializeCachesToCode;
//# sourceMappingURL=aotEmitter-BwmSX1D0.js.map
