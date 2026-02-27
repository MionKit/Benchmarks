"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const mionRoutes = require("./mionRoutes-CtbFi3fe.js");
const pureFnsCache = { "mion": { "asJSONString": { namespace: "mion", paramNames: [], code: `if (typeof Bun !== "undefined") return JSON.stringify;
  const STR_ESCAPE = /[\\u0000-\\u001f\\u0022\\u005c\\ud800-\\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  };`, fnName: "asJSONString", bodyHash: "4WYkR03dXOzAUe", pureFnDependencies: [], createPureFn: function get_asJSONString(utl) {
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
}, fn: void 0 }, "getUnknownKeysFromArray": { namespace: "mion", paramNames: [], code: 'const MAX_UNKNOWN_KEYS = 10;\n  return function _getUnknownKeysFromArray(obj, keys) {\n    const unknownKeys = [];\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) {\n        unknownKeys.push(prop);\n        if (unknownKeys.length >= MAX_UNKNOWN_KEYS) throw new Error("Too many unknown keys");\n      }\n    }\n    return unknownKeys;\n  };', fnName: "getUnknownKeysFromArray", bodyHash: "D2CDXI8OoGLGyW", pureFnDependencies: [], createPureFn: function get_getUnknownKeysFromArray(utl) {
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
}, fn: void 0 }, "hasUnknownKeysFromArray": { namespace: "mion", paramNames: [], code: "return function _hasUnknownKeysFromArray(obj, keys) {\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) return true;\n    }\n    return false;\n  };", fnName: "hasUnknownKeysFromArray", bodyHash: "K7uzDGNnPwcqQ9", pureFnDependencies: [], createPureFn: function get_hasUnknownKeysFromArray(utl) {
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
}, fn: void 0 }, "newRunTypeErr": { namespace: "mion", paramNames: [], code: "return function _err(p\\u03BBth, \\u03B5rr, expected, accessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const runTypeErr = { expected, path };\n    \\u03B5rr.push(runTypeErr);\n  };", fnName: "newRunTypeErr", bodyHash: "eCwDrS1nuSv7ge", pureFnDependencies: [], createPureFn: function get_newRunTypeErr(utl) {
  return function _err(pλth, εrr, expected, accessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const runTypeErr = { expected, path };
    εrr.push(runTypeErr);
  };
}, fn: void 0 }, "formatErr": { namespace: "mion", paramNames: [], code: "return function _formatErr(p\\u03BBth, \\u03B5rr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const formatPath = fmtAccessPath?.length ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];\n    const format = { name: fmtName, formatPath, val: paramVal };\n    const runTypeErr = { expected, path, format };\n    \\u03B5rr.push(runTypeErr);\n  };", fnName: "formatErr", bodyHash: "2isPiuLWPtohVR", pureFnDependencies: [], createPureFn: function get_formatErr(utl) {
  return function _formatErr(pλth, εrr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const formatPath = (fmtAccessPath == null ? void 0 : fmtAccessPath.length) ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];
    const format = { name: fmtName, formatPath, val: paramVal };
    const runTypeErr = { expected, path, format };
    εrr.push(runTypeErr);
  };
}, fn: void 0 }, "safeIterableKey": { namespace: "mion", paramNames: [], code: 'return function _safeKey(value) {\n    if (value === void 0) return null;\n    if (value === null) return null;\n    const type = typeof value;\n    if (type === "number" || type === "string" || type === "boolean") return value;\n    return null;\n  };', fnName: "safeIterableKey", bodyHash: "BrjL47E-GRjUpQ", pureFnDependencies: [], createPureFn: function get_safeIterableKey(utl) {
  return function _safeKey(value) {
    if (value === void 0) return null;
    if (value === null) return null;
    const type = typeof value;
    if (type === "number" || type === "string" || type === "boolean") return value;
    return null;
  };
}, fn: void 0 } } };
const jitFnsCache = { "is_cm6MsK": { isNoop: false, typeName: "Record", fnID: "is", jitFnHash: "is_cm6MsK", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_zxRrbt = utl.getJIT("is_zxRrbt"); return function is_cm6MsK(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_zxRrbt.fn(v[p0]))) return false;} return true;})())}`, jitDependencies: ["is_zxRrbt"], pureFnDependencies: [], createJitFn: function get_is_cm6MsK(utl) {
  const is_zxRrbt = utl.getJIT("is_zxRrbt");
  return function is_cm6MsK(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_zxRrbt.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "is", jitFnHash: "is_zxRrbt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_WEWIGI = utl.getJIT("is_WEWIGI"); return function is_zxRrbt(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && typeof v.type === 'string' && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_WEWIGI.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)))}`, jitDependencies: ["is_WEWIGI"], pureFnDependencies: [], createJitFn: function get_is_zxRrbt(utl) {
  const is_WEWIGI = utl.getJIT("is_WEWIGI");
  return function is_zxRrbt(v) {
    return typeof v === "object" && v !== null && v["mion@isΣrrθr"] === true && typeof v.type === "string" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_WEWIGI.fn(v.errorData)) && (v.statusCode === void 0 || Number.isFinite(v.statusCode));
  };
}, fn: void 0 }, "is_WEWIGI": { isNoop: false, typeName: "Readonly", fnID: "is", jitFnHash: "is_WEWIGI", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_WEWIGI(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(true)) return false;} return true;})())}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_WEWIGI(utl) {
  return function is_WEWIGI(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && /* @__PURE__ */ (function() {
      return true;
    })();
  };
}, fn: void 0 }, "te_cm6MsK": { isNoop: false, typeName: "Record", fnID: "te", jitFnHash: "te_cm6MsK", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const te_zxRrbt = utl.getJIT("te_zxRrbt");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_cm6MsK(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 for (const p0 in v) {pth.push(p0); te_zxRrbt.fn(v[p0],pth,er); pth.splice(-1);}
 }
 ; return er}`, jitDependencies: ["te_zxRrbt"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_cm6MsK(utl) {
  const te_zxRrbt = utl.getJIT("te_zxRrbt");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_cm6MsK(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]"))) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      for (const p0 in v) {
        pth.push(p0);
        te_zxRrbt.fn(v[p0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "te", jitFnHash: "te_zxRrbt", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_WEWIGI = utl.getJIT("te_WEWIGI"); return function te_zxRrbt(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (typeof v.type !== 'string') Iqa2M8Ms(pth,er,"string",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_WEWIGI.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 }
 ; return er}`, jitDependencies: ["te_WEWIGI"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_zxRrbt(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_WEWIGI = utl.getJIT("te_WEWIGI");
  return function te_zxRrbt(v, pth = [], er = []) {
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
        te_WEWIGI.fn(v.errorData, pth, er);
        pth.splice(-1);
      }
      if (v.statusCode !== void 0) {
        if (!Number.isFinite(v.statusCode)) Iqa2M8Ms(pth, er, "number", ["statusCode"]);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_WEWIGI": { isNoop: false, typeName: "Readonly", fnID: "te", jitFnHash: "te_WEWIGI", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_WEWIGI(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]'))) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_WEWIGI(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_WEWIGI(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]"))) {
      Iqa2M8Ms(pth, er, "object");
    }
    return er;
  };
}, fn: void 0 }, "tj_cm6MsK": { isNoop: false, typeName: "Record", fnID: "tj", jitFnHash: "tj_cm6MsK", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_zxRrbt = utl.getJIT("tj_zxRrbt"); return function tj_cm6MsK(v){for (const p0 in v){ v[p0] = tj_zxRrbt.fn(v[p0]);} return v}', jitDependencies: ["tj_zxRrbt"], pureFnDependencies: [], createJitFn: function get_tj_cm6MsK(utl) {
  const tj_zxRrbt = utl.getJIT("tj_zxRrbt");
  return function tj_cm6MsK(v) {
    for (const p0 in v) {
      v[p0] = tj_zxRrbt.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_zxRrbt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_zxRrbt(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_zxRrbt(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_zxRrbt(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "tj_WEWIGI": { isNoop: true, typeName: "Readonly", fnID: "tj", jitFnHash: "tj_WEWIGI", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_WEWIGI(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_WEWIGI(utl) {
  return function tj_WEWIGI(v) {
    return v;
  };
}, fn: void 0 }, "fj_cm6MsK": { isNoop: false, typeName: "Record", fnID: "fj", jitFnHash: "fj_cm6MsK", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_zxRrbt = utl.getJIT("fj_zxRrbt"); return function fj_cm6MsK(v){for (const p0 in v){ v[p0] = fj_zxRrbt.fn(v[p0]);} return v}', jitDependencies: ["fj_zxRrbt"], pureFnDependencies: [], createJitFn: function get_fj_cm6MsK(utl) {
  const fj_zxRrbt = utl.getJIT("fj_zxRrbt");
  return function fj_cm6MsK(v) {
    for (const p0 in v) {
      v[p0] = fj_zxRrbt.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_zxRrbt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_zxRrbt(v){
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
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_zxRrbt(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_zxRrbt(v) {
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
}, fn: void 0 }, "fj_WEWIGI": { isNoop: true, typeName: "Readonly", fnID: "fj", jitFnHash: "fj_WEWIGI", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_WEWIGI(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_WEWIGI(utl) {
  return function fj_WEWIGI(v) {
    return v;
  };
}, fn: void 0 }, "sj_cm6MsK": { isNoop: false, typeName: "Record", fnID: "sj", jitFnHash: "sj_cm6MsK", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_zxRrbt = utl.getJIT("sj_zxRrbt");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_cm6MsK(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_zxRrbt.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_zxRrbt"], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_cm6MsK(utl) {
  const sj_zxRrbt = utl.getJIT("sj_zxRrbt");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_cm6MsK(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_zxRrbt.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "sj", jitFnHash: "sj_zxRrbt", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_WEWIGI = utl.getJIT("sj_WEWIGI"); return function sj_zxRrbt(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_WEWIGI.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, jitDependencies: ["sj_WEWIGI"], pureFnDependencies: [], createJitFn: function get_sj_zxRrbt(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_WEWIGI = utl.getJIT("sj_WEWIGI");
  return function sj_zxRrbt(v) {
    return "{" + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_WEWIGI.fn(v.errorData) + ",") + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "sj_WEWIGI": { isNoop: false, typeName: "Readonly", fnID: "sj", jitFnHash: "sj_WEWIGI", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_WEWIGI(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + JSON.stringify(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: [], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_WEWIGI(utl) {
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_WEWIGI(v) {
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
}, fn: void 0 }, "tBi_cm6MsK": { isNoop: false, typeName: "Record", fnID: "tBi", jitFnHash: "tBi_cm6MsK", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_zxRrbt = utl.getJIT("tBi_zxRrbt"); return function tBi_cm6MsK(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); tBi_zxRrbt.fn(v[p0],Ser); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}', jitDependencies: ["tBi_zxRrbt"], pureFnDependencies: [], createJitFn: function get_tBi_cm6MsK(utl) {
  const tBi_zxRrbt = utl.getJIT("tBi_zxRrbt");
  return function tBi_cm6MsK(v, Ser) {
    let cnt0 = 0;
    const piI0 = Ser.index;
    Ser.index += 4;
    for (const p0 in v) {
      Ser.serString(p0);
      tBi_zxRrbt.fn(v[p0], Ser);
      cnt0++;
    }
    Ser.view.setUint32(piI0, cnt0, 1);
    return Ser;
  };
}, fn: void 0 }, "tBi_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "tBi", jitFnHash: "tBi_zxRrbt", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI"); return function tBi_zxRrbt(v,Ser){;Ser.serString(v.type);Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_WEWIGI.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`, jitDependencies: ["tBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_tBi_zxRrbt(utl) {
  const uErr1 = "Can not encode union to binary: item does not belong to the union";
  const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI");
  return function tBi_zxRrbt(v, Ser) {
    Ser.serString(v.type);
    Ser.serString(v.publicMessage);
    const bmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) {
        Ser.view.setUint8(Ser.index++, 0);
        Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
      } else if (typeof v.id === "string") {
        Ser.view.setUint8(Ser.index++, 1);
        Ser.serString(v.id);
      } else {
        throw new Error(uErr1);
      }
      Ser.setBitMask(bmI0, 0 & 7);
    }
    if (v.errorData !== void 0) {
      tBi_WEWIGI.fn(v.errorData, Ser);
      Ser.setBitMask(bmI0, 1 & 7);
    }
    if (v.statusCode !== void 0) {
      Ser.view.setFloat64(Ser.index, v.statusCode, 1, Ser.index += 8);
      Ser.setBitMask(bmI0, 2 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_WEWIGI": { isNoop: false, typeName: "Readonly", fnID: "tBi", jitFnHash: "tBi_WEWIGI", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_WEWIGI(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); Ser.serString(JSON.stringify(v[p0])); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_WEWIGI(utl) {
  return function tBi_WEWIGI(v, Ser) {
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
}, fn: void 0 }, "fBi_cm6MsK": { isNoop: false, typeName: "Record", fnID: "fBi", jitFnHash: "fBi_cm6MsK", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_zxRrbt = utl.getJIT("fBi_zxRrbt"); return function fBi_cm6MsK(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_zxRrbt.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_zxRrbt"], pureFnDependencies: [], createJitFn: function get_fBi_cm6MsK(utl) {
  const fBi_zxRrbt = utl.getJIT("fBi_zxRrbt");
  return function fBi_cm6MsK(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = fBi_zxRrbt.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_zxRrbt": { isNoop: false, typeName: "RpcError", fnID: "fBi", jitFnHash: "fBi_zxRrbt", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr1 = "Can not binary decode union: invalid union index";\nconst fBi_WEWIGI = utl.getJIT("fBi_WEWIGI"); return function fBi_zxRrbt(ret,Des){ret = {"mion@isΣrrθr":true,type:Des.desString(),publicMessage:Des.desString()}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {\n const dec1 = Des.view.getUint8(Des.index++);\n if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}\n else {throw new Error(uErr1)}\n ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_WEWIGI.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}', jitDependencies: ["fBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_fBi_zxRrbt(utl) {
  const uErr1 = "Can not binary decode union: invalid union index";
  const fBi_WEWIGI = utl.getJIT("fBi_WEWIGI");
  return function fBi_zxRrbt(ret, Des) {
    ret = { "mion@isΣrrθr": true, type: Des.desString(), publicMessage: Des.desString() };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      const dec1 = Des.view.getUint8(Des.index++);
      if (dec1 === 0) {
        ret.id = Des.view.getFloat64(Des.index, 1, Des.index += 8);
      } else if (dec1 === 1) {
        ret.id = Des.desString();
      } else {
        throw new Error(uErr1);
      }
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.errorData = fBi_WEWIGI.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (2 & 7)) {
      ret.statusCode = Des.view.getFloat64(Des.index, 1, Des.index += 8);
    }
    let desFn0 = utl.getDeserializeFn("RpcError");
    if (desFn0) {
      ret = desFn0(ret);
    } else if (desFn0 = utl.getSerializeClass("RpcError")) {
      ret = new desFn0(ret);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_WEWIGI": { isNoop: false, typeName: "Readonly", fnID: "fBi", jitFnHash: "fBi_WEWIGI", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_WEWIGI(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = JSON.parse(Des.desString());} return ret}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_WEWIGI(utl) {
  return function fBi_WEWIGI(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = JSON.parse(Des.desString());
    }
    return ret;
  };
}, fn: void 0 }, "is_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "is", jitFnHash: "is_a8UQwC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_WEWIGI = utl.getJIT("is_WEWIGI"); return function is_a8UQwC(v){return (typeof v === 'object' && v !== null && v["mion@isΣrrθr"] === true && v.type === "route-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_WEWIGI.fn(v.errorData)) && (v.statusCode === undefined || Number.isFinite(v.statusCode)))}`, jitDependencies: ["is_WEWIGI"], pureFnDependencies: [], createJitFn: function get_is_a8UQwC(utl) {
  const is_WEWIGI = utl.getJIT("is_WEWIGI");
  return function is_a8UQwC(v) {
    return typeof v === "object" && v !== null && v["mion@isΣrrθr"] === true && v.type === "route-not-found" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_WEWIGI.fn(v.errorData)) && (v.statusCode === void 0 || Number.isFinite(v.statusCode));
  };
}, fn: void 0 }, "te_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "te", jitFnHash: "te_a8UQwC", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_WEWIGI = utl.getJIT("te_WEWIGI"); return function te_a8UQwC(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"class");
 } else {
 if (v["mion@isΣrrθr"] !== true) Iqa2M8Ms(pth,er,"literal",["mion@isΣrrθr"]);if (v.type !== "route-not-found") Iqa2M8Ms(pth,er,"literal",["type"]);if (v.id !== undefined) {if (!(Number.isFinite(v.id) || typeof v.id === 'string')) Iqa2M8Ms(pth,er,"union",["id"]);};if (typeof v.publicMessage !== 'string') Iqa2M8Ms(pth,er,"string",["publicMessage"]);if (v.errorData !== undefined) {pth.push("errorData"); te_WEWIGI.fn(v.errorData,pth,er); pth.splice(-1);};if (v.statusCode !== undefined) {if(!(Number.isFinite(v.statusCode))) Iqa2M8Ms(pth,er,"number",["statusCode"]);}
 }
 ; return er}`, jitDependencies: ["te_WEWIGI"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_a8UQwC(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_WEWIGI = utl.getJIT("te_WEWIGI");
  return function te_a8UQwC(v, pth = [], er = []) {
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
        te_WEWIGI.fn(v.errorData, pth, er);
        pth.splice(-1);
      }
      if (v.statusCode !== void 0) {
        if (!Number.isFinite(v.statusCode)) Iqa2M8Ms(pth, er, "number", ["statusCode"]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_a8UQwC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_a8UQwC(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_a8UQwC(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_a8UQwC(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_a8UQwC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_a8UQwC(v){
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
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_a8UQwC(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_a8UQwC(v) {
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
}, fn: void 0 }, "sj_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "sj", jitFnHash: "sj_a8UQwC", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_WEWIGI = utl.getJIT("sj_WEWIGI"); return function sj_a8UQwC(v){return '{'+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_WEWIGI.fn(v.errorData)+",")+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, jitDependencies: ["sj_WEWIGI"], pureFnDependencies: [], createJitFn: function get_sj_a8UQwC(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_WEWIGI = utl.getJIT("sj_WEWIGI");
  return function sj_a8UQwC(v) {
    return "{" + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_WEWIGI.fn(v.errorData) + ",") + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "tBi_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "tBi", jitFnHash: "tBi_a8UQwC", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI"); return function tBi_a8UQwC(v,Ser){;Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_WEWIGI.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`, jitDependencies: ["tBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_tBi_a8UQwC(utl) {
  const uErr1 = "Can not encode union to binary: item does not belong to the union";
  const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI");
  return function tBi_a8UQwC(v, Ser) {
    Ser.serString(v.publicMessage);
    const bmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) {
        Ser.view.setUint8(Ser.index++, 0);
        Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
      } else if (typeof v.id === "string") {
        Ser.view.setUint8(Ser.index++, 1);
        Ser.serString(v.id);
      } else {
        throw new Error(uErr1);
      }
      Ser.setBitMask(bmI0, 0 & 7);
    }
    if (v.errorData !== void 0) {
      tBi_WEWIGI.fn(v.errorData, Ser);
      Ser.setBitMask(bmI0, 1 & 7);
    }
    if (v.statusCode !== void 0) {
      Ser.view.setFloat64(Ser.index, v.statusCode, 1, Ser.index += 8);
      Ser.setBitMask(bmI0, 2 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "fBi_a8UQwC": { isNoop: false, typeName: "RpcError", fnID: "fBi", jitFnHash: "fBi_a8UQwC", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr1 = "Can not binary decode union: invalid union index";\nconst fBi_WEWIGI = utl.getJIT("fBi_WEWIGI"); return function fBi_a8UQwC(ret,Des){ret = {"mion@isΣrrθr":true,type:"route-not-found",publicMessage:Des.desString()}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {\n const dec1 = Des.view.getUint8(Des.index++);\n if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}\n else {throw new Error(uErr1)}\n ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_WEWIGI.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}', jitDependencies: ["fBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_fBi_a8UQwC(utl) {
  const uErr1 = "Can not binary decode union: invalid union index";
  const fBi_WEWIGI = utl.getJIT("fBi_WEWIGI");
  return function fBi_a8UQwC(ret, Des) {
    ret = { "mion@isΣrrθr": true, type: "route-not-found", publicMessage: Des.desString() };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      const dec1 = Des.view.getUint8(Des.index++);
      if (dec1 === 0) {
        ret.id = Des.view.getFloat64(Des.index, 1, Des.index += 8);
      } else if (dec1 === 1) {
        ret.id = Des.desString();
      } else {
        throw new Error(uErr1);
      }
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.errorData = fBi_WEWIGI.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (2 & 7)) {
      ret.statusCode = Des.view.getFloat64(Des.index, 1, Des.index += 8);
    }
    let desFn0 = utl.getDeserializeFn("RpcError");
    if (desFn0) {
      ret = desFn0(ret);
    } else if (desFn0 = utl.getSerializeClass("RpcError")) {
      ret = new desFn0(ret);
    }
    return ret;
  };
}, fn: void 0 }, "is_JtnVhp": { isNoop: false, typeName: "params", fnID: "is", jitFnHash: "is_JtnVhp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_b1N57x = utl.getJIT("is_b1N57x"); return function is_JtnVhp(v){return (v.length <= 2 && is_b1N57x.fn(v[0]) && (v[1] === undefined || (typeof v[1] === 'boolean')))}`, jitDependencies: ["is_b1N57x"], pureFnDependencies: [], createJitFn: function get_is_JtnVhp(utl) {
  const is_b1N57x = utl.getJIT("is_b1N57x");
  return function is_JtnVhp(v) {
    return v.length <= 2 && is_b1N57x.fn(v[0]) && (v[1] === void 0 || typeof v[1] === "boolean");
  };
}, fn: void 0 }, "is_b1N57x": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_b1N57x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_b1N57x(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_b1N57x(utl) {
  return function is_b1N57x(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = typeof v[i0] === "string";
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "te_JtnVhp": { isNoop: false, typeName: "params", fnID: "te", jitFnHash: "te_JtnVhp", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const te_b1N57x = utl.getJIT("te_b1N57x");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_JtnVhp(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_b1N57x.fn(v[0],pth,er); pth.splice(-1);if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`, jitDependencies: ["te_b1N57x"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_JtnVhp(utl) {
  const te_b1N57x = utl.getJIT("te_b1N57x");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_JtnVhp(v, pth = [], er = []) {
    if (v.length > 2) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_b1N57x.fn(v[0], pth, er);
      pth.splice(-1);
      if (v[1] !== void 0) {
        if (typeof v[1] !== "boolean") Iqa2M8Ms(pth, er, "boolean", [1]);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_b1N57x": { isNoop: false, typeName: "array", fnID: "te", jitFnHash: "te_b1N57x", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_b1N57x(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_b1N57x(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_b1N57x(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        if (typeof v[i0] !== "string") Iqa2M8Ms(pth, er, "string", [i0]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_JtnVhp": { isNoop: false, typeName: "params", fnID: "tj", jitFnHash: "tj_JtnVhp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_JtnVhp(v){if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_JtnVhp(utl) {
  return function tj_JtnVhp(v) {
    if (v[1] === void 0) {
      if (v.length > 1) v[1] = null;
    }
    return v;
  };
}, fn: void 0 }, "tj_b1N57x": { isNoop: true, typeName: "array", fnID: "tj", jitFnHash: "tj_b1N57x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_b1N57x(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_b1N57x(utl) {
  return function tj_b1N57x(v) {
    return v;
  };
}, fn: void 0 }, "fj_JtnVhp": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_JtnVhp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_JtnVhp(v){if (v[1] === null ) {v[1] = undefined} return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_JtnVhp(utl) {
  return function fj_JtnVhp(v) {
    if (v[1] === null) {
      v[1] = void 0;
    }
    return v;
  };
}, fn: void 0 }, "fj_b1N57x": { isNoop: true, typeName: "array", fnID: "fj", jitFnHash: "fj_b1N57x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_b1N57x(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_b1N57x(utl) {
  return function fj_b1N57x(v) {
    return v;
  };
}, fn: void 0 }, "sj_JtnVhp": { isNoop: false, typeName: "params", fnID: "sj", jitFnHash: "sj_JtnVhp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_b1N57x = utl.getJIT("sj_b1N57x"); return function sj_JtnVhp(v){return '['+sj_b1N57x.fn(v[0])+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}`, jitDependencies: ["sj_b1N57x"], pureFnDependencies: [], createJitFn: function get_sj_JtnVhp(utl) {
  const sj_b1N57x = utl.getJIT("sj_b1N57x");
  return function sj_JtnVhp(v) {
    return "[" + sj_b1N57x.fn(v[0]) + (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) + "]";
  };
}, fn: void 0 }, "sj_b1N57x": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_b1N57x", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function sj_b1N57x(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_b1N57x(utl) {
  return function sj_b1N57x(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = JSON.stringify(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "tBi_JtnVhp": { isNoop: false, typeName: "params", fnID: "tBi", jitFnHash: "tBi_JtnVhp", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_b1N57x = utl.getJIT("tBi_b1N57x"); return function tBi_JtnVhp(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v[0] !== undefined) {tBi_b1N57x.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} if (v[1] !== undefined) {Ser.view.setUint8(Ser.index++, !!v[1]);Ser.setBitMask(tbmI0, 1)} ; return Ser}', jitDependencies: ["tBi_b1N57x"], pureFnDependencies: [], createJitFn: function get_tBi_JtnVhp(utl) {
  const tBi_b1N57x = utl.getJIT("tBi_b1N57x");
  return function tBi_JtnVhp(v, Ser) {
    const tbmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v[0] !== void 0) {
      tBi_b1N57x.fn(v[0], Ser);
      Ser.setBitMask(tbmI0, 0);
    }
    if (v[1] !== void 0) {
      Ser.view.setUint8(Ser.index++, !!v[1]);
      Ser.setBitMask(tbmI0, 1);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_b1N57x": { isNoop: false, typeName: "array", fnID: "tBi", jitFnHash: "tBi_b1N57x", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_b1N57x(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {Ser.serString(v[i0]);}\n ; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_b1N57x(utl) {
  return function tBi_b1N57x(v, Ser) {
    Ser.view.setUint32(Ser.index, v.length, 1);
    Ser.index += 4;
    for (let i0 = 0; i0 < v.length; i0++) {
      Ser.serString(v[i0]);
    }
    return Ser;
  };
}, fn: void 0 }, "fBi_JtnVhp": { isNoop: false, typeName: "params", fnID: "fBi", jitFnHash: "fBi_JtnVhp", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_b1N57x = utl.getJIT("fBi_b1N57x"); return function fBi_JtnVhp(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_b1N57x.fn(undefined,Des)} if (Des.view.getUint8(tbimI0, 1) & (1 << (1))) {ret[1] = Des.view.getUint8(Des.index++) === 1} ; return ret}', jitDependencies: ["fBi_b1N57x"], pureFnDependencies: [], createJitFn: function get_fBi_JtnVhp(utl) {
  const fBi_b1N57x = utl.getJIT("fBi_b1N57x");
  return function fBi_JtnVhp(ret, Des) {
    ret = [];
    const tbimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(tbimI0, 1) & 1 << 0) {
      ret[0] = fBi_b1N57x.fn(void 0, Des);
    }
    if (Des.view.getUint8(tbimI0, 1) & 1 << 1) {
      ret[1] = Des.view.getUint8(Des.index++) === 1;
    }
    return ret;
  };
}, fn: void 0 }, "fBi_b1N57x": { isNoop: false, typeName: "array", fnID: "fBi", jitFnHash: "fBi_b1N57x", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_b1N57x(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = Des.desString();}\n ; return ret}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_b1N57x(utl) {
  return function fBi_b1N57x(ret, Des) {
    const arrL0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = new Array(arrL0);
    for (let i0 = 0; i0 < arrL0; i0++) {
      ret[i0] = Des.desString();
    }
    return ret;
  };
}, fn: void 0 }, "is_emWGIa": { isNoop: false, typeName: "union", fnID: "is", jitFnHash: "is_emWGIa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_lpbTXn = utl.getJIT("is_lpbTXn");
const is_OQaagS = utl.getJIT("is_OQaagS"); return function is_emWGIa(v){return ((typeof v === 'object' && v !== null && (is_lpbTXn.fn(v) || is_OQaagS.fn(v))))}`, jitDependencies: ["is_lpbTXn", "is_OQaagS"], pureFnDependencies: [], createJitFn: function get_is_emWGIa(utl) {
  const is_lpbTXn = utl.getJIT("is_lpbTXn");
  const is_OQaagS = utl.getJIT("is_OQaagS");
  return function is_emWGIa(v) {
    return typeof v === "object" && v !== null && (is_lpbTXn.fn(v) || is_OQaagS.fn(v));
  };
}, fn: void 0 }, "is_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "is", jitFnHash: "is_lpbTXn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const is_mkeGCe = utl.getJIT("is_mkeGCe");\nconst is_TZrLNn = utl.getJIT("is_TZrLNn");\nconst is_cuUMAa = utl.getJIT("is_cuUMAa"); return function is_lpbTXn(v){return (is_mkeGCe.fn(v.purFnDeps) && is_TZrLNn.fn(v.methods) && is_cuUMAa.fn(v.deps))}', jitDependencies: ["is_mkeGCe", "is_TZrLNn", "is_cuUMAa"], pureFnDependencies: [], createJitFn: function get_is_lpbTXn(utl) {
  const is_mkeGCe = utl.getJIT("is_mkeGCe");
  const is_TZrLNn = utl.getJIT("is_TZrLNn");
  const is_cuUMAa = utl.getJIT("is_cuUMAa");
  return function is_lpbTXn(v) {
    return is_mkeGCe.fn(v.purFnDeps) && is_TZrLNn.fn(v.methods) && is_cuUMAa.fn(v.deps);
  };
}, fn: void 0 }, "is_mkeGCe": { isNoop: false, typeName: "PureFnsDataCache", fnID: "is", jitFnHash: "is_mkeGCe", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_FX3Pr5 = utl.getJIT("is_FX3Pr5"); return function is_mkeGCe(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_FX3Pr5.fn(v[p0]))) return false;} return true;})())}`, jitDependencies: ["is_FX3Pr5"], pureFnDependencies: [], createJitFn: function get_is_mkeGCe(utl) {
  const is_FX3Pr5 = utl.getJIT("is_FX3Pr5");
  return function is_mkeGCe(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_FX3Pr5.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_FX3Pr5": { isNoop: false, typeName: "Record", fnID: "is", jitFnHash: "is_FX3Pr5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_QqGqA2 = utl.getJIT("is_QqGqA2"); return function is_FX3Pr5(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_QqGqA2.fn(v[p0]))) return false;} return true;})())}`, jitDependencies: ["is_QqGqA2"], pureFnDependencies: [], createJitFn: function get_is_FX3Pr5(utl) {
  const is_QqGqA2 = utl.getJIT("is_QqGqA2");
  return function is_FX3Pr5(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_QqGqA2.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_QqGqA2": { isNoop: false, typeName: "PureFunctionData", fnID: "is", jitFnHash: "is_QqGqA2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_Ei8qua = utl.getJIT("is_Ei8qua"); return function is_QqGqA2(v){return (typeof v === 'object' && v !== null && typeof v.namespace === 'string' && is_Ei8qua.fn(v.paramNames) && typeof v.code === 'string' && typeof v.fnName === 'string' && typeof v.bodyHash === 'string' && is_Ei8qua.fn(v.pureFnDependencies))}`, jitDependencies: ["is_Ei8qua"], pureFnDependencies: [], createJitFn: function get_is_QqGqA2(utl) {
  const is_Ei8qua = utl.getJIT("is_Ei8qua");
  return function is_QqGqA2(v) {
    return typeof v === "object" && v !== null && typeof v.namespace === "string" && is_Ei8qua.fn(v.paramNames) && typeof v.code === "string" && typeof v.fnName === "string" && typeof v.bodyHash === "string" && is_Ei8qua.fn(v.pureFnDependencies);
  };
}, fn: void 0 }, "is_Ei8qua": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_Ei8qua", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_Ei8qua(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = typeof v[i0] === 'string';\n if (!(res0)) return false;\n }\n return true;\n }", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_Ei8qua(utl) {
  return function is_Ei8qua(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = typeof v[i0] === "string";
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "is", jitFnHash: "is_TZrLNn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_ecqqc8 = utl.getJIT("is_ecqqc8"); return function is_TZrLNn(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_ecqqc8.fn(v[p0]))) return false;} return true;})())}`, jitDependencies: ["is_ecqqc8"], pureFnDependencies: [], createJitFn: function get_is_TZrLNn(utl) {
  const is_ecqqc8 = utl.getJIT("is_ecqqc8");
  return function is_TZrLNn(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_ecqqc8.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "is", jitFnHash: "is_ecqqc8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_Ei8qua = utl.getJIT("is_Ei8qua");
const is_s8eky2 = utl.getJIT("is_s8eky2");
const is_VJxRzx = utl.getJIT("is_VJxRzx"); return function is_ecqqc8(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.type) && typeof v.id === 'string' && typeof v.isAsync === 'boolean' && typeof v.hasReturnData === 'boolean' && (v.paramNames === undefined || is_Ei8qua.fn(v.paramNames)) && typeof v.paramsJitHash === 'string' && typeof v.returnJitHash === 'string' && (v.headersParam === undefined || is_s8eky2.fn(v.headersParam)) && (v.headersReturn === undefined || is_s8eky2.fn(v.headersReturn)) && (v.linkedFnIds === undefined || is_Ei8qua.fn(v.linkedFnIds)) && is_Ei8qua.fn(v.pointer) && Number.isFinite(v.nestLevel) && is_VJxRzx.fn(v.options))}`, jitDependencies: ["is_Ei8qua", "is_s8eky2", "is_VJxRzx"], pureFnDependencies: [], createJitFn: function get_is_ecqqc8(utl) {
  const is_Ei8qua = utl.getJIT("is_Ei8qua");
  const is_s8eky2 = utl.getJIT("is_s8eky2");
  const is_VJxRzx = utl.getJIT("is_VJxRzx");
  return function is_ecqqc8(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.type) && typeof v.id === "string" && typeof v.isAsync === "boolean" && typeof v.hasReturnData === "boolean" && (v.paramNames === void 0 || is_Ei8qua.fn(v.paramNames)) && typeof v.paramsJitHash === "string" && typeof v.returnJitHash === "string" && (v.headersParam === void 0 || is_s8eky2.fn(v.headersParam)) && (v.headersReturn === void 0 || is_s8eky2.fn(v.headersReturn)) && (v.linkedFnIds === void 0 || is_Ei8qua.fn(v.linkedFnIds)) && is_Ei8qua.fn(v.pointer) && Number.isFinite(v.nestLevel) && is_VJxRzx.fn(v.options);
  };
}, fn: void 0 }, "is_s8eky2": { isNoop: false, typeName: "HeadersMetaData", fnID: "is", jitFnHash: "is_s8eky2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_Ei8qua = utl.getJIT("is_Ei8qua"); return function is_s8eky2(v){return (typeof v === 'object' && v !== null && is_Ei8qua.fn(v.headerNames) && typeof v.jitHash === 'string')}`, jitDependencies: ["is_Ei8qua"], pureFnDependencies: [], createJitFn: function get_is_s8eky2(utl) {
  const is_Ei8qua = utl.getJIT("is_Ei8qua");
  return function is_s8eky2(v) {
    return typeof v === "object" && v !== null && is_Ei8qua.fn(v.headerNames) && typeof v.jitHash === "string";
  };
}, fn: void 0 }, "is_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "is", jitFnHash: "is_VJxRzx", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_hxdrPr = utl.getJIT("is_hxdrPr"); return function is_VJxRzx(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (v.runOnError === undefined || typeof v.runOnError === 'boolean') && (v.validateParams === undefined || typeof v.validateParams === 'boolean') && (v.validateReturn === undefined || typeof v.validateReturn === 'boolean') && (v.description === undefined || typeof v.description === 'string') && (v.serializer === undefined || is_hxdrPr.fn(v.serializer)))}`, jitDependencies: ["is_hxdrPr"], pureFnDependencies: [], createJitFn: function get_is_VJxRzx(utl) {
  const is_hxdrPr = utl.getJIT("is_hxdrPr");
  return function is_VJxRzx(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (v.runOnError === void 0 || typeof v.runOnError === "boolean") && (v.validateParams === void 0 || typeof v.validateParams === "boolean") && (v.validateReturn === void 0 || typeof v.validateReturn === "boolean") && (v.description === void 0 || typeof v.description === "string") && (v.serializer === void 0 || is_hxdrPr.fn(v.serializer));
  };
}, fn: void 0 }, "is_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "is", jitFnHash: "is_hxdrPr", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ' return function is_hxdrPr(v){return (v === "json" || v === "binary" || v === "stringifyJson")}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_hxdrPr(utl) {
  return function is_hxdrPr(v) {
    return v === "json" || v === "binary" || v === "stringifyJson";
  };
}, fn: void 0 }, "is_cuUMAa": { isNoop: false, typeName: "FnsDataCache", fnID: "is", jitFnHash: "is_cuUMAa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_vnf9tn = utl.getJIT("is_vnf9tn"); return function is_cuUMAa(v){return (typeof v === 'object' && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === '[object Object]') && (function(){for (const p0 in v){if (!(is_vnf9tn.fn(v[p0]))) return false;} return true;})())}`, jitDependencies: ["is_vnf9tn"], pureFnDependencies: [], createJitFn: function get_is_cuUMAa(utl) {
  const is_vnf9tn = utl.getJIT("is_vnf9tn");
  return function is_cuUMAa(v) {
    return typeof v === "object" && v !== null && (!Array.isArray(v) && Object.prototype.toString.call(v) === "[object Object]") && (function() {
      for (const p0 in v) {
        if (!is_vnf9tn.fn(v[p0])) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_vnf9tn": { isNoop: false, typeName: "JitCompiledFnData", fnID: "is", jitFnHash: "is_vnf9tn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_gCQYSg = utl.getJIT("is_gCQYSg");
const is_Ei8qua = utl.getJIT("is_Ei8qua"); return function is_vnf9tn(v){return (typeof v === 'object' && v !== null && typeof v.typeName === 'string' && typeof v.fnID === 'string' && typeof v.jitFnHash === 'string' && is_gCQYSg.fn(v.args) && is_gCQYSg.fn(v.defaultParamValues) && (v.isNoop === undefined || typeof v.isNoop === 'boolean') && typeof v.code === 'string' && is_Ei8qua.fn(v.jitDependencies) && is_Ei8qua.fn(v.pureFnDependencies) && (v.paramNames === undefined || is_Ei8qua.fn(v.paramNames)))}`, jitDependencies: ["is_gCQYSg", "is_Ei8qua"], pureFnDependencies: [], createJitFn: function get_is_vnf9tn(utl) {
  const is_gCQYSg = utl.getJIT("is_gCQYSg");
  const is_Ei8qua = utl.getJIT("is_Ei8qua");
  return function is_vnf9tn(v) {
    return typeof v === "object" && v !== null && typeof v.typeName === "string" && typeof v.fnID === "string" && typeof v.jitFnHash === "string" && is_gCQYSg.fn(v.args) && is_gCQYSg.fn(v.defaultParamValues) && (v.isNoop === void 0 || typeof v.isNoop === "boolean") && typeof v.code === "string" && is_Ei8qua.fn(v.jitDependencies) && is_Ei8qua.fn(v.pureFnDependencies) && (v.paramNames === void 0 || is_Ei8qua.fn(v.paramNames));
  };
}, fn: void 0 }, "is_gCQYSg": { isNoop: false, typeName: "JitFnArgs", fnID: "is", jitFnHash: "is_gCQYSg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function is_gCQYSg(v){return (typeof v === 'object' && v !== null && typeof v["vλl"] === 'string' && (function(){for (const p0 in v){if (!(typeof v[p0] === 'string')) return false;} return true;})())}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_gCQYSg(utl) {
  return function is_gCQYSg(v) {
    return typeof v === "object" && v !== null && typeof v["vλl"] === "string" && (function() {
      for (const p0 in v) {
        if (!(typeof v[p0] === "string")) return false;
      }
      return true;
    })();
  };
}, fn: void 0 }, "is_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "is", jitFnHash: "is_OQaagS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_WEWIGI = utl.getJIT("is_WEWIGI"); return function is_OQaagS(v){return ((v.statusCode === undefined || Number.isFinite(v.statusCode)) && v["mion@isΣrrθr"] === true && v.type === "rpc-metadata-not-found" && (v.id === undefined || (Number.isFinite(v.id) || typeof v.id === 'string')) && typeof v.publicMessage === 'string' && (v.errorData === undefined || is_WEWIGI.fn(v.errorData)))}`, jitDependencies: ["is_WEWIGI"], pureFnDependencies: [], createJitFn: function get_is_OQaagS(utl) {
  const is_WEWIGI = utl.getJIT("is_WEWIGI");
  return function is_OQaagS(v) {
    return (v.statusCode === void 0 || Number.isFinite(v.statusCode)) && v["mion@isΣrrθr"] === true && v.type === "rpc-metadata-not-found" && (v.id === void 0 || (Number.isFinite(v.id) || typeof v.id === "string")) && typeof v.publicMessage === "string" && (v.errorData === void 0 || is_WEWIGI.fn(v.errorData));
  };
}, fn: void 0 }, "te_emWGIa": { isNoop: false, typeName: "union", fnID: "te", jitFnHash: "te_emWGIa", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const is_lpbTXn = utl.getJIT("is_lpbTXn");
const is_OQaagS = utl.getJIT("is_OQaagS");
const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_emWGIa(v,pth=[],er=[]){if (!((typeof v === 'object' && v !== null && (is_lpbTXn.fn(v) || is_OQaagS.fn(v))))) Iqa2M8Ms(pth,er,"union"); return er}`, jitDependencies: ["is_lpbTXn", "is_OQaagS"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_emWGIa(utl) {
  const is_lpbTXn = utl.getJIT("is_lpbTXn");
  const is_OQaagS = utl.getJIT("is_OQaagS");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_emWGIa(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null && (is_lpbTXn.fn(v) || is_OQaagS.fn(v)))) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "tj_emWGIa": { isNoop: false, typeName: "union", fnID: "tj", jitFnHash: "tj_emWGIa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union";
const is_lpbTXn = utl.getJIT("is_lpbTXn");
const tj_lpbTXn = utl.getJIT("tj_lpbTXn");
const fj_lpbTXn = utl.getJIT("fj_lpbTXn");
const is_OQaagS = utl.getJIT("is_OQaagS");
const tj_OQaagS = utl.getJIT("tj_OQaagS");
const fj_OQaagS = utl.getJIT("fj_OQaagS"); return function tj_emWGIa(v){if (typeof v === 'object' && v !== null && is_lpbTXn.fn(v)) {v = tj_lpbTXn.fn(v); v = [0, v]}else if (typeof v === 'object' && v !== null && is_OQaagS.fn(v)) {v = tj_OQaagS.fn(v); v = [1, v]}else {throw new Error(uErr0);} return v}`, jitDependencies: ["is_lpbTXn", "tj_lpbTXn", "fj_lpbTXn", "is_OQaagS", "tj_OQaagS", "fj_OQaagS"], pureFnDependencies: [], createJitFn: function get_tj_emWGIa(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const is_lpbTXn = utl.getJIT("is_lpbTXn");
  const tj_lpbTXn = utl.getJIT("tj_lpbTXn");
  utl.getJIT("fj_lpbTXn");
  const is_OQaagS = utl.getJIT("is_OQaagS");
  const tj_OQaagS = utl.getJIT("tj_OQaagS");
  utl.getJIT("fj_OQaagS");
  return function tj_emWGIa(v) {
    if (typeof v === "object" && v !== null && is_lpbTXn.fn(v)) {
      v = tj_lpbTXn.fn(v);
      v = [0, v];
    } else if (typeof v === "object" && v !== null && is_OQaagS.fn(v)) {
      v = tj_OQaagS.fn(v);
      v = [1, v];
    } else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "tj", jitFnHash: "tj_lpbTXn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_TZrLNn = utl.getJIT("tj_TZrLNn"); return function tj_lpbTXn(v){v.methods = tj_TZrLNn.fn(v.methods); return v}', jitDependencies: ["tj_TZrLNn"], pureFnDependencies: [], createJitFn: function get_tj_lpbTXn(utl) {
  const tj_TZrLNn = utl.getJIT("tj_TZrLNn");
  return function tj_lpbTXn(v) {
    v.methods = tj_TZrLNn.fn(v.methods);
    return v;
  };
}, fn: void 0 }, "tj_mkeGCe": { isNoop: true, typeName: "PureFnsDataCache", fnID: "tj", jitFnHash: "tj_mkeGCe", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_mkeGCe(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_mkeGCe(utl) {
  return function tj_mkeGCe(v) {
    return v;
  };
}, fn: void 0 }, "tj_FX3Pr5": { isNoop: true, typeName: "Record", fnID: "tj", jitFnHash: "tj_FX3Pr5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_FX3Pr5(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_FX3Pr5(utl) {
  return function tj_FX3Pr5(v) {
    return v;
  };
}, fn: void 0 }, "tj_QqGqA2": { isNoop: true, typeName: "PureFunctionData", fnID: "tj", jitFnHash: "tj_QqGqA2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_QqGqA2(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_QqGqA2(utl) {
  return function tj_QqGqA2(v) {
    return v;
  };
}, fn: void 0 }, "tj_Ei8qua": { isNoop: true, typeName: "array", fnID: "tj", jitFnHash: "tj_Ei8qua", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_Ei8qua(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_Ei8qua(utl) {
  return function tj_Ei8qua(v) {
    return v;
  };
}, fn: void 0 }, "tj_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "tj", jitFnHash: "tj_TZrLNn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_ecqqc8 = utl.getJIT("tj_ecqqc8"); return function tj_TZrLNn(v){for (const p0 in v){ v[p0] = tj_ecqqc8.fn(v[p0]);} return v}', jitDependencies: ["tj_ecqqc8"], pureFnDependencies: [], createJitFn: function get_tj_TZrLNn(utl) {
  const tj_ecqqc8 = utl.getJIT("tj_ecqqc8");
  return function tj_TZrLNn(v) {
    for (const p0 in v) {
      v[p0] = tj_ecqqc8.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "tj", jitFnHash: "tj_ecqqc8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_VJxRzx = utl.getJIT("tj_VJxRzx"); return function tj_ecqqc8(v){v.options = tj_VJxRzx.fn(v.options); return v}', jitDependencies: ["tj_VJxRzx"], pureFnDependencies: [], createJitFn: function get_tj_ecqqc8(utl) {
  const tj_VJxRzx = utl.getJIT("tj_VJxRzx");
  return function tj_ecqqc8(v) {
    v.options = tj_VJxRzx.fn(v.options);
    return v;
  };
}, fn: void 0 }, "tj_s8eky2": { isNoop: true, typeName: "HeadersMetaData", fnID: "tj", jitFnHash: "tj_s8eky2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_s8eky2(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_s8eky2(utl) {
  return function tj_s8eky2(v) {
    return v;
  };
}, fn: void 0 }, "tj_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "tj", jitFnHash: "tj_VJxRzx", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_hxdrPr = utl.getJIT("tj_hxdrPr"); return function tj_VJxRzx(v){if (v.serializer !== undefined) {v.serializer = tj_hxdrPr.fn(v.serializer);} return v}', jitDependencies: ["tj_hxdrPr"], pureFnDependencies: [], createJitFn: function get_tj_VJxRzx(utl) {
  const tj_hxdrPr = utl.getJIT("tj_hxdrPr");
  return function tj_VJxRzx(v) {
    if (v.serializer !== void 0) {
      v.serializer = tj_hxdrPr.fn(v.serializer);
    }
    return v;
  };
}, fn: void 0 }, "tj_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "tj", jitFnHash: "tj_hxdrPr", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_hxdrPr(v){if (v === "json") { /*noop*/}else if (v === "binary") { /*noop*/}else if (v === "stringifyJson") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_hxdrPr(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_hxdrPr(v) {
    if (v === "json") ;
    else if (v === "binary") ;
    else if (v === "stringifyJson") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_cuUMAa": { isNoop: true, typeName: "FnsDataCache", fnID: "tj", jitFnHash: "tj_cuUMAa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_cuUMAa(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_cuUMAa(utl) {
  return function tj_cuUMAa(v) {
    return v;
  };
}, fn: void 0 }, "tj_vnf9tn": { isNoop: true, typeName: "JitCompiledFnData", fnID: "tj", jitFnHash: "tj_vnf9tn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_vnf9tn(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_vnf9tn(utl) {
  return function tj_vnf9tn(v) {
    return v;
  };
}, fn: void 0 }, "tj_gCQYSg": { isNoop: true, typeName: "JitFnArgs", fnID: "tj", jitFnHash: "tj_gCQYSg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_gCQYSg(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_gCQYSg(utl) {
  return function tj_gCQYSg(v) {
    return v;
  };
}, fn: void 0 }, "fj_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "fj", jitFnHash: "fj_lpbTXn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_TZrLNn = utl.getJIT("fj_TZrLNn"); return function fj_lpbTXn(v){v.methods = fj_TZrLNn.fn(v.methods); return v}', jitDependencies: ["fj_TZrLNn"], pureFnDependencies: [], createJitFn: function get_fj_lpbTXn(utl) {
  const fj_TZrLNn = utl.getJIT("fj_TZrLNn");
  return function fj_lpbTXn(v) {
    v.methods = fj_TZrLNn.fn(v.methods);
    return v;
  };
}, fn: void 0 }, "fj_mkeGCe": { isNoop: true, typeName: "PureFnsDataCache", fnID: "fj", jitFnHash: "fj_mkeGCe", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_mkeGCe(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_mkeGCe(utl) {
  return function fj_mkeGCe(v) {
    return v;
  };
}, fn: void 0 }, "fj_FX3Pr5": { isNoop: true, typeName: "Record", fnID: "fj", jitFnHash: "fj_FX3Pr5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_FX3Pr5(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_FX3Pr5(utl) {
  return function fj_FX3Pr5(v) {
    return v;
  };
}, fn: void 0 }, "fj_QqGqA2": { isNoop: true, typeName: "PureFunctionData", fnID: "fj", jitFnHash: "fj_QqGqA2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_QqGqA2(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_QqGqA2(utl) {
  return function fj_QqGqA2(v) {
    return v;
  };
}, fn: void 0 }, "fj_Ei8qua": { isNoop: true, typeName: "array", fnID: "fj", jitFnHash: "fj_Ei8qua", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_Ei8qua(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_Ei8qua(utl) {
  return function fj_Ei8qua(v) {
    return v;
  };
}, fn: void 0 }, "fj_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "fj", jitFnHash: "fj_TZrLNn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_ecqqc8 = utl.getJIT("fj_ecqqc8"); return function fj_TZrLNn(v){for (const p0 in v){ v[p0] = fj_ecqqc8.fn(v[p0]);} return v}', jitDependencies: ["fj_ecqqc8"], pureFnDependencies: [], createJitFn: function get_fj_TZrLNn(utl) {
  const fj_ecqqc8 = utl.getJIT("fj_ecqqc8");
  return function fj_TZrLNn(v) {
    for (const p0 in v) {
      v[p0] = fj_ecqqc8.fn(v[p0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "fj", jitFnHash: "fj_ecqqc8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_VJxRzx = utl.getJIT("fj_VJxRzx"); return function fj_ecqqc8(v){v.options = fj_VJxRzx.fn(v.options); return v}', jitDependencies: ["fj_VJxRzx"], pureFnDependencies: [], createJitFn: function get_fj_ecqqc8(utl) {
  const fj_VJxRzx = utl.getJIT("fj_VJxRzx");
  return function fj_ecqqc8(v) {
    v.options = fj_VJxRzx.fn(v.options);
    return v;
  };
}, fn: void 0 }, "fj_s8eky2": { isNoop: true, typeName: "HeadersMetaData", fnID: "fj", jitFnHash: "fj_s8eky2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_s8eky2(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_s8eky2(utl) {
  return function fj_s8eky2(v) {
    return v;
  };
}, fn: void 0 }, "fj_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "fj", jitFnHash: "fj_VJxRzx", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_hxdrPr = utl.getJIT("fj_hxdrPr"); return function fj_VJxRzx(v){if (v.serializer !== undefined) {v.serializer = fj_hxdrPr.fn(v.serializer);} return v}', jitDependencies: ["fj_hxdrPr"], pureFnDependencies: [], createJitFn: function get_fj_VJxRzx(utl) {
  const fj_hxdrPr = utl.getJIT("fj_hxdrPr");
  return function fj_VJxRzx(v) {
    if (v.serializer !== void 0) {
      v.serializer = fj_hxdrPr.fn(v.serializer);
    }
    return v;
  };
}, fn: void 0 }, "fj_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "fj", jitFnHash: "fj_hxdrPr", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_hxdrPr(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_hxdrPr(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_hxdrPr(v) {
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
}, fn: void 0 }, "fj_cuUMAa": { isNoop: true, typeName: "FnsDataCache", fnID: "fj", jitFnHash: "fj_cuUMAa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_cuUMAa(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_cuUMAa(utl) {
  return function fj_cuUMAa(v) {
    return v;
  };
}, fn: void 0 }, "fj_vnf9tn": { isNoop: true, typeName: "JitCompiledFnData", fnID: "fj", jitFnHash: "fj_vnf9tn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_vnf9tn(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_vnf9tn(utl) {
  return function fj_vnf9tn(v) {
    return v;
  };
}, fn: void 0 }, "fj_gCQYSg": { isNoop: true, typeName: "JitFnArgs", fnID: "fj", jitFnHash: "fj_gCQYSg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_gCQYSg(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_gCQYSg(utl) {
  return function fj_gCQYSg(v) {
    return v;
  };
}, fn: void 0 }, "tj_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "tj", jitFnHash: "tj_OQaagS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_OQaagS(v){if (v.id !== undefined) {if (Number.isFinite(v.id)) { /*noop*/}else if (typeof v.id === 'string') { /*noop*/}else {throw new Error(uErr0);}} return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_OQaagS(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_OQaagS(v) {
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) ;
      else if (typeof v.id === "string") ;
      else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "fj_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "fj", jitFnHash: "fj_OQaagS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_OQaagS(v){
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
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_OQaagS(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_OQaagS(v) {
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
}, fn: void 0 }, "fj_emWGIa": { isNoop: false, typeName: "union", fnID: "fj", jitFnHash: "fj_emWGIa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index";
const fj_lpbTXn = utl.getJIT("fj_lpbTXn");
const fj_OQaagS = utl.getJIT("fj_OQaagS"); return function fj_emWGIa(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {v = fj_lpbTXn.fn(v)}else if (dec0 === 1) {v = fj_OQaagS.fn(v)}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: ["fj_lpbTXn", "fj_OQaagS"], pureFnDependencies: [], createJitFn: function get_fj_emWGIa(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_lpbTXn = utl.getJIT("fj_lpbTXn");
  const fj_OQaagS = utl.getJIT("fj_OQaagS");
  return function fj_emWGIa(v) {
    if ((v == null ? void 0 : v.length) === 2 && Array.isArray(v) && typeof v[0] === "number") {
      const dec0 = v[0];
      v = v[1];
      if (dec0 === 0) {
        v = fj_lpbTXn.fn(v);
      } else if (dec0 === 1) {
        v = fj_OQaagS.fn(v);
      } else {
        throw new Error(uErr0);
      }
    }
    return v;
  };
}, fn: void 0 }, "sj_emWGIa": { isNoop: false, typeName: "union", fnID: "sj", jitFnHash: "sj_emWGIa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const is_lpbTXn = utl.getJIT("is_lpbTXn");
const sj_lpbTXn = utl.getJIT("sj_lpbTXn");
const tj_lpbTXn = utl.getJIT("tj_lpbTXn");
const fj_lpbTXn = utl.getJIT("fj_lpbTXn");
const is_OQaagS = utl.getJIT("is_OQaagS");
const sj_OQaagS = utl.getJIT("sj_OQaagS");
const tj_OQaagS = utl.getJIT("tj_OQaagS");
const fj_OQaagS = utl.getJIT("fj_OQaagS"); return function sj_emWGIa(v){if (typeof v === 'object' && v !== null && is_lpbTXn.fn(v)) {return '[0,' + sj_lpbTXn.fn(v) + ']'}else if (typeof v === 'object' && v !== null && is_OQaagS.fn(v)) {return '[1,' + sj_OQaagS.fn(v) + ']'}else {throw new Error(uErr0);}}`, jitDependencies: ["is_lpbTXn", "sj_lpbTXn", "tj_lpbTXn", "fj_lpbTXn", "is_OQaagS", "sj_OQaagS", "tj_OQaagS", "fj_OQaagS"], pureFnDependencies: [], createJitFn: function get_sj_emWGIa(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const is_lpbTXn = utl.getJIT("is_lpbTXn");
  const sj_lpbTXn = utl.getJIT("sj_lpbTXn");
  utl.getJIT("tj_lpbTXn");
  utl.getJIT("fj_lpbTXn");
  const is_OQaagS = utl.getJIT("is_OQaagS");
  const sj_OQaagS = utl.getJIT("sj_OQaagS");
  utl.getJIT("tj_OQaagS");
  utl.getJIT("fj_OQaagS");
  return function sj_emWGIa(v) {
    if (typeof v === "object" && v !== null && is_lpbTXn.fn(v)) {
      return "[0," + sj_lpbTXn.fn(v) + "]";
    } else if (typeof v === "object" && v !== null && is_OQaagS.fn(v)) {
      return "[1," + sj_OQaagS.fn(v) + "]";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "sj", jitFnHash: "sj_lpbTXn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_mkeGCe = utl.getJIT("sj_mkeGCe");
const sj_TZrLNn = utl.getJIT("sj_TZrLNn");
const sj_cuUMAa = utl.getJIT("sj_cuUMAa"); return function sj_lpbTXn(v){return '{'+'"purFnDeps":'+sj_mkeGCe.fn(v.purFnDeps)+","+'"methods":'+sj_TZrLNn.fn(v.methods)+","+'"deps":'+sj_cuUMAa.fn(v.deps)+'}'}`, jitDependencies: ["sj_mkeGCe", "sj_TZrLNn", "sj_cuUMAa"], pureFnDependencies: [], createJitFn: function get_sj_lpbTXn(utl) {
  const sj_mkeGCe = utl.getJIT("sj_mkeGCe");
  const sj_TZrLNn = utl.getJIT("sj_TZrLNn");
  const sj_cuUMAa = utl.getJIT("sj_cuUMAa");
  return function sj_lpbTXn(v) {
    return '{"purFnDeps":' + sj_mkeGCe.fn(v.purFnDeps) + ',"methods":' + sj_TZrLNn.fn(v.methods) + ',"deps":' + sj_cuUMAa.fn(v.deps) + "}";
  };
}, fn: void 0 }, "sj_mkeGCe": { isNoop: false, typeName: "PureFnsDataCache", fnID: "sj", jitFnHash: "sj_mkeGCe", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_FX3Pr5 = utl.getJIT("sj_FX3Pr5");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_mkeGCe(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_FX3Pr5.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_FX3Pr5"], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_mkeGCe(utl) {
  const sj_FX3Pr5 = utl.getJIT("sj_FX3Pr5");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_mkeGCe(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_FX3Pr5.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_FX3Pr5": { isNoop: false, typeName: "Record", fnID: "sj", jitFnHash: "sj_FX3Pr5", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_QqGqA2 = utl.getJIT("sj_QqGqA2");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_FX3Pr5(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_QqGqA2.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_QqGqA2"], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_FX3Pr5(utl) {
  const sj_QqGqA2 = utl.getJIT("sj_QqGqA2");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_FX3Pr5(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_QqGqA2.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_QqGqA2": { isNoop: false, typeName: "PureFunctionData", fnID: "sj", jitFnHash: "sj_QqGqA2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_Ei8qua = utl.getJIT("sj_Ei8qua"); return function sj_QqGqA2(v){return '{'+'"namespace":'+JSON.stringify(v.namespace)+","+'"paramNames":'+sj_Ei8qua.fn(v.paramNames)+","+'"code":'+JSON.stringify(v.code)+","+'"fnName":'+JSON.stringify(v.fnName)+","+'"bodyHash":'+JSON.stringify(v.bodyHash)+","+'"pureFnDependencies":'+sj_Ei8qua.fn(v.pureFnDependencies)+'}'}`, jitDependencies: ["sj_Ei8qua"], pureFnDependencies: [], createJitFn: function get_sj_QqGqA2(utl) {
  const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
  return function sj_QqGqA2(v) {
    return '{"namespace":' + JSON.stringify(v.namespace) + ',"paramNames":' + sj_Ei8qua.fn(v.paramNames) + ',"code":' + JSON.stringify(v.code) + ',"fnName":' + JSON.stringify(v.fnName) + ',"bodyHash":' + JSON.stringify(v.bodyHash) + ',"pureFnDependencies":' + sj_Ei8qua.fn(v.pureFnDependencies) + "}";
  };
}, fn: void 0 }, "sj_Ei8qua": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_Ei8qua", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function sj_Ei8qua(v){\n const ls0 = [];\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = JSON.stringify(v[i0]);\n ls0.push(res0);\n }\n return '[' + ls0.join(',') + ']';\n }", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_Ei8qua(utl) {
  return function sj_Ei8qua(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = JSON.stringify(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "sj", jitFnHash: "sj_TZrLNn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_ecqqc8 = utl.getJIT("sj_ecqqc8");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_TZrLNn(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_ecqqc8.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_ecqqc8"], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_TZrLNn(utl) {
  const sj_ecqqc8 = utl.getJIT("sj_ecqqc8");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_TZrLNn(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_ecqqc8.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "sj", jitFnHash: "sj_ecqqc8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
const sj_s8eky2 = utl.getJIT("sj_s8eky2");
const sj_VJxRzx = utl.getJIT("sj_VJxRzx"); return function sj_ecqqc8(v){return '{'+(v.paramNames === undefined ? '' : '"paramNames":'+sj_Ei8qua.fn(v.paramNames)+",")+(v.headersParam === undefined ? '' : '"headersParam":'+sj_s8eky2.fn(v.headersParam)+",")+(v.headersReturn === undefined ? '' : '"headersReturn":'+sj_s8eky2.fn(v.headersReturn)+",")+(v.linkedFnIds === undefined ? '' : '"linkedFnIds":'+sj_Ei8qua.fn(v.linkedFnIds)+",")+'"type":'+v.type+","+'"id":'+JSON.stringify(v.id)+","+'"isAsync":'+(v.isAsync ? 'true' : 'false')+","+'"hasReturnData":'+(v.hasReturnData ? 'true' : 'false')+","+'"paramsJitHash":'+JSON.stringify(v.paramsJitHash)+","+'"returnJitHash":'+JSON.stringify(v.returnJitHash)+","+'"pointer":'+sj_Ei8qua.fn(v.pointer)+","+'"nestLevel":'+v.nestLevel+","+'"options":'+sj_VJxRzx.fn(v.options)+'}'}`, jitDependencies: ["sj_Ei8qua", "sj_s8eky2", "sj_VJxRzx"], pureFnDependencies: [], createJitFn: function get_sj_ecqqc8(utl) {
  const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
  const sj_s8eky2 = utl.getJIT("sj_s8eky2");
  const sj_VJxRzx = utl.getJIT("sj_VJxRzx");
  return function sj_ecqqc8(v) {
    return "{" + (v.paramNames === void 0 ? "" : '"paramNames":' + sj_Ei8qua.fn(v.paramNames) + ",") + (v.headersParam === void 0 ? "" : '"headersParam":' + sj_s8eky2.fn(v.headersParam) + ",") + (v.headersReturn === void 0 ? "" : '"headersReturn":' + sj_s8eky2.fn(v.headersReturn) + ",") + (v.linkedFnIds === void 0 ? "" : '"linkedFnIds":' + sj_Ei8qua.fn(v.linkedFnIds) + ",") + '"type":' + v.type + ',"id":' + JSON.stringify(v.id) + ',"isAsync":' + (v.isAsync ? "true" : "false") + ',"hasReturnData":' + (v.hasReturnData ? "true" : "false") + ',"paramsJitHash":' + JSON.stringify(v.paramsJitHash) + ',"returnJitHash":' + JSON.stringify(v.returnJitHash) + ',"pointer":' + sj_Ei8qua.fn(v.pointer) + ',"nestLevel":' + v.nestLevel + ',"options":' + sj_VJxRzx.fn(v.options) + "}";
  };
}, fn: void 0 }, "sj_s8eky2": { isNoop: false, typeName: "HeadersMetaData", fnID: "sj", jitFnHash: "sj_s8eky2", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_Ei8qua = utl.getJIT("sj_Ei8qua"); return function sj_s8eky2(v){return '{'+'"headerNames":'+sj_Ei8qua.fn(v.headerNames)+","+'"jitHash":'+JSON.stringify(v.jitHash)+'}'}`, jitDependencies: ["sj_Ei8qua"], pureFnDependencies: [], createJitFn: function get_sj_s8eky2(utl) {
  const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
  return function sj_s8eky2(v) {
    return '{"headerNames":' + sj_Ei8qua.fn(v.headerNames) + ',"jitHash":' + JSON.stringify(v.jitHash) + "}";
  };
}, fn: void 0 }, "sj_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "sj", jitFnHash: "sj_VJxRzx", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_hxdrPr = utl.getJIT("sj_hxdrPr"); return function sj_VJxRzx(v){return (function(){const ns0 = [];if (v.runOnError !== undefined){ns0.push((v.runOnError === undefined ? '' : '"runOnError":'+(v.runOnError ? 'true' : 'false')))}if (v.validateParams !== undefined){ns0.push((v.validateParams === undefined ? '' : '"validateParams":'+(v.validateParams ? 'true' : 'false')))}if (v.validateReturn !== undefined){ns0.push((v.validateReturn === undefined ? '' : '"validateReturn":'+(v.validateReturn ? 'true' : 'false')))}if (v.description !== undefined){ns0.push((v.description === undefined ? '' : '"description":'+JSON.stringify(v.description)))}if (v.serializer !== undefined){ns0.push((v.serializer === undefined ? '' : '"serializer":'+sj_hxdrPr.fn(v.serializer)))};return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_hxdrPr"], pureFnDependencies: [], createJitFn: function get_sj_VJxRzx(utl) {
  const sj_hxdrPr = utl.getJIT("sj_hxdrPr");
  return function sj_VJxRzx(v) {
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
        ns0.push(v.serializer === void 0 ? "" : '"serializer":' + sj_hxdrPr.fn(v.serializer));
      }
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "sj", jitFnHash: "sj_hxdrPr", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_hxdrPr(v){if (v === "json") {return JSON.stringify(v)}else if (v === "binary") {return JSON.stringify(v)}else if (v === "stringifyJson") {return JSON.stringify(v)}else {throw new Error(uErr0);}}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_hxdrPr(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_hxdrPr(v) {
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
}, fn: void 0 }, "sj_cuUMAa": { isNoop: false, typeName: "FnsDataCache", fnID: "sj", jitFnHash: "sj_cuUMAa", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_vnf9tn = utl.getJIT("sj_vnf9tn");
const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_cuUMAa(v){return (function(){const ns0 = [];ns0.push((function(){
 const ls1 = [];
 for (const p1 in v) {
 
 if (p1 !== undefined) ls1.push(zT3pfXdp(p1) + ':' + sj_vnf9tn.fn(v[p1]));
 }
 if (!ls1.length) return '';
 return ls1.join(',');
 })());return '{'+ns0.join(',')+'}'})()}`, jitDependencies: ["sj_vnf9tn"], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_cuUMAa(utl) {
  const sj_vnf9tn = utl.getJIT("sj_vnf9tn");
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_cuUMAa(v) {
    return (function() {
      const ns0 = [];
      ns0.push((function() {
        const ls1 = [];
        for (const p1 in v) {
          if (p1 !== void 0) ls1.push(zT3pfXdp(p1) + ":" + sj_vnf9tn.fn(v[p1]));
        }
        if (!ls1.length) return "";
        return ls1.join(",");
      })());
      return "{" + ns0.join(",") + "}";
    })();
  };
}, fn: void 0 }, "sj_vnf9tn": { isNoop: false, typeName: "JitCompiledFnData", fnID: "sj", jitFnHash: "sj_vnf9tn", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
const sj_gCQYSg = utl.getJIT("sj_gCQYSg"); return function sj_vnf9tn(v){return '{'+(v.isNoop === undefined ? '' : '"isNoop":'+(v.isNoop ? 'true' : 'false')+",")+(v.paramNames === undefined ? '' : '"paramNames":'+sj_Ei8qua.fn(v.paramNames)+",")+'"typeName":'+JSON.stringify(v.typeName)+","+'"fnID":'+JSON.stringify(v.fnID)+","+'"jitFnHash":'+JSON.stringify(v.jitFnHash)+","+'"args":'+sj_gCQYSg.fn(v.args)+","+'"defaultParamValues":'+sj_gCQYSg.fn(v.defaultParamValues)+","+'"code":'+JSON.stringify(v.code)+","+'"jitDependencies":'+sj_Ei8qua.fn(v.jitDependencies)+","+'"pureFnDependencies":'+sj_Ei8qua.fn(v.pureFnDependencies)+'}'}`, jitDependencies: ["sj_Ei8qua", "sj_gCQYSg"], pureFnDependencies: [], createJitFn: function get_sj_vnf9tn(utl) {
  const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
  const sj_gCQYSg = utl.getJIT("sj_gCQYSg");
  return function sj_vnf9tn(v) {
    return "{" + (v.isNoop === void 0 ? "" : '"isNoop":' + (v.isNoop ? "true" : "false") + ",") + (v.paramNames === void 0 ? "" : '"paramNames":' + sj_Ei8qua.fn(v.paramNames) + ",") + '"typeName":' + JSON.stringify(v.typeName) + ',"fnID":' + JSON.stringify(v.fnID) + ',"jitFnHash":' + JSON.stringify(v.jitFnHash) + ',"args":' + sj_gCQYSg.fn(v.args) + ',"defaultParamValues":' + sj_gCQYSg.fn(v.defaultParamValues) + ',"code":' + JSON.stringify(v.code) + ',"jitDependencies":' + sj_Ei8qua.fn(v.jitDependencies) + ',"pureFnDependencies":' + sj_Ei8qua.fn(v.pureFnDependencies) + "}";
  };
}, fn: void 0 }, "sj_gCQYSg": { isNoop: false, typeName: "JitFnArgs", fnID: "sj", jitFnHash: "sj_gCQYSg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const zT3pfXdp = utl.getPureFn("mion", "asJSONString"); return function sj_gCQYSg(v){return '{'+(function(){
 const ls0 = [];
 for (const p0 in v) {
 if ("vλl" === p0) continue;
 if (p0 !== undefined) ls0.push(zT3pfXdp(p0) + ':' + JSON.stringify(v[p0]));
 }
 if (!ls0.length) return '';
 return ls0.join(',')+",";
 })()+"\\"vλl\\""+':'+JSON.stringify(v["vλl"])+'}'}`, jitDependencies: [], pureFnDependencies: ["mion::asJSONString"], createJitFn: function get_sj_gCQYSg(utl) {
  const zT3pfXdp = utl.getPureFn("mion", "asJSONString");
  return function sj_gCQYSg(v) {
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
}, fn: void 0 }, "sj_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "sj", jitFnHash: "sj_OQaagS", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_WEWIGI = utl.getJIT("sj_WEWIGI"); return function sj_OQaagS(v){return '{'+(v.statusCode === undefined ? '' : '"statusCode":'+v.statusCode+",")+(v.id === undefined ? '' : '"id":'+(function(){if (Number.isFinite(v.id)) {return v.id}else if (typeof v.id === 'string') {return JSON.stringify(v.id)}else {throw new Error(uErr0);}})()+",")+(v.errorData === undefined ? '' : '"errorData":'+sj_WEWIGI.fn(v.errorData)+",")+"\\"mion@isΣrrθr\\""+':'+(v["mion@isΣrrθr"] ? 'true' : 'false')+","+'"type":'+JSON.stringify(v.type)+","+'"publicMessage":'+JSON.stringify(v.publicMessage)+'}'}`, jitDependencies: ["sj_WEWIGI"], pureFnDependencies: [], createJitFn: function get_sj_OQaagS(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_WEWIGI = utl.getJIT("sj_WEWIGI");
  return function sj_OQaagS(v) {
    return "{" + (v.statusCode === void 0 ? "" : '"statusCode":' + v.statusCode + ",") + (v.id === void 0 ? "" : '"id":' + (function() {
      if (Number.isFinite(v.id)) {
        return v.id;
      } else if (typeof v.id === "string") {
        return JSON.stringify(v.id);
      } else {
        throw new Error(uErr0);
      }
    })() + ",") + (v.errorData === void 0 ? "" : '"errorData":' + sj_WEWIGI.fn(v.errorData) + ",") + '"mion@isΣrrθr":' + (v["mion@isΣrrθr"] ? "true" : "false") + ',"type":' + JSON.stringify(v.type) + ',"publicMessage":' + JSON.stringify(v.publicMessage) + "}";
  };
}, fn: void 0 }, "tBi_emWGIa": { isNoop: false, typeName: "union", fnID: "tBi", jitFnHash: "tBi_emWGIa", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr0 = "Can not encode union to binary: item does not belong to the union";
const is_lpbTXn = utl.getJIT("is_lpbTXn");
const tBi_lpbTXn = utl.getJIT("tBi_lpbTXn");
const is_OQaagS = utl.getJIT("is_OQaagS");
const tBi_OQaagS = utl.getJIT("tBi_OQaagS"); return function tBi_emWGIa(v,Ser){if (typeof v === 'object' && v !== null && is_lpbTXn.fn(v)) {Ser.view.setUint8(Ser.index++, 0);tBi_lpbTXn.fn(v,Ser)}else if (typeof v === 'object' && v !== null && is_OQaagS.fn(v)) {Ser.view.setUint8(Ser.index++, 1);tBi_OQaagS.fn(v,Ser)}else {throw new Error(uErr0);} return Ser}`, jitDependencies: ["is_lpbTXn", "tBi_lpbTXn", "is_OQaagS", "tBi_OQaagS"], pureFnDependencies: [], createJitFn: function get_tBi_emWGIa(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  const is_lpbTXn = utl.getJIT("is_lpbTXn");
  const tBi_lpbTXn = utl.getJIT("tBi_lpbTXn");
  const is_OQaagS = utl.getJIT("is_OQaagS");
  const tBi_OQaagS = utl.getJIT("tBi_OQaagS");
  return function tBi_emWGIa(v, Ser) {
    if (typeof v === "object" && v !== null && is_lpbTXn.fn(v)) {
      Ser.view.setUint8(Ser.index++, 0);
      tBi_lpbTXn.fn(v, Ser);
    } else if (typeof v === "object" && v !== null && is_OQaagS.fn(v)) {
      Ser.view.setUint8(Ser.index++, 1);
      tBi_OQaagS.fn(v, Ser);
    } else {
      throw new Error(uErr0);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "tBi", jitFnHash: "tBi_lpbTXn", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_TZrLNn = utl.getJIT("tBi_TZrLNn");\nconst tBi_cuUMAa = utl.getJIT("tBi_cuUMAa");\nconst tBi_mkeGCe = utl.getJIT("tBi_mkeGCe"); return function tBi_lpbTXn(v,Ser){tBi_TZrLNn.fn(v.methods,Ser);tBi_cuUMAa.fn(v.deps,Ser);tBi_mkeGCe.fn(v.purFnDeps,Ser);\n; return Ser}', jitDependencies: ["tBi_TZrLNn", "tBi_cuUMAa", "tBi_mkeGCe"], pureFnDependencies: [], createJitFn: function get_tBi_lpbTXn(utl) {
  const tBi_TZrLNn = utl.getJIT("tBi_TZrLNn");
  const tBi_cuUMAa = utl.getJIT("tBi_cuUMAa");
  const tBi_mkeGCe = utl.getJIT("tBi_mkeGCe");
  return function tBi_lpbTXn(v, Ser) {
    tBi_TZrLNn.fn(v.methods, Ser);
    tBi_cuUMAa.fn(v.deps, Ser);
    tBi_mkeGCe.fn(v.purFnDeps, Ser);
    return Ser;
  };
}, fn: void 0 }, "tBi_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "tBi", jitFnHash: "tBi_TZrLNn", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_ecqqc8 = utl.getJIT("tBi_ecqqc8"); return function tBi_TZrLNn(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); tBi_ecqqc8.fn(v[p0],Ser); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}', jitDependencies: ["tBi_ecqqc8"], pureFnDependencies: [], createJitFn: function get_tBi_TZrLNn(utl) {
  const tBi_ecqqc8 = utl.getJIT("tBi_ecqqc8");
  return function tBi_TZrLNn(v, Ser) {
    let cnt0 = 0;
    const piI0 = Ser.index;
    Ser.index += 4;
    for (const p0 in v) {
      Ser.serString(p0);
      tBi_ecqqc8.fn(v[p0], Ser);
      cnt0++;
    }
    Ser.view.setUint32(piI0, cnt0, 1);
    return Ser;
  };
}, fn: void 0 }, "tBi_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "tBi", jitFnHash: "tBi_ecqqc8", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");\nconst tBi_VJxRzx = utl.getJIT("tBi_VJxRzx");\nconst tBi_s8eky2 = utl.getJIT("tBi_s8eky2"); return function tBi_ecqqc8(v,Ser){Ser.view.setFloat64(Ser.index,v.type, 1, (Ser.index += 8));Ser.serString(v.id);Ser.view.setUint8(Ser.index++, !!v.isAsync);Ser.view.setUint8(Ser.index++, !!v.hasReturnData);Ser.serString(v.paramsJitHash);Ser.serString(v.returnJitHash);tBi_Ei8qua.fn(v.pointer,Ser);Ser.view.setFloat64(Ser.index,v.nestLevel, 1, (Ser.index += 8));tBi_VJxRzx.fn(v.options,Ser);\nconst bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.paramNames !== undefined) {tBi_Ei8qua.fn(v.paramNames,Ser);Ser.setBitMask(bmI0, 0 & 7)}if (v.headersParam !== undefined) {tBi_s8eky2.fn(v.headersParam,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.headersReturn !== undefined) {tBi_s8eky2.fn(v.headersReturn,Ser);Ser.setBitMask(bmI0, 2 & 7)}if (v.linkedFnIds !== undefined) {tBi_Ei8qua.fn(v.linkedFnIds,Ser);Ser.setBitMask(bmI0, 3 & 7)} return Ser}', jitDependencies: ["tBi_Ei8qua", "tBi_VJxRzx", "tBi_s8eky2"], pureFnDependencies: [], createJitFn: function get_tBi_ecqqc8(utl) {
  const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");
  const tBi_VJxRzx = utl.getJIT("tBi_VJxRzx");
  const tBi_s8eky2 = utl.getJIT("tBi_s8eky2");
  return function tBi_ecqqc8(v, Ser) {
    Ser.view.setFloat64(Ser.index, v.type, 1, Ser.index += 8);
    Ser.serString(v.id);
    Ser.view.setUint8(Ser.index++, !!v.isAsync);
    Ser.view.setUint8(Ser.index++, !!v.hasReturnData);
    Ser.serString(v.paramsJitHash);
    Ser.serString(v.returnJitHash);
    tBi_Ei8qua.fn(v.pointer, Ser);
    Ser.view.setFloat64(Ser.index, v.nestLevel, 1, Ser.index += 8);
    tBi_VJxRzx.fn(v.options, Ser);
    const bmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.paramNames !== void 0) {
      tBi_Ei8qua.fn(v.paramNames, Ser);
      Ser.setBitMask(bmI0, 0 & 7);
    }
    if (v.headersParam !== void 0) {
      tBi_s8eky2.fn(v.headersParam, Ser);
      Ser.setBitMask(bmI0, 1 & 7);
    }
    if (v.headersReturn !== void 0) {
      tBi_s8eky2.fn(v.headersReturn, Ser);
      Ser.setBitMask(bmI0, 2 & 7);
    }
    if (v.linkedFnIds !== void 0) {
      tBi_Ei8qua.fn(v.linkedFnIds, Ser);
      Ser.setBitMask(bmI0, 3 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_Ei8qua": { isNoop: false, typeName: "array", fnID: "tBi", jitFnHash: "tBi_Ei8qua", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_Ei8qua(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {Ser.serString(v[i0]);}\n ; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_Ei8qua(utl) {
  return function tBi_Ei8qua(v, Ser) {
    Ser.view.setUint32(Ser.index, v.length, 1);
    Ser.index += 4;
    for (let i0 = 0; i0 < v.length; i0++) {
      Ser.serString(v[i0]);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "tBi", jitFnHash: "tBi_VJxRzx", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_hxdrPr = utl.getJIT("tBi_hxdrPr"); return function tBi_VJxRzx(v,Ser){\nconst bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.runOnError !== undefined) {Ser.view.setUint8(Ser.index++, !!v.runOnError);Ser.setBitMask(bmI0, 0 & 7)}if (v.validateParams !== undefined) {Ser.view.setUint8(Ser.index++, !!v.validateParams);Ser.setBitMask(bmI0, 1 & 7)}if (v.validateReturn !== undefined) {Ser.view.setUint8(Ser.index++, !!v.validateReturn);Ser.setBitMask(bmI0, 2 & 7)}if (v.description !== undefined) {Ser.serString(v.description);Ser.setBitMask(bmI0, 3 & 7)}if (v.serializer !== undefined) {tBi_hxdrPr.fn(v.serializer,Ser);Ser.setBitMask(bmI0, 4 & 7)} return Ser}', jitDependencies: ["tBi_hxdrPr"], pureFnDependencies: [], createJitFn: function get_tBi_VJxRzx(utl) {
  const tBi_hxdrPr = utl.getJIT("tBi_hxdrPr");
  return function tBi_VJxRzx(v, Ser) {
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
      tBi_hxdrPr.fn(v.serializer, Ser);
      Ser.setBitMask(bmI0, 4 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "tBi", jitFnHash: "tBi_hxdrPr", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_hxdrPr(v,Ser){if (v === "json") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "binary") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "stringifyJson") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);} return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_hxdrPr(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_hxdrPr(v, Ser) {
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
}, fn: void 0 }, "tBi_s8eky2": { isNoop: false, typeName: "HeadersMetaData", fnID: "tBi", jitFnHash: "tBi_s8eky2", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua"); return function tBi_s8eky2(v,Ser){tBi_Ei8qua.fn(v.headerNames,Ser);Ser.serString(v.jitHash);\n; return Ser}', jitDependencies: ["tBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_tBi_s8eky2(utl) {
  const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");
  return function tBi_s8eky2(v, Ser) {
    tBi_Ei8qua.fn(v.headerNames, Ser);
    Ser.serString(v.jitHash);
    return Ser;
  };
}, fn: void 0 }, "tBi_cuUMAa": { isNoop: false, typeName: "FnsDataCache", fnID: "tBi", jitFnHash: "tBi_cuUMAa", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_vnf9tn = utl.getJIT("tBi_vnf9tn"); return function tBi_cuUMAa(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); tBi_vnf9tn.fn(v[p0],Ser); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}', jitDependencies: ["tBi_vnf9tn"], pureFnDependencies: [], createJitFn: function get_tBi_cuUMAa(utl) {
  const tBi_vnf9tn = utl.getJIT("tBi_vnf9tn");
  return function tBi_cuUMAa(v, Ser) {
    let cnt0 = 0;
    const piI0 = Ser.index;
    Ser.index += 4;
    for (const p0 in v) {
      Ser.serString(p0);
      tBi_vnf9tn.fn(v[p0], Ser);
      cnt0++;
    }
    Ser.view.setUint32(piI0, cnt0, 1);
    return Ser;
  };
}, fn: void 0 }, "tBi_vnf9tn": { isNoop: false, typeName: "JitCompiledFnData", fnID: "tBi", jitFnHash: "tBi_vnf9tn", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_gCQYSg = utl.getJIT("tBi_gCQYSg");\nconst tBi_Ei8qua = utl.getJIT("tBi_Ei8qua"); return function tBi_vnf9tn(v,Ser){Ser.serString(v.typeName);Ser.serString(v.fnID);Ser.serString(v.jitFnHash);tBi_gCQYSg.fn(v.args,Ser);tBi_gCQYSg.fn(v.defaultParamValues,Ser);Ser.serString(v.code);tBi_Ei8qua.fn(v.jitDependencies,Ser);tBi_Ei8qua.fn(v.pureFnDependencies,Ser);\nconst bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.isNoop !== undefined) {Ser.view.setUint8(Ser.index++, !!v.isNoop);Ser.setBitMask(bmI0, 0 & 7)}if (v.paramNames !== undefined) {tBi_Ei8qua.fn(v.paramNames,Ser);Ser.setBitMask(bmI0, 1 & 7)} return Ser}', jitDependencies: ["tBi_gCQYSg", "tBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_tBi_vnf9tn(utl) {
  const tBi_gCQYSg = utl.getJIT("tBi_gCQYSg");
  const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");
  return function tBi_vnf9tn(v, Ser) {
    Ser.serString(v.typeName);
    Ser.serString(v.fnID);
    Ser.serString(v.jitFnHash);
    tBi_gCQYSg.fn(v.args, Ser);
    tBi_gCQYSg.fn(v.defaultParamValues, Ser);
    Ser.serString(v.code);
    tBi_Ei8qua.fn(v.jitDependencies, Ser);
    tBi_Ei8qua.fn(v.pureFnDependencies, Ser);
    const bmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.isNoop !== void 0) {
      Ser.view.setUint8(Ser.index++, !!v.isNoop);
      Ser.setBitMask(bmI0, 0 & 7);
    }
    if (v.paramNames !== void 0) {
      tBi_Ei8qua.fn(v.paramNames, Ser);
      Ser.setBitMask(bmI0, 1 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_gCQYSg": { isNoop: false, typeName: "JitFnArgs", fnID: "tBi", jitFnHash: "tBi_gCQYSg", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_gCQYSg(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); Ser.serString(v[p0]); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_gCQYSg(utl) {
  return function tBi_gCQYSg(v, Ser) {
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
}, fn: void 0 }, "tBi_mkeGCe": { isNoop: false, typeName: "PureFnsDataCache", fnID: "tBi", jitFnHash: "tBi_mkeGCe", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_FX3Pr5 = utl.getJIT("tBi_FX3Pr5"); return function tBi_mkeGCe(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); tBi_FX3Pr5.fn(v[p0],Ser); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}', jitDependencies: ["tBi_FX3Pr5"], pureFnDependencies: [], createJitFn: function get_tBi_mkeGCe(utl) {
  const tBi_FX3Pr5 = utl.getJIT("tBi_FX3Pr5");
  return function tBi_mkeGCe(v, Ser) {
    let cnt0 = 0;
    const piI0 = Ser.index;
    Ser.index += 4;
    for (const p0 in v) {
      Ser.serString(p0);
      tBi_FX3Pr5.fn(v[p0], Ser);
      cnt0++;
    }
    Ser.view.setUint32(piI0, cnt0, 1);
    return Ser;
  };
}, fn: void 0 }, "tBi_FX3Pr5": { isNoop: false, typeName: "Record", fnID: "tBi", jitFnHash: "tBi_FX3Pr5", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_QqGqA2 = utl.getJIT("tBi_QqGqA2"); return function tBi_FX3Pr5(v,Ser){\n let cnt0 = 0; const piI0 = Ser.index; Ser.index += 4;\n for (const p0 in v) {Ser.serString(p0); tBi_QqGqA2.fn(v[p0],Ser); cnt0++;}\n Ser.view.setUint32(piI0, cnt0, 1);\n ; return Ser}', jitDependencies: ["tBi_QqGqA2"], pureFnDependencies: [], createJitFn: function get_tBi_FX3Pr5(utl) {
  const tBi_QqGqA2 = utl.getJIT("tBi_QqGqA2");
  return function tBi_FX3Pr5(v, Ser) {
    let cnt0 = 0;
    const piI0 = Ser.index;
    Ser.index += 4;
    for (const p0 in v) {
      Ser.serString(p0);
      tBi_QqGqA2.fn(v[p0], Ser);
      cnt0++;
    }
    Ser.view.setUint32(piI0, cnt0, 1);
    return Ser;
  };
}, fn: void 0 }, "tBi_QqGqA2": { isNoop: false, typeName: "PureFunctionData", fnID: "tBi", jitFnHash: "tBi_QqGqA2", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua"); return function tBi_QqGqA2(v,Ser){Ser.serString(v.namespace);tBi_Ei8qua.fn(v.paramNames,Ser);Ser.serString(v.code);Ser.serString(v.fnName);Ser.serString(v.bodyHash);tBi_Ei8qua.fn(v.pureFnDependencies,Ser);\n; return Ser}', jitDependencies: ["tBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_tBi_QqGqA2(utl) {
  const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");
  return function tBi_QqGqA2(v, Ser) {
    Ser.serString(v.namespace);
    tBi_Ei8qua.fn(v.paramNames, Ser);
    Ser.serString(v.code);
    Ser.serString(v.fnName);
    Ser.serString(v.bodyHash);
    tBi_Ei8qua.fn(v.pureFnDependencies, Ser);
    return Ser;
  };
}, fn: void 0 }, "tBi_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "tBi", jitFnHash: "tBi_OQaagS", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr1 = "Can not encode union to binary: item does not belong to the union";
const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI"); return function tBi_OQaagS(v,Ser){;Ser.serString(v.publicMessage);
const bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)
if (v.id !== undefined) {if (Number.isFinite(v.id)) {Ser.view.setUint8(Ser.index++, 0);Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));}else if (typeof v.id === 'string') {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.id);}else {throw new Error(uErr1);};Ser.setBitMask(bmI0, 0 & 7)}if (v.errorData !== undefined) {tBi_WEWIGI.fn(v.errorData,Ser);Ser.setBitMask(bmI0, 1 & 7)}if (v.statusCode !== undefined) {Ser.view.setFloat64(Ser.index,v.statusCode, 1, (Ser.index += 8));Ser.setBitMask(bmI0, 2 & 7)} return Ser}`, jitDependencies: ["tBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_tBi_OQaagS(utl) {
  const uErr1 = "Can not encode union to binary: item does not belong to the union";
  const tBi_WEWIGI = utl.getJIT("tBi_WEWIGI");
  return function tBi_OQaagS(v, Ser) {
    Ser.serString(v.publicMessage);
    const bmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.id !== void 0) {
      if (Number.isFinite(v.id)) {
        Ser.view.setUint8(Ser.index++, 0);
        Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
      } else if (typeof v.id === "string") {
        Ser.view.setUint8(Ser.index++, 1);
        Ser.serString(v.id);
      } else {
        throw new Error(uErr1);
      }
      Ser.setBitMask(bmI0, 0 & 7);
    }
    if (v.errorData !== void 0) {
      tBi_WEWIGI.fn(v.errorData, Ser);
      Ser.setBitMask(bmI0, 1 & 7);
    }
    if (v.statusCode !== void 0) {
      Ser.view.setFloat64(Ser.index, v.statusCode, 1, Ser.index += 8);
      Ser.setBitMask(bmI0, 2 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "fBi_emWGIa": { isNoop: false, typeName: "union", fnID: "fBi", jitFnHash: "fBi_emWGIa", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index";\nconst fBi_lpbTXn = utl.getJIT("fBi_lpbTXn");\nconst fBi_OQaagS = utl.getJIT("fBi_OQaagS"); return function fBi_emWGIa(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = fBi_lpbTXn.fn(undefined,Des)}else if (dec0 === 1) {ret = fBi_OQaagS.fn(undefined,Des)}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: ["fBi_lpbTXn", "fBi_OQaagS"], pureFnDependencies: [], createJitFn: function get_fBi_emWGIa(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  const fBi_lpbTXn = utl.getJIT("fBi_lpbTXn");
  const fBi_OQaagS = utl.getJIT("fBi_OQaagS");
  return function fBi_emWGIa(ret, Des) {
    const dec0 = Des.view.getUint8(Des.index++);
    if (dec0 === 0) {
      ret = fBi_lpbTXn.fn(void 0, Des);
    } else if (dec0 === 1) {
      ret = fBi_OQaagS.fn(void 0, Des);
    } else {
      throw new Error(uErr0);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_lpbTXn": { isNoop: false, typeName: "SerializableMethodsData", fnID: "fBi", jitFnHash: "fBi_lpbTXn", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_TZrLNn = utl.getJIT("fBi_TZrLNn");\nconst fBi_cuUMAa = utl.getJIT("fBi_cuUMAa");\nconst fBi_mkeGCe = utl.getJIT("fBi_mkeGCe"); return function fBi_lpbTXn(ret,Des){return {methods:fBi_TZrLNn.fn(undefined,Des),deps:fBi_cuUMAa.fn(undefined,Des),purFnDeps:fBi_mkeGCe.fn(undefined,Des)}}', jitDependencies: ["fBi_TZrLNn", "fBi_cuUMAa", "fBi_mkeGCe"], pureFnDependencies: [], createJitFn: function get_fBi_lpbTXn(utl) {
  const fBi_TZrLNn = utl.getJIT("fBi_TZrLNn");
  const fBi_cuUMAa = utl.getJIT("fBi_cuUMAa");
  const fBi_mkeGCe = utl.getJIT("fBi_mkeGCe");
  return function fBi_lpbTXn(ret, Des) {
    return { methods: fBi_TZrLNn.fn(void 0, Des), deps: fBi_cuUMAa.fn(void 0, Des), purFnDeps: fBi_mkeGCe.fn(void 0, Des) };
  };
}, fn: void 0 }, "fBi_TZrLNn": { isNoop: false, typeName: "MethodsCache", fnID: "fBi", jitFnHash: "fBi_TZrLNn", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_ecqqc8 = utl.getJIT("fBi_ecqqc8"); return function fBi_TZrLNn(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_ecqqc8.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_ecqqc8"], pureFnDependencies: [], createJitFn: function get_fBi_TZrLNn(utl) {
  const fBi_ecqqc8 = utl.getJIT("fBi_ecqqc8");
  return function fBi_TZrLNn(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = fBi_ecqqc8.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_ecqqc8": { isNoop: false, typeName: "MethodWithOptions", fnID: "fBi", jitFnHash: "fBi_ecqqc8", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");\nconst fBi_VJxRzx = utl.getJIT("fBi_VJxRzx");\nconst fBi_s8eky2 = utl.getJIT("fBi_s8eky2"); return function fBi_ecqqc8(ret,Des){ret = {type:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),id:Des.desString(),isAsync:Des.view.getUint8(Des.index++) === 1,hasReturnData:Des.view.getUint8(Des.index++) === 1,paramsJitHash:Des.desString(),returnJitHash:Des.desString(),pointer:fBi_Ei8qua.fn(undefined,Des),nestLevel:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),options:fBi_VJxRzx.fn(undefined,Des)}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.paramNames = fBi_Ei8qua.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.headersParam = fBi_s8eky2.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.headersReturn = fBi_s8eky2.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {ret.linkedFnIds = fBi_Ei8qua.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_Ei8qua", "fBi_VJxRzx", "fBi_s8eky2"], pureFnDependencies: [], createJitFn: function get_fBi_ecqqc8(utl) {
  const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");
  const fBi_VJxRzx = utl.getJIT("fBi_VJxRzx");
  const fBi_s8eky2 = utl.getJIT("fBi_s8eky2");
  return function fBi_ecqqc8(ret, Des) {
    ret = { type: Des.view.getFloat64(Des.index, 1, Des.index += 8), id: Des.desString(), isAsync: Des.view.getUint8(Des.index++) === 1, hasReturnData: Des.view.getUint8(Des.index++) === 1, paramsJitHash: Des.desString(), returnJitHash: Des.desString(), pointer: fBi_Ei8qua.fn(void 0, Des), nestLevel: Des.view.getFloat64(Des.index, 1, Des.index += 8), options: fBi_VJxRzx.fn(void 0, Des) };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      ret.paramNames = fBi_Ei8qua.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.headersParam = fBi_s8eky2.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (2 & 7)) {
      ret.headersReturn = fBi_s8eky2.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (3 & 7)) {
      ret.linkedFnIds = fBi_Ei8qua.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_Ei8qua": { isNoop: false, typeName: "array", fnID: "fBi", jitFnHash: "fBi_Ei8qua", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_Ei8qua(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = Des.desString();}\n ; return ret}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_Ei8qua(utl) {
  return function fBi_Ei8qua(ret, Des) {
    const arrL0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = new Array(arrL0);
    for (let i0 = 0; i0 < arrL0; i0++) {
      ret[i0] = Des.desString();
    }
    return ret;
  };
}, fn: void 0 }, "fBi_VJxRzx": { isNoop: false, typeName: "RemoteMethodOpts", fnID: "fBi", jitFnHash: "fBi_VJxRzx", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_hxdrPr = utl.getJIT("fBi_hxdrPr"); return function fBi_VJxRzx(ret,Des){ret = {}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.runOnError = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.validateParams = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.validateReturn = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (3 & 7))) {ret.description = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (4 & 7))) {ret.serializer = fBi_hxdrPr.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_hxdrPr"], pureFnDependencies: [], createJitFn: function get_fBi_VJxRzx(utl) {
  const fBi_hxdrPr = utl.getJIT("fBi_hxdrPr");
  return function fBi_VJxRzx(ret, Des) {
    ret = {};
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      ret.runOnError = Des.view.getUint8(Des.index++) === 1;
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.validateParams = Des.view.getUint8(Des.index++) === 1;
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (2 & 7)) {
      ret.validateReturn = Des.view.getUint8(Des.index++) === 1;
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (3 & 7)) {
      ret.description = Des.desString();
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (4 & 7)) {
      ret.serializer = fBi_hxdrPr.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_hxdrPr": { isNoop: false, typeName: "SerializerMode", fnID: "fBi", jitFnHash: "fBi_hxdrPr", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_hxdrPr(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = "json"}else if (dec0 === 1) {ret = "binary"}else if (dec0 === 2) {ret = "stringifyJson"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_hxdrPr(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_hxdrPr(ret, Des) {
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
}, fn: void 0 }, "fBi_s8eky2": { isNoop: false, typeName: "HeadersMetaData", fnID: "fBi", jitFnHash: "fBi_s8eky2", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua"); return function fBi_s8eky2(ret,Des){return {headerNames:fBi_Ei8qua.fn(undefined,Des),jitHash:Des.desString()}}', jitDependencies: ["fBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_fBi_s8eky2(utl) {
  const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");
  return function fBi_s8eky2(ret, Des) {
    return { headerNames: fBi_Ei8qua.fn(void 0, Des), jitHash: Des.desString() };
  };
}, fn: void 0 }, "fBi_cuUMAa": { isNoop: false, typeName: "FnsDataCache", fnID: "fBi", jitFnHash: "fBi_cuUMAa", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_vnf9tn = utl.getJIT("fBi_vnf9tn"); return function fBi_cuUMAa(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_vnf9tn.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_vnf9tn"], pureFnDependencies: [], createJitFn: function get_fBi_cuUMAa(utl) {
  const fBi_vnf9tn = utl.getJIT("fBi_vnf9tn");
  return function fBi_cuUMAa(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = fBi_vnf9tn.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_vnf9tn": { isNoop: false, typeName: "JitCompiledFnData", fnID: "fBi", jitFnHash: "fBi_vnf9tn", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_gCQYSg = utl.getJIT("fBi_gCQYSg");\nconst fBi_Ei8qua = utl.getJIT("fBi_Ei8qua"); return function fBi_vnf9tn(ret,Des){ret = {typeName:Des.desString(),fnID:Des.desString(),jitFnHash:Des.desString(),args:fBi_gCQYSg.fn(undefined,Des),defaultParamValues:fBi_gCQYSg.fn(undefined,Des),code:Des.desString(),jitDependencies:fBi_Ei8qua.fn(undefined,Des),pureFnDependencies:fBi_Ei8qua.fn(undefined,Des)}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.isNoop = Des.view.getUint8(Des.index++) === 1;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.paramNames = fBi_Ei8qua.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_gCQYSg", "fBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_fBi_vnf9tn(utl) {
  const fBi_gCQYSg = utl.getJIT("fBi_gCQYSg");
  const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");
  return function fBi_vnf9tn(ret, Des) {
    ret = { typeName: Des.desString(), fnID: Des.desString(), jitFnHash: Des.desString(), args: fBi_gCQYSg.fn(void 0, Des), defaultParamValues: fBi_gCQYSg.fn(void 0, Des), code: Des.desString(), jitDependencies: fBi_Ei8qua.fn(void 0, Des), pureFnDependencies: fBi_Ei8qua.fn(void 0, Des) };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      ret.isNoop = Des.view.getUint8(Des.index++) === 1;
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.paramNames = fBi_Ei8qua.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_gCQYSg": { isNoop: false, typeName: "JitFnArgs", fnID: "fBi", jitFnHash: "fBi_gCQYSg", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_gCQYSg(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = Des.desString();} return ret}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_gCQYSg(utl) {
  return function fBi_gCQYSg(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = Des.desString();
    }
    return ret;
  };
}, fn: void 0 }, "fBi_mkeGCe": { isNoop: false, typeName: "PureFnsDataCache", fnID: "fBi", jitFnHash: "fBi_mkeGCe", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_FX3Pr5 = utl.getJIT("fBi_FX3Pr5"); return function fBi_mkeGCe(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_FX3Pr5.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_FX3Pr5"], pureFnDependencies: [], createJitFn: function get_fBi_mkeGCe(utl) {
  const fBi_FX3Pr5 = utl.getJIT("fBi_FX3Pr5");
  return function fBi_mkeGCe(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = fBi_FX3Pr5.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_FX3Pr5": { isNoop: false, typeName: "Record", fnID: "fBi", jitFnHash: "fBi_FX3Pr5", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_QqGqA2 = utl.getJIT("fBi_QqGqA2"); return function fBi_FX3Pr5(ret,Des){const cnt0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = {}; for (let propI0 = 0; propI0 < cnt0; propI0++) {const p0 = Des.desSafePropName();ret[p0] = fBi_QqGqA2.fn(undefined,Des);} return ret}', jitDependencies: ["fBi_QqGqA2"], pureFnDependencies: [], createJitFn: function get_fBi_FX3Pr5(utl) {
  const fBi_QqGqA2 = utl.getJIT("fBi_QqGqA2");
  return function fBi_FX3Pr5(ret, Des) {
    const cnt0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = {};
    for (let propI0 = 0; propI0 < cnt0; propI0++) {
      const p0 = Des.desSafePropName();
      ret[p0] = fBi_QqGqA2.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_QqGqA2": { isNoop: false, typeName: "PureFunctionData", fnID: "fBi", jitFnHash: "fBi_QqGqA2", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua"); return function fBi_QqGqA2(ret,Des){return {namespace:Des.desString(),paramNames:fBi_Ei8qua.fn(undefined,Des),code:Des.desString(),fnName:Des.desString(),bodyHash:Des.desString(),pureFnDependencies:fBi_Ei8qua.fn(undefined,Des)}}', jitDependencies: ["fBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_fBi_QqGqA2(utl) {
  const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");
  return function fBi_QqGqA2(ret, Des) {
    return { namespace: Des.desString(), paramNames: fBi_Ei8qua.fn(void 0, Des), code: Des.desString(), fnName: Des.desString(), bodyHash: Des.desString(), pureFnDependencies: fBi_Ei8qua.fn(void 0, Des) };
  };
}, fn: void 0 }, "fBi_OQaagS": { isNoop: false, typeName: "RpcError", fnID: "fBi", jitFnHash: "fBi_OQaagS", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr1 = "Can not binary decode union: invalid union index";\nconst fBi_WEWIGI = utl.getJIT("fBi_WEWIGI"); return function fBi_OQaagS(ret,Des){ret = {"mion@isΣrrθr":true,type:"rpc-metadata-not-found",publicMessage:Des.desString()}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {\n const dec1 = Des.view.getUint8(Des.index++);\n if (dec1 === 0) {ret.id = Des.view.getFloat64(Des.index, 1, (Des.index += 8))}else if (dec1 === 1) {ret.id = Des.desString()}\n else {throw new Error(uErr1)}\n ;}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.errorData = fBi_WEWIGI.fn(undefined,Des);}if (Des.view.getUint8(bimI0, 1) & (1 << (2 & 7))) {ret.statusCode = Des.view.getFloat64(Des.index, 1, (Des.index += 8));};let desFn0 = utl.getDeserializeFn("RpcError");if (desFn0) {ret = desFn0(ret)} else if (desFn0 = utl.getSerializeClass("RpcError")) {ret = new desFn0(ret)} return ret}', jitDependencies: ["fBi_WEWIGI"], pureFnDependencies: [], createJitFn: function get_fBi_OQaagS(utl) {
  const uErr1 = "Can not binary decode union: invalid union index";
  const fBi_WEWIGI = utl.getJIT("fBi_WEWIGI");
  return function fBi_OQaagS(ret, Des) {
    ret = { "mion@isΣrrθr": true, type: "rpc-metadata-not-found", publicMessage: Des.desString() };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      const dec1 = Des.view.getUint8(Des.index++);
      if (dec1 === 0) {
        ret.id = Des.view.getFloat64(Des.index, 1, Des.index += 8);
      } else if (dec1 === 1) {
        ret.id = Des.desString();
      } else {
        throw new Error(uErr1);
      }
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.errorData = fBi_WEWIGI.fn(void 0, Des);
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (2 & 7)) {
      ret.statusCode = Des.view.getFloat64(Des.index, 1, Des.index += 8);
    }
    let desFn0 = utl.getDeserializeFn("RpcError");
    if (desFn0) {
      ret = desFn0(ret);
    } else if (desFn0 = utl.getSerializeClass("RpcError")) {
      ret = new desFn0(ret);
    }
    return ret;
  };
}, fn: void 0 }, "is_hZzD9z": { isNoop: false, typeName: "params", fnID: "is", jitFnHash: "is_hZzD9z", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_hZzD9z(v){return (v.length <= 2 && typeof v[0] === 'string' && (v[1] === undefined || (typeof v[1] === 'boolean')))}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_hZzD9z(utl) {
  return function is_hZzD9z(v) {
    return v.length <= 2 && typeof v[0] === "string" && (v[1] === void 0 || typeof v[1] === "boolean");
  };
}, fn: void 0 }, "te_hZzD9z": { isNoop: false, typeName: "params", fnID: "te", jitFnHash: "te_hZzD9z", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_hZzD9z(v,pth=[],er=[]){if (v.length > 2) Iqa2M8Ms(pth,er,"params"); else {if (typeof v[0] !== 'string') Iqa2M8Ms(pth,er,"string",[0]);if (v[1] !== undefined) {if (typeof v[1] !== 'boolean') Iqa2M8Ms(pth,er,"boolean",[1]);}} return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_hZzD9z(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_hZzD9z(v, pth = [], er = []) {
    if (v.length > 2) Iqa2M8Ms(pth, er, "params");
    else {
      if (typeof v[0] !== "string") Iqa2M8Ms(pth, er, "string", [0]);
      if (v[1] !== void 0) {
        if (typeof v[1] !== "boolean") Iqa2M8Ms(pth, er, "boolean", [1]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_hZzD9z": { isNoop: false, typeName: "params", fnID: "tj", jitFnHash: "tj_hZzD9z", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_hZzD9z(v){if (v[1] === undefined ) {if (v.length > 1) v[1] = null} return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_hZzD9z(utl) {
  return function tj_hZzD9z(v) {
    if (v[1] === void 0) {
      if (v.length > 1) v[1] = null;
    }
    return v;
  };
}, fn: void 0 }, "fj_hZzD9z": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_hZzD9z", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_hZzD9z(v){if (v[1] === null ) {v[1] = undefined} return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_hZzD9z(utl) {
  return function fj_hZzD9z(v) {
    if (v[1] === null) {
      v[1] = void 0;
    }
    return v;
  };
}, fn: void 0 }, "sj_hZzD9z": { isNoop: false, typeName: "params", fnID: "sj", jitFnHash: "sj_hZzD9z", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function sj_hZzD9z(v){return '['+JSON.stringify(v[0])+(v[1] === undefined ? ','+'null' : ','+(v[1] ? 'true' : 'false'))+']'}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_hZzD9z(utl) {
  return function sj_hZzD9z(v) {
    return "[" + JSON.stringify(v[0]) + (v[1] === void 0 ? ",null" : "," + (v[1] ? "true" : "false")) + "]";
  };
}, fn: void 0 }, "tBi_hZzD9z": { isNoop: false, typeName: "params", fnID: "tBi", jitFnHash: "tBi_hZzD9z", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_hZzD9z(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v[0] !== undefined) {Ser.serString(v[0]);Ser.setBitMask(tbmI0, 0)} if (v[1] !== undefined) {Ser.view.setUint8(Ser.index++, !!v[1]);Ser.setBitMask(tbmI0, 1)} ; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_hZzD9z(utl) {
  return function tBi_hZzD9z(v, Ser) {
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
}, fn: void 0 }, "fBi_hZzD9z": { isNoop: false, typeName: "params", fnID: "fBi", jitFnHash: "fBi_hZzD9z", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_hZzD9z(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = Des.desString()} if (Des.view.getUint8(tbimI0, 1) & (1 << (1))) {ret[1] = Des.view.getUint8(Des.index++) === 1} ; return ret}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_hZzD9z(utl) {
  return function fBi_hZzD9z(ret, Des) {
    ret = [];
    const tbimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(tbimI0, 1) & 1 << 0) {
      ret[0] = Des.desString();
    }
    if (Des.view.getUint8(tbimI0, 1) & 1 << 1) {
      ret[1] = Des.view.getUint8(Des.index++) === 1;
    }
    return ret;
  };
}, fn: void 0 }, "is_nDtnjh": { isNoop: false, typeName: "string", fnID: "is", jitFnHash: "is_nDtnjh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_nDtnjh(v){return typeof v === 'string'}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_nDtnjh(utl) {
  return function is_nDtnjh(v) {
    return typeof v === "string";
  };
}, fn: void 0 }, "te_nDtnjh": { isNoop: false, typeName: "string", fnID: "te", jitFnHash: "te_nDtnjh", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_nDtnjh(v,pth=[],er=[]){if (typeof v !== 'string') Iqa2M8Ms(pth,er,"string"); return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_nDtnjh(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_nDtnjh(v, pth = [], er = []) {
    if (typeof v !== "string") Iqa2M8Ms(pth, er, "string");
    return er;
  };
}, fn: void 0 }, "tj_nDtnjh": { isNoop: true, typeName: "string", fnID: "tj", jitFnHash: "tj_nDtnjh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_nDtnjh(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_nDtnjh(utl) {
  return function tj_nDtnjh(v) {
    return v;
  };
}, fn: void 0 }, "fj_nDtnjh": { isNoop: true, typeName: "string", fnID: "fj", jitFnHash: "fj_nDtnjh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_nDtnjh(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_nDtnjh(utl) {
  return function fj_nDtnjh(v) {
    return v;
  };
}, fn: void 0 }, "sj_nDtnjh": { isNoop: false, typeName: "string", fnID: "sj", jitFnHash: "sj_nDtnjh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function sj_nDtnjh(v){return JSON.stringify(v)}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_nDtnjh(utl) {
  return function sj_nDtnjh(v) {
    return JSON.stringify(v);
  };
}, fn: void 0 }, "tBi_nDtnjh": { isNoop: false, typeName: "string", fnID: "tBi", jitFnHash: "tBi_nDtnjh", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_nDtnjh(v,Ser){Ser.serString(v); return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_nDtnjh(utl) {
  return function tBi_nDtnjh(v, Ser) {
    Ser.serString(v);
    return Ser;
  };
}, fn: void 0 }, "fBi_nDtnjh": { isNoop: false, typeName: "string", fnID: "fBi", jitFnHash: "fBi_nDtnjh", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_nDtnjh(ret,Des){return Des.desString()}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_nDtnjh(utl) {
  return function fBi_nDtnjh(ret, Des) {
    return Des.desString();
  };
}, fn: void 0 }, "is_h19ZNf": { isNoop: false, typeName: "params", fnID: "is", jitFnHash: "is_h19ZNf", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const is_tFhdZH = utl.getJIT("is_tFhdZH"); return function is_h19ZNf(v){return (v.length <= 1 && is_tFhdZH.fn(v[0]))}', jitDependencies: ["is_tFhdZH"], pureFnDependencies: [], createJitFn: function get_is_h19ZNf(utl) {
  const is_tFhdZH = utl.getJIT("is_tFhdZH");
  return function is_h19ZNf(v) {
    return v.length <= 1 && is_tFhdZH.fn(v[0]);
  };
}, fn: void 0 }, "is_tFhdZH": { isNoop: false, typeName: "User", fnID: "is", jitFnHash: "is_tFhdZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_bBXtdP = utl.getJIT("is_bBXtdP");
const is_CGMEgg = utl.getJIT("is_CGMEgg");
const is_aic2mg = utl.getJIT("is_aic2mg");
const is_qU6qiY = utl.getJIT("is_qU6qiY");
const is_Pp7DlV = utl.getJIT("is_Pp7DlV");
const is_b1N57x = utl.getJIT("is_b1N57x"); return function is_tFhdZH(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) && is_bBXtdP.fn(v.role) && is_CGMEgg.fn(v.status) && is_aic2mg.fn(v.address) && is_qU6qiY.fn(v.paymentMethods) && is_Pp7DlV.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_b1N57x.fn(v.tags))}`, jitDependencies: ["is_bBXtdP", "is_CGMEgg", "is_aic2mg", "is_qU6qiY", "is_Pp7DlV", "is_b1N57x"], pureFnDependencies: [], createJitFn: function get_is_tFhdZH(utl) {
  const is_bBXtdP = utl.getJIT("is_bBXtdP");
  const is_CGMEgg = utl.getJIT("is_CGMEgg");
  const is_aic2mg = utl.getJIT("is_aic2mg");
  const is_qU6qiY = utl.getJIT("is_qU6qiY");
  const is_Pp7DlV = utl.getJIT("is_Pp7DlV");
  const is_b1N57x = utl.getJIT("is_b1N57x");
  return function is_tFhdZH(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.username === "string" && typeof v.email === "string" && (typeof v.profile === "object" && v.profile !== null && typeof v.profile.firstName === "string" && typeof v.profile.lastName === "string" && typeof v.profile.displayName === "string" && (v.profile.bio === void 0 || typeof v.profile.bio === "string") && (v.profile.avatarUrl === void 0 || typeof v.profile.avatarUrl === "string") && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) && is_bBXtdP.fn(v.role) && is_CGMEgg.fn(v.status) && is_aic2mg.fn(v.address) && is_qU6qiY.fn(v.paymentMethods) && is_Pp7DlV.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === void 0 || v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())) && is_b1N57x.fn(v.tags);
  };
}, fn: void 0 }, "is_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "is", jitFnHash: "is_bBXtdP", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ' return function is_bBXtdP(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_bBXtdP(utl) {
  return function is_bBXtdP(v) {
    return v === "admin" || v === "user" || v === "guest" || v === "moderator";
  };
}, fn: void 0 }, "is_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "is", jitFnHash: "is_CGMEgg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ' return function is_CGMEgg(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_CGMEgg(utl) {
  return function is_CGMEgg(v) {
    return v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated";
  };
}, fn: void 0 }, "is_aic2mg": { isNoop: false, typeName: "Address", fnID: "is", jitFnHash: "is_aic2mg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_aic2mg(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string')}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_aic2mg(utl) {
  return function is_aic2mg(v) {
    return typeof v === "object" && v !== null && typeof v.street === "string" && typeof v.city === "string" && typeof v.state === "string" && typeof v.zipCode === "string" && typeof v.country === "string";
  };
}, fn: void 0 }, "is_qU6qiY": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_qU6qiY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const is_BTvJh1 = utl.getJIT("is_BTvJh1"); return function is_qU6qiY(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = is_BTvJh1.fn(v[i0]);\n if (!(res0)) return false;\n }\n return true;\n }', jitDependencies: ["is_BTvJh1"], pureFnDependencies: [], createJitFn: function get_is_qU6qiY(utl) {
  const is_BTvJh1 = utl.getJIT("is_BTvJh1");
  return function is_qU6qiY(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = is_BTvJh1.fn(v[i0]);
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "is", jitFnHash: "is_BTvJh1", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function is_BTvJh1(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string') || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string') || (v.type === "paypal" && typeof v.email === 'string'))))}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_BTvJh1(utl) {
  return function is_BTvJh1(v) {
    return typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" || v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" || v.type === "paypal" && typeof v.email === "string");
  };
}, fn: void 0 }, "is_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "is", jitFnHash: "is_Pp7DlV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_gsmM62 = utl.getJIT("is_gsmM62"); return function is_Pp7DlV(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_gsmM62.fn(v.notifications))}`, jitDependencies: ["is_gsmM62"], pureFnDependencies: [], createJitFn: function get_is_Pp7DlV(utl) {
  const is_gsmM62 = utl.getJIT("is_gsmM62");
  return function is_Pp7DlV(v) {
    return typeof v === "object" && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === "string" && typeof v.timezone === "string" && is_gsmM62.fn(v.notifications);
  };
}, fn: void 0 }, "is_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "is", jitFnHash: "is_gsmM62", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function is_gsmM62(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly"))}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_gsmM62(utl) {
  return function is_gsmM62(v) {
    return typeof v === "object" && v !== null && typeof v.email === "boolean" && typeof v.sms === "boolean" && typeof v.push === "boolean" && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly");
  };
}, fn: void 0 }, "te_h19ZNf": { isNoop: false, typeName: "params", fnID: "te", jitFnHash: "te_h19ZNf", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const te_tFhdZH = utl.getJIT("te_tFhdZH");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_h19ZNf(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_tFhdZH.fn(v[0],pth,er); pth.splice(-1);} return er}', jitDependencies: ["te_tFhdZH"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_h19ZNf(utl) {
  const te_tFhdZH = utl.getJIT("te_tFhdZH");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_h19ZNf(v, pth = [], er = []) {
    if (v.length > 1) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_tFhdZH.fn(v[0], pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_tFhdZH": { isNoop: false, typeName: "User", fnID: "te", jitFnHash: "te_tFhdZH", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_bBXtdP = utl.getJIT("te_bBXtdP");
const te_CGMEgg = utl.getJIT("te_CGMEgg");
const te_aic2mg = utl.getJIT("te_aic2mg");
const te_qU6qiY = utl.getJIT("te_qU6qiY");
const te_Pp7DlV = utl.getJIT("te_Pp7DlV");
const te_b1N57x = utl.getJIT("te_b1N57x"); return function te_tFhdZH(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.username !== 'string') Iqa2M8Ms(pth,er,"string",["username"]);if (typeof v.email !== 'string') Iqa2M8Ms(pth,er,"string",["email"]);
 if (!(typeof v.profile === 'object' && v.profile !== null)) {
 Iqa2M8Ms(pth,er,"object",["profile"]);
 } else {
 if (typeof v.profile.firstName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","firstName"]);if (typeof v.profile.lastName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","lastName"]);if (typeof v.profile.displayName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","displayName"]);if (v.profile.bio !== undefined) {if (typeof v.profile.bio !== 'string') Iqa2M8Ms(pth,er,"string",["profile","bio"]);};if (v.profile.avatarUrl !== undefined) {if (typeof v.profile.avatarUrl !== 'string') Iqa2M8Ms(pth,er,"string",["profile","avatarUrl"]);};if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth,er,"date",["profile","dateOfBirth"]);
 }
 ;pth.push("role"); te_bBXtdP.fn(v.role,pth,er); pth.splice(-1);pth.push("status"); te_CGMEgg.fn(v.status,pth,er); pth.splice(-1);pth.push("address"); te_aic2mg.fn(v.address,pth,er); pth.splice(-1);pth.push("paymentMethods"); te_qU6qiY.fn(v.paymentMethods,pth,er); pth.splice(-1);pth.push("preferences"); te_Pp7DlV.fn(v.preferences,pth,er); pth.splice(-1);if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth,er,"date",["createdAt"]);if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth,er,"date",["updatedAt"]);if (v.lastLoginAt !== undefined) {if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth,er,"date",["lastLoginAt"]);};pth.push("tags"); te_b1N57x.fn(v.tags,pth,er); pth.splice(-1);
 }
 ; return er}`, jitDependencies: ["te_bBXtdP", "te_CGMEgg", "te_aic2mg", "te_qU6qiY", "te_Pp7DlV", "te_b1N57x"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_tFhdZH(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_bBXtdP = utl.getJIT("te_bBXtdP");
  const te_CGMEgg = utl.getJIT("te_CGMEgg");
  const te_aic2mg = utl.getJIT("te_aic2mg");
  const te_qU6qiY = utl.getJIT("te_qU6qiY");
  const te_Pp7DlV = utl.getJIT("te_Pp7DlV");
  const te_b1N57x = utl.getJIT("te_b1N57x");
  return function te_tFhdZH(v, pth = [], er = []) {
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
      }
      pth.push("role");
      te_bBXtdP.fn(v.role, pth, er);
      pth.splice(-1);
      pth.push("status");
      te_CGMEgg.fn(v.status, pth, er);
      pth.splice(-1);
      pth.push("address");
      te_aic2mg.fn(v.address, pth, er);
      pth.splice(-1);
      pth.push("paymentMethods");
      te_qU6qiY.fn(v.paymentMethods, pth, er);
      pth.splice(-1);
      pth.push("preferences");
      te_Pp7DlV.fn(v.preferences, pth, er);
      pth.splice(-1);
      if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["createdAt"]);
      if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
      if (v.lastLoginAt !== void 0) {
        if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
      }
      pth.push("tags");
      te_b1N57x.fn(v.tags, pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "te", jitFnHash: "te_bBXtdP", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_bBXtdP = utl.getJIT("is_bBXtdP");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_bBXtdP(v,pth=[],er=[]){if (!is_bBXtdP.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_bBXtdP"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_bBXtdP(utl) {
  const is_bBXtdP = utl.getJIT("is_bBXtdP");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_bBXtdP(v, pth = [], er = []) {
    if (!is_bBXtdP.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "te", jitFnHash: "te_CGMEgg", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_CGMEgg = utl.getJIT("is_CGMEgg");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_CGMEgg(v,pth=[],er=[]){if (!is_CGMEgg.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_CGMEgg"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_CGMEgg(utl) {
  const is_CGMEgg = utl.getJIT("is_CGMEgg");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_CGMEgg(v, pth = [], er = []) {
    if (!is_CGMEgg.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_aic2mg": { isNoop: false, typeName: "Address", fnID: "te", jitFnHash: "te_aic2mg", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_aic2mg(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_aic2mg(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_aic2mg(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.street !== "string") Iqa2M8Ms(pth, er, "string", ["street"]);
      if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
      if (typeof v.state !== "string") Iqa2M8Ms(pth, er, "string", ["state"]);
      if (typeof v.zipCode !== "string") Iqa2M8Ms(pth, er, "string", ["zipCode"]);
      if (typeof v.country !== "string") Iqa2M8Ms(pth, er, "string", ["country"]);
    }
    return er;
  };
}, fn: void 0 }, "te_qU6qiY": { isNoop: false, typeName: "array", fnID: "te", jitFnHash: "te_qU6qiY", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const te_BTvJh1 = utl.getJIT("te_BTvJh1");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_qU6qiY(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_BTvJh1.fn(v[i0],pth,er); pth.splice(-1);}} return er}', jitDependencies: ["te_BTvJh1"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_qU6qiY(utl) {
  const te_BTvJh1 = utl.getJIT("te_BTvJh1");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_qU6qiY(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        pth.push(i0);
        te_BTvJh1.fn(v[i0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "te", jitFnHash: "te_BTvJh1", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_BTvJh1 = utl.getJIT("is_BTvJh1");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_BTvJh1(v,pth=[],er=[]){if (!is_BTvJh1.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_BTvJh1"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_BTvJh1(utl) {
  const is_BTvJh1 = utl.getJIT("is_BTvJh1");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_BTvJh1(v, pth = [], er = []) {
    if (!is_BTvJh1.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "te", jitFnHash: "te_Pp7DlV", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_gsmM62 = utl.getJIT("te_gsmM62"); return function te_Pp7DlV(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_gsmM62.fn(v.notifications,pth,er); pth.splice(-1);
 }
 ; return er}`, jitDependencies: ["te_gsmM62"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_Pp7DlV(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_gsmM62 = utl.getJIT("te_gsmM62");
  return function te_Pp7DlV(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth, er, "union", ["theme"]);
      if (typeof v.language !== "string") Iqa2M8Ms(pth, er, "string", ["language"]);
      if (typeof v.timezone !== "string") Iqa2M8Ms(pth, er, "string", ["timezone"]);
      pth.push("notifications");
      te_gsmM62.fn(v.notifications, pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "te", jitFnHash: "te_gsmM62", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_gsmM62(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_gsmM62(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_gsmM62(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.email !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["email"]);
      if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
      if (typeof v.push !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["push"]);
      if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth, er, "union", ["frequency"]);
    }
    return er;
  };
}, fn: void 0 }, "tj_h19ZNf": { isNoop: false, typeName: "params", fnID: "tj", jitFnHash: "tj_h19ZNf", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_tFhdZH = utl.getJIT("tj_tFhdZH"); return function tj_h19ZNf(v){v[0] = tj_tFhdZH.fn(v[0]); return v}', jitDependencies: ["tj_tFhdZH"], pureFnDependencies: [], createJitFn: function get_tj_h19ZNf(utl) {
  const tj_tFhdZH = utl.getJIT("tj_tFhdZH");
  return function tj_h19ZNf(v) {
    v[0] = tj_tFhdZH.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "tj_tFhdZH": { isNoop: false, typeName: "User", fnID: "tj", jitFnHash: "tj_tFhdZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_bBXtdP = utl.getJIT("tj_bBXtdP");\nconst tj_CGMEgg = utl.getJIT("tj_CGMEgg");\nconst tj_qU6qiY = utl.getJIT("tj_qU6qiY");\nconst tj_Pp7DlV = utl.getJIT("tj_Pp7DlV"); return function tj_tFhdZH(v){v.role = tj_bBXtdP.fn(v.role);v.status = tj_CGMEgg.fn(v.status);v.paymentMethods = tj_qU6qiY.fn(v.paymentMethods);v.preferences = tj_Pp7DlV.fn(v.preferences); return v}', jitDependencies: ["tj_bBXtdP", "tj_CGMEgg", "tj_qU6qiY", "tj_Pp7DlV"], pureFnDependencies: [], createJitFn: function get_tj_tFhdZH(utl) {
  const tj_bBXtdP = utl.getJIT("tj_bBXtdP");
  const tj_CGMEgg = utl.getJIT("tj_CGMEgg");
  const tj_qU6qiY = utl.getJIT("tj_qU6qiY");
  const tj_Pp7DlV = utl.getJIT("tj_Pp7DlV");
  return function tj_tFhdZH(v) {
    v.role = tj_bBXtdP.fn(v.role);
    v.status = tj_CGMEgg.fn(v.status);
    v.paymentMethods = tj_qU6qiY.fn(v.paymentMethods);
    v.preferences = tj_Pp7DlV.fn(v.preferences);
    return v;
  };
}, fn: void 0 }, "tj_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "tj", jitFnHash: "tj_bBXtdP", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_bBXtdP(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_bBXtdP(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_bBXtdP(v) {
    if (v === "admin") ;
    else if (v === "user") ;
    else if (v === "guest") ;
    else if (v === "moderator") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "tj", jitFnHash: "tj_CGMEgg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_CGMEgg(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_CGMEgg(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_CGMEgg(v) {
    if (v === "active") ;
    else if (v === "suspended") ;
    else if (v === "pending_verification") ;
    else if (v === "deactivated") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_aic2mg": { isNoop: true, typeName: "Address", fnID: "tj", jitFnHash: "tj_aic2mg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_aic2mg(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_aic2mg(utl) {
  return function tj_aic2mg(v) {
    return v;
  };
}, fn: void 0 }, "tj_qU6qiY": { isNoop: false, typeName: "array", fnID: "tj", jitFnHash: "tj_qU6qiY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_BTvJh1 = utl.getJIT("tj_BTvJh1"); return function tj_qU6qiY(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_BTvJh1.fn(v[i0]);} return v}', jitDependencies: ["tj_BTvJh1"], pureFnDependencies: [], createJitFn: function get_tj_qU6qiY(utl) {
  const tj_BTvJh1 = utl.getJIT("tj_BTvJh1");
  return function tj_qU6qiY(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = tj_BTvJh1.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "tj", jitFnHash: "tj_BTvJh1", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_BTvJh1(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) { /*noop*/}else {throw new Error(uErr0);} return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_BTvJh1(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_BTvJh1(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) ;
    else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) ;
    else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "tj", jitFnHash: "tj_Pp7DlV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union";\nconst tj_gsmM62 = utl.getJIT("tj_gsmM62"); return function tj_Pp7DlV(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_gsmM62.fn(v.notifications); return v}', jitDependencies: ["tj_gsmM62"], pureFnDependencies: [], createJitFn: function get_tj_Pp7DlV(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const tj_gsmM62 = utl.getJIT("tj_gsmM62");
  return function tj_Pp7DlV(v) {
    if (v.theme === "light") ;
    else if (v.theme === "dark") ;
    else if (v.theme === "system") ;
    else {
      throw new Error(uErr0);
    }
    v.notifications = tj_gsmM62.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "tj_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "tj", jitFnHash: "tj_gsmM62", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_gsmM62(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_gsmM62(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_gsmM62(v) {
    if (v.frequency === "immediate") ;
    else if (v.frequency === "daily") ;
    else if (v.frequency === "weekly") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "fj_h19ZNf": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_h19ZNf", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_tFhdZH = utl.getJIT("fj_tFhdZH"); return function fj_h19ZNf(v){v[0] = fj_tFhdZH.fn(v[0]); return v}', jitDependencies: ["fj_tFhdZH"], pureFnDependencies: [], createJitFn: function get_fj_h19ZNf(utl) {
  const fj_tFhdZH = utl.getJIT("fj_tFhdZH");
  return function fj_h19ZNf(v) {
    v[0] = fj_tFhdZH.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "fj_tFhdZH": { isNoop: false, typeName: "User", fnID: "fj", jitFnHash: "fj_tFhdZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_bBXtdP = utl.getJIT("fj_bBXtdP");\nconst fj_CGMEgg = utl.getJIT("fj_CGMEgg");\nconst fj_qU6qiY = utl.getJIT("fj_qU6qiY");\nconst fj_Pp7DlV = utl.getJIT("fj_Pp7DlV"); return function fj_tFhdZH(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_bBXtdP.fn(v.role);v.status = fj_CGMEgg.fn(v.status);v.paymentMethods = fj_qU6qiY.fn(v.paymentMethods);v.preferences = fj_Pp7DlV.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}', jitDependencies: ["fj_bBXtdP", "fj_CGMEgg", "fj_qU6qiY", "fj_Pp7DlV"], pureFnDependencies: [], createJitFn: function get_fj_tFhdZH(utl) {
  const fj_bBXtdP = utl.getJIT("fj_bBXtdP");
  const fj_CGMEgg = utl.getJIT("fj_CGMEgg");
  const fj_qU6qiY = utl.getJIT("fj_qU6qiY");
  const fj_Pp7DlV = utl.getJIT("fj_Pp7DlV");
  return function fj_tFhdZH(v) {
    v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);
    v.role = fj_bBXtdP.fn(v.role);
    v.status = fj_CGMEgg.fn(v.status);
    v.paymentMethods = fj_qU6qiY.fn(v.paymentMethods);
    v.preferences = fj_Pp7DlV.fn(v.preferences);
    v.createdAt = new Date(v.createdAt);
    v.updatedAt = new Date(v.updatedAt);
    if (v.lastLoginAt !== void 0) {
      v.lastLoginAt = new Date(v.lastLoginAt);
    }
    return v;
  };
}, fn: void 0 }, "fj_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "fj", jitFnHash: "fj_bBXtdP", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_bBXtdP(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_bBXtdP(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_bBXtdP(v) {
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
}, fn: void 0 }, "fj_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "fj", jitFnHash: "fj_CGMEgg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_CGMEgg(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_CGMEgg(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_CGMEgg(v) {
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
}, fn: void 0 }, "fj_aic2mg": { isNoop: true, typeName: "Address", fnID: "fj", jitFnHash: "fj_aic2mg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_aic2mg(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_aic2mg(utl) {
  return function fj_aic2mg(v) {
    return v;
  };
}, fn: void 0 }, "fj_qU6qiY": { isNoop: false, typeName: "array", fnID: "fj", jitFnHash: "fj_qU6qiY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_BTvJh1 = utl.getJIT("fj_BTvJh1"); return function fj_qU6qiY(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_BTvJh1.fn(v[i0]);} return v}', jitDependencies: ["fj_BTvJh1"], pureFnDependencies: [], createJitFn: function get_fj_qU6qiY(utl) {
  const fj_BTvJh1 = utl.getJIT("fj_BTvJh1");
  return function fj_qU6qiY(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = fj_BTvJh1.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "fj", jitFnHash: "fj_BTvJh1", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_BTvJh1(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_BTvJh1(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_BTvJh1(v) {
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
}, fn: void 0 }, "fj_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "fj", jitFnHash: "fj_Pp7DlV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index";
const fj_gsmM62 = utl.getJIT("fj_gsmM62"); return function fj_Pp7DlV(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_gsmM62.fn(v.notifications); return v}`, jitDependencies: ["fj_gsmM62"], pureFnDependencies: [], createJitFn: function get_fj_Pp7DlV(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_gsmM62 = utl.getJIT("fj_gsmM62");
  return function fj_Pp7DlV(v) {
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
    v.notifications = fj_gsmM62.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "fj_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "fj", jitFnHash: "fj_gsmM62", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_gsmM62(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_gsmM62(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_gsmM62(v) {
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
}, fn: void 0 }, "sj_h19ZNf": { isNoop: false, typeName: "params", fnID: "sj", jitFnHash: "sj_h19ZNf", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_tFhdZH = utl.getJIT("sj_tFhdZH"); return function sj_h19ZNf(v){return '['+sj_tFhdZH.fn(v[0])+']'}`, jitDependencies: ["sj_tFhdZH"], pureFnDependencies: [], createJitFn: function get_sj_h19ZNf(utl) {
  const sj_tFhdZH = utl.getJIT("sj_tFhdZH");
  return function sj_h19ZNf(v) {
    return "[" + sj_tFhdZH.fn(v[0]) + "]";
  };
}, fn: void 0 }, "sj_tFhdZH": { isNoop: false, typeName: "User", fnID: "sj", jitFnHash: "sj_tFhdZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_bBXtdP = utl.getJIT("sj_bBXtdP");
const sj_CGMEgg = utl.getJIT("sj_CGMEgg");
const sj_aic2mg = utl.getJIT("sj_aic2mg");
const sj_qU6qiY = utl.getJIT("sj_qU6qiY");
const sj_Pp7DlV = utl.getJIT("sj_Pp7DlV");
const sj_b1N57x = utl.getJIT("sj_b1N57x"); return function sj_tFhdZH(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_bBXtdP.fn(v.role)+","+'"status":'+sj_CGMEgg.fn(v.status)+","+'"address":'+sj_aic2mg.fn(v.address)+","+'"paymentMethods":'+sj_qU6qiY.fn(v.paymentMethods)+","+'"preferences":'+sj_Pp7DlV.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_b1N57x.fn(v.tags)+'}'}`, jitDependencies: ["sj_bBXtdP", "sj_CGMEgg", "sj_aic2mg", "sj_qU6qiY", "sj_Pp7DlV", "sj_b1N57x"], pureFnDependencies: [], createJitFn: function get_sj_tFhdZH(utl) {
  const sj_bBXtdP = utl.getJIT("sj_bBXtdP");
  const sj_CGMEgg = utl.getJIT("sj_CGMEgg");
  const sj_aic2mg = utl.getJIT("sj_aic2mg");
  const sj_qU6qiY = utl.getJIT("sj_qU6qiY");
  const sj_Pp7DlV = utl.getJIT("sj_Pp7DlV");
  const sj_b1N57x = utl.getJIT("sj_b1N57x");
  return function sj_tFhdZH(v) {
    return "{" + (v.lastLoginAt === void 0 ? "" : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') + '"id":' + v.id + ',"username":' + JSON.stringify(v.username) + ',"email":' + JSON.stringify(v.email) + ',"profile":{' + (v.profile.bio === void 0 ? "" : '"bio":' + JSON.stringify(v.profile.bio) + ",") + (v.profile.avatarUrl === void 0 ? "" : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") + '"firstName":' + JSON.stringify(v.profile.firstName) + ',"lastName":' + JSON.stringify(v.profile.lastName) + ',"displayName":' + JSON.stringify(v.profile.displayName) + ',"dateOfBirth":"' + v.profile.dateOfBirth.toJSON() + '"},"role":' + sj_bBXtdP.fn(v.role) + ',"status":' + sj_CGMEgg.fn(v.status) + ',"address":' + sj_aic2mg.fn(v.address) + ',"paymentMethods":' + sj_qU6qiY.fn(v.paymentMethods) + ',"preferences":' + sj_Pp7DlV.fn(v.preferences) + ',"createdAt":"' + v.createdAt.toJSON() + '","updatedAt":"' + v.updatedAt.toJSON() + '","tags":' + sj_b1N57x.fn(v.tags) + "}";
  };
}, fn: void 0 }, "sj_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "sj", jitFnHash: "sj_bBXtdP", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_bBXtdP(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_bBXtdP(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_bBXtdP(v) {
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
}, fn: void 0 }, "sj_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "sj", jitFnHash: "sj_CGMEgg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_CGMEgg(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_CGMEgg(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_CGMEgg(v) {
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
}, fn: void 0 }, "sj_aic2mg": { isNoop: false, typeName: "Address", fnID: "sj", jitFnHash: "sj_aic2mg", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function sj_aic2mg(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_aic2mg(utl) {
  return function sj_aic2mg(v) {
    return '{"street":' + JSON.stringify(v.street) + ',"city":' + JSON.stringify(v.city) + ',"state":' + JSON.stringify(v.state) + ',"zipCode":' + JSON.stringify(v.zipCode) + ',"country":' + JSON.stringify(v.country) + "}";
  };
}, fn: void 0 }, "sj_qU6qiY": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_qU6qiY", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_BTvJh1 = utl.getJIT("sj_BTvJh1"); return function sj_qU6qiY(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_BTvJh1.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`, jitDependencies: ["sj_BTvJh1"], pureFnDependencies: [], createJitFn: function get_sj_qU6qiY(utl) {
  const sj_BTvJh1 = utl.getJIT("sj_BTvJh1");
  return function sj_qU6qiY(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = sj_BTvJh1.fn(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "sj", jitFnHash: "sj_BTvJh1", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_BTvJh1(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_BTvJh1(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_BTvJh1(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"lastFourDigits":' + JSON.stringify(v.lastFourDigits) + ',"expiryMonth":' + v.expiryMonth + ',"expiryYear":' + v.expiryYear + ',"brand":' + JSON.stringify(v.brand) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"bankName":' + JSON.stringify(v.bankName) + ',"accountLastFour":' + JSON.stringify(v.accountLastFour) + ',"routingNumber":' + JSON.stringify(v.routingNumber) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"email":' + JSON.stringify(v.email) + "}";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "sj", jitFnHash: "sj_Pp7DlV", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_gsmM62 = utl.getJIT("sj_gsmM62"); return function sj_Pp7DlV(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_gsmM62.fn(v.notifications)+'}'}`, jitDependencies: ["sj_gsmM62"], pureFnDependencies: [], createJitFn: function get_sj_Pp7DlV(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_gsmM62 = utl.getJIT("sj_gsmM62");
  return function sj_Pp7DlV(v) {
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
    })() + ',"language":' + JSON.stringify(v.language) + ',"timezone":' + JSON.stringify(v.timezone) + ',"notifications":' + sj_gsmM62.fn(v.notifications) + "}";
  };
}, fn: void 0 }, "sj_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "sj", jitFnHash: "sj_gsmM62", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_gsmM62(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_gsmM62(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_gsmM62(v) {
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
}, fn: void 0 }, "tBi_h19ZNf": { isNoop: false, typeName: "params", fnID: "tBi", jitFnHash: "tBi_h19ZNf", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_tFhdZH = utl.getJIT("tBi_tFhdZH"); return function tBi_h19ZNf(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v[0] !== undefined) {tBi_tFhdZH.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} ; return Ser}', jitDependencies: ["tBi_tFhdZH"], pureFnDependencies: [], createJitFn: function get_tBi_h19ZNf(utl) {
  const tBi_tFhdZH = utl.getJIT("tBi_tFhdZH");
  return function tBi_h19ZNf(v, Ser) {
    const tbmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v[0] !== void 0) {
      tBi_tFhdZH.fn(v[0], Ser);
      Ser.setBitMask(tbmI0, 0);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_tFhdZH": { isNoop: false, typeName: "User", fnID: "tBi", jitFnHash: "tBi_tFhdZH", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_bBXtdP = utl.getJIT("tBi_bBXtdP");\nconst tBi_CGMEgg = utl.getJIT("tBi_CGMEgg");\nconst tBi_aic2mg = utl.getJIT("tBi_aic2mg");\nconst tBi_qU6qiY = utl.getJIT("tBi_qU6qiY");\nconst tBi_Pp7DlV = utl.getJIT("tBi_Pp7DlV");\nconst tBi_b1N57x = utl.getJIT("tBi_b1N57x"); return function tBi_tFhdZH(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.username);Ser.serString(v.email);Ser.serString(v.profile.firstName);Ser.serString(v.profile.lastName);Ser.serString(v.profile.displayName);Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, (Ser.index += 8));\nconst bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.profile.bio !== undefined) {Ser.serString(v.profile.bio);Ser.setBitMask(bmI0, 0 & 7)}if (v.profile.avatarUrl !== undefined) {Ser.serString(v.profile.avatarUrl);Ser.setBitMask(bmI0, 1 & 7)};tBi_bBXtdP.fn(v.role,Ser);tBi_CGMEgg.fn(v.status,Ser);tBi_aic2mg.fn(v.address,Ser);tBi_qU6qiY.fn(v.paymentMethods,Ser);tBi_Pp7DlV.fn(v.preferences,Ser);Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, (Ser.index += 8));tBi_b1N57x.fn(v.tags,Ser);\nconst bmI1 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.lastLoginAt !== undefined) {Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, (Ser.index += 8));Ser.setBitMask(bmI1, 0 & 7)} return Ser}', jitDependencies: ["tBi_bBXtdP", "tBi_CGMEgg", "tBi_aic2mg", "tBi_qU6qiY", "tBi_Pp7DlV", "tBi_b1N57x"], pureFnDependencies: [], createJitFn: function get_tBi_tFhdZH(utl) {
  const tBi_bBXtdP = utl.getJIT("tBi_bBXtdP");
  const tBi_CGMEgg = utl.getJIT("tBi_CGMEgg");
  const tBi_aic2mg = utl.getJIT("tBi_aic2mg");
  const tBi_qU6qiY = utl.getJIT("tBi_qU6qiY");
  const tBi_Pp7DlV = utl.getJIT("tBi_Pp7DlV");
  const tBi_b1N57x = utl.getJIT("tBi_b1N57x");
  return function tBi_tFhdZH(v, Ser) {
    Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
    Ser.serString(v.username);
    Ser.serString(v.email);
    Ser.serString(v.profile.firstName);
    Ser.serString(v.profile.lastName);
    Ser.serString(v.profile.displayName);
    Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, Ser.index += 8);
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
    tBi_bBXtdP.fn(v.role, Ser);
    tBi_CGMEgg.fn(v.status, Ser);
    tBi_aic2mg.fn(v.address, Ser);
    tBi_qU6qiY.fn(v.paymentMethods, Ser);
    tBi_Pp7DlV.fn(v.preferences, Ser);
    Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, Ser.index += 8);
    Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, Ser.index += 8);
    tBi_b1N57x.fn(v.tags, Ser);
    const bmI1 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.lastLoginAt !== void 0) {
      Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, Ser.index += 8);
      Ser.setBitMask(bmI1, 0 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "tBi", jitFnHash: "tBi_bBXtdP", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_bBXtdP(v,Ser){if (v === "admin") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "user") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "guest") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "moderator") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_bBXtdP(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_bBXtdP(v, Ser) {
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
}, fn: void 0 }, "tBi_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "tBi", jitFnHash: "tBi_CGMEgg", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_CGMEgg(v,Ser){if (v === "active") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "suspended") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "pending_verification") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "deactivated") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_CGMEgg(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_CGMEgg(v, Ser) {
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
}, fn: void 0 }, "tBi_aic2mg": { isNoop: false, typeName: "Address", fnID: "tBi", jitFnHash: "tBi_aic2mg", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_aic2mg(v,Ser){Ser.serString(v.street);Ser.serString(v.city);Ser.serString(v.state);Ser.serString(v.zipCode);Ser.serString(v.country);\n; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_aic2mg(utl) {
  return function tBi_aic2mg(v, Ser) {
    Ser.serString(v.street);
    Ser.serString(v.city);
    Ser.serString(v.state);
    Ser.serString(v.zipCode);
    Ser.serString(v.country);
    return Ser;
  };
}, fn: void 0 }, "tBi_qU6qiY": { isNoop: false, typeName: "array", fnID: "tBi", jitFnHash: "tBi_qU6qiY", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_BTvJh1 = utl.getJIT("tBi_BTvJh1"); return function tBi_qU6qiY(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {tBi_BTvJh1.fn(v[i0],Ser)}\n ; return Ser}', jitDependencies: ["tBi_BTvJh1"], pureFnDependencies: [], createJitFn: function get_tBi_qU6qiY(utl) {
  const tBi_BTvJh1 = utl.getJIT("tBi_BTvJh1");
  return function tBi_qU6qiY(v, Ser) {
    Ser.view.setUint32(Ser.index, v.length, 1);
    Ser.index += 4;
    for (let i0 = 0; i0 < v.length; i0++) {
      tBi_BTvJh1.fn(v[i0], Ser);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "tBi", jitFnHash: "tBi_BTvJh1", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_BTvJh1(v,Ser){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) {Ser.view.setUint8(Ser.index++, 0);Ser.serString(v.lastFourDigits);Ser.view.setFloat64(Ser.index,v.expiryMonth, 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index,v.expiryYear, 1, (Ser.index += 8));Ser.serString(v.brand);
;}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.bankName);Ser.serString(v.accountLastFour);Ser.serString(v.routingNumber);
;}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) {Ser.view.setUint8(Ser.index++, 2);Ser.serString(v.email);
;}else {throw new Error(uErr0);} return Ser}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_BTvJh1(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_BTvJh1(v, Ser) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) {
      Ser.view.setUint8(Ser.index++, 0);
      Ser.serString(v.lastFourDigits);
      Ser.view.setFloat64(Ser.index, v.expiryMonth, 1, Ser.index += 8);
      Ser.view.setFloat64(Ser.index, v.expiryYear, 1, Ser.index += 8);
      Ser.serString(v.brand);
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) {
      Ser.view.setUint8(Ser.index++, 1);
      Ser.serString(v.bankName);
      Ser.serString(v.accountLastFour);
      Ser.serString(v.routingNumber);
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) {
      Ser.view.setUint8(Ser.index++, 2);
      Ser.serString(v.email);
    } else {
      throw new Error(uErr0);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "tBi", jitFnHash: "tBi_Pp7DlV", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union";\nconst tBi_gsmM62 = utl.getJIT("tBi_gsmM62"); return function tBi_Pp7DlV(v,Ser){if (v.theme === "light") {Ser.view.setUint8(Ser.index++, 0);}else if (v.theme === "dark") {Ser.view.setUint8(Ser.index++, 1);}else if (v.theme === "system") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);};Ser.serString(v.language);Ser.serString(v.timezone);tBi_gsmM62.fn(v.notifications,Ser);\n; return Ser}', jitDependencies: ["tBi_gsmM62"], pureFnDependencies: [], createJitFn: function get_tBi_Pp7DlV(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  const tBi_gsmM62 = utl.getJIT("tBi_gsmM62");
  return function tBi_Pp7DlV(v, Ser) {
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
    tBi_gsmM62.fn(v.notifications, Ser);
    return Ser;
  };
}, fn: void 0 }, "tBi_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "tBi", jitFnHash: "tBi_gsmM62", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_gsmM62(v,Ser){Ser.view.setUint8(Ser.index++, !!v.email);Ser.view.setUint8(Ser.index++, !!v.sms);Ser.view.setUint8(Ser.index++, !!v.push);if (v.frequency === "immediate") {Ser.view.setUint8(Ser.index++, 0);}else if (v.frequency === "daily") {Ser.view.setUint8(Ser.index++, 1);}else if (v.frequency === "weekly") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);}\n; return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_gsmM62(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_gsmM62(v, Ser) {
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
}, fn: void 0 }, "fBi_h19ZNf": { isNoop: false, typeName: "params", fnID: "fBi", jitFnHash: "fBi_h19ZNf", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_tFhdZH = utl.getJIT("fBi_tFhdZH"); return function fBi_h19ZNf(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_tFhdZH.fn(undefined,Des)} ; return ret}', jitDependencies: ["fBi_tFhdZH"], pureFnDependencies: [], createJitFn: function get_fBi_h19ZNf(utl) {
  const fBi_tFhdZH = utl.getJIT("fBi_tFhdZH");
  return function fBi_h19ZNf(ret, Des) {
    ret = [];
    const tbimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(tbimI0, 1) & 1 << 0) {
      ret[0] = fBi_tFhdZH.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_tFhdZH": { isNoop: false, typeName: "User", fnID: "fBi", jitFnHash: "fBi_tFhdZH", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_bBXtdP = utl.getJIT("fBi_bBXtdP");\nconst fBi_CGMEgg = utl.getJIT("fBi_CGMEgg");\nconst fBi_aic2mg = utl.getJIT("fBi_aic2mg");\nconst fBi_qU6qiY = utl.getJIT("fBi_qU6qiY");\nconst fBi_Pp7DlV = utl.getJIT("fBi_Pp7DlV");\nconst fBi_b1N57x = utl.getJIT("fBi_b1N57x"); return function fBi_tFhdZH(ret,Des){ret = {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),username:Des.desString(),email:Des.desString(),role:fBi_bBXtdP.fn(undefined,Des),status:fBi_CGMEgg.fn(undefined,Des),address:fBi_aic2mg.fn(undefined,Des),paymentMethods:fBi_qU6qiY.fn(undefined,Des),preferences:fBi_Pp7DlV.fn(undefined,Des),createdAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),updatedAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),tags:fBi_b1N57x.fn(undefined,Des)}\nret.profile = {firstName:Des.desString(),lastName:Des.desString(),displayName:Des.desString(),dateOfBirth:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.profile.bio = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.profile.avatarUrl = Des.desString();};\nconst bimI1 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)));} return ret}', jitDependencies: ["fBi_bBXtdP", "fBi_CGMEgg", "fBi_aic2mg", "fBi_qU6qiY", "fBi_Pp7DlV", "fBi_b1N57x"], pureFnDependencies: [], createJitFn: function get_fBi_tFhdZH(utl) {
  const fBi_bBXtdP = utl.getJIT("fBi_bBXtdP");
  const fBi_CGMEgg = utl.getJIT("fBi_CGMEgg");
  const fBi_aic2mg = utl.getJIT("fBi_aic2mg");
  const fBi_qU6qiY = utl.getJIT("fBi_qU6qiY");
  const fBi_Pp7DlV = utl.getJIT("fBi_Pp7DlV");
  const fBi_b1N57x = utl.getJIT("fBi_b1N57x");
  return function fBi_tFhdZH(ret, Des) {
    ret = { id: Des.view.getFloat64(Des.index, 1, Des.index += 8), username: Des.desString(), email: Des.desString(), role: fBi_bBXtdP.fn(void 0, Des), status: fBi_CGMEgg.fn(void 0, Des), address: fBi_aic2mg.fn(void 0, Des), paymentMethods: fBi_qU6qiY.fn(void 0, Des), preferences: fBi_Pp7DlV.fn(void 0, Des), createdAt: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)), updatedAt: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)), tags: fBi_b1N57x.fn(void 0, Des) };
    ret.profile = { firstName: Des.desString(), lastName: Des.desString(), displayName: Des.desString(), dateOfBirth: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)) };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      ret.profile.bio = Des.desString();
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.profile.avatarUrl = Des.desString();
    }
    const bimI1 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI1, 1) & 1 << (0 & 7)) {
      ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8));
    }
    return ret;
  };
}, fn: void 0 }, "fBi_bBXtdP": { isNoop: false, typeName: "UserRole", fnID: "fBi", jitFnHash: "fBi_bBXtdP", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_bBXtdP(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = "admin"}else if (dec0 === 1) {ret = "user"}else if (dec0 === 2) {ret = "guest"}else if (dec0 === 3) {ret = "moderator"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_bBXtdP(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_bBXtdP(ret, Des) {
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
}, fn: void 0 }, "fBi_CGMEgg": { isNoop: false, typeName: "AccountStatus", fnID: "fBi", jitFnHash: "fBi_CGMEgg", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_CGMEgg(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = "active"}else if (dec0 === 1) {ret = "suspended"}else if (dec0 === 2) {ret = "pending_verification"}else if (dec0 === 3) {ret = "deactivated"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_CGMEgg(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_CGMEgg(ret, Des) {
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
}, fn: void 0 }, "fBi_aic2mg": { isNoop: false, typeName: "Address", fnID: "fBi", jitFnHash: "fBi_aic2mg", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_aic2mg(ret,Des){return {street:Des.desString(),city:Des.desString(),state:Des.desString(),zipCode:Des.desString(),country:Des.desString()}}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_aic2mg(utl) {
  return function fBi_aic2mg(ret, Des) {
    return { street: Des.desString(), city: Des.desString(), state: Des.desString(), zipCode: Des.desString(), country: Des.desString() };
  };
}, fn: void 0 }, "fBi_qU6qiY": { isNoop: false, typeName: "array", fnID: "fBi", jitFnHash: "fBi_qU6qiY", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_BTvJh1 = utl.getJIT("fBi_BTvJh1"); return function fBi_qU6qiY(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = fBi_BTvJh1.fn(undefined,Des);}\n ; return ret}', jitDependencies: ["fBi_BTvJh1"], pureFnDependencies: [], createJitFn: function get_fBi_qU6qiY(utl) {
  const fBi_BTvJh1 = utl.getJIT("fBi_BTvJh1");
  return function fBi_qU6qiY(ret, Des) {
    const arrL0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = new Array(arrL0);
    for (let i0 = 0; i0 < arrL0; i0++) {
      ret[i0] = fBi_BTvJh1.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_BTvJh1": { isNoop: false, typeName: "PaymentMethod", fnID: "fBi", jitFnHash: "fBi_BTvJh1", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_BTvJh1(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = {type:"credit_card",lastFourDigits:Des.desString(),expiryMonth:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),expiryYear:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),brand:Des.desString()}}else if (dec0 === 1) {ret = {type:"bank_account",bankName:Des.desString(),accountLastFour:Des.desString(),routingNumber:Des.desString()}}else if (dec0 === 2) {ret = {type:"paypal",email:Des.desString()}}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_BTvJh1(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_BTvJh1(ret, Des) {
    const dec0 = Des.view.getUint8(Des.index++);
    if (dec0 === 0) {
      ret = { type: "credit_card", lastFourDigits: Des.desString(), expiryMonth: Des.view.getFloat64(Des.index, 1, Des.index += 8), expiryYear: Des.view.getFloat64(Des.index, 1, Des.index += 8), brand: Des.desString() };
    } else if (dec0 === 1) {
      ret = { type: "bank_account", bankName: Des.desString(), accountLastFour: Des.desString(), routingNumber: Des.desString() };
    } else if (dec0 === 2) {
      ret = { type: "paypal", email: Des.desString() };
    } else {
      throw new Error(uErr0);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_Pp7DlV": { isNoop: false, typeName: "UserPreferences", fnID: "fBi", jitFnHash: "fBi_Pp7DlV", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index";\nconst fBi_gsmM62 = utl.getJIT("fBi_gsmM62"); return function fBi_Pp7DlV(ret,Des){ret = {language:Des.desString(),timezone:Des.desString(),notifications:fBi_gsmM62.fn(undefined,Des)}\n\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret.theme = "light"}else if (dec0 === 1) {ret.theme = "dark"}else if (dec0 === 2) {ret.theme = "system"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: ["fBi_gsmM62"], pureFnDependencies: [], createJitFn: function get_fBi_Pp7DlV(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  const fBi_gsmM62 = utl.getJIT("fBi_gsmM62");
  return function fBi_Pp7DlV(ret, Des) {
    ret = { language: Des.desString(), timezone: Des.desString(), notifications: fBi_gsmM62.fn(void 0, Des) };
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
}, fn: void 0 }, "fBi_gsmM62": { isNoop: false, typeName: "NotificationSettings", fnID: "fBi", jitFnHash: "fBi_gsmM62", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_gsmM62(ret,Des){ret = {email:Des.view.getUint8(Des.index++) === 1,sms:Des.view.getUint8(Des.index++) === 1,push:Des.view.getUint8(Des.index++) === 1}\n\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret.frequency = "immediate"}else if (dec0 === 1) {ret.frequency = "daily"}else if (dec0 === 2) {ret.frequency = "weekly"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_gsmM62(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_gsmM62(ret, Des) {
    ret = { email: Des.view.getUint8(Des.index++) === 1, sms: Des.view.getUint8(Des.index++) === 1, push: Des.view.getUint8(Des.index++) === 1 };
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
}, fn: void 0 }, "is_KgA2s8": { isNoop: false, typeName: "User", fnID: "is", jitFnHash: "is_KgA2s8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_E2YuG4 = utl.getJIT("is_E2YuG4");
const is_vtjtZH = utl.getJIT("is_vtjtZH");
const is_DD9DVL = utl.getJIT("is_DD9DVL");
const is_P9r7Jh = utl.getJIT("is_P9r7Jh");
const is_AWciwE = utl.getJIT("is_AWciwE");
const is_Ei8qua = utl.getJIT("is_Ei8qua"); return function is_KgA2s8(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.username === 'string' && typeof v.email === 'string' && (typeof v.profile === 'object' && v.profile !== null && typeof v.profile.firstName === 'string' && typeof v.profile.lastName === 'string' && typeof v.profile.displayName === 'string' && (v.profile.bio === undefined || typeof v.profile.bio === 'string') && (v.profile.avatarUrl === undefined || typeof v.profile.avatarUrl === 'string') && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) && is_E2YuG4.fn(v.role) && is_vtjtZH.fn(v.status) && is_DD9DVL.fn(v.address) && is_P9r7Jh.fn(v.paymentMethods) && is_AWciwE.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === undefined || (v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) && is_Ei8qua.fn(v.tags))}`, jitDependencies: ["is_E2YuG4", "is_vtjtZH", "is_DD9DVL", "is_P9r7Jh", "is_AWciwE", "is_Ei8qua"], pureFnDependencies: [], createJitFn: function get_is_KgA2s8(utl) {
  const is_E2YuG4 = utl.getJIT("is_E2YuG4");
  const is_vtjtZH = utl.getJIT("is_vtjtZH");
  const is_DD9DVL = utl.getJIT("is_DD9DVL");
  const is_P9r7Jh = utl.getJIT("is_P9r7Jh");
  const is_AWciwE = utl.getJIT("is_AWciwE");
  const is_Ei8qua = utl.getJIT("is_Ei8qua");
  return function is_KgA2s8(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.username === "string" && typeof v.email === "string" && (typeof v.profile === "object" && v.profile !== null && typeof v.profile.firstName === "string" && typeof v.profile.lastName === "string" && typeof v.profile.displayName === "string" && (v.profile.bio === void 0 || typeof v.profile.bio === "string") && (v.profile.avatarUrl === void 0 || typeof v.profile.avatarUrl === "string") && (v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) && is_E2YuG4.fn(v.role) && is_vtjtZH.fn(v.status) && is_DD9DVL.fn(v.address) && is_P9r7Jh.fn(v.paymentMethods) && is_AWciwE.fn(v.preferences) && (v.createdAt instanceof Date && !isNaN(v.createdAt.getTime())) && (v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime())) && (v.lastLoginAt === void 0 || v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime())) && is_Ei8qua.fn(v.tags);
  };
}, fn: void 0 }, "is_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "is", jitFnHash: "is_E2YuG4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ' return function is_E2YuG4(v){return (v === "admin" || v === "user" || v === "guest" || v === "moderator")}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_E2YuG4(utl) {
  return function is_E2YuG4(v) {
    return v === "admin" || v === "user" || v === "guest" || v === "moderator";
  };
}, fn: void 0 }, "is_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "is", jitFnHash: "is_vtjtZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ' return function is_vtjtZH(v){return (v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated")}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_vtjtZH(utl) {
  return function is_vtjtZH(v) {
    return v === "active" || v === "suspended" || v === "pending_verification" || v === "deactivated";
  };
}, fn: void 0 }, "is_DD9DVL": { isNoop: false, typeName: "Address", fnID: "is", jitFnHash: "is_DD9DVL", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_DD9DVL(v){return (typeof v === 'object' && v !== null && typeof v.street === 'string' && typeof v.city === 'string' && typeof v.state === 'string' && typeof v.zipCode === 'string' && typeof v.country === 'string')}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_DD9DVL(utl) {
  return function is_DD9DVL(v) {
    return typeof v === "object" && v !== null && typeof v.street === "string" && typeof v.city === "string" && typeof v.state === "string" && typeof v.zipCode === "string" && typeof v.country === "string";
  };
}, fn: void 0 }, "is_P9r7Jh": { isNoop: false, typeName: "array", fnID: "is", jitFnHash: "is_P9r7Jh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const is_G2AKWU = utl.getJIT("is_G2AKWU"); return function is_P9r7Jh(v){\n if (!Array.isArray(v)) return false;\n for (let i0 = 0; i0 < v.length; i0++) {\n const res0 = is_G2AKWU.fn(v[i0]);\n if (!(res0)) return false;\n }\n return true;\n }', jitDependencies: ["is_G2AKWU"], pureFnDependencies: [], createJitFn: function get_is_P9r7Jh(utl) {
  const is_G2AKWU = utl.getJIT("is_G2AKWU");
  return function is_P9r7Jh(v) {
    if (!Array.isArray(v)) return false;
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = is_G2AKWU.fn(v[i0]);
      if (!res0) return false;
    }
    return true;
  };
}, fn: void 0 }, "is_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "is", jitFnHash: "is_G2AKWU", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function is_G2AKWU(v){return ((typeof v === 'object' && v !== null && ((v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string') || (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string') || (v.type === "paypal" && typeof v.email === 'string'))))}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_G2AKWU(utl) {
  return function is_G2AKWU(v) {
    return typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string" || v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string" || v.type === "paypal" && typeof v.email === "string");
  };
}, fn: void 0 }, "is_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "is", jitFnHash: "is_AWciwE", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const is_tfLdnp = utl.getJIT("is_tfLdnp"); return function is_AWciwE(v){return (typeof v === 'object' && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === 'string' && typeof v.timezone === 'string' && is_tfLdnp.fn(v.notifications))}`, jitDependencies: ["is_tfLdnp"], pureFnDependencies: [], createJitFn: function get_is_AWciwE(utl) {
  const is_tfLdnp = utl.getJIT("is_tfLdnp");
  return function is_AWciwE(v) {
    return typeof v === "object" && v !== null && (v.theme === "light" || v.theme === "dark" || v.theme === "system") && typeof v.language === "string" && typeof v.timezone === "string" && is_tfLdnp.fn(v.notifications);
  };
}, fn: void 0 }, "is_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "is", jitFnHash: "is_tfLdnp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function is_tfLdnp(v){return (typeof v === 'object' && v !== null && typeof v.email === 'boolean' && typeof v.sms === 'boolean' && typeof v.push === 'boolean' && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly"))}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_tfLdnp(utl) {
  return function is_tfLdnp(v) {
    return typeof v === "object" && v !== null && typeof v.email === "boolean" && typeof v.sms === "boolean" && typeof v.push === "boolean" && (v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly");
  };
}, fn: void 0 }, "te_KgA2s8": { isNoop: false, typeName: "User", fnID: "te", jitFnHash: "te_KgA2s8", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_E2YuG4 = utl.getJIT("te_E2YuG4");
const te_vtjtZH = utl.getJIT("te_vtjtZH");
const te_DD9DVL = utl.getJIT("te_DD9DVL");
const te_P9r7Jh = utl.getJIT("te_P9r7Jh");
const te_AWciwE = utl.getJIT("te_AWciwE");
const te_Ei8qua = utl.getJIT("te_Ei8qua"); return function te_KgA2s8(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.username !== 'string') Iqa2M8Ms(pth,er,"string",["username"]);if (typeof v.email !== 'string') Iqa2M8Ms(pth,er,"string",["email"]);
 if (!(typeof v.profile === 'object' && v.profile !== null)) {
 Iqa2M8Ms(pth,er,"object",["profile"]);
 } else {
 if (typeof v.profile.firstName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","firstName"]);if (typeof v.profile.lastName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","lastName"]);if (typeof v.profile.displayName !== 'string') Iqa2M8Ms(pth,er,"string",["profile","displayName"]);if (v.profile.bio !== undefined) {if (typeof v.profile.bio !== 'string') Iqa2M8Ms(pth,er,"string",["profile","bio"]);};if (v.profile.avatarUrl !== undefined) {if (typeof v.profile.avatarUrl !== 'string') Iqa2M8Ms(pth,er,"string",["profile","avatarUrl"]);};if (!(v.profile.dateOfBirth instanceof Date && !isNaN(v.profile.dateOfBirth.getTime()))) Iqa2M8Ms(pth,er,"date",["profile","dateOfBirth"]);
 }
 ;pth.push("role"); te_E2YuG4.fn(v.role,pth,er); pth.splice(-1);pth.push("status"); te_vtjtZH.fn(v.status,pth,er); pth.splice(-1);pth.push("address"); te_DD9DVL.fn(v.address,pth,er); pth.splice(-1);pth.push("paymentMethods"); te_P9r7Jh.fn(v.paymentMethods,pth,er); pth.splice(-1);pth.push("preferences"); te_AWciwE.fn(v.preferences,pth,er); pth.splice(-1);if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth,er,"date",["createdAt"]);if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth,er,"date",["updatedAt"]);if (v.lastLoginAt !== undefined) {if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth,er,"date",["lastLoginAt"]);};pth.push("tags"); te_Ei8qua.fn(v.tags,pth,er); pth.splice(-1);
 }
 ; return er}`, jitDependencies: ["te_E2YuG4", "te_vtjtZH", "te_DD9DVL", "te_P9r7Jh", "te_AWciwE", "te_Ei8qua"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_KgA2s8(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_E2YuG4 = utl.getJIT("te_E2YuG4");
  const te_vtjtZH = utl.getJIT("te_vtjtZH");
  const te_DD9DVL = utl.getJIT("te_DD9DVL");
  const te_P9r7Jh = utl.getJIT("te_P9r7Jh");
  const te_AWciwE = utl.getJIT("te_AWciwE");
  const te_Ei8qua = utl.getJIT("te_Ei8qua");
  return function te_KgA2s8(v, pth = [], er = []) {
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
      }
      pth.push("role");
      te_E2YuG4.fn(v.role, pth, er);
      pth.splice(-1);
      pth.push("status");
      te_vtjtZH.fn(v.status, pth, er);
      pth.splice(-1);
      pth.push("address");
      te_DD9DVL.fn(v.address, pth, er);
      pth.splice(-1);
      pth.push("paymentMethods");
      te_P9r7Jh.fn(v.paymentMethods, pth, er);
      pth.splice(-1);
      pth.push("preferences");
      te_AWciwE.fn(v.preferences, pth, er);
      pth.splice(-1);
      if (!(v.createdAt instanceof Date && !isNaN(v.createdAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["createdAt"]);
      if (!(v.updatedAt instanceof Date && !isNaN(v.updatedAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["updatedAt"]);
      if (v.lastLoginAt !== void 0) {
        if (!(v.lastLoginAt instanceof Date && !isNaN(v.lastLoginAt.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastLoginAt"]);
      }
      pth.push("tags");
      te_Ei8qua.fn(v.tags, pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "te", jitFnHash: "te_E2YuG4", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_E2YuG4 = utl.getJIT("is_E2YuG4");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_E2YuG4(v,pth=[],er=[]){if (!is_E2YuG4.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_E2YuG4"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_E2YuG4(utl) {
  const is_E2YuG4 = utl.getJIT("is_E2YuG4");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_E2YuG4(v, pth = [], er = []) {
    if (!is_E2YuG4.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "te", jitFnHash: "te_vtjtZH", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_vtjtZH = utl.getJIT("is_vtjtZH");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_vtjtZH(v,pth=[],er=[]){if (!is_vtjtZH.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_vtjtZH"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_vtjtZH(utl) {
  const is_vtjtZH = utl.getJIT("is_vtjtZH");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_vtjtZH(v, pth = [], er = []) {
    if (!is_vtjtZH.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_DD9DVL": { isNoop: false, typeName: "Address", fnID: "te", jitFnHash: "te_DD9DVL", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_DD9DVL(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.street !== 'string') Iqa2M8Ms(pth,er,"string",["street"]);if (typeof v.city !== 'string') Iqa2M8Ms(pth,er,"string",["city"]);if (typeof v.state !== 'string') Iqa2M8Ms(pth,er,"string",["state"]);if (typeof v.zipCode !== 'string') Iqa2M8Ms(pth,er,"string",["zipCode"]);if (typeof v.country !== 'string') Iqa2M8Ms(pth,er,"string",["country"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_DD9DVL(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_DD9DVL(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.street !== "string") Iqa2M8Ms(pth, er, "string", ["street"]);
      if (typeof v.city !== "string") Iqa2M8Ms(pth, er, "string", ["city"]);
      if (typeof v.state !== "string") Iqa2M8Ms(pth, er, "string", ["state"]);
      if (typeof v.zipCode !== "string") Iqa2M8Ms(pth, er, "string", ["zipCode"]);
      if (typeof v.country !== "string") Iqa2M8Ms(pth, er, "string", ["country"]);
    }
    return er;
  };
}, fn: void 0 }, "te_P9r7Jh": { isNoop: false, typeName: "array", fnID: "te", jitFnHash: "te_P9r7Jh", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const te_G2AKWU = utl.getJIT("te_G2AKWU");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_P9r7Jh(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {pth.push(i0); te_G2AKWU.fn(v[i0],pth,er); pth.splice(-1);}} return er}', jitDependencies: ["te_G2AKWU"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_P9r7Jh(utl) {
  const te_G2AKWU = utl.getJIT("te_G2AKWU");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_P9r7Jh(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        pth.push(i0);
        te_G2AKWU.fn(v[i0], pth, er);
        pth.splice(-1);
      }
    }
    return er;
  };
}, fn: void 0 }, "te_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "te", jitFnHash: "te_G2AKWU", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const is_G2AKWU = utl.getJIT("is_G2AKWU");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_G2AKWU(v,pth=[],er=[]){if (!is_G2AKWU.fn(v)) Iqa2M8Ms(pth,er,"union"); return er}', jitDependencies: ["is_G2AKWU"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_G2AKWU(utl) {
  const is_G2AKWU = utl.getJIT("is_G2AKWU");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_G2AKWU(v, pth = [], er = []) {
    if (!is_G2AKWU.fn(v)) Iqa2M8Ms(pth, er, "union");
    return er;
  };
}, fn: void 0 }, "te_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "te", jitFnHash: "te_AWciwE", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
const te_tfLdnp = utl.getJIT("te_tfLdnp"); return function te_AWciwE(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth,er,"union",["theme"]);if (typeof v.language !== 'string') Iqa2M8Ms(pth,er,"string",["language"]);if (typeof v.timezone !== 'string') Iqa2M8Ms(pth,er,"string",["timezone"]);pth.push("notifications"); te_tfLdnp.fn(v.notifications,pth,er); pth.splice(-1);
 }
 ; return er}`, jitDependencies: ["te_tfLdnp"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_AWciwE(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  const te_tfLdnp = utl.getJIT("te_tfLdnp");
  return function te_AWciwE(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!(v.theme === "light" || v.theme === "dark" || v.theme === "system")) Iqa2M8Ms(pth, er, "union", ["theme"]);
      if (typeof v.language !== "string") Iqa2M8Ms(pth, er, "string", ["language"]);
      if (typeof v.timezone !== "string") Iqa2M8Ms(pth, er, "string", ["timezone"]);
      pth.push("notifications");
      te_tfLdnp.fn(v.notifications, pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "te", jitFnHash: "te_tfLdnp", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_tfLdnp(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if (typeof v.email !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["email"]);if (typeof v.sms !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["sms"]);if (typeof v.push !== 'boolean') Iqa2M8Ms(pth,er,"boolean",["push"]);if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth,er,"union",["frequency"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_tfLdnp(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_tfLdnp(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (typeof v.email !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["email"]);
      if (typeof v.sms !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["sms"]);
      if (typeof v.push !== "boolean") Iqa2M8Ms(pth, er, "boolean", ["push"]);
      if (!(v.frequency === "immediate" || v.frequency === "daily" || v.frequency === "weekly")) Iqa2M8Ms(pth, er, "union", ["frequency"]);
    }
    return er;
  };
}, fn: void 0 }, "te_Ei8qua": { isNoop: false, typeName: "array", fnID: "te", jitFnHash: "te_Ei8qua", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_Ei8qua(v,pth=[],er=[]){if (!Array.isArray(v)) {Iqa2M8Ms(pth,er,"array")} else {for (let i0 = 0; i0 < v.length; i0++) {if (typeof v[i0] !== 'string') Iqa2M8Ms(pth,er,"string",[i0]);}} return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_Ei8qua(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_Ei8qua(v, pth = [], er = []) {
    if (!Array.isArray(v)) {
      Iqa2M8Ms(pth, er, "array");
    } else {
      for (let i0 = 0; i0 < v.length; i0++) {
        if (typeof v[i0] !== "string") Iqa2M8Ms(pth, er, "string", [i0]);
      }
    }
    return er;
  };
}, fn: void 0 }, "tj_KgA2s8": { isNoop: false, typeName: "User", fnID: "tj", jitFnHash: "tj_KgA2s8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_E2YuG4 = utl.getJIT("tj_E2YuG4");\nconst tj_vtjtZH = utl.getJIT("tj_vtjtZH");\nconst tj_P9r7Jh = utl.getJIT("tj_P9r7Jh");\nconst tj_AWciwE = utl.getJIT("tj_AWciwE"); return function tj_KgA2s8(v){v.role = tj_E2YuG4.fn(v.role);v.status = tj_vtjtZH.fn(v.status);v.paymentMethods = tj_P9r7Jh.fn(v.paymentMethods);v.preferences = tj_AWciwE.fn(v.preferences); return v}', jitDependencies: ["tj_E2YuG4", "tj_vtjtZH", "tj_P9r7Jh", "tj_AWciwE"], pureFnDependencies: [], createJitFn: function get_tj_KgA2s8(utl) {
  const tj_E2YuG4 = utl.getJIT("tj_E2YuG4");
  const tj_vtjtZH = utl.getJIT("tj_vtjtZH");
  const tj_P9r7Jh = utl.getJIT("tj_P9r7Jh");
  const tj_AWciwE = utl.getJIT("tj_AWciwE");
  return function tj_KgA2s8(v) {
    v.role = tj_E2YuG4.fn(v.role);
    v.status = tj_vtjtZH.fn(v.status);
    v.paymentMethods = tj_P9r7Jh.fn(v.paymentMethods);
    v.preferences = tj_AWciwE.fn(v.preferences);
    return v;
  };
}, fn: void 0 }, "tj_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "tj", jitFnHash: "tj_E2YuG4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_E2YuG4(v){if (v === "admin") { /*noop*/}else if (v === "user") { /*noop*/}else if (v === "guest") { /*noop*/}else if (v === "moderator") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_E2YuG4(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_E2YuG4(v) {
    if (v === "admin") ;
    else if (v === "user") ;
    else if (v === "guest") ;
    else if (v === "moderator") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "tj", jitFnHash: "tj_vtjtZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_vtjtZH(v){if (v === "active") { /*noop*/}else if (v === "suspended") { /*noop*/}else if (v === "pending_verification") { /*noop*/}else if (v === "deactivated") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_vtjtZH(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_vtjtZH(v) {
    if (v === "active") ;
    else if (v === "suspended") ;
    else if (v === "pending_verification") ;
    else if (v === "deactivated") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_DD9DVL": { isNoop: true, typeName: "Address", fnID: "tj", jitFnHash: "tj_DD9DVL", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_DD9DVL(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_DD9DVL(utl) {
  return function tj_DD9DVL(v) {
    return v;
  };
}, fn: void 0 }, "tj_P9r7Jh": { isNoop: false, typeName: "array", fnID: "tj", jitFnHash: "tj_P9r7Jh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const tj_G2AKWU = utl.getJIT("tj_G2AKWU"); return function tj_P9r7Jh(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = tj_G2AKWU.fn(v[i0]);} return v}', jitDependencies: ["tj_G2AKWU"], pureFnDependencies: [], createJitFn: function get_tj_P9r7Jh(utl) {
  const tj_G2AKWU = utl.getJIT("tj_G2AKWU");
  return function tj_P9r7Jh(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = tj_G2AKWU.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "tj_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "tj", jitFnHash: "tj_G2AKWU", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_G2AKWU(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) { /*noop*/}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) { /*noop*/}else {throw new Error(uErr0);} return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_G2AKWU(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_G2AKWU(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) ;
    else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) ;
    else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "tj_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "tj", jitFnHash: "tj_AWciwE", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union";\nconst tj_tfLdnp = utl.getJIT("tj_tfLdnp"); return function tj_AWciwE(v){if (v.theme === "light") { /*noop*/}else if (v.theme === "dark") { /*noop*/}else if (v.theme === "system") { /*noop*/}else {throw new Error(uErr0);};v.notifications = tj_tfLdnp.fn(v.notifications); return v}', jitDependencies: ["tj_tfLdnp"], pureFnDependencies: [], createJitFn: function get_tj_AWciwE(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  const tj_tfLdnp = utl.getJIT("tj_tfLdnp");
  return function tj_AWciwE(v) {
    if (v.theme === "light") ;
    else if (v.theme === "dark") ;
    else if (v.theme === "system") ;
    else {
      throw new Error(uErr0);
    }
    v.notifications = tj_tfLdnp.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "tj_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "tj", jitFnHash: "tj_tfLdnp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not json encode union: item does not belong to the union"; return function tj_tfLdnp(v){if (v.frequency === "immediate") { /*noop*/}else if (v.frequency === "daily") { /*noop*/}else if (v.frequency === "weekly") { /*noop*/}else {throw new Error(uErr0);} return v}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_tfLdnp(utl) {
  const uErr0 = "Can not json encode union: item does not belong to the union";
  return function tj_tfLdnp(v) {
    if (v.frequency === "immediate") ;
    else if (v.frequency === "daily") ;
    else if (v.frequency === "weekly") ;
    else {
      throw new Error(uErr0);
    }
    return v;
  };
}, fn: void 0 }, "fj_KgA2s8": { isNoop: false, typeName: "User", fnID: "fj", jitFnHash: "fj_KgA2s8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_E2YuG4 = utl.getJIT("fj_E2YuG4");\nconst fj_vtjtZH = utl.getJIT("fj_vtjtZH");\nconst fj_P9r7Jh = utl.getJIT("fj_P9r7Jh");\nconst fj_AWciwE = utl.getJIT("fj_AWciwE"); return function fj_KgA2s8(v){v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);v.role = fj_E2YuG4.fn(v.role);v.status = fj_vtjtZH.fn(v.status);v.paymentMethods = fj_P9r7Jh.fn(v.paymentMethods);v.preferences = fj_AWciwE.fn(v.preferences);v.createdAt = new Date(v.createdAt);v.updatedAt = new Date(v.updatedAt);if (v.lastLoginAt !== undefined) {v.lastLoginAt = new Date(v.lastLoginAt);} return v}', jitDependencies: ["fj_E2YuG4", "fj_vtjtZH", "fj_P9r7Jh", "fj_AWciwE"], pureFnDependencies: [], createJitFn: function get_fj_KgA2s8(utl) {
  const fj_E2YuG4 = utl.getJIT("fj_E2YuG4");
  const fj_vtjtZH = utl.getJIT("fj_vtjtZH");
  const fj_P9r7Jh = utl.getJIT("fj_P9r7Jh");
  const fj_AWciwE = utl.getJIT("fj_AWciwE");
  return function fj_KgA2s8(v) {
    v.profile.dateOfBirth = new Date(v.profile.dateOfBirth);
    v.role = fj_E2YuG4.fn(v.role);
    v.status = fj_vtjtZH.fn(v.status);
    v.paymentMethods = fj_P9r7Jh.fn(v.paymentMethods);
    v.preferences = fj_AWciwE.fn(v.preferences);
    v.createdAt = new Date(v.createdAt);
    v.updatedAt = new Date(v.updatedAt);
    if (v.lastLoginAt !== void 0) {
      v.lastLoginAt = new Date(v.lastLoginAt);
    }
    return v;
  };
}, fn: void 0 }, "fj_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "fj", jitFnHash: "fj_E2YuG4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_E2YuG4(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_E2YuG4(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_E2YuG4(v) {
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
}, fn: void 0 }, "fj_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "fj", jitFnHash: "fj_vtjtZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_vtjtZH(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}else if (dec0 === 3) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_vtjtZH(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_vtjtZH(v) {
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
}, fn: void 0 }, "fj_DD9DVL": { isNoop: true, typeName: "Address", fnID: "fj", jitFnHash: "fj_DD9DVL", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_DD9DVL(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_DD9DVL(utl) {
  return function fj_DD9DVL(v) {
    return v;
  };
}, fn: void 0 }, "fj_P9r7Jh": { isNoop: false, typeName: "array", fnID: "fj", jitFnHash: "fj_P9r7Jh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_G2AKWU = utl.getJIT("fj_G2AKWU"); return function fj_P9r7Jh(v){for (let i0 = 0; i0 < v.length; i0++) {v[i0] = fj_G2AKWU.fn(v[i0]);} return v}', jitDependencies: ["fj_G2AKWU"], pureFnDependencies: [], createJitFn: function get_fj_P9r7Jh(utl) {
  const fj_G2AKWU = utl.getJIT("fj_G2AKWU");
  return function fj_P9r7Jh(v) {
    for (let i0 = 0; i0 < v.length; i0++) {
      v[i0] = fj_G2AKWU.fn(v[i0]);
    }
    return v;
  };
}, fn: void 0 }, "fj_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "fj", jitFnHash: "fj_G2AKWU", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_G2AKWU(v){
 if (v?.length === 2 && Array.isArray(v) && typeof v[0] === 'number') {
 const dec0 = v[0]; v = v[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_G2AKWU(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_G2AKWU(v) {
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
}, fn: void 0 }, "fj_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "fj", jitFnHash: "fj_AWciwE", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index";
const fj_tfLdnp = utl.getJIT("fj_tfLdnp"); return function fj_AWciwE(v){
 if (v.theme?.length === 2 && Array.isArray(v.theme) && typeof v.theme[0] === 'number') {
 const dec0 = v.theme[0]; v.theme = v.theme[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ;v.notifications = fj_tfLdnp.fn(v.notifications); return v}`, jitDependencies: ["fj_tfLdnp"], pureFnDependencies: [], createJitFn: function get_fj_AWciwE(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  const fj_tfLdnp = utl.getJIT("fj_tfLdnp");
  return function fj_AWciwE(v) {
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
    v.notifications = fj_tfLdnp.fn(v.notifications);
    return v;
  };
}, fn: void 0 }, "fj_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "fj", jitFnHash: "fj_tfLdnp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not json decode union: invalid union index"; return function fj_tfLdnp(v){
 if (v.frequency?.length === 2 && Array.isArray(v.frequency) && typeof v.frequency[0] === 'number') {
 const dec0 = v.frequency[0]; v.frequency = v.frequency[1];
 if (dec0 === 0) {/*noop*/}else if (dec0 === 1) {/*noop*/}else if (dec0 === 2) {/*noop*/}
 else {throw new Error(uErr0)}
 }
 ; return v}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_tfLdnp(utl) {
  const uErr0 = "Can not json decode union: invalid union index";
  return function fj_tfLdnp(v) {
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
}, fn: void 0 }, "sj_KgA2s8": { isNoop: false, typeName: "User", fnID: "sj", jitFnHash: "sj_KgA2s8", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_E2YuG4 = utl.getJIT("sj_E2YuG4");
const sj_vtjtZH = utl.getJIT("sj_vtjtZH");
const sj_DD9DVL = utl.getJIT("sj_DD9DVL");
const sj_P9r7Jh = utl.getJIT("sj_P9r7Jh");
const sj_AWciwE = utl.getJIT("sj_AWciwE");
const sj_Ei8qua = utl.getJIT("sj_Ei8qua"); return function sj_KgA2s8(v){return '{'+(v.lastLoginAt === undefined ? '' : '"lastLoginAt":'+'"'+v.lastLoginAt.toJSON()+'"'+",")+'"id":'+v.id+","+'"username":'+JSON.stringify(v.username)+","+'"email":'+JSON.stringify(v.email)+","+'"profile":'+'{'+(v.profile.bio === undefined ? '' : '"bio":'+JSON.stringify(v.profile.bio)+",")+(v.profile.avatarUrl === undefined ? '' : '"avatarUrl":'+JSON.stringify(v.profile.avatarUrl)+",")+'"firstName":'+JSON.stringify(v.profile.firstName)+","+'"lastName":'+JSON.stringify(v.profile.lastName)+","+'"displayName":'+JSON.stringify(v.profile.displayName)+","+'"dateOfBirth":'+'"'+v.profile.dateOfBirth.toJSON()+'"'+'}'+","+'"role":'+sj_E2YuG4.fn(v.role)+","+'"status":'+sj_vtjtZH.fn(v.status)+","+'"address":'+sj_DD9DVL.fn(v.address)+","+'"paymentMethods":'+sj_P9r7Jh.fn(v.paymentMethods)+","+'"preferences":'+sj_AWciwE.fn(v.preferences)+","+'"createdAt":'+'"'+v.createdAt.toJSON()+'"'+","+'"updatedAt":'+'"'+v.updatedAt.toJSON()+'"'+","+'"tags":'+sj_Ei8qua.fn(v.tags)+'}'}`, jitDependencies: ["sj_E2YuG4", "sj_vtjtZH", "sj_DD9DVL", "sj_P9r7Jh", "sj_AWciwE", "sj_Ei8qua"], pureFnDependencies: [], createJitFn: function get_sj_KgA2s8(utl) {
  const sj_E2YuG4 = utl.getJIT("sj_E2YuG4");
  const sj_vtjtZH = utl.getJIT("sj_vtjtZH");
  const sj_DD9DVL = utl.getJIT("sj_DD9DVL");
  const sj_P9r7Jh = utl.getJIT("sj_P9r7Jh");
  const sj_AWciwE = utl.getJIT("sj_AWciwE");
  const sj_Ei8qua = utl.getJIT("sj_Ei8qua");
  return function sj_KgA2s8(v) {
    return "{" + (v.lastLoginAt === void 0 ? "" : '"lastLoginAt":"' + v.lastLoginAt.toJSON() + '",') + '"id":' + v.id + ',"username":' + JSON.stringify(v.username) + ',"email":' + JSON.stringify(v.email) + ',"profile":{' + (v.profile.bio === void 0 ? "" : '"bio":' + JSON.stringify(v.profile.bio) + ",") + (v.profile.avatarUrl === void 0 ? "" : '"avatarUrl":' + JSON.stringify(v.profile.avatarUrl) + ",") + '"firstName":' + JSON.stringify(v.profile.firstName) + ',"lastName":' + JSON.stringify(v.profile.lastName) + ',"displayName":' + JSON.stringify(v.profile.displayName) + ',"dateOfBirth":"' + v.profile.dateOfBirth.toJSON() + '"},"role":' + sj_E2YuG4.fn(v.role) + ',"status":' + sj_vtjtZH.fn(v.status) + ',"address":' + sj_DD9DVL.fn(v.address) + ',"paymentMethods":' + sj_P9r7Jh.fn(v.paymentMethods) + ',"preferences":' + sj_AWciwE.fn(v.preferences) + ',"createdAt":"' + v.createdAt.toJSON() + '","updatedAt":"' + v.updatedAt.toJSON() + '","tags":' + sj_Ei8qua.fn(v.tags) + "}";
  };
}, fn: void 0 }, "sj_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "sj", jitFnHash: "sj_E2YuG4", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_E2YuG4(v){if (v === "admin") {return JSON.stringify(v)}else if (v === "user") {return JSON.stringify(v)}else if (v === "guest") {return JSON.stringify(v)}else if (v === "moderator") {return JSON.stringify(v)}else {throw new Error(uErr0);}}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_E2YuG4(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_E2YuG4(v) {
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
}, fn: void 0 }, "sj_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "sj", jitFnHash: "sj_vtjtZH", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_vtjtZH(v){if (v === "active") {return JSON.stringify(v)}else if (v === "suspended") {return JSON.stringify(v)}else if (v === "pending_verification") {return JSON.stringify(v)}else if (v === "deactivated") {return JSON.stringify(v)}else {throw new Error(uErr0);}}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_vtjtZH(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_vtjtZH(v) {
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
}, fn: void 0 }, "sj_DD9DVL": { isNoop: false, typeName: "Address", fnID: "sj", jitFnHash: "sj_DD9DVL", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function sj_DD9DVL(v){return '{'+'"street":'+JSON.stringify(v.street)+","+'"city":'+JSON.stringify(v.city)+","+'"state":'+JSON.stringify(v.state)+","+'"zipCode":'+JSON.stringify(v.zipCode)+","+'"country":'+JSON.stringify(v.country)+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_DD9DVL(utl) {
  return function sj_DD9DVL(v) {
    return '{"street":' + JSON.stringify(v.street) + ',"city":' + JSON.stringify(v.city) + ',"state":' + JSON.stringify(v.state) + ',"zipCode":' + JSON.stringify(v.zipCode) + ',"country":' + JSON.stringify(v.country) + "}";
  };
}, fn: void 0 }, "sj_P9r7Jh": { isNoop: false, typeName: "array", fnID: "sj", jitFnHash: "sj_P9r7Jh", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_G2AKWU = utl.getJIT("sj_G2AKWU"); return function sj_P9r7Jh(v){
 const ls0 = [];
 for (let i0 = 0; i0 < v.length; i0++) {
 const res0 = sj_G2AKWU.fn(v[i0]);
 ls0.push(res0);
 }
 return '[' + ls0.join(',') + ']';
 }`, jitDependencies: ["sj_G2AKWU"], pureFnDependencies: [], createJitFn: function get_sj_P9r7Jh(utl) {
  const sj_G2AKWU = utl.getJIT("sj_G2AKWU");
  return function sj_P9r7Jh(v) {
    const ls0 = [];
    for (let i0 = 0; i0 < v.length; i0++) {
      const res0 = sj_G2AKWU.fn(v[i0]);
      ls0.push(res0);
    }
    return "[" + ls0.join(",") + "]";
  };
}, fn: void 0 }, "sj_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "sj", jitFnHash: "sj_G2AKWU", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_G2AKWU(v){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"lastFourDigits":'+JSON.stringify(v.lastFourDigits)+","+'"expiryMonth":'+v.expiryMonth+","+'"expiryYear":'+v.expiryYear+","+'"brand":'+JSON.stringify(v.brand)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"bankName":'+JSON.stringify(v.bankName)+","+'"accountLastFour":'+JSON.stringify(v.accountLastFour)+","+'"routingNumber":'+JSON.stringify(v.routingNumber)+'}'}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) {return '{'+'"type":'+JSON.stringify(v.type)+","+'"email":'+JSON.stringify(v.email)+'}'}else {throw new Error(uErr0);}}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_G2AKWU(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_G2AKWU(v) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"lastFourDigits":' + JSON.stringify(v.lastFourDigits) + ',"expiryMonth":' + v.expiryMonth + ',"expiryYear":' + v.expiryYear + ',"brand":' + JSON.stringify(v.brand) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"bankName":' + JSON.stringify(v.bankName) + ',"accountLastFour":' + JSON.stringify(v.accountLastFour) + ',"routingNumber":' + JSON.stringify(v.routingNumber) + "}";
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) {
      return '{"type":' + JSON.stringify(v.type) + ',"email":' + JSON.stringify(v.email) + "}";
    } else {
      throw new Error(uErr0);
    }
  };
}, fn: void 0 }, "sj_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "sj", jitFnHash: "sj_AWciwE", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union";
const sj_tfLdnp = utl.getJIT("sj_tfLdnp"); return function sj_AWciwE(v){return '{'+'"theme":'+(function(){if (v.theme === "light") {return JSON.stringify(v.theme)}else if (v.theme === "dark") {return JSON.stringify(v.theme)}else if (v.theme === "system") {return JSON.stringify(v.theme)}else {throw new Error(uErr0);}})()+","+'"language":'+JSON.stringify(v.language)+","+'"timezone":'+JSON.stringify(v.timezone)+","+'"notifications":'+sj_tfLdnp.fn(v.notifications)+'}'}`, jitDependencies: ["sj_tfLdnp"], pureFnDependencies: [], createJitFn: function get_sj_AWciwE(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  const sj_tfLdnp = utl.getJIT("sj_tfLdnp");
  return function sj_AWciwE(v) {
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
    })() + ',"language":' + JSON.stringify(v.language) + ',"timezone":' + JSON.stringify(v.timezone) + ',"notifications":' + sj_tfLdnp.fn(v.notifications) + "}";
  };
}, fn: void 0 }, "sj_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "sj", jitFnHash: "sj_tfLdnp", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const uErr0 = "Can not StringifyJson union: item does not belong to the union"; return function sj_tfLdnp(v){return '{'+'"email":'+(v.email ? 'true' : 'false')+","+'"sms":'+(v.sms ? 'true' : 'false')+","+'"push":'+(v.push ? 'true' : 'false')+","+'"frequency":'+(function(){if (v.frequency === "immediate") {return JSON.stringify(v.frequency)}else if (v.frequency === "daily") {return JSON.stringify(v.frequency)}else if (v.frequency === "weekly") {return JSON.stringify(v.frequency)}else {throw new Error(uErr0);}})()+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_tfLdnp(utl) {
  const uErr0 = "Can not StringifyJson union: item does not belong to the union";
  return function sj_tfLdnp(v) {
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
}, fn: void 0 }, "tBi_KgA2s8": { isNoop: false, typeName: "User", fnID: "tBi", jitFnHash: "tBi_KgA2s8", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_E2YuG4 = utl.getJIT("tBi_E2YuG4");\nconst tBi_vtjtZH = utl.getJIT("tBi_vtjtZH");\nconst tBi_DD9DVL = utl.getJIT("tBi_DD9DVL");\nconst tBi_P9r7Jh = utl.getJIT("tBi_P9r7Jh");\nconst tBi_AWciwE = utl.getJIT("tBi_AWciwE");\nconst tBi_Ei8qua = utl.getJIT("tBi_Ei8qua"); return function tBi_KgA2s8(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.username);Ser.serString(v.email);Ser.serString(v.profile.firstName);Ser.serString(v.profile.lastName);Ser.serString(v.profile.displayName);Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, (Ser.index += 8));\nconst bmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.profile.bio !== undefined) {Ser.serString(v.profile.bio);Ser.setBitMask(bmI0, 0 & 7)}if (v.profile.avatarUrl !== undefined) {Ser.serString(v.profile.avatarUrl);Ser.setBitMask(bmI0, 1 & 7)};tBi_E2YuG4.fn(v.role,Ser);tBi_vtjtZH.fn(v.status,Ser);tBi_DD9DVL.fn(v.address,Ser);tBi_P9r7Jh.fn(v.paymentMethods,Ser);tBi_AWciwE.fn(v.preferences,Ser);Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, (Ser.index += 8));tBi_Ei8qua.fn(v.tags,Ser);\nconst bmI1 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v.lastLoginAt !== undefined) {Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, (Ser.index += 8));Ser.setBitMask(bmI1, 0 & 7)} return Ser}', jitDependencies: ["tBi_E2YuG4", "tBi_vtjtZH", "tBi_DD9DVL", "tBi_P9r7Jh", "tBi_AWciwE", "tBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_tBi_KgA2s8(utl) {
  const tBi_E2YuG4 = utl.getJIT("tBi_E2YuG4");
  const tBi_vtjtZH = utl.getJIT("tBi_vtjtZH");
  const tBi_DD9DVL = utl.getJIT("tBi_DD9DVL");
  const tBi_P9r7Jh = utl.getJIT("tBi_P9r7Jh");
  const tBi_AWciwE = utl.getJIT("tBi_AWciwE");
  const tBi_Ei8qua = utl.getJIT("tBi_Ei8qua");
  return function tBi_KgA2s8(v, Ser) {
    Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
    Ser.serString(v.username);
    Ser.serString(v.email);
    Ser.serString(v.profile.firstName);
    Ser.serString(v.profile.lastName);
    Ser.serString(v.profile.displayName);
    Ser.view.setFloat64(Ser.index, v.profile.dateOfBirth.getTime(), 1, Ser.index += 8);
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
    tBi_E2YuG4.fn(v.role, Ser);
    tBi_vtjtZH.fn(v.status, Ser);
    tBi_DD9DVL.fn(v.address, Ser);
    tBi_P9r7Jh.fn(v.paymentMethods, Ser);
    tBi_AWciwE.fn(v.preferences, Ser);
    Ser.view.setFloat64(Ser.index, v.createdAt.getTime(), 1, Ser.index += 8);
    Ser.view.setFloat64(Ser.index, v.updatedAt.getTime(), 1, Ser.index += 8);
    tBi_Ei8qua.fn(v.tags, Ser);
    const bmI1 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v.lastLoginAt !== void 0) {
      Ser.view.setFloat64(Ser.index, v.lastLoginAt.getTime(), 1, Ser.index += 8);
      Ser.setBitMask(bmI1, 0 & 7);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "tBi", jitFnHash: "tBi_E2YuG4", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_E2YuG4(v,Ser){if (v === "admin") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "user") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "guest") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "moderator") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_E2YuG4(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_E2YuG4(v, Ser) {
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
}, fn: void 0 }, "tBi_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "tBi", jitFnHash: "tBi_vtjtZH", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_vtjtZH(v,Ser){if (v === "active") {Ser.view.setUint8(Ser.index++, 0);}else if (v === "suspended") {Ser.view.setUint8(Ser.index++, 1);}else if (v === "pending_verification") {Ser.view.setUint8(Ser.index++, 2);}else if (v === "deactivated") {Ser.view.setUint8(Ser.index++, 3);}else {throw new Error(uErr0);} return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_vtjtZH(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_vtjtZH(v, Ser) {
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
}, fn: void 0 }, "tBi_DD9DVL": { isNoop: false, typeName: "Address", fnID: "tBi", jitFnHash: "tBi_DD9DVL", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_DD9DVL(v,Ser){Ser.serString(v.street);Ser.serString(v.city);Ser.serString(v.state);Ser.serString(v.zipCode);Ser.serString(v.country);\n; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_DD9DVL(utl) {
  return function tBi_DD9DVL(v, Ser) {
    Ser.serString(v.street);
    Ser.serString(v.city);
    Ser.serString(v.state);
    Ser.serString(v.zipCode);
    Ser.serString(v.country);
    return Ser;
  };
}, fn: void 0 }, "tBi_P9r7Jh": { isNoop: false, typeName: "array", fnID: "tBi", jitFnHash: "tBi_P9r7Jh", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_G2AKWU = utl.getJIT("tBi_G2AKWU"); return function tBi_P9r7Jh(v,Ser){\n Ser.view.setUint32(Ser.index, v.length, 1); Ser.index += 4;\n for (let i0 = 0; i0 < v.length; i0++) {tBi_G2AKWU.fn(v[i0],Ser)}\n ; return Ser}', jitDependencies: ["tBi_G2AKWU"], pureFnDependencies: [], createJitFn: function get_tBi_P9r7Jh(utl) {
  const tBi_G2AKWU = utl.getJIT("tBi_G2AKWU");
  return function tBi_P9r7Jh(v, Ser) {
    Ser.view.setUint32(Ser.index, v.length, 1);
    Ser.index += 4;
    for (let i0 = 0; i0 < v.length; i0++) {
      tBi_G2AKWU.fn(v[i0], Ser);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "tBi", jitFnHash: "tBi_G2AKWU", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: `const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_G2AKWU(v,Ser){if (typeof v === 'object' && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === 'string' && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === 'string')) {Ser.view.setUint8(Ser.index++, 0);Ser.serString(v.lastFourDigits);Ser.view.setFloat64(Ser.index,v.expiryMonth, 1, (Ser.index += 8));Ser.view.setFloat64(Ser.index,v.expiryYear, 1, (Ser.index += 8));Ser.serString(v.brand);
;}else if (typeof v === 'object' && v !== null && (v.type === "bank_account" && typeof v.bankName === 'string' && typeof v.accountLastFour === 'string' && typeof v.routingNumber === 'string')) {Ser.view.setUint8(Ser.index++, 1);Ser.serString(v.bankName);Ser.serString(v.accountLastFour);Ser.serString(v.routingNumber);
;}else if (typeof v === 'object' && v !== null && (v.type === "paypal" && typeof v.email === 'string')) {Ser.view.setUint8(Ser.index++, 2);Ser.serString(v.email);
;}else {throw new Error(uErr0);} return Ser}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_G2AKWU(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_G2AKWU(v, Ser) {
    if (typeof v === "object" && v !== null && (v.type === "credit_card" && typeof v.lastFourDigits === "string" && Number.isFinite(v.expiryMonth) && Number.isFinite(v.expiryYear) && typeof v.brand === "string")) {
      Ser.view.setUint8(Ser.index++, 0);
      Ser.serString(v.lastFourDigits);
      Ser.view.setFloat64(Ser.index, v.expiryMonth, 1, Ser.index += 8);
      Ser.view.setFloat64(Ser.index, v.expiryYear, 1, Ser.index += 8);
      Ser.serString(v.brand);
    } else if (typeof v === "object" && v !== null && (v.type === "bank_account" && typeof v.bankName === "string" && typeof v.accountLastFour === "string" && typeof v.routingNumber === "string")) {
      Ser.view.setUint8(Ser.index++, 1);
      Ser.serString(v.bankName);
      Ser.serString(v.accountLastFour);
      Ser.serString(v.routingNumber);
    } else if (typeof v === "object" && v !== null && (v.type === "paypal" && typeof v.email === "string")) {
      Ser.view.setUint8(Ser.index++, 2);
      Ser.serString(v.email);
    } else {
      throw new Error(uErr0);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "tBi", jitFnHash: "tBi_AWciwE", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union";\nconst tBi_tfLdnp = utl.getJIT("tBi_tfLdnp"); return function tBi_AWciwE(v,Ser){if (v.theme === "light") {Ser.view.setUint8(Ser.index++, 0);}else if (v.theme === "dark") {Ser.view.setUint8(Ser.index++, 1);}else if (v.theme === "system") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);};Ser.serString(v.language);Ser.serString(v.timezone);tBi_tfLdnp.fn(v.notifications,Ser);\n; return Ser}', jitDependencies: ["tBi_tfLdnp"], pureFnDependencies: [], createJitFn: function get_tBi_AWciwE(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  const tBi_tfLdnp = utl.getJIT("tBi_tfLdnp");
  return function tBi_AWciwE(v, Ser) {
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
    tBi_tfLdnp.fn(v.notifications, Ser);
    return Ser;
  };
}, fn: void 0 }, "tBi_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "tBi", jitFnHash: "tBi_tfLdnp", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const uErr0 = "Can not encode union to binary: item does not belong to the union"; return function tBi_tfLdnp(v,Ser){Ser.view.setUint8(Ser.index++, !!v.email);Ser.view.setUint8(Ser.index++, !!v.sms);Ser.view.setUint8(Ser.index++, !!v.push);if (v.frequency === "immediate") {Ser.view.setUint8(Ser.index++, 0);}else if (v.frequency === "daily") {Ser.view.setUint8(Ser.index++, 1);}else if (v.frequency === "weekly") {Ser.view.setUint8(Ser.index++, 2);}else {throw new Error(uErr0);}\n; return Ser}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_tfLdnp(utl) {
  const uErr0 = "Can not encode union to binary: item does not belong to the union";
  return function tBi_tfLdnp(v, Ser) {
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
}, fn: void 0 }, "fBi_KgA2s8": { isNoop: false, typeName: "User", fnID: "fBi", jitFnHash: "fBi_KgA2s8", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_E2YuG4 = utl.getJIT("fBi_E2YuG4");\nconst fBi_vtjtZH = utl.getJIT("fBi_vtjtZH");\nconst fBi_DD9DVL = utl.getJIT("fBi_DD9DVL");\nconst fBi_P9r7Jh = utl.getJIT("fBi_P9r7Jh");\nconst fBi_AWciwE = utl.getJIT("fBi_AWciwE");\nconst fBi_Ei8qua = utl.getJIT("fBi_Ei8qua"); return function fBi_KgA2s8(ret,Des){ret = {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),username:Des.desString(),email:Des.desString(),role:fBi_E2YuG4.fn(undefined,Des),status:fBi_vtjtZH.fn(undefined,Des),address:fBi_DD9DVL.fn(undefined,Des),paymentMethods:fBi_P9r7Jh.fn(undefined,Des),preferences:fBi_AWciwE.fn(undefined,Des),createdAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),updatedAt:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8))),tags:fBi_Ei8qua.fn(undefined,Des)}\nret.profile = {firstName:Des.desString(),lastName:Des.desString(),displayName:Des.desString(),dateOfBirth:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}\n\nconst bimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI0, 1) & (1 << (0 & 7))) {ret.profile.bio = Des.desString();}if (Des.view.getUint8(bimI0, 1) & (1 << (1 & 7))) {ret.profile.avatarUrl = Des.desString();};\nconst bimI1 = Des.index; Des.index += 1;\nif (Des.view.getUint8(bimI1, 1) & (1 << (0 & 7))) {ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)));} return ret}', jitDependencies: ["fBi_E2YuG4", "fBi_vtjtZH", "fBi_DD9DVL", "fBi_P9r7Jh", "fBi_AWciwE", "fBi_Ei8qua"], pureFnDependencies: [], createJitFn: function get_fBi_KgA2s8(utl) {
  const fBi_E2YuG4 = utl.getJIT("fBi_E2YuG4");
  const fBi_vtjtZH = utl.getJIT("fBi_vtjtZH");
  const fBi_DD9DVL = utl.getJIT("fBi_DD9DVL");
  const fBi_P9r7Jh = utl.getJIT("fBi_P9r7Jh");
  const fBi_AWciwE = utl.getJIT("fBi_AWciwE");
  const fBi_Ei8qua = utl.getJIT("fBi_Ei8qua");
  return function fBi_KgA2s8(ret, Des) {
    ret = { id: Des.view.getFloat64(Des.index, 1, Des.index += 8), username: Des.desString(), email: Des.desString(), role: fBi_E2YuG4.fn(void 0, Des), status: fBi_vtjtZH.fn(void 0, Des), address: fBi_DD9DVL.fn(void 0, Des), paymentMethods: fBi_P9r7Jh.fn(void 0, Des), preferences: fBi_AWciwE.fn(void 0, Des), createdAt: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)), updatedAt: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)), tags: fBi_Ei8qua.fn(void 0, Des) };
    ret.profile = { firstName: Des.desString(), lastName: Des.desString(), displayName: Des.desString(), dateOfBirth: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)) };
    const bimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI0, 1) & 1 << (0 & 7)) {
      ret.profile.bio = Des.desString();
    }
    if (Des.view.getUint8(bimI0, 1) & 1 << (1 & 7)) {
      ret.profile.avatarUrl = Des.desString();
    }
    const bimI1 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(bimI1, 1) & 1 << (0 & 7)) {
      ret.lastLoginAt = new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8));
    }
    return ret;
  };
}, fn: void 0 }, "fBi_E2YuG4": { isNoop: false, typeName: "UserRole", fnID: "fBi", jitFnHash: "fBi_E2YuG4", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_E2YuG4(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = "admin"}else if (dec0 === 1) {ret = "user"}else if (dec0 === 2) {ret = "guest"}else if (dec0 === 3) {ret = "moderator"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_E2YuG4(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_E2YuG4(ret, Des) {
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
}, fn: void 0 }, "fBi_vtjtZH": { isNoop: false, typeName: "AccountStatus", fnID: "fBi", jitFnHash: "fBi_vtjtZH", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_vtjtZH(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = "active"}else if (dec0 === 1) {ret = "suspended"}else if (dec0 === 2) {ret = "pending_verification"}else if (dec0 === 3) {ret = "deactivated"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_vtjtZH(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_vtjtZH(ret, Des) {
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
}, fn: void 0 }, "fBi_DD9DVL": { isNoop: false, typeName: "Address", fnID: "fBi", jitFnHash: "fBi_DD9DVL", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_DD9DVL(ret,Des){return {street:Des.desString(),city:Des.desString(),state:Des.desString(),zipCode:Des.desString(),country:Des.desString()}}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_DD9DVL(utl) {
  return function fBi_DD9DVL(ret, Des) {
    return { street: Des.desString(), city: Des.desString(), state: Des.desString(), zipCode: Des.desString(), country: Des.desString() };
  };
}, fn: void 0 }, "fBi_P9r7Jh": { isNoop: false, typeName: "array", fnID: "fBi", jitFnHash: "fBi_P9r7Jh", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_G2AKWU = utl.getJIT("fBi_G2AKWU"); return function fBi_P9r7Jh(ret,Des){\n const arrL0 = Des.view.getUint32(Des.index, 1); Des.index += 4; ret = new Array(arrL0);\n for (let i0 = 0; i0 < arrL0; i0++) {ret[i0] = fBi_G2AKWU.fn(undefined,Des);}\n ; return ret}', jitDependencies: ["fBi_G2AKWU"], pureFnDependencies: [], createJitFn: function get_fBi_P9r7Jh(utl) {
  const fBi_G2AKWU = utl.getJIT("fBi_G2AKWU");
  return function fBi_P9r7Jh(ret, Des) {
    const arrL0 = Des.view.getUint32(Des.index, 1);
    Des.index += 4;
    ret = new Array(arrL0);
    for (let i0 = 0; i0 < arrL0; i0++) {
      ret[i0] = fBi_G2AKWU.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_G2AKWU": { isNoop: false, typeName: "PaymentMethod", fnID: "fBi", jitFnHash: "fBi_G2AKWU", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_G2AKWU(ret,Des){\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret = {type:"credit_card",lastFourDigits:Des.desString(),expiryMonth:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),expiryYear:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),brand:Des.desString()}}else if (dec0 === 1) {ret = {type:"bank_account",bankName:Des.desString(),accountLastFour:Des.desString(),routingNumber:Des.desString()}}else if (dec0 === 2) {ret = {type:"paypal",email:Des.desString()}}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_G2AKWU(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_G2AKWU(ret, Des) {
    const dec0 = Des.view.getUint8(Des.index++);
    if (dec0 === 0) {
      ret = { type: "credit_card", lastFourDigits: Des.desString(), expiryMonth: Des.view.getFloat64(Des.index, 1, Des.index += 8), expiryYear: Des.view.getFloat64(Des.index, 1, Des.index += 8), brand: Des.desString() };
    } else if (dec0 === 1) {
      ret = { type: "bank_account", bankName: Des.desString(), accountLastFour: Des.desString(), routingNumber: Des.desString() };
    } else if (dec0 === 2) {
      ret = { type: "paypal", email: Des.desString() };
    } else {
      throw new Error(uErr0);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_AWciwE": { isNoop: false, typeName: "UserPreferences", fnID: "fBi", jitFnHash: "fBi_AWciwE", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index";\nconst fBi_tfLdnp = utl.getJIT("fBi_tfLdnp"); return function fBi_AWciwE(ret,Des){ret = {language:Des.desString(),timezone:Des.desString(),notifications:fBi_tfLdnp.fn(undefined,Des)}\n\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret.theme = "light"}else if (dec0 === 1) {ret.theme = "dark"}else if (dec0 === 2) {ret.theme = "system"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: ["fBi_tfLdnp"], pureFnDependencies: [], createJitFn: function get_fBi_AWciwE(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  const fBi_tfLdnp = utl.getJIT("fBi_tfLdnp");
  return function fBi_AWciwE(ret, Des) {
    ret = { language: Des.desString(), timezone: Des.desString(), notifications: fBi_tfLdnp.fn(void 0, Des) };
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
}, fn: void 0 }, "fBi_tfLdnp": { isNoop: false, typeName: "NotificationSettings", fnID: "fBi", jitFnHash: "fBi_tfLdnp", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const uErr0 = "Can not binary decode union: invalid union index"; return function fBi_tfLdnp(ret,Des){ret = {email:Des.view.getUint8(Des.index++) === 1,sms:Des.view.getUint8(Des.index++) === 1,push:Des.view.getUint8(Des.index++) === 1}\n\n const dec0 = Des.view.getUint8(Des.index++);\n if (dec0 === 0) {ret.frequency = "immediate"}else if (dec0 === 1) {ret.frequency = "daily"}else if (dec0 === 2) {ret.frequency = "weekly"}\n else {throw new Error(uErr0)}\n ; return ret}', jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_tfLdnp(utl) {
  const uErr0 = "Can not binary decode union: invalid union index";
  return function fBi_tfLdnp(ret, Des) {
    ret = { email: Des.view.getUint8(Des.index++) === 1, sms: Des.view.getUint8(Des.index++) === 1, push: Des.view.getUint8(Des.index++) === 1 };
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
}, fn: void 0 }, "is_bJLZ3X": { isNoop: false, typeName: "params", fnID: "is", jitFnHash: "is_bJLZ3X", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const is_H5fd3n = utl.getJIT("is_H5fd3n"); return function is_bJLZ3X(v){return (v.length <= 1 && is_H5fd3n.fn(v[0]))}', jitDependencies: ["is_H5fd3n"], pureFnDependencies: [], createJitFn: function get_is_bJLZ3X(utl) {
  const is_H5fd3n = utl.getJIT("is_H5fd3n");
  return function is_bJLZ3X(v) {
    return v.length <= 1 && is_H5fd3n.fn(v[0]);
  };
}, fn: void 0 }, "is_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "is", jitFnHash: "is_H5fd3n", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_H5fd3n(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())))}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_H5fd3n(utl) {
  return function is_H5fd3n(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.name === "string" && typeof v.surname === "string" && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()));
  };
}, fn: void 0 }, "te_bJLZ3X": { isNoop: false, typeName: "params", fnID: "te", jitFnHash: "te_bJLZ3X", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: 'const te_H5fd3n = utl.getJIT("te_H5fd3n");\nconst Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_bJLZ3X(v,pth=[],er=[]){if (v.length > 1) Iqa2M8Ms(pth,er,"params"); else {pth.push(0); te_H5fd3n.fn(v[0],pth,er); pth.splice(-1);} return er}', jitDependencies: ["te_H5fd3n"], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_bJLZ3X(utl) {
  const te_H5fd3n = utl.getJIT("te_H5fd3n");
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_bJLZ3X(v, pth = [], er = []) {
    if (v.length > 1) Iqa2M8Ms(pth, er, "params");
    else {
      pth.push(0);
      te_H5fd3n.fn(v[0], pth, er);
      pth.splice(-1);
    }
    return er;
  };
}, fn: void 0 }, "te_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "te", jitFnHash: "te_H5fd3n", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_H5fd3n(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_H5fd3n(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_H5fd3n(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
      if (typeof v.surname !== "string") Iqa2M8Ms(pth, er, "string", ["surname"]);
      if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
    }
    return er;
  };
}, fn: void 0 }, "tj_bJLZ3X": { isNoop: true, typeName: "params", fnID: "tj", jitFnHash: "tj_bJLZ3X", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_bJLZ3X(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_bJLZ3X(utl) {
  return function tj_bJLZ3X(v) {
    return v;
  };
}, fn: void 0 }, "tj_H5fd3n": { isNoop: true, typeName: "SimpleUser", fnID: "tj", jitFnHash: "tj_H5fd3n", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_H5fd3n(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_H5fd3n(utl) {
  return function tj_H5fd3n(v) {
    return v;
  };
}, fn: void 0 }, "fj_bJLZ3X": { isNoop: false, typeName: "params", fnID: "fj", jitFnHash: "fj_bJLZ3X", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: 'const fj_H5fd3n = utl.getJIT("fj_H5fd3n"); return function fj_bJLZ3X(v){v[0] = fj_H5fd3n.fn(v[0]); return v}', jitDependencies: ["fj_H5fd3n"], pureFnDependencies: [], createJitFn: function get_fj_bJLZ3X(utl) {
  const fj_H5fd3n = utl.getJIT("fj_H5fd3n");
  return function fj_bJLZ3X(v) {
    v[0] = fj_H5fd3n.fn(v[0]);
    return v;
  };
}, fn: void 0 }, "fj_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "fj", jitFnHash: "fj_H5fd3n", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_H5fd3n(v){v.lastUpdate = new Date(v.lastUpdate); return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_H5fd3n(utl) {
  return function fj_H5fd3n(v) {
    v.lastUpdate = new Date(v.lastUpdate);
    return v;
  };
}, fn: void 0 }, "sj_bJLZ3X": { isNoop: false, typeName: "params", fnID: "sj", jitFnHash: "sj_bJLZ3X", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: `const sj_H5fd3n = utl.getJIT("sj_H5fd3n"); return function sj_bJLZ3X(v){return '['+sj_H5fd3n.fn(v[0])+']'}`, jitDependencies: ["sj_H5fd3n"], pureFnDependencies: [], createJitFn: function get_sj_bJLZ3X(utl) {
  const sj_H5fd3n = utl.getJIT("sj_H5fd3n");
  return function sj_bJLZ3X(v) {
    return "[" + sj_H5fd3n.fn(v[0]) + "]";
  };
}, fn: void 0 }, "sj_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "sj", jitFnHash: "sj_H5fd3n", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function sj_H5fd3n(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_H5fd3n(utl) {
  return function sj_H5fd3n(v) {
    return '{"id":' + v.id + ',"name":' + JSON.stringify(v.name) + ',"surname":' + JSON.stringify(v.surname) + ',"lastUpdate":"' + v.lastUpdate.toJSON() + '"}';
  };
}, fn: void 0 }, "tBi_bJLZ3X": { isNoop: false, typeName: "params", fnID: "tBi", jitFnHash: "tBi_bJLZ3X", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: 'const tBi_H5fd3n = utl.getJIT("tBi_H5fd3n"); return function tBi_bJLZ3X(v,Ser){const tbmI0 = Ser.index; Ser.view.setUint8(Ser.index++, 0)\nif (v[0] !== undefined) {tBi_H5fd3n.fn(v[0],Ser);Ser.setBitMask(tbmI0, 0)} ; return Ser}', jitDependencies: ["tBi_H5fd3n"], pureFnDependencies: [], createJitFn: function get_tBi_bJLZ3X(utl) {
  const tBi_H5fd3n = utl.getJIT("tBi_H5fd3n");
  return function tBi_bJLZ3X(v, Ser) {
    const tbmI0 = Ser.index;
    Ser.view.setUint8(Ser.index++, 0);
    if (v[0] !== void 0) {
      tBi_H5fd3n.fn(v[0], Ser);
      Ser.setBitMask(tbmI0, 0);
    }
    return Ser;
  };
}, fn: void 0 }, "tBi_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "tBi", jitFnHash: "tBi_H5fd3n", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_H5fd3n(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.name);Ser.serString(v.surname);Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, (Ser.index += 8));\n; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_H5fd3n(utl) {
  return function tBi_H5fd3n(v, Ser) {
    Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
    Ser.serString(v.name);
    Ser.serString(v.surname);
    Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, Ser.index += 8);
    return Ser;
  };
}, fn: void 0 }, "fBi_bJLZ3X": { isNoop: false, typeName: "params", fnID: "fBi", jitFnHash: "fBi_bJLZ3X", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: 'const fBi_H5fd3n = utl.getJIT("fBi_H5fd3n"); return function fBi_bJLZ3X(ret,Des){ret = [];const tbimI0 = Des.index; Des.index += 1;\nif (Des.view.getUint8(tbimI0, 1) & (1 << (0))) {ret[0] = fBi_H5fd3n.fn(undefined,Des)} ; return ret}', jitDependencies: ["fBi_H5fd3n"], pureFnDependencies: [], createJitFn: function get_fBi_bJLZ3X(utl) {
  const fBi_H5fd3n = utl.getJIT("fBi_H5fd3n");
  return function fBi_bJLZ3X(ret, Des) {
    ret = [];
    const tbimI0 = Des.index;
    Des.index += 1;
    if (Des.view.getUint8(tbimI0, 1) & 1 << 0) {
      ret[0] = fBi_H5fd3n.fn(void 0, Des);
    }
    return ret;
  };
}, fn: void 0 }, "fBi_H5fd3n": { isNoop: false, typeName: "SimpleUser", fnID: "fBi", jitFnHash: "fBi_H5fd3n", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_H5fd3n(ret,Des){return {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),name:Des.desString(),surname:Des.desString(),lastUpdate:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_H5fd3n(utl) {
  return function fBi_H5fd3n(ret, Des) {
    return { id: Des.view.getFloat64(Des.index, 1, Des.index += 8), name: Des.desString(), surname: Des.desString(), lastUpdate: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)) };
  };
}, fn: void 0 }, "is_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "is", jitFnHash: "is_wKsME6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function is_wKsME6(v){return (typeof v === 'object' && v !== null && Number.isFinite(v.id) && typeof v.name === 'string' && typeof v.surname === 'string' && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime())))}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_is_wKsME6(utl) {
  return function is_wKsME6(v) {
    return typeof v === "object" && v !== null && Number.isFinite(v.id) && typeof v.name === "string" && typeof v.surname === "string" && (v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()));
  };
}, fn: void 0 }, "te_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "te", jitFnHash: "te_wKsME6", args: { "pλth": "pth", "εrr": "er", "vλl": "v" }, defaultParamValues: { "pλth": "[]", "εrr": "[]", "vλl": "" }, code: `const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr"); return function te_wKsME6(v,pth=[],er=[]){
 if (!(typeof v === 'object' && v !== null)) {
 Iqa2M8Ms(pth,er,"object");
 } else {
 if(!(Number.isFinite(v.id))) Iqa2M8Ms(pth,er,"number",["id"]);if (typeof v.name !== 'string') Iqa2M8Ms(pth,er,"string",["name"]);if (typeof v.surname !== 'string') Iqa2M8Ms(pth,er,"string",["surname"]);if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth,er,"date",["lastUpdate"]);
 }
 ; return er}`, jitDependencies: [], pureFnDependencies: ["mion::newRunTypeErr"], createJitFn: function get_te_wKsME6(utl) {
  const Iqa2M8Ms = utl.getPureFn("mion", "newRunTypeErr");
  return function te_wKsME6(v, pth = [], er = []) {
    if (!(typeof v === "object" && v !== null)) {
      Iqa2M8Ms(pth, er, "object");
    } else {
      if (!Number.isFinite(v.id)) Iqa2M8Ms(pth, er, "number", ["id"]);
      if (typeof v.name !== "string") Iqa2M8Ms(pth, er, "string", ["name"]);
      if (typeof v.surname !== "string") Iqa2M8Ms(pth, er, "string", ["surname"]);
      if (!(v.lastUpdate instanceof Date && !isNaN(v.lastUpdate.getTime()))) Iqa2M8Ms(pth, er, "date", ["lastUpdate"]);
    }
    return er;
  };
}, fn: void 0 }, "tj_wKsME6": { isNoop: true, typeName: "SimpleUser", fnID: "tj", jitFnHash: "tj_wKsME6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function tj_wKsME6(v){return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tj_wKsME6(utl) {
  return function tj_wKsME6(v) {
    return v;
  };
}, fn: void 0 }, "fj_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "fj", jitFnHash: "fj_wKsME6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: " return function fj_wKsME6(v){v.lastUpdate = new Date(v.lastUpdate); return v}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fj_wKsME6(utl) {
  return function fj_wKsME6(v) {
    v.lastUpdate = new Date(v.lastUpdate);
    return v;
  };
}, fn: void 0 }, "sj_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "sj", jitFnHash: "sj_wKsME6", args: { "vλl": "v" }, defaultParamValues: { "vλl": "" }, code: ` return function sj_wKsME6(v){return '{'+'"id":'+v.id+","+'"name":'+JSON.stringify(v.name)+","+'"surname":'+JSON.stringify(v.surname)+","+'"lastUpdate":'+'"'+v.lastUpdate.toJSON()+'"'+'}'}`, jitDependencies: [], pureFnDependencies: [], createJitFn: function get_sj_wKsME6(utl) {
  return function sj_wKsME6(v) {
    return '{"id":' + v.id + ',"name":' + JSON.stringify(v.name) + ',"surname":' + JSON.stringify(v.surname) + ',"lastUpdate":"' + v.lastUpdate.toJSON() + '"}';
  };
}, fn: void 0 }, "tBi_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "tBi", jitFnHash: "tBi_wKsME6", args: { "sεr": "Ser", "vλl": "v" }, defaultParamValues: { "sεr": "", "vλl": "" }, code: " return function tBi_wKsME6(v,Ser){Ser.view.setFloat64(Ser.index,v.id, 1, (Ser.index += 8));Ser.serString(v.name);Ser.serString(v.surname);Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, (Ser.index += 8));\n; return Ser}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_tBi_wKsME6(utl) {
  return function tBi_wKsME6(v, Ser) {
    Ser.view.setFloat64(Ser.index, v.id, 1, Ser.index += 8);
    Ser.serString(v.name);
    Ser.serString(v.surname);
    Ser.view.setFloat64(Ser.index, v.lastUpdate.getTime(), 1, Ser.index += 8);
    return Ser;
  };
}, fn: void 0 }, "fBi_wKsME6": { isNoop: false, typeName: "SimpleUser", fnID: "fBi", jitFnHash: "fBi_wKsME6", args: { "dεs": "Des", "vλl": "ret" }, defaultParamValues: { "dεs": "", "vλl": "" }, code: " return function fBi_wKsME6(ret,Des){return {id:Des.view.getFloat64(Des.index, 1, (Des.index += 8)),name:Des.desString(),surname:Des.desString(),lastUpdate:new Date(Des.view.getFloat64(Des.index, 1, (Des.index += 8)))}}", jitDependencies: [], pureFnDependencies: [], createJitFn: function get_fBi_wKsME6(utl) {
  return function fBi_wKsME6(ret, Des) {
    return { id: Des.view.getFloat64(Des.index, 1, Des.index += 8), name: Des.desString(), surname: Des.desString(), lastUpdate: new Date(Des.view.getFloat64(Des.index, 1, Des.index += 8)) };
  };
}, fn: void 0 } };
const routerCache = { "@thrownErrors": { paramNames: [], type: 1, id: "@thrownErrors", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "cm6MsK", pointer: ["@thrownErrors"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } }, "mion@notFound": { paramNames: [], type: 1, id: "mion@notFound", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "a8UQwC", pointer: ["mion@notFound"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } }, "mion@platformError": { paramNames: [], type: 1, id: "mion@platformError", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "zxRrbt", pointer: ["mion@platformError"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } }, "mion@methodsMetadataById": { paramNames: ["methodsIds", "getAllRemoteMethods"], type: 1, id: "mion@methodsMetadataById", isAsync: false, hasReturnData: true, paramsJitHash: "JtnVhp", returnJitHash: "emWGIa", pointer: ["mion@methodsMetadataById"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "stringifyJson" } }, "mion@methodsMetadataByPath": { paramNames: ["path", "getAllRemoteMethods"], type: 1, id: "mion@methodsMetadataByPath", isAsync: false, hasReturnData: true, paramsJitHash: "hZzD9z", returnJitHash: "emWGIa", pointer: ["mion@methodsMetadataByPath"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "stringifyJson" } }, "hello": { paramNames: [], type: 1, id: "hello", isAsync: false, hasReturnData: true, paramsJitHash: "", returnJitHash: "nDtnjh", pointer: ["hello"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } }, "updateUser": { paramNames: ["user"], type: 1, id: "updateUser", isAsync: false, hasReturnData: true, paramsJitHash: "h19ZNf", returnJitHash: "KgA2s8", pointer: ["updateUser"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } }, "updateSimpleUser": { paramNames: ["user"], type: 1, id: "updateSimpleUser", isAsync: false, hasReturnData: true, paramsJitHash: "bJLZ3X", returnJitHash: "wKsME6", pointer: ["updateSimpleUser"], nestLevel: 0, options: { runOnError: false, validateParams: true, validateReturn: false, serializer: "json" } } };
mionRoutes.addAOTCaches(jitFnsCache, pureFnsCache);
mionRoutes.addRoutesToCache(routerCache);
function loadAOTCaches() {
  mionRoutes.addAOTCaches(jitFnsCache, pureFnsCache);
  mionRoutes.addRoutesToCache(routerCache);
  mionRoutes.loadCompiledMethods(routerCache);
}
loadAOTCaches.__type = ["loadAOTCaches", "P$/!"];
exports.loadAOTCaches = loadAOTCaches;
//# sourceMappingURL=aotCacheLoader-HjZ02TKu.js.map
