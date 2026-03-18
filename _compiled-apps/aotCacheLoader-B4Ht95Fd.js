"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const mionRoutes = require("./mionRoutes-D2bBEZx4.js");
const pureFnsCache = {
  mion: {
    asJSONString: {
      namespace: "mion",
      paramNames: [],
      code: `if (typeof Bun !== "undefined") return JSON.stringify;
  const STR_ESCAPE = /[\\u0000-\\u001f\\u0022\\u005c\\ud800-\\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  };`,
      fnName: "asJSONString",
      bodyHash: "4WYkR03dXOzAUe",
      pureFnDependencies: [],
      createPureFn: function get_asJSONString() {
        if (typeof Bun !== "undefined") return JSON.stringify;
        const STR_ESCAPE = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
        const MAX_SCAPE_TEST_LENGTH = 1e3;
        return function _asJSONStringRegexOnly(str) {
          if (
            str.length < MAX_SCAPE_TEST_LENGTH &&
            STR_ESCAPE.test(str) === false
          ) {
            return '"' + str + '"';
          } else {
            return JSON.stringify(str);
          }
        };
      },
      fn: void 0,
    },
    getUnknownKeysFromArray: {
      namespace: "mion",
      paramNames: [],
      code: 'const MAX_UNKNOWN_KEYS = 10;\n  return function _getUnknownKeysFromArray(obj, keys) {\n    const unknownKeys = [];\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) {\n        unknownKeys.push(prop);\n        if (unknownKeys.length >= MAX_UNKNOWN_KEYS) throw new Error("Too many unknown keys");\n      }\n    }\n    return unknownKeys;\n  };',
      fnName: "getUnknownKeysFromArray",
      bodyHash: "D2CDXI8OoGLGyW",
      pureFnDependencies: [],
      createPureFn: function get_getUnknownKeysFromArray() {
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
              if (unknownKeys.length >= MAX_UNKNOWN_KEYS)
                throw new Error("Too many unknown keys");
            }
          }
          return unknownKeys;
        };
      },
      fn: void 0,
    },
    hasUnknownKeysFromArray: {
      namespace: "mion",
      paramNames: [],
      code: "return function _hasUnknownKeysFromArray(obj, keys) {\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) return true;\n    }\n    return false;\n  };",
      fnName: "hasUnknownKeysFromArray",
      bodyHash: "K7uzDGNnPwcqQ9",
      pureFnDependencies: [],
      createPureFn: function get_hasUnknownKeysFromArray() {
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
      },
      fn: void 0,
    },
    newRunTypeErr: {
      namespace: "mion",
      paramNames: [],
      code: "return function _err(p\\u03BBth, \\u03B5rr, expected, accessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const runTypeErr = { expected, path };\n    \\u03B5rr.push(runTypeErr);\n  };",
      fnName: "newRunTypeErr",
      bodyHash: "eCwDrS1nuSv7ge",
      pureFnDependencies: [],
      createPureFn: function get_newRunTypeErr() {
        return function _err(pλth, εrr, expected, accessPath) {
          const path = (accessPath == null ? void 0 : accessPath.length)
            ? [...pλth, ...accessPath]
            : [...pλth];
          const runTypeErr = { expected, path };
          εrr.push(runTypeErr);
        };
      },
      fn: void 0,
    },
    formatErr: {
      namespace: "mion",
      paramNames: [],
      code: "return function _formatErr(p\\u03BBth, \\u03B5rr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const formatPath = fmtAccessPath?.length ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];\n    const format = { name: fmtName, formatPath, val: paramVal };\n    const runTypeErr = { expected, path, format };\n    \\u03B5rr.push(runTypeErr);\n  };",
      fnName: "formatErr",
      bodyHash: "2isPiuLWPtohVR",
      pureFnDependencies: [],
      createPureFn: function get_formatErr() {
        return function _formatErr(
          pλth,
          εrr,
          expected,
          fmtName,
          paramName,
          paramVal,
          fmtPath,
          accessPath,
          fmtAccessPath,
        ) {
          const path = (accessPath == null ? void 0 : accessPath.length)
            ? [...pλth, ...accessPath]
            : [...pλth];
          const formatPath = (
            fmtAccessPath == null ? void 0 : fmtAccessPath.length
          )
            ? [...fmtPath, ...fmtAccessPath, paramName]
            : [...fmtPath, paramName];
          const format = { name: fmtName, formatPath, val: paramVal };
          const runTypeErr = { expected, path, format };
          εrr.push(runTypeErr);
        };
      },
      fn: void 0,
    },
    safeIterableKey: {
      namespace: "mion",
      paramNames: [],
      code: 'return function _safeKey(value) {\n    if (value === void 0) return null;\n    if (value === null) return null;\n    const type = typeof value;\n    if (type === "number" || type === "string" || type === "boolean") return value;\n    return null;\n  };',
      fnName: "safeIterableKey",
      bodyHash: "BrjL47E-GRjUpQ",
      pureFnDependencies: [],
      createPureFn: function get_safeIterableKey() {
        return function _safeKey(value) {
          if (value === void 0) return null;
          if (value === null) return null;
          const type = typeof value;
          if (type === "number" || type === "string" || type === "boolean")
            return value;
          return null;
        };
      },
      fn: void 0,
    },
  },
};
const jitFnsCache = {
  is_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "is",
    jitFnHash: "is_cyiqwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_bpJFJt = utl.getJIT("is_bpJFJt"); return function is_cyiqwa(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_bpJFJt.fn(v[p0]))) return false;} return true;})())}`,
    jitDependencies: ["is_bpJFJt"],
    pureFnDependencies: [],
    createJitFn: function get_is_cyiqwa(utl) {
      const is_bpJFJt = utl.getJIT("is_bpJFJt");
      return function is_cyiqwa(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (function () {
            for (const p0 in v) {
              if (!is_bpJFJt.fn(v[p0])) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "is",
    jitFnHash: "is_bpJFJt",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_bpJFJt = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_bpJFJt(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && typeof v.type === 'string' && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_bpJFJt))}`,
    jitDependencies: ["is_Co6w6E"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_bpJFJt(utl) {
      const is_Co6w6E = utl.getJIT("is_Co6w6E");
      const k_bpJFJt = [
        "mion@isΣrrθr",
        "type",
        "id",
        "publicMessage",
        "errorData",
        "statusCode",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_bpJFJt(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          v["mion@isΣrrθr"] === true &&
          typeof v.type === "string" &&
          (v.id === void 0 ||
            Number.isFinite(v.id) ||
            typeof v.id === "string") &&
          typeof v.publicMessage === "string" &&
          (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) &&
          (v.statusCode === void 0 || Number.isFinite(v.statusCode)) &&
          !NVlxlJHR(v, k_bpJFJt)
        );
      };
    },
    fn: void 0,
  },
  is_Co6w6E: {
    isNoop: false,
    typeName: "Readonly",
    fnID: "is",
    jitFnHash: "is_Co6w6E",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function is_Co6w6E(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(true)) return false;} return true;})())}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_Co6w6E(utl) {
      return function is_Co6w6E(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          /* @__PURE__ */ (function () {
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  te_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "te",
    jitFnHash: "te_cyiqwa",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_bpJFJt = utl.getJIT("te_bpJFJt");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_cyiqwa(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 for (const p0 in v) {pth.push(p0); te_bpJFJt.fn(v[p0],pth,er); pth.splice(-1);}
 
 }
 ; return er}`,
    jitDependencies: ["te_bpJFJt"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_cyiqwa(utl) {
      const te_bpJFJt = utl.getJIT("te_bpJFJt");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_cyiqwa(v, pth = [], er = []) {
        if (
          !(
            typeof v === "object" &&
            v !== null &&
            !Array.isArray(v) &&
            Object.prototype.toString.call(v) === "[object Object]"
          )
        ) {
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
    },
    fn: void 0,
  },
  te_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "te",
    jitFnHash: "te_bpJFJt",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_Co6w6E = utl.getJIT("te_Co6w6E");
const k_bpJFJt = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_bpJFJt = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_bpJFJt(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (typeof v.type !== 'string') Iqa2M8Ms(pth,er,"string",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_Co6w6E.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 
 const unk0 = lTBP5VNV(v, k_bpJFJt);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: ["te_Co6w6E"],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_bpJFJt(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const te_Co6w6E = utl.getJIT("te_Co6w6E");
      const k_bpJFJt = [
        "mion@isΣrrθr",
        "type",
        "id",
        "publicMessage",
        "errorData",
        "statusCode",
      ];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_bpJFJt(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "class");
        } else {
          if (v["mion@isΣrrθr"] !== true)
            Iqa2M8Ms(pth, er, "literal", ["mion@isΣrrθr"]);
          if (typeof v.type !== "string") Iqa2M8Ms(pth, er, "string", ["type"]);
          if (v.id !== void 0) {
            if (!(Number.isFinite(v.id) || typeof v.id === "string"))
              Iqa2M8Ms(pth, er, "union", ["id"]);
          }
          if (typeof v.publicMessage !== "string")
            Iqa2M8Ms(pth, er, "string", ["publicMessage"]);
          if (v.errorData !== void 0) {
            pth.push("errorData");
            te_Co6w6E.fn(v.errorData, pth, er);
            pth.splice(-1);
          }
          if (v.statusCode !== void 0) {
            if (!Number.isFinite(v.statusCode))
              Iqa2M8Ms(pth, er, "number", ["statusCode"]);
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
    },
    fn: void 0,
  },
  te_Co6w6E: {
    isNoop: false,
    typeName: "Readonly",
    fnID: "te",
    jitFnHash: "te_Co6w6E",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Co6w6E(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_Co6w6E(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_Co6w6E(v, pth = [], er = []) {
        if (
          !(
            typeof v === "object" &&
            v !== null &&
            !Array.isArray(v) &&
            Object.prototype.toString.call(v) === "[object Object]"
          )
        ) {
          Iqa2M8Ms(pth, er, "object");
        }
        return er;
      };
    },
    fn: void 0,
  },
  tj_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "tj",
    jitFnHash: "tj_cyiqwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_bpJFJt = utl.getJIT("tj_bpJFJt"); return function tj_cyiqwa(v){for (const p0 in v){ v[p0] = tj_bpJFJt.fn(v[p0]);} return v}`,
    jitDependencies: ["tj_bpJFJt"],
    pureFnDependencies: [],
    createJitFn: function get_tj_cyiqwa(utl) {
      const tj_bpJFJt = utl.getJIT("tj_bpJFJt");
      return function tj_cyiqwa(v) {
        for (const p0 in v) {
          v[p0] = tj_bpJFJt.fn(v[p0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tj",
    jitFnHash: "tj_bpJFJt",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_bpJFJt(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_bpJFJt(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_bpJFJt(v) {
        if (v.id !== void 0) {
          if (Number.isFinite(v.id));
          else if (typeof v.id === "string");
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_Co6w6E: {
    isNoop: true,
    typeName: "Readonly",
    fnID: "tj",
    jitFnHash: "tj_Co6w6E",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_Co6w6E(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_Co6w6E(utl) {
      return function tj_Co6w6E(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "fj",
    jitFnHash: "fj_cyiqwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_bpJFJt = utl.getJIT("fj_bpJFJt"); return function fj_cyiqwa(v){for (const p0 in v){ v[p0] = fj_bpJFJt.fn(v[p0]);} return v}`,
    jitDependencies: ["fj_bpJFJt"],
    pureFnDependencies: [],
    createJitFn: function get_fj_cyiqwa(utl) {
      const fj_bpJFJt = utl.getJIT("fj_bpJFJt");
      return function fj_cyiqwa(v) {
        for (const p0 in v) {
          v[p0] = fj_bpJFJt.fn(v[p0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fj",
    jitFnHash: "fj_bpJFJt",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_bpJFJt(v){
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
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_bpJFJt(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_bpJFJt(v) {
        var _a;
        if (v.id !== void 0) {
          if (
            ((_a = v.id) == null ? void 0 : _a.length) === 2 &&
            Array.isArray(v.id) &&
            typeof v.id[0] === "number"
          ) {
            const dec0 = v.id[0];
            v.id = v.id[1];
            if (dec0 === 0);
            else if (dec0 === 1);
            else {
              throw new Error(uErr0);
            }
          }
        }
        let desFn1 = utl.getDeserializeFn("RpcError");
        if (desFn1) {
          v = desFn1(v);
        } else if ((desFn1 = utl.getSerializeClass("RpcError"))) {
          v = new desFn1(v);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_Co6w6E: {
    isNoop: true,
    typeName: "Readonly",
    fnID: "fj",
    jitFnHash: "fj_Co6w6E",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_Co6w6E(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_Co6w6E(utl) {
      return function fj_Co6w6E(v) {
        return v;
      };
    },
    fn: void 0,
  },
  sj_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "sj",
    jitFnHash: "sj_cyiqwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_bpJFJt = utl.getJIT("sj_bpJFJt");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_cyiqwa(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_bpJFJt.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_bpJFJt"],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_cyiqwa(utl) {
      const sj_bpJFJt = utl.getJIT("sj_bpJFJt");
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_cyiqwa(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + sj_bpJFJt.fn(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "sj",
    jitFnHash: "sj_bpJFJt",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_bpJFJt(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`,
    jitDependencies: ["sj_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_sj_bpJFJt(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
      return function sj_bpJFJt(v) {
        return (
          "{" +
          (v.id === void 0
            ? ""
            : '"id":' +
              (function () {
                if (Number.isFinite(v.id)) {
                  return v.id;
                } else if (typeof v.id === "string") {
                  return JSON.stringify(v.id);
                } else {
                  throw new Error(uErr0);
                }
              })() +
              ",") +
          (v.errorData === void 0
            ? ""
            : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") +
          (v.statusCode === void 0
            ? ""
            : '"statusCode":' + v.statusCode + ",") +
          '"mion@isΣrrθr":' +
          (v["mion@isΣrrθr"] ? "true" : "false") +
          ',"type":' +
          JSON.stringify(v.type) +
          ',"publicMessage":' +
          JSON.stringify(v.publicMessage) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_Co6w6E: {
    isNoop: false,
    typeName: "Readonly",
    fnID: "sj",
    jitFnHash: "sj_Co6w6E",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_Co6w6E(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + JSON.stringify(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_Co6w6E(utl) {
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_Co6w6E(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + JSON.stringify(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  tBi_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "tBi",
    jitFnHash: "tBi_cyiqwa",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_bpJFJt = utl.getJIT("tBi_bpJFJt"); return function tBi_cyiqwa(v,Ser){
 let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;
 for (const p0 in v) {Ser.serString(p0); tBi_bpJFJt.fn(v[p0],Ser); cnt0++;}
 Ser.view.setUint32(piI0, cnt0, 1);
 ; return Ser}`,
    jitDependencies: ["tBi_bpJFJt"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_cyiqwa(utl) {
      const tBi_bpJFJt = utl.getJIT("tBi_bpJFJt");
      return function tBi_cyiqwa(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          tBi_bpJFJt.fn(v[p0], Ser);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tBi",
    jitFnHash: "tBi_bpJFJt",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E"); return function tBi_bpJFJt(v,Ser){;Ser.serString(v.type);Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_Co6w6E.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`,
    jitDependencies: ["tBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_bpJFJt(utl) {
      const uErr1 =
        "Can not encode union to binary: item does not belong to the union";
      const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E");
      return function tBi_bpJFJt(v, Ser) {
        Ser.serString(v.type);
        Ser.serString(v.publicMessage);
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.id !== void 0) {
          if (Number.isFinite(v.id)) {
            Ser.view.setUint8(Ser.index++, 0);
            Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
          } else if (typeof v.id === "string") {
            Ser.view.setUint8(Ser.index++, 1);
            Ser.serString(v.id);
          } else {
            throw new Error(uErr1);
          }
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.errorData !== void 0) {
          tBi_Co6w6E.fn(v.errorData, Ser);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        if (v.statusCode !== void 0) {
          Ser.view.setFloat64(Ser.index, v.statusCode, 1, (Ser.index += 8));
          Ser.setBitMask(bmI0, 2 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Co6w6E: {
    isNoop: false,
    typeName: "Readonly",
    fnID: "tBi",
    jitFnHash: "tBi_Co6w6E",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_Co6w6E(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); Ser.serString(JSON.stringify(v[p0])); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Co6w6E(utl) {
      return function tBi_Co6w6E(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          Ser.serString(JSON.stringify(v[p0]));
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_cyiqwa: {
    isNoop: false,
    typeName: "Record",
    fnID: "fBi",
    jitFnHash: "fBi_cyiqwa",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_bpJFJt = utl.getJIT("fBi_bpJFJt"); return function fBi_cyiqwa(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_bpJFJt.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_bpJFJt"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_cyiqwa(utl) {
      const fBi_bpJFJt = utl.getJIT("fBi_bpJFJt");
      return function fBi_cyiqwa(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = fBi_bpJFJt.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_bpJFJt: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fBi",
    jitFnHash: "fBi_bpJFJt",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not binary decode union: invalid union index";
const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E"); return function fBi_bpJFJt(ret,Des){ret = {"mion@isΣrrθr":true,type:Des.desString(),publicMessage:Des.desString()}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
 const dec1 = Des.view.getUint8(Des.index++);
 if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}
 else {throw new Error(uErr1)}
 ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_Co6w6E.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}`,
    jitDependencies: ["fBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_bpJFJt(utl) {
      const uErr1 = "Can not binary decode union: invalid union index";
      const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E");
      return function fBi_bpJFJt(ret, Des) {
        ret = {
          "mion@isΣrrθr": true,
          type: Des.desString(),
          publicMessage: Des.desString(),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          const dec1 = Des.view.getUint8(Des.index++);
          if (dec1 === 0) {
            ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
          } else if (dec1 === 1) {
            ret.id = Des.desString();
          } else {
            throw new Error(uErr1);
          }
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.errorData = fBi_Co6w6E.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {
          ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
        }
        let desFn0 = utl.getDeserializeFn("RpcError");
        if (desFn0) {
          ret = desFn0(ret);
        } else if ((desFn0 = utl.getSerializeClass("RpcError"))) {
          ret = new desFn0(ret);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Co6w6E: {
    isNoop: false,
    typeName: "Readonly",
    fnID: "fBi",
    jitFnHash: "fBi_Co6w6E",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_Co6w6E(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = JSON.parse(Des.desString());} return ret}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Co6w6E(utl) {
      return function fBi_Co6w6E(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = JSON.parse(Des.desString());
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "is",
    jitFnHash: "is_OyeKwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_OyeKwa = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_OyeKwa(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && v.type === "route-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)) && !NVlxlJHR(v, k_OyeKwa))}`,
    jitDependencies: ["is_Co6w6E"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_OyeKwa(utl) {
      const is_Co6w6E = utl.getJIT("is_Co6w6E");
      const k_OyeKwa = [
        "mion@isΣrrθr",
        "type",
        "id",
        "publicMessage",
        "errorData",
        "statusCode",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_OyeKwa(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          v["mion@isΣrrθr"] === true &&
          v.type === "route-not-found" &&
          (v.id === void 0 ||
            Number.isFinite(v.id) ||
            typeof v.id === "string") &&
          typeof v.publicMessage === "string" &&
          (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) &&
          (v.statusCode === void 0 || Number.isFinite(v.statusCode)) &&
          !NVlxlJHR(v, k_OyeKwa)
        );
      };
    },
    fn: void 0,
  },
  te_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "te",
    jitFnHash: "te_OyeKwa",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_Co6w6E = utl.getJIT("te_Co6w6E");
const k_OyeKwa = ["mion@isΣrrθr", "type", "id", "publicMessage", "errorData", "statusCode"];
const kA_OyeKwa = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_OyeKwa(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (v.type !== "route-not-found") Iqa2M8Ms(pth,er,"literal",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_Co6w6E.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 
 const unk0 = lTBP5VNV(v, k_OyeKwa);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: ["te_Co6w6E"],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_OyeKwa(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const te_Co6w6E = utl.getJIT("te_Co6w6E");
      const k_OyeKwa = [
        "mion@isΣrrθr",
        "type",
        "id",
        "publicMessage",
        "errorData",
        "statusCode",
      ];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_OyeKwa(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "class");
        } else {
          if (v["mion@isΣrrθr"] !== true)
            Iqa2M8Ms(pth, er, "literal", ["mion@isΣrrθr"]);
          if (v.type !== "route-not-found")
            Iqa2M8Ms(pth, er, "literal", ["type"]);
          if (v.id !== void 0) {
            if (!(Number.isFinite(v.id) || typeof v.id === "string"))
              Iqa2M8Ms(pth, er, "union", ["id"]);
          }
          if (typeof v.publicMessage !== "string")
            Iqa2M8Ms(pth, er, "string", ["publicMessage"]);
          if (v.errorData !== void 0) {
            pth.push("errorData");
            te_Co6w6E.fn(v.errorData, pth, er);
            pth.splice(-1);
          }
          if (v.statusCode !== void 0) {
            if (!Number.isFinite(v.statusCode))
              Iqa2M8Ms(pth, er, "number", ["statusCode"]);
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
    },
    fn: void 0,
  },
  tj_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tj",
    jitFnHash: "tj_OyeKwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_OyeKwa(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_OyeKwa(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_OyeKwa(v) {
        if (v.id !== void 0) {
          if (Number.isFinite(v.id));
          else if (typeof v.id === "string");
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fj",
    jitFnHash: "fj_OyeKwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_OyeKwa(v){
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
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_OyeKwa(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_OyeKwa(v) {
        var _a;
        if (v.id !== void 0) {
          if (
            ((_a = v.id) == null ? void 0 : _a.length) === 2 &&
            Array.isArray(v.id) &&
            typeof v.id[0] === "number"
          ) {
            const dec0 = v.id[0];
            v.id = v.id[1];
            if (dec0 === 0);
            else if (dec0 === 1);
            else {
              throw new Error(uErr0);
            }
          }
        }
        let desFn1 = utl.getDeserializeFn("RpcError");
        if (desFn1) {
          v = desFn1(v);
        } else if ((desFn1 = utl.getSerializeClass("RpcError"))) {
          v = new desFn1(v);
        }
        return v;
      };
    },
    fn: void 0,
  },
  sj_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "sj",
    jitFnHash: "sj_OyeKwa",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_OyeKwa(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`,
    jitDependencies: ["sj_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_sj_OyeKwa(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
      return function sj_OyeKwa(v) {
        return (
          "{" +
          (v.id === void 0
            ? ""
            : '"id":' +
              (function () {
                if (Number.isFinite(v.id)) {
                  return v.id;
                } else if (typeof v.id === "string") {
                  return JSON.stringify(v.id);
                } else {
                  throw new Error(uErr0);
                }
              })() +
              ",") +
          (v.errorData === void 0
            ? ""
            : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") +
          (v.statusCode === void 0
            ? ""
            : '"statusCode":' + v.statusCode + ",") +
          '"mion@isΣrrθr":' +
          (v["mion@isΣrrθr"] ? "true" : "false") +
          ',"type":' +
          JSON.stringify(v.type) +
          ',"publicMessage":' +
          JSON.stringify(v.publicMessage) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  tBi_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tBi",
    jitFnHash: "tBi_OyeKwa",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E"); return function tBi_OyeKwa(v,Ser){;Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_Co6w6E.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`,
    jitDependencies: ["tBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_OyeKwa(utl) {
      const uErr1 =
        "Can not encode union to binary: item does not belong to the union";
      const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E");
      return function tBi_OyeKwa(v, Ser) {
        Ser.serString(v.publicMessage);
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.id !== void 0) {
          if (Number.isFinite(v.id)) {
            Ser.view.setUint8(Ser.index++, 0);
            Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
          } else if (typeof v.id === "string") {
            Ser.view.setUint8(Ser.index++, 1);
            Ser.serString(v.id);
          } else {
            throw new Error(uErr1);
          }
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.errorData !== void 0) {
          tBi_Co6w6E.fn(v.errorData, Ser);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        if (v.statusCode !== void 0) {
          Ser.view.setFloat64(Ser.index, v.statusCode, 1, (Ser.index += 8));
          Ser.setBitMask(bmI0, 2 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_OyeKwa: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fBi",
    jitFnHash: "fBi_OyeKwa",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not binary decode union: invalid union index";
const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E"); return function fBi_OyeKwa(ret,Des){ret = {"mion@isΣrrθr":true,type:"route-not-found",publicMessage:Des.desString()}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
 const dec1 = Des.view.getUint8(Des.index++);
 if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}
 else {throw new Error(uErr1)}
 ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_Co6w6E.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}`,
    jitDependencies: ["fBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_OyeKwa(utl) {
      const uErr1 = "Can not binary decode union: invalid union index";
      const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E");
      return function fBi_OyeKwa(ret, Des) {
        ret = {
          "mion@isΣrrθr": true,
          type: "route-not-found",
          publicMessage: Des.desString(),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          const dec1 = Des.view.getUint8(Des.index++);
          if (dec1 === 0) {
            ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
          } else if (dec1 === 1) {
            ret.id = Des.desString();
          } else {
            throw new Error(uErr1);
          }
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.errorData = fBi_Co6w6E.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {
          ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
        }
        let desFn0 = utl.getDeserializeFn("RpcError");
        if (desFn0) {
          ret = desFn0(ret);
        } else if ((desFn0 = utl.getSerializeClass("RpcError"))) {
          ret = new desFn0(ret);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "is",
    jitFnHash: "is_N5pt7p",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_v7nFN3 = utl.getJIT("is_v7nFN3"); return function is_N5pt7p(v){return (v.length <= 2 && is_v7nFN3.fn(v[0]) && (v[1] === undefined || (typeof v[1] === 'boolean')))}`,
    jitDependencies: ["is_v7nFN3"],
    pureFnDependencies: [],
    createJitFn: function get_is_N5pt7p(utl) {
      const is_v7nFN3 = utl.getJIT("is_v7nFN3");
      return function is_N5pt7p(v) {
        return (
          v.length <= 2 &&
          is_v7nFN3.fn(v[0]) &&
          (v[1] === void 0 || typeof v[1] === "boolean")
        );
      };
    },
    fn: void 0,
  },
  is_v7nFN3: {
    isNoop: false,
    typeName: "array",
    fnID: "is",
    jitFnHash: "is_v7nFN3",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function is_v7nFN3(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_v7nFN3(utl) {
      return function is_v7nFN3(v) {
        if (!Array.isArray(v)) return false;
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = typeof v[i0] === "string";
          if (!res0) return false;
        }
        return true;
      };
    },
    fn: void 0,
  },
  te_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "te",
    jitFnHash: "te_N5pt7p",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_v7nFN3 = utl.getJIT("te_v7nFN3");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_N5pt7p(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_v7nFN3.fn(v[0],pth,er); pth.splice(-1);if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`,
    jitDependencies: ["te_v7nFN3"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_N5pt7p(utl) {
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
    },
    fn: void 0,
  },
  te_v7nFN3: {
    isNoop: false,
    typeName: "array",
    fnID: "te",
    jitFnHash: "te_v7nFN3",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_v7nFN3(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_v7nFN3(utl) {
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
    },
    fn: void 0,
  },
  tj_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "tj",
    jitFnHash: "tj_N5pt7p",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_N5pt7p(v){if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_N5pt7p(utl) {
      return function tj_N5pt7p(v) {
        if (v[1] === void 0) {
          if (v.length > 1) v[1] = null;
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_v7nFN3: {
    isNoop: true,
    typeName: "array",
    fnID: "tj",
    jitFnHash: "tj_v7nFN3",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_v7nFN3(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_v7nFN3(utl) {
      return function tj_v7nFN3(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "fj",
    jitFnHash: "fj_N5pt7p",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_N5pt7p(v){if (v[1] === null ) {v[1] = undefined} return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_N5pt7p(utl) {
      return function fj_N5pt7p(v) {
        if (v[1] === null) {
          v[1] = void 0;
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_v7nFN3: {
    isNoop: true,
    typeName: "array",
    fnID: "fj",
    jitFnHash: "fj_v7nFN3",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_v7nFN3(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_v7nFN3(utl) {
      return function fj_v7nFN3(v) {
        return v;
      };
    },
    fn: void 0,
  },
  sj_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "sj",
    jitFnHash: "sj_N5pt7p",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_v7nFN3 = utl.getJIT("sj_v7nFN3"); return function sj_N5pt7p(v){return '['+sj_v7nFN3.fn(v[0])+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}`,
    jitDependencies: ["sj_v7nFN3"],
    pureFnDependencies: [],
    createJitFn: function get_sj_N5pt7p(utl) {
      const sj_v7nFN3 = utl.getJIT("sj_v7nFN3");
      return function sj_N5pt7p(v) {
        return (
          "[" +
          sj_v7nFN3.fn(v[0]) +
          (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) +
          "]"
        );
      };
    },
    fn: void 0,
  },
  sj_v7nFN3: {
    isNoop: false,
    typeName: "array",
    fnID: "sj",
    jitFnHash: "sj_v7nFN3",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function sj_v7nFN3(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_v7nFN3(utl) {
      return function sj_v7nFN3(v) {
        const ls0 = [];
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = JSON.stringify(v[i0]);
          ls0.push(res0);
        }
        return "[" + ls0.join(",") + "]";
      };
    },
    fn: void 0,
  },
  tBi_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "tBi",
    jitFnHash: "tBi_N5pt7p",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_v7nFN3 = utl.getJIT("tBi_v7nFN3"); return function tBi_N5pt7p(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v[0] !== undefined) {tBi_v7nFN3.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} if (v[1] !== undefined) {Ser.view.setUint8(Ser.index++, !!v[1]);Ser.setBitMask(tbmI0, 1)} ; return Ser}`,
    jitDependencies: ["tBi_v7nFN3"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_N5pt7p(utl) {
      const tBi_v7nFN3 = utl.getJIT("tBi_v7nFN3");
      return function tBi_N5pt7p(v, Ser) {
        const tbmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v[0] !== void 0) {
          tBi_v7nFN3.fn(v[0], Ser);
          Ser.setBitMask(tbmI0, 0);
        }
        if (v[1] !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v[1]);
          Ser.setBitMask(tbmI0, 1);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_v7nFN3: {
    isNoop: false,
    typeName: "array",
    fnID: "tBi",
    jitFnHash: "tBi_v7nFN3",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_v7nFN3(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {Ser.serString(v[i0]);}\n ; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_v7nFN3(utl) {
      return function tBi_v7nFN3(v, Ser) {
        Ser.view.setUint32(Ser.index, v.length, 1);
        Ser.index += 4;
        for (let i0 = 0; i0 < v.length; i0++) {
          Ser.serString(v[i0]);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_N5pt7p: {
    isNoop: false,
    typeName: "params",
    fnID: "fBi",
    jitFnHash: "fBi_N5pt7p",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_v7nFN3 = utl.getJIT("fBi_v7nFN3"); return function fBi_N5pt7p(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_v7nFN3.fn(undefined,Des)} if (Des.view.getUint8(tbimI0, 1) & (1 << (1))) {ret[1] = Des.view.getUint8(Des.index++) === 1} ; return ret}`,
    jitDependencies: ["fBi_v7nFN3"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_N5pt7p(utl) {
      const fBi_v7nFN3 = utl.getJIT("fBi_v7nFN3");
      return function fBi_N5pt7p(ret, Des) {
        ret = [];
        const tbimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(tbimI0, 1) & (1 << 0)) {
          ret[0] = fBi_v7nFN3.fn(void 0, Des);
        }
        if (Des.view.getUint8(tbimI0, 1) & (1 << 1)) {
          ret[1] = Des.view.getUint8(Des.index++) === 1;
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_v7nFN3: {
    isNoop: false,
    typeName: "array",
    fnID: "fBi",
    jitFnHash: "fBi_v7nFN3",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_v7nFN3(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = Des.desString();}\n ; return ret}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_v7nFN3(utl) {
      return function fBi_v7nFN3(ret, Des) {
        const arrL0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = new Array(arrL0);
        for (let i0 = 0; i0 < arrL0; i0++) {
          ret[i0] = Des.desString();
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "is",
    jitFnHash: "is_tD9d3F",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_sGC6wK = utl.getJIT("is_sGC6wK");
const is_CWm4ec = utl.getJIT("is_CWm4ec"); return function is_tD9d3F(v){return ((typeof v === 'object' && v !== null && (is_sGC6wK.fn(v) || is_CWm4ec.fn(v))))}`,
    jitDependencies: ["is_sGC6wK", "is_CWm4ec"],
    pureFnDependencies: [],
    createJitFn: function get_is_tD9d3F(utl) {
      const is_sGC6wK = utl.getJIT("is_sGC6wK");
      const is_CWm4ec = utl.getJIT("is_CWm4ec");
      return function is_tD9d3F(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          (is_sGC6wK.fn(v) || is_CWm4ec.fn(v))
        );
      };
    },
    fn: void 0,
  },
  is_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "is",
    jitFnHash: "is_sGC6wK",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_eeweqs = utl.getJIT("is_eeweqs");
const is_uO4Ywi = utl.getJIT("is_uO4Ywi");
const is_gIMyOk = utl.getJIT("is_gIMyOk");
const k_sGC6wK = ["purFnDeps", "methods", "deps"];
const kA_sGC6wK = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_sGC6wK(v){return (is_eeweqs.fn(v.purFnDeps) && is_uO4Ywi.fn(v.methods) && is_gIMyOk.fn(v.deps) && !NVlxlJHR(v, k_sGC6wK))}`,
    jitDependencies: ["is_eeweqs", "is_uO4Ywi", "is_gIMyOk"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_sGC6wK(utl) {
      const is_eeweqs = utl.getJIT("is_eeweqs");
      const is_uO4Ywi = utl.getJIT("is_uO4Ywi");
      const is_gIMyOk = utl.getJIT("is_gIMyOk");
      const k_sGC6wK = ["purFnDeps", "methods", "deps"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_sGC6wK(v) {
        return (
          is_eeweqs.fn(v.purFnDeps) &&
          is_uO4Ywi.fn(v.methods) &&
          is_gIMyOk.fn(v.deps) &&
          !NVlxlJHR(v, k_sGC6wK)
        );
      };
    },
    fn: void 0,
  },
  is_eeweqs: {
    isNoop: false,
    typeName: "PureFnsDataCache",
    fnID: "is",
    jitFnHash: "is_eeweqs",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_RxxtpZ = utl.getJIT("is_RxxtpZ"); return function is_eeweqs(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_RxxtpZ.fn(v[p0]))) return false;} return true;})())}`,
    jitDependencies: ["is_RxxtpZ"],
    pureFnDependencies: [],
    createJitFn: function get_is_eeweqs(utl) {
      const is_RxxtpZ = utl.getJIT("is_RxxtpZ");
      return function is_eeweqs(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (function () {
            for (const p0 in v) {
              if (!is_RxxtpZ.fn(v[p0])) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_RxxtpZ: {
    isNoop: false,
    typeName: "Record",
    fnID: "is",
    jitFnHash: "is_RxxtpZ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Eyiyc6 = utl.getJIT("is_Eyiyc6"); return function is_RxxtpZ(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_Eyiyc6.fn(v[p0]))) return false;} return true;})())}`,
    jitDependencies: ["is_Eyiyc6"],
    pureFnDependencies: [],
    createJitFn: function get_is_RxxtpZ(utl) {
      const is_Eyiyc6 = utl.getJIT("is_Eyiyc6");
      return function is_RxxtpZ(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (function () {
            for (const p0 in v) {
              if (!is_Eyiyc6.fn(v[p0])) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_Eyiyc6: {
    isNoop: false,
    typeName: "PureFunctionData",
    fnID: "is",
    jitFnHash: "is_Eyiyc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_Eyiyc6 = ["namespace", "paramNames", "code", "fnName", "bodyHash", "pureFnDependencies"];
const kA_Eyiyc6 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Eyiyc6(v){return (typeof v === 'object' && v !== null && typeof v.namespace === 'string' && is_IoMmkS.fn(v.paramNames) && typeof v.code === 'string' && typeof v.fnName === 'string' && typeof v.bodyHash === 'string' && is_IoMmkS.fn(v.pureFnDependencies) && !NVlxlJHR(v, k_Eyiyc6))}`,
    jitDependencies: ["is_IoMmkS"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Eyiyc6(utl) {
      const is_IoMmkS = utl.getJIT("is_IoMmkS");
      const k_Eyiyc6 = [
        "namespace",
        "paramNames",
        "code",
        "fnName",
        "bodyHash",
        "pureFnDependencies",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_Eyiyc6(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.namespace === "string" &&
          is_IoMmkS.fn(v.paramNames) &&
          typeof v.code === "string" &&
          typeof v.fnName === "string" &&
          typeof v.bodyHash === "string" &&
          is_IoMmkS.fn(v.pureFnDependencies) &&
          !NVlxlJHR(v, k_Eyiyc6)
        );
      };
    },
    fn: void 0,
  },
  is_IoMmkS: {
    isNoop: false,
    typeName: "array",
    fnID: "is",
    jitFnHash: "is_IoMmkS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function is_IoMmkS(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_IoMmkS(utl) {
      return function is_IoMmkS(v) {
        if (!Array.isArray(v)) return false;
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = typeof v[i0] === "string";
          if (!res0) return false;
        }
        return true;
      };
    },
    fn: void 0,
  },
  is_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "is",
    jitFnHash: "is_uO4Ywi",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Vb9jXz = utl.getJIT("is_Vb9jXz"); return function is_uO4Ywi(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_Vb9jXz.fn(v[p0]))) return false;} return true;})())}`,
    jitDependencies: ["is_Vb9jXz"],
    pureFnDependencies: [],
    createJitFn: function get_is_uO4Ywi(utl) {
      const is_Vb9jXz = utl.getJIT("is_Vb9jXz");
      return function is_uO4Ywi(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (function () {
            for (const p0 in v) {
              if (!is_Vb9jXz.fn(v[p0])) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "is",
    jitFnHash: "is_Vb9jXz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const is_Mwes8K = utl.getJIT("is_Mwes8K");
const is_UyckOQ = utl.getJIT("is_UyckOQ");
const k_Vb9jXz = ["type", "id", "isAsync", "hasReturnData", "paramNames", "paramsJitHash", "returnJitHash", "headersParam", "headersReturn", "middleFnIds", "pointer", "nestLevel", "options"];
const kA_Vb9jXz = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Vb9jXz(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.type) && typeof v.id === 'string' && typeof v.isAsync === 'boolean' && typeof v.hasReturnData === 'boolean' && (v.paramNames === undefined || is_IoMmkS.fn(v.paramNames)) && typeof v.paramsJitHash === 'string' && typeof v.returnJitHash === 'string' && (v.headersParam === undefined || is_Mwes8K.fn(v.headersParam)) && (v.headersReturn === undefined || is_Mwes8K.fn(v.headersReturn)) && (v.middleFnIds === undefined || is_IoMmkS.fn(v.middleFnIds)) && is_IoMmkS.fn(v.pointer) && Number.isFinite(v.nestLevel) && is_UyckOQ.fn(v.options) && !NVlxlJHR(v, k_Vb9jXz))}`,
    jitDependencies: ["is_IoMmkS", "is_Mwes8K", "is_UyckOQ"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Vb9jXz(utl) {
      const is_IoMmkS = utl.getJIT("is_IoMmkS");
      const is_Mwes8K = utl.getJIT("is_Mwes8K");
      const is_UyckOQ = utl.getJIT("is_UyckOQ");
      const k_Vb9jXz = [
        "type",
        "id",
        "isAsync",
        "hasReturnData",
        "paramNames",
        "paramsJitHash",
        "returnJitHash",
        "headersParam",
        "headersReturn",
        "middleFnIds",
        "pointer",
        "nestLevel",
        "options",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_Vb9jXz(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          Number.isFinite(v.type) &&
          typeof v.id === "string" &&
          typeof v.isAsync === "boolean" &&
          typeof v.hasReturnData === "boolean" &&
          (v.paramNames === void 0 || is_IoMmkS.fn(v.paramNames)) &&
          typeof v.paramsJitHash === "string" &&
          typeof v.returnJitHash === "string" &&
          (v.headersParam === void 0 || is_Mwes8K.fn(v.headersParam)) &&
          (v.headersReturn === void 0 || is_Mwes8K.fn(v.headersReturn)) &&
          (v.middleFnIds === void 0 || is_IoMmkS.fn(v.middleFnIds)) &&
          is_IoMmkS.fn(v.pointer) &&
          Number.isFinite(v.nestLevel) &&
          is_UyckOQ.fn(v.options) &&
          !NVlxlJHR(v, k_Vb9jXz)
        );
      };
    },
    fn: void 0,
  },
  is_Mwes8K: {
    isNoop: false,
    typeName: "HeadersMetaData",
    fnID: "is",
    jitFnHash: "is_Mwes8K",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_Mwes8K = ["headerNames", "jitHash"];
const kA_Mwes8K = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Mwes8K(v){return (typeof v === 'object' && v !== null && is_IoMmkS.fn(v.headerNames) && typeof v.jitHash === 'string' && !NVlxlJHR(v, k_Mwes8K))}`,
    jitDependencies: ["is_IoMmkS"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Mwes8K(utl) {
      const is_IoMmkS = utl.getJIT("is_IoMmkS");
      const k_Mwes8K = ["headerNames", "jitHash"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_Mwes8K(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          is_IoMmkS.fn(v.headerNames) &&
          typeof v.jitHash === "string" &&
          !NVlxlJHR(v, k_Mwes8K)
        );
      };
    },
    fn: void 0,
  },
  is_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "is",
    jitFnHash: "is_UyckOQ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_BlfZNr = utl.getJIT("is_BlfZNr");
const k_UyckOQ = ["runOnError", "validateParams", "validateReturn", "description", "serializer", "isMutation", "strictTypes"];
const kA_UyckOQ = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_UyckOQ(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (v.runOnError === undefined || typeof v.runOnError === 'boolean') && (v.validateParams === undefined || typeof v.validateParams === 'boolean') && (v.validateReturn === undefined || typeof v.validateReturn === 'boolean') && (v.description === undefined || typeof v.description === 'string') && (v.serializer === undefined || is_BlfZNr.fn(v.serializer)) && (v.isMutation === undefined || typeof v.isMutation === 'boolean') && (v.strictTypes === undefined || typeof v.strictTypes === 'boolean') && !NVlxlJHR(v, k_UyckOQ))}`,
    jitDependencies: ["is_BlfZNr"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_UyckOQ(utl) {
      const is_BlfZNr = utl.getJIT("is_BlfZNr");
      const k_UyckOQ = [
        "runOnError",
        "validateParams",
        "validateReturn",
        "description",
        "serializer",
        "isMutation",
        "strictTypes",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_UyckOQ(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (v.runOnError === void 0 || typeof v.runOnError === "boolean") &&
          (v.validateParams === void 0 ||
            typeof v.validateParams === "boolean") &&
          (v.validateReturn === void 0 ||
            typeof v.validateReturn === "boolean") &&
          (v.description === void 0 || typeof v.description === "string") &&
          (v.serializer === void 0 || is_BlfZNr.fn(v.serializer)) &&
          (v.isMutation === void 0 || typeof v.isMutation === "boolean") &&
          (v.strictTypes === void 0 || typeof v.strictTypes === "boolean") &&
          !NVlxlJHR(v, k_UyckOQ)
        );
      };
    },
    fn: void 0,
  },
  is_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "is",
    jitFnHash: "is_BlfZNr",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_BlfZNr(v){return (v === "json" || v === "binary" || v === "stringifyJson")}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_BlfZNr(utl) {
      return function is_BlfZNr(v) {
        return v === "json" || v === "binary" || v === "stringifyJson";
      };
    },
    fn: void 0,
  },
  is_gIMyOk: {
    isNoop: false,
    typeName: "FnsDataCache",
    fnID: "is",
    jitFnHash: "is_gIMyOk",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Xj79tL = utl.getJIT("is_Xj79tL"); return function is_gIMyOk(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_Xj79tL.fn(v[p0]))) return false;} return true;})())}`,
    jitDependencies: ["is_Xj79tL"],
    pureFnDependencies: [],
    createJitFn: function get_is_gIMyOk(utl) {
      const is_Xj79tL = utl.getJIT("is_Xj79tL");
      return function is_gIMyOk(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          !Array.isArray(v) &&
          Object.prototype.toString.call(v) === "[object Object]" &&
          (function () {
            for (const p0 in v) {
              if (!is_Xj79tL.fn(v[p0])) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_Xj79tL: {
    isNoop: false,
    typeName: "JitCompiledFnData",
    fnID: "is",
    jitFnHash: "is_Xj79tL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_o8YSce = utl.getJIT("is_o8YSce");
const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_Xj79tL = ["typeName", "fnID", "jitFnHash", "args", "defaultParamValues", "isNoop", "code", "jitDependencies", "pureFnDependencies", "paramNames"];
const kA_Xj79tL = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Xj79tL(v){return (typeof v === 'object' && v !== null && typeof v.typeName === 'string' && typeof v.fnID === 'string' && typeof v.jitFnHash === 'string' && is_o8YSce.fn(v.args) && is_o8YSce.fn(v.defaultParamValues) && (v.isNoop === undefined || typeof v.isNoop === 'boolean') && typeof v.code === 'string' && is_IoMmkS.fn(v.jitDependencies) && is_IoMmkS.fn(v.pureFnDependencies) && (v.paramNames === undefined || is_IoMmkS.fn(v.paramNames)) && !NVlxlJHR(v, k_Xj79tL))}`,
    jitDependencies: ["is_o8YSce", "is_IoMmkS"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Xj79tL(utl) {
      const is_o8YSce = utl.getJIT("is_o8YSce");
      const is_IoMmkS = utl.getJIT("is_IoMmkS");
      const k_Xj79tL = [
        "typeName",
        "fnID",
        "jitFnHash",
        "args",
        "defaultParamValues",
        "isNoop",
        "code",
        "jitDependencies",
        "pureFnDependencies",
        "paramNames",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_Xj79tL(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.typeName === "string" &&
          typeof v.fnID === "string" &&
          typeof v.jitFnHash === "string" &&
          is_o8YSce.fn(v.args) &&
          is_o8YSce.fn(v.defaultParamValues) &&
          (v.isNoop === void 0 || typeof v.isNoop === "boolean") &&
          typeof v.code === "string" &&
          is_IoMmkS.fn(v.jitDependencies) &&
          is_IoMmkS.fn(v.pureFnDependencies) &&
          (v.paramNames === void 0 || is_IoMmkS.fn(v.paramNames)) &&
          !NVlxlJHR(v, k_Xj79tL)
        );
      };
    },
    fn: void 0,
  },
  is_o8YSce: {
    isNoop: false,
    typeName: "JitFnArgs",
    fnID: "is",
    jitFnHash: "is_o8YSce",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_o8YSce(v){return (typeof v === 'object' && v !== null && typeof v["vλl"] === 'string' && (function(){for (const p0 in v){if (!(typeof v[p0] === 'string')) return false;} return true;})())}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_o8YSce(utl) {
      return function is_o8YSce(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v["vλl"] === "string" &&
          (function () {
            for (const p0 in v) {
              if (!(typeof v[p0] === "string")) return false;
            }
            return true;
          })()
        );
      };
    },
    fn: void 0,
  },
  is_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "is",
    jitFnHash: "is_CWm4ec",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Co6w6E = utl.getJIT("is_Co6w6E");
const k_CWm4ec = ["statusCode", "mion@isΣrrθr", "type", "id", "publicMessage", "errorData"];
const kA_CWm4ec = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_CWm4ec(v){return ((v.statusCode === undefined || Number.isFinite(v.statusCode)) && v["mion@isΣrrθr"] === true && v.type === "rpc-metadata-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_Co6w6E.fn(v.errorData)) && !NVlxlJHR(v, k_CWm4ec))}`,
    jitDependencies: ["is_Co6w6E"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_CWm4ec(utl) {
      const is_Co6w6E = utl.getJIT("is_Co6w6E");
      const k_CWm4ec = [
        "statusCode",
        "mion@isΣrrθr",
        "type",
        "id",
        "publicMessage",
        "errorData",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_CWm4ec(v) {
        return (
          (v.statusCode === void 0 || Number.isFinite(v.statusCode)) &&
          v["mion@isΣrrθr"] === true &&
          v.type === "rpc-metadata-not-found" &&
          (v.id === void 0 ||
            Number.isFinite(v.id) ||
            typeof v.id === "string") &&
          typeof v.publicMessage === "string" &&
          (v.errorData === void 0 || is_Co6w6E.fn(v.errorData)) &&
          !NVlxlJHR(v, k_CWm4ec)
        );
      };
    },
    fn: void 0,
  },
  te_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "te",
    jitFnHash: "te_tD9d3F",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_sGC6wK = utl.getJIT("is_sGC6wK");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_tD9d3F(v,pth=[],er=[]){if (!((typeof v === 'object' && v !== null && (is_sGC6wK.fn(v) || is_CWm4ec.fn(v))))) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_sGC6wK", "is_CWm4ec"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_tD9d3F(utl) {
      const is_sGC6wK = utl.getJIT("is_sGC6wK");
      const is_CWm4ec = utl.getJIT("is_CWm4ec");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_tD9d3F(v, pth = [], er = []) {
        if (
          !(
            typeof v === "object" &&
            v !== null &&
            (is_sGC6wK.fn(v) || is_CWm4ec.fn(v))
          )
        )
          Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  tj_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "tj",
    jitFnHash: "tj_tD9d3F",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const is_sGC6wK = utl.getJIT("is_sGC6wK");
const tj_sGC6wK = utl.getJIT("tj_sGC6wK");
const fj_sGC6wK = utl.getJIT("fj_sGC6wK");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function tj_tD9d3F(v){if (typeof v === 'object' && v !== null && is_sGC6wK.fn(v)) {v = tj_sGC6wK.fn(v); v = [0, v]}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {v = tj_CWm4ec.fn(v); v = [1, v]}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [
      "is_sGC6wK",
      "tj_sGC6wK",
      "fj_sGC6wK",
      "is_CWm4ec",
      "tj_CWm4ec",
      "fj_CWm4ec",
    ],
    pureFnDependencies: [],
    createJitFn: function get_tj_tD9d3F(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      const is_sGC6wK = utl.getJIT("is_sGC6wK");
      const tj_sGC6wK = utl.getJIT("tj_sGC6wK");
      utl.getJIT("fj_sGC6wK");
      const is_CWm4ec = utl.getJIT("is_CWm4ec");
      const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
      utl.getJIT("fj_CWm4ec");
      return function tj_tD9d3F(v) {
        if (typeof v === "object" && v !== null && is_sGC6wK.fn(v)) {
          v = tj_sGC6wK.fn(v);
          v = [0, v];
        } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
          v = tj_CWm4ec.fn(v);
          v = [1, v];
        } else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "tj",
    jitFnHash: "tj_sGC6wK",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_uO4Ywi = utl.getJIT("tj_uO4Ywi"); return function tj_sGC6wK(v){v.methods = tj_uO4Ywi.fn(v.methods); return v}`,
    jitDependencies: ["tj_uO4Ywi"],
    pureFnDependencies: [],
    createJitFn: function get_tj_sGC6wK(utl) {
      const tj_uO4Ywi = utl.getJIT("tj_uO4Ywi");
      return function tj_sGC6wK(v) {
        v.methods = tj_uO4Ywi.fn(v.methods);
        return v;
      };
    },
    fn: void 0,
  },
  tj_eeweqs: {
    isNoop: true,
    typeName: "PureFnsDataCache",
    fnID: "tj",
    jitFnHash: "tj_eeweqs",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_eeweqs(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_eeweqs(utl) {
      return function tj_eeweqs(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_RxxtpZ: {
    isNoop: true,
    typeName: "Record",
    fnID: "tj",
    jitFnHash: "tj_RxxtpZ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_RxxtpZ(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_RxxtpZ(utl) {
      return function tj_RxxtpZ(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_Eyiyc6: {
    isNoop: true,
    typeName: "PureFunctionData",
    fnID: "tj",
    jitFnHash: "tj_Eyiyc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_Eyiyc6(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_Eyiyc6(utl) {
      return function tj_Eyiyc6(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_IoMmkS: {
    isNoop: true,
    typeName: "array",
    fnID: "tj",
    jitFnHash: "tj_IoMmkS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_IoMmkS(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_IoMmkS(utl) {
      return function tj_IoMmkS(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "tj",
    jitFnHash: "tj_uO4Ywi",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_Vb9jXz = utl.getJIT("tj_Vb9jXz"); return function tj_uO4Ywi(v){for (const p0 in v){ v[p0] = tj_Vb9jXz.fn(v[p0]);} return v}`,
    jitDependencies: ["tj_Vb9jXz"],
    pureFnDependencies: [],
    createJitFn: function get_tj_uO4Ywi(utl) {
      const tj_Vb9jXz = utl.getJIT("tj_Vb9jXz");
      return function tj_uO4Ywi(v) {
        for (const p0 in v) {
          v[p0] = tj_Vb9jXz.fn(v[p0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "tj",
    jitFnHash: "tj_Vb9jXz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_UyckOQ = utl.getJIT("tj_UyckOQ"); return function tj_Vb9jXz(v){v.options = tj_UyckOQ.fn(v.options); return v}`,
    jitDependencies: ["tj_UyckOQ"],
    pureFnDependencies: [],
    createJitFn: function get_tj_Vb9jXz(utl) {
      const tj_UyckOQ = utl.getJIT("tj_UyckOQ");
      return function tj_Vb9jXz(v) {
        v.options = tj_UyckOQ.fn(v.options);
        return v;
      };
    },
    fn: void 0,
  },
  tj_Mwes8K: {
    isNoop: true,
    typeName: "HeadersMetaData",
    fnID: "tj",
    jitFnHash: "tj_Mwes8K",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_Mwes8K(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_Mwes8K(utl) {
      return function tj_Mwes8K(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "tj",
    jitFnHash: "tj_UyckOQ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_BlfZNr = utl.getJIT("tj_BlfZNr"); return function tj_UyckOQ(v){if (v.serializer !== undefined) {v.serializer = tj_BlfZNr.fn(v.serializer);} return v}`,
    jitDependencies: ["tj_BlfZNr"],
    pureFnDependencies: [],
    createJitFn: function get_tj_UyckOQ(utl) {
      const tj_BlfZNr = utl.getJIT("tj_BlfZNr");
      return function tj_UyckOQ(v) {
        if (v.serializer !== void 0) {
          v.serializer = tj_BlfZNr.fn(v.serializer);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "tj",
    jitFnHash: "tj_BlfZNr",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_BlfZNr(v){if (v === "json") { /*noop*/}else if (v === "binary") { /*noop*/}else if (v === "stringifyJson") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_BlfZNr(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_BlfZNr(v) {
        if (v === "json");
        else if (v === "binary");
        else if (v === "stringifyJson");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_gIMyOk: {
    isNoop: true,
    typeName: "FnsDataCache",
    fnID: "tj",
    jitFnHash: "tj_gIMyOk",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_gIMyOk(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_gIMyOk(utl) {
      return function tj_gIMyOk(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_Xj79tL: {
    isNoop: true,
    typeName: "JitCompiledFnData",
    fnID: "tj",
    jitFnHash: "tj_Xj79tL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_Xj79tL(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_Xj79tL(utl) {
      return function tj_Xj79tL(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_o8YSce: {
    isNoop: true,
    typeName: "JitFnArgs",
    fnID: "tj",
    jitFnHash: "tj_o8YSce",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_o8YSce(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_o8YSce(utl) {
      return function tj_o8YSce(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "fj",
    jitFnHash: "fj_sGC6wK",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_uO4Ywi = utl.getJIT("fj_uO4Ywi"); return function fj_sGC6wK(v){v.methods = fj_uO4Ywi.fn(v.methods); return v}`,
    jitDependencies: ["fj_uO4Ywi"],
    pureFnDependencies: [],
    createJitFn: function get_fj_sGC6wK(utl) {
      const fj_uO4Ywi = utl.getJIT("fj_uO4Ywi");
      return function fj_sGC6wK(v) {
        v.methods = fj_uO4Ywi.fn(v.methods);
        return v;
      };
    },
    fn: void 0,
  },
  fj_eeweqs: {
    isNoop: true,
    typeName: "PureFnsDataCache",
    fnID: "fj",
    jitFnHash: "fj_eeweqs",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_eeweqs(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_eeweqs(utl) {
      return function fj_eeweqs(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_RxxtpZ: {
    isNoop: true,
    typeName: "Record",
    fnID: "fj",
    jitFnHash: "fj_RxxtpZ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_RxxtpZ(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_RxxtpZ(utl) {
      return function fj_RxxtpZ(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_Eyiyc6: {
    isNoop: true,
    typeName: "PureFunctionData",
    fnID: "fj",
    jitFnHash: "fj_Eyiyc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_Eyiyc6(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_Eyiyc6(utl) {
      return function fj_Eyiyc6(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_IoMmkS: {
    isNoop: true,
    typeName: "array",
    fnID: "fj",
    jitFnHash: "fj_IoMmkS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_IoMmkS(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_IoMmkS(utl) {
      return function fj_IoMmkS(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "fj",
    jitFnHash: "fj_uO4Ywi",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_Vb9jXz = utl.getJIT("fj_Vb9jXz"); return function fj_uO4Ywi(v){for (const p0 in v){ v[p0] = fj_Vb9jXz.fn(v[p0]);} return v}`,
    jitDependencies: ["fj_Vb9jXz"],
    pureFnDependencies: [],
    createJitFn: function get_fj_uO4Ywi(utl) {
      const fj_Vb9jXz = utl.getJIT("fj_Vb9jXz");
      return function fj_uO4Ywi(v) {
        for (const p0 in v) {
          v[p0] = fj_Vb9jXz.fn(v[p0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "fj",
    jitFnHash: "fj_Vb9jXz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_UyckOQ = utl.getJIT("fj_UyckOQ"); return function fj_Vb9jXz(v){v.options = fj_UyckOQ.fn(v.options); return v}`,
    jitDependencies: ["fj_UyckOQ"],
    pureFnDependencies: [],
    createJitFn: function get_fj_Vb9jXz(utl) {
      const fj_UyckOQ = utl.getJIT("fj_UyckOQ");
      return function fj_Vb9jXz(v) {
        v.options = fj_UyckOQ.fn(v.options);
        return v;
      };
    },
    fn: void 0,
  },
  fj_Mwes8K: {
    isNoop: true,
    typeName: "HeadersMetaData",
    fnID: "fj",
    jitFnHash: "fj_Mwes8K",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_Mwes8K(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_Mwes8K(utl) {
      return function fj_Mwes8K(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "fj",
    jitFnHash: "fj_UyckOQ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_BlfZNr = utl.getJIT("fj_BlfZNr"); return function fj_UyckOQ(v){if (v.serializer !== undefined) {v.serializer = fj_BlfZNr.fn(v.serializer);} return v}`,
    jitDependencies: ["fj_BlfZNr"],
    pureFnDependencies: [],
    createJitFn: function get_fj_UyckOQ(utl) {
      const fj_BlfZNr = utl.getJIT("fj_BlfZNr");
      return function fj_UyckOQ(v) {
        if (v.serializer !== void 0) {
          v.serializer = fj_BlfZNr.fn(v.serializer);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "fj",
    jitFnHash: "fj_BlfZNr",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_BlfZNr(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_BlfZNr(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_BlfZNr(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_gIMyOk: {
    isNoop: true,
    typeName: "FnsDataCache",
    fnID: "fj",
    jitFnHash: "fj_gIMyOk",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_gIMyOk(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_gIMyOk(utl) {
      return function fj_gIMyOk(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_Xj79tL: {
    isNoop: true,
    typeName: "JitCompiledFnData",
    fnID: "fj",
    jitFnHash: "fj_Xj79tL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_Xj79tL(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_Xj79tL(utl) {
      return function fj_Xj79tL(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_o8YSce: {
    isNoop: true,
    typeName: "JitFnArgs",
    fnID: "fj",
    jitFnHash: "fj_o8YSce",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_o8YSce(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_o8YSce(utl) {
      return function fj_o8YSce(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tj",
    jitFnHash: "tj_CWm4ec",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_CWm4ec(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_CWm4ec(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_CWm4ec(v) {
        if (v.id !== void 0) {
          if (Number.isFinite(v.id));
          else if (typeof v.id === "string");
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fj",
    jitFnHash: "fj_CWm4ec",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_CWm4ec(v){
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
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_CWm4ec(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_CWm4ec(v) {
        var _a;
        if (v.id !== void 0) {
          if (
            ((_a = v.id) == null ? void 0 : _a.length) === 2 &&
            Array.isArray(v.id) &&
            typeof v.id[0] === "number"
          ) {
            const dec0 = v.id[0];
            v.id = v.id[1];
            if (dec0 === 0);
            else if (dec0 === 1);
            else {
              throw new Error(uErr0);
            }
          }
        }
        let desFn1 = utl.getDeserializeFn("RpcError");
        if (desFn1) {
          v = desFn1(v);
        } else if ((desFn1 = utl.getSerializeClass("RpcError"))) {
          v = new desFn1(v);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "fj",
    jitFnHash: "fj_tD9d3F",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_sGC6wK = utl.getJIT("fj_sGC6wK");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function fj_tD9d3F(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {v = fj_sGC6wK.fn(v)}else if (dec0 === 1) {v = fj_CWm4ec.fn(v)}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: ["fj_sGC6wK", "fj_CWm4ec"],
    pureFnDependencies: [],
    createJitFn: function get_fj_tD9d3F(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      const fj_sGC6wK = utl.getJIT("fj_sGC6wK");
      const fj_CWm4ec = utl.getJIT("fj_CWm4ec");
      return function fj_tD9d3F(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0) {
            v = fj_sGC6wK.fn(v);
          } else if (dec0 === 1) {
            v = fj_CWm4ec.fn(v);
          } else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  sj_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "sj",
    jitFnHash: "sj_tD9d3F",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const is_sGC6wK = utl.getJIT("is_sGC6wK");
const sj_sGC6wK = utl.getJIT("sj_sGC6wK");
const tj_sGC6wK = utl.getJIT("tj_sGC6wK");
const fj_sGC6wK = utl.getJIT("fj_sGC6wK");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
const tj_CWm4ec = utl.getJIT("tj_CWm4ec");
const fj_CWm4ec = utl.getJIT("fj_CWm4ec"); return function sj_tD9d3F(v){if (typeof v === 'object' && v !== null && is_sGC6wK.fn(v)) {return '[0,' + sj_sGC6wK.fn(v) + ']'}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {return '[1,' + sj_CWm4ec.fn(v) + ']'}else {throw new Error(uErr0);}}`,
    jitDependencies: [
      "is_sGC6wK",
      "sj_sGC6wK",
      "tj_sGC6wK",
      "fj_sGC6wK",
      "is_CWm4ec",
      "sj_CWm4ec",
      "tj_CWm4ec",
      "fj_CWm4ec",
    ],
    pureFnDependencies: [],
    createJitFn: function get_sj_tD9d3F(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const is_sGC6wK = utl.getJIT("is_sGC6wK");
      const sj_sGC6wK = utl.getJIT("sj_sGC6wK");
      utl.getJIT("tj_sGC6wK");
      utl.getJIT("fj_sGC6wK");
      const is_CWm4ec = utl.getJIT("is_CWm4ec");
      const sj_CWm4ec = utl.getJIT("sj_CWm4ec");
      utl.getJIT("tj_CWm4ec");
      utl.getJIT("fj_CWm4ec");
      return function sj_tD9d3F(v) {
        if (typeof v === "object" && v !== null && is_sGC6wK.fn(v)) {
          return "[0," + sj_sGC6wK.fn(v) + "]";
        } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
          return "[1," + sj_CWm4ec.fn(v) + "]";
        } else {
          throw new Error(uErr0);
        }
      };
    },
    fn: void 0,
  },
  sj_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "sj",
    jitFnHash: "sj_sGC6wK",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_eeweqs = utl.getJIT("sj_eeweqs");
const sj_uO4Ywi = utl.getJIT("sj_uO4Ywi");
const sj_gIMyOk = utl.getJIT("sj_gIMyOk"); return function sj_sGC6wK(v){return '{'+'"purFnDeps":'+sj_eeweqs.fn(v.purFnDeps)+","+'"methods":'+sj_uO4Ywi.fn(v.methods)+","+'"deps":'+sj_gIMyOk.fn(v.deps)+'}'}`,
    jitDependencies: ["sj_eeweqs", "sj_uO4Ywi", "sj_gIMyOk"],
    pureFnDependencies: [],
    createJitFn: function get_sj_sGC6wK(utl) {
      const sj_eeweqs = utl.getJIT("sj_eeweqs");
      const sj_uO4Ywi = utl.getJIT("sj_uO4Ywi");
      const sj_gIMyOk = utl.getJIT("sj_gIMyOk");
      return function sj_sGC6wK(v) {
        return (
          '{"purFnDeps":' +
          sj_eeweqs.fn(v.purFnDeps) +
          ',"methods":' +
          sj_uO4Ywi.fn(v.methods) +
          ',"deps":' +
          sj_gIMyOk.fn(v.deps) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_eeweqs: {
    isNoop: false,
    typeName: "PureFnsDataCache",
    fnID: "sj",
    jitFnHash: "sj_eeweqs",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_RxxtpZ = utl.getJIT("sj_RxxtpZ");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_eeweqs(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_RxxtpZ.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_RxxtpZ"],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_eeweqs(utl) {
      const sj_RxxtpZ = utl.getJIT("sj_RxxtpZ");
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_eeweqs(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + sj_RxxtpZ.fn(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_RxxtpZ: {
    isNoop: false,
    typeName: "Record",
    fnID: "sj",
    jitFnHash: "sj_RxxtpZ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_Eyiyc6 = utl.getJIT("sj_Eyiyc6");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_RxxtpZ(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_Eyiyc6.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_Eyiyc6"],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_RxxtpZ(utl) {
      const sj_Eyiyc6 = utl.getJIT("sj_Eyiyc6");
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_RxxtpZ(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + sj_Eyiyc6.fn(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_Eyiyc6: {
    isNoop: false,
    typeName: "PureFunctionData",
    fnID: "sj",
    jitFnHash: "sj_Eyiyc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_Eyiyc6(v){return '{'+'"namespace":'+JSON.stringify(v.namespace)+","+'"paramNames":'+sj_IoMmkS.fn(v.paramNames)+","+'"code":'+JSON.stringify(v.code)+","+'"fnName":'+JSON.stringify(v.fnName)+","+'"bodyHash":'+JSON.stringify(v.bodyHash)+","+'"pureFnDependencies":'+sj_IoMmkS.fn(v.pureFnDependencies)+'}'}`,
    jitDependencies: ["sj_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_sj_Eyiyc6(utl) {
      const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
      return function sj_Eyiyc6(v) {
        return (
          '{"namespace":' +
          JSON.stringify(v.namespace) +
          ',"paramNames":' +
          sj_IoMmkS.fn(v.paramNames) +
          ',"code":' +
          JSON.stringify(v.code) +
          ',"fnName":' +
          JSON.stringify(v.fnName) +
          ',"bodyHash":' +
          JSON.stringify(v.bodyHash) +
          ',"pureFnDependencies":' +
          sj_IoMmkS.fn(v.pureFnDependencies) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_IoMmkS: {
    isNoop: false,
    typeName: "array",
    fnID: "sj",
    jitFnHash: "sj_IoMmkS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function sj_IoMmkS(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_IoMmkS(utl) {
      return function sj_IoMmkS(v) {
        const ls0 = [];
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = JSON.stringify(v[i0]);
          ls0.push(res0);
        }
        return "[" + ls0.join(",") + "]";
      };
    },
    fn: void 0,
  },
  sj_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "sj",
    jitFnHash: "sj_uO4Ywi",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_Vb9jXz = utl.getJIT("sj_Vb9jXz");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_uO4Ywi(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_Vb9jXz.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_Vb9jXz"],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_uO4Ywi(utl) {
      const sj_Vb9jXz = utl.getJIT("sj_Vb9jXz");
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_uO4Ywi(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + sj_Vb9jXz.fn(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "sj",
    jitFnHash: "sj_Vb9jXz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
const sj_Mwes8K = utl.getJIT("sj_Mwes8K");
const sj_UyckOQ = utl.getJIT("sj_UyckOQ"); return function sj_Vb9jXz(v){return '{'+(v.paramNames === undefined ? '' : '"paramNames":'+sj_IoMmkS.fn(v.paramNames)+",")+(v.headersParam === undefined ? '' : '"headersParam":'+sj_Mwes8K.fn(v.headersParam)+",")+(v.headersReturn === undefined ? '' : '"headersReturn":'+sj_Mwes8K.fn(v.headersReturn)+",")+(v.middleFnIds === undefined ? '' : '"middleFnIds":'+sj_IoMmkS.fn(v.middleFnIds)+",")+'"type":'+v.type+","+'"id":'+JSON.stringify(v.id)+","+'"isAsync":'+(v.isAsync ? 'true' : 'false')+","+'"hasReturnData":'+(v.hasReturnData ? 'true' : 'false')+","+'"paramsJitHash":'+JSON.stringify(v.paramsJitHash)+","+'"returnJitHash":'+JSON.stringify(v.returnJitHash)+","+'"pointer":'+sj_IoMmkS.fn(v.pointer)+","+'"nestLevel":'+v.nestLevel+","+'"options":'+sj_UyckOQ.fn(v.options)+'}'}`,
    jitDependencies: ["sj_IoMmkS", "sj_Mwes8K", "sj_UyckOQ"],
    pureFnDependencies: [],
    createJitFn: function get_sj_Vb9jXz(utl) {
      const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
      const sj_Mwes8K = utl.getJIT("sj_Mwes8K");
      const sj_UyckOQ = utl.getJIT("sj_UyckOQ");
      return function sj_Vb9jXz(v) {
        return (
          "{" +
          (v.paramNames === void 0
            ? ""
            : '"paramNames":' + sj_IoMmkS.fn(v.paramNames) + ",") +
          (v.headersParam === void 0
            ? ""
            : '"headersParam":' + sj_Mwes8K.fn(v.headersParam) + ",") +
          (v.headersReturn === void 0
            ? ""
            : '"headersReturn":' + sj_Mwes8K.fn(v.headersReturn) + ",") +
          (v.middleFnIds === void 0
            ? ""
            : '"middleFnIds":' + sj_IoMmkS.fn(v.middleFnIds) + ",") +
          '"type":' +
          v.type +
          ',"id":' +
          JSON.stringify(v.id) +
          ',"isAsync":' +
          (v.isAsync ? "true" : "false") +
          ',"hasReturnData":' +
          (v.hasReturnData ? "true" : "false") +
          ',"paramsJitHash":' +
          JSON.stringify(v.paramsJitHash) +
          ',"returnJitHash":' +
          JSON.stringify(v.returnJitHash) +
          ',"pointer":' +
          sj_IoMmkS.fn(v.pointer) +
          ',"nestLevel":' +
          v.nestLevel +
          ',"options":' +
          sj_UyckOQ.fn(v.options) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_Mwes8K: {
    isNoop: false,
    typeName: "HeadersMetaData",
    fnID: "sj",
    jitFnHash: "sj_Mwes8K",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_Mwes8K(v){return '{'+'"headerNames":'+sj_IoMmkS.fn(v.headerNames)+","+'"jitHash":'+JSON.stringify(v.jitHash)+'}'}`,
    jitDependencies: ["sj_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_sj_Mwes8K(utl) {
      const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
      return function sj_Mwes8K(v) {
        return (
          '{"headerNames":' +
          sj_IoMmkS.fn(v.headerNames) +
          ',"jitHash":' +
          JSON.stringify(v.jitHash) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "sj",
    jitFnHash: "sj_UyckOQ",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_BlfZNr = utl.getJIT("sj_BlfZNr"); return function sj_UyckOQ(v){return (function(){const ns0 = [];if (v.runOnError !== undefined){ns0.push((v.runOnError === undefined ? '' : '"runOnError":'+(v.runOnError ? 'true' : 'false')))}if (v.validateParams !== undefined){ns0.push((v.validateParams === undefined ? '' : '"validateParams":'+(v.validateParams ? 'true' : 'false')))}if (v.validateReturn !== undefined){ns0.push((v.validateReturn === undefined ? '' : '"validateReturn":'+(v.validateReturn ? 'true' : 'false')))}if (v.description !== undefined){ns0.push((v.description === undefined ? '' : '"description":'+JSON.stringify(v.description)))}if (v.serializer !== undefined){ns0.push((v.serializer === undefined ? '' : '"serializer":'+sj_BlfZNr.fn(v.serializer)))}if (v.isMutation !== undefined){ns0.push((v.isMutation === undefined ? '' : '"isMutation":'+(v.isMutation ? 'true' : 'false')))}if (v.strictTypes !== undefined){ns0.push((v.strictTypes === undefined ? '' : '"strictTypes":'+(v.strictTypes ? 'true' : 'false')))};return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_BlfZNr"],
    pureFnDependencies: [],
    createJitFn: function get_sj_UyckOQ(utl) {
      const sj_BlfZNr = utl.getJIT("sj_BlfZNr");
      return function sj_UyckOQ(v) {
        return (function () {
          const ns0 = [];
          if (v.runOnError !== void 0) {
            ns0.push(
              v.runOnError === void 0
                ? ""
                : '"runOnError":' + (v.runOnError ? "true" : "false"),
            );
          }
          if (v.validateParams !== void 0) {
            ns0.push(
              v.validateParams === void 0
                ? ""
                : '"validateParams":' + (v.validateParams ? "true" : "false"),
            );
          }
          if (v.validateReturn !== void 0) {
            ns0.push(
              v.validateReturn === void 0
                ? ""
                : '"validateReturn":' + (v.validateReturn ? "true" : "false"),
            );
          }
          if (v.description !== void 0) {
            ns0.push(
              v.description === void 0
                ? ""
                : '"description":' + JSON.stringify(v.description),
            );
          }
          if (v.serializer !== void 0) {
            ns0.push(
              v.serializer === void 0
                ? ""
                : '"serializer":' + sj_BlfZNr.fn(v.serializer),
            );
          }
          if (v.isMutation !== void 0) {
            ns0.push(
              v.isMutation === void 0
                ? ""
                : '"isMutation":' + (v.isMutation ? "true" : "false"),
            );
          }
          if (v.strictTypes !== void 0) {
            ns0.push(
              v.strictTypes === void 0
                ? ""
                : '"strictTypes":' + (v.strictTypes ? "true" : "false"),
            );
          }
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "sj",
    jitFnHash: "sj_BlfZNr",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_BlfZNr(v){if (v === "json") {return JSON.stringify(v)}else if (v === "binary") {return JSON.stringify(v)}else if (v === "stringifyJson") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_BlfZNr(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      return function sj_BlfZNr(v) {
        if (v === "json") {
          return JSON.stringify(v);
        } else if (v === "binary") {
          return JSON.stringify(v);
        } else if (v === "stringifyJson") {
          return JSON.stringify(v);
        } else {
          throw new Error(uErr0);
        }
      };
    },
    fn: void 0,
  },
  sj_gIMyOk: {
    isNoop: false,
    typeName: "FnsDataCache",
    fnID: "sj",
    jitFnHash: "sj_gIMyOk",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_Xj79tL = utl.getJIT("sj_Xj79tL");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_gIMyOk(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_Xj79tL.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`,
    jitDependencies: ["sj_Xj79tL"],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_gIMyOk(utl) {
      const sj_Xj79tL = utl.getJIT("sj_Xj79tL");
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_gIMyOk(v) {
        return (function () {
          const ns0 = [];
          ns0.push(
            (function () {
              const ls1 = [];
              for (const p1 in v) {
                if (p1 !== void 0)
                  ls1.push(zT3pfXdp(p1) + ":" + sj_Xj79tL.fn(v[p1]));
              }
              if (!ls1.length) return "";
              return ls1.join(",");
            })(),
          );
          return "{" + ns0.join(",") + "}";
        })();
      };
    },
    fn: void 0,
  },
  sj_Xj79tL: {
    isNoop: false,
    typeName: "JitCompiledFnData",
    fnID: "sj",
    jitFnHash: "sj_Xj79tL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
const sj_o8YSce = utl.getJIT("sj_o8YSce"); return function sj_Xj79tL(v){return '{'+(v.isNoop === undefined ? '' : '"isNoop":'+(v.isNoop ? 'true' : 'false')+",")+(v.paramNames === undefined ? '' : '"paramNames":'+sj_IoMmkS.fn(v.paramNames)+",")+'"typeName":'+JSON.stringify(v.typeName)+","+'"fnID":'+JSON.stringify(v.fnID)+","+'"jitFnHash":'+JSON.stringify(v.jitFnHash)+","+'"args":'+sj_o8YSce.fn(v.args)+","+'"defaultParamValues":'+sj_o8YSce.fn(v.defaultParamValues)+","+'"code":'+JSON.stringify(v.code)+","+'"jitDependencies":'+sj_IoMmkS.fn(v.jitDependencies)+","+'"pureFnDependencies":'+sj_IoMmkS.fn(v.pureFnDependencies)+'}'}`,
    jitDependencies: ["sj_IoMmkS", "sj_o8YSce"],
    pureFnDependencies: [],
    createJitFn: function get_sj_Xj79tL(utl) {
      const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
      const sj_o8YSce = utl.getJIT("sj_o8YSce");
      return function sj_Xj79tL(v) {
        return (
          "{" +
          (v.isNoop === void 0
            ? ""
            : '"isNoop":' + (v.isNoop ? "true" : "false") + ",") +
          (v.paramNames === void 0
            ? ""
            : '"paramNames":' + sj_IoMmkS.fn(v.paramNames) + ",") +
          '"typeName":' +
          JSON.stringify(v.typeName) +
          ',"fnID":' +
          JSON.stringify(v.fnID) +
          ',"jitFnHash":' +
          JSON.stringify(v.jitFnHash) +
          ',"args":' +
          sj_o8YSce.fn(v.args) +
          ',"defaultParamValues":' +
          sj_o8YSce.fn(v.defaultParamValues) +
          ',"code":' +
          JSON.stringify(v.code) +
          ',"jitDependencies":' +
          sj_IoMmkS.fn(v.jitDependencies) +
          ',"pureFnDependencies":' +
          sj_IoMmkS.fn(v.pureFnDependencies) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_o8YSce: {
    isNoop: false,
    typeName: "JitFnArgs",
    fnID: "sj",
    jitFnHash: "sj_o8YSce",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_o8YSce(v){return '{'+(function(){
 const ls0 = [];
 for (const p0 in v) {
 if ("vλl" === p0) continue;
 if (p0 !== undefined) ls0.push(zT3pfXdp(p0) + ':' + JSON.stringify(v[p0]));
 }
 if (!ls0.length) return '';
 return ls0.join(',')+",";
 })()+"\\"vλl\\""+':'+JSON.stringify(v["vλl"])+'}'}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::asJSONString"],
    createJitFn: function get_sj_o8YSce(utl) {
      const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
      return function sj_o8YSce(v) {
        return (
          "{" +
          (function () {
            const ls0 = [];
            for (const p0 in v) {
              if ("vλl" === p0) continue;
              if (p0 !== void 0)
                ls0.push(zT3pfXdp(p0) + ":" + JSON.stringify(v[p0]));
            }
            if (!ls0.length) return "";
            return ls0.join(",") + ",";
          })() +
          '"vλl":' +
          JSON.stringify(v["vλl"]) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "sj",
    jitFnHash: "sj_CWm4ec",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_Co6w6E = utl.getJIT("sj_Co6w6E"); return function sj_CWm4ec(v){return '{'+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_Co6w6E.fn(v.errorData)+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`,
    jitDependencies: ["sj_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_sj_CWm4ec(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const sj_Co6w6E = utl.getJIT("sj_Co6w6E");
      return function sj_CWm4ec(v) {
        return (
          "{" +
          (v.statusCode === void 0
            ? ""
            : '"statusCode":' + v.statusCode + ",") +
          (v.id === void 0
            ? ""
            : '"id":' +
              (function () {
                if (Number.isFinite(v.id)) {
                  return v.id;
                } else if (typeof v.id === "string") {
                  return JSON.stringify(v.id);
                } else {
                  throw new Error(uErr0);
                }
              })() +
              ",") +
          (v.errorData === void 0
            ? ""
            : '"errorData":' + sj_Co6w6E.fn(v.errorData) + ",") +
          '"mion@isΣrrθr":' +
          (v["mion@isΣrrθr"] ? "true" : "false") +
          ',"type":' +
          JSON.stringify(v.type) +
          ',"publicMessage":' +
          JSON.stringify(v.publicMessage) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  tBi_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "tBi",
    jitFnHash: "tBi_tD9d3F",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union";
const is_sGC6wK = utl.getJIT("is_sGC6wK");
const tBi_sGC6wK = utl.getJIT("tBi_sGC6wK");
const is_CWm4ec = utl.getJIT("is_CWm4ec");
const tBi_CWm4ec = utl.getJIT("tBi_CWm4ec"); return function tBi_tD9d3F(v,Ser){if (typeof v === 'object' && v !== null && is_sGC6wK.fn(v)) {Ser.view.setUint8(Ser.index++, 0);tBi_sGC6wK.fn(v,Ser)}else if (typeof v === 'object' && v !== null && is_CWm4ec.fn(v)) {Ser.view.setUint8(Ser.index++, 1);tBi_CWm4ec.fn(v,Ser)}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: ["is_sGC6wK", "tBi_sGC6wK", "is_CWm4ec", "tBi_CWm4ec"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_tD9d3F(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      const is_sGC6wK = utl.getJIT("is_sGC6wK");
      const tBi_sGC6wK = utl.getJIT("tBi_sGC6wK");
      const is_CWm4ec = utl.getJIT("is_CWm4ec");
      const tBi_CWm4ec = utl.getJIT("tBi_CWm4ec");
      return function tBi_tD9d3F(v, Ser) {
        if (typeof v === "object" && v !== null && is_sGC6wK.fn(v)) {
          Ser.view.setUint8(Ser.index++, 0);
          tBi_sGC6wK.fn(v, Ser);
        } else if (typeof v === "object" && v !== null && is_CWm4ec.fn(v)) {
          Ser.view.setUint8(Ser.index++, 1);
          tBi_CWm4ec.fn(v, Ser);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "tBi",
    jitFnHash: "tBi_sGC6wK",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_uO4Ywi = utl.getJIT("tBi_uO4Ywi");
const tBi_gIMyOk = utl.getJIT("tBi_gIMyOk");
const tBi_eeweqs = utl.getJIT("tBi_eeweqs"); return function tBi_sGC6wK(v,Ser){tBi_uO4Ywi.fn(v.methods,Ser);tBi_gIMyOk.fn(v.deps,Ser);tBi_eeweqs.fn(v.purFnDeps,Ser);
; return Ser}`,
    jitDependencies: ["tBi_uO4Ywi", "tBi_gIMyOk", "tBi_eeweqs"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_sGC6wK(utl) {
      const tBi_uO4Ywi = utl.getJIT("tBi_uO4Ywi");
      const tBi_gIMyOk = utl.getJIT("tBi_gIMyOk");
      const tBi_eeweqs = utl.getJIT("tBi_eeweqs");
      return function tBi_sGC6wK(v, Ser) {
        tBi_uO4Ywi.fn(v.methods, Ser);
        tBi_gIMyOk.fn(v.deps, Ser);
        tBi_eeweqs.fn(v.purFnDeps, Ser);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "tBi",
    jitFnHash: "tBi_uO4Ywi",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_Vb9jXz = utl.getJIT("tBi_Vb9jXz"); return function tBi_uO4Ywi(v,Ser){
 let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;
 for (const p0 in v) {Ser.serString(p0); tBi_Vb9jXz.fn(v[p0],Ser); cnt0++;}
 Ser.view.setUint32(piI0, cnt0, 1);
 ; return Ser}`,
    jitDependencies: ["tBi_Vb9jXz"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_uO4Ywi(utl) {
      const tBi_Vb9jXz = utl.getJIT("tBi_Vb9jXz");
      return function tBi_uO4Ywi(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          tBi_Vb9jXz.fn(v[p0], Ser);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "tBi",
    jitFnHash: "tBi_Vb9jXz",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
const tBi_UyckOQ = utl.getJIT("tBi_UyckOQ");
const tBi_Mwes8K = utl.getJIT("tBi_Mwes8K"); return function tBi_Vb9jXz(v,Ser){Ser.view.setFloat64(Ser.index,v.type, 1, (Ser.index += 8));Ser.serString(v.id);Ser.view.setUint8(Ser.index++, !!v.isAsync);Ser.view.setUint8(Ser.index++, !!v.hasReturnData);Ser.serString(v.paramsJitHash);Ser.serString(v.returnJitHash);tBi_IoMmkS.fn(v.pointer,Ser);Ser.view.setFloat64(Ser.index,v.nestLevel, 1, (Ser.index += 8));tBi_UyckOQ.fn(v.options,Ser);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.paramNames !== undefined) {tBi_IoMmkS.fn(v.paramNames,Ser);Ser.setBitMask(bmI0, 0 & 7)}if (v.headersParam !== undefined) {tBi_Mwes8K.fn(v.headersParam,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.headersReturn !== undefined) {tBi_Mwes8K.fn(v.headersReturn,Ser);Ser.setBitMask(bmI0, 2 & 7)}if (v.middleFnIds !== undefined) {tBi_IoMmkS.fn(v.middleFnIds,Ser);Ser.setBitMask(bmI0, 3 & 7)} return Ser}`,
    jitDependencies: ["tBi_IoMmkS", "tBi_UyckOQ", "tBi_Mwes8K"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Vb9jXz(utl) {
      const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
      const tBi_UyckOQ = utl.getJIT("tBi_UyckOQ");
      const tBi_Mwes8K = utl.getJIT("tBi_Mwes8K");
      return function tBi_Vb9jXz(v, Ser) {
        Ser.view.setFloat64(Ser.index, v.type, 1, (Ser.index += 8));
        Ser.serString(v.id);
        Ser.view.setUint8(Ser.index++, !!v.isAsync);
        Ser.view.setUint8(Ser.index++, !!v.hasReturnData);
        Ser.serString(v.paramsJitHash);
        Ser.serString(v.returnJitHash);
        tBi_IoMmkS.fn(v.pointer, Ser);
        Ser.view.setFloat64(Ser.index, v.nestLevel, 1, (Ser.index += 8));
        tBi_UyckOQ.fn(v.options, Ser);
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.paramNames !== void 0) {
          tBi_IoMmkS.fn(v.paramNames, Ser);
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.headersParam !== void 0) {
          tBi_Mwes8K.fn(v.headersParam, Ser);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        if (v.headersReturn !== void 0) {
          tBi_Mwes8K.fn(v.headersReturn, Ser);
          Ser.setBitMask(bmI0, 2 & 7);
        }
        if (v.middleFnIds !== void 0) {
          tBi_IoMmkS.fn(v.middleFnIds, Ser);
          Ser.setBitMask(bmI0, 3 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_IoMmkS: {
    isNoop: false,
    typeName: "array",
    fnID: "tBi",
    jitFnHash: "tBi_IoMmkS",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_IoMmkS(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {Ser.serString(v[i0]);}\n ; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_IoMmkS(utl) {
      return function tBi_IoMmkS(v, Ser) {
        Ser.view.setUint32(Ser.index, v.length, 1);
        Ser.index += 4;
        for (let i0 = 0; i0 < v.length; i0++) {
          Ser.serString(v[i0]);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "tBi",
    jitFnHash: "tBi_UyckOQ",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_BlfZNr = utl.getJIT("tBi_BlfZNr"); return function tBi_UyckOQ(v,Ser){
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.runOnError !== undefined) {Ser.view.setUint8(Ser.index++, !!v.runOnError);Ser.setBitMask(bmI0, 0 & 7)}if (v.validateParams !== undefined) {Ser.view.setUint8(Ser.index++, !!v.validateParams);Ser.setBitMask(bmI0, 1 & 7)}if (v.validateReturn !== undefined) {Ser.view.setUint8(Ser.index++, !!v.validateReturn);Ser.setBitMask(bmI0, 2 & 7)}if (v.description !== undefined) {Ser.serString(v.description);Ser.setBitMask(bmI0, 3 & 7)}if (v.serializer !== undefined) {tBi_BlfZNr.fn(v.serializer,Ser);Ser.setBitMask(bmI0, 4 & 7)}if (v.isMutation !== undefined) {Ser.view.setUint8(Ser.index++, !!v.isMutation);Ser.setBitMask(bmI0, 5 & 7)}if (v.strictTypes !== undefined) {Ser.view.setUint8(Ser.index++, !!v.strictTypes);Ser.setBitMask(bmI0, 6 & 7)} return Ser}`,
    jitDependencies: ["tBi_BlfZNr"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_UyckOQ(utl) {
      const tBi_BlfZNr = utl.getJIT("tBi_BlfZNr");
      return function tBi_UyckOQ(v, Ser) {
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.runOnError !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.runOnError);
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.validateParams !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.validateParams);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        if (v.validateReturn !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.validateReturn);
          Ser.setBitMask(bmI0, 2 & 7);
        }
        if (v.description !== void 0) {
          Ser.serString(v.description);
          Ser.setBitMask(bmI0, 3 & 7);
        }
        if (v.serializer !== void 0) {
          tBi_BlfZNr.fn(v.serializer, Ser);
          Ser.setBitMask(bmI0, 4 & 7);
        }
        if (v.isMutation !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.isMutation);
          Ser.setBitMask(bmI0, 5 & 7);
        }
        if (v.strictTypes !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.strictTypes);
          Ser.setBitMask(bmI0, 6 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "tBi",
    jitFnHash: "tBi_BlfZNr",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_BlfZNr(v,Ser){if (v === "json") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "binary") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "stringifyJson") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_BlfZNr(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_BlfZNr(v, Ser) {
        if (v === "json") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v === "binary") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v === "stringifyJson") {
          Ser.view.setUint8(Ser.index++, 2);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Mwes8K: {
    isNoop: false,
    typeName: "HeadersMetaData",
    fnID: "tBi",
    jitFnHash: "tBi_Mwes8K",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS"); return function tBi_Mwes8K(v,Ser){tBi_IoMmkS.fn(v.headerNames,Ser);Ser.serString(v.jitHash);
; return Ser}`,
    jitDependencies: ["tBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Mwes8K(utl) {
      const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
      return function tBi_Mwes8K(v, Ser) {
        tBi_IoMmkS.fn(v.headerNames, Ser);
        Ser.serString(v.jitHash);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_gIMyOk: {
    isNoop: false,
    typeName: "FnsDataCache",
    fnID: "tBi",
    jitFnHash: "tBi_gIMyOk",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_Xj79tL = utl.getJIT("tBi_Xj79tL"); return function tBi_gIMyOk(v,Ser){
 let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;
 for (const p0 in v) {Ser.serString(p0); tBi_Xj79tL.fn(v[p0],Ser); cnt0++;}
 Ser.view.setUint32(piI0, cnt0, 1);
 ; return Ser}`,
    jitDependencies: ["tBi_Xj79tL"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_gIMyOk(utl) {
      const tBi_Xj79tL = utl.getJIT("tBi_Xj79tL");
      return function tBi_gIMyOk(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          tBi_Xj79tL.fn(v[p0], Ser);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Xj79tL: {
    isNoop: false,
    typeName: "JitCompiledFnData",
    fnID: "tBi",
    jitFnHash: "tBi_Xj79tL",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_o8YSce = utl.getJIT("tBi_o8YSce");
const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS"); return function tBi_Xj79tL(v,Ser){Ser.serString(v.typeName);Ser.serString(v.fnID);Ser.serString(v.jitFnHash);tBi_o8YSce.fn(v.args,Ser);tBi_o8YSce.fn(v.defaultParamValues,Ser);Ser.serString(v.code);tBi_IoMmkS.fn(v.jitDependencies,Ser);tBi_IoMmkS.fn(v.pureFnDependencies,Ser);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.isNoop !== undefined) {Ser.view.setUint8(Ser.index++, !!v.isNoop);Ser.setBitMask(bmI0, 0 & 7)}if (v.paramNames !== undefined) {tBi_IoMmkS.fn(v.paramNames,Ser);Ser.setBitMask(bmI0, 1 & 7)} return Ser}`,
    jitDependencies: ["tBi_o8YSce", "tBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Xj79tL(utl) {
      const tBi_o8YSce = utl.getJIT("tBi_o8YSce");
      const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
      return function tBi_Xj79tL(v, Ser) {
        Ser.serString(v.typeName);
        Ser.serString(v.fnID);
        Ser.serString(v.jitFnHash);
        tBi_o8YSce.fn(v.args, Ser);
        tBi_o8YSce.fn(v.defaultParamValues, Ser);
        Ser.serString(v.code);
        tBi_IoMmkS.fn(v.jitDependencies, Ser);
        tBi_IoMmkS.fn(v.pureFnDependencies, Ser);
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.isNoop !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v.isNoop);
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.paramNames !== void 0) {
          tBi_IoMmkS.fn(v.paramNames, Ser);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_o8YSce: {
    isNoop: false,
    typeName: "JitFnArgs",
    fnID: "tBi",
    jitFnHash: "tBi_o8YSce",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_o8YSce(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); Ser.serString(v[p0]); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_o8YSce(utl) {
      return function tBi_o8YSce(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          Ser.serString(v[p0]);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_eeweqs: {
    isNoop: false,
    typeName: "PureFnsDataCache",
    fnID: "tBi",
    jitFnHash: "tBi_eeweqs",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_RxxtpZ = utl.getJIT("tBi_RxxtpZ"); return function tBi_eeweqs(v,Ser){
 let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;
 for (const p0 in v) {Ser.serString(p0); tBi_RxxtpZ.fn(v[p0],Ser); cnt0++;}
 Ser.view.setUint32(piI0, cnt0, 1);
 ; return Ser}`,
    jitDependencies: ["tBi_RxxtpZ"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_eeweqs(utl) {
      const tBi_RxxtpZ = utl.getJIT("tBi_RxxtpZ");
      return function tBi_eeweqs(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          tBi_RxxtpZ.fn(v[p0], Ser);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_RxxtpZ: {
    isNoop: false,
    typeName: "Record",
    fnID: "tBi",
    jitFnHash: "tBi_RxxtpZ",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_Eyiyc6 = utl.getJIT("tBi_Eyiyc6"); return function tBi_RxxtpZ(v,Ser){
 let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;
 for (const p0 in v) {Ser.serString(p0); tBi_Eyiyc6.fn(v[p0],Ser); cnt0++;}
 Ser.view.setUint32(piI0, cnt0, 1);
 ; return Ser}`,
    jitDependencies: ["tBi_Eyiyc6"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_RxxtpZ(utl) {
      const tBi_Eyiyc6 = utl.getJIT("tBi_Eyiyc6");
      return function tBi_RxxtpZ(v, Ser) {
        let cnt0 = 0;
        const piI0 = Ser.index;
        Ser.index += 4;
        for (const p0 in v) {
          Ser.serString(p0);
          tBi_Eyiyc6.fn(v[p0], Ser);
          cnt0++;
        }
        Ser.view.setUint32(piI0, cnt0, 1);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Eyiyc6: {
    isNoop: false,
    typeName: "PureFunctionData",
    fnID: "tBi",
    jitFnHash: "tBi_Eyiyc6",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS"); return function tBi_Eyiyc6(v,Ser){Ser.serString(v.namespace);tBi_IoMmkS.fn(v.paramNames,Ser);Ser.serString(v.code);Ser.serString(v.fnName);Ser.serString(v.bodyHash);tBi_IoMmkS.fn(v.pureFnDependencies,Ser);
; return Ser}`,
    jitDependencies: ["tBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Eyiyc6(utl) {
      const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
      return function tBi_Eyiyc6(v, Ser) {
        Ser.serString(v.namespace);
        tBi_IoMmkS.fn(v.paramNames, Ser);
        Ser.serString(v.code);
        Ser.serString(v.fnName);
        Ser.serString(v.bodyHash);
        tBi_IoMmkS.fn(v.pureFnDependencies, Ser);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "tBi",
    jitFnHash: "tBi_CWm4ec",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E"); return function tBi_CWm4ec(v,Ser){;Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_Co6w6E.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`,
    jitDependencies: ["tBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_CWm4ec(utl) {
      const uErr1 =
        "Can not encode union to binary: item does not belong to the union";
      const tBi_Co6w6E = utl.getJIT("tBi_Co6w6E");
      return function tBi_CWm4ec(v, Ser) {
        Ser.serString(v.publicMessage);
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.id !== void 0) {
          if (Number.isFinite(v.id)) {
            Ser.view.setUint8(Ser.index++, 0);
            Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
          } else if (typeof v.id === "string") {
            Ser.view.setUint8(Ser.index++, 1);
            Ser.serString(v.id);
          } else {
            throw new Error(uErr1);
          }
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.errorData !== void 0) {
          tBi_Co6w6E.fn(v.errorData, Ser);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        if (v.statusCode !== void 0) {
          Ser.view.setFloat64(Ser.index, v.statusCode, 1, (Ser.index += 8));
          Ser.setBitMask(bmI0, 2 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_tD9d3F: {
    isNoop: false,
    typeName: "union",
    fnID: "fBi",
    jitFnHash: "fBi_tD9d3F",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index";
const fBi_sGC6wK = utl.getJIT("fBi_sGC6wK");
const fBi_CWm4ec = utl.getJIT("fBi_CWm4ec"); return function fBi_tD9d3F(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = fBi_sGC6wK.fn(undefined,Des)}else if (dec0 === 1) {ret = fBi_CWm4ec.fn(undefined,Des)}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: ["fBi_sGC6wK", "fBi_CWm4ec"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_tD9d3F(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      const fBi_sGC6wK = utl.getJIT("fBi_sGC6wK");
      const fBi_CWm4ec = utl.getJIT("fBi_CWm4ec");
      return function fBi_tD9d3F(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = fBi_sGC6wK.fn(void 0, Des);
        } else if (dec0 === 1) {
          ret = fBi_CWm4ec.fn(void 0, Des);
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_sGC6wK: {
    isNoop: false,
    typeName: "SerializableMethodsData",
    fnID: "fBi",
    jitFnHash: "fBi_sGC6wK",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_uO4Ywi = utl.getJIT("fBi_uO4Ywi");
const fBi_gIMyOk = utl.getJIT("fBi_gIMyOk");
const fBi_eeweqs = utl.getJIT("fBi_eeweqs"); return function fBi_sGC6wK(ret,Des){return {methods:fBi_uO4Ywi.fn(undefined,Des),deps:fBi_gIMyOk.fn(undefined,Des),purFnDeps:fBi_eeweqs.fn(undefined,Des)}}`,
    jitDependencies: ["fBi_uO4Ywi", "fBi_gIMyOk", "fBi_eeweqs"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_sGC6wK(utl) {
      const fBi_uO4Ywi = utl.getJIT("fBi_uO4Ywi");
      const fBi_gIMyOk = utl.getJIT("fBi_gIMyOk");
      const fBi_eeweqs = utl.getJIT("fBi_eeweqs");
      return function fBi_sGC6wK(ret, Des) {
        return {
          methods: fBi_uO4Ywi.fn(void 0, Des),
          deps: fBi_gIMyOk.fn(void 0, Des),
          purFnDeps: fBi_eeweqs.fn(void 0, Des),
        };
      };
    },
    fn: void 0,
  },
  fBi_uO4Ywi: {
    isNoop: false,
    typeName: "MethodsCache",
    fnID: "fBi",
    jitFnHash: "fBi_uO4Ywi",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_Vb9jXz = utl.getJIT("fBi_Vb9jXz"); return function fBi_uO4Ywi(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_Vb9jXz.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_Vb9jXz"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_uO4Ywi(utl) {
      const fBi_Vb9jXz = utl.getJIT("fBi_Vb9jXz");
      return function fBi_uO4Ywi(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = fBi_Vb9jXz.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Vb9jXz: {
    isNoop: false,
    typeName: "MethodWithOptions",
    fnID: "fBi",
    jitFnHash: "fBi_Vb9jXz",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
const fBi_UyckOQ = utl.getJIT("fBi_UyckOQ");
const fBi_Mwes8K = utl.getJIT("fBi_Mwes8K"); return function fBi_Vb9jXz(ret,Des){ret = {type:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),id:Des.desString(),isAsync:Des.view.getUint8(Des.index++) === 1,hasReturnData:Des.view.getUint8(Des.index++) === 1,paramsJitHash:Des.desString(),returnJitHash:Des.desString(),pointer:fBi_IoMmkS.fn(undefined,Des),nestLevel:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),options:fBi_UyckOQ.fn(undefined,Des)}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.paramNames = fBi_IoMmkS.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.headersParam = fBi_Mwes8K.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.headersReturn = fBi_Mwes8K.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {ret.middleFnIds = fBi_IoMmkS.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_IoMmkS", "fBi_UyckOQ", "fBi_Mwes8K"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Vb9jXz(utl) {
      const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
      const fBi_UyckOQ = utl.getJIT("fBi_UyckOQ");
      const fBi_Mwes8K = utl.getJIT("fBi_Mwes8K");
      return function fBi_Vb9jXz(ret, Des) {
        ret = {
          type: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          id: Des.desString(),
          isAsync: Des.view.getUint8(Des.index++) === 1,
          hasReturnData: Des.view.getUint8(Des.index++) === 1,
          paramsJitHash: Des.desString(),
          returnJitHash: Des.desString(),
          pointer: fBi_IoMmkS.fn(void 0, Des),
          nestLevel: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          options: fBi_UyckOQ.fn(void 0, Des),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          ret.paramNames = fBi_IoMmkS.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.headersParam = fBi_Mwes8K.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {
          ret.headersReturn = fBi_Mwes8K.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {
          ret.middleFnIds = fBi_IoMmkS.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_IoMmkS: {
    isNoop: false,
    typeName: "array",
    fnID: "fBi",
    jitFnHash: "fBi_IoMmkS",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_IoMmkS(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = Des.desString();}\n ; return ret}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_IoMmkS(utl) {
      return function fBi_IoMmkS(ret, Des) {
        const arrL0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = new Array(arrL0);
        for (let i0 = 0; i0 < arrL0; i0++) {
          ret[i0] = Des.desString();
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_UyckOQ: {
    isNoop: false,
    typeName: "RemoteMethodOpts",
    fnID: "fBi",
    jitFnHash: "fBi_UyckOQ",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_BlfZNr = utl.getJIT("fBi_BlfZNr"); return function fBi_UyckOQ(ret,Des){ret = {}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.runOnError = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.validateParams = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.validateReturn = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {ret.description = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (4 & 7))) {ret.serializer = fBi_BlfZNr.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (5 & 7))) {ret.isMutation = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (6 & 7))) {ret.strictTypes = Des.view.getUint8(Des.index++) === 1;} return ret}`,
    jitDependencies: ["fBi_BlfZNr"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_UyckOQ(utl) {
      const fBi_BlfZNr = utl.getJIT("fBi_BlfZNr");
      return function fBi_UyckOQ(ret, Des) {
        ret = {};
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          ret.runOnError = Des.view.getUint8(Des.index++) === 1;
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.validateParams = Des.view.getUint8(Des.index++) === 1;
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {
          ret.validateReturn = Des.view.getUint8(Des.index++) === 1;
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {
          ret.description = Des.desString();
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (4 & 7))) {
          ret.serializer = fBi_BlfZNr.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (5 & 7))) {
          ret.isMutation = Des.view.getUint8(Des.index++) === 1;
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (6 & 7))) {
          ret.strictTypes = Des.view.getUint8(Des.index++) === 1;
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_BlfZNr: {
    isNoop: false,
    typeName: "SerializerMode",
    fnID: "fBi",
    jitFnHash: "fBi_BlfZNr",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_BlfZNr(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = "json"}else if (dec0 === 1) {ret = "binary"}else if (dec0 === 2) {ret = "stringifyJson"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_BlfZNr(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_BlfZNr(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = "json";
        } else if (dec0 === 1) {
          ret = "binary";
        } else if (dec0 === 2) {
          ret = "stringifyJson";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Mwes8K: {
    isNoop: false,
    typeName: "HeadersMetaData",
    fnID: "fBi",
    jitFnHash: "fBi_Mwes8K",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS"); return function fBi_Mwes8K(ret,Des){return {headerNames:fBi_IoMmkS.fn(undefined,Des),jitHash:Des.desString()}}`,
    jitDependencies: ["fBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Mwes8K(utl) {
      const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
      return function fBi_Mwes8K(ret, Des) {
        return {
          headerNames: fBi_IoMmkS.fn(void 0, Des),
          jitHash: Des.desString(),
        };
      };
    },
    fn: void 0,
  },
  fBi_gIMyOk: {
    isNoop: false,
    typeName: "FnsDataCache",
    fnID: "fBi",
    jitFnHash: "fBi_gIMyOk",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_Xj79tL = utl.getJIT("fBi_Xj79tL"); return function fBi_gIMyOk(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_Xj79tL.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_Xj79tL"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_gIMyOk(utl) {
      const fBi_Xj79tL = utl.getJIT("fBi_Xj79tL");
      return function fBi_gIMyOk(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = fBi_Xj79tL.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Xj79tL: {
    isNoop: false,
    typeName: "JitCompiledFnData",
    fnID: "fBi",
    jitFnHash: "fBi_Xj79tL",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_o8YSce = utl.getJIT("fBi_o8YSce");
const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS"); return function fBi_Xj79tL(ret,Des){ret = {typeName:Des.desString(),fnID:Des.desString(),jitFnHash:Des.desString(),args:fBi_o8YSce.fn(undefined,Des),defaultParamValues:fBi_o8YSce.fn(undefined,Des),code:Des.desString(),jitDependencies:fBi_IoMmkS.fn(undefined,Des),pureFnDependencies:fBi_IoMmkS.fn(undefined,Des)}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.isNoop = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.paramNames = fBi_IoMmkS.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_o8YSce", "fBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Xj79tL(utl) {
      const fBi_o8YSce = utl.getJIT("fBi_o8YSce");
      const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
      return function fBi_Xj79tL(ret, Des) {
        ret = {
          typeName: Des.desString(),
          fnID: Des.desString(),
          jitFnHash: Des.desString(),
          args: fBi_o8YSce.fn(void 0, Des),
          defaultParamValues: fBi_o8YSce.fn(void 0, Des),
          code: Des.desString(),
          jitDependencies: fBi_IoMmkS.fn(void 0, Des),
          pureFnDependencies: fBi_IoMmkS.fn(void 0, Des),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          ret.isNoop = Des.view.getUint8(Des.index++) === 1;
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.paramNames = fBi_IoMmkS.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_o8YSce: {
    isNoop: false,
    typeName: "JitFnArgs",
    fnID: "fBi",
    jitFnHash: "fBi_o8YSce",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_o8YSce(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = Des.desString();} return ret}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_o8YSce(utl) {
      return function fBi_o8YSce(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = Des.desString();
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_eeweqs: {
    isNoop: false,
    typeName: "PureFnsDataCache",
    fnID: "fBi",
    jitFnHash: "fBi_eeweqs",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_RxxtpZ = utl.getJIT("fBi_RxxtpZ"); return function fBi_eeweqs(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_RxxtpZ.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_RxxtpZ"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_eeweqs(utl) {
      const fBi_RxxtpZ = utl.getJIT("fBi_RxxtpZ");
      return function fBi_eeweqs(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = fBi_RxxtpZ.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_RxxtpZ: {
    isNoop: false,
    typeName: "Record",
    fnID: "fBi",
    jitFnHash: "fBi_RxxtpZ",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_Eyiyc6 = utl.getJIT("fBi_Eyiyc6"); return function fBi_RxxtpZ(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_Eyiyc6.fn(undefined,Des);} return ret}`,
    jitDependencies: ["fBi_Eyiyc6"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_RxxtpZ(utl) {
      const fBi_Eyiyc6 = utl.getJIT("fBi_Eyiyc6");
      return function fBi_RxxtpZ(ret, Des) {
        const cnt0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = {};
        for (let propI0 = 0; propI0 < cnt0; propI0++) {
          const p0 = Des.desSafePropName();
          ret[p0] = fBi_Eyiyc6.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Eyiyc6: {
    isNoop: false,
    typeName: "PureFunctionData",
    fnID: "fBi",
    jitFnHash: "fBi_Eyiyc6",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS"); return function fBi_Eyiyc6(ret,Des){return {namespace:Des.desString(),paramNames:fBi_IoMmkS.fn(undefined,Des),code:Des.desString(),fnName:Des.desString(),bodyHash:Des.desString(),pureFnDependencies:fBi_IoMmkS.fn(undefined,Des)}}`,
    jitDependencies: ["fBi_IoMmkS"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Eyiyc6(utl) {
      const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
      return function fBi_Eyiyc6(ret, Des) {
        return {
          namespace: Des.desString(),
          paramNames: fBi_IoMmkS.fn(void 0, Des),
          code: Des.desString(),
          fnName: Des.desString(),
          bodyHash: Des.desString(),
          pureFnDependencies: fBi_IoMmkS.fn(void 0, Des),
        };
      };
    },
    fn: void 0,
  },
  fBi_CWm4ec: {
    isNoop: false,
    typeName: "RpcError",
    fnID: "fBi",
    jitFnHash: "fBi_CWm4ec",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr1 = "Can not binary decode union: invalid union index";
const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E"); return function fBi_CWm4ec(ret,Des){ret = {"mion@isΣrrθr":true,type:"rpc-metadata-not-found",publicMessage:Des.desString()}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
 const dec1 = Des.view.getUint8(Des.index++);
 if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}
 else {throw new Error(uErr1)}
 ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_Co6w6E.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}`,
    jitDependencies: ["fBi_Co6w6E"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_CWm4ec(utl) {
      const uErr1 = "Can not binary decode union: invalid union index";
      const fBi_Co6w6E = utl.getJIT("fBi_Co6w6E");
      return function fBi_CWm4ec(ret, Des) {
        ret = {
          "mion@isΣrrθr": true,
          type: "rpc-metadata-not-found",
          publicMessage: Des.desString(),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          const dec1 = Des.view.getUint8(Des.index++);
          if (dec1 === 0) {
            ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
          } else if (dec1 === 1) {
            ret.id = Des.desString();
          } else {
            throw new Error(uErr1);
          }
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.errorData = fBi_Co6w6E.fn(void 0, Des);
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {
          ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));
        }
        let desFn0 = utl.getDeserializeFn("RpcError");
        if (desFn0) {
          ret = desFn0(ret);
        } else if ((desFn0 = utl.getSerializeClass("RpcError"))) {
          ret = new desFn0(ret);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "is",
    jitFnHash: "is_BtjpVL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function is_BtjpVL(v){return (v.length <= 2 && typeof v[0] === 'string' && (v[1] === undefined || (typeof v[1] === 'boolean')))}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_BtjpVL(utl) {
      return function is_BtjpVL(v) {
        return (
          v.length <= 2 &&
          typeof v[0] === "string" &&
          (v[1] === void 0 || typeof v[1] === "boolean")
        );
      };
    },
    fn: void 0,
  },
  te_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "te",
    jitFnHash: "te_BtjpVL",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_BtjpVL(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {if (typeof v[0] !== 'string') Iqa2M8Ms(pth,er,"string",[0]);if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_BtjpVL(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_BtjpVL(v, pth = [], er = []) {
        if (v.length > 2) Iqa2M8Ms(pth, er, "params");
        else {
          if (typeof v[0] !== "string") Iqa2M8Ms(pth, er, "string", [0]);
          if (v[1] !== void 0) {
            if (typeof v[1] !== "boolean") Iqa2M8Ms(pth, er, "boolean", [1]);
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  tj_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "tj",
    jitFnHash: "tj_BtjpVL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_BtjpVL(v){if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_BtjpVL(utl) {
      return function tj_BtjpVL(v) {
        if (v[1] === void 0) {
          if (v.length > 1) v[1] = null;
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "fj",
    jitFnHash: "fj_BtjpVL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_BtjpVL(v){if (v[1] === null ) {v[1] = undefined} return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_BtjpVL(utl) {
      return function fj_BtjpVL(v) {
        if (v[1] === null) {
          v[1] = void 0;
        }
        return v;
      };
    },
    fn: void 0,
  },
  sj_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "sj",
    jitFnHash: "sj_BtjpVL",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function sj_BtjpVL(v){return '['+JSON.stringify(v[0])+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_BtjpVL(utl) {
      return function sj_BtjpVL(v) {
        return (
          "[" +
          JSON.stringify(v[0]) +
          (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) +
          "]"
        );
      };
    },
    fn: void 0,
  },
  tBi_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "tBi",
    jitFnHash: "tBi_BtjpVL",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_BtjpVL(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v[0] !== undefined) {Ser.serString(v[0]);Ser.setBitMask(tbmI0, 0)} if (v[1] !== undefined) {Ser.view.setUint8(Ser.index++, !!v[1]);Ser.setBitMask(tbmI0, 1)} ; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_BtjpVL(utl) {
      return function tBi_BtjpVL(v, Ser) {
        const tbmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v[0] !== void 0) {
          Ser.serString(v[0]);
          Ser.setBitMask(tbmI0, 0);
        }
        if (v[1] !== void 0) {
          Ser.view.setUint8(Ser.index++, !!v[1]);
          Ser.setBitMask(tbmI0, 1);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_BtjpVL: {
    isNoop: false,
    typeName: "params",
    fnID: "fBi",
    jitFnHash: "fBi_BtjpVL",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_BtjpVL(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = Des.desString()} if (Des.view.getUint8(tbimI0, 1) & (1 << (1))) {ret[1] = Des.view.getUint8(Des.index++) === 1} ; return ret}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_BtjpVL(utl) {
      return function fBi_BtjpVL(ret, Des) {
        ret = [];
        const tbimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(tbimI0, 1) & (1 << 0)) {
          ret[0] = Des.desString();
        }
        if (Des.view.getUint8(tbimI0, 1) & (1 << 1)) {
          ret[1] = Des.view.getUint8(Des.index++) === 1;
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_HZ3NL5: {
    isNoop: false,
    typeName: "string",
    fnID: "is",
    jitFnHash: "is_HZ3NL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function is_HZ3NL5(v){return typeof v === 'string'}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_HZ3NL5(utl) {
      return function is_HZ3NL5(v) {
        return typeof v === "string";
      };
    },
    fn: void 0,
  },
  te_HZ3NL5: {
    isNoop: false,
    typeName: "string",
    fnID: "te",
    jitFnHash: "te_HZ3NL5",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_HZ3NL5(v,pth=[],er=[]){if (typeof v !== 'string') Iqa2M8Ms(pth,er,"string"); return er}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_HZ3NL5(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_HZ3NL5(v, pth = [], er = []) {
        if (typeof v !== "string") Iqa2M8Ms(pth, er, "string");
        return er;
      };
    },
    fn: void 0,
  },
  tj_HZ3NL5: {
    isNoop: true,
    typeName: "string",
    fnID: "tj",
    jitFnHash: "tj_HZ3NL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_HZ3NL5(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_HZ3NL5(utl) {
      return function tj_HZ3NL5(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_HZ3NL5: {
    isNoop: true,
    typeName: "string",
    fnID: "fj",
    jitFnHash: "fj_HZ3NL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_HZ3NL5(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_HZ3NL5(utl) {
      return function fj_HZ3NL5(v) {
        return v;
      };
    },
    fn: void 0,
  },
  sj_HZ3NL5: {
    isNoop: false,
    typeName: "string",
    fnID: "sj",
    jitFnHash: "sj_HZ3NL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function sj_HZ3NL5(v){return JSON.stringify(v)}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_HZ3NL5(utl) {
      return function sj_HZ3NL5(v) {
        return JSON.stringify(v);
      };
    },
    fn: void 0,
  },
  tBi_HZ3NL5: {
    isNoop: false,
    typeName: "string",
    fnID: "tBi",
    jitFnHash: "tBi_HZ3NL5",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_HZ3NL5(v,Ser){Ser.serString(v); return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_HZ3NL5(utl) {
      return function tBi_HZ3NL5(v, Ser) {
        Ser.serString(v);
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_HZ3NL5: {
    isNoop: false,
    typeName: "string",
    fnID: "fBi",
    jitFnHash: "fBi_HZ3NL5",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_HZ3NL5(ret,Des){return Des.desString()}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_HZ3NL5(utl) {
      return function fBi_HZ3NL5(ret, Des) {
        return Des.desString();
      };
    },
    fn: void 0,
  },
  is_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "is",
    jitFnHash: "is_R35XJV",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_xrrn1f = utl.getJIT("is_xrrn1f"); return function is_R35XJV(v){return (v.length <= 1 && is_xrrn1f.fn(v[0]))}`,
    jitDependencies: ["is_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_is_R35XJV(utl) {
      const is_xrrn1f = utl.getJIT("is_xrrn1f");
      return function is_R35XJV(v) {
        return v.length <= 1 && is_xrrn1f.fn(v[0]);
      };
    },
    fn: void 0,
  },
  is_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "is",
    jitFnHash: "is_xrrn1f",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_nhdn7V = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const is_TlPnL5 = utl.getJIT("is_TlPnL5");
const is_SyisaY = utl.getJIT("is_SyisaY");
const is_GUgUK4 = utl.getJIT("is_GUgUK4");
const is_mguG4C = utl.getJIT("is_mguG4C");
const is_TXdDrb = utl.getJIT("is_TXdDrb");
const is_v7nFN3 = utl.getJIT("is_v7nFN3");
const k_xrrn1f = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_xrrn1f = []; return function is_xrrn1f(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_nhdn7V)) && is_TlPnL5.fn(v.role) && is_SyisaY.fn(v.status) && is_GUgUK4.fn(v.address) && is_mguG4C.fn(v.paymentMethods) && is_TXdDrb.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_v7nFN3.fn(v.tags) && !NVlxlJHR(v, k_xrrn1f))}`,
    jitDependencies: [
      "is_TlPnL5",
      "is_SyisaY",
      "is_GUgUK4",
      "is_mguG4C",
      "is_TXdDrb",
      "is_v7nFN3",
    ],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_xrrn1f(utl) {
      const k_nhdn7V = [
        "firstName",
        "lastName",
        "displayName",
        "bio",
        "avatarUrl",
        "dateOfBirth",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const is_TlPnL5 = utl.getJIT("is_TlPnL5");
      const is_SyisaY = utl.getJIT("is_SyisaY");
      const is_GUgUK4 = utl.getJIT("is_GUgUK4");
      const is_mguG4C = utl.getJIT("is_mguG4C");
      const is_TXdDrb = utl.getJIT("is_TXdDrb");
      const is_v7nFN3 = utl.getJIT("is_v7nFN3");
      const k_xrrn1f = [
        "id",
        "username",
        "email",
        "profile",
        "role",
        "status",
        "address",
        "paymentMethods",
        "preferences",
        "createdAt",
        "updatedAt",
        "lastLoginAt",
        "tags",
      ];
      return function is_xrrn1f(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          Number.isFinite(v.id) &&
          typeof v.username === "string" &&
          typeof v.email === "string" &&
          typeof v.profile === "object" &&
          v.profile !== null &&
          typeof v.profile.firstName === "string" &&
          typeof v.profile.lastName === "string" &&
          typeof v.profile.displayName === "string" &&
          (v.profile.bio === void 0 || typeof v.profile.bio === "string") &&
          (v.profile.avatarUrl === void 0 ||
            typeof v.profile.avatarUrl === "string") &&
          v.profile.dateOfBirth instanceof Date &&
          !isNaN(v.profile.dateOfBirth.getTime()) &&
          !NVlxlJHR(v.profile, k_nhdn7V) &&
          is_TlPnL5.fn(v.role) &&
          is_SyisaY.fn(v.status) &&
          is_GUgUK4.fn(v.address) &&
          is_mguG4C.fn(v.paymentMethods) &&
          is_TXdDrb.fn(v.preferences) &&
          v.createdAt instanceof Date &&
          !isNaN(v.createdAt.getTime()) &&
          v.updatedAt instanceof Date &&
          !isNaN(v.updatedAt.getTime()) &&
          (v.lastLoginAt === void 0 ||
            (v.lastLoginAt instanceof Date &&
              !isNaN(v.lastLoginAt.getTime()))) &&
          is_v7nFN3.fn(v.tags) &&
          !NVlxlJHR(v, k_xrrn1f)
        );
      };
    },
    fn: void 0,
  },
  is_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "is",
    jitFnHash: "is_TlPnL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_TlPnL5(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_TlPnL5(utl) {
      return function is_TlPnL5(v) {
        return (
          v === "admin" || v === "user" || v === "guest" || v === "moderator"
        );
      };
    },
    fn: void 0,
  },
  is_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "is",
    jitFnHash: "is_SyisaY",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_SyisaY(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_SyisaY(utl) {
      return function is_SyisaY(v) {
        return (
          v === "active" ||
          v === "suspended" ||
          v === "pending_verification" ||
          v === "deactivated"
        );
      };
    },
    fn: void 0,
  },
  is_GUgUK4: {
    isNoop: false,
    typeName: "Address",
    fnID: "is",
    jitFnHash: "is_GUgUK4",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
const kA_GUgUK4 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_GUgUK4(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string' && !NVlxlJHR(v, k_GUgUK4))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_GUgUK4(utl) {
      const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_GUgUK4(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.street === "string" &&
          typeof v.city === "string" &&
          typeof v.state === "string" &&
          typeof v.zipCode === "string" &&
          typeof v.country === "string" &&
          !NVlxlJHR(v, k_GUgUK4)
        );
      };
    },
    fn: void 0,
  },
  is_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "is",
    jitFnHash: "is_mguG4C",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_Njl7xz = utl.getJIT("is_Njl7xz"); return function is_mguG4C(v){
 if (!Array.isArray(v)) return false;
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = is_Njl7xz.fn(v[i0]);
 if (!(res0)) return false;
 }
 return true;
 }`,
    jitDependencies: ["is_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_is_mguG4C(utl) {
      const is_Njl7xz = utl.getJIT("is_Njl7xz");
      return function is_mguG4C(v) {
        if (!Array.isArray(v)) return false;
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = is_Njl7xz.fn(v[i0]);
          if (!res0) return false;
        }
        return true;
      };
    },
    fn: void 0,
  },
  is_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "is",
    jitFnHash: "is_Njl7xz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function is_Njl7xz(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK)) || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4)) || (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY)))))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Njl7xz(utl) {
      const k_M2okYK = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_U42ywY = ["type", "email"];
      return function is_Njl7xz(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          ((v.type === "credit_card" &&
            typeof v.lastFourDigits === "string" &&
            Number.isFinite(v.expiryMonth) &&
            Number.isFinite(v.expiryYear) &&
            typeof v.brand === "string" &&
            !NVlxlJHR(v, k_M2okYK)) ||
            (v.type === "bank_account" &&
              typeof v.bankName === "string" &&
              typeof v.accountLastFour === "string" &&
              typeof v.routingNumber === "string" &&
              !NVlxlJHR(v, k_WwEqA4)) ||
            (v.type === "paypal" &&
              typeof v.email === "string" &&
              !NVlxlJHR(v, k_U42ywY)))
        );
      };
    },
    fn: void 0,
  },
  is_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "is",
    jitFnHash: "is_TXdDrb",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_YyoQ6q = utl.getJIT("is_YyoQ6q");
const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
const kA_TXdDrb = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_TXdDrb(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_YyoQ6q.fn(v.notifications) && !NVlxlJHR(v, k_TXdDrb))}`,
    jitDependencies: ["is_YyoQ6q"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_TXdDrb(utl) {
      const is_YyoQ6q = utl.getJIT("is_YyoQ6q");
      const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_TXdDrb(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          (v.theme === "light" || v.theme === "dark" || v.theme === "system") &&
          typeof v.language === "string" &&
          typeof v.timezone === "string" &&
          is_YyoQ6q.fn(v.notifications) &&
          !NVlxlJHR(v, k_TXdDrb)
        );
      };
    },
    fn: void 0,
  },
  is_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "is",
    jitFnHash: "is_YyoQ6q",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_YyoQ6q = ["email", "sms", "push", "frequency"];
const kA_YyoQ6q = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_YyoQ6q(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_YyoQ6q))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_YyoQ6q(utl) {
      const k_YyoQ6q = ["email", "sms", "push", "frequency"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_YyoQ6q(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.email === "boolean" &&
          typeof v.sms === "boolean" &&
          typeof v.push === "boolean" &&
          (v.frequency === "immediate" ||
            v.frequency === "daily" ||
            v.frequency === "weekly") &&
          !NVlxlJHR(v, k_YyoQ6q)
        );
      };
    },
    fn: void 0,
  },
  te_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "te",
    jitFnHash: "te_R35XJV",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_xrrn1f = utl.getJIT("te_xrrn1f");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_R35XJV(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_xrrn1f.fn(v[0],pth,er); pth.splice(-1);} return er}`,
    jitDependencies: ["te_xrrn1f"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_R35XJV(utl) {
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
    },
    fn: void 0,
  },
  te_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "te",
    jitFnHash: "te_xrrn1f",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_nhdn7V = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_nhdn7V = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
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
 ; return er}`,
    jitDependencies: [
      "te_TlPnL5",
      "te_SyisaY",
      "te_GUgUK4",
      "te_mguG4C",
      "te_TXdDrb",
      "te_v7nFN3",
    ],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_xrrn1f(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_nhdn7V = [
        "firstName",
        "lastName",
        "displayName",
        "bio",
        "avatarUrl",
        "dateOfBirth",
      ];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const te_TlPnL5 = utl.getJIT("te_TlPnL5");
      const te_SyisaY = utl.getJIT("te_SyisaY");
      const te_GUgUK4 = utl.getJIT("te_GUgUK4");
      const te_mguG4C = utl.getJIT("te_mguG4C");
      const te_TXdDrb = utl.getJIT("te_TXdDrb");
      const te_v7nFN3 = utl.getJIT("te_v7nFN3");
      const k_xrrn1f = [
        "id",
        "username",
        "email",
        "profile",
        "role",
        "status",
        "address",
        "paymentMethods",
        "preferences",
        "createdAt",
        "updatedAt",
        "lastLoginAt",
        "tags",
      ];
      return function te_xrrn1f(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
          if (typeof v.username !== "string")
            Iqa2M8Ms(pth, er, "string", ["username"]);
          if (typeof v.email !== "string")
            Iqa2M8Ms(pth, er, "string", ["email"]);
          if (!(typeof v.profile === "object" && v.profile !== null)) {
            Iqa2M8Ms(pth, er, "object", ["profile"]);
          } else {
            if (typeof v.profile.firstName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "firstName"]);
            if (typeof v.profile.lastName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "lastName"]);
            if (typeof v.profile.displayName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "displayName"]);
            if (v.profile.bio !== void 0) {
              if (typeof v.profile.bio !== "string")
                Iqa2M8Ms(pth, er, "string", ["profile", "bio"]);
            }
            if (v.profile.avatarUrl !== void 0) {
              if (typeof v.profile.avatarUrl !== "string")
                Iqa2M8Ms(pth, er, "string", ["profile", "avatarUrl"]);
            }
            if (
              !(
                v.profile.dateOfBirth instanceof Date &&
                !isNaN(v.profile.dateOfBirth.getTime())
              )
            )
              Iqa2M8Ms(pth, er, "date", ["profile", "dateOfBirth"]);
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
          if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())))
            Iqa2M8Ms(pth, er, "date", ["createdAt"]);
          if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())))
            Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
          if (v.lastLoginAt !== void 0) {
            if (
              !(
                v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())
              )
            )
              Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
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
    },
    fn: void 0,
  },
  te_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "te",
    jitFnHash: "te_TlPnL5",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_TlPnL5 = utl.getJIT("is_TlPnL5");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_TlPnL5(v,pth=[],er=[]){if (!is_TlPnL5.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_TlPnL5"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_TlPnL5(utl) {
      const is_TlPnL5 = utl.getJIT("is_TlPnL5");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_TlPnL5(v, pth = [], er = []) {
        if (!is_TlPnL5.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "te",
    jitFnHash: "te_SyisaY",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_SyisaY = utl.getJIT("is_SyisaY");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_SyisaY(v,pth=[],er=[]){if (!is_SyisaY.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_SyisaY"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_SyisaY(utl) {
      const is_SyisaY = utl.getJIT("is_SyisaY");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_SyisaY(v, pth = [], er = []) {
        if (!is_SyisaY.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_GUgUK4: {
    isNoop: false,
    typeName: "Address",
    fnID: "te",
    jitFnHash: "te_GUgUK4",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
const kA_GUgUK4 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_GUgUK4(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 
 const unk0 = lTBP5VNV(v, k_GUgUK4);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_GUgUK4(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_GUgUK4 = ["street", "city", "state", "zipCode", "country"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_GUgUK4(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (typeof v.street !== "string")
            Iqa2M8Ms(pth, er, "string", ["street"]);
          if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
          if (typeof v.state !== "string")
            Iqa2M8Ms(pth, er, "string", ["state"]);
          if (typeof v.zipCode !== "string")
            Iqa2M8Ms(pth, er, "string", ["zipCode"]);
          if (typeof v.country !== "string")
            Iqa2M8Ms(pth, er, "string", ["country"]);
          const unk0 = lTBP5VNV(v, k_GUgUK4);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  te_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "te",
    jitFnHash: "te_mguG4C",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_Njl7xz = utl.getJIT("te_Njl7xz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_mguG4C(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_Njl7xz.fn(v[i0],pth,er); pth.splice(-1);}} return er}`,
    jitDependencies: ["te_Njl7xz"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_mguG4C(utl) {
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
    },
    fn: void 0,
  },
  te_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "te",
    jitFnHash: "te_Njl7xz",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_Njl7xz = utl.getJIT("is_Njl7xz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Njl7xz(v,pth=[],er=[]){if (!is_Njl7xz.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_Njl7xz"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_Njl7xz(utl) {
      const is_Njl7xz = utl.getJIT("is_Njl7xz");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_Njl7xz(v, pth = [], er = []) {
        if (!is_Njl7xz.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "te",
    jitFnHash: "te_TXdDrb",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_YyoQ6q = utl.getJIT("te_YyoQ6q");
const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
const kA_TXdDrb = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_TXdDrb(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_YyoQ6q.fn(v.notifications,pth,er); pth.splice(-1);
 
 const unk0 = lTBP5VNV(v, k_TXdDrb);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: ["te_YyoQ6q"],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_TXdDrb(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const te_YyoQ6q = utl.getJIT("te_YyoQ6q");
      const k_TXdDrb = ["theme", "language", "timezone", "notifications"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_TXdDrb(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (
            !(v.theme === "light" || v.theme === "dark" || v.theme === "system")
          )
            Iqa2M8Ms(pth, er, "union", ["theme"]);
          if (typeof v.language !== "string")
            Iqa2M8Ms(pth, er, "string", ["language"]);
          if (typeof v.timezone !== "string")
            Iqa2M8Ms(pth, er, "string", ["timezone"]);
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
    },
    fn: void 0,
  },
  te_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "te",
    jitFnHash: "te_YyoQ6q",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_YyoQ6q = ["email", "sms", "push", "frequency"];
const kA_YyoQ6q = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_YyoQ6q(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 
 const unk0 = lTBP5VNV(v, k_YyoQ6q);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_YyoQ6q(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_YyoQ6q = ["email", "sms", "push", "frequency"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_YyoQ6q(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (typeof v.email !== "boolean")
            Iqa2M8Ms(pth, er, "boolean", ["email"]);
          if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
          if (typeof v.push !== "boolean")
            Iqa2M8Ms(pth, er, "boolean", ["push"]);
          if (
            !(
              v.frequency === "immediate" ||
              v.frequency === "daily" ||
              v.frequency === "weekly"
            )
          )
            Iqa2M8Ms(pth, er, "union", ["frequency"]);
          const unk0 = lTBP5VNV(v, k_YyoQ6q);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  tj_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "tj",
    jitFnHash: "tj_R35XJV",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_xrrn1f = utl.getJIT("tj_xrrn1f"); return function tj_R35XJV(v){v[0] = tj_xrrn1f.fn(v[0]); return v}`,
    jitDependencies: ["tj_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_tj_R35XJV(utl) {
      const tj_xrrn1f = utl.getJIT("tj_xrrn1f");
      return function tj_R35XJV(v) {
        v[0] = tj_xrrn1f.fn(v[0]);
        return v;
      };
    },
    fn: void 0,
  },
  tj_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "tj",
    jitFnHash: "tj_xrrn1f",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_TlPnL5 = utl.getJIT("tj_TlPnL5");
const tj_SyisaY = utl.getJIT("tj_SyisaY");
const tj_mguG4C = utl.getJIT("tj_mguG4C");
const tj_TXdDrb = utl.getJIT("tj_TXdDrb"); return function tj_xrrn1f(v){v.role = tj_TlPnL5.fn(v.role);v.status = tj_SyisaY.fn(v.status);v.paymentMethods = tj_mguG4C.fn(v.paymentMethods);v.preferences = tj_TXdDrb.fn(v.preferences); return v}`,
    jitDependencies: ["tj_TlPnL5", "tj_SyisaY", "tj_mguG4C", "tj_TXdDrb"],
    pureFnDependencies: [],
    createJitFn: function get_tj_xrrn1f(utl) {
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
    },
    fn: void 0,
  },
  tj_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "tj",
    jitFnHash: "tj_TlPnL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_TlPnL5(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_TlPnL5(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_TlPnL5(v) {
        if (v === "admin");
        else if (v === "user");
        else if (v === "guest");
        else if (v === "moderator");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "tj",
    jitFnHash: "tj_SyisaY",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_SyisaY(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_SyisaY(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_SyisaY(v) {
        if (v === "active");
        else if (v === "suspended");
        else if (v === "pending_verification");
        else if (v === "deactivated");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_GUgUK4: {
    isNoop: true,
    typeName: "Address",
    fnID: "tj",
    jitFnHash: "tj_GUgUK4",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_GUgUK4(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_GUgUK4(utl) {
      return function tj_GUgUK4(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "tj",
    jitFnHash: "tj_mguG4C",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_Njl7xz = utl.getJIT("tj_Njl7xz"); return function tj_mguG4C(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_Njl7xz.fn(v[i0]);} return v}`,
    jitDependencies: ["tj_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_tj_mguG4C(utl) {
      const tj_Njl7xz = utl.getJIT("tj_Njl7xz");
      return function tj_mguG4C(v) {
        for (let i0 = 0; i0 < v.length; i0++) {
          v[i0] = tj_Njl7xz.fn(v[i0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "tj",
    jitFnHash: "tj_Njl7xz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function tj_Njl7xz(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY))) { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_tj_Njl7xz(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      const k_M2okYK = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_U42ywY = ["type", "email"];
      return function tj_Njl7xz(v) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_M2okYK)
        );
        else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_WwEqA4)
        );
        else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_U42ywY)
        );
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "tj",
    jitFnHash: "tj_TXdDrb",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const tj_YyoQ6q = utl.getJIT("tj_YyoQ6q"); return function tj_TXdDrb(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_YyoQ6q.fn(v.notifications); return v}`,
    jitDependencies: ["tj_YyoQ6q"],
    pureFnDependencies: [],
    createJitFn: function get_tj_TXdDrb(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      const tj_YyoQ6q = utl.getJIT("tj_YyoQ6q");
      return function tj_TXdDrb(v) {
        if (v.theme === "light");
        else if (v.theme === "dark");
        else if (v.theme === "system");
        else {
          throw new Error(uErr0);
        }
        v.notifications = tj_YyoQ6q.fn(v.notifications);
        return v;
      };
    },
    fn: void 0,
  },
  tj_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "tj",
    jitFnHash: "tj_YyoQ6q",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_YyoQ6q(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_YyoQ6q(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_YyoQ6q(v) {
        if (v.frequency === "immediate");
        else if (v.frequency === "daily");
        else if (v.frequency === "weekly");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "fj",
    jitFnHash: "fj_R35XJV",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_xrrn1f = utl.getJIT("fj_xrrn1f"); return function fj_R35XJV(v){v[0] = fj_xrrn1f.fn(v[0]); return v}`,
    jitDependencies: ["fj_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_fj_R35XJV(utl) {
      const fj_xrrn1f = utl.getJIT("fj_xrrn1f");
      return function fj_R35XJV(v) {
        v[0] = fj_xrrn1f.fn(v[0]);
        return v;
      };
    },
    fn: void 0,
  },
  fj_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "fj",
    jitFnHash: "fj_xrrn1f",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_TlPnL5 = utl.getJIT("fj_TlPnL5");
const fj_SyisaY = utl.getJIT("fj_SyisaY");
const fj_mguG4C = utl.getJIT("fj_mguG4C");
const fj_TXdDrb = utl.getJIT("fj_TXdDrb"); return function fj_xrrn1f(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_TlPnL5.fn(v.role);v.status = fj_SyisaY.fn(v.status);v.paymentMethods = fj_mguG4C.fn(v.paymentMethods);v.preferences = fj_TXdDrb.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}`,
    jitDependencies: ["fj_TlPnL5", "fj_SyisaY", "fj_mguG4C", "fj_TXdDrb"],
    pureFnDependencies: [],
    createJitFn: function get_fj_xrrn1f(utl) {
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
    },
    fn: void 0,
  },
  fj_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "fj",
    jitFnHash: "fj_TlPnL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_TlPnL5(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_TlPnL5(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_TlPnL5(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else if (dec0 === 3);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "fj",
    jitFnHash: "fj_SyisaY",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_SyisaY(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_SyisaY(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_SyisaY(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else if (dec0 === 3);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_GUgUK4: {
    isNoop: true,
    typeName: "Address",
    fnID: "fj",
    jitFnHash: "fj_GUgUK4",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_GUgUK4(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_GUgUK4(utl) {
      return function fj_GUgUK4(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "fj",
    jitFnHash: "fj_mguG4C",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_Njl7xz = utl.getJIT("fj_Njl7xz"); return function fj_mguG4C(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_Njl7xz.fn(v[i0]);} return v}`,
    jitDependencies: ["fj_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_fj_mguG4C(utl) {
      const fj_Njl7xz = utl.getJIT("fj_Njl7xz");
      return function fj_mguG4C(v) {
        for (let i0 = 0; i0 < v.length; i0++) {
          v[i0] = fj_Njl7xz.fn(v[i0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "fj",
    jitFnHash: "fj_Njl7xz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_Njl7xz(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_Njl7xz(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_Njl7xz(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "fj",
    jitFnHash: "fj_TXdDrb",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_YyoQ6q = utl.getJIT("fj_YyoQ6q"); return function fj_TXdDrb(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_YyoQ6q.fn(v.notifications); return v}`,
    jitDependencies: ["fj_YyoQ6q"],
    pureFnDependencies: [],
    createJitFn: function get_fj_TXdDrb(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      const fj_YyoQ6q = utl.getJIT("fj_YyoQ6q");
      return function fj_TXdDrb(v) {
        var _a;
        if (
          ((_a = v.theme) == null ? void 0 : _a.length) === 2 &&
          Array.isArray(v.theme) &&
          typeof v.theme[0] === "number"
        ) {
          const dec0 = v.theme[0];
          v.theme = v.theme[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        v.notifications = fj_YyoQ6q.fn(v.notifications);
        return v;
      };
    },
    fn: void 0,
  },
  fj_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "fj",
    jitFnHash: "fj_YyoQ6q",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_YyoQ6q(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_YyoQ6q(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_YyoQ6q(v) {
        var _a;
        if (
          ((_a = v.frequency) == null ? void 0 : _a.length) === 2 &&
          Array.isArray(v.frequency) &&
          typeof v.frequency[0] === "number"
        ) {
          const dec0 = v.frequency[0];
          v.frequency = v.frequency[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  sj_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "sj",
    jitFnHash: "sj_R35XJV",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_xrrn1f = utl.getJIT("sj_xrrn1f"); return function sj_R35XJV(v){return '['+sj_xrrn1f.fn(v[0])+']'}`,
    jitDependencies: ["sj_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_sj_R35XJV(utl) {
      const sj_xrrn1f = utl.getJIT("sj_xrrn1f");
      return function sj_R35XJV(v) {
        return "[" + sj_xrrn1f.fn(v[0]) + "]";
      };
    },
    fn: void 0,
  },
  sj_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "sj",
    jitFnHash: "sj_xrrn1f",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_TlPnL5 = utl.getJIT("sj_TlPnL5");
const sj_SyisaY = utl.getJIT("sj_SyisaY");
const sj_GUgUK4 = utl.getJIT("sj_GUgUK4");
const sj_mguG4C = utl.getJIT("sj_mguG4C");
const sj_TXdDrb = utl.getJIT("sj_TXdDrb");
const sj_v7nFN3 = utl.getJIT("sj_v7nFN3"); return function sj_xrrn1f(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_TlPnL5.fn(v.role)+","+'"status":'+sj_SyisaY.fn(v.status)+","+'"address":'+sj_GUgUK4.fn(v.address)+","+'"paymentMethods":'+sj_mguG4C.fn(v.paymentMethods)+","+'"preferences":'+sj_TXdDrb.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_v7nFN3.fn(v.tags)+'}'}`,
    jitDependencies: [
      "sj_TlPnL5",
      "sj_SyisaY",
      "sj_GUgUK4",
      "sj_mguG4C",
      "sj_TXdDrb",
      "sj_v7nFN3",
    ],
    pureFnDependencies: [],
    createJitFn: function get_sj_xrrn1f(utl) {
      const sj_TlPnL5 = utl.getJIT("sj_TlPnL5");
      const sj_SyisaY = utl.getJIT("sj_SyisaY");
      const sj_GUgUK4 = utl.getJIT("sj_GUgUK4");
      const sj_mguG4C = utl.getJIT("sj_mguG4C");
      const sj_TXdDrb = utl.getJIT("sj_TXdDrb");
      const sj_v7nFN3 = utl.getJIT("sj_v7nFN3");
      return function sj_xrrn1f(v) {
        return (
          "{" +
          (v.lastLoginAt === void 0
            ? ""
            : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') +
          '"id":' +
          v.id +
          ',"username":' +
          JSON.stringify(v.username) +
          ',"email":' +
          JSON.stringify(v.email) +
          ',"profile":{' +
          (v.profile.bio === void 0
            ? ""
            : '"bio":' + JSON.stringify(v.profile.bio) + ",") +
          (v.profile.avatarUrl === void 0
            ? ""
            : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") +
          '"firstName":' +
          JSON.stringify(v.profile.firstName) +
          ',"lastName":' +
          JSON.stringify(v.profile.lastName) +
          ',"displayName":' +
          JSON.stringify(v.profile.displayName) +
          ',"dateOfBirth":"' +
          v.profile.dateOfBirth.toJSON() +
          '"},"role":' +
          sj_TlPnL5.fn(v.role) +
          ',"status":' +
          sj_SyisaY.fn(v.status) +
          ',"address":' +
          sj_GUgUK4.fn(v.address) +
          ',"paymentMethods":' +
          sj_mguG4C.fn(v.paymentMethods) +
          ',"preferences":' +
          sj_TXdDrb.fn(v.preferences) +
          ',"createdAt":"' +
          v.createdAt.toJSON() +
          '","updatedAt":"' +
          v.updatedAt.toJSON() +
          '","tags":' +
          sj_v7nFN3.fn(v.tags) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "sj",
    jitFnHash: "sj_TlPnL5",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_TlPnL5(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_TlPnL5(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
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
    },
    fn: void 0,
  },
  sj_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "sj",
    jitFnHash: "sj_SyisaY",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_SyisaY(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_SyisaY(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
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
    },
    fn: void 0,
  },
  sj_GUgUK4: {
    isNoop: false,
    typeName: "Address",
    fnID: "sj",
    jitFnHash: "sj_GUgUK4",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function sj_GUgUK4(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_GUgUK4(utl) {
      return function sj_GUgUK4(v) {
        return (
          '{"street":' +
          JSON.stringify(v.street) +
          ',"city":' +
          JSON.stringify(v.city) +
          ',"state":' +
          JSON.stringify(v.state) +
          ',"zipCode":' +
          JSON.stringify(v.zipCode) +
          ',"country":' +
          JSON.stringify(v.country) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "sj",
    jitFnHash: "sj_mguG4C",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_Njl7xz = utl.getJIT("sj_Njl7xz"); return function sj_mguG4C(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_Njl7xz.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`,
    jitDependencies: ["sj_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_sj_mguG4C(utl) {
      const sj_Njl7xz = utl.getJIT("sj_Njl7xz");
      return function sj_mguG4C(v) {
        const ls0 = [];
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = sj_Njl7xz.fn(v[i0]);
          ls0.push(res0);
        }
        return "[" + ls0.join(",") + "]";
      };
    },
    fn: void 0,
  },
  sj_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "sj",
    jitFnHash: "sj_Njl7xz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function sj_Njl7xz(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_sj_Njl7xz(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const k_M2okYK = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_U42ywY = ["type", "email"];
      return function sj_Njl7xz(v) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_M2okYK)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"lastFourDigits":' +
            JSON.stringify(v.lastFourDigits) +
            ',"expiryMonth":' +
            v.expiryMonth +
            ',"expiryYear":' +
            v.expiryYear +
            ',"brand":' +
            JSON.stringify(v.brand) +
            "}"
          );
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_WwEqA4)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"bankName":' +
            JSON.stringify(v.bankName) +
            ',"accountLastFour":' +
            JSON.stringify(v.accountLastFour) +
            ',"routingNumber":' +
            JSON.stringify(v.routingNumber) +
            "}"
          );
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_U42ywY)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"email":' +
            JSON.stringify(v.email) +
            "}"
          );
        } else {
          throw new Error(uErr0);
        }
      };
    },
    fn: void 0,
  },
  sj_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "sj",
    jitFnHash: "sj_TXdDrb",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_YyoQ6q = utl.getJIT("sj_YyoQ6q"); return function sj_TXdDrb(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_YyoQ6q.fn(v.notifications)+'}'}`,
    jitDependencies: ["sj_YyoQ6q"],
    pureFnDependencies: [],
    createJitFn: function get_sj_TXdDrb(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const sj_YyoQ6q = utl.getJIT("sj_YyoQ6q");
      return function sj_TXdDrb(v) {
        return (
          '{"theme":' +
          (function () {
            if (v.theme === "light") {
              return JSON.stringify(v.theme);
            } else if (v.theme === "dark") {
              return JSON.stringify(v.theme);
            } else if (v.theme === "system") {
              return JSON.stringify(v.theme);
            } else {
              throw new Error(uErr0);
            }
          })() +
          ',"language":' +
          JSON.stringify(v.language) +
          ',"timezone":' +
          JSON.stringify(v.timezone) +
          ',"notifications":' +
          sj_YyoQ6q.fn(v.notifications) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "sj",
    jitFnHash: "sj_YyoQ6q",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_YyoQ6q(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_YyoQ6q(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      return function sj_YyoQ6q(v) {
        return (
          '{"email":' +
          (v.email ? "true" : "false") +
          ',"sms":' +
          (v.sms ? "true" : "false") +
          ',"push":' +
          (v.push ? "true" : "false") +
          ',"frequency":' +
          (function () {
            if (v.frequency === "immediate") {
              return JSON.stringify(v.frequency);
            } else if (v.frequency === "daily") {
              return JSON.stringify(v.frequency);
            } else if (v.frequency === "weekly") {
              return JSON.stringify(v.frequency);
            } else {
              throw new Error(uErr0);
            }
          })() +
          "}"
        );
      };
    },
    fn: void 0,
  },
  tBi_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "tBi",
    jitFnHash: "tBi_R35XJV",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_xrrn1f = utl.getJIT("tBi_xrrn1f"); return function tBi_R35XJV(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v[0] !== undefined) {tBi_xrrn1f.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} ; return Ser}`,
    jitDependencies: ["tBi_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_R35XJV(utl) {
      const tBi_xrrn1f = utl.getJIT("tBi_xrrn1f");
      return function tBi_R35XJV(v, Ser) {
        const tbmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v[0] !== void 0) {
          tBi_xrrn1f.fn(v[0], Ser);
          Ser.setBitMask(tbmI0, 0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "tBi",
    jitFnHash: "tBi_xrrn1f",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_TlPnL5 = utl.getJIT("tBi_TlPnL5");
const tBi_SyisaY = utl.getJIT("tBi_SyisaY");
const tBi_GUgUK4 = utl.getJIT("tBi_GUgUK4");
const tBi_mguG4C = utl.getJIT("tBi_mguG4C");
const tBi_TXdDrb = utl.getJIT("tBi_TXdDrb");
const tBi_v7nFN3 = utl.getJIT("tBi_v7nFN3"); return function tBi_xrrn1f(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.username);Ser.serString(v.email);Ser.serString(v.profile.firstName);Ser.serString(v.profile.lastName);Ser.serString(v.profile.displayName);Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, (Ser.index += 8));
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.profile.bio !== undefined) {Ser.serString(v.profile.bio);Ser.setBitMask(bmI0, 0 & 7)}if (v.profile.avatarUrl !== undefined) {Ser.serString(v.profile.avatarUrl);Ser.setBitMask(bmI0, 1 & 7)};tBi_TlPnL5.fn(v.role,Ser);tBi_SyisaY.fn(v.status,Ser);tBi_GUgUK4.fn(v.address,Ser);tBi_mguG4C.fn(v.paymentMethods,Ser);tBi_TXdDrb.fn(v.preferences,Ser);Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, (Ser.index += 8));tBi_v7nFN3.fn(v.tags,Ser);
const bmI1 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.lastLoginAt !== undefined) {Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, (Ser.index += 8));Ser.setBitMask(bmI1, 0 & 7)} return Ser}`,
    jitDependencies: [
      "tBi_TlPnL5",
      "tBi_SyisaY",
      "tBi_GUgUK4",
      "tBi_mguG4C",
      "tBi_TXdDrb",
      "tBi_v7nFN3",
    ],
    pureFnDependencies: [],
    createJitFn: function get_tBi_xrrn1f(utl) {
      const tBi_TlPnL5 = utl.getJIT("tBi_TlPnL5");
      const tBi_SyisaY = utl.getJIT("tBi_SyisaY");
      const tBi_GUgUK4 = utl.getJIT("tBi_GUgUK4");
      const tBi_mguG4C = utl.getJIT("tBi_mguG4C");
      const tBi_TXdDrb = utl.getJIT("tBi_TXdDrb");
      const tBi_v7nFN3 = utl.getJIT("tBi_v7nFN3");
      return function tBi_xrrn1f(v, Ser) {
        Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
        Ser.serString(v.username);
        Ser.serString(v.email);
        Ser.serString(v.profile.firstName);
        Ser.serString(v.profile.lastName);
        Ser.serString(v.profile.displayName);
        Ser.view.setFloat64(
          Ser.index,
          v.profile.dateOfBirth.getTime(),
          1,
          (Ser.index += 8),
        );
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.profile.bio !== void 0) {
          Ser.serString(v.profile.bio);
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.profile.avatarUrl !== void 0) {
          Ser.serString(v.profile.avatarUrl);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        tBi_TlPnL5.fn(v.role, Ser);
        tBi_SyisaY.fn(v.status, Ser);
        tBi_GUgUK4.fn(v.address, Ser);
        tBi_mguG4C.fn(v.paymentMethods, Ser);
        tBi_TXdDrb.fn(v.preferences, Ser);
        Ser.view.setFloat64(
          Ser.index,
          v.createdAt.getTime(),
          1,
          (Ser.index += 8),
        );
        Ser.view.setFloat64(
          Ser.index,
          v.updatedAt.getTime(),
          1,
          (Ser.index += 8),
        );
        tBi_v7nFN3.fn(v.tags, Ser);
        const bmI1 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.lastLoginAt !== void 0) {
          Ser.view.setFloat64(
            Ser.index,
            v.lastLoginAt.getTime(),
            1,
            (Ser.index += 8),
          );
          Ser.setBitMask(bmI1, 0 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "tBi",
    jitFnHash: "tBi_TlPnL5",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_TlPnL5(v,Ser){if (v === "admin") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "user") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "guest") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "moderator") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_TlPnL5(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_TlPnL5(v, Ser) {
        if (v === "admin") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v === "user") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v === "guest") {
          Ser.view.setUint8(Ser.index++, 2);
        } else if (v === "moderator") {
          Ser.view.setUint8(Ser.index++, 3);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "tBi",
    jitFnHash: "tBi_SyisaY",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_SyisaY(v,Ser){if (v === "active") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "suspended") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "pending_verification") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "deactivated") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_SyisaY(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_SyisaY(v, Ser) {
        if (v === "active") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v === "suspended") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v === "pending_verification") {
          Ser.view.setUint8(Ser.index++, 2);
        } else if (v === "deactivated") {
          Ser.view.setUint8(Ser.index++, 3);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_GUgUK4: {
    isNoop: false,
    typeName: "Address",
    fnID: "tBi",
    jitFnHash: "tBi_GUgUK4",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_GUgUK4(v,Ser){Ser.serString(v.street);Ser.serString(v.city);Ser.serString(v.state);Ser.serString(v.zipCode);Ser.serString(v.country);\n; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_GUgUK4(utl) {
      return function tBi_GUgUK4(v, Ser) {
        Ser.serString(v.street);
        Ser.serString(v.city);
        Ser.serString(v.state);
        Ser.serString(v.zipCode);
        Ser.serString(v.country);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "tBi",
    jitFnHash: "tBi_mguG4C",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_Njl7xz = utl.getJIT("tBi_Njl7xz"); return function tBi_mguG4C(v,Ser){
 Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;
 for (let i0 = 0; i0 < v.length; i0++) {tBi_Njl7xz.fn(v[i0],Ser)}
 ; return Ser}`,
    jitDependencies: ["tBi_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_mguG4C(utl) {
      const tBi_Njl7xz = utl.getJIT("tBi_Njl7xz");
      return function tBi_mguG4C(v, Ser) {
        Ser.view.setUint32(Ser.index, v.length, 1);
        Ser.index += 4;
        for (let i0 = 0; i0 < v.length; i0++) {
          tBi_Njl7xz.fn(v[i0], Ser);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "tBi",
    jitFnHash: "tBi_Njl7xz",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union";
const k_M2okYK = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_M2okYK = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_WwEqA4 = [];
const k_U42ywY = ["type", "email"];
const kA_U42ywY = []; return function tBi_Njl7xz(v,Ser){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_M2okYK))) {Ser.view.setUint8(Ser.index++, 0);Ser.serString(v.lastFourDigits);Ser.view.setFloat64(Ser.index,v.expiryMonth, 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index,v.expiryYear, 1, (Ser.index += 8));Ser.serString(v.brand);
;}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_WwEqA4))) {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.bankName);Ser.serString(v.accountLastFour);Ser.serString(v.routingNumber);
;}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_U42ywY))) {Ser.view.setUint8(Ser.index++, 2);Ser.serString(v.email);
;}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_tBi_Njl7xz(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      const k_M2okYK = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_WwEqA4 = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_U42ywY = ["type", "email"];
      return function tBi_Njl7xz(v, Ser) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_M2okYK)
        ) {
          Ser.view.setUint8(Ser.index++, 0);
          Ser.serString(v.lastFourDigits);
          Ser.view.setFloat64(Ser.index, v.expiryMonth, 1, (Ser.index += 8));
          Ser.view.setFloat64(Ser.index, v.expiryYear, 1, (Ser.index += 8));
          Ser.serString(v.brand);
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_WwEqA4)
        ) {
          Ser.view.setUint8(Ser.index++, 1);
          Ser.serString(v.bankName);
          Ser.serString(v.accountLastFour);
          Ser.serString(v.routingNumber);
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_U42ywY)
        ) {
          Ser.view.setUint8(Ser.index++, 2);
          Ser.serString(v.email);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "tBi",
    jitFnHash: "tBi_TXdDrb",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union";
const tBi_YyoQ6q = utl.getJIT("tBi_YyoQ6q"); return function tBi_TXdDrb(v,Ser){if (v.theme === "light") {Ser.view.setUint8(Ser.index++, 0);}else if (v.theme === "dark") {Ser.view.setUint8(Ser.index++, 1);}else if (v.theme === "system") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);};Ser.serString(v.language);Ser.serString(v.timezone);tBi_YyoQ6q.fn(v.notifications,Ser);
; return Ser}`,
    jitDependencies: ["tBi_YyoQ6q"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_TXdDrb(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      const tBi_YyoQ6q = utl.getJIT("tBi_YyoQ6q");
      return function tBi_TXdDrb(v, Ser) {
        if (v.theme === "light") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v.theme === "dark") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v.theme === "system") {
          Ser.view.setUint8(Ser.index++, 2);
        } else {
          throw new Error(uErr0);
        }
        Ser.serString(v.language);
        Ser.serString(v.timezone);
        tBi_YyoQ6q.fn(v.notifications, Ser);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "tBi",
    jitFnHash: "tBi_YyoQ6q",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_YyoQ6q(v,Ser){Ser.view.setUint8(Ser.index++, !!v.email);Ser.view.setUint8(Ser.index++, !!v.sms);Ser.view.setUint8(Ser.index++, !!v.push);if (v.frequency === "immediate") {Ser.view.setUint8(Ser.index++, 0);}else if (v.frequency === "daily") {Ser.view.setUint8(Ser.index++, 1);}else if (v.frequency === "weekly") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);}
; return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_YyoQ6q(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_YyoQ6q(v, Ser) {
        Ser.view.setUint8(Ser.index++, !!v.email);
        Ser.view.setUint8(Ser.index++, !!v.sms);
        Ser.view.setUint8(Ser.index++, !!v.push);
        if (v.frequency === "immediate") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v.frequency === "daily") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v.frequency === "weekly") {
          Ser.view.setUint8(Ser.index++, 2);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_R35XJV: {
    isNoop: false,
    typeName: "params",
    fnID: "fBi",
    jitFnHash: "fBi_R35XJV",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_xrrn1f = utl.getJIT("fBi_xrrn1f"); return function fBi_R35XJV(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_xrrn1f.fn(undefined,Des)} ; return ret}`,
    jitDependencies: ["fBi_xrrn1f"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_R35XJV(utl) {
      const fBi_xrrn1f = utl.getJIT("fBi_xrrn1f");
      return function fBi_R35XJV(ret, Des) {
        ret = [];
        const tbimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(tbimI0, 1) & (1 << 0)) {
          ret[0] = fBi_xrrn1f.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_xrrn1f: {
    isNoop: false,
    typeName: "User",
    fnID: "fBi",
    jitFnHash: "fBi_xrrn1f",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_TlPnL5 = utl.getJIT("fBi_TlPnL5");
const fBi_SyisaY = utl.getJIT("fBi_SyisaY");
const fBi_GUgUK4 = utl.getJIT("fBi_GUgUK4");
const fBi_mguG4C = utl.getJIT("fBi_mguG4C");
const fBi_TXdDrb = utl.getJIT("fBi_TXdDrb");
const fBi_v7nFN3 = utl.getJIT("fBi_v7nFN3"); return function fBi_xrrn1f(ret,Des){ret = {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),username:Des.desString(),email:Des.desString(),role:fBi_TlPnL5.fn(undefined,Des),status:fBi_SyisaY.fn(undefined,Des),address:fBi_GUgUK4.fn(undefined,Des),paymentMethods:fBi_mguG4C.fn(undefined,Des),preferences:fBi_TXdDrb.fn(undefined,Des),createdAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),updatedAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),tags:fBi_v7nFN3.fn(undefined,Des)}
ret.profile = {firstName:Des.desString(),lastName:Des.desString(),displayName:Des.desString(),dateOfBirth:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.profile.bio = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.profile.avatarUrl = Des.desString();};
const bimI1 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)));} return ret}`,
    jitDependencies: [
      "fBi_TlPnL5",
      "fBi_SyisaY",
      "fBi_GUgUK4",
      "fBi_mguG4C",
      "fBi_TXdDrb",
      "fBi_v7nFN3",
    ],
    pureFnDependencies: [],
    createJitFn: function get_fBi_xrrn1f(utl) {
      const fBi_TlPnL5 = utl.getJIT("fBi_TlPnL5");
      const fBi_SyisaY = utl.getJIT("fBi_SyisaY");
      const fBi_GUgUK4 = utl.getJIT("fBi_GUgUK4");
      const fBi_mguG4C = utl.getJIT("fBi_mguG4C");
      const fBi_TXdDrb = utl.getJIT("fBi_TXdDrb");
      const fBi_v7nFN3 = utl.getJIT("fBi_v7nFN3");
      return function fBi_xrrn1f(ret, Des) {
        ret = {
          id: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          username: Des.desString(),
          email: Des.desString(),
          role: fBi_TlPnL5.fn(void 0, Des),
          status: fBi_SyisaY.fn(void 0, Des),
          address: fBi_GUgUK4.fn(void 0, Des),
          paymentMethods: fBi_mguG4C.fn(void 0, Des),
          preferences: fBi_TXdDrb.fn(void 0, Des),
          createdAt: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
          updatedAt: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
          tags: fBi_v7nFN3.fn(void 0, Des),
        };
        ret.profile = {
          firstName: Des.desString(),
          lastName: Des.desString(),
          displayName: Des.desString(),
          dateOfBirth: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          ret.profile.bio = Des.desString();
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.profile.avatarUrl = Des.desString();
        }
        const bimI1 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {
          ret.lastLoginAt = new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          );
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_TlPnL5: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "fBi",
    jitFnHash: "fBi_TlPnL5",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_TlPnL5(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = "admin"}else if (dec0 === 1) {ret = "user"}else if (dec0 === 2) {ret = "guest"}else if (dec0 === 3) {ret = "moderator"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_TlPnL5(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_TlPnL5(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = "admin";
        } else if (dec0 === 1) {
          ret = "user";
        } else if (dec0 === 2) {
          ret = "guest";
        } else if (dec0 === 3) {
          ret = "moderator";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_SyisaY: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "fBi",
    jitFnHash: "fBi_SyisaY",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_SyisaY(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = "active"}else if (dec0 === 1) {ret = "suspended"}else if (dec0 === 2) {ret = "pending_verification"}else if (dec0 === 3) {ret = "deactivated"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_SyisaY(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_SyisaY(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = "active";
        } else if (dec0 === 1) {
          ret = "suspended";
        } else if (dec0 === 2) {
          ret = "pending_verification";
        } else if (dec0 === 3) {
          ret = "deactivated";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_GUgUK4: {
    isNoop: false,
    typeName: "Address",
    fnID: "fBi",
    jitFnHash: "fBi_GUgUK4",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_GUgUK4(ret,Des){return {street:Des.desString(),city:Des.desString(),state:Des.desString(),zipCode:Des.desString(),country:Des.desString()}}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_GUgUK4(utl) {
      return function fBi_GUgUK4(ret, Des) {
        return {
          street: Des.desString(),
          city: Des.desString(),
          state: Des.desString(),
          zipCode: Des.desString(),
          country: Des.desString(),
        };
      };
    },
    fn: void 0,
  },
  fBi_mguG4C: {
    isNoop: false,
    typeName: "array",
    fnID: "fBi",
    jitFnHash: "fBi_mguG4C",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_Njl7xz = utl.getJIT("fBi_Njl7xz"); return function fBi_mguG4C(ret,Des){
 const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);
 for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = fBi_Njl7xz.fn(undefined,Des);}
 ; return ret}`,
    jitDependencies: ["fBi_Njl7xz"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_mguG4C(utl) {
      const fBi_Njl7xz = utl.getJIT("fBi_Njl7xz");
      return function fBi_mguG4C(ret, Des) {
        const arrL0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = new Array(arrL0);
        for (let i0 = 0; i0 < arrL0; i0++) {
          ret[i0] = fBi_Njl7xz.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Njl7xz: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "fBi",
    jitFnHash: "fBi_Njl7xz",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_Njl7xz(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = {type:"credit_card",lastFourDigits:Des.desString(),expiryMonth:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),expiryYear:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),brand:Des.desString()}}else if (dec0 === 1) {ret = {type:"bank_account",bankName:Des.desString(),accountLastFour:Des.desString(),routingNumber:Des.desString()}}else if (dec0 === 2) {ret = {type:"paypal",email:Des.desString()}}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Njl7xz(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_Njl7xz(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = {
            type: "credit_card",
            lastFourDigits: Des.desString(),
            expiryMonth: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
            expiryYear: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
            brand: Des.desString(),
          };
        } else if (dec0 === 1) {
          ret = {
            type: "bank_account",
            bankName: Des.desString(),
            accountLastFour: Des.desString(),
            routingNumber: Des.desString(),
          };
        } else if (dec0 === 2) {
          ret = { type: "paypal", email: Des.desString() };
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_TXdDrb: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "fBi",
    jitFnHash: "fBi_TXdDrb",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index";
const fBi_YyoQ6q = utl.getJIT("fBi_YyoQ6q"); return function fBi_TXdDrb(ret,Des){ret = {language:Des.desString(),timezone:Des.desString(),notifications:fBi_YyoQ6q.fn(undefined,Des)}

 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret.theme = "light"}else if (dec0 === 1) {ret.theme = "dark"}else if (dec0 === 2) {ret.theme = "system"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: ["fBi_YyoQ6q"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_TXdDrb(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      const fBi_YyoQ6q = utl.getJIT("fBi_YyoQ6q");
      return function fBi_TXdDrb(ret, Des) {
        ret = {
          language: Des.desString(),
          timezone: Des.desString(),
          notifications: fBi_YyoQ6q.fn(void 0, Des),
        };
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret.theme = "light";
        } else if (dec0 === 1) {
          ret.theme = "dark";
        } else if (dec0 === 2) {
          ret.theme = "system";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_YyoQ6q: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "fBi",
    jitFnHash: "fBi_YyoQ6q",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_YyoQ6q(ret,Des){ret = {email:Des.view.getUint8(Des.index++) === 1,sms:Des.view.getUint8(Des.index++) === 1,push:Des.view.getUint8(Des.index++) === 1}

 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret.frequency = "immediate"}else if (dec0 === 1) {ret.frequency = "daily"}else if (dec0 === 2) {ret.frequency = "weekly"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_YyoQ6q(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_YyoQ6q(ret, Des) {
        ret = {
          email: Des.view.getUint8(Des.index++) === 1,
          sms: Des.view.getUint8(Des.index++) === 1,
          push: Des.view.getUint8(Des.index++) === 1,
        };
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret.frequency = "immediate";
        } else if (dec0 === 1) {
          ret.frequency = "daily";
        } else if (dec0 === 2) {
          ret.frequency = "weekly";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "is",
    jitFnHash: "is_OAqgWS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_k2MQ4a = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const is_cguSMW = utl.getJIT("is_cguSMW");
const is_H7NdXp = utl.getJIT("is_H7NdXp");
const is_LJrfVd = utl.getJIT("is_LJrfVd");
const is_rhxPRX = utl.getJIT("is_rhxPRX");
const is_Ywo0Ug = utl.getJIT("is_Ywo0Ug");
const is_IoMmkS = utl.getJIT("is_IoMmkS");
const k_OAqgWS = ["id", "username", "email", "profile", "role", "status", "address", "paymentMethods", "preferences", "createdAt", "updatedAt", "lastLoginAt", "tags"];
const kA_OAqgWS = []; return function is_OAqgWS(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime())) && !NVlxlJHR(v.profile, k_k2MQ4a)) && is_cguSMW.fn(v.role) && is_H7NdXp.fn(v.status) && is_LJrfVd.fn(v.address) && is_rhxPRX.fn(v.paymentMethods) && is_Ywo0Ug.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_IoMmkS.fn(v.tags) && !NVlxlJHR(v, k_OAqgWS))}`,
    jitDependencies: [
      "is_cguSMW",
      "is_H7NdXp",
      "is_LJrfVd",
      "is_rhxPRX",
      "is_Ywo0Ug",
      "is_IoMmkS",
    ],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_OAqgWS(utl) {
      const k_k2MQ4a = [
        "firstName",
        "lastName",
        "displayName",
        "bio",
        "avatarUrl",
        "dateOfBirth",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const is_cguSMW = utl.getJIT("is_cguSMW");
      const is_H7NdXp = utl.getJIT("is_H7NdXp");
      const is_LJrfVd = utl.getJIT("is_LJrfVd");
      const is_rhxPRX = utl.getJIT("is_rhxPRX");
      const is_Ywo0Ug = utl.getJIT("is_Ywo0Ug");
      const is_IoMmkS = utl.getJIT("is_IoMmkS");
      const k_OAqgWS = [
        "id",
        "username",
        "email",
        "profile",
        "role",
        "status",
        "address",
        "paymentMethods",
        "preferences",
        "createdAt",
        "updatedAt",
        "lastLoginAt",
        "tags",
      ];
      return function is_OAqgWS(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          Number.isFinite(v.id) &&
          typeof v.username === "string" &&
          typeof v.email === "string" &&
          typeof v.profile === "object" &&
          v.profile !== null &&
          typeof v.profile.firstName === "string" &&
          typeof v.profile.lastName === "string" &&
          typeof v.profile.displayName === "string" &&
          (v.profile.bio === void 0 || typeof v.profile.bio === "string") &&
          (v.profile.avatarUrl === void 0 ||
            typeof v.profile.avatarUrl === "string") &&
          v.profile.dateOfBirth instanceof Date &&
          !isNaN(v.profile.dateOfBirth.getTime()) &&
          !NVlxlJHR(v.profile, k_k2MQ4a) &&
          is_cguSMW.fn(v.role) &&
          is_H7NdXp.fn(v.status) &&
          is_LJrfVd.fn(v.address) &&
          is_rhxPRX.fn(v.paymentMethods) &&
          is_Ywo0Ug.fn(v.preferences) &&
          v.createdAt instanceof Date &&
          !isNaN(v.createdAt.getTime()) &&
          v.updatedAt instanceof Date &&
          !isNaN(v.updatedAt.getTime()) &&
          (v.lastLoginAt === void 0 ||
            (v.lastLoginAt instanceof Date &&
              !isNaN(v.lastLoginAt.getTime()))) &&
          is_IoMmkS.fn(v.tags) &&
          !NVlxlJHR(v, k_OAqgWS)
        );
      };
    },
    fn: void 0,
  },
  is_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "is",
    jitFnHash: "is_cguSMW",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_cguSMW(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_cguSMW(utl) {
      return function is_cguSMW(v) {
        return (
          v === "admin" || v === "user" || v === "guest" || v === "moderator"
        );
      };
    },
    fn: void 0,
  },
  is_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "is",
    jitFnHash: "is_H7NdXp",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function is_H7NdXp(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_is_H7NdXp(utl) {
      return function is_H7NdXp(v) {
        return (
          v === "active" ||
          v === "suspended" ||
          v === "pending_verification" ||
          v === "deactivated"
        );
      };
    },
    fn: void 0,
  },
  is_LJrfVd: {
    isNoop: false,
    typeName: "Address",
    fnID: "is",
    jitFnHash: "is_LJrfVd",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
const kA_LJrfVd = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_LJrfVd(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string' && !NVlxlJHR(v, k_LJrfVd))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_LJrfVd(utl) {
      const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_LJrfVd(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.street === "string" &&
          typeof v.city === "string" &&
          typeof v.state === "string" &&
          typeof v.zipCode === "string" &&
          typeof v.country === "string" &&
          !NVlxlJHR(v, k_LJrfVd)
        );
      };
    },
    fn: void 0,
  },
  is_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "is",
    jitFnHash: "is_rhxPRX",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_a0MWc6 = utl.getJIT("is_a0MWc6"); return function is_rhxPRX(v){
 if (!Array.isArray(v)) return false;
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = is_a0MWc6.fn(v[i0]);
 if (!(res0)) return false;
 }
 return true;
 }`,
    jitDependencies: ["is_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_is_rhxPRX(utl) {
      const is_a0MWc6 = utl.getJIT("is_a0MWc6");
      return function is_rhxPRX(v) {
        if (!Array.isArray(v)) return false;
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = is_a0MWc6.fn(v[i0]);
          if (!res0) return false;
        }
        return true;
      };
    },
    fn: void 0,
  },
  is_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "is",
    jitFnHash: "is_a0MWc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function is_a0MWc6(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5)) || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh)) || (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd)))))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_a0MWc6(utl) {
      const k_VP1pj5 = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_dbLFnd = ["type", "email"];
      return function is_a0MWc6(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          ((v.type === "credit_card" &&
            typeof v.lastFourDigits === "string" &&
            Number.isFinite(v.expiryMonth) &&
            Number.isFinite(v.expiryYear) &&
            typeof v.brand === "string" &&
            !NVlxlJHR(v, k_VP1pj5)) ||
            (v.type === "bank_account" &&
              typeof v.bankName === "string" &&
              typeof v.accountLastFour === "string" &&
              typeof v.routingNumber === "string" &&
              !NVlxlJHR(v, k_HPT1Zh)) ||
            (v.type === "paypal" &&
              typeof v.email === "string" &&
              !NVlxlJHR(v, k_dbLFnd)))
        );
      };
    },
    fn: void 0,
  },
  is_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "is",
    jitFnHash: "is_Ywo0Ug",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_lXDVrh = utl.getJIT("is_lXDVrh");
const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
const kA_Ywo0Ug = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_Ywo0Ug(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_lXDVrh.fn(v.notifications) && !NVlxlJHR(v, k_Ywo0Ug))}`,
    jitDependencies: ["is_lXDVrh"],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_Ywo0Ug(utl) {
      const is_lXDVrh = utl.getJIT("is_lXDVrh");
      const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_Ywo0Ug(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          (v.theme === "light" || v.theme === "dark" || v.theme === "system") &&
          typeof v.language === "string" &&
          typeof v.timezone === "string" &&
          is_lXDVrh.fn(v.notifications) &&
          !NVlxlJHR(v, k_Ywo0Ug)
        );
      };
    },
    fn: void 0,
  },
  is_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "is",
    jitFnHash: "is_lXDVrh",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_lXDVrh = ["email", "sms", "push", "frequency"];
const kA_lXDVrh = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_lXDVrh(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly") && !NVlxlJHR(v, k_lXDVrh))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_lXDVrh(utl) {
      const k_lXDVrh = ["email", "sms", "push", "frequency"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_lXDVrh(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          typeof v.email === "boolean" &&
          typeof v.sms === "boolean" &&
          typeof v.push === "boolean" &&
          (v.frequency === "immediate" ||
            v.frequency === "daily" ||
            v.frequency === "weekly") &&
          !NVlxlJHR(v, k_lXDVrh)
        );
      };
    },
    fn: void 0,
  },
  te_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "te",
    jitFnHash: "te_OAqgWS",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_k2MQ4a = ["firstName", "lastName", "displayName", "bio", "avatarUrl", "dateOfBirth"];
const kA_k2MQ4a = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
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
 ; return er}`,
    jitDependencies: [
      "te_cguSMW",
      "te_H7NdXp",
      "te_LJrfVd",
      "te_rhxPRX",
      "te_Ywo0Ug",
      "te_IoMmkS",
    ],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_OAqgWS(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_k2MQ4a = [
        "firstName",
        "lastName",
        "displayName",
        "bio",
        "avatarUrl",
        "dateOfBirth",
      ];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const te_cguSMW = utl.getJIT("te_cguSMW");
      const te_H7NdXp = utl.getJIT("te_H7NdXp");
      const te_LJrfVd = utl.getJIT("te_LJrfVd");
      const te_rhxPRX = utl.getJIT("te_rhxPRX");
      const te_Ywo0Ug = utl.getJIT("te_Ywo0Ug");
      const te_IoMmkS = utl.getJIT("te_IoMmkS");
      const k_OAqgWS = [
        "id",
        "username",
        "email",
        "profile",
        "role",
        "status",
        "address",
        "paymentMethods",
        "preferences",
        "createdAt",
        "updatedAt",
        "lastLoginAt",
        "tags",
      ];
      return function te_OAqgWS(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
          if (typeof v.username !== "string")
            Iqa2M8Ms(pth, er, "string", ["username"]);
          if (typeof v.email !== "string")
            Iqa2M8Ms(pth, er, "string", ["email"]);
          if (!(typeof v.profile === "object" && v.profile !== null)) {
            Iqa2M8Ms(pth, er, "object", ["profile"]);
          } else {
            if (typeof v.profile.firstName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "firstName"]);
            if (typeof v.profile.lastName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "lastName"]);
            if (typeof v.profile.displayName !== "string")
              Iqa2M8Ms(pth, er, "string", ["profile", "displayName"]);
            if (v.profile.bio !== void 0) {
              if (typeof v.profile.bio !== "string")
                Iqa2M8Ms(pth, er, "string", ["profile", "bio"]);
            }
            if (v.profile.avatarUrl !== void 0) {
              if (typeof v.profile.avatarUrl !== "string")
                Iqa2M8Ms(pth, er, "string", ["profile", "avatarUrl"]);
            }
            if (
              !(
                v.profile.dateOfBirth instanceof Date &&
                !isNaN(v.profile.dateOfBirth.getTime())
              )
            )
              Iqa2M8Ms(pth, er, "date", ["profile", "dateOfBirth"]);
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
          if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())))
            Iqa2M8Ms(pth, er, "date", ["createdAt"]);
          if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())))
            Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
          if (v.lastLoginAt !== void 0) {
            if (
              !(
                v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())
              )
            )
              Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
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
    },
    fn: void 0,
  },
  te_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "te",
    jitFnHash: "te_cguSMW",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_cguSMW = utl.getJIT("is_cguSMW");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_cguSMW(v,pth=[],er=[]){if (!is_cguSMW.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_cguSMW"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_cguSMW(utl) {
      const is_cguSMW = utl.getJIT("is_cguSMW");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_cguSMW(v, pth = [], er = []) {
        if (!is_cguSMW.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "te",
    jitFnHash: "te_H7NdXp",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_H7NdXp = utl.getJIT("is_H7NdXp");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_H7NdXp(v,pth=[],er=[]){if (!is_H7NdXp.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_H7NdXp"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_H7NdXp(utl) {
      const is_H7NdXp = utl.getJIT("is_H7NdXp");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_H7NdXp(v, pth = [], er = []) {
        if (!is_H7NdXp.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_LJrfVd: {
    isNoop: false,
    typeName: "Address",
    fnID: "te",
    jitFnHash: "te_LJrfVd",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
const kA_LJrfVd = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_LJrfVd(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 
 const unk0 = lTBP5VNV(v, k_LJrfVd);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_LJrfVd(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_LJrfVd = ["street", "city", "state", "zipCode", "country"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_LJrfVd(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (typeof v.street !== "string")
            Iqa2M8Ms(pth, er, "string", ["street"]);
          if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
          if (typeof v.state !== "string")
            Iqa2M8Ms(pth, er, "string", ["state"]);
          if (typeof v.zipCode !== "string")
            Iqa2M8Ms(pth, er, "string", ["zipCode"]);
          if (typeof v.country !== "string")
            Iqa2M8Ms(pth, er, "string", ["country"]);
          const unk0 = lTBP5VNV(v, k_LJrfVd);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  te_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "te",
    jitFnHash: "te_rhxPRX",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_a0MWc6 = utl.getJIT("te_a0MWc6");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_rhxPRX(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_a0MWc6.fn(v[i0],pth,er); pth.splice(-1);}} return er}`,
    jitDependencies: ["te_a0MWc6"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_rhxPRX(utl) {
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
    },
    fn: void 0,
  },
  te_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "te",
    jitFnHash: "te_a0MWc6",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const is_a0MWc6 = utl.getJIT("is_a0MWc6");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_a0MWc6(v,pth=[],er=[]){if (!is_a0MWc6.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}`,
    jitDependencies: ["is_a0MWc6"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_a0MWc6(utl) {
      const is_a0MWc6 = utl.getJIT("is_a0MWc6");
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      return function te_a0MWc6(v, pth = [], er = []) {
        if (!is_a0MWc6.fn(v)) Iqa2M8Ms(pth, er, "union");
        return er;
      };
    },
    fn: void 0,
  },
  te_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "te",
    jitFnHash: "te_Ywo0Ug",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_lXDVrh = utl.getJIT("te_lXDVrh");
const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
const kA_Ywo0Ug = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_Ywo0Ug(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_lXDVrh.fn(v.notifications,pth,er); pth.splice(-1);
 
 const unk0 = lTBP5VNV(v, k_Ywo0Ug);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: ["te_lXDVrh"],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_Ywo0Ug(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const te_lXDVrh = utl.getJIT("te_lXDVrh");
      const k_Ywo0Ug = ["theme", "language", "timezone", "notifications"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_Ywo0Ug(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (
            !(v.theme === "light" || v.theme === "dark" || v.theme === "system")
          )
            Iqa2M8Ms(pth, er, "union", ["theme"]);
          if (typeof v.language !== "string")
            Iqa2M8Ms(pth, er, "string", ["language"]);
          if (typeof v.timezone !== "string")
            Iqa2M8Ms(pth, er, "string", ["timezone"]);
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
    },
    fn: void 0,
  },
  te_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "te",
    jitFnHash: "te_lXDVrh",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_lXDVrh = ["email", "sms", "push", "frequency"];
const kA_lXDVrh = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_lXDVrh(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 
 const unk0 = lTBP5VNV(v, k_lXDVrh);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_lXDVrh(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_lXDVrh = ["email", "sms", "push", "frequency"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_lXDVrh(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (typeof v.email !== "boolean")
            Iqa2M8Ms(pth, er, "boolean", ["email"]);
          if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
          if (typeof v.push !== "boolean")
            Iqa2M8Ms(pth, er, "boolean", ["push"]);
          if (
            !(
              v.frequency === "immediate" ||
              v.frequency === "daily" ||
              v.frequency === "weekly"
            )
          )
            Iqa2M8Ms(pth, er, "union", ["frequency"]);
          const unk0 = lTBP5VNV(v, k_lXDVrh);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  te_IoMmkS: {
    isNoop: false,
    typeName: "array",
    fnID: "te",
    jitFnHash: "te_IoMmkS",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_IoMmkS(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`,
    jitDependencies: [],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_IoMmkS(utl) {
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
    },
    fn: void 0,
  },
  tj_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "tj",
    jitFnHash: "tj_OAqgWS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_cguSMW = utl.getJIT("tj_cguSMW");
const tj_H7NdXp = utl.getJIT("tj_H7NdXp");
const tj_rhxPRX = utl.getJIT("tj_rhxPRX");
const tj_Ywo0Ug = utl.getJIT("tj_Ywo0Ug"); return function tj_OAqgWS(v){v.role = tj_cguSMW.fn(v.role);v.status = tj_H7NdXp.fn(v.status);v.paymentMethods = tj_rhxPRX.fn(v.paymentMethods);v.preferences = tj_Ywo0Ug.fn(v.preferences); return v}`,
    jitDependencies: ["tj_cguSMW", "tj_H7NdXp", "tj_rhxPRX", "tj_Ywo0Ug"],
    pureFnDependencies: [],
    createJitFn: function get_tj_OAqgWS(utl) {
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
    },
    fn: void 0,
  },
  tj_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "tj",
    jitFnHash: "tj_cguSMW",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_cguSMW(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_cguSMW(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_cguSMW(v) {
        if (v === "admin");
        else if (v === "user");
        else if (v === "guest");
        else if (v === "moderator");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "tj",
    jitFnHash: "tj_H7NdXp",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_H7NdXp(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_H7NdXp(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_H7NdXp(v) {
        if (v === "active");
        else if (v === "suspended");
        else if (v === "pending_verification");
        else if (v === "deactivated");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_LJrfVd: {
    isNoop: true,
    typeName: "Address",
    fnID: "tj",
    jitFnHash: "tj_LJrfVd",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_LJrfVd(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_LJrfVd(utl) {
      return function tj_LJrfVd(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "tj",
    jitFnHash: "tj_rhxPRX",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const tj_a0MWc6 = utl.getJIT("tj_a0MWc6"); return function tj_rhxPRX(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_a0MWc6.fn(v[i0]);} return v}`,
    jitDependencies: ["tj_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_tj_rhxPRX(utl) {
      const tj_a0MWc6 = utl.getJIT("tj_a0MWc6");
      return function tj_rhxPRX(v) {
        for (let i0 = 0; i0 < v.length; i0++) {
          v[i0] = tj_a0MWc6.fn(v[i0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "tj",
    jitFnHash: "tj_a0MWc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function tj_a0MWc6(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh))) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd))) { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_tj_a0MWc6(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      const k_VP1pj5 = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_dbLFnd = ["type", "email"];
      return function tj_a0MWc6(v) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_VP1pj5)
        );
        else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_HPT1Zh)
        );
        else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_dbLFnd)
        );
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  tj_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "tj",
    jitFnHash: "tj_Ywo0Ug",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union";
const tj_lXDVrh = utl.getJIT("tj_lXDVrh"); return function tj_Ywo0Ug(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_lXDVrh.fn(v.notifications); return v}`,
    jitDependencies: ["tj_lXDVrh"],
    pureFnDependencies: [],
    createJitFn: function get_tj_Ywo0Ug(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      const tj_lXDVrh = utl.getJIT("tj_lXDVrh");
      return function tj_Ywo0Ug(v) {
        if (v.theme === "light");
        else if (v.theme === "dark");
        else if (v.theme === "system");
        else {
          throw new Error(uErr0);
        }
        v.notifications = tj_lXDVrh.fn(v.notifications);
        return v;
      };
    },
    fn: void 0,
  },
  tj_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "tj",
    jitFnHash: "tj_lXDVrh",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_lXDVrh(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_lXDVrh(utl) {
      const uErr0 =
        "Can not json encode union: item does not belong to the union";
      return function tj_lXDVrh(v) {
        if (v.frequency === "immediate");
        else if (v.frequency === "daily");
        else if (v.frequency === "weekly");
        else {
          throw new Error(uErr0);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "fj",
    jitFnHash: "fj_OAqgWS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_cguSMW = utl.getJIT("fj_cguSMW");
const fj_H7NdXp = utl.getJIT("fj_H7NdXp");
const fj_rhxPRX = utl.getJIT("fj_rhxPRX");
const fj_Ywo0Ug = utl.getJIT("fj_Ywo0Ug"); return function fj_OAqgWS(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_cguSMW.fn(v.role);v.status = fj_H7NdXp.fn(v.status);v.paymentMethods = fj_rhxPRX.fn(v.paymentMethods);v.preferences = fj_Ywo0Ug.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}`,
    jitDependencies: ["fj_cguSMW", "fj_H7NdXp", "fj_rhxPRX", "fj_Ywo0Ug"],
    pureFnDependencies: [],
    createJitFn: function get_fj_OAqgWS(utl) {
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
    },
    fn: void 0,
  },
  fj_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "fj",
    jitFnHash: "fj_cguSMW",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_cguSMW(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_cguSMW(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_cguSMW(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else if (dec0 === 3);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "fj",
    jitFnHash: "fj_H7NdXp",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_H7NdXp(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_H7NdXp(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_H7NdXp(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else if (dec0 === 3);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_LJrfVd: {
    isNoop: true,
    typeName: "Address",
    fnID: "fj",
    jitFnHash: "fj_LJrfVd",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_LJrfVd(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_LJrfVd(utl) {
      return function fj_LJrfVd(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "fj",
    jitFnHash: "fj_rhxPRX",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_a0MWc6 = utl.getJIT("fj_a0MWc6"); return function fj_rhxPRX(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_a0MWc6.fn(v[i0]);} return v}`,
    jitDependencies: ["fj_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_fj_rhxPRX(utl) {
      const fj_a0MWc6 = utl.getJIT("fj_a0MWc6");
      return function fj_rhxPRX(v) {
        for (let i0 = 0; i0 < v.length; i0++) {
          v[i0] = fj_a0MWc6.fn(v[i0]);
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "fj",
    jitFnHash: "fj_a0MWc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_a0MWc6(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_a0MWc6(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_a0MWc6(v) {
        if (
          (v == null ? void 0 : v.length) === 2 &&
          Array.isArray(v) &&
          typeof v[0] === "number"
        ) {
          const dec0 = v[0];
          v = v[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  fj_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "fj",
    jitFnHash: "fj_Ywo0Ug",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index";
const fj_lXDVrh = utl.getJIT("fj_lXDVrh"); return function fj_Ywo0Ug(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_lXDVrh.fn(v.notifications); return v}`,
    jitDependencies: ["fj_lXDVrh"],
    pureFnDependencies: [],
    createJitFn: function get_fj_Ywo0Ug(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      const fj_lXDVrh = utl.getJIT("fj_lXDVrh");
      return function fj_Ywo0Ug(v) {
        var _a;
        if (
          ((_a = v.theme) == null ? void 0 : _a.length) === 2 &&
          Array.isArray(v.theme) &&
          typeof v.theme[0] === "number"
        ) {
          const dec0 = v.theme[0];
          v.theme = v.theme[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        v.notifications = fj_lXDVrh.fn(v.notifications);
        return v;
      };
    },
    fn: void 0,
  },
  fj_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "fj",
    jitFnHash: "fj_lXDVrh",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not json decode union: invalid union index"; return function fj_lXDVrh(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_lXDVrh(utl) {
      const uErr0 = "Can not json decode union: invalid union index";
      return function fj_lXDVrh(v) {
        var _a;
        if (
          ((_a = v.frequency) == null ? void 0 : _a.length) === 2 &&
          Array.isArray(v.frequency) &&
          typeof v.frequency[0] === "number"
        ) {
          const dec0 = v.frequency[0];
          v.frequency = v.frequency[1];
          if (dec0 === 0);
          else if (dec0 === 1);
          else if (dec0 === 2);
          else {
            throw new Error(uErr0);
          }
        }
        return v;
      };
    },
    fn: void 0,
  },
  sj_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "sj",
    jitFnHash: "sj_OAqgWS",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_cguSMW = utl.getJIT("sj_cguSMW");
const sj_H7NdXp = utl.getJIT("sj_H7NdXp");
const sj_LJrfVd = utl.getJIT("sj_LJrfVd");
const sj_rhxPRX = utl.getJIT("sj_rhxPRX");
const sj_Ywo0Ug = utl.getJIT("sj_Ywo0Ug");
const sj_IoMmkS = utl.getJIT("sj_IoMmkS"); return function sj_OAqgWS(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_cguSMW.fn(v.role)+","+'"status":'+sj_H7NdXp.fn(v.status)+","+'"address":'+sj_LJrfVd.fn(v.address)+","+'"paymentMethods":'+sj_rhxPRX.fn(v.paymentMethods)+","+'"preferences":'+sj_Ywo0Ug.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_IoMmkS.fn(v.tags)+'}'}`,
    jitDependencies: [
      "sj_cguSMW",
      "sj_H7NdXp",
      "sj_LJrfVd",
      "sj_rhxPRX",
      "sj_Ywo0Ug",
      "sj_IoMmkS",
    ],
    pureFnDependencies: [],
    createJitFn: function get_sj_OAqgWS(utl) {
      const sj_cguSMW = utl.getJIT("sj_cguSMW");
      const sj_H7NdXp = utl.getJIT("sj_H7NdXp");
      const sj_LJrfVd = utl.getJIT("sj_LJrfVd");
      const sj_rhxPRX = utl.getJIT("sj_rhxPRX");
      const sj_Ywo0Ug = utl.getJIT("sj_Ywo0Ug");
      const sj_IoMmkS = utl.getJIT("sj_IoMmkS");
      return function sj_OAqgWS(v) {
        return (
          "{" +
          (v.lastLoginAt === void 0
            ? ""
            : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') +
          '"id":' +
          v.id +
          ',"username":' +
          JSON.stringify(v.username) +
          ',"email":' +
          JSON.stringify(v.email) +
          ',"profile":{' +
          (v.profile.bio === void 0
            ? ""
            : '"bio":' + JSON.stringify(v.profile.bio) + ",") +
          (v.profile.avatarUrl === void 0
            ? ""
            : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") +
          '"firstName":' +
          JSON.stringify(v.profile.firstName) +
          ',"lastName":' +
          JSON.stringify(v.profile.lastName) +
          ',"displayName":' +
          JSON.stringify(v.profile.displayName) +
          ',"dateOfBirth":"' +
          v.profile.dateOfBirth.toJSON() +
          '"},"role":' +
          sj_cguSMW.fn(v.role) +
          ',"status":' +
          sj_H7NdXp.fn(v.status) +
          ',"address":' +
          sj_LJrfVd.fn(v.address) +
          ',"paymentMethods":' +
          sj_rhxPRX.fn(v.paymentMethods) +
          ',"preferences":' +
          sj_Ywo0Ug.fn(v.preferences) +
          ',"createdAt":"' +
          v.createdAt.toJSON() +
          '","updatedAt":"' +
          v.updatedAt.toJSON() +
          '","tags":' +
          sj_IoMmkS.fn(v.tags) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "sj",
    jitFnHash: "sj_cguSMW",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_cguSMW(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_cguSMW(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
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
    },
    fn: void 0,
  },
  sj_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "sj",
    jitFnHash: "sj_H7NdXp",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_H7NdXp(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_H7NdXp(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
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
    },
    fn: void 0,
  },
  sj_LJrfVd: {
    isNoop: false,
    typeName: "Address",
    fnID: "sj",
    jitFnHash: "sj_LJrfVd",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function sj_LJrfVd(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_LJrfVd(utl) {
      return function sj_LJrfVd(v) {
        return (
          '{"street":' +
          JSON.stringify(v.street) +
          ',"city":' +
          JSON.stringify(v.city) +
          ',"state":' +
          JSON.stringify(v.state) +
          ',"zipCode":' +
          JSON.stringify(v.zipCode) +
          ',"country":' +
          JSON.stringify(v.country) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "sj",
    jitFnHash: "sj_rhxPRX",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_a0MWc6 = utl.getJIT("sj_a0MWc6"); return function sj_rhxPRX(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_a0MWc6.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`,
    jitDependencies: ["sj_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_sj_rhxPRX(utl) {
      const sj_a0MWc6 = utl.getJIT("sj_a0MWc6");
      return function sj_rhxPRX(v) {
        const ls0 = [];
        for (let i0 = 0; i0 < v.length; i0++) {
          const res0 = sj_a0MWc6.fn(v[i0]);
          ls0.push(res0);
        }
        return "[" + ls0.join(",") + "]";
      };
    },
    fn: void 0,
  },
  sj_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "sj",
    jitFnHash: "sj_a0MWc6",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function sj_a0MWc6(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd))) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_sj_a0MWc6(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const k_VP1pj5 = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_dbLFnd = ["type", "email"];
      return function sj_a0MWc6(v) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_VP1pj5)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"lastFourDigits":' +
            JSON.stringify(v.lastFourDigits) +
            ',"expiryMonth":' +
            v.expiryMonth +
            ',"expiryYear":' +
            v.expiryYear +
            ',"brand":' +
            JSON.stringify(v.brand) +
            "}"
          );
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_HPT1Zh)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"bankName":' +
            JSON.stringify(v.bankName) +
            ',"accountLastFour":' +
            JSON.stringify(v.accountLastFour) +
            ',"routingNumber":' +
            JSON.stringify(v.routingNumber) +
            "}"
          );
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_dbLFnd)
        ) {
          return (
            '{"type":' +
            JSON.stringify(v.type) +
            ',"email":' +
            JSON.stringify(v.email) +
            "}"
          );
        } else {
          throw new Error(uErr0);
        }
      };
    },
    fn: void 0,
  },
  sj_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "sj",
    jitFnHash: "sj_Ywo0Ug",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_lXDVrh = utl.getJIT("sj_lXDVrh"); return function sj_Ywo0Ug(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_lXDVrh.fn(v.notifications)+'}'}`,
    jitDependencies: ["sj_lXDVrh"],
    pureFnDependencies: [],
    createJitFn: function get_sj_Ywo0Ug(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      const sj_lXDVrh = utl.getJIT("sj_lXDVrh");
      return function sj_Ywo0Ug(v) {
        return (
          '{"theme":' +
          (function () {
            if (v.theme === "light") {
              return JSON.stringify(v.theme);
            } else if (v.theme === "dark") {
              return JSON.stringify(v.theme);
            } else if (v.theme === "system") {
              return JSON.stringify(v.theme);
            } else {
              throw new Error(uErr0);
            }
          })() +
          ',"language":' +
          JSON.stringify(v.language) +
          ',"timezone":' +
          JSON.stringify(v.timezone) +
          ',"notifications":' +
          sj_lXDVrh.fn(v.notifications) +
          "}"
        );
      };
    },
    fn: void 0,
  },
  sj_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "sj",
    jitFnHash: "sj_lXDVrh",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_lXDVrh(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_lXDVrh(utl) {
      const uErr0 =
        "Can not StringifyJson union: item does not belong to the union";
      return function sj_lXDVrh(v) {
        return (
          '{"email":' +
          (v.email ? "true" : "false") +
          ',"sms":' +
          (v.sms ? "true" : "false") +
          ',"push":' +
          (v.push ? "true" : "false") +
          ',"frequency":' +
          (function () {
            if (v.frequency === "immediate") {
              return JSON.stringify(v.frequency);
            } else if (v.frequency === "daily") {
              return JSON.stringify(v.frequency);
            } else if (v.frequency === "weekly") {
              return JSON.stringify(v.frequency);
            } else {
              throw new Error(uErr0);
            }
          })() +
          "}"
        );
      };
    },
    fn: void 0,
  },
  tBi_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "tBi",
    jitFnHash: "tBi_OAqgWS",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_cguSMW = utl.getJIT("tBi_cguSMW");
const tBi_H7NdXp = utl.getJIT("tBi_H7NdXp");
const tBi_LJrfVd = utl.getJIT("tBi_LJrfVd");
const tBi_rhxPRX = utl.getJIT("tBi_rhxPRX");
const tBi_Ywo0Ug = utl.getJIT("tBi_Ywo0Ug");
const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS"); return function tBi_OAqgWS(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.username);Ser.serString(v.email);Ser.serString(v.profile.firstName);Ser.serString(v.profile.lastName);Ser.serString(v.profile.displayName);Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, (Ser.index += 8));
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.profile.bio !== undefined) {Ser.serString(v.profile.bio);Ser.setBitMask(bmI0, 0 & 7)}if (v.profile.avatarUrl !== undefined) {Ser.serString(v.profile.avatarUrl);Ser.setBitMask(bmI0, 1 & 7)};tBi_cguSMW.fn(v.role,Ser);tBi_H7NdXp.fn(v.status,Ser);tBi_LJrfVd.fn(v.address,Ser);tBi_rhxPRX.fn(v.paymentMethods,Ser);tBi_Ywo0Ug.fn(v.preferences,Ser);Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, (Ser.index += 8));tBi_IoMmkS.fn(v.tags,Ser);
const bmI1 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.lastLoginAt !== undefined) {Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, (Ser.index += 8));Ser.setBitMask(bmI1, 0 & 7)} return Ser}`,
    jitDependencies: [
      "tBi_cguSMW",
      "tBi_H7NdXp",
      "tBi_LJrfVd",
      "tBi_rhxPRX",
      "tBi_Ywo0Ug",
      "tBi_IoMmkS",
    ],
    pureFnDependencies: [],
    createJitFn: function get_tBi_OAqgWS(utl) {
      const tBi_cguSMW = utl.getJIT("tBi_cguSMW");
      const tBi_H7NdXp = utl.getJIT("tBi_H7NdXp");
      const tBi_LJrfVd = utl.getJIT("tBi_LJrfVd");
      const tBi_rhxPRX = utl.getJIT("tBi_rhxPRX");
      const tBi_Ywo0Ug = utl.getJIT("tBi_Ywo0Ug");
      const tBi_IoMmkS = utl.getJIT("tBi_IoMmkS");
      return function tBi_OAqgWS(v, Ser) {
        Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
        Ser.serString(v.username);
        Ser.serString(v.email);
        Ser.serString(v.profile.firstName);
        Ser.serString(v.profile.lastName);
        Ser.serString(v.profile.displayName);
        Ser.view.setFloat64(
          Ser.index,
          v.profile.dateOfBirth.getTime(),
          1,
          (Ser.index += 8),
        );
        const bmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.profile.bio !== void 0) {
          Ser.serString(v.profile.bio);
          Ser.setBitMask(bmI0, 0 & 7);
        }
        if (v.profile.avatarUrl !== void 0) {
          Ser.serString(v.profile.avatarUrl);
          Ser.setBitMask(bmI0, 1 & 7);
        }
        tBi_cguSMW.fn(v.role, Ser);
        tBi_H7NdXp.fn(v.status, Ser);
        tBi_LJrfVd.fn(v.address, Ser);
        tBi_rhxPRX.fn(v.paymentMethods, Ser);
        tBi_Ywo0Ug.fn(v.preferences, Ser);
        Ser.view.setFloat64(
          Ser.index,
          v.createdAt.getTime(),
          1,
          (Ser.index += 8),
        );
        Ser.view.setFloat64(
          Ser.index,
          v.updatedAt.getTime(),
          1,
          (Ser.index += 8),
        );
        tBi_IoMmkS.fn(v.tags, Ser);
        const bmI1 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v.lastLoginAt !== void 0) {
          Ser.view.setFloat64(
            Ser.index,
            v.lastLoginAt.getTime(),
            1,
            (Ser.index += 8),
          );
          Ser.setBitMask(bmI1, 0 & 7);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "tBi",
    jitFnHash: "tBi_cguSMW",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_cguSMW(v,Ser){if (v === "admin") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "user") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "guest") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "moderator") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_cguSMW(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_cguSMW(v, Ser) {
        if (v === "admin") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v === "user") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v === "guest") {
          Ser.view.setUint8(Ser.index++, 2);
        } else if (v === "moderator") {
          Ser.view.setUint8(Ser.index++, 3);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "tBi",
    jitFnHash: "tBi_H7NdXp",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_H7NdXp(v,Ser){if (v === "active") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "suspended") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "pending_verification") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "deactivated") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_H7NdXp(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_H7NdXp(v, Ser) {
        if (v === "active") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v === "suspended") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v === "pending_verification") {
          Ser.view.setUint8(Ser.index++, 2);
        } else if (v === "deactivated") {
          Ser.view.setUint8(Ser.index++, 3);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_LJrfVd: {
    isNoop: false,
    typeName: "Address",
    fnID: "tBi",
    jitFnHash: "tBi_LJrfVd",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_LJrfVd(v,Ser){Ser.serString(v.street);Ser.serString(v.city);Ser.serString(v.state);Ser.serString(v.zipCode);Ser.serString(v.country);\n; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_LJrfVd(utl) {
      return function tBi_LJrfVd(v, Ser) {
        Ser.serString(v.street);
        Ser.serString(v.city);
        Ser.serString(v.state);
        Ser.serString(v.zipCode);
        Ser.serString(v.country);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "tBi",
    jitFnHash: "tBi_rhxPRX",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_a0MWc6 = utl.getJIT("tBi_a0MWc6"); return function tBi_rhxPRX(v,Ser){
 Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;
 for (let i0 = 0; i0 < v.length; i0++) {tBi_a0MWc6.fn(v[i0],Ser)}
 ; return Ser}`,
    jitDependencies: ["tBi_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_rhxPRX(utl) {
      const tBi_a0MWc6 = utl.getJIT("tBi_a0MWc6");
      return function tBi_rhxPRX(v, Ser) {
        Ser.view.setUint32(Ser.index, v.length, 1);
        Ser.index += 4;
        for (let i0 = 0; i0 < v.length; i0++) {
          tBi_a0MWc6.fn(v[i0], Ser);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "tBi",
    jitFnHash: "tBi_a0MWc6",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union";
const k_VP1pj5 = ["type", "lastFourDigits", "expiryMonth", "expiryYear", "brand"];
const kA_VP1pj5 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
const kA_HPT1Zh = [];
const k_dbLFnd = ["type", "email"];
const kA_dbLFnd = []; return function tBi_a0MWc6(v,Ser){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string' && !NVlxlJHR(v, k_VP1pj5))) {Ser.view.setUint8(Ser.index++, 0);Ser.serString(v.lastFourDigits);Ser.view.setFloat64(Ser.index,v.expiryMonth, 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index,v.expiryYear, 1, (Ser.index += 8));Ser.serString(v.brand);
;}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string' && !NVlxlJHR(v, k_HPT1Zh))) {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.bankName);Ser.serString(v.accountLastFour);Ser.serString(v.routingNumber);
;}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string' && !NVlxlJHR(v, k_dbLFnd))) {Ser.view.setUint8(Ser.index++, 2);Ser.serString(v.email);
;}else {throw new Error(uErr0);} return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_tBi_a0MWc6(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      const k_VP1pj5 = [
        "type",
        "lastFourDigits",
        "expiryMonth",
        "expiryYear",
        "brand",
      ];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      const k_HPT1Zh = ["type", "bankName", "accountLastFour", "routingNumber"];
      const k_dbLFnd = ["type", "email"];
      return function tBi_a0MWc6(v, Ser) {
        if (
          typeof v === "object" &&
          v !== null &&
          v.type === "credit_card" &&
          typeof v.lastFourDigits === "string" &&
          Number.isFinite(v.expiryMonth) &&
          Number.isFinite(v.expiryYear) &&
          typeof v.brand === "string" &&
          !NVlxlJHR(v, k_VP1pj5)
        ) {
          Ser.view.setUint8(Ser.index++, 0);
          Ser.serString(v.lastFourDigits);
          Ser.view.setFloat64(Ser.index, v.expiryMonth, 1, (Ser.index += 8));
          Ser.view.setFloat64(Ser.index, v.expiryYear, 1, (Ser.index += 8));
          Ser.serString(v.brand);
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "bank_account" &&
          typeof v.bankName === "string" &&
          typeof v.accountLastFour === "string" &&
          typeof v.routingNumber === "string" &&
          !NVlxlJHR(v, k_HPT1Zh)
        ) {
          Ser.view.setUint8(Ser.index++, 1);
          Ser.serString(v.bankName);
          Ser.serString(v.accountLastFour);
          Ser.serString(v.routingNumber);
        } else if (
          typeof v === "object" &&
          v !== null &&
          v.type === "paypal" &&
          typeof v.email === "string" &&
          !NVlxlJHR(v, k_dbLFnd)
        ) {
          Ser.view.setUint8(Ser.index++, 2);
          Ser.serString(v.email);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "tBi",
    jitFnHash: "tBi_Ywo0Ug",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union";
const tBi_lXDVrh = utl.getJIT("tBi_lXDVrh"); return function tBi_Ywo0Ug(v,Ser){if (v.theme === "light") {Ser.view.setUint8(Ser.index++, 0);}else if (v.theme === "dark") {Ser.view.setUint8(Ser.index++, 1);}else if (v.theme === "system") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);};Ser.serString(v.language);Ser.serString(v.timezone);tBi_lXDVrh.fn(v.notifications,Ser);
; return Ser}`,
    jitDependencies: ["tBi_lXDVrh"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_Ywo0Ug(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      const tBi_lXDVrh = utl.getJIT("tBi_lXDVrh");
      return function tBi_Ywo0Ug(v, Ser) {
        if (v.theme === "light") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v.theme === "dark") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v.theme === "system") {
          Ser.view.setUint8(Ser.index++, 2);
        } else {
          throw new Error(uErr0);
        }
        Ser.serString(v.language);
        Ser.serString(v.timezone);
        tBi_lXDVrh.fn(v.notifications, Ser);
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "tBi",
    jitFnHash: "tBi_lXDVrh",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_lXDVrh(v,Ser){Ser.view.setUint8(Ser.index++, !!v.email);Ser.view.setUint8(Ser.index++, !!v.sms);Ser.view.setUint8(Ser.index++, !!v.push);if (v.frequency === "immediate") {Ser.view.setUint8(Ser.index++, 0);}else if (v.frequency === "daily") {Ser.view.setUint8(Ser.index++, 1);}else if (v.frequency === "weekly") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);}
; return Ser}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_lXDVrh(utl) {
      const uErr0 =
        "Can not encode union to binary: item does not belong to the union";
      return function tBi_lXDVrh(v, Ser) {
        Ser.view.setUint8(Ser.index++, !!v.email);
        Ser.view.setUint8(Ser.index++, !!v.sms);
        Ser.view.setUint8(Ser.index++, !!v.push);
        if (v.frequency === "immediate") {
          Ser.view.setUint8(Ser.index++, 0);
        } else if (v.frequency === "daily") {
          Ser.view.setUint8(Ser.index++, 1);
        } else if (v.frequency === "weekly") {
          Ser.view.setUint8(Ser.index++, 2);
        } else {
          throw new Error(uErr0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_OAqgWS: {
    isNoop: false,
    typeName: "User",
    fnID: "fBi",
    jitFnHash: "fBi_OAqgWS",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_cguSMW = utl.getJIT("fBi_cguSMW");
const fBi_H7NdXp = utl.getJIT("fBi_H7NdXp");
const fBi_LJrfVd = utl.getJIT("fBi_LJrfVd");
const fBi_rhxPRX = utl.getJIT("fBi_rhxPRX");
const fBi_Ywo0Ug = utl.getJIT("fBi_Ywo0Ug");
const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS"); return function fBi_OAqgWS(ret,Des){ret = {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),username:Des.desString(),email:Des.desString(),role:fBi_cguSMW.fn(undefined,Des),status:fBi_H7NdXp.fn(undefined,Des),address:fBi_LJrfVd.fn(undefined,Des),paymentMethods:fBi_rhxPRX.fn(undefined,Des),preferences:fBi_Ywo0Ug.fn(undefined,Des),createdAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),updatedAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),tags:fBi_IoMmkS.fn(undefined,Des)}
ret.profile = {firstName:Des.desString(),lastName:Des.desString(),displayName:Des.desString(),dateOfBirth:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}

const bimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.profile.bio = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.profile.avatarUrl = Des.desString();};
const bimI1 = Des.index; Des.index += 1;
if (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)));} return ret}`,
    jitDependencies: [
      "fBi_cguSMW",
      "fBi_H7NdXp",
      "fBi_LJrfVd",
      "fBi_rhxPRX",
      "fBi_Ywo0Ug",
      "fBi_IoMmkS",
    ],
    pureFnDependencies: [],
    createJitFn: function get_fBi_OAqgWS(utl) {
      const fBi_cguSMW = utl.getJIT("fBi_cguSMW");
      const fBi_H7NdXp = utl.getJIT("fBi_H7NdXp");
      const fBi_LJrfVd = utl.getJIT("fBi_LJrfVd");
      const fBi_rhxPRX = utl.getJIT("fBi_rhxPRX");
      const fBi_Ywo0Ug = utl.getJIT("fBi_Ywo0Ug");
      const fBi_IoMmkS = utl.getJIT("fBi_IoMmkS");
      return function fBi_OAqgWS(ret, Des) {
        ret = {
          id: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          username: Des.desString(),
          email: Des.desString(),
          role: fBi_cguSMW.fn(void 0, Des),
          status: fBi_H7NdXp.fn(void 0, Des),
          address: fBi_LJrfVd.fn(void 0, Des),
          paymentMethods: fBi_rhxPRX.fn(void 0, Des),
          preferences: fBi_Ywo0Ug.fn(void 0, Des),
          createdAt: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
          updatedAt: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
          tags: fBi_IoMmkS.fn(void 0, Des),
        };
        ret.profile = {
          firstName: Des.desString(),
          lastName: Des.desString(),
          displayName: Des.desString(),
          dateOfBirth: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
        };
        const bimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {
          ret.profile.bio = Des.desString();
        }
        if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {
          ret.profile.avatarUrl = Des.desString();
        }
        const bimI1 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {
          ret.lastLoginAt = new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          );
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_cguSMW: {
    isNoop: false,
    typeName: "UserRole",
    fnID: "fBi",
    jitFnHash: "fBi_cguSMW",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_cguSMW(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = "admin"}else if (dec0 === 1) {ret = "user"}else if (dec0 === 2) {ret = "guest"}else if (dec0 === 3) {ret = "moderator"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_cguSMW(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_cguSMW(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = "admin";
        } else if (dec0 === 1) {
          ret = "user";
        } else if (dec0 === 2) {
          ret = "guest";
        } else if (dec0 === 3) {
          ret = "moderator";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_H7NdXp: {
    isNoop: false,
    typeName: "AccountStatus",
    fnID: "fBi",
    jitFnHash: "fBi_H7NdXp",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_H7NdXp(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = "active"}else if (dec0 === 1) {ret = "suspended"}else if (dec0 === 2) {ret = "pending_verification"}else if (dec0 === 3) {ret = "deactivated"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_H7NdXp(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_H7NdXp(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = "active";
        } else if (dec0 === 1) {
          ret = "suspended";
        } else if (dec0 === 2) {
          ret = "pending_verification";
        } else if (dec0 === 3) {
          ret = "deactivated";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_LJrfVd: {
    isNoop: false,
    typeName: "Address",
    fnID: "fBi",
    jitFnHash: "fBi_LJrfVd",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_LJrfVd(ret,Des){return {street:Des.desString(),city:Des.desString(),state:Des.desString(),zipCode:Des.desString(),country:Des.desString()}}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_LJrfVd(utl) {
      return function fBi_LJrfVd(ret, Des) {
        return {
          street: Des.desString(),
          city: Des.desString(),
          state: Des.desString(),
          zipCode: Des.desString(),
          country: Des.desString(),
        };
      };
    },
    fn: void 0,
  },
  fBi_rhxPRX: {
    isNoop: false,
    typeName: "array",
    fnID: "fBi",
    jitFnHash: "fBi_rhxPRX",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_a0MWc6 = utl.getJIT("fBi_a0MWc6"); return function fBi_rhxPRX(ret,Des){
 const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);
 for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = fBi_a0MWc6.fn(undefined,Des);}
 ; return ret}`,
    jitDependencies: ["fBi_a0MWc6"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_rhxPRX(utl) {
      const fBi_a0MWc6 = utl.getJIT("fBi_a0MWc6");
      return function fBi_rhxPRX(ret, Des) {
        const arrL0 = Des.view.getUint32(Des.index, 1);
        Des.index += 4;
        ret = new Array(arrL0);
        for (let i0 = 0; i0 < arrL0; i0++) {
          ret[i0] = fBi_a0MWc6.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_a0MWc6: {
    isNoop: false,
    typeName: "PaymentMethod",
    fnID: "fBi",
    jitFnHash: "fBi_a0MWc6",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_a0MWc6(ret,Des){
 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret = {type:"credit_card",lastFourDigits:Des.desString(),expiryMonth:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),expiryYear:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),brand:Des.desString()}}else if (dec0 === 1) {ret = {type:"bank_account",bankName:Des.desString(),accountLastFour:Des.desString(),routingNumber:Des.desString()}}else if (dec0 === 2) {ret = {type:"paypal",email:Des.desString()}}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_a0MWc6(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_a0MWc6(ret, Des) {
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret = {
            type: "credit_card",
            lastFourDigits: Des.desString(),
            expiryMonth: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
            expiryYear: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
            brand: Des.desString(),
          };
        } else if (dec0 === 1) {
          ret = {
            type: "bank_account",
            bankName: Des.desString(),
            accountLastFour: Des.desString(),
            routingNumber: Des.desString(),
          };
        } else if (dec0 === 2) {
          ret = { type: "paypal", email: Des.desString() };
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_Ywo0Ug: {
    isNoop: false,
    typeName: "UserPreferences",
    fnID: "fBi",
    jitFnHash: "fBi_Ywo0Ug",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index";
const fBi_lXDVrh = utl.getJIT("fBi_lXDVrh"); return function fBi_Ywo0Ug(ret,Des){ret = {language:Des.desString(),timezone:Des.desString(),notifications:fBi_lXDVrh.fn(undefined,Des)}

 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret.theme = "light"}else if (dec0 === 1) {ret.theme = "dark"}else if (dec0 === 2) {ret.theme = "system"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: ["fBi_lXDVrh"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_Ywo0Ug(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      const fBi_lXDVrh = utl.getJIT("fBi_lXDVrh");
      return function fBi_Ywo0Ug(ret, Des) {
        ret = {
          language: Des.desString(),
          timezone: Des.desString(),
          notifications: fBi_lXDVrh.fn(void 0, Des),
        };
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret.theme = "light";
        } else if (dec0 === 1) {
          ret.theme = "dark";
        } else if (dec0 === 2) {
          ret.theme = "system";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_lXDVrh: {
    isNoop: false,
    typeName: "NotificationSettings",
    fnID: "fBi",
    jitFnHash: "fBi_lXDVrh",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_lXDVrh(ret,Des){ret = {email:Des.view.getUint8(Des.index++) === 1,sms:Des.view.getUint8(Des.index++) === 1,push:Des.view.getUint8(Des.index++) === 1}

 const dec0 = Des.view.getUint8(Des.index++);
 if (dec0 === 0) {ret.frequency = "immediate"}else if (dec0 === 1) {ret.frequency = "daily"}else if (dec0 === 2) {ret.frequency = "weekly"}
 else {throw new Error(uErr0)}
 ; return ret}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_lXDVrh(utl) {
      const uErr0 = "Can not binary decode union: invalid union index";
      return function fBi_lXDVrh(ret, Des) {
        ret = {
          email: Des.view.getUint8(Des.index++) === 1,
          sms: Des.view.getUint8(Des.index++) === 1,
          push: Des.view.getUint8(Des.index++) === 1,
        };
        const dec0 = Des.view.getUint8(Des.index++);
        if (dec0 === 0) {
          ret.frequency = "immediate";
        } else if (dec0 === 1) {
          ret.frequency = "daily";
        } else if (dec0 === 2) {
          ret.frequency = "weekly";
        } else {
          throw new Error(uErr0);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  is_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "is",
    jitFnHash: "is_fZZjDz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const is_r1FFzz = utl.getJIT("is_r1FFzz"); return function is_fZZjDz(v){return (v.length <= 1 && is_r1FFzz.fn(v[0]))}`,
    jitDependencies: ["is_r1FFzz"],
    pureFnDependencies: [],
    createJitFn: function get_is_fZZjDz(utl) {
      const is_r1FFzz = utl.getJIT("is_r1FFzz");
      return function is_fZZjDz(v) {
        return v.length <= 1 && is_r1FFzz.fn(v[0]);
      };
    },
    fn: void 0,
  },
  is_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "is",
    jitFnHash: "is_r1FFzz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
const kA_r1FFzz = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_r1FFzz(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_r1FFzz))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_r1FFzz(utl) {
      const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_r1FFzz(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          Number.isFinite(v.id) &&
          typeof v.name === "string" &&
          typeof v.surname === "string" &&
          v.lastUpdate instanceof Date &&
          !isNaN(v.lastUpdate.getTime()) &&
          !NVlxlJHR(v, k_r1FFzz)
        );
      };
    },
    fn: void 0,
  },
  te_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "te",
    jitFnHash: "te_fZZjDz",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const te_r1FFzz = utl.getJIT("te_r1FFzz");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_fZZjDz(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_r1FFzz.fn(v[0],pth,er); pth.splice(-1);} return er}`,
    jitDependencies: ["te_r1FFzz"],
    pureFnDependencies: ["mion::newRunTypeErr"],
    createJitFn: function get_te_fZZjDz(utl) {
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
    },
    fn: void 0,
  },
  te_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "te",
    jitFnHash: "te_r1FFzz",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
const kA_r1FFzz = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_r1FFzz(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 
 const unk0 = lTBP5VNV(v, k_r1FFzz);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_r1FFzz(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_r1FFzz = ["id", "name", "surname", "lastUpdate"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_r1FFzz(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
          if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
          if (typeof v.surname !== "string")
            Iqa2M8Ms(pth, er, "string", ["surname"]);
          if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())))
            Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
          const unk0 = lTBP5VNV(v, k_r1FFzz);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  tj_fZZjDz: {
    isNoop: true,
    typeName: "params",
    fnID: "tj",
    jitFnHash: "tj_fZZjDz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_fZZjDz(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_fZZjDz(utl) {
      return function tj_fZZjDz(v) {
        return v;
      };
    },
    fn: void 0,
  },
  tj_r1FFzz: {
    isNoop: true,
    typeName: "SimpleUser",
    fnID: "tj",
    jitFnHash: "tj_r1FFzz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_r1FFzz(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_r1FFzz(utl) {
      return function tj_r1FFzz(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "fj",
    jitFnHash: "fj_fZZjDz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const fj_r1FFzz = utl.getJIT("fj_r1FFzz"); return function fj_fZZjDz(v){v[0] = fj_r1FFzz.fn(v[0]); return v}`,
    jitDependencies: ["fj_r1FFzz"],
    pureFnDependencies: [],
    createJitFn: function get_fj_fZZjDz(utl) {
      const fj_r1FFzz = utl.getJIT("fj_r1FFzz");
      return function fj_fZZjDz(v) {
        v[0] = fj_r1FFzz.fn(v[0]);
        return v;
      };
    },
    fn: void 0,
  },
  fj_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "fj",
    jitFnHash: "fj_r1FFzz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_r1FFzz(v){v.lastUpdate = new Date(v.lastUpdate); return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_r1FFzz(utl) {
      return function fj_r1FFzz(v) {
        v.lastUpdate = new Date(v.lastUpdate);
        return v;
      };
    },
    fn: void 0,
  },
  sj_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "sj",
    jitFnHash: "sj_fZZjDz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const sj_r1FFzz = utl.getJIT("sj_r1FFzz"); return function sj_fZZjDz(v){return '['+sj_r1FFzz.fn(v[0])+']'}`,
    jitDependencies: ["sj_r1FFzz"],
    pureFnDependencies: [],
    createJitFn: function get_sj_fZZjDz(utl) {
      const sj_r1FFzz = utl.getJIT("sj_r1FFzz");
      return function sj_fZZjDz(v) {
        return "[" + sj_r1FFzz.fn(v[0]) + "]";
      };
    },
    fn: void 0,
  },
  sj_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "sj",
    jitFnHash: "sj_r1FFzz",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function sj_r1FFzz(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_r1FFzz(utl) {
      return function sj_r1FFzz(v) {
        return (
          '{"id":' +
          v.id +
          ',"name":' +
          JSON.stringify(v.name) +
          ',"surname":' +
          JSON.stringify(v.surname) +
          ',"lastUpdate":"' +
          v.lastUpdate.toJSON() +
          '"}'
        );
      };
    },
    fn: void 0,
  },
  tBi_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "tBi",
    jitFnHash: "tBi_fZZjDz",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: `'use strict'; const tBi_r1FFzz = utl.getJIT("tBi_r1FFzz"); return function tBi_fZZjDz(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v[0] !== undefined) {tBi_r1FFzz.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} ; return Ser}`,
    jitDependencies: ["tBi_r1FFzz"],
    pureFnDependencies: [],
    createJitFn: function get_tBi_fZZjDz(utl) {
      const tBi_r1FFzz = utl.getJIT("tBi_r1FFzz");
      return function tBi_fZZjDz(v, Ser) {
        const tbmI0 = Ser.index;
        Ser.view.setUint8(Ser.index++, 0);
        if (v[0] !== void 0) {
          tBi_r1FFzz.fn(v[0], Ser);
          Ser.setBitMask(tbmI0, 0);
        }
        return Ser;
      };
    },
    fn: void 0,
  },
  tBi_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "tBi",
    jitFnHash: "tBi_r1FFzz",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_r1FFzz(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.name);Ser.serString(v.surname);Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, (Ser.index += 8));\n; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_r1FFzz(utl) {
      return function tBi_r1FFzz(v, Ser) {
        Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
        Ser.serString(v.name);
        Ser.serString(v.surname);
        Ser.view.setFloat64(
          Ser.index,
          v.lastUpdate.getTime(),
          1,
          (Ser.index += 8),
        );
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_fZZjDz: {
    isNoop: false,
    typeName: "params",
    fnID: "fBi",
    jitFnHash: "fBi_fZZjDz",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: `'use strict'; const fBi_r1FFzz = utl.getJIT("fBi_r1FFzz"); return function fBi_fZZjDz(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;
if (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_r1FFzz.fn(undefined,Des)} ; return ret}`,
    jitDependencies: ["fBi_r1FFzz"],
    pureFnDependencies: [],
    createJitFn: function get_fBi_fZZjDz(utl) {
      const fBi_r1FFzz = utl.getJIT("fBi_r1FFzz");
      return function fBi_fZZjDz(ret, Des) {
        ret = [];
        const tbimI0 = Des.index;
        Des.index += 1;
        if (Des.view.getUint8(tbimI0, 1) & (1 << 0)) {
          ret[0] = fBi_r1FFzz.fn(void 0, Des);
        }
        return ret;
      };
    },
    fn: void 0,
  },
  fBi_r1FFzz: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "fBi",
    jitFnHash: "fBi_r1FFzz",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_r1FFzz(ret,Des){return {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),name:Des.desString(),surname:Des.desString(),lastUpdate:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_r1FFzz(utl) {
      return function fBi_r1FFzz(ret, Des) {
        return {
          id: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          name: Des.desString(),
          surname: Des.desString(),
          lastUpdate: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
        };
      };
    },
    fn: void 0,
  },
  is_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "is",
    jitFnHash: "is_M6eQY8",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict'; const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
const kA_M6eQY8 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function is_M6eQY8(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())) && !NVlxlJHR(v, k_M6eQY8))}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_is_M6eQY8(utl) {
      const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
      utl.getPureFn("mion", "getUnknownKeysFromArray");
      const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function is_M6eQY8(v) {
        return (
          typeof v === "object" &&
          v !== null &&
          Number.isFinite(v.id) &&
          typeof v.name === "string" &&
          typeof v.surname === "string" &&
          v.lastUpdate instanceof Date &&
          !isNaN(v.lastUpdate.getTime()) &&
          !NVlxlJHR(v, k_M6eQY8)
        );
      };
    },
    fn: void 0,
  },
  te_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "te",
    jitFnHash: "te_M6eQY8",
    args: { pλth: "pth", εrr: "er", vλl: "v" },
    defaultParamValues: { pλth: "[]", εrr: "[]", vλl: "" },
    code: `'use strict'; const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
const kA_M6eQY8 = [];
const opts_hk0 = {};
const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
const NVlxlJHR = utl.getPureFn("mion", "hasUnknownKeysFromArray"); return function te_M6eQY8(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 
 const unk0 = lTBP5VNV(v, k_M6eQY8);
 if (unk0) {for (const ky0 of unk0) {Iqa2M8Ms(pth,er,"never",[ky0])}}
 
 }
 ; return er}`,
    jitDependencies: [],
    pureFnDependencies: [
      "mion::newRunTypeErr",
      "mion::getUnknownKeysFromArray",
      "mion::hasUnknownKeysFromArray",
    ],
    createJitFn: function get_te_M6eQY8(utl) {
      const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
      const k_M6eQY8 = ["id", "name", "surname", "lastUpdate"];
      const lTBP5VNV = utl.getPureFn("mion", "getUnknownKeysFromArray");
      utl.getPureFn("mion", "hasUnknownKeysFromArray");
      return function te_M6eQY8(v, pth = [], er = []) {
        if (!(typeof v === "object" && v !== null)) {
          Iqa2M8Ms(pth, er, "object");
        } else {
          if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
          if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
          if (typeof v.surname !== "string")
            Iqa2M8Ms(pth, er, "string", ["surname"]);
          if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())))
            Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
          const unk0 = lTBP5VNV(v, k_M6eQY8);
          if (unk0) {
            for (const ky0 of unk0) {
              Iqa2M8Ms(pth, er, "never", [ky0]);
            }
          }
        }
        return er;
      };
    },
    fn: void 0,
  },
  tj_M6eQY8: {
    isNoop: true,
    typeName: "SimpleUser",
    fnID: "tj",
    jitFnHash: "tj_M6eQY8",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function tj_M6eQY8(v){return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tj_M6eQY8(utl) {
      return function tj_M6eQY8(v) {
        return v;
      };
    },
    fn: void 0,
  },
  fj_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "fj",
    jitFnHash: "fj_M6eQY8",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: "'use strict';  return function fj_M6eQY8(v){v.lastUpdate = new Date(v.lastUpdate); return v}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fj_M6eQY8(utl) {
      return function fj_M6eQY8(v) {
        v.lastUpdate = new Date(v.lastUpdate);
        return v;
      };
    },
    fn: void 0,
  },
  sj_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "sj",
    jitFnHash: "sj_M6eQY8",
    args: { vλl: "v" },
    defaultParamValues: { vλl: "" },
    code: `'use strict';  return function sj_M6eQY8(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`,
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_sj_M6eQY8(utl) {
      return function sj_M6eQY8(v) {
        return (
          '{"id":' +
          v.id +
          ',"name":' +
          JSON.stringify(v.name) +
          ',"surname":' +
          JSON.stringify(v.surname) +
          ',"lastUpdate":"' +
          v.lastUpdate.toJSON() +
          '"}'
        );
      };
    },
    fn: void 0,
  },
  tBi_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "tBi",
    jitFnHash: "tBi_M6eQY8",
    args: { sεr: "Ser", vλl: "v" },
    defaultParamValues: { sεr: "", vλl: "" },
    code: "'use strict';  return function tBi_M6eQY8(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.name);Ser.serString(v.surname);Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, (Ser.index += 8));\n; return Ser}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_tBi_M6eQY8(utl) {
      return function tBi_M6eQY8(v, Ser) {
        Ser.view.setFloat64(Ser.index, v.id, 1, (Ser.index += 8));
        Ser.serString(v.name);
        Ser.serString(v.surname);
        Ser.view.setFloat64(
          Ser.index,
          v.lastUpdate.getTime(),
          1,
          (Ser.index += 8),
        );
        return Ser;
      };
    },
    fn: void 0,
  },
  fBi_M6eQY8: {
    isNoop: false,
    typeName: "SimpleUser",
    fnID: "fBi",
    jitFnHash: "fBi_M6eQY8",
    args: { dεs: "Des", vλl: "ret" },
    defaultParamValues: { dεs: "", vλl: "" },
    code: "'use strict';  return function fBi_M6eQY8(ret,Des){return {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),name:Des.desString(),surname:Des.desString(),lastUpdate:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}}",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: function get_fBi_M6eQY8(utl) {
      return function fBi_M6eQY8(ret, Des) {
        return {
          id: Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          name: Des.desString(),
          surname: Des.desString(),
          lastUpdate: new Date(
            Des.view.getFloat64(Des.index, 1, (Des.index += 8)),
          ),
        };
      };
    },
    fn: void 0,
  },
};
const routerCache = {
  "@thrownErrors": {
    paramNames: [],
    type: 1,
    id: "@thrownErrors",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "",
    returnJitHash: "cyiqwa",
    pointer: ["@thrownErrors"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
  "mion@notFound": {
    paramNames: [],
    type: 1,
    id: "mion@notFound",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "",
    returnJitHash: "OyeKwa",
    pointer: ["mion@notFound"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
  "mion@platformError": {
    paramNames: [],
    type: 1,
    id: "mion@platformError",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "",
    returnJitHash: "bpJFJt",
    pointer: ["mion@platformError"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
  "mion@methodsMetadataById": {
    paramNames: ["methodsIds", "getAllRemoteMethods"],
    type: 1,
    id: "mion@methodsMetadataById",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "N5pt7p",
    returnJitHash: "tD9d3F",
    pointer: ["mion@methodsMetadataById"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "stringifyJson",
      strictTypes: true,
    },
  },
  "mion@methodsMetadataByPath": {
    paramNames: ["path", "getAllRemoteMethods"],
    type: 1,
    id: "mion@methodsMetadataByPath",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "BtjpVL",
    returnJitHash: "tD9d3F",
    pointer: ["mion@methodsMetadataByPath"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "stringifyJson",
      strictTypes: true,
    },
  },
  hello: {
    paramNames: [],
    type: 1,
    id: "hello",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "",
    returnJitHash: "HZ3NL5",
    pointer: ["hello"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
  updateUser: {
    paramNames: ["user"],
    type: 1,
    id: "updateUser",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "R35XJV",
    returnJitHash: "OAqgWS",
    pointer: ["updateUser"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
  updateSimpleUser: {
    paramNames: ["user"],
    type: 1,
    id: "updateSimpleUser",
    isAsync: false,
    hasReturnData: true,
    paramsJitHash: "fZZjDz",
    returnJitHash: "M6eQY8",
    pointer: ["updateSimpleUser"],
    nestLevel: 0,
    options: {
      runOnError: false,
      validateParams: true,
      validateReturn: false,
      serializer: "json",
      strictTypes: true,
    },
  },
};
mionRoutes.addAOTCaches(jitFnsCache, pureFnsCache);
mionRoutes.addRoutesToCache(routerCache);
function getRawAOTCaches() {
  return { jitFnsCache, pureFnsCache, routerCache };
}
function loadRouterAOTCaches() {
  mionRoutes.loadCompiledMethods(getRawAOTCaches().routerCache);
}
loadRouterAOTCaches.__type = ["loadRouterAOTCaches", "P$/!"];
exports.loadRouterAOTCaches = loadRouterAOTCaches;
//# sourceMappingURL=aotCacheLoader-B4Ht95Fd.js.map
