"use strict";
const router = require("@mionjs/router");
const pureFnsCache = { "mion": { "asJSONString": { namespace: "mion", paramNames: [], code: `if (typeof Bun !== "undefined") return JSON.stringify;
  const STR_ESCAPE = /[\\u0000-\\u001f\\u0022\\u005c\\ud800-\\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  };`, fnName: "asJSONString", bodyHash: "4WYkR03dXOzAUe", createPureFn: function get_asJSONString() {
  if (typeof Bun !== "undefined") return JSON.stringify;
  const STR_ESCAPE = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  };
}, fn: void 0 }, "getUnknownKeysFromArray": { namespace: "mion", paramNames: [], code: 'const MAX_UNKNOWN_KEYS = 10;\n  return function _getUnknownKeysFromArray(obj, keys) {\n    const unknownKeys = [];\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) {\n        unknownKeys.push(prop);\n        if (unknownKeys.length >= MAX_UNKNOWN_KEYS) throw new Error("Too many unknown keys");\n      }\n    }\n    return unknownKeys;\n  };', fnName: "getUnknownKeysFromArray", bodyHash: "D2CDXI8OoGLGyW", createPureFn: function get_getUnknownKeysFromArray() {
  const MAX_UNKNOWN_KEYS = 10;
  return function _getUnknownKeysFromArray(obj, keys) {
    const unknownKeys = [];
    for (const prop in obj) {
      let found = false;
      for (let j = 0; j < keys.length; j++) {
        if (keys[j] === prop) {
          found = true;
          break;
        }
      }
      if (!found) {
        unknownKeys.push(prop);
        if (unknownKeys.length >= MAX_UNKNOWN_KEYS) throw new Error("Too many unknown keys");
      }
    }
    return unknownKeys;
  };
}, fn: void 0 }, "hasUnknownKeysFromArray": { namespace: "mion", paramNames: [], code: "return function _hasUnknownKeysFromArray(obj, keys) {\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) return true;\n    }\n    return false;\n  };", fnName: "hasUnknownKeysFromArray", bodyHash: "K7uzDGNnPwcqQ9", createPureFn: function get_hasUnknownKeysFromArray() {
  return function _hasUnknownKeysFromArray(obj, keys) {
    for (const prop in obj) {
      let found = false;
      for (let j = 0; j < keys.length; j++) {
        if (keys[j] === prop) {
          found = true;
          break;
        }
      }
      if (!found) return true;
    }
    return false;
  };
}, fn: void 0 }, "newRunTypeErr": { namespace: "mion", paramNames: [], code: "return function _err(p\\u03BBth, \\u03B5rr, expected, accessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const runTypeErr = { expected, path };\n    \\u03B5rr.push(runTypeErr);\n  };", fnName: "newRunTypeErr", bodyHash: "eCwDrS1nuSv7ge", createPureFn: function get_newRunTypeErr() {
  return function _err(pλth, εrr, expected, accessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const runTypeErr = { expected, path };
    εrr.push(runTypeErr);
  };
}, fn: void 0 }, "formatErr": { namespace: "mion", paramNames: [], code: "return function _formatErr(p\\u03BBth, \\u03B5rr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const formatPath = fmtAccessPath?.length ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];\n    const format = { name: fmtName, formatPath, val: paramVal };\n    const runTypeErr = { expected, path, format };\n    \\u03B5rr.push(runTypeErr);\n  };", fnName: "formatErr", bodyHash: "2isPiuLWPtohVR", createPureFn: function get_formatErr() {
  return function _formatErr(pλth, εrr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const formatPath = (fmtAccessPath == null ? void 0 : fmtAccessPath.length) ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];
    const format = { name: fmtName, formatPath, val: paramVal };
    const runTypeErr = { expected, path, format };
    εrr.push(runTypeErr);
  };
}, fn: void 0 }, "safeIterableKey": { namespace: "mion", paramNames: [], code: 'return function _safeKey(value) {\n    if (value === void 0) return null;\n    if (value === null) return null;\n    const type = typeof value;\n    if (type === "number" || type === "string" || type === "boolean") return value;\n    return null;\n  };', fnName: "safeIterableKey", bodyHash: "BrjL47E-GRjUpQ", createPureFn: function get_safeIterableKey() {
  return function _safeKey(value) {
    if (value === void 0) return null;
    if (value === null) return null;
    const type = typeof value;
    if (type === "number" || type === "string" || type === "boolean") return value;
    return null;
  };
}, fn: void 0 } } };
const jitFnsCache = { "is_Rp3hpd": { isNoop: false, jitDependencies: ["is_v7nFN3"], typeName: "params", fnID: "is", jitFnHash: "is_Rp3hpd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_v7nFN3 = utl.getJIT("is_v7nFN3"); return function is_Rp3hpd(v){return (v.length <= 2 && (v[0] === undefined || (is_v7nFN3.fn(v[0]))) && (v[1] === undefined || (typeof v[1] === 'boolean')))}`, createJitFn: function get_is_Rp3hpd(utl) {
  const is_v7nFN3 = utl.getJIT("is_v7nFN3");
  return function is_Rp3hpd(v) {
    return v.length <= 2 && (v[0] === void 0 || is_v7nFN3.fn(v[0])) && (v[1] === void 0 || typeof v[1] === "boolean");
  };
}, fn: void 0 }, "is_v7nFN3": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_v7nFN3", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function is_v7nFN3(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }", createJitFn: function get_is_v7nFN3(utl) {
  return function is_v7nFN3(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = typeof v[i0] === "string";
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "te_Rp3hpd": { isNoop: false, jitDependencies: ["te_v7nFN3"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "params", fnID: "te", jitFnHash: "te_Rp3hpd", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_v7nFN3 = utl.getJIT("te_v7nFN3");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Rp3hpd(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {if (v[0] !== undefined) {pth.push(0); te_v7nFN3.fn(v[0],pth,er); pth.splice(-1);};if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`, createJitFn: function get_te_Rp3hpd(utl) {
  const te_v7nFN3 = utl.getJIT("te_v7nFN3");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_Rp3hpd(v, pth = [], er = []) {
    if (v.length > 2) Iqa2M8Ms(pth, er, "params");
    else {
      if (v[0] !== void 0) {
        pth.push(0);
        te_v7nFN3.fn(v[0], pth, er);
        pth.splice(-1);
      }
      if (v[1] !== void 0) {
        if (typeof v[1] !== "boolean") Iqa2M8Ms(pth, er, "boolean", [1]);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_v7nFN3": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr"], typeName: "array", fnID: "te", jitFnHash: "te_v7nFN3", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_v7nFN3(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`, createJitFn: function get_te_v7nFN3(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_v7nFN3(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        if (typeof v[i0] !== "string") Iqa2M8Ms(pth, er, "string", [i0]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_Rp3hpd": { isNoop: false, typeName: "params", fnID: "tj", jitFnHash: "tj_Rp3hpd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_Rp3hpd(v){if (v[0] === undefined ) {if (v.length > 0) v[0] = null};if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}", createJitFn: function get_tj_Rp3hpd(utl) {
  return function tj_Rp3hpd(v) {
    if (v[0] === void 0) {
      if (v.length > 0) v[0] = null;
    }
    if (v[1] === void 0) {
      if (v.length > 1) v[1] = null;
    }
    return v;
  };
}, fn: void 0 }, "tj_v7nFN3": { isNoop: true, typeName: "array", fnID: "tj", jitFnHash: "tj_v7nFN3", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_v7nFN3(v){return v}", createJitFn: function get_tj_v7nFN3(utl) {
  return function tj_v7nFN3(v) {
    return v;
  };
}, fn: void 0 }, "fj_Rp3hpd": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_Rp3hpd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_Rp3hpd(v){if (v[0] === null ) {v[0] = undefined};if (v[1] === null ) {v[1] = undefined} return v}", createJitFn: function get_fj_Rp3hpd(utl) {
  return function fj_Rp3hpd(v) {
    if (v[0] === null) {
      v[0] = void 0;
    }
    if (v[1] === null) {
      v[1] = void 0;
    }
    return v;
  };
}, fn: void 0 }, "fj_v7nFN3": { isNoop: true, typeName: "array", fnID: "fj", jitFnHash: "fj_v7nFN3", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_v7nFN3(v){return v}", createJitFn: function get_fj_v7nFN3(utl) {
  return function fj_v7nFN3(v) {
    return v;
  };
}, fn: void 0 }, "sj_Rp3hpd": { isNoop: false, jitDependencies: ["sj_v7nFN3"], typeName: "params", fnID: "sj", jitFnHash: "sj_Rp3hpd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_v7nFN3 = utl.getJIT("sj_v7nFN3"); return function sj_Rp3hpd(v){return '['+(v[0] === undefined ? 'null' : sj_v7nFN3.fn(v[0]))+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}`, createJitFn: function get_sj_Rp3hpd(utl) {
  const sj_v7nFN3 = utl.getJIT("sj_v7nFN3");
  return function sj_Rp3hpd(v) {
    return "[" + (v[0] === void 0 ? "null" : sj_v7nFN3.fn(v[0])) + (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) + "]";
  };
}, fn: void 0 }, "sj_v7nFN3": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_v7nFN3", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function sj_v7nFN3(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }", createJitFn: function get_sj_v7nFN3(utl) {
  return function sj_v7nFN3(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = JSON.stringify(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "is_sw8k4O": { isNoop: false, jitDependencies: ["is_MAkOqC", "is_CWm4ec"], typeName: "union", fnID: "is", jitFnHash: "is_sw8k4O", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_MAkOqC = utl.getJIT("is_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec"); return function is_sw8k4O(v){return (v === undefined || (typeof v === 'object' && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v))))}`, createJitFn: function get_is_sw8k4O(utl) {
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  return function is_sw8k4O(v) {
    return v === void 0 || typeof v === "object" && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v));
  };
}, fn: void 0 }, "is_MAkOqC": { isNoop: false, jitDependencies: ["is_RnTfbD", "is_JbF5vT", "is_GaK4SQ"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "SerializableMethodsData", fnID: "is", jitFnHash: "is_MAkOqC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_RnTfbD = utl.getJIT("is_RnTfbD");
const is_JbF5vT = utl.getJIT("is_JbF5vT");
const is_GaK4SQ = utl.getJIT("is_GaK4SQ");
const k_MAkOqC = ["purFnDeps", "methods", "deps"];
const kA_MAkOqC = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_MAkOqC(v){return (is_RnTfbD.fn(v.purFnDeps) && is_JbF5vT.fn(v.methods) && is_GaK4SQ.fn(v.deps) && !NVlxlJHR(v, k_MAkOqC))}`, createJitFn: function get_is_MAkOqC(utl) {
  const is_RnTfbD = utl.getJIT("is_RnTfbD");
  const is_JbF5vT = utl.getJIT("is_JbF5vT");
  const is_GaK4SQ = utl.getJIT("is_GaK4SQ");
  const k_MAkOqC = ["purFnDeps", "methods", "deps"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_MAkOqC(v) {
    return is_RnTfbD.fn(v.purFnDeps) && is_JbF5vT.fn(v.methods) && is_GaK4SQ.fn(v.deps) && !NVlxlJHR(v, k_MAkOqC);
  };
}, fn: void 0 }, "is_RnTfbD": { isNoop: false, jitDependencies: ["is_MiMk2w"], typeName: "PureFnsDataCache", fnID: "is", jitFnHash: "is_RnTfbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_MiMk2w = utl.getJIT("is_MiMk2w"); return function is_RnTfbD(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(is_MiMk2w.fn(v[p0]))) return false;} return true;})())}`, createJitFn: function get_is_RnTfbD(utl) {
  const is_MiMk2w = utl.getJIT("is_MiMk2w");
  return function is_RnTfbD(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_MiMk2w.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_MiMk2w": { isNoop: false, jitDependencies: ["is_PzLLbD"], typeName: "Record", fnID: "is", jitFnHash: "is_MiMk2w", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_PzLLbD = utl.getJIT("is_PzLLbD"); return function is_MiMk2w(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(is_PzLLbD.fn(v[p0]))) return false;} return true;})())}`, createJitFn: function get_is_MiMk2w(utl) {
  const is_PzLLbD = utl.getJIT("is_PzLLbD");
  return function is_MiMk2w(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_PzLLbD.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_PzLLbD": { isNoop: false, jitDependencies: ["is_IoMmkS"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PureFunctionData", fnID: "is", jitFnHash: "is_PzLLbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_PzLLbD = ["namespace", "paramNames", "code", "fnName", "bodyHash", "pureFnDependencies"];
const kA_PzLLbD = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_PzLLbD(v){return (typeof v === 'object' && v !== null && typeof v.namespace === 'string' && is_IoMmkS.fn(v.paramNames) && typeof v.code === 'string' && typeof v.fnName === 'string' && typeof v.bodyHash === 'string' && (v.pureFnDependencies === undefined || is_IoMmkS.fn(v.pureFnDependencies)) && !NVlxlJHR(v, k_PzLLbD))}`, createJitFn: function get_is_PzLLbD(utl) {
  const is_IoMmkS = utl.getJIT("is_IoMmkS");
  const k_PzLLbD = ["namespace", "paramNames", "code", "fnName", "bodyHash", "pureFnDependencies"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_PzLLbD(v) {
    return typeof v === "object" && v !== null && typeof v.namespace === "string" && is_IoMmkS.fn(v.paramNames) && typeof v.code === "string" && typeof v.fnName === "string" && typeof v.bodyHash === "string" && (v.pureFnDependencies === void 0 || is_IoMmkS.fn(v.pureFnDependencies)) && !NVlxlJHR(v, k_PzLLbD);
  };
}, fn: void 0 }, "is_IoMmkS": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_IoMmkS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function is_IoMmkS(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }", createJitFn: function get_is_IoMmkS(utl) {
  return function is_IoMmkS(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = typeof v[i0] === "string";
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_JbF5vT": { isNoop: false, jitDependencies: ["is_gm4IYC"], typeName: "MethodsCache", fnID: "is", jitFnHash: "is_JbF5vT", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_gm4IYC = utl.getJIT("is_gm4IYC"); return function is_JbF5vT(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(is_gm4IYC.fn(v[p0]))) return false;} return true;})())}`, createJitFn: function get_is_JbF5vT(utl) {
  const is_gm4IYC = utl.getJIT("is_gm4IYC");
  return function is_JbF5vT(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_gm4IYC.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_gm4IYC": { isNoop: false, jitDependencies: ["is_IoMmkS", "is_Mwes8K", "is_Hpfphl"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "MethodWithOptions", fnID: "is", jitFnHash: "is_gm4IYC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const is_Mwes8K = utl.getJIT("is_Mwes8K");
const is_Hpfphl = utl.getJIT("is_Hpfphl");
const k_gm4IYC = ["type", "id", "isAsync", "hasReturnData", "paramNames", "paramsJitHash", "returnJitHash", "headersParam", "headersReturn", "middleFnIds", "pointer", "nestLevel", "options"];
const kA_gm4IYC = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_gm4IYC(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.type) && typeof v.id === 'string' && typeof v.isAsync === 'boolean' && typeof v.hasReturnData === 'boolean' && (v.paramNames === undefined || is_IoMmkS.fn(v.paramNames)) && typeof v.paramsJitHash === 'string' && typeof v.returnJitHash === 'string' && (v.headersParam === undefined || is_Mwes8K.fn(v.headersParam)) && (v.headersReturn === undefined || is_Mwes8K.fn(v.headersReturn)) && (v.middleFnIds === undefined || is_IoMmkS.fn(v.middleFnIds)) && is_IoMmkS.fn(v.pointer) && Number.isFinite(v.nestLevel) && is_Hpfphl.fn(v.options) && !NVlxlJHR(v, k_gm4IYC))}`, createJitFn: function get_is_gm4IYC(utl) {
  const is_IoMmkS = utl.getJIT("is_IoMmkS");
  const is_Mwes8K = utl.getJIT("is_Mwes8K");
  const is_Hpfphl = utl.getJIT("is_Hpfphl");
  const k_gm4IYC = ["type", "id", "isAsync", "hasReturnData", "paramNames", "paramsJitHash", "returnJitHash", "headersParam", "headersReturn", "middleFnIds", "pointer", "nestLevel", "options"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_gm4IYC(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.type) && typeof v.id === "string" && typeof v.isAsync === "boolean" && typeof v.hasReturnData === "boolean" && (v.paramNames === void 0 || is_IoMmkS.fn(v.paramNames)) && typeof v.paramsJitHash === "string" && typeof v.returnJitHash === "string" && (v.headersParam === void 0 || is_Mwes8K.fn(v.headersParam)) && (v.headersReturn === void 0 || is_Mwes8K.fn(v.headersReturn)) && (v.middleFnIds === void 0 || is_IoMmkS.fn(v.middleFnIds)) && is_IoMmkS.fn(v.pointer) && Number.isFinite(v.nestLevel) && is_Hpfphl.fn(v.options) && !NVlxlJHR(v, k_gm4IYC);
  };
}, fn: void 0 }, "is_Mwes8K": { isNoop: false, jitDependencies: ["is_IoMmkS"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "HeadersMetaData", fnID: "is", jitFnHash: "is_Mwes8K", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_Mwes8K = ["headerNames", "jitHash"];
const kA_Mwes8K = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Mwes8K(v){return (typeof v === 'object' && v !== null && is_IoMmkS.fn(v.headerNames) && typeof v.jitHash === 'string' && !NVlxlJHR(v, k_Mwes8K))}`, createJitFn: function get_is_Mwes8K(utl) {
  const is_IoMmkS = utl.getJIT("is_IoMmkS");
  const k_Mwes8K = ["headerNames", "jitHash"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_Mwes8K(v) {
    return typeof v === "object" && v !== null && is_IoMmkS.fn(v.headerNames) && typeof v.jitHash === "string" && !NVlxlJHR(v, k_Mwes8K);
  };
}, fn: void 0 }, "is_Hpfphl": { isNoop: false, jitDependencies: ["is_o8y8qs"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "RemoteMethodOpts", fnID: "is", jitFnHash: "is_Hpfphl", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_o8y8qs = utl.getJIT("is_o8y8qs");
const k_Hpfphl = ["runOnError", "validateParams", "validateReturn", "description", "serializer", "isMutation", "strictTypes"];
const kA_Hpfphl = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Hpfphl(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (v.runOnError === undefined || typeof v.runOnError === 'boolean') && (v.validateParams === undefined || typeof v.validateParams === 'boolean') && (v.validateReturn === undefined || typeof v.validateReturn === 'boolean') && (v.description === undefined || typeof v.description === 'string') && (v.serializer === undefined || is_o8y8qs.fn(v.serializer)) && (v.isMutation === undefined || typeof v.isMutation === 'boolean') && (v.strictTypes === undefined || typeof v.strictTypes === 'boolean') && !NVlxlJHR(v, k_Hpfphl))}`, createJitFn: function get_is_Hpfphl(utl) {
  const is_o8y8qs = utl.getJIT("is_o8y8qs");
  const k_Hpfphl = ["runOnError", "validateParams", "validateReturn", "description", "serializer", "isMutation", "strictTypes"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_Hpfphl(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (v.runOnError === void 0 || typeof v.runOnError === "boolean") && (v.validateParams === void 0 || typeof v.validateParams === "boolean") && (v.validateReturn === void 0 || typeof v.validateReturn === "boolean") && (v.description === void 0 || typeof v.description === "string") && (v.serializer === void 0 || is_o8y8qs.fn(v.serializer)) && (v.isMutation === void 0 || typeof v.isMutation === "boolean") && (v.strictTypes === void 0 || typeof v.strictTypes === "boolean") && !NVlxlJHR(v, k_Hpfphl);
  };
}, fn: void 0 }, "is_o8y8qs": { isNoop: false, typeName: "SerializerMode", fnID: "is", jitFnHash: "is_o8y8qs", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_o8y8qs(v){return (v === "json" || v === "binary" || v === "stringifyJson" || v === "optimistic")}`, createJitFn: function get_is_o8y8qs(utl) {
  return function is_o8y8qs(v) {
    return v === "json" || v === "binary" || v === "stringifyJson" || v === "optimistic";
  };
}, fn: void 0 }, "is_GaK4SQ": { isNoop: false, jitDependencies: ["is_RHNb9x"], typeName: "FnsDataCache", fnID: "is", jitFnHash: "is_GaK4SQ", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_RHNb9x = utl.getJIT("is_RHNb9x"); return function is_GaK4SQ(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(is_RHNb9x.fn(v[p0]))) return false;} return true;})())}`, createJitFn: function get_is_GaK4SQ(utl) {
  const is_RHNb9x = utl.getJIT("is_RHNb9x");
  return function is_GaK4SQ(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_RHNb9x.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_RHNb9x": { isNoop: false, jitDependencies: ["is_o8YSce", "is_IoMmkS"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "JitCompiledFnData", fnID: "is", jitFnHash: "is_RHNb9x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_o8YSce = utl.getJIT("is_o8YSce");
const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_RHNb9x = ["typeName", "fnID", "jitFnHash", "args", "defaultParamValues", "isNoop", "code", "jitDependencies", "pureFnDependencies", "paramNames"];
const kA_RHNb9x = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_RHNb9x(v){return (typeof v === 'object' && v !== null && typeof v.typeName === 'string' && typeof v.fnID === 'string' && typeof v.jitFnHash === 'string' && is_o8YSce.fn(v.args) && is_o8YSce.fn(v.defaultParamValues) && (v.isNoop === undefined || typeof v.isNoop === 'boolean') && typeof v.code === 'string' && (v.jitDependencies === undefined || is_IoMmkS.fn(v.jitDependencies)) && (v.pureFnDependencies === undefined || is_IoMmkS.fn(v.pureFnDependencies)) && (v.paramNames === undefined || is_IoMmkS.fn(v.paramNames)) && !NVlxlJHR(v, k_RHNb9x))}`, createJitFn: function get_is_RHNb9x(utl) {
  const is_o8YSce = utl.getJIT("is_o8YSce");
  const is_IoMmkS = utl.getJIT("is_IoMmkS");
  const k_RHNb9x = ["typeName", "fnID", "jitFnHash", "args", "defaultParamValues", "isNoop", "code", "jitDependencies", "pureFnDependencies", "paramNames"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_RHNb9x(v) {
    return typeof v === "object" && v !== null && typeof v.typeName === "string" && typeof v.fnID === "string" && typeof v.jitFnHash === "string" && is_o8YSce.fn(v.args) && is_o8YSce.fn(v.defaultParamValues) && (v.isNoop === void 0 || typeof v.isNoop === "boolean") && typeof v.code === "string" && (v.jitDependencies === void 0 || is_IoMmkS.fn(v.jitDependencies)) && (v.pureFnDependencies === void 0 || is_IoMmkS.fn(v.pureFnDependencies)) && (v.paramNames === void 0 || is_IoMmkS.fn(v.paramNames)) && !NVlxlJHR(v, k_RHNb9x);
  };
}, fn: void 0 }, "is_o8YSce": { isNoop: false, typeName: "JitFnArgs", fnID: "is", jitFnHash: "is_o8YSce", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_o8YSce(v){return (typeof v === 'object' && v !== null && typeof v["vλl"] === 'string' && (function(){for (const p0 in v){if ("vλl" === p0) continue; if (!(typeof v[p0] === 'string')) return false;} return true;})())}`, createJitFn: function get_is_o8YSce(utl) {
  return function is_o8YSce(v) {
    return typeof v === "object" && v !== null && typeof v["vλl"] === "string" && (function() {
      for (const p0 in v) {
        if ("vλl" === p0) continue;
        if (!(typeof v[p0] === "string")) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_CWm4ec": { isNoop: false, jitDependencies: ["is_Co6w6E"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "RpcError", fnID: "is", jitFnHash: "is_CWm4ec", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_CWm4ec = ["statusCode", "mion@isΣrrθr", "type", "id", "publicMessage", "errorData"];
const kA_CWm4ec = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_CWm4ec(v){return ((v.statusCode === undefined || Number.isFinite(v.statusCode)) && v["mion@isΣrrθr"] === true && v.type === "rpc-metadata-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && !NVlxlJHR(v, k_CWm4ec))}`, createJitFn: function get_is_CWm4ec(utl) {
  const is_Co6w6E = utl.getJIT("is_Co6w6E");
  const k_CWm4ec = ["statusCode", "mion@isΣrrθr", "type", "id", "publicMessage", "errorData"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_CWm4ec(v) {
    return (v.statusCode === void 0 || Number.isFinite(v.statusCode)) && v["mion@isΣrrθr"] === true && v.type === "rpc-metadata-not-found" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) && !NVlxlJHR(v, k_CWm4ec);
  };
}, fn: void 0 }, "is_Co6w6E": { isNoop: false, typeName: "Readonly", fnID: "is", jitFnHash: "is_Co6w6E", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function is_Co6w6E(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(true)) return false;} return true;})())}", createJitFn: function get_is_Co6w6E(utl) {
  return function is_Co6w6E(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && /* @__PURE__ */ (function() {
      return true;
    })();
  };
}, fn: void 0 }, "te_sw8k4O": { isNoop: false, jitDependencies: ["is_MAkOqC", "is_CWm4ec"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "union", fnID: "te", jitFnHash: "te_sw8k4O", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_MAkOqC = utl.getJIT("is_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_sw8k4O(v,pth=[],er=[]){if (!(v === undefined || (typeof v === 'object' && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v))))) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_sw8k4O(utl) {
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_sw8k4O(v, pth = [], er = []) {
    if (!(v === void 0 || typeof v === "object" && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v)))) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "tj_sw8k4O": { isNoop: false, jitDependencies: ["is_MAkOqC", "tj_MAkOqC", "fj_MAkOqC", "is_CWm4ec", "tj_CWm4ec", "fj_CWm4ec"], typeName: "union", fnID: "tj", jitFnHash: "tj_sw8k4O", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const is_MAkOqC = utl.getJIT("is_MAkOqC");
const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function tj_sw8k4O(v){if (v === undefined) {v = v = undefined; v = [2, v]}else if (typeof v === 'object' && v !== null && is_MAkOqC.fn(v)) {v = tj_MAkOqC.fn(v); v = [0, v]}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {v = tj_CWm4ec.fn(v); v = [1, v]}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_sw8k4O(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
  utl.getJIT("fj_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
  utl.getJIT("fj_CWm4ec");
  return function tj_sw8k4O(v) {
    if (v === void 0) {
      v = v = void 0;
      v = [2, v];
    } else if (typeof v === "object" && v !== null && is_MAkOqC.fn(v)) {
      v = tj_MAkOqC.fn(v);
      v = [0, v];
    } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
      v = tj_CWm4ec.fn(v);
      v = [1, v];
    } else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_MAkOqC": { isNoop: false, jitDependencies: ["tj_JbF5vT"], typeName: "SerializableMethodsData", fnID: "tj", jitFnHash: "tj_MAkOqC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_JbF5vT = utl.getJIT("tj_JbF5vT"); return function tj_MAkOqC(v){v.methods = tj_JbF5vT.fn(v.methods); return v}`, createJitFn: function get_tj_MAkOqC(utl) {
  const tj_JbF5vT = utl.getJIT("tj_JbF5vT");
  return function tj_MAkOqC(v) {
    v.methods = tj_JbF5vT.fn(v.methods);
    return v;
  };
}, fn: void 0 }, "tj_RnTfbD": { isNoop: true, typeName: "PureFnsDataCache", fnID: "tj", jitFnHash: "tj_RnTfbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_RnTfbD(v){return v}", createJitFn: function get_tj_RnTfbD(utl) {
  return function tj_RnTfbD(v) {
    return v;
  };
}, fn: void 0 }, "tj_MiMk2w": { isNoop: true, typeName: "Record", fnID: "tj", jitFnHash: "tj_MiMk2w", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_MiMk2w(v){return v}", createJitFn: function get_tj_MiMk2w(utl) {
  return function tj_MiMk2w(v) {
    return v;
  };
}, fn: void 0 }, "tj_PzLLbD": { isNoop: true, typeName: "PureFunctionData", fnID: "tj", jitFnHash: "tj_PzLLbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_PzLLbD(v){return v}", createJitFn: function get_tj_PzLLbD(utl) {
  return function tj_PzLLbD(v) {
    return v;
  };
}, fn: void 0 }, "tj_IoMmkS": { isNoop: true, typeName: "array", fnID: "tj", jitFnHash: "tj_IoMmkS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_IoMmkS(v){return v}", createJitFn: function get_tj_IoMmkS(utl) {
  return function tj_IoMmkS(v) {
    return v;
  };
}, fn: void 0 }, "tj_JbF5vT": { isNoop: false, jitDependencies: ["tj_gm4IYC"], typeName: "MethodsCache", fnID: "tj", jitFnHash: "tj_JbF5vT", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_gm4IYC = utl.getJIT("tj_gm4IYC"); return function tj_JbF5vT(v){for (const p0 in v){ v[p0] = tj_gm4IYC.fn(v[p0]);} return v}`, createJitFn: function get_tj_JbF5vT(utl) {
  const tj_gm4IYC = utl.getJIT("tj_gm4IYC");
  return function tj_JbF5vT(v) {
    for (const p0 in v) {
      v[p0] = tj_gm4IYC.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_gm4IYC": { isNoop: false, jitDependencies: ["tj_Hpfphl"], typeName: "MethodWithOptions", fnID: "tj", jitFnHash: "tj_gm4IYC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_Hpfphl = utl.getJIT("tj_Hpfphl"); return function tj_gm4IYC(v){v.options = tj_Hpfphl.fn(v.options); return v}`, createJitFn: function get_tj_gm4IYC(utl) {
  const tj_Hpfphl = utl.getJIT("tj_Hpfphl");
  return function tj_gm4IYC(v) {
    v.options = tj_Hpfphl.fn(v.options);
    return v;
  };
}, fn: void 0 }, "tj_Mwes8K": { isNoop: true, typeName: "HeadersMetaData", fnID: "tj", jitFnHash: "tj_Mwes8K", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_Mwes8K(v){return v}", createJitFn: function get_tj_Mwes8K(utl) {
  return function tj_Mwes8K(v) {
    return v;
  };
}, fn: void 0 }, "tj_Hpfphl": { isNoop: false, jitDependencies: ["tj_o8y8qs"], typeName: "RemoteMethodOpts", fnID: "tj", jitFnHash: "tj_Hpfphl", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_o8y8qs = utl.getJIT("tj_o8y8qs"); return function tj_Hpfphl(v){if (v.serializer !== undefined) {v.serializer = tj_o8y8qs.fn(v.serializer);} return v}`, createJitFn: function get_tj_Hpfphl(utl) {
  const tj_o8y8qs = utl.getJIT("tj_o8y8qs");
  return function tj_Hpfphl(v) {
    if (v.serializer !== void 0) {
      v.serializer = tj_o8y8qs.fn(v.serializer);
    }
    return v;
  };
}, fn: void 0 }, "tj_o8y8qs": { isNoop: false, typeName: "SerializerMode", fnID: "tj", jitFnHash: "tj_o8y8qs", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_o8y8qs(v){if (v === "json") { /*noop*/}else if (v === "binary") { /*noop*/}else if (v === "stringifyJson") { /*noop*/}else if (v === "optimistic") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_o8y8qs(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_o8y8qs(v) {
    if (v === "json") ;
    else if (v === "binary") ;
    else if (v === "stringifyJson") ;
    else if (v === "optimistic") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_GaK4SQ": { isNoop: true, typeName: "FnsDataCache", fnID: "tj", jitFnHash: "tj_GaK4SQ", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_GaK4SQ(v){return v}", createJitFn: function get_tj_GaK4SQ(utl) {
  return function tj_GaK4SQ(v) {
    return v;
  };
}, fn: void 0 }, "tj_RHNb9x": { isNoop: true, typeName: "JitCompiledFnData", fnID: "tj", jitFnHash: "tj_RHNb9x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_RHNb9x(v){return v}", createJitFn: function get_tj_RHNb9x(utl) {
  return function tj_RHNb9x(v) {
    return v;
  };
}, fn: void 0 }, "tj_o8YSce": { isNoop: true, typeName: "JitFnArgs", fnID: "tj", jitFnHash: "tj_o8YSce", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_o8YSce(v){return v}", createJitFn: function get_tj_o8YSce(utl) {
  return function tj_o8YSce(v) {
    return v;
  };
}, fn: void 0 }, "fj_MAkOqC": { isNoop: false, jitDependencies: ["fj_JbF5vT"], typeName: "SerializableMethodsData", fnID: "fj", jitFnHash: "fj_MAkOqC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_JbF5vT = utl.getJIT("fj_JbF5vT"); return function fj_MAkOqC(v){v.methods = fj_JbF5vT.fn(v.methods); return v}`, createJitFn: function get_fj_MAkOqC(utl) {
  const fj_JbF5vT = utl.getJIT("fj_JbF5vT");
  return function fj_MAkOqC(v) {
    v.methods = fj_JbF5vT.fn(v.methods);
    return v;
  };
}, fn: void 0 }, "fj_RnTfbD": { isNoop: true, typeName: "PureFnsDataCache", fnID: "fj", jitFnHash: "fj_RnTfbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_RnTfbD(v){return v}", createJitFn: function get_fj_RnTfbD(utl) {
  return function fj_RnTfbD(v) {
    return v;
  };
}, fn: void 0 }, "fj_MiMk2w": { isNoop: true, typeName: "Record", fnID: "fj", jitFnHash: "fj_MiMk2w", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_MiMk2w(v){return v}", createJitFn: function get_fj_MiMk2w(utl) {
  return function fj_MiMk2w(v) {
    return v;
  };
}, fn: void 0 }, "fj_PzLLbD": { isNoop: true, typeName: "PureFunctionData", fnID: "fj", jitFnHash: "fj_PzLLbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_PzLLbD(v){return v}", createJitFn: function get_fj_PzLLbD(utl) {
  return function fj_PzLLbD(v) {
    return v;
  };
}, fn: void 0 }, "fj_IoMmkS": { isNoop: true, typeName: "array", fnID: "fj", jitFnHash: "fj_IoMmkS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_IoMmkS(v){return v}", createJitFn: function get_fj_IoMmkS(utl) {
  return function fj_IoMmkS(v) {
    return v;
  };
}, fn: void 0 }, "fj_JbF5vT": { isNoop: false, jitDependencies: ["fj_gm4IYC"], typeName: "MethodsCache", fnID: "fj", jitFnHash: "fj_JbF5vT", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_gm4IYC = utl.getJIT("fj_gm4IYC"); return function fj_JbF5vT(v){for (const p0 in v){ v[p0] = fj_gm4IYC.fn(v[p0]);} return v}`, createJitFn: function get_fj_JbF5vT(utl) {
  const fj_gm4IYC = utl.getJIT("fj_gm4IYC");
  return function fj_JbF5vT(v) {
    for (const p0 in v) {
      v[p0] = fj_gm4IYC.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_gm4IYC": { isNoop: false, jitDependencies: ["fj_Hpfphl"], typeName: "MethodWithOptions", fnID: "fj", jitFnHash: "fj_gm4IYC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_Hpfphl = utl.getJIT("fj_Hpfphl"); return function fj_gm4IYC(v){v.options = fj_Hpfphl.fn(v.options); return v}`, createJitFn: function get_fj_gm4IYC(utl) {
  const fj_Hpfphl = utl.getJIT("fj_Hpfphl");
  return function fj_gm4IYC(v) {
    v.options = fj_Hpfphl.fn(v.options);
    return v;
  };
}, fn: void 0 }, "fj_Mwes8K": { isNoop: true, typeName: "HeadersMetaData", fnID: "fj", jitFnHash: "fj_Mwes8K", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_Mwes8K(v){return v}", createJitFn: function get_fj_Mwes8K(utl) {
  return function fj_Mwes8K(v) {
    return v;
  };
}, fn: void 0 }, "fj_Hpfphl": { isNoop: false, jitDependencies: ["fj_o8y8qs"], typeName: "RemoteMethodOpts", fnID: "fj", jitFnHash: "fj_Hpfphl", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_o8y8qs = utl.getJIT("fj_o8y8qs"); return function fj_Hpfphl(v){if (v.serializer !== undefined) {v.serializer = fj_o8y8qs.fn(v.serializer);} return v}`, createJitFn: function get_fj_Hpfphl(utl) {
  const fj_o8y8qs = utl.getJIT("fj_o8y8qs");
  return function fj_Hpfphl(v) {
    if (v.serializer !== void 0) {
      v.serializer = fj_o8y8qs.fn(v.serializer);
    }
    return v;
  };
}, fn: void 0 }, "fj_o8y8qs": { isNoop: false, typeName: "SerializerMode", fnID: "fj", jitFnHash: "fj_o8y8qs", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_o8y8qs(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_o8y8qs(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_o8y8qs(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else if (dec0 === 3) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_GaK4SQ": { isNoop: true, typeName: "FnsDataCache", fnID: "fj", jitFnHash: "fj_GaK4SQ", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_GaK4SQ(v){return v}", createJitFn: function get_fj_GaK4SQ(utl) {
  return function fj_GaK4SQ(v) {
    return v;
  };
}, fn: void 0 }, "fj_RHNb9x": { isNoop: true, typeName: "JitCompiledFnData", fnID: "fj", jitFnHash: "fj_RHNb9x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_RHNb9x(v){return v}", createJitFn: function get_fj_RHNb9x(utl) {
  return function fj_RHNb9x(v) {
    return v;
  };
}, fn: void 0 }, "fj_o8YSce": { isNoop: true, typeName: "JitFnArgs", fnID: "fj", jitFnHash: "fj_o8YSce", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_o8YSce(v){return v}", createJitFn: function get_fj_o8YSce(utl) {
  return function fj_o8YSce(v) {
    return v;
  };
}, fn: void 0 }, "tj_CWm4ec": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_CWm4ec", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_CWm4ec(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, createJitFn: function get_tj_CWm4ec(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_CWm4ec(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "tj_Co6w6E": { isNoop: true, typeName: "Readonly", fnID: "tj", jitFnHash: "tj_Co6w6E", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_Co6w6E(v){return v}", createJitFn: function get_tj_Co6w6E(utl) {
  return function tj_Co6w6E(v) {
    return v;
  };
}, fn: void 0 }, "fj_CWm4ec": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_CWm4ec", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_CWm4ec(v){
 if (v.id !== undefined) {
 if (v.id?.length === 2 && Array.isArray(v.id) && typeof v.id[0] === 'number') {
 const dec0 = v.id[0]; v.id = v.id[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;};
 let desFn1 = utl.getDeserializeFn("RpcError");
 if (desFn1) {v = desFn1(v)}
 else if (desFn1 = utl.getSerializeClass("RpcError")) {v = new desFn1(v)}
 ; return v}`, createJitFn: function get_fj_CWm4ec(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_CWm4ec(v) {
    var _a;
    if (v.id !== void 0) {
      if (((_a = v.id) == null ? void 0 : _a.length) === 2 && Array.isArray(v.id) && typeof v.id[0] === "number") {
        const dec0 = v.id[0];
        v.id = v.id[1];
        if (dec0 === 0) ;
        else if (dec0 === 1) ;
        else {
          throw new Error(uErr0);
        }
      }
    }
    let desFn1 = utl.getDeserializeFn("RpcError");
    if (desFn1) {
      v = desFn1(v);
    } else if (desFn1 = utl.getSerializeClass("RpcError")) {
      v = new desFn1(v);
    }
    return v;
  };
}, fn: void 0 }, "fj_Co6w6E": { isNoop: true, typeName: "Readonly", fnID: "fj", jitFnHash: "fj_Co6w6E", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_Co6w6E(v){return v}", createJitFn: function get_fj_Co6w6E(utl) {
  return function fj_Co6w6E(v) {
    return v;
  };
}, fn: void 0 }, "fj_sw8k4O": { isNoop: false, jitDependencies: ["fj_MAkOqC", "fj_CWm4ec"], typeName: "union", fnID: "fj", jitFnHash: "fj_sw8k4O", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function fj_sw8k4O(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {v = fj_MAkOqC.fn(v)}else if (dec0 === 1) {v = fj_CWm4ec.fn(v)}else if (dec0 === 2) {v = v = undefined}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_sw8k4O(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
  const fj_CWm4ec = utl.getJIT("fj_CWm4ec");
  return function fj_sw8k4O(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) {
        v = fj_MAkOqC.fn(v);
      } else if (dec0 === 1) {
        v = fj_CWm4ec.fn(v);
      } else if (dec0 === 2) {
        v = v = void 0;
      } else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "sj_sw8k4O": { isNoop: false, jitDependencies: ["is_MAkOqC", "sj_MAkOqC", "tj_MAkOqC", "fj_MAkOqC", "is_CWm4ec", "sj_CWm4ec", "tj_CWm4ec", "fj_CWm4ec"], typeName: "union", fnID: "sj", jitFnHash: "sj_sw8k4O", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const is_MAkOqC = utl.getJIT("is_MAkOqC");
const sj_MAkOqC = utl.getJIT("sj_MAkOqC");
const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function sj_sw8k4O(v){if (v === undefined) {return ('[2,' + undefined + ']')}else if (typeof v === 'object' && v !== null && is_MAkOqC.fn(v)) {return '[0,' + sj_MAkOqC.fn(v) + ']'}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {return '[1,' + sj_CWm4ec.fn(v) + ']'}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_sw8k4O(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const sj_MAkOqC = utl.getJIT("sj_MAkOqC");
  utl.getJIT("tj_MAkOqC");
  utl.getJIT("fj_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
  utl.getJIT("tj_CWm4ec");
  utl.getJIT("fj_CWm4ec");
  return function sj_sw8k4O(v) {
    if (v === void 0) {
      return "[2,undefined]";
    } else if (typeof v === "object" && v !== null && is_MAkOqC.fn(v)) {
      return "[0," + sj_MAkOqC.fn(v) + "]";
    } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
      return "[1," + sj_CWm4ec.fn(v) + "]";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_MAkOqC": { isNoop: false, jitDependencies: ["sj_RnTfbD", "sj_JbF5vT", "sj_GaK4SQ"], typeName: "SerializableMethodsData", fnID: "sj", jitFnHash: "sj_MAkOqC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_RnTfbD = utl.getJIT("sj_RnTfbD");
const sj_JbF5vT = utl.getJIT("sj_JbF5vT");
const sj_GaK4SQ = utl.getJIT("sj_GaK4SQ"); return function sj_MAkOqC(v){return '{'+'"purFnDeps":'+sj_RnTfbD.fn(v.purFnDeps)+","+'"methods":'+sj_JbF5vT.fn(v.methods)+","+'"deps":'+sj_GaK4SQ.fn(v.deps)+'}'}`, createJitFn: function get_sj_MAkOqC(utl) {
  const sj_RnTfbD = utl.getJIT("sj_RnTfbD");
  const sj_JbF5vT = utl.getJIT("sj_JbF5vT");
  const sj_GaK4SQ = utl.getJIT("sj_GaK4SQ");
  return function sj_MAkOqC(v) {
    return '{"purFnDeps":' + sj_RnTfbD.fn(v.purFnDeps) + ',"methods":' + sj_JbF5vT.fn(v.methods) + ',"deps":' + sj_GaK4SQ.fn(v.deps) + "}";
  };
}, fn: void 0 }, "sj_RnTfbD": { isNoop: false, jitDependencies: ["sj_MiMk2w"], pureFnDependencies: ["mion::asJSONString"], typeName: "PureFnsDataCache", fnID: "sj", jitFnHash: "sj_RnTfbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_MiMk2w = utl.getJIT("sj_MiMk2w");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_RnTfbD(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_MiMk2w.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_RnTfbD(utl) {
  const sj_MiMk2w = utl.getJIT("sj_MiMk2w");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_RnTfbD(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_MiMk2w.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_MiMk2w": { isNoop: false, jitDependencies: ["sj_PzLLbD"], pureFnDependencies: ["mion::asJSONString"], typeName: "Record", fnID: "sj", jitFnHash: "sj_MiMk2w", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_PzLLbD = utl.getJIT("sj_PzLLbD");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_MiMk2w(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_PzLLbD.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_MiMk2w(utl) {
  const sj_PzLLbD = utl.getJIT("sj_PzLLbD");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_MiMk2w(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_PzLLbD.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_PzLLbD": { isNoop: false, jitDependencies: ["sj_IoMmkS"], typeName: "PureFunctionData", fnID: "sj", jitFnHash: "sj_PzLLbD", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_PzLLbD(v){return '{'+(v.pureFnDependencies === undefined ? '' : '"pureFnDependencies":'+sj_IoMmkS.fn(v.pureFnDependencies)+",")+'"namespace":'+JSON.stringify(v.namespace)+","+'"paramNames":'+sj_IoMmkS.fn(v.paramNames)+","+'"code":'+JSON.stringify(v.code)+","+'"fnName":'+JSON.stringify(v.fnName)+","+'"bodyHash":'+JSON.stringify(v.bodyHash)+'}'}`, createJitFn: function get_sj_PzLLbD(utl) {
  const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
  return function sj_PzLLbD(v) {
    return "{" + (v.pureFnDependencies === void 0 ? "" : '"pureFnDependencies":' + sj_IoMmkS.fn(v.pureFnDependencies) + ",") + '"namespace":' + JSON.stringify(v.namespace) + ',"paramNames":' + sj_IoMmkS.fn(v.paramNames) + ',"code":' + JSON.stringify(v.code) + ',"fnName":' + JSON.stringify(v.fnName) + ',"bodyHash":' + JSON.stringify(v.bodyHash) + "}";
  };
}, fn: void 0 }, "sj_IoMmkS": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_IoMmkS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function sj_IoMmkS(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }", createJitFn: function get_sj_IoMmkS(utl) {
  return function sj_IoMmkS(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = JSON.stringify(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_JbF5vT": { isNoop: false, jitDependencies: ["sj_gm4IYC"], pureFnDependencies: ["mion::asJSONString"], typeName: "MethodsCache", fnID: "sj", jitFnHash: "sj_JbF5vT", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_gm4IYC = utl.getJIT("sj_gm4IYC");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_JbF5vT(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_gm4IYC.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_JbF5vT(utl) {
  const sj_gm4IYC = utl.getJIT("sj_gm4IYC");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_JbF5vT(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_gm4IYC.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_gm4IYC": { isNoop: false, jitDependencies: ["sj_IoMmkS", "sj_Mwes8K", "sj_Hpfphl"], typeName: "MethodWithOptions", fnID: "sj", jitFnHash: "sj_gm4IYC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
const sj_Mwes8K = utl.getJIT("sj_Mwes8K");
const sj_Hpfphl = utl.getJIT("sj_Hpfphl"); return function sj_gm4IYC(v){return '{'+(v.paramNames === undefined ? '' : '"paramNames":'+sj_IoMmkS.fn(v.paramNames)+",")+(v.headersParam === undefined ? '' : '"headersParam":'+sj_Mwes8K.fn(v.headersParam)+",")+(v.headersReturn === undefined ? '' : '"headersReturn":'+sj_Mwes8K.fn(v.headersReturn)+",")+(v.middleFnIds === undefined ? '' : '"middleFnIds":'+sj_IoMmkS.fn(v.middleFnIds)+",")+'"type":'+v.type+","+'"id":'+JSON.stringify(v.id)+","+'"isAsync":'+(v.isAsync ? 'true' : 'false')+","+'"hasReturnData":'+(v.hasReturnData ? 'true' : 'false')+","+'"paramsJitHash":'+JSON.stringify(v.paramsJitHash)+","+'"returnJitHash":'+JSON.stringify(v.returnJitHash)+","+'"pointer":'+sj_IoMmkS.fn(v.pointer)+","+'"nestLevel":'+v.nestLevel+","+'"options":'+sj_Hpfphl.fn(v.options)+'}'}`, createJitFn: function get_sj_gm4IYC(utl) {
  const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
  const sj_Mwes8K = utl.getJIT("sj_Mwes8K");
  const sj_Hpfphl = utl.getJIT("sj_Hpfphl");
  return function sj_gm4IYC(v) {
    return "{" + (v.paramNames === void 0 ? "" : '"paramNames":' + sj_IoMmkS.fn(v.paramNames) + ",") + (v.headersParam === void 0 ? "" : '"headersParam":' + sj_Mwes8K.fn(v.headersParam) + ",") + (v.headersReturn === void 0 ? "" : '"headersReturn":' + sj_Mwes8K.fn(v.headersReturn) + ",") + (v.middleFnIds === void 0 ? "" : '"middleFnIds":' + sj_IoMmkS.fn(v.middleFnIds) + ",") + '"type":' + v.type + ',"id":' + JSON.stringify(v.id) + ',"isAsync":' + (v.isAsync ? "true" : "false") + ',"hasReturnData":' + (v.hasReturnData ? "true" : "false") + ',"paramsJitHash":' + JSON.stringify(v.paramsJitHash) + ',"returnJitHash":' + JSON.stringify(v.returnJitHash) + ',"pointer":' + sj_IoMmkS.fn(v.pointer) + ',"nestLevel":' + v.nestLevel + ',"options":' + sj_Hpfphl.fn(v.options) + "}";
  };
}, fn: void 0 }, "sj_Mwes8K": { isNoop: false, jitDependencies: ["sj_IoMmkS"], typeName: "HeadersMetaData", fnID: "sj", jitFnHash: "sj_Mwes8K", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_Mwes8K(v){return '{'+'"headerNames":'+sj_IoMmkS.fn(v.headerNames)+","+'"jitHash":'+JSON.stringify(v.jitHash)+'}'}`, createJitFn: function get_sj_Mwes8K(utl) {
  const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
  return function sj_Mwes8K(v) {
    return '{"headerNames":' + sj_IoMmkS.fn(v.headerNames) + ',"jitHash":' + JSON.stringify(v.jitHash) + "}";
  };
}, fn: void 0 }, "sj_Hpfphl": { isNoop: false, jitDependencies: ["sj_o8y8qs"], typeName: "RemoteMethodOpts", fnID: "sj", jitFnHash: "sj_Hpfphl", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_o8y8qs = utl.getJIT("sj_o8y8qs"); return function sj_Hpfphl(v){return (function(){const ns0 = [];if (v.runOnError !== undefined){ns0.push((v.runOnError === undefined ? '' : '"runOnError":'+(v.runOnError ? 'true' : 'false')))}if (v.validateParams !== undefined){ns0.push((v.validateParams === undefined ? '' : '"validateParams":'+(v.validateParams ? 'true' : 'false')))}if (v.validateReturn !== undefined){ns0.push((v.validateReturn === undefined ? '' : '"validateReturn":'+(v.validateReturn ? 'true' : 'false')))}if (v.description !== undefined){ns0.push((v.description === undefined ? '' : '"description":'+JSON.stringify(v.description)))}if (v.serializer !== undefined){ns0.push((v.serializer === undefined ? '' : '"serializer":'+sj_o8y8qs.fn(v.serializer)))}if (v.isMutation !== undefined){ns0.push((v.isMutation === undefined ? '' : '"isMutation":'+(v.isMutation ? 'true' : 'false')))}if (v.strictTypes !== undefined){ns0.push((v.strictTypes === undefined ? '' : '"strictTypes":'+(v.strictTypes ? 'true' : 'false')))};return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_Hpfphl(utl) {
  const sj_o8y8qs = utl.getJIT("sj_o8y8qs");
  return function sj_Hpfphl(v) {
    return (function() {
      const ns0 = [];
      if (v.runOnError !== void 0) {
        ns0.push(v.runOnError === void 0 ? "" : '"runOnError":' + (v.runOnError ? "true" : "false"));
      }
      if (v.validateParams !== void 0) {
        ns0.push(v.validateParams === void 0 ? "" : '"validateParams":' + (v.validateParams ? "true" : "false"));
      }
      if (v.validateReturn !== void 0) {
        ns0.push(v.validateReturn === void 0 ? "" : '"validateReturn":' + (v.validateReturn ? "true" : "false"));
      }
      if (v.description !== void 0) {
        ns0.push(v.description === void 0 ? "" : '"description":' + JSON.stringify(v.description));
      }
      if (v.serializer !== void 0) {
        ns0.push(v.serializer === void 0 ? "" : '"serializer":' + sj_o8y8qs.fn(v.serializer));
      }
      if (v.isMutation !== void 0) {
        ns0.push(v.isMutation === void 0 ? "" : '"isMutation":' + (v.isMutation ? "true" : "false"));
      }
      if (v.strictTypes !== void 0) {
        ns0.push(v.strictTypes === void 0 ? "" : '"strictTypes":' + (v.strictTypes ? "true" : "false"));
      }
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_o8y8qs": { isNoop: false, typeName: "SerializerMode", fnID: "sj", jitFnHash: "sj_o8y8qs", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_o8y8qs(v){if (v === "json") {return JSON.stringify(v)}else if (v === "binary") {return JSON.stringify(v)}else if (v === "stringifyJson") {return JSON.stringify(v)}else if (v === "optimistic") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_o8y8qs(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_o8y8qs(v) {
    if (v === "json") {
      return JSON.stringify(v);
    } else if (v === "binary") {
      return JSON.stringify(v);
    } else if (v === "stringifyJson") {
      return JSON.stringify(v);
    } else if (v === "optimistic") {
      return JSON.stringify(v);
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_GaK4SQ": { isNoop: false, jitDependencies: ["sj_RHNb9x"], pureFnDependencies: ["mion::asJSONString"], typeName: "FnsDataCache", fnID: "sj", jitFnHash: "sj_GaK4SQ", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_RHNb9x = utl.getJIT("sj_RHNb9x");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_GaK4SQ(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_RHNb9x.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_GaK4SQ(utl) {
  const sj_RHNb9x = utl.getJIT("sj_RHNb9x");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_GaK4SQ(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_RHNb9x.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_RHNb9x": { isNoop: false, jitDependencies: ["sj_IoMmkS", "sj_o8YSce"], typeName: "JitCompiledFnData", fnID: "sj", jitFnHash: "sj_RHNb9x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
const sj_o8YSce = utl.getJIT("sj_o8YSce"); return function sj_RHNb9x(v){return '{'+(v.isNoop === undefined ? '' : '"isNoop":'+(v.isNoop ? 'true' : 'false')+",")+(v.jitDependencies === undefined ? '' : '"jitDependencies":'+sj_IoMmkS.fn(v.jitDependencies)+",")+(v.pureFnDependencies === undefined ? '' : '"pureFnDependencies":'+sj_IoMmkS.fn(v.pureFnDependencies)+",")+(v.paramNames === undefined ? '' : '"paramNames":'+sj_IoMmkS.fn(v.paramNames)+",")+'"typeName":'+JSON.stringify(v.typeName)+","+'"fnID":'+JSON.stringify(v.fnID)+","+'"jitFnHash":'+JSON.stringify(v.jitFnHash)+","+'"args":'+sj_o8YSce.fn(v.args)+","+'"defaultParamValues":'+sj_o8YSce.fn(v.defaultParamValues)+","+'"code":'+JSON.stringify(v.code)+'}'}`, createJitFn: function get_sj_RHNb9x(utl) {
  const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
  const sj_o8YSce = utl.getJIT("sj_o8YSce");
  return function sj_RHNb9x(v) {
    return "{" + (v.isNoop === void 0 ? "" : '"isNoop":' + (v.isNoop ? "true" : "false") + ",") + (v.jitDependencies === void 0 ? "" : '"jitDependencies":' + sj_IoMmkS.fn(v.jitDependencies) + ",") + (v.pureFnDependencies === void 0 ? "" : '"pureFnDependencies":' + sj_IoMmkS.fn(v.pureFnDependencies) + ",") + (v.paramNames === void 0 ? "" : '"paramNames":' + sj_IoMmkS.fn(v.paramNames) + ",") + '"typeName":' + JSON.stringify(v.typeName) + ',"fnID":' + JSON.stringify(v.fnID) + ',"jitFnHash":' + JSON.stringify(v.jitFnHash) + ',"args":' + sj_o8YSce.fn(v.args) + ',"defaultParamValues":' + sj_o8YSce.fn(v.defaultParamValues) + ',"code":' + JSON.stringify(v.code) + "}";
  };
}, fn: void 0 }, "sj_o8YSce": { isNoop: false, pureFnDependencies: ["mion::asJSONString"], typeName: "JitFnArgs", fnID: "sj", jitFnHash: "sj_o8YSce", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_o8YSce(v){return '{'+(function(){
 const ls0 = [];
 for (const p0 in v) {
 if ("vλl" === p0) continue;
 if (p0 !== undefined) ls0.push(zT3pfXdp(p0) + ':' + JSON.stringify(v[p0]));
 }
 if (!ls0.length) return '';
 return ls0.join(',')+",";
 })()+"\\"vλl\\""+':'+JSON.stringify(v["vλl"])+'}'}`, createJitFn: function get_sj_o8YSce(utl) {
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_o8YSce(v) {
    return "{" + (function() {
      const ls0 = [];
      for (const p0 in v) {
        if ("vλl" === p0) continue;
        if (p0 !== void 0) ls0.push(zT3pfXdp(p0) + ":" + JSON.stringify(v[p0]));
      }
      if (!ls0.length) return "";
      return ls0.join(",") + ",";
    })() + '"vλl":' + JSON.stringify(v["vλl"]) + "}";
  };
}, fn: void 0 }, "sj_CWm4ec": { isNoop: false, jitDependencies: ["sj_Co6w6E"], typeName: "RpcError", fnID: "sj", jitFnHash: "sj_CWm4ec", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_CWm4ec(v){return '{'+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, createJitFn: function get_sj_CWm4ec(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
  return function sj_CWm4ec(v) {
    return "{" + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "sj_Co6w6E": { isNoop: false, pureFnDependencies: ["mion::asJSONString"], typeName: "Readonly", fnID: "sj", jitFnHash: "sj_Co6w6E", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_Co6w6E(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + JSON.stringify(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_Co6w6E(utl) {
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_Co6w6E(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + JSON.stringify(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "is_cyiqwa": { isNoop: false, jitDependencies: ["is_bpJFJt"], typeName: "Record", fnID: "is", jitFnHash: "is_cyiqwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_bpJFJt = utl.getJIT("is_bpJFJt"); return function is_cyiqwa(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){ if (!(is_bpJFJt.fn(v[p0]))) return false;} return true;})())}`, createJitFn: function get_is_cyiqwa(utl) {
  const is_bpJFJt = utl.getJIT("is_bpJFJt");
  return function is_cyiqwa(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_bpJFJt.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_bpJFJt": { isNoop: false, jitDependencies: ["is_Co6w6E"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "RpcError", fnID: "is", jitFnHash: "is_bpJFJt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_bpJFJt = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_bpJFJt(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && typeof v.type === 'string' && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_bpJFJt))}`, createJitFn: function get_is_bpJFJt(utl) {
  const is_Co6w6E = utl.getJIT("is_Co6w6E");
  const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_bpJFJt(v) {
    return typeof v === "object" && v !== null && v["mion@isΣrrθr"] === true && typeof v.type === "string" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) && (v.statusCode === void 0 || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_bpJFJt);
  };
}, fn: void 0 }, "te_cyiqwa": { isNoop: false, jitDependencies: ["te_bpJFJt"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "Record", fnID: "te", jitFnHash: "te_cyiqwa", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_bpJFJt = utl.getJIT("te_bpJFJt");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_cyiqwa(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 for (const p0 in v) { pth.push(p0); te_bpJFJt.fn(v[p0],pth,er); pth.splice(-1);}
 
 }
 ; return er}`, createJitFn: function get_te_cyiqwa(utl) {
  const te_bpJFJt = utl.getJIT("te_bpJFJt");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_cyiqwa(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]"))) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      for (const p0 in v) {
        pth.push(p0);
        te_bpJFJt.fn(v[p0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_bpJFJt": { isNoop: false, jitDependencies: ["te_Co6w6E"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "RpcError", fnID: "te", jitFnHash: "te_bpJFJt", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_Co6w6E = utl.getJIT("te_Co6w6E");
const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_bpJFJt = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_bpJFJt(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (typeof v.type !== 'string') Iqa2M8Ms(pth,er,"string",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_Co6w6E.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 
 const unk0 = lTBP5VNV(v, k_bpJFJt);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_bpJFJt(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_Co6w6E = utl.getJIT("te_Co6w6E");
  const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_bpJFJt(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "class");
    } else {
      if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth, er, "literal", ["mion@isΣrrθr"]);
      if (typeof v.type !== "string") Iqa2M8Ms(pth, er, "string", ["type"]);
      if (v.id !== void 0) {
        if (!(Number.isFinite(v.id) || typeof v.id === "string")) Iqa2M8Ms(pth, er, "union", ["id"]);
      }
      if (typeof v.publicMessage !== "string") Iqa2M8Ms(pth, er, "string", ["publicMessage"]);
      if (v.errorData !== void 0) {
        pth.push("errorData");
        te_Co6w6E.fn(v.errorData, pth, er);
        pth.splice(-1);
      }
      if (v.statusCode !== void 0) {
        if (!Number.isFinite(v.statusCode)) Iqa2M8Ms(pth, er, "number", ["statusCode"]);
      }
      const unk0 = lTBP5VNV(v, k_bpJFJt);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_Co6w6E": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr"], typeName: "Readonly", fnID: "te", jitFnHash: "te_Co6w6E", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Co6w6E(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 
 
 }
 ; return er}`, createJitFn: function get_te_Co6w6E(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_Co6w6E(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]"))) {
      Iqa2M8Ms(pth, er, "object");
    }
    return er;
  };
}, fn: void 0 }, "tj_cyiqwa": { isNoop: false, jitDependencies: ["tj_bpJFJt"], typeName: "Record", fnID: "tj", jitFnHash: "tj_cyiqwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_bpJFJt = utl.getJIT("tj_bpJFJt"); return function tj_cyiqwa(v){for (const p0 in v){ v[p0] = tj_bpJFJt.fn(v[p0]);} return v}`, createJitFn: function get_tj_cyiqwa(utl) {
  const tj_bpJFJt = utl.getJIT("tj_bpJFJt");
  return function tj_cyiqwa(v) {
    for (const p0 in v) {
      v[p0] = tj_bpJFJt.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_bpJFJt": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_bpJFJt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_bpJFJt(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, createJitFn: function get_tj_bpJFJt(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_bpJFJt(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_cyiqwa": { isNoop: false, jitDependencies: ["fj_bpJFJt"], typeName: "Record", fnID: "fj", jitFnHash: "fj_cyiqwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_bpJFJt = utl.getJIT("fj_bpJFJt"); return function fj_cyiqwa(v){for (const p0 in v){ v[p0] = fj_bpJFJt.fn(v[p0]);} return v}`, createJitFn: function get_fj_cyiqwa(utl) {
  const fj_bpJFJt = utl.getJIT("fj_bpJFJt");
  return function fj_cyiqwa(v) {
    for (const p0 in v) {
      v[p0] = fj_bpJFJt.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_bpJFJt": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_bpJFJt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_bpJFJt(v){
 if (v.id !== undefined) {
 if (v.id?.length === 2 && Array.isArray(v.id) && typeof v.id[0] === 'number') {
 const dec0 = v.id[0]; v.id = v.id[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;};
 let desFn1 = utl.getDeserializeFn("RpcError");
 if (desFn1) {v = desFn1(v)}
 else if (desFn1 = utl.getSerializeClass("RpcError")) {v = new desFn1(v)}
 ; return v}`, createJitFn: function get_fj_bpJFJt(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_bpJFJt(v) {
    var _a;
    if (v.id !== void 0) {
      if (((_a = v.id) == null ? void 0 : _a.length) === 2 && Array.isArray(v.id) && typeof v.id[0] === "number") {
        const dec0 = v.id[0];
        v.id = v.id[1];
        if (dec0 === 0) ;
        else if (dec0 === 1) ;
        else {
          throw new Error(uErr0);
        }
      }
    }
    let desFn1 = utl.getDeserializeFn("RpcError");
    if (desFn1) {
      v = desFn1(v);
    } else if (desFn1 = utl.getSerializeClass("RpcError")) {
      v = new desFn1(v);
    }
    return v;
  };
}, fn: void 0 }, "sj_cyiqwa": { isNoop: false, jitDependencies: ["sj_bpJFJt"], pureFnDependencies: ["mion::asJSONString"], typeName: "Record", fnID: "sj", jitFnHash: "sj_cyiqwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_bpJFJt = utl.getJIT("sj_bpJFJt");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_cyiqwa(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_bpJFJt.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, createJitFn: function get_sj_cyiqwa(utl) {
  const sj_bpJFJt = utl.getJIT("sj_bpJFJt");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_cyiqwa(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_bpJFJt.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_bpJFJt": { isNoop: false, jitDependencies: ["sj_Co6w6E"], typeName: "RpcError", fnID: "sj", jitFnHash: "sj_bpJFJt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_bpJFJt(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, createJitFn: function get_sj_bpJFJt(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
  return function sj_bpJFJt(v) {
    return "{" + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "is_OyeKwa": { isNoop: false, jitDependencies: ["is_Co6w6E"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "RpcError", fnID: "is", jitFnHash: "is_OyeKwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_OyeKwa = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_OyeKwa(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && v.type === "route-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_OyeKwa))}`, createJitFn: function get_is_OyeKwa(utl) {
  const is_Co6w6E = utl.getJIT("is_Co6w6E");
  const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_OyeKwa(v) {
    return typeof v === "object" && v !== null && v["mion@isΣrrθr"] === true && v.type === "route-not-found" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) && (v.statusCode === void 0 || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_OyeKwa);
  };
}, fn: void 0 }, "te_OyeKwa": { isNoop: false, jitDependencies: ["te_Co6w6E"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "RpcError", fnID: "te", jitFnHash: "te_OyeKwa", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_Co6w6E = utl.getJIT("te_Co6w6E");
const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_OyeKwa = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_OyeKwa(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (v.type !== "route-not-found") Iqa2M8Ms(pth,er,"literal",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_Co6w6E.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 
 const unk0 = lTBP5VNV(v, k_OyeKwa);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_OyeKwa(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_Co6w6E = utl.getJIT("te_Co6w6E");
  const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_OyeKwa(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "class");
    } else {
      if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth, er, "literal", ["mion@isΣrrθr"]);
      if (v.type !== "route-not-found") Iqa2M8Ms(pth, er, "literal", ["type"]);
      if (v.id !== void 0) {
        if (!(Number.isFinite(v.id) || typeof v.id === "string")) Iqa2M8Ms(pth, er, "union", ["id"]);
      }
      if (typeof v.publicMessage !== "string") Iqa2M8Ms(pth, er, "string", ["publicMessage"]);
      if (v.errorData !== void 0) {
        pth.push("errorData");
        te_Co6w6E.fn(v.errorData, pth, er);
        pth.splice(-1);
      }
      if (v.statusCode !== void 0) {
        if (!Number.isFinite(v.statusCode)) Iqa2M8Ms(pth, er, "number", ["statusCode"]);
      }
      const unk0 = lTBP5VNV(v, k_OyeKwa);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_OyeKwa": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_OyeKwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_OyeKwa(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, createJitFn: function get_tj_OyeKwa(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_OyeKwa(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_OyeKwa": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_OyeKwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_OyeKwa(v){
 if (v.id !== undefined) {
 if (v.id?.length === 2 && Array.isArray(v.id) && typeof v.id[0] === 'number') {
 const dec0 = v.id[0]; v.id = v.id[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;};
 let desFn1 = utl.getDeserializeFn("RpcError");
 if (desFn1) {v = desFn1(v)}
 else if (desFn1 = utl.getSerializeClass("RpcError")) {v = new desFn1(v)}
 ; return v}`, createJitFn: function get_fj_OyeKwa(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_OyeKwa(v) {
    var _a;
    if (v.id !== void 0) {
      if (((_a = v.id) == null ? void 0 : _a.length) === 2 && Array.isArray(v.id) && typeof v.id[0] === "number") {
        const dec0 = v.id[0];
        v.id = v.id[1];
        if (dec0 === 0) ;
        else if (dec0 === 1) ;
        else {
          throw new Error(uErr0);
        }
      }
    }
    let desFn1 = utl.getDeserializeFn("RpcError");
    if (desFn1) {
      v = desFn1(v);
    } else if (desFn1 = utl.getSerializeClass("RpcError")) {
      v = new desFn1(v);
    }
    return v;
  };
}, fn: void 0 }, "sj_OyeKwa": { isNoop: false, jitDependencies: ["sj_Co6w6E"], typeName: "RpcError", fnID: "sj", jitFnHash: "sj_OyeKwa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_OyeKwa(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, createJitFn: function get_sj_OyeKwa(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
  return function sj_OyeKwa(v) {
    return "{" + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "is_N5pt7p": { isNoop: false, jitDependencies: ["is_v7nFN3"], typeName: "params", fnID: "is", jitFnHash: "is_N5pt7p", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_v7nFN3 = utl.getJIT("is_v7nFN3"); return function is_N5pt7p(v){return (v.length <= 2 && is_v7nFN3.fn(v[0]) && (v[1] === undefined || (typeof v[1] === 'boolean')))}`, createJitFn: function get_is_N5pt7p(utl) {
  const is_v7nFN3 = utl.getJIT("is_v7nFN3");
  return function is_N5pt7p(v) {
    return v.length <= 2 && is_v7nFN3.fn(v[0]) && (v[1] === void 0 || typeof v[1] === "boolean");
  };
}, fn: void 0 }, "te_N5pt7p": { isNoop: false, jitDependencies: ["te_v7nFN3"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "params", fnID: "te", jitFnHash: "te_N5pt7p", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_v7nFN3 = utl.getJIT("te_v7nFN3");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_N5pt7p(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_v7nFN3.fn(v[0],pth,er); pth.splice(-1);if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`, createJitFn: function get_te_N5pt7p(utl) {
  const te_v7nFN3 = utl.getJIT("te_v7nFN3");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_N5pt7p(v, pth = [], er = []) {
    if (v.length > 2) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_v7nFN3.fn(v[0], pth, er);
      pth.splice(-1);
      if (v[1] !== void 0) {
        if (typeof v[1] !== "boolean") Iqa2M8Ms(pth, er, "boolean", [1]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_N5pt7p": { isNoop: false, typeName: "params", fnID: "tj", jitFnHash: "tj_N5pt7p", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_N5pt7p(v){if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}", createJitFn: function get_tj_N5pt7p(utl) {
  return function tj_N5pt7p(v) {
    if (v[1] === void 0) {
      if (v.length > 1) v[1] = null;
    }
    return v;
  };
}, fn: void 0 }, "fj_N5pt7p": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_N5pt7p", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_N5pt7p(v){if (v[1] === null ) {v[1] = undefined} return v}", createJitFn: function get_fj_N5pt7p(utl) {
  return function fj_N5pt7p(v) {
    if (v[1] === null) {
      v[1] = void 0;
    }
    return v;
  };
}, fn: void 0 }, "sj_N5pt7p": { isNoop: false, jitDependencies: ["sj_v7nFN3"], typeName: "params", fnID: "sj", jitFnHash: "sj_N5pt7p", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_v7nFN3 = utl.getJIT("sj_v7nFN3"); return function sj_N5pt7p(v){return '['+sj_v7nFN3.fn(v[0])+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}`, createJitFn: function get_sj_N5pt7p(utl) {
  const sj_v7nFN3 = utl.getJIT("sj_v7nFN3");
  return function sj_N5pt7p(v) {
    return "[" + sj_v7nFN3.fn(v[0]) + (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) + "]";
  };
}, fn: void 0 }, "is_RVhHjV": { isNoop: false, jitDependencies: ["is_MAkOqC", "is_CWm4ec"], typeName: "union", fnID: "is", jitFnHash: "is_RVhHjV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_MAkOqC = utl.getJIT("is_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec"); return function is_RVhHjV(v){return ((typeof v === 'object' && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v))))}`, createJitFn: function get_is_RVhHjV(utl) {
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  return function is_RVhHjV(v) {
    return typeof v === "object" && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v));
  };
}, fn: void 0 }, "te_RVhHjV": { isNoop: false, jitDependencies: ["is_MAkOqC", "is_CWm4ec"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "union", fnID: "te", jitFnHash: "te_RVhHjV", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_MAkOqC = utl.getJIT("is_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_RVhHjV(v,pth=[],er=[]){if (!((typeof v === 'object' && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v))))) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_RVhHjV(utl) {
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_RVhHjV(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (is_MAkOqC.fn(v) || is_CWm4ec.fn(v)))) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "tj_RVhHjV": { isNoop: false, jitDependencies: ["is_MAkOqC", "tj_MAkOqC", "fj_MAkOqC", "is_CWm4ec", "tj_CWm4ec", "fj_CWm4ec"], typeName: "union", fnID: "tj", jitFnHash: "tj_RVhHjV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const is_MAkOqC = utl.getJIT("is_MAkOqC");
const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function tj_RVhHjV(v){if (typeof v === 'object' && v !== null && is_MAkOqC.fn(v)) {v = tj_MAkOqC.fn(v); v = [0, v]}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {v = tj_CWm4ec.fn(v); v = [1, v]}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_RVhHjV(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
  utl.getJIT("fj_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
  utl.getJIT("fj_CWm4ec");
  return function tj_RVhHjV(v) {
    if (typeof v === "object" && v !== null && is_MAkOqC.fn(v)) {
      v = tj_MAkOqC.fn(v);
      v = [0, v];
    } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
      v = tj_CWm4ec.fn(v);
      v = [1, v];
    } else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "fj_RVhHjV": { isNoop: false, jitDependencies: ["fj_MAkOqC", "fj_CWm4ec"], typeName: "union", fnID: "fj", jitFnHash: "fj_RVhHjV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function fj_RVhHjV(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {v = fj_MAkOqC.fn(v)}else if (dec0 === 1) {v = fj_CWm4ec.fn(v)}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_RVhHjV(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
  const fj_CWm4ec = utl.getJIT("fj_CWm4ec");
  return function fj_RVhHjV(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) {
        v = fj_MAkOqC.fn(v);
      } else if (dec0 === 1) {
        v = fj_CWm4ec.fn(v);
      } else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "sj_RVhHjV": { isNoop: false, jitDependencies: ["is_MAkOqC", "sj_MAkOqC", "tj_MAkOqC", "fj_MAkOqC", "is_CWm4ec", "sj_CWm4ec", "tj_CWm4ec", "fj_CWm4ec"], typeName: "union", fnID: "sj", jitFnHash: "sj_RVhHjV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const is_MAkOqC = utl.getJIT("is_MAkOqC");
const sj_MAkOqC = utl.getJIT("sj_MAkOqC");
const tj_MAkOqC = utl.getJIT("tj_MAkOqC");
const fj_MAkOqC = utl.getJIT("fj_MAkOqC");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function sj_RVhHjV(v){if (typeof v === 'object' && v !== null && is_MAkOqC.fn(v)) {return '[0,' + sj_MAkOqC.fn(v) + ']'}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {return '[1,' + sj_CWm4ec.fn(v) + ']'}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_RVhHjV(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const is_MAkOqC = utl.getJIT("is_MAkOqC");
  const sj_MAkOqC = utl.getJIT("sj_MAkOqC");
  utl.getJIT("tj_MAkOqC");
  utl.getJIT("fj_MAkOqC");
  const is_CWm4ec = utl.getJIT("is_CWm4ec");
  const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
  utl.getJIT("tj_CWm4ec");
  utl.getJIT("fj_CWm4ec");
  return function sj_RVhHjV(v) {
    if (typeof v === "object" && v !== null && is_MAkOqC.fn(v)) {
      return "[0," + sj_MAkOqC.fn(v) + "]";
    } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
      return "[1," + sj_CWm4ec.fn(v) + "]";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "is_HZ3NL5": { isNoop: false, typeName: "string", fnID: "is", jitFnHash: "is_HZ3NL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function is_HZ3NL5(v){return typeof v === 'string'}", createJitFn: function get_is_HZ3NL5(utl) {
  return function is_HZ3NL5(v) {
    return typeof v === "string";
  };
}, fn: void 0 }, "te_HZ3NL5": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr"], typeName: "string", fnID: "te", jitFnHash: "te_HZ3NL5", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_HZ3NL5(v,pth=[],er=[]){if (typeof v !== 'string') Iqa2M8Ms(pth,er,"string"); return er}`, createJitFn: function get_te_HZ3NL5(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_HZ3NL5(v, pth = [], er = []) {
    if (typeof v !== "string") Iqa2M8Ms(pth, er, "string");
    return er;
  };
}, fn: void 0 }, "tj_HZ3NL5": { isNoop: true, typeName: "string", fnID: "tj", jitFnHash: "tj_HZ3NL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_HZ3NL5(v){return v}", createJitFn: function get_tj_HZ3NL5(utl) {
  return function tj_HZ3NL5(v) {
    return v;
  };
}, fn: void 0 }, "fj_HZ3NL5": { isNoop: true, typeName: "string", fnID: "fj", jitFnHash: "fj_HZ3NL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_HZ3NL5(v){return v}", createJitFn: function get_fj_HZ3NL5(utl) {
  return function fj_HZ3NL5(v) {
    return v;
  };
}, fn: void 0 }, "sj_HZ3NL5": { isNoop: false, typeName: "string", fnID: "sj", jitFnHash: "sj_HZ3NL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function sj_HZ3NL5(v){return JSON.stringify(v)}", createJitFn: function get_sj_HZ3NL5(utl) {
  return function sj_HZ3NL5(v) {
    return JSON.stringify(v);
  };
}, fn: void 0 }, "is_R35XJV": { isNoop: false, jitDependencies: ["is_xrrn1f"], typeName: "params", fnID: "is", jitFnHash: "is_R35XJV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_xrrn1f = utl.getJIT("is_xrrn1f"); return function is_R35XJV(v){return (v.length <= 1 && is_xrrn1f.fn(v[0]))}`, createJitFn: function get_is_R35XJV(utl) {
  const is_xrrn1f = utl.getJIT("is_xrrn1f");
  return function is_R35XJV(v) {
    return v.length <= 1 && is_xrrn1f.fn(v[0]);
  };
}, fn: void 0 }, "is_xrrn1f": { isNoop: false, jitDependencies: ["is_TlPnL5", "is_SyisaY", "is_GUgUK4", "is_mguG4C", "is_TXdDrb", "is_v7nFN3"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "User", fnID: "is", jitFnHash: "is_xrrn1f", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_nhdn7V = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const is_TlPnL5 = utl.getJIT("is_TlPnL5");
const is_SyisaY = utl.getJIT("is_SyisaY");
const is_GUgUK4 = utl.getJIT("is_GUgUK4");
const is_mguG4C = utl.getJIT("is_mguG4C");
const is_TXdDrb = utl.getJIT("is_TXdDrb");
const is_v7nFN3 = utl.getJIT("is_v7nFN3");
const k_xrrn1f = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_xrrn1f = []; return function is_xrrn1f(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_nhdn7V)) && is_TlPnL5.fn(v.role) && is_SyisaY.fn(v.status) && is_GUgUK4.fn(v.address) && is_mguG4C.fn(v.paymentMethods) && is_TXdDrb.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_v7nFN3.fn(v.tags) && !NVlxlJHR(v, k_xrrn1f))}`, createJitFn: function get_is_xrrn1f(utl) {
  const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const is_TlPnL5 = utl.getJIT("is_TlPnL5");
  const is_SyisaY = utl.getJIT("is_SyisaY");
  const is_GUgUK4 = utl.getJIT("is_GUgUK4");
  const is_mguG4C = utl.getJIT("is_mguG4C");
  const is_TXdDrb = utl.getJIT("is_TXdDrb");
  const is_v7nFN3 = utl.getJIT("is_v7nFN3");
  const k_xrrn1f = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
  return function is_xrrn1f(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.username === "string" && typeof v.email === "string" && (typeof v.profile === "object" && v.profile !== null && typeof v.profile.firstName === "string" && typeof v.profile.lastName === "string" && typeof v.profile.displayName === "string" && (v.profile.bio === void 0 || typeof v.profile.bio === "string") && (v.profile.avatarUrl === void 0 || typeof v.profile.avatarUrl === "string") && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_nhdn7V)) && is_TlPnL5.fn(v.role) && is_SyisaY.fn(v.status) && is_GUgUK4.fn(v.address) && is_mguG4C.fn(v.paymentMethods) && is_TXdDrb.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === void 0 || v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())) && is_v7nFN3.fn(v.tags) && !NVlxlJHR(v, k_xrrn1f);
  };
}, fn: void 0 }, "is_TlPnL5": { isNoop: false, typeName: "UserRole", fnID: "is", jitFnHash: "is_TlPnL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_TlPnL5(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}`, createJitFn: function get_is_TlPnL5(utl) {
  return function is_TlPnL5(v) {
    return v === "admin" || v === "user" || v === "guest" || v === "moderator";
  };
}, fn: void 0 }, "is_SyisaY": { isNoop: false, typeName: "AccountStatus", fnID: "is", jitFnHash: "is_SyisaY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_SyisaY(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}`, createJitFn: function get_is_SyisaY(utl) {
  return function is_SyisaY(v) {
    return v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated";
  };
}, fn: void 0 }, "is_GUgUK4": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "Address", fnID: "is", jitFnHash: "is_GUgUK4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
const kA_GUgUK4 = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_GUgUK4(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string' && !NVlxlJHR(v, k_GUgUK4))}`, createJitFn: function get_is_GUgUK4(utl) {
  const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_GUgUK4(v) {
    return typeof v === "object" && v !== null && typeof v.street === "string" && typeof v.city === "string" && typeof v.state === "string" && typeof v.zipCode === "string" && typeof v.country === "string" && !NVlxlJHR(v, k_GUgUK4);
  };
}, fn: void 0 }, "is_mguG4C": { isNoop: false, jitDependencies: ["is_Njl7xz"], typeName: "array", fnID: "is", jitFnHash: "is_mguG4C", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_Njl7xz = utl.getJIT("is_Njl7xz"); return function is_mguG4C(v){
 if (!Array.isArray(v)) return false;
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = is_Njl7xz.fn(v[i0]);
 if (!(res0)) return false;
 }
 return true;
 }`, createJitFn: function get_is_mguG4C(utl) {
  const is_Njl7xz = utl.getJIT("is_Njl7xz");
  return function is_mguG4C(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = is_Njl7xz.fn(v[i0]);
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_Njl7xz": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "is", jitFnHash: "is_Njl7xz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function is_Njl7xz(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK)) || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4)) || (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY)))))}`, createJitFn: function get_is_Njl7xz(utl) {
  const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_U42ywY = ["type", "email"];
  return function is_Njl7xz(v) {
    return typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_M2okYK) || v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_WwEqA4) || v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_U42ywY));
  };
}, fn: void 0 }, "is_TXdDrb": { isNoop: false, jitDependencies: ["is_YyoQ6q"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "UserPreferences", fnID: "is", jitFnHash: "is_TXdDrb", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_YyoQ6q = utl.getJIT("is_YyoQ6q");
const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
const kA_TXdDrb = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_TXdDrb(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_YyoQ6q.fn(v.notifications) && !NVlxlJHR(v, k_TXdDrb))}`, createJitFn: function get_is_TXdDrb(utl) {
  const is_YyoQ6q = utl.getJIT("is_YyoQ6q");
  const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_TXdDrb(v) {
    return typeof v === "object" && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === "string" && typeof v.timezone === "string" && is_YyoQ6q.fn(v.notifications) && !NVlxlJHR(v, k_TXdDrb);
  };
}, fn: void 0 }, "is_YyoQ6q": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "NotificationSettings", fnID: "is", jitFnHash: "is_YyoQ6q", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_YyoQ6q = ["email", "sms", "push", "frequency"];
const kA_YyoQ6q = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_YyoQ6q(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_YyoQ6q))}`, createJitFn: function get_is_YyoQ6q(utl) {
  const k_YyoQ6q = ["email", "sms", "push", "frequency"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_YyoQ6q(v) {
    return typeof v === "object" && v !== null && typeof v.email === "boolean" && typeof v.sms === "boolean" && typeof v.push === "boolean" && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_YyoQ6q);
  };
}, fn: void 0 }, "te_R35XJV": { isNoop: false, jitDependencies: ["te_xrrn1f"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "params", fnID: "te", jitFnHash: "te_R35XJV", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_xrrn1f = utl.getJIT("te_xrrn1f");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_R35XJV(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_xrrn1f.fn(v[0],pth,er); pth.splice(-1);} return er}`, createJitFn: function get_te_R35XJV(utl) {
  const te_xrrn1f = utl.getJIT("te_xrrn1f");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_R35XJV(v, pth = [], er = []) {
    if (v.length > 1) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_xrrn1f.fn(v[0], pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_xrrn1f": { isNoop: false, jitDependencies: ["te_TlPnL5", "te_SyisaY", "te_GUgUK4", "te_mguG4C", "te_TXdDrb", "te_v7nFN3"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "User", fnID: "te", jitFnHash: "te_xrrn1f", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_nhdn7V = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const te_TlPnL5 = utl.getJIT("te_TlPnL5");
const te_SyisaY = utl.getJIT("te_SyisaY");
const te_GUgUK4 = utl.getJIT("te_GUgUK4");
const te_mguG4C = utl.getJIT("te_mguG4C");
const te_TXdDrb = utl.getJIT("te_TXdDrb");
const te_v7nFN3 = utl.getJIT("te_v7nFN3");
const k_xrrn1f = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_xrrn1f = []; return function te_xrrn1f(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.username !== 'string') Iqa2M8Ms(pth,er,"string",["username"]);if (typeof v.email !== 'string') Iqa2M8Ms(pth,er,"string",["email"]);
 if (!(typeof v.profile === 'object' && v.profile !== null)) {
 Iqa2M8Ms(pth,er,"object",["profile"]);
 } else {
 if (typeof v.profile.firstName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","firstName"]);if (typeof v.profile.lastName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","lastName"]);if (typeof v.profile.displayName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","displayName"]);if (v.profile.bio !== undefined) {if (typeof v.profile.bio !== 'string') Iqa2M8Ms(pth,er,"string",["profile","bio"]);};if (v.profile.avatarUrl !== undefined) {if (typeof v.profile.avatarUrl !== 'string') Iqa2M8Ms(pth,er,"string",["profile","avatarUrl"]);};if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth,er,"date",["profile","dateOfBirth"]);
 
 const unk0 = lTBP5VNV(v.profile, k_nhdn7V);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",["profile",ky0])}}
 
 }
 ;pth.push("role"); te_TlPnL5.fn(v.role,pth,er); pth.splice(-1);pth.push("status"); te_SyisaY.fn(v.status,pth,er); pth.splice(-1);pth.push("address"); te_GUgUK4.fn(v.address,pth,er); pth.splice(-1);pth.push("paymentMethods"); te_mguG4C.fn(v.paymentMethods,pth,er); pth.splice(-1);pth.push("preferences"); te_TXdDrb.fn(v.preferences,pth,er); pth.splice(-1);if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth,er,"date",["createdAt"]);if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth,er,"date",["updatedAt"]);if (v.lastLoginAt !== undefined) {if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth,er,"date",["lastLoginAt"]);};pth.push("tags"); te_v7nFN3.fn(v.tags,pth,er); pth.splice(-1);
 
 const unk1 = lTBP5VNV(v, k_xrrn1f);
 if (unk1) {for (const ky1 of unk1) {Iqa2M8Ms(pth,er,"never",[ky1])}}
 
 }
 ; return er}`, createJitFn: function get_te_xrrn1f(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  const te_TlPnL5 = utl.getJIT("te_TlPnL5");
  const te_SyisaY = utl.getJIT("te_SyisaY");
  const te_GUgUK4 = utl.getJIT("te_GUgUK4");
  const te_mguG4C = utl.getJIT("te_mguG4C");
  const te_TXdDrb = utl.getJIT("te_TXdDrb");
  const te_v7nFN3 = utl.getJIT("te_v7nFN3");
  const k_xrrn1f = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
  return function te_xrrn1f(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.username !== "string") Iqa2M8Ms(pth, er, "string", ["username"]);
      if (typeof v.email !== "string") Iqa2M8Ms(pth, er, "string", ["email"]);
      if (!(typeof v.profile === "object" && v.profile !== null)) {
        Iqa2M8Ms(pth, er, "object", ["profile"]);
      } else {
        if (typeof v.profile.firstName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "firstName"]);
        if (typeof v.profile.lastName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "lastName"]);
        if (typeof v.profile.displayName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "displayName"]);
        if (v.profile.bio !== void 0) {
          if (typeof v.profile.bio !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "bio"]);
        }
        if (v.profile.avatarUrl !== void 0) {
          if (typeof v.profile.avatarUrl !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "avatarUrl"]);
        }
        if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth, er, "date", ["profile", "dateOfBirth"]);
        const unk0 = lTBP5VNV(v.profile, k_nhdn7V);
        if (unk0) {
          for (const ky0 of unk0) {
            Iqa2M8Ms(pth, er, "never", ["profile", ky0]);
          }
        }
      }
      pth.push("role");
      te_TlPnL5.fn(v.role, pth, er);
      pth.splice(-1);
      pth.push("status");
      te_SyisaY.fn(v.status, pth, er);
      pth.splice(-1);
      pth.push("address");
      te_GUgUK4.fn(v.address, pth, er);
      pth.splice(-1);
      pth.push("paymentMethods");
      te_mguG4C.fn(v.paymentMethods, pth, er);
      pth.splice(-1);
      pth.push("preferences");
      te_TXdDrb.fn(v.preferences, pth, er);
      pth.splice(-1);
      if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["createdAt"]);
      if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
      if (v.lastLoginAt !== void 0) {
        if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
      }
      pth.push("tags");
      te_v7nFN3.fn(v.tags, pth, er);
      pth.splice(-1);
      const unk1 = lTBP5VNV(v, k_xrrn1f);
      if (unk1) {
        for (const ky1 of unk1) {
          Iqa2M8Ms(pth, er, "never", [ky1]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_TlPnL5": { isNoop: false, jitDependencies: ["is_TlPnL5"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "UserRole", fnID: "te", jitFnHash: "te_TlPnL5", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_TlPnL5 = utl.getJIT("is_TlPnL5");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_TlPnL5(v,pth=[],er=[]){if (!is_TlPnL5.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_TlPnL5(utl) {
  const is_TlPnL5 = utl.getJIT("is_TlPnL5");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_TlPnL5(v, pth = [], er = []) {
    if (!is_TlPnL5.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_SyisaY": { isNoop: false, jitDependencies: ["is_SyisaY"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "AccountStatus", fnID: "te", jitFnHash: "te_SyisaY", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_SyisaY = utl.getJIT("is_SyisaY");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_SyisaY(v,pth=[],er=[]){if (!is_SyisaY.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_SyisaY(utl) {
  const is_SyisaY = utl.getJIT("is_SyisaY");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_SyisaY(v, pth = [], er = []) {
    if (!is_SyisaY.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_GUgUK4": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "Address", fnID: "te", jitFnHash: "te_GUgUK4", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
const kA_GUgUK4 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_GUgUK4(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 
 const unk0 = lTBP5VNV(v, k_GUgUK4);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_GUgUK4(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_GUgUK4(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.street !== "string") Iqa2M8Ms(pth, er, "string", ["street"]);
      if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
      if (typeof v.state !== "string") Iqa2M8Ms(pth, er, "string", ["state"]);
      if (typeof v.zipCode !== "string") Iqa2M8Ms(pth, er, "string", ["zipCode"]);
      if (typeof v.country !== "string") Iqa2M8Ms(pth, er, "string", ["country"]);
      const unk0 = lTBP5VNV(v, k_GUgUK4);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_mguG4C": { isNoop: false, jitDependencies: ["te_Njl7xz"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "array", fnID: "te", jitFnHash: "te_mguG4C", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_Njl7xz = utl.getJIT("te_Njl7xz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_mguG4C(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_Njl7xz.fn(v[i0],pth,er); pth.splice(-1);}} return er}`, createJitFn: function get_te_mguG4C(utl) {
  const te_Njl7xz = utl.getJIT("te_Njl7xz");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_mguG4C(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        pth.push(i0);
        te_Njl7xz.fn(v[i0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_Njl7xz": { isNoop: false, jitDependencies: ["is_Njl7xz"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "PaymentMethod", fnID: "te", jitFnHash: "te_Njl7xz", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_Njl7xz = utl.getJIT("is_Njl7xz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Njl7xz(v,pth=[],er=[]){if (!is_Njl7xz.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_Njl7xz(utl) {
  const is_Njl7xz = utl.getJIT("is_Njl7xz");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_Njl7xz(v, pth = [], er = []) {
    if (!is_Njl7xz.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_TXdDrb": { isNoop: false, jitDependencies: ["te_YyoQ6q"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "UserPreferences", fnID: "te", jitFnHash: "te_TXdDrb", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_YyoQ6q = utl.getJIT("te_YyoQ6q");
const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
const kA_TXdDrb = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_TXdDrb(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_YyoQ6q.fn(v.notifications,pth,er); pth.splice(-1);
 
 const unk0 = lTBP5VNV(v, k_TXdDrb);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_TXdDrb(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_YyoQ6q = utl.getJIT("te_YyoQ6q");
  const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_TXdDrb(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth, er, "union", ["theme"]);
      if (typeof v.language !== "string") Iqa2M8Ms(pth, er, "string", ["language"]);
      if (typeof v.timezone !== "string") Iqa2M8Ms(pth, er, "string", ["timezone"]);
      pth.push("notifications");
      te_YyoQ6q.fn(v.notifications, pth, er);
      pth.splice(-1);
      const unk0 = lTBP5VNV(v, k_TXdDrb);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_YyoQ6q": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "NotificationSettings", fnID: "te", jitFnHash: "te_YyoQ6q", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_YyoQ6q = ["email", "sms", "push", "frequency"];
const kA_YyoQ6q = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_YyoQ6q(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 
 const unk0 = lTBP5VNV(v, k_YyoQ6q);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_YyoQ6q(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_YyoQ6q = ["email", "sms", "push", "frequency"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_YyoQ6q(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.email !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["email"]);
      if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
      if (typeof v.push !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["push"]);
      if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth, er, "union", ["frequency"]);
      const unk0 = lTBP5VNV(v, k_YyoQ6q);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_R35XJV": { isNoop: false, jitDependencies: ["tj_xrrn1f"], typeName: "params", fnID: "tj", jitFnHash: "tj_R35XJV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_xrrn1f = utl.getJIT("tj_xrrn1f"); return function tj_R35XJV(v){v[0] = tj_xrrn1f.fn(v[0]); return v}`, createJitFn: function get_tj_R35XJV(utl) {
  const tj_xrrn1f = utl.getJIT("tj_xrrn1f");
  return function tj_R35XJV(v) {
    v[0] = tj_xrrn1f.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "tj_xrrn1f": { isNoop: false, jitDependencies: ["tj_TlPnL5", "tj_SyisaY", "tj_mguG4C", "tj_TXdDrb"], typeName: "User", fnID: "tj", jitFnHash: "tj_xrrn1f", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_TlPnL5 = utl.getJIT("tj_TlPnL5");
const tj_SyisaY = utl.getJIT("tj_SyisaY");
const tj_mguG4C = utl.getJIT("tj_mguG4C");
const tj_TXdDrb = utl.getJIT("tj_TXdDrb"); return function tj_xrrn1f(v){v.role = tj_TlPnL5.fn(v.role);v.status = tj_SyisaY.fn(v.status);v.paymentMethods = tj_mguG4C.fn(v.paymentMethods);v.preferences = tj_TXdDrb.fn(v.preferences); return v}`, createJitFn: function get_tj_xrrn1f(utl) {
  const tj_TlPnL5 = utl.getJIT("tj_TlPnL5");
  const tj_SyisaY = utl.getJIT("tj_SyisaY");
  const tj_mguG4C = utl.getJIT("tj_mguG4C");
  const tj_TXdDrb = utl.getJIT("tj_TXdDrb");
  return function tj_xrrn1f(v) {
    v.role = tj_TlPnL5.fn(v.role);
    v.status = tj_SyisaY.fn(v.status);
    v.paymentMethods = tj_mguG4C.fn(v.paymentMethods);
    v.preferences = tj_TXdDrb.fn(v.preferences);
    return v;
  };
}, fn: void 0 }, "tj_TlPnL5": { isNoop: false, typeName: "UserRole", fnID: "tj", jitFnHash: "tj_TlPnL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_TlPnL5(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_TlPnL5(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_TlPnL5(v) {
    if (v === "admin") ;
    else if (v === "user") ;
    else if (v === "guest") ;
    else if (v === "moderator") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_SyisaY": { isNoop: false, typeName: "AccountStatus", fnID: "tj", jitFnHash: "tj_SyisaY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_SyisaY(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_SyisaY(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_SyisaY(v) {
    if (v === "active") ;
    else if (v === "suspended") ;
    else if (v === "pending_verification") ;
    else if (v === "deactivated") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_GUgUK4": { isNoop: true, typeName: "Address", fnID: "tj", jitFnHash: "tj_GUgUK4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_GUgUK4(v){return v}", createJitFn: function get_tj_GUgUK4(utl) {
  return function tj_GUgUK4(v) {
    return v;
  };
}, fn: void 0 }, "tj_mguG4C": { isNoop: false, jitDependencies: ["tj_Njl7xz"], typeName: "array", fnID: "tj", jitFnHash: "tj_mguG4C", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_Njl7xz = utl.getJIT("tj_Njl7xz"); return function tj_mguG4C(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_Njl7xz.fn(v[i0]);} return v}`, createJitFn: function get_tj_mguG4C(utl) {
  const tj_Njl7xz = utl.getJIT("tj_Njl7xz");
  return function tj_mguG4C(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = tj_Njl7xz.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_Njl7xz": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "tj", jitFnHash: "tj_Njl7xz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function tj_Njl7xz(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY))) { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_Njl7xz(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_U42ywY = ["type", "email"];
  return function tj_Njl7xz(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_M2okYK))) ;
    else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_WwEqA4))) ;
    else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_U42ywY))) ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_TXdDrb": { isNoop: false, jitDependencies: ["tj_YyoQ6q"], typeName: "UserPreferences", fnID: "tj", jitFnHash: "tj_TXdDrb", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const tj_YyoQ6q = utl.getJIT("tj_YyoQ6q"); return function tj_TXdDrb(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_YyoQ6q.fn(v.notifications); return v}`, createJitFn: function get_tj_TXdDrb(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const tj_YyoQ6q = utl.getJIT("tj_YyoQ6q");
  return function tj_TXdDrb(v) {
    if (v.theme === "light") ;
    else if (v.theme === "dark") ;
    else if (v.theme === "system") ;
    else {
      throw new Error(uErr0);
    }
    v.notifications = tj_YyoQ6q.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "tj_YyoQ6q": { isNoop: false, typeName: "NotificationSettings", fnID: "tj", jitFnHash: "tj_YyoQ6q", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_YyoQ6q(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_YyoQ6q(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_YyoQ6q(v) {
    if (v.frequency === "immediate") ;
    else if (v.frequency === "daily") ;
    else if (v.frequency === "weekly") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "fj_R35XJV": { isNoop: false, jitDependencies: ["fj_xrrn1f"], typeName: "params", fnID: "fj", jitFnHash: "fj_R35XJV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_xrrn1f = utl.getJIT("fj_xrrn1f"); return function fj_R35XJV(v){v[0] = fj_xrrn1f.fn(v[0]); return v}`, createJitFn: function get_fj_R35XJV(utl) {
  const fj_xrrn1f = utl.getJIT("fj_xrrn1f");
  return function fj_R35XJV(v) {
    v[0] = fj_xrrn1f.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "fj_xrrn1f": { isNoop: false, jitDependencies: ["fj_TlPnL5", "fj_SyisaY", "fj_mguG4C", "fj_TXdDrb"], typeName: "User", fnID: "fj", jitFnHash: "fj_xrrn1f", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_TlPnL5 = utl.getJIT("fj_TlPnL5");
const fj_SyisaY = utl.getJIT("fj_SyisaY");
const fj_mguG4C = utl.getJIT("fj_mguG4C");
const fj_TXdDrb = utl.getJIT("fj_TXdDrb"); return function fj_xrrn1f(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_TlPnL5.fn(v.role);v.status = fj_SyisaY.fn(v.status);v.paymentMethods = fj_mguG4C.fn(v.paymentMethods);v.preferences = fj_TXdDrb.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}`, createJitFn: function get_fj_xrrn1f(utl) {
  const fj_TlPnL5 = utl.getJIT("fj_TlPnL5");
  const fj_SyisaY = utl.getJIT("fj_SyisaY");
  const fj_mguG4C = utl.getJIT("fj_mguG4C");
  const fj_TXdDrb = utl.getJIT("fj_TXdDrb");
  return function fj_xrrn1f(v) {
    v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);
    v.role = fj_TlPnL5.fn(v.role);
    v.status = fj_SyisaY.fn(v.status);
    v.paymentMethods = fj_mguG4C.fn(v.paymentMethods);
    v.preferences = fj_TXdDrb.fn(v.preferences);
    v.createdAt = new Date(v.createdAt);
    v.updatedAt = new Date(v.updatedAt);
    if (v.lastLoginAt !== void 0) {
      v.lastLoginAt = new Date(v.lastLoginAt);
    }
    return v;
  };
}, fn: void 0 }, "fj_TlPnL5": { isNoop: false, typeName: "UserRole", fnID: "fj", jitFnHash: "fj_TlPnL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_TlPnL5(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_TlPnL5(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_TlPnL5(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else if (dec0 === 3) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_SyisaY": { isNoop: false, typeName: "AccountStatus", fnID: "fj", jitFnHash: "fj_SyisaY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_SyisaY(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_SyisaY(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_SyisaY(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else if (dec0 === 3) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_GUgUK4": { isNoop: true, typeName: "Address", fnID: "fj", jitFnHash: "fj_GUgUK4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_GUgUK4(v){return v}", createJitFn: function get_fj_GUgUK4(utl) {
  return function fj_GUgUK4(v) {
    return v;
  };
}, fn: void 0 }, "fj_mguG4C": { isNoop: false, jitDependencies: ["fj_Njl7xz"], typeName: "array", fnID: "fj", jitFnHash: "fj_mguG4C", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_Njl7xz = utl.getJIT("fj_Njl7xz"); return function fj_mguG4C(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_Njl7xz.fn(v[i0]);} return v}`, createJitFn: function get_fj_mguG4C(utl) {
  const fj_Njl7xz = utl.getJIT("fj_Njl7xz");
  return function fj_mguG4C(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = fj_Njl7xz.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_Njl7xz": { isNoop: false, typeName: "PaymentMethod", fnID: "fj", jitFnHash: "fj_Njl7xz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_Njl7xz(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_Njl7xz(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_Njl7xz(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_TXdDrb": { isNoop: false, jitDependencies: ["fj_YyoQ6q"], typeName: "UserPreferences", fnID: "fj", jitFnHash: "fj_TXdDrb", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_YyoQ6q = utl.getJIT("fj_YyoQ6q"); return function fj_TXdDrb(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_YyoQ6q.fn(v.notifications); return v}`, createJitFn: function get_fj_TXdDrb(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_YyoQ6q = utl.getJIT("fj_YyoQ6q");
  return function fj_TXdDrb(v) {
    var _a;
    if (((_a = v.theme) == null ? void 0 : _a.length) === 2 && Array.isArray(v.theme) && typeof v.theme[0] === "number") {
      const dec0 = v.theme[0];
      v.theme = v.theme[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    v.notifications = fj_YyoQ6q.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "fj_YyoQ6q": { isNoop: false, typeName: "NotificationSettings", fnID: "fj", jitFnHash: "fj_YyoQ6q", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_YyoQ6q(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_YyoQ6q(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_YyoQ6q(v) {
    var _a;
    if (((_a = v.frequency) == null ? void 0 : _a.length) === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === "number") {
      const dec0 = v.frequency[0];
      v.frequency = v.frequency[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "sj_R35XJV": { isNoop: false, jitDependencies: ["sj_xrrn1f"], typeName: "params", fnID: "sj", jitFnHash: "sj_R35XJV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_xrrn1f = utl.getJIT("sj_xrrn1f"); return function sj_R35XJV(v){return '['+sj_xrrn1f.fn(v[0])+']'}`, createJitFn: function get_sj_R35XJV(utl) {
  const sj_xrrn1f = utl.getJIT("sj_xrrn1f");
  return function sj_R35XJV(v) {
    return "[" + sj_xrrn1f.fn(v[0]) + "]";
  };
}, fn: void 0 }, "sj_xrrn1f": { isNoop: false, jitDependencies: ["sj_TlPnL5", "sj_SyisaY", "sj_GUgUK4", "sj_mguG4C", "sj_TXdDrb", "sj_v7nFN3"], typeName: "User", fnID: "sj", jitFnHash: "sj_xrrn1f", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_TlPnL5 = utl.getJIT("sj_TlPnL5");
const sj_SyisaY = utl.getJIT("sj_SyisaY");
const sj_GUgUK4 = utl.getJIT("sj_GUgUK4");
const sj_mguG4C = utl.getJIT("sj_mguG4C");
const sj_TXdDrb = utl.getJIT("sj_TXdDrb");
const sj_v7nFN3 = utl.getJIT("sj_v7nFN3"); return function sj_xrrn1f(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_TlPnL5.fn(v.role)+","+'"status":'+sj_SyisaY.fn(v.status)+","+'"address":'+sj_GUgUK4.fn(v.address)+","+'"paymentMethods":'+sj_mguG4C.fn(v.paymentMethods)+","+'"preferences":'+sj_TXdDrb.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_v7nFN3.fn(v.tags)+'}'}`, createJitFn: function get_sj_xrrn1f(utl) {
  const sj_TlPnL5 = utl.getJIT("sj_TlPnL5");
  const sj_SyisaY = utl.getJIT("sj_SyisaY");
  const sj_GUgUK4 = utl.getJIT("sj_GUgUK4");
  const sj_mguG4C = utl.getJIT("sj_mguG4C");
  const sj_TXdDrb = utl.getJIT("sj_TXdDrb");
  const sj_v7nFN3 = utl.getJIT("sj_v7nFN3");
  return function sj_xrrn1f(v) {
    return "{" + (v.lastLoginAt === void 0 ? "" : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') + '"id":' + v.id + ',"username":' + JSON.stringify(v.username) + ',"email":' + JSON.stringify(v.email) + ',"profile":{' + (v.profile.bio === void 0 ? "" : '"bio":' + JSON.stringify(v.profile.bio) + ",") + (v.profile.avatarUrl === void 0 ? "" : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") + '"firstName":' + JSON.stringify(v.profile.firstName) + ',"lastName":' + JSON.stringify(v.profile.lastName) + ',"displayName":' + JSON.stringify(v.profile.displayName) + ',"dateOfBirth":"' + v.profile.dateOfBirth.toJSON() + '"},"role":' + sj_TlPnL5.fn(v.role) + ',"status":' + sj_SyisaY.fn(v.status) + ',"address":' + sj_GUgUK4.fn(v.address) + ',"paymentMethods":' + sj_mguG4C.fn(v.paymentMethods) + ',"preferences":' + sj_TXdDrb.fn(v.preferences) + ',"createdAt":"' + v.createdAt.toJSON() + '","updatedAt":"' + v.updatedAt.toJSON() + '","tags":' + sj_v7nFN3.fn(v.tags) + "}";
  };
}, fn: void 0 }, "sj_TlPnL5": { isNoop: false, typeName: "UserRole", fnID: "sj", jitFnHash: "sj_TlPnL5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_TlPnL5(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_TlPnL5(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_TlPnL5(v) {
    if (v === "admin") {
      return JSON.stringify(v);
    } else if (v === "user") {
      return JSON.stringify(v);
    } else if (v === "guest") {
      return JSON.stringify(v);
    } else if (v === "moderator") {
      return JSON.stringify(v);
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_SyisaY": { isNoop: false, typeName: "AccountStatus", fnID: "sj", jitFnHash: "sj_SyisaY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_SyisaY(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_SyisaY(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_SyisaY(v) {
    if (v === "active") {
      return JSON.stringify(v);
    } else if (v === "suspended") {
      return JSON.stringify(v);
    } else if (v === "pending_verification") {
      return JSON.stringify(v);
    } else if (v === "deactivated") {
      return JSON.stringify(v);
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_GUgUK4": { isNoop: false, typeName: "Address", fnID: "sj", jitFnHash: "sj_GUgUK4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function sj_GUgUK4(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`, createJitFn: function get_sj_GUgUK4(utl) {
  return function sj_GUgUK4(v) {
    return '{"street":' + JSON.stringify(v.street) + ',"city":' + JSON.stringify(v.city) + ',"state":' + JSON.stringify(v.state) + ',"zipCode":' + JSON.stringify(v.zipCode) + ',"country":' + JSON.stringify(v.country) + "}";
  };
}, fn: void 0 }, "sj_mguG4C": { isNoop: false, jitDependencies: ["sj_Njl7xz"], typeName: "array", fnID: "sj", jitFnHash: "sj_mguG4C", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_Njl7xz = utl.getJIT("sj_Njl7xz"); return function sj_mguG4C(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_Njl7xz.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`, createJitFn: function get_sj_mguG4C(utl) {
  const sj_Njl7xz = utl.getJIT("sj_Njl7xz");
  return function sj_mguG4C(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = sj_Njl7xz.fn(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_Njl7xz": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "sj", jitFnHash: "sj_Njl7xz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function sj_Njl7xz(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_Njl7xz(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_U42ywY = ["type", "email"];
  return function sj_Njl7xz(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_M2okYK))) {
      return '{"type":' + JSON.stringify(v.type) + ',"lastFourDigits":' + JSON.stringify(v.lastFourDigits) + ',"expiryMonth":' + v.expiryMonth + ',"expiryYear":' + v.expiryYear + ',"brand":' + JSON.stringify(v.brand) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_WwEqA4))) {
      return '{"type":' + JSON.stringify(v.type) + ',"bankName":' + JSON.stringify(v.bankName) + ',"accountLastFour":' + JSON.stringify(v.accountLastFour) + ',"routingNumber":' + JSON.stringify(v.routingNumber) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_U42ywY))) {
      return '{"type":' + JSON.stringify(v.type) + ',"email":' + JSON.stringify(v.email) + "}";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_TXdDrb": { isNoop: false, jitDependencies: ["sj_YyoQ6q"], typeName: "UserPreferences", fnID: "sj", jitFnHash: "sj_TXdDrb", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_YyoQ6q = utl.getJIT("sj_YyoQ6q"); return function sj_TXdDrb(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_YyoQ6q.fn(v.notifications)+'}'}`, createJitFn: function get_sj_TXdDrb(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_YyoQ6q = utl.getJIT("sj_YyoQ6q");
  return function sj_TXdDrb(v) {
    return '{"theme":' + (function() {
      if (v.theme === "light") {
        return JSON.stringify(v.theme);
      } else if (v.theme === "dark") {
        return JSON.stringify(v.theme);
      } else if (v.theme === "system") {
        return JSON.stringify(v.theme);
      } else {
        throw new Error(uErr0);
      }
    })() + ',"language":' + JSON.stringify(v.language) + ',"timezone":' + JSON.stringify(v.timezone) + ',"notifications":' + sj_YyoQ6q.fn(v.notifications) + "}";
  };
}, fn: void 0 }, "sj_YyoQ6q": { isNoop: false, typeName: "NotificationSettings", fnID: "sj", jitFnHash: "sj_YyoQ6q", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_YyoQ6q(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`, createJitFn: function get_sj_YyoQ6q(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_YyoQ6q(v) {
    return '{"email":' + (v.email ? "true" : "false") + ',"sms":' + (v.sms ? "true" : "false") + ',"push":' + (v.push ? "true" : "false") + ',"frequency":' + (function() {
      if (v.frequency === "immediate") {
        return JSON.stringify(v.frequency);
      } else if (v.frequency === "daily") {
        return JSON.stringify(v.frequency);
      } else if (v.frequency === "weekly") {
        return JSON.stringify(v.frequency);
      } else {
        throw new Error(uErr0);
      }
    })() + "}";
  };
}, fn: void 0 }, "is_OAqgWS": { isNoop: false, jitDependencies: ["is_cguSMW", "is_H7NdXp", "is_LJrfVd", "is_rhxPRX", "is_Ywo0Ug", "is_IoMmkS"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "User", fnID: "is", jitFnHash: "is_OAqgWS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_k2MQ4a = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const is_cguSMW = utl.getJIT("is_cguSMW");
const is_H7NdXp = utl.getJIT("is_H7NdXp");
const is_LJrfVd = utl.getJIT("is_LJrfVd");
const is_rhxPRX = utl.getJIT("is_rhxPRX");
const is_Ywo0Ug = utl.getJIT("is_Ywo0Ug");
const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_OAqgWS = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_OAqgWS = []; return function is_OAqgWS(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_k2MQ4a)) && is_cguSMW.fn(v.role) && is_H7NdXp.fn(v.status) && is_LJrfVd.fn(v.address) && is_rhxPRX.fn(v.paymentMethods) && is_Ywo0Ug.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_IoMmkS.fn(v.tags) && !NVlxlJHR(v, k_OAqgWS))}`, createJitFn: function get_is_OAqgWS(utl) {
  const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const is_cguSMW = utl.getJIT("is_cguSMW");
  const is_H7NdXp = utl.getJIT("is_H7NdXp");
  const is_LJrfVd = utl.getJIT("is_LJrfVd");
  const is_rhxPRX = utl.getJIT("is_rhxPRX");
  const is_Ywo0Ug = utl.getJIT("is_Ywo0Ug");
  const is_IoMmkS = utl.getJIT("is_IoMmkS");
  const k_OAqgWS = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
  return function is_OAqgWS(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.username === "string" && typeof v.email === "string" && (typeof v.profile === "object" && v.profile !== null && typeof v.profile.firstName === "string" && typeof v.profile.lastName === "string" && typeof v.profile.displayName === "string" && (v.profile.bio === void 0 || typeof v.profile.bio === "string") && (v.profile.avatarUrl === void 0 || typeof v.profile.avatarUrl === "string") && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_k2MQ4a)) && is_cguSMW.fn(v.role) && is_H7NdXp.fn(v.status) && is_LJrfVd.fn(v.address) && is_rhxPRX.fn(v.paymentMethods) && is_Ywo0Ug.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === void 0 || v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())) && is_IoMmkS.fn(v.tags) && !NVlxlJHR(v, k_OAqgWS);
  };
}, fn: void 0 }, "is_cguSMW": { isNoop: false, typeName: "UserRole", fnID: "is", jitFnHash: "is_cguSMW", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_cguSMW(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}`, createJitFn: function get_is_cguSMW(utl) {
  return function is_cguSMW(v) {
    return v === "admin" || v === "user" || v === "guest" || v === "moderator";
  };
}, fn: void 0 }, "is_H7NdXp": { isNoop: false, typeName: "AccountStatus", fnID: "is", jitFnHash: "is_H7NdXp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function is_H7NdXp(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}`, createJitFn: function get_is_H7NdXp(utl) {
  return function is_H7NdXp(v) {
    return v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated";
  };
}, fn: void 0 }, "is_LJrfVd": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "Address", fnID: "is", jitFnHash: "is_LJrfVd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
const kA_LJrfVd = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_LJrfVd(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string' && !NVlxlJHR(v, k_LJrfVd))}`, createJitFn: function get_is_LJrfVd(utl) {
  const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_LJrfVd(v) {
    return typeof v === "object" && v !== null && typeof v.street === "string" && typeof v.city === "string" && typeof v.state === "string" && typeof v.zipCode === "string" && typeof v.country === "string" && !NVlxlJHR(v, k_LJrfVd);
  };
}, fn: void 0 }, "is_rhxPRX": { isNoop: false, jitDependencies: ["is_a0MWc6"], typeName: "array", fnID: "is", jitFnHash: "is_rhxPRX", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_a0MWc6 = utl.getJIT("is_a0MWc6"); return function is_rhxPRX(v){
 if (!Array.isArray(v)) return false;
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = is_a0MWc6.fn(v[i0]);
 if (!(res0)) return false;
 }
 return true;
 }`, createJitFn: function get_is_rhxPRX(utl) {
  const is_a0MWc6 = utl.getJIT("is_a0MWc6");
  return function is_rhxPRX(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = is_a0MWc6.fn(v[i0]);
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_a0MWc6": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "is", jitFnHash: "is_a0MWc6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function is_a0MWc6(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5)) || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh)) || (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd)))))}`, createJitFn: function get_is_a0MWc6(utl) {
  const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_dbLFnd = ["type", "email"];
  return function is_a0MWc6(v) {
    return typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_VP1pj5) || v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_HPT1Zh) || v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_dbLFnd));
  };
}, fn: void 0 }, "is_Ywo0Ug": { isNoop: false, jitDependencies: ["is_lXDVrh"], pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "UserPreferences", fnID: "is", jitFnHash: "is_Ywo0Ug", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_lXDVrh = utl.getJIT("is_lXDVrh");
const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
const kA_Ywo0Ug = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Ywo0Ug(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_lXDVrh.fn(v.notifications) && !NVlxlJHR(v, k_Ywo0Ug))}`, createJitFn: function get_is_Ywo0Ug(utl) {
  const is_lXDVrh = utl.getJIT("is_lXDVrh");
  const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_Ywo0Ug(v) {
    return typeof v === "object" && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === "string" && typeof v.timezone === "string" && is_lXDVrh.fn(v.notifications) && !NVlxlJHR(v, k_Ywo0Ug);
  };
}, fn: void 0 }, "is_lXDVrh": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "NotificationSettings", fnID: "is", jitFnHash: "is_lXDVrh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_lXDVrh = ["email", "sms", "push", "frequency"];
const kA_lXDVrh = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_lXDVrh(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_lXDVrh))}`, createJitFn: function get_is_lXDVrh(utl) {
  const k_lXDVrh = ["email", "sms", "push", "frequency"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_lXDVrh(v) {
    return typeof v === "object" && v !== null && typeof v.email === "boolean" && typeof v.sms === "boolean" && typeof v.push === "boolean" && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_lXDVrh);
  };
}, fn: void 0 }, "te_OAqgWS": { isNoop: false, jitDependencies: ["te_cguSMW", "te_H7NdXp", "te_LJrfVd", "te_rhxPRX", "te_Ywo0Ug", "te_IoMmkS"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "User", fnID: "te", jitFnHash: "te_OAqgWS", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_k2MQ4a = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const te_cguSMW = utl.getJIT("te_cguSMW");
const te_H7NdXp = utl.getJIT("te_H7NdXp");
const te_LJrfVd = utl.getJIT("te_LJrfVd");
const te_rhxPRX = utl.getJIT("te_rhxPRX");
const te_Ywo0Ug = utl.getJIT("te_Ywo0Ug");
const te_IoMmkS = utl.getJIT("te_IoMmkS");
const k_OAqgWS = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_OAqgWS = []; return function te_OAqgWS(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.username !== 'string') Iqa2M8Ms(pth,er,"string",["username"]);if (typeof v.email !== 'string') Iqa2M8Ms(pth,er,"string",["email"]);
 if (!(typeof v.profile === 'object' && v.profile !== null)) {
 Iqa2M8Ms(pth,er,"object",["profile"]);
 } else {
 if (typeof v.profile.firstName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","firstName"]);if (typeof v.profile.lastName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","lastName"]);if (typeof v.profile.displayName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","displayName"]);if (v.profile.bio !== undefined) {if (typeof v.profile.bio !== 'string') Iqa2M8Ms(pth,er,"string",["profile","bio"]);};if (v.profile.avatarUrl !== undefined) {if (typeof v.profile.avatarUrl !== 'string') Iqa2M8Ms(pth,er,"string",["profile","avatarUrl"]);};if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth,er,"date",["profile","dateOfBirth"]);
 
 const unk0 = lTBP5VNV(v.profile, k_k2MQ4a);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",["profile",ky0])}}
 
 }
 ;pth.push("role"); te_cguSMW.fn(v.role,pth,er); pth.splice(-1);pth.push("status"); te_H7NdXp.fn(v.status,pth,er); pth.splice(-1);pth.push("address"); te_LJrfVd.fn(v.address,pth,er); pth.splice(-1);pth.push("paymentMethods"); te_rhxPRX.fn(v.paymentMethods,pth,er); pth.splice(-1);pth.push("preferences"); te_Ywo0Ug.fn(v.preferences,pth,er); pth.splice(-1);if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth,er,"date",["createdAt"]);if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth,er,"date",["updatedAt"]);if (v.lastLoginAt !== undefined) {if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth,er,"date",["lastLoginAt"]);};pth.push("tags"); te_IoMmkS.fn(v.tags,pth,er); pth.splice(-1);
 
 const unk1 = lTBP5VNV(v, k_OAqgWS);
 if (unk1) {for (const ky1 of unk1) {Iqa2M8Ms(pth,er,"never",[ky1])}}
 
 }
 ; return er}`, createJitFn: function get_te_OAqgWS(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  const te_cguSMW = utl.getJIT("te_cguSMW");
  const te_H7NdXp = utl.getJIT("te_H7NdXp");
  const te_LJrfVd = utl.getJIT("te_LJrfVd");
  const te_rhxPRX = utl.getJIT("te_rhxPRX");
  const te_Ywo0Ug = utl.getJIT("te_Ywo0Ug");
  const te_IoMmkS = utl.getJIT("te_IoMmkS");
  const k_OAqgWS = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
  return function te_OAqgWS(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.username !== "string") Iqa2M8Ms(pth, er, "string", ["username"]);
      if (typeof v.email !== "string") Iqa2M8Ms(pth, er, "string", ["email"]);
      if (!(typeof v.profile === "object" && v.profile !== null)) {
        Iqa2M8Ms(pth, er, "object", ["profile"]);
      } else {
        if (typeof v.profile.firstName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "firstName"]);
        if (typeof v.profile.lastName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "lastName"]);
        if (typeof v.profile.displayName !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "displayName"]);
        if (v.profile.bio !== void 0) {
          if (typeof v.profile.bio !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "bio"]);
        }
        if (v.profile.avatarUrl !== void 0) {
          if (typeof v.profile.avatarUrl !== "string") Iqa2M8Ms(pth, er, "string", ["profile", "avatarUrl"]);
        }
        if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth, er, "date", ["profile", "dateOfBirth"]);
        const unk0 = lTBP5VNV(v.profile, k_k2MQ4a);
        if (unk0) {
          for (const ky0 of unk0) {
            Iqa2M8Ms(pth, er, "never", ["profile", ky0]);
          }
        }
      }
      pth.push("role");
      te_cguSMW.fn(v.role, pth, er);
      pth.splice(-1);
      pth.push("status");
      te_H7NdXp.fn(v.status, pth, er);
      pth.splice(-1);
      pth.push("address");
      te_LJrfVd.fn(v.address, pth, er);
      pth.splice(-1);
      pth.push("paymentMethods");
      te_rhxPRX.fn(v.paymentMethods, pth, er);
      pth.splice(-1);
      pth.push("preferences");
      te_Ywo0Ug.fn(v.preferences, pth, er);
      pth.splice(-1);
      if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["createdAt"]);
      if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
      if (v.lastLoginAt !== void 0) {
        if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
      }
      pth.push("tags");
      te_IoMmkS.fn(v.tags, pth, er);
      pth.splice(-1);
      const unk1 = lTBP5VNV(v, k_OAqgWS);
      if (unk1) {
        for (const ky1 of unk1) {
          Iqa2M8Ms(pth, er, "never", [ky1]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_cguSMW": { isNoop: false, jitDependencies: ["is_cguSMW"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "UserRole", fnID: "te", jitFnHash: "te_cguSMW", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_cguSMW = utl.getJIT("is_cguSMW");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_cguSMW(v,pth=[],er=[]){if (!is_cguSMW.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_cguSMW(utl) {
  const is_cguSMW = utl.getJIT("is_cguSMW");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_cguSMW(v, pth = [], er = []) {
    if (!is_cguSMW.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_H7NdXp": { isNoop: false, jitDependencies: ["is_H7NdXp"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "AccountStatus", fnID: "te", jitFnHash: "te_H7NdXp", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_H7NdXp = utl.getJIT("is_H7NdXp");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_H7NdXp(v,pth=[],er=[]){if (!is_H7NdXp.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_H7NdXp(utl) {
  const is_H7NdXp = utl.getJIT("is_H7NdXp");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_H7NdXp(v, pth = [], er = []) {
    if (!is_H7NdXp.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_LJrfVd": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "Address", fnID: "te", jitFnHash: "te_LJrfVd", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
const kA_LJrfVd = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_LJrfVd(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 
 const unk0 = lTBP5VNV(v, k_LJrfVd);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_LJrfVd(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_LJrfVd(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.street !== "string") Iqa2M8Ms(pth, er, "string", ["street"]);
      if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
      if (typeof v.state !== "string") Iqa2M8Ms(pth, er, "string", ["state"]);
      if (typeof v.zipCode !== "string") Iqa2M8Ms(pth, er, "string", ["zipCode"]);
      if (typeof v.country !== "string") Iqa2M8Ms(pth, er, "string", ["country"]);
      const unk0 = lTBP5VNV(v, k_LJrfVd);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_rhxPRX": { isNoop: false, jitDependencies: ["te_a0MWc6"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "array", fnID: "te", jitFnHash: "te_rhxPRX", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_a0MWc6 = utl.getJIT("te_a0MWc6");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_rhxPRX(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_a0MWc6.fn(v[i0],pth,er); pth.splice(-1);}} return er}`, createJitFn: function get_te_rhxPRX(utl) {
  const te_a0MWc6 = utl.getJIT("te_a0MWc6");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_rhxPRX(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        pth.push(i0);
        te_a0MWc6.fn(v[i0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_a0MWc6": { isNoop: false, jitDependencies: ["is_a0MWc6"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "PaymentMethod", fnID: "te", jitFnHash: "te_a0MWc6", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const is_a0MWc6 = utl.getJIT("is_a0MWc6");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_a0MWc6(v,pth=[],er=[]){if (!is_a0MWc6.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`, createJitFn: function get_te_a0MWc6(utl) {
  const is_a0MWc6 = utl.getJIT("is_a0MWc6");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_a0MWc6(v, pth = [], er = []) {
    if (!is_a0MWc6.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_Ywo0Ug": { isNoop: false, jitDependencies: ["te_lXDVrh"], pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "UserPreferences", fnID: "te", jitFnHash: "te_Ywo0Ug", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_lXDVrh = utl.getJIT("te_lXDVrh");
const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
const kA_Ywo0Ug = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_Ywo0Ug(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_lXDVrh.fn(v.notifications,pth,er); pth.splice(-1);
 
 const unk0 = lTBP5VNV(v, k_Ywo0Ug);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_Ywo0Ug(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_lXDVrh = utl.getJIT("te_lXDVrh");
  const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_Ywo0Ug(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth, er, "union", ["theme"]);
      if (typeof v.language !== "string") Iqa2M8Ms(pth, er, "string", ["language"]);
      if (typeof v.timezone !== "string") Iqa2M8Ms(pth, er, "string", ["timezone"]);
      pth.push("notifications");
      te_lXDVrh.fn(v.notifications, pth, er);
      pth.splice(-1);
      const unk0 = lTBP5VNV(v, k_Ywo0Ug);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_lXDVrh": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "NotificationSettings", fnID: "te", jitFnHash: "te_lXDVrh", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_lXDVrh = ["email", "sms", "push", "frequency"];
const kA_lXDVrh = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_lXDVrh(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 
 const unk0 = lTBP5VNV(v, k_lXDVrh);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_lXDVrh(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_lXDVrh = ["email", "sms", "push", "frequency"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_lXDVrh(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.email !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["email"]);
      if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
      if (typeof v.push !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["push"]);
      if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth, er, "union", ["frequency"]);
      const unk0 = lTBP5VNV(v, k_lXDVrh);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "te_IoMmkS": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr"], typeName: "array", fnID: "te", jitFnHash: "te_IoMmkS", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_IoMmkS(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`, createJitFn: function get_te_IoMmkS(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_IoMmkS(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        if (typeof v[i0] !== "string") Iqa2M8Ms(pth, er, "string", [i0]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_OAqgWS": { isNoop: false, jitDependencies: ["tj_cguSMW", "tj_H7NdXp", "tj_rhxPRX", "tj_Ywo0Ug"], typeName: "User", fnID: "tj", jitFnHash: "tj_OAqgWS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_cguSMW = utl.getJIT("tj_cguSMW");
const tj_H7NdXp = utl.getJIT("tj_H7NdXp");
const tj_rhxPRX = utl.getJIT("tj_rhxPRX");
const tj_Ywo0Ug = utl.getJIT("tj_Ywo0Ug"); return function tj_OAqgWS(v){v.role = tj_cguSMW.fn(v.role);v.status = tj_H7NdXp.fn(v.status);v.paymentMethods = tj_rhxPRX.fn(v.paymentMethods);v.preferences = tj_Ywo0Ug.fn(v.preferences); return v}`, createJitFn: function get_tj_OAqgWS(utl) {
  const tj_cguSMW = utl.getJIT("tj_cguSMW");
  const tj_H7NdXp = utl.getJIT("tj_H7NdXp");
  const tj_rhxPRX = utl.getJIT("tj_rhxPRX");
  const tj_Ywo0Ug = utl.getJIT("tj_Ywo0Ug");
  return function tj_OAqgWS(v) {
    v.role = tj_cguSMW.fn(v.role);
    v.status = tj_H7NdXp.fn(v.status);
    v.paymentMethods = tj_rhxPRX.fn(v.paymentMethods);
    v.preferences = tj_Ywo0Ug.fn(v.preferences);
    return v;
  };
}, fn: void 0 }, "tj_cguSMW": { isNoop: false, typeName: "UserRole", fnID: "tj", jitFnHash: "tj_cguSMW", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_cguSMW(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_cguSMW(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_cguSMW(v) {
    if (v === "admin") ;
    else if (v === "user") ;
    else if (v === "guest") ;
    else if (v === "moderator") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_H7NdXp": { isNoop: false, typeName: "AccountStatus", fnID: "tj", jitFnHash: "tj_H7NdXp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_H7NdXp(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_H7NdXp(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_H7NdXp(v) {
    if (v === "active") ;
    else if (v === "suspended") ;
    else if (v === "pending_verification") ;
    else if (v === "deactivated") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_LJrfVd": { isNoop: true, typeName: "Address", fnID: "tj", jitFnHash: "tj_LJrfVd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_LJrfVd(v){return v}", createJitFn: function get_tj_LJrfVd(utl) {
  return function tj_LJrfVd(v) {
    return v;
  };
}, fn: void 0 }, "tj_rhxPRX": { isNoop: false, jitDependencies: ["tj_a0MWc6"], typeName: "array", fnID: "tj", jitFnHash: "tj_rhxPRX", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const tj_a0MWc6 = utl.getJIT("tj_a0MWc6"); return function tj_rhxPRX(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_a0MWc6.fn(v[i0]);} return v}`, createJitFn: function get_tj_rhxPRX(utl) {
  const tj_a0MWc6 = utl.getJIT("tj_a0MWc6");
  return function tj_rhxPRX(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = tj_a0MWc6.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_a0MWc6": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "tj", jitFnHash: "tj_a0MWc6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function tj_a0MWc6(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd))) { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_a0MWc6(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_dbLFnd = ["type", "email"];
  return function tj_a0MWc6(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_VP1pj5))) ;
    else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_HPT1Zh))) ;
    else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_dbLFnd))) ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_Ywo0Ug": { isNoop: false, jitDependencies: ["tj_lXDVrh"], typeName: "UserPreferences", fnID: "tj", jitFnHash: "tj_Ywo0Ug", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const tj_lXDVrh = utl.getJIT("tj_lXDVrh"); return function tj_Ywo0Ug(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_lXDVrh.fn(v.notifications); return v}`, createJitFn: function get_tj_Ywo0Ug(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const tj_lXDVrh = utl.getJIT("tj_lXDVrh");
  return function tj_Ywo0Ug(v) {
    if (v.theme === "light") ;
    else if (v.theme === "dark") ;
    else if (v.theme === "system") ;
    else {
      throw new Error(uErr0);
    }
    v.notifications = tj_lXDVrh.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "tj_lXDVrh": { isNoop: false, typeName: "NotificationSettings", fnID: "tj", jitFnHash: "tj_lXDVrh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_lXDVrh(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}`, createJitFn: function get_tj_lXDVrh(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_lXDVrh(v) {
    if (v.frequency === "immediate") ;
    else if (v.frequency === "daily") ;
    else if (v.frequency === "weekly") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "fj_OAqgWS": { isNoop: false, jitDependencies: ["fj_cguSMW", "fj_H7NdXp", "fj_rhxPRX", "fj_Ywo0Ug"], typeName: "User", fnID: "fj", jitFnHash: "fj_OAqgWS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_cguSMW = utl.getJIT("fj_cguSMW");
const fj_H7NdXp = utl.getJIT("fj_H7NdXp");
const fj_rhxPRX = utl.getJIT("fj_rhxPRX");
const fj_Ywo0Ug = utl.getJIT("fj_Ywo0Ug"); return function fj_OAqgWS(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_cguSMW.fn(v.role);v.status = fj_H7NdXp.fn(v.status);v.paymentMethods = fj_rhxPRX.fn(v.paymentMethods);v.preferences = fj_Ywo0Ug.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}`, createJitFn: function get_fj_OAqgWS(utl) {
  const fj_cguSMW = utl.getJIT("fj_cguSMW");
  const fj_H7NdXp = utl.getJIT("fj_H7NdXp");
  const fj_rhxPRX = utl.getJIT("fj_rhxPRX");
  const fj_Ywo0Ug = utl.getJIT("fj_Ywo0Ug");
  return function fj_OAqgWS(v) {
    v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);
    v.role = fj_cguSMW.fn(v.role);
    v.status = fj_H7NdXp.fn(v.status);
    v.paymentMethods = fj_rhxPRX.fn(v.paymentMethods);
    v.preferences = fj_Ywo0Ug.fn(v.preferences);
    v.createdAt = new Date(v.createdAt);
    v.updatedAt = new Date(v.updatedAt);
    if (v.lastLoginAt !== void 0) {
      v.lastLoginAt = new Date(v.lastLoginAt);
    }
    return v;
  };
}, fn: void 0 }, "fj_cguSMW": { isNoop: false, typeName: "UserRole", fnID: "fj", jitFnHash: "fj_cguSMW", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_cguSMW(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_cguSMW(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_cguSMW(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else if (dec0 === 3) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_H7NdXp": { isNoop: false, typeName: "AccountStatus", fnID: "fj", jitFnHash: "fj_H7NdXp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_H7NdXp(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_H7NdXp(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_H7NdXp(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else if (dec0 === 3) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_LJrfVd": { isNoop: true, typeName: "Address", fnID: "fj", jitFnHash: "fj_LJrfVd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_LJrfVd(v){return v}", createJitFn: function get_fj_LJrfVd(utl) {
  return function fj_LJrfVd(v) {
    return v;
  };
}, fn: void 0 }, "fj_rhxPRX": { isNoop: false, jitDependencies: ["fj_a0MWc6"], typeName: "array", fnID: "fj", jitFnHash: "fj_rhxPRX", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_a0MWc6 = utl.getJIT("fj_a0MWc6"); return function fj_rhxPRX(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_a0MWc6.fn(v[i0]);} return v}`, createJitFn: function get_fj_rhxPRX(utl) {
  const fj_a0MWc6 = utl.getJIT("fj_a0MWc6");
  return function fj_rhxPRX(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = fj_a0MWc6.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_a0MWc6": { isNoop: false, typeName: "PaymentMethod", fnID: "fj", jitFnHash: "fj_a0MWc6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_a0MWc6(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_a0MWc6(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_a0MWc6(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_Ywo0Ug": { isNoop: false, jitDependencies: ["fj_lXDVrh"], typeName: "UserPreferences", fnID: "fj", jitFnHash: "fj_Ywo0Ug", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_lXDVrh = utl.getJIT("fj_lXDVrh"); return function fj_Ywo0Ug(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_lXDVrh.fn(v.notifications); return v}`, createJitFn: function get_fj_Ywo0Ug(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_lXDVrh = utl.getJIT("fj_lXDVrh");
  return function fj_Ywo0Ug(v) {
    var _a;
    if (((_a = v.theme) == null ? void 0 : _a.length) === 2 && Array.isArray(v.theme) && typeof v.theme[0] === "number") {
      const dec0 = v.theme[0];
      v.theme = v.theme[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    v.notifications = fj_lXDVrh.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "fj_lXDVrh": { isNoop: false, typeName: "NotificationSettings", fnID: "fj", jitFnHash: "fj_lXDVrh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_lXDVrh(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, createJitFn: function get_fj_lXDVrh(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_lXDVrh(v) {
    var _a;
    if (((_a = v.frequency) == null ? void 0 : _a.length) === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === "number") {
      const dec0 = v.frequency[0];
      v.frequency = v.frequency[1];
      if (dec0 === 0) ;
      else if (dec0 === 1) ;
      else if (dec0 === 2) ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "sj_OAqgWS": { isNoop: false, jitDependencies: ["sj_cguSMW", "sj_H7NdXp", "sj_LJrfVd", "sj_rhxPRX", "sj_Ywo0Ug", "sj_IoMmkS"], typeName: "User", fnID: "sj", jitFnHash: "sj_OAqgWS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_cguSMW = utl.getJIT("sj_cguSMW");
const sj_H7NdXp = utl.getJIT("sj_H7NdXp");
const sj_LJrfVd = utl.getJIT("sj_LJrfVd");
const sj_rhxPRX = utl.getJIT("sj_rhxPRX");
const sj_Ywo0Ug = utl.getJIT("sj_Ywo0Ug");
const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_OAqgWS(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_cguSMW.fn(v.role)+","+'"status":'+sj_H7NdXp.fn(v.status)+","+'"address":'+sj_LJrfVd.fn(v.address)+","+'"paymentMethods":'+sj_rhxPRX.fn(v.paymentMethods)+","+'"preferences":'+sj_Ywo0Ug.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_IoMmkS.fn(v.tags)+'}'}`, createJitFn: function get_sj_OAqgWS(utl) {
  const sj_cguSMW = utl.getJIT("sj_cguSMW");
  const sj_H7NdXp = utl.getJIT("sj_H7NdXp");
  const sj_LJrfVd = utl.getJIT("sj_LJrfVd");
  const sj_rhxPRX = utl.getJIT("sj_rhxPRX");
  const sj_Ywo0Ug = utl.getJIT("sj_Ywo0Ug");
  const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
  return function sj_OAqgWS(v) {
    return "{" + (v.lastLoginAt === void 0 ? "" : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') + '"id":' + v.id + ',"username":' + JSON.stringify(v.username) + ',"email":' + JSON.stringify(v.email) + ',"profile":{' + (v.profile.bio === void 0 ? "" : '"bio":' + JSON.stringify(v.profile.bio) + ",") + (v.profile.avatarUrl === void 0 ? "" : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") + '"firstName":' + JSON.stringify(v.profile.firstName) + ',"lastName":' + JSON.stringify(v.profile.lastName) + ',"displayName":' + JSON.stringify(v.profile.displayName) + ',"dateOfBirth":"' + v.profile.dateOfBirth.toJSON() + '"},"role":' + sj_cguSMW.fn(v.role) + ',"status":' + sj_H7NdXp.fn(v.status) + ',"address":' + sj_LJrfVd.fn(v.address) + ',"paymentMethods":' + sj_rhxPRX.fn(v.paymentMethods) + ',"preferences":' + sj_Ywo0Ug.fn(v.preferences) + ',"createdAt":"' + v.createdAt.toJSON() + '","updatedAt":"' + v.updatedAt.toJSON() + '","tags":' + sj_IoMmkS.fn(v.tags) + "}";
  };
}, fn: void 0 }, "sj_cguSMW": { isNoop: false, typeName: "UserRole", fnID: "sj", jitFnHash: "sj_cguSMW", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_cguSMW(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_cguSMW(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_cguSMW(v) {
    if (v === "admin") {
      return JSON.stringify(v);
    } else if (v === "user") {
      return JSON.stringify(v);
    } else if (v === "guest") {
      return JSON.stringify(v);
    } else if (v === "moderator") {
      return JSON.stringify(v);
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_H7NdXp": { isNoop: false, typeName: "AccountStatus", fnID: "sj", jitFnHash: "sj_H7NdXp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_H7NdXp(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_H7NdXp(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_H7NdXp(v) {
    if (v === "active") {
      return JSON.stringify(v);
    } else if (v === "suspended") {
      return JSON.stringify(v);
    } else if (v === "pending_verification") {
      return JSON.stringify(v);
    } else if (v === "deactivated") {
      return JSON.stringify(v);
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_LJrfVd": { isNoop: false, typeName: "Address", fnID: "sj", jitFnHash: "sj_LJrfVd", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function sj_LJrfVd(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`, createJitFn: function get_sj_LJrfVd(utl) {
  return function sj_LJrfVd(v) {
    return '{"street":' + JSON.stringify(v.street) + ',"city":' + JSON.stringify(v.city) + ',"state":' + JSON.stringify(v.state) + ',"zipCode":' + JSON.stringify(v.zipCode) + ',"country":' + JSON.stringify(v.country) + "}";
  };
}, fn: void 0 }, "sj_rhxPRX": { isNoop: false, jitDependencies: ["sj_a0MWc6"], typeName: "array", fnID: "sj", jitFnHash: "sj_rhxPRX", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_a0MWc6 = utl.getJIT("sj_a0MWc6"); return function sj_rhxPRX(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_a0MWc6.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`, createJitFn: function get_sj_rhxPRX(utl) {
  const sj_a0MWc6 = utl.getJIT("sj_a0MWc6");
  return function sj_rhxPRX(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = sj_a0MWc6.fn(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_a0MWc6": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "PaymentMethod", fnID: "sj", jitFnHash: "sj_a0MWc6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function sj_a0MWc6(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`, createJitFn: function get_sj_a0MWc6(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
  const k_dbLFnd = ["type", "email"];
  return function sj_a0MWc6(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" && !NVlxlJHR(v, k_VP1pj5))) {
      return '{"type":' + JSON.stringify(v.type) + ',"lastFourDigits":' + JSON.stringify(v.lastFourDigits) + ',"expiryMonth":' + v.expiryMonth + ',"expiryYear":' + v.expiryYear + ',"brand":' + JSON.stringify(v.brand) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" && !NVlxlJHR(v, k_HPT1Zh))) {
      return '{"type":' + JSON.stringify(v.type) + ',"bankName":' + JSON.stringify(v.bankName) + ',"accountLastFour":' + JSON.stringify(v.accountLastFour) + ',"routingNumber":' + JSON.stringify(v.routingNumber) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string" && !NVlxlJHR(v, k_dbLFnd))) {
      return '{"type":' + JSON.stringify(v.type) + ',"email":' + JSON.stringify(v.email) + "}";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_Ywo0Ug": { isNoop: false, jitDependencies: ["sj_lXDVrh"], typeName: "UserPreferences", fnID: "sj", jitFnHash: "sj_Ywo0Ug", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_lXDVrh = utl.getJIT("sj_lXDVrh"); return function sj_Ywo0Ug(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_lXDVrh.fn(v.notifications)+'}'}`, createJitFn: function get_sj_Ywo0Ug(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_lXDVrh = utl.getJIT("sj_lXDVrh");
  return function sj_Ywo0Ug(v) {
    return '{"theme":' + (function() {
      if (v.theme === "light") {
        return JSON.stringify(v.theme);
      } else if (v.theme === "dark") {
        return JSON.stringify(v.theme);
      } else if (v.theme === "system") {
        return JSON.stringify(v.theme);
      } else {
        throw new Error(uErr0);
      }
    })() + ',"language":' + JSON.stringify(v.language) + ',"timezone":' + JSON.stringify(v.timezone) + ',"notifications":' + sj_lXDVrh.fn(v.notifications) + "}";
  };
}, fn: void 0 }, "sj_lXDVrh": { isNoop: false, typeName: "NotificationSettings", fnID: "sj", jitFnHash: "sj_lXDVrh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_lXDVrh(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`, createJitFn: function get_sj_lXDVrh(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_lXDVrh(v) {
    return '{"email":' + (v.email ? "true" : "false") + ',"sms":' + (v.sms ? "true" : "false") + ',"push":' + (v.push ? "true" : "false") + ',"frequency":' + (function() {
      if (v.frequency === "immediate") {
        return JSON.stringify(v.frequency);
      } else if (v.frequency === "daily") {
        return JSON.stringify(v.frequency);
      } else if (v.frequency === "weekly") {
        return JSON.stringify(v.frequency);
      } else {
        throw new Error(uErr0);
      }
    })() + "}";
  };
}, fn: void 0 }, "is_fZZjDz": { isNoop: false, jitDependencies: ["is_r1FFzz"], typeName: "params", fnID: "is", jitFnHash: "is_fZZjDz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const is_r1FFzz = utl.getJIT("is_r1FFzz"); return function is_fZZjDz(v){return (v.length <= 1 && is_r1FFzz.fn(v[0]))}`, createJitFn: function get_is_fZZjDz(utl) {
  const is_r1FFzz = utl.getJIT("is_r1FFzz");
  return function is_fZZjDz(v) {
    return v.length <= 1 && is_r1FFzz.fn(v[0]);
  };
}, fn: void 0 }, "is_r1FFzz": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "SimpleUser", fnID: "is", jitFnHash: "is_r1FFzz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
const kA_r1FFzz = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_r1FFzz(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_r1FFzz))}`, createJitFn: function get_is_r1FFzz(utl) {
  const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_r1FFzz(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.name === "string" && typeof v.surname === "string" && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_r1FFzz);
  };
}, fn: void 0 }, "te_fZZjDz": { isNoop: false, jitDependencies: ["te_r1FFzz"], pureFnDependencies: ["mion::newRunTypeErr"], typeName: "params", fnID: "te", jitFnHash: "te_fZZjDz", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const te_r1FFzz = utl.getJIT("te_r1FFzz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_fZZjDz(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_r1FFzz.fn(v[0],pth,er); pth.splice(-1);} return er}`, createJitFn: function get_te_fZZjDz(utl) {
  const te_r1FFzz = utl.getJIT("te_r1FFzz");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_fZZjDz(v, pth = [], er = []) {
    if (v.length > 1) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_r1FFzz.fn(v[0], pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_r1FFzz": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "SimpleUser", fnID: "te", jitFnHash: "te_r1FFzz", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
const kA_r1FFzz = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_r1FFzz(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 
 const unk0 = lTBP5VNV(v, k_r1FFzz);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_r1FFzz(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_r1FFzz(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
      if (typeof v.surname !== "string") Iqa2M8Ms(pth, er, "string", ["surname"]);
      if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
      const unk0 = lTBP5VNV(v, k_r1FFzz);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_fZZjDz": { isNoop: true, typeName: "params", fnID: "tj", jitFnHash: "tj_fZZjDz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_fZZjDz(v){return v}", createJitFn: function get_tj_fZZjDz(utl) {
  return function tj_fZZjDz(v) {
    return v;
  };
}, fn: void 0 }, "tj_r1FFzz": { isNoop: true, typeName: "SimpleUser", fnID: "tj", jitFnHash: "tj_r1FFzz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_r1FFzz(v){return v}", createJitFn: function get_tj_r1FFzz(utl) {
  return function tj_r1FFzz(v) {
    return v;
  };
}, fn: void 0 }, "fj_fZZjDz": { isNoop: false, jitDependencies: ["fj_r1FFzz"], typeName: "params", fnID: "fj", jitFnHash: "fj_fZZjDz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const fj_r1FFzz = utl.getJIT("fj_r1FFzz"); return function fj_fZZjDz(v){v[0] = fj_r1FFzz.fn(v[0]); return v}`, createJitFn: function get_fj_fZZjDz(utl) {
  const fj_r1FFzz = utl.getJIT("fj_r1FFzz");
  return function fj_fZZjDz(v) {
    v[0] = fj_r1FFzz.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "fj_r1FFzz": { isNoop: false, typeName: "SimpleUser", fnID: "fj", jitFnHash: "fj_r1FFzz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_r1FFzz(v){v.lastUpdate = new Date(v.lastUpdate); return v}", createJitFn: function get_fj_r1FFzz(utl) {
  return function fj_r1FFzz(v) {
    v.lastUpdate = new Date(v.lastUpdate);
    return v;
  };
}, fn: void 0 }, "sj_fZZjDz": { isNoop: false, jitDependencies: ["sj_r1FFzz"], typeName: "params", fnID: "sj", jitFnHash: "sj_fZZjDz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const sj_r1FFzz = utl.getJIT("sj_r1FFzz"); return function sj_fZZjDz(v){return '['+sj_r1FFzz.fn(v[0])+']'}`, createJitFn: function get_sj_fZZjDz(utl) {
  const sj_r1FFzz = utl.getJIT("sj_r1FFzz");
  return function sj_fZZjDz(v) {
    return "[" + sj_r1FFzz.fn(v[0]) + "]";
  };
}, fn: void 0 }, "sj_r1FFzz": { isNoop: false, typeName: "SimpleUser", fnID: "sj", jitFnHash: "sj_r1FFzz", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function sj_r1FFzz(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`, createJitFn: function get_sj_r1FFzz(utl) {
  return function sj_r1FFzz(v) {
    return '{"id":' + v.id + ',"name":' + JSON.stringify(v.name) + ',"surname":' + JSON.stringify(v.surname) + ',"lastUpdate":"' + v.lastUpdate.toJSON() + '"}';
  };
}, fn: void 0 }, "is_M6eQY8": { isNoop: false, pureFnDependencies: ["mion::hasUnknownKeysFromArray"], typeName: "SimpleUser", fnID: "is", jitFnHash: "is_M6eQY8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict'; const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
const kA_M6eQY8 = [];
const opts_hk0 = {};
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_M6eQY8(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_M6eQY8))}`, createJitFn: function get_is_M6eQY8(utl) {
  const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
  const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
  return function is_M6eQY8(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.name === "string" && typeof v.surname === "string" && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_M6eQY8);
  };
}, fn: void 0 }, "te_M6eQY8": { isNoop: false, pureFnDependencies: ["mion::newRunTypeErr", "mion::getUnknownKeysFromArray"], typeName: "SimpleUser", fnID: "te", jitFnHash: "te_M6eQY8", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
const kA_M6eQY8 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray"); return function te_M6eQY8(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 
 const unk0 = lTBP5VNV(v, k_M6eQY8);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`, createJitFn: function get_te_M6eQY8(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
  const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
  return function te_M6eQY8(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
      if (typeof v.surname !== "string") Iqa2M8Ms(pth, er, "string", ["surname"]);
      if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
      const unk0 = lTBP5VNV(v, k_M6eQY8);
      if (unk0) {
        for (const ky0 of unk0) {
          Iqa2M8Ms(pth, er, "never", [ky0]);
        }
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_M6eQY8": { isNoop: true, typeName: "SimpleUser", fnID: "tj", jitFnHash: "tj_M6eQY8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function tj_M6eQY8(v){return v}", createJitFn: function get_tj_M6eQY8(utl) {
  return function tj_M6eQY8(v) {
    return v;
  };
}, fn: void 0 }, "fj_M6eQY8": { isNoop: false, typeName: "SimpleUser", fnID: "fj", jitFnHash: "fj_M6eQY8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: "'use strict';  return function fj_M6eQY8(v){v.lastUpdate = new Date(v.lastUpdate); return v}", createJitFn: function get_fj_M6eQY8(utl) {
  return function fj_M6eQY8(v) {
    v.lastUpdate = new Date(v.lastUpdate);
    return v;
  };
}, fn: void 0 }, "sj_M6eQY8": { isNoop: false, typeName: "SimpleUser", fnID: "sj", jitFnHash: "sj_M6eQY8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `'use strict';  return function sj_M6eQY8(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`, createJitFn: function get_sj_M6eQY8(utl) {
  return function sj_M6eQY8(v) {
    return '{"id":' + v.id + ',"name":' + JSON.stringify(v.name) + ',"surname":' + JSON.stringify(v.surname) + ',"lastUpdate":"' + v.lastUpdate.toJSON() + '"}';
  };
}, fn: void 0 } };
const routerCache = { "mion@methodsMetadata": { paramNames: ["methodsIds", "getAllRemoteMethods"], type: 2, id: "mion@methodsMetadata", isAsync: false, hasReturnData: true, paramsJitHash: "Rp3hpd", returnJitHash: "sw8k4O", pointer: ["mion@methodsMetadata"], nestLevel: 0, options: { runOnError: true, validateParams: true, validateReturn: false, strictTypes: true } }, "@thrownErrors": { paramNames: [], type: 1, id: "@thrownErrors", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "cyiqwa", pointer: ["@thrownErrors"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } }, "mion@notFound": { paramNames: [], type: 1, id: "mion@notFound", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "OyeKwa", pointer: ["mion@notFound"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } }, "mion@platformError": { paramNames: [], type: 1, id: "mion@platformError", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "bpJFJt", pointer: ["mion@platformError"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } }, "mion@methodsMetadataById": { paramNames: ["methodsIds", "getAllRemoteMethods"], type: 1, id: "mion@methodsMetadataById", isAsync: false, hasReturnData: true, paramsJitHash: "N5pt7p", returnJitHash: "RVhHjV", pointer: ["mion@methodsMetadataById"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "stringifyJson", strictTypes: true } }, "hello": { paramNames: [], type: 1, id: "hello", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "HZ3NL5", pointer: ["hello"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } }, "updateUser": { paramNames: ["user"], type: 1, id: "updateUser", isAsync: false, hasReturnData: true, paramsJitHash: "R35XJV", returnJitHash: "OAqgWS", pointer: ["updateUser"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } }, "updateSimpleUser": { paramNames: ["user"], type: 1, id: "updateSimpleUser", isAsync: false, hasReturnData: true, paramsJitHash: "fZZjDz", returnJitHash: "M6eQY8", pointer: ["updateSimpleUser"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json", strictTypes: true } } };
const aotCaches = { jitFnsCache, pureFnsCache, routerCache };
const __ΩUserRole = ["admin", "user", "guest", "moderator", "UserRole", 'P.!.".#.$Jw%y'];
const __ΩAccountStatus = ["active", "suspended", "pending_verification", "deactivated", "AccountStatus", 'P.!.".#.$Jw%y'];
const __ΩAddress = ["street", "city", "state", "zipCode", "country", "Address", 'P&4!&4"&4#&4$&4%Mw&y'];
const __ΩUserPreferences = ["light", "dark", "system", "theme", "language", "timezone", () => __ΩNotificationSettings, "notifications", "UserPreferences", `PP.!.".#J4$&4%&4&n'4(Mw)y`];
const __ΩNotificationSettings = ["email", "sms", "push", "immediate", "daily", "weekly", "frequency", "NotificationSettings", `P)4!)4")4#P.$.%.&J4'Mw(y`];
const __ΩPaymentMethod = ["credit_card", "type", "lastFourDigits", "expiryMonth", "expiryYear", "brand", "bank_account", "bankName", "accountLastFour", "routingNumber", "paypal", "email", "PaymentMethod", `PP.!4"&4#'4$'4%&4&MP.'4"&4(&4)&4*MP.+4"&4,MJw-y`];
const __ΩUser = ["id", "username", "email", "firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth", "profile", () => __ΩUserRole, "role", () => __ΩAccountStatus, "status", () => __ΩAddress, "address", () => __ΩPaymentMethod, "paymentMethods", () => __ΩUserPreferences, "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags", "User", `P'4!&4"&4#P&4$&4%&4&&4'8&4(8T4)M4*n+4,n-4.n/40n1F42n344T45T46T478&F48Mw9y`];
const __ΩSimpleUser = ["id", "name", "surname", "lastUpdate", "SimpleUser", `P'4!&4"&4#T4$Mw%y`];
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
  }, ["ctx", () => __ΩUser, "user", () => __ΩUser, "", 'P"2!n"2#n$/%'])),
  updateSimpleUser: router.route(__assignType((ctx, user) => {
    user.lastUpdate = /* @__PURE__ */ new Date();
    return user;
  }, ["ctx", () => __ΩSimpleUser, "user", () => __ΩSimpleUser, "", 'P"2!n"2#n$/%']))
};
exports.aotCaches = aotCaches;
exports.routes = routes;
//# sourceMappingURL=mionRoutes-CQQ65Qc8.js.map
