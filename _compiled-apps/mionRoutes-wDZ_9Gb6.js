"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const __ΩReadonly$1 = ["T", "Readonly", 'l+e#!e"!fRb!Pde"!gN#%w"y'];
const __ΩOmit$1 = ["T", "K", () => __ΩPick$3, () => __ΩExclude$1, "Omit", 'b!b"e!!e!!ge!"o$#o##w%y'];
const __ΩRecord$3 = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
const __ΩIterableIterator = ["T", "TReturn", "TNext", () => __ΩIterator, 0, () => Symbol.iterator, "IterableIterator", `b!"c""c#Pe"!e""e"#o$$Pe#!e#"e##o%$1&Mw'y`];
const __ΩPick$3 = ["T", "K", "Pick", 'l+e#!e"!fRb!b"Pde""N#!w#y'];
const __ΩExclude$1 = ["T", "U", "Exclude", 'l6!Re$!RPe#!e$"qk#%QRb!b"Pde"!p)w#y'];
const __ΩIterator = ["T", "TReturn", "TNext", "param0", () => __ΩIteratorResult, "next", "value", () => __ΩIteratorResult, "return", "e", () => __ΩIteratorResult, "throw", "Iterator", `b!"c""c#PPPPGPe%#GJ@2$e#!e#"o%#1&Pe#"2'8e#!e#"o(#1)8P"2*8e#!e#"o+#1,8Mw-y`];
const __ΩIteratorResult = ["T", "TReturn", () => __ΩIteratorYieldResult, () => __ΩIteratorReturnResult, "IteratorResult", 'b!"c"Pe"!o#"e""o$"Jw%y'];
const __ΩIteratorYieldResult = ["TYield", false, "done", "value", "IteratorYieldResult", 'b!P."4#8e"!4$Mw%y'];
const __ΩIteratorReturnResult = ["TReturn", true, "done", "value", "IteratorReturnResult", 'b!P."4#e"!4$Mw%y'];
const __ΩCallContext = ["ContextData", "path", () => __ΩMionRequest, "request", () => __ΩMionResponse, "response", "shared", "MethodsExecutionChain", "executionChain", "urlQuery", "routesFlowRouteIds", "CallContext", `"c!P&4"9n#4$9n%4&9e"!4'"w(4)9&4*89&F4+89Mw,y`];
const __ΩRawRequestBody = ["AnyObject", "RawRequestBody", 'P&_W"w!Jw"y'];
const __ΩRawResponseBody = ["AnyObject", "RawResponseBody", 'P&_W"w!Jw"y'];
const __ΩMionRequest = [() => __ΩReadonly$1, () => __ΩOmit$1, () => __ΩMionHeaders, "append", "set", "delete", "headers", () => __ΩRawRequestBody, "rawBody", "SerializerCode", "bodyType", () => __ΩReadonly$1, "AnyObject", "body", () => __ΩReadonly$1, () => __ΩRecord$3, "RpcError", "thrownErrors", "MionRequest", `Pn#P.$.%.&Jo"#o!"4'9n(4)9"w*4+9"w-o,"4.9&"w1o0#o/"4289Mw3y`];
const __ΩMionResponse = ["statusCode", () => __ΩReadonly$1, () => __ΩMionHeaders, "headers", () => __ΩRawResponseBody, "rawBody", "SerializerCode", "serializer", () => __ΩReadonly$1, () => __ΩResponseBody, "body", "hasErrors", "DataViewSerializer", "binSerializer", "MionResponse", `P'4!9n#o""4$9n%4&9"w'4(9n*o)"4+9)4,9P"w--J4.89Mw/y`];
const __ΩMionHeaders = ["name", "value", "append", "delete", "set", "get", "has", () => __ΩIterableIterator, "entries", () => __ΩIterableIterator, "keys", () => __ΩIterableIterator, "values", "MionHeaders", `PP&2!&2"$1#P&2!$1$P&2!&2"$1%P&2!P&-,J1&P&2!)1'PP&&Go("1)P&o*"1+P&o,"1-Mw.y`];
const __ΩContextDataFactory = ["ContextData", "", "ContextDataFactory", 'b!Pe"!/"w#y'];
const __ΩResponseBody = [() => __ΩRecord$3, () => __ΩRecord$3, "RpcError", "@thrownErrors", "ResponseBody", 'P&"o!#&"w#o"#4$8Mw%y'];
const __ΩRoutesFlowExecutionResult = ["MethodsExecutionChain", "executionChain", "routesFlowRouteIds", "RoutesFlowMapping", "mappings", "RoutesFlowExecutionResult", 'P"w!4"&F4#8"w$F4%8Mw&y'];
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
const __ΩPick$2 = ["T", "K", "Pick", 'l+e#!e"!fRb!b"Pde""N#!w#y'];
const __ΩRemoteMethod = ["AnyHandler", "H", "MethodWithJitFns", "RemoteMethodOpts", "options", "handler", "args", "", "methodCaller", "RemoteMethod", `"w!c"P"w#"w$4%e"!4&P"@2'"/(4)8Mw*y`];
const __ΩRouteMethod = ["H", () => __ΩRemoteMethod, () => HandlerType.route, "type", "RouteOnlyOptions", "options", "RouteMethod", `"c!Pe"!o""i#4$"w%4&Mw'y`];
const __ΩMiddleFnMethod = ["H", () => __ΩRemoteMethod, () => HandlerType.middleFn, "type", "MiddleFnMethod", '"c!Pe"!o""i#4$Mw%y'];
const __ΩHeadersMethod = ["H", () => __ΩRemoteMethod, () => HandlerType.headersMiddleFn, "type", "HeadersMethodWithJitFns", "headersParam", "HeadersMethod", `"c!Pe"!o""i#4$"w%4&Mw'y`];
const __ΩRawMethod = ["H", () => __ΩRemoteMethod, () => HandlerType.rawMiddleFn, "type", "RemoteMethodOpts", false, "validateParams", false, "validateReturn", "options", "RawMethod", `"c!Pe"!o""i#4$P"w%P.&4'.(4)8MK4*Mw+y`];
const __ΩRouteOptions = [() => __ΩPartial, () => __ΩPick$2, () => __ΩRouteMethod, "options", "description", "validateParams", "validateReturn", "serializer", "isMutation", "RouteOptions", `n#.$fP.%.&.'.(.)Jo"#o!"w*y`];
const __ΩMiddleFnOptions = [() => __ΩPartial, () => __ΩPick$2, () => __ΩMiddleFnMethod, "options", "description", "validateParams", "validateReturn", "runOnError", "MiddleFnOptions", `n#.$fP.%.&.'.(Jo"#o!"w)y`];
const __ΩHeadersMiddleFnOptions = [() => __ΩPartial, () => __ΩPick$2, () => __ΩHeadersMethod, "options", "description", "validateParams", "validateReturn", "runOnError", "HeadersMiddleFnOptions", `n#.$fP.%.&.'.(Jo"#o!"w)y`];
const __ΩRawMiddleFnOptions = [() => __ΩPartial, () => __ΩPick$2, () => __ΩRawMethod, "options", "description", "runOnError", "RawMiddleFnOptions", `n#.$fP.%.&Jo"#o!"w'y`];
const __ΩMethodsExecutionChain = ["routeIndex", () => __ΩRemoteMethod, "methods", "SerializerCode", "serializer", "MethodsExecutionChain", `P'4!n"F4#"w$4%Mw&y`];
const __ΩPick$1 = ["T", "K", "Pick", 'l+e#!e"!fRb!b"Pde""N#!w#y'];
const __ΩRouteDef = ["H", () => __ΩPick$1, () => __ΩRouteMethod, "type", "handler", () => __ΩRouteOptions, "options", "RouteDef", `"c!Pe"!o#"P.$.%Jo"#Pn&4'8MKw(y`];
const __ΩMiddleFnDef = ["H", () => __ΩPick$1, () => __ΩMiddleFnMethod, "type", "handler", () => __ΩMiddleFnOptions, "options", "MiddleFnDef", `"c!Pe"!o#"P.$.%Jo"#Pn&4'8MKw(y`];
const __ΩHeadersMiddleFnDef = ["H", () => __ΩPick$1, () => __ΩHeadersMethod, "type", "handler", () => __ΩHeadersMiddleFnOptions, "options", "HeadersMiddleFnDef", `"c!Pe"!o#"P.$.%Jo"#Pn&4'8MKw(y`];
const __ΩRawMiddleFnDef = ["H", () => __ΩPick$1, () => __ΩRawMethod, "type", "handler", () => __ΩRawMiddleFnOptions, "options", "RawMiddleFnDef", `"c!Pe"!o#"P.$.%Jo"#Pn&4'8MKw(y`];
const DEFAULT_CORE_OPTIONS = {
  /** automatically generate and uuid */
  autoGenerateErrorId: false
};
const PATH_SEPARATOR = "/";
const ROUTE_PATH_ROOT = PATH_SEPARATOR;
const ROUTER_ITEM_SEPARATOR_CHAR = "/";
const MAX_STACK_DEPTH = 50;
const MION_ROUTES = {
  /** get remote methods metadata by method id */
  methodsMetadataById: "mion@methodsMetadataById",
  /** get remote methods metadata by route path, this include all middleFns in the ExecutionChain of the route. */
  methodsMetadataByPath: "mion@methodsMetadataByPath",
  /** Platform or adapters errors that occur before reaching the router or outside the router and are platform/adapter related */
  platformError: "mion@platformError",
  /** not-found route. This route is called when a requested route doesn't exist */
  notFound: "mion@notFound",
  /**
   * !IMPORTANT!!
   * This is technically not a route, but a special key used to store unexpected errors in the response body.
   * is declared as a route to reuse existing router serialization/deserialization logic.
   * Errors thrown by routes/middleFns, these are not strongly typed
   * */
  thrownErrors: "@thrownErrors"
};
const StatusCodes = {
  /** Any error in the server that is not related to the application, ie: server not ready, etc... */
  SERVER_ERROR: 500,
  /** Any expected and strongly typed error returned by a route/middleFn. ie: entity not found, etc. */
  APPLICATION_ERROR: 400,
  /**  Any thrown or unexpected error in the application, ie: validation error, not found, etc, database error, serialization error, etc...
   * These are are typically irrecoverable and can be handled globally, ie redirect to login page if auth fails
   */
  UNEXPECTED_ERROR: 422,
  /** Not found error */
  NOT_FOUND: 404,
  /** Standard success code */
  OK: 200
};
const HandlerType$1 = {
  route: 1,
  middleFn: 2,
  headersMiddleFn: 3,
  rawMiddleFn: 4
};
const JIT_FUNCTION_IDS = {
  isType: "is",
  typeErrors: "te",
  prepareForJson: "tj",
  restoreFromJson: "fj",
  stringifyJson: "sj",
  toJSCode: "tc",
  toBinary: "tBi",
  fromBinary: "fBi",
  format: "fmt",
  unknownKeyErrors: "uk",
  hasUnknownKeys: "hk",
  stripUnknownKeys: "sk",
  unknownKeysToUndefined: "ku",
  aux: "aux",
  mock: "mock",
  pureFunction: "pf"
};
const EMPTY_HASH = "";
const __ΩStrNumber$1 = ["StrNumber", "P&'Jw!y"];
const __ΩTypeFormatError = ["name", () => __ΩStrNumber$1, () => __ΩStrNumber$1, "val", () => __ΩStrNumber$1, "formatPath", "TypeFormatError", `P&4!Pn")*Pn#)*JFJ4$n%F4&Mw'y`];
const __ΩPureFunction = ["args", "", "PureFunction", 'P"@2!"/"w#y'];
const __ΩPureFunctionFactory = ["JITUtils", "jitUtils", () => __ΩPureFunction, "", "PureFunctionFactory", 'P"w!2"n#/$w%y'];
const __ΩPureFunctionData = ["namespace", "paramNames", "code", "fnName", "bodyHash", "pureFnDependencies", "PureFunctionData", `P&4!9&F4"9&4#9&4$9&4%9&F4&9Mw'y`];
const __ΩCompiledPureFunction = [() => __ΩPureFunctionData, () => __ΩPureFunctionFactory, "createPureFn", () => __ΩPureFunction, "fn", "CompiledPureFunction", 'Pn!n"4#n$4%8Mw&y'];
const __ΩRecord$2 = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
const __ΩDataView = [() => __ΩArrayBufferLike, "TArrayBuffer", "buffer", "byteLength", "byteOffset", "littleEndian", "getFloat32", "getFloat64", "getInt8", "getInt16", "getInt32", "getUint8", "getUint16", "getUint32", "value", "setFloat32", "setFloat64", "setInt8", "setInt16", "setInt32", "setUint8", "setUint16", "setUint32", "DataView", `n!c"Pe"!4#9'4$9'4%9P'2%)2&8'1'P'2%)2&8'1(P'2%'1)P'2%)2&8'1*P'2%)2&8'1+P'2%'1,P'2%)2&8'1-P'2%)2&8'1.P'2%'2/)2&8$10P'2%'2/)2&8$11P'2%'2/$12P'2%'2/)2&8$13P'2%'2/)2&8$14P'2%'2/$15P'2%'2/)2&8$16P'2%'2/)2&8$17Mw8y`];
const __ΩArrayBufferLike = [() => __ΩArrayBufferTypes, () => __ΩArrayBufferTypes, "ArrayBufferLike", 'n!n"gfw#y'];
const __ΩArrayBufferTypes = ["ArrayBuffer", "ArrayBufferTypes", 'P_4!Mw"y'];
const SerializerModes = {
  /** Use prepareForJson (mutates original objects), and leaves JSON.stringify to the platform adapter */
  json: 1,
  /** Use toBinary JIT function for binary serialization */
  binary: 2,
  /** Use stringifyJson JIT function that do not mutates objects. */
  stringifyJson: 3
};
const __ΩSerializerMode = [() => SerializerModes, "SerializerMode", 'i!gw"y'];
const __ΩCoreRouterOptions = ["autoGenerateErrorId", "basePath", "suffix", "CoreRouterOptions", 'P)4!&4"&4#Mw$y'];
const __ΩMapKeyPathSegment = ["key", "index", "mapKey", "failed", "MapKeyPathSegment", `P#4!'4".#4$Mw%y`];
const __ΩMapValuePathSegment = ["key", "index", "mapVal", "failed", "MapValuePathSegment", `P#4!'4".#4$Mw%y`];
const __ΩSetItemPathSegment = ["key", "index", "SetItemPathSegment", `P#4!'4"Mw#y`];
const __ΩPathSegment = [() => __ΩStrNumber, () => __ΩMapKeyPathSegment, () => __ΩMapValuePathSegment, () => __ΩSetItemPathSegment, "PathSegment", 'Pn!n"n#n$Jw%y'];
const __ΩRunTypeError = [() => __ΩPathSegment, "path", "expected", () => __ΩTypeFormatError, "format", "RunTypeError", 'Pn!F4"&4#n$4%8Mw&y'];
const __ΩJitFnArgs = ["vλl", "JitFnArgs", 'P&4!&&LMw"y'];
const __ΩJitCompiledFnData = ["typeName", "fnID", "jitFnHash", () => __ΩJitFnArgs, "args", () => __ΩJitFnArgs, "defaultParamValues", "isNoop", "code", "jitDependencies", "pureFnDependencies", "paramNames", "JitCompiledFnData", `P&4!9&4"9&4#9n$4%9n&4'9)4(89&4)9&F4*9&F4+9&F4,8Mw-y`];
const __ΩJitCompiledFn = [() => __ΩAnyFn, "Fn", () => __ΩJitCompiledFnData, "JITUtils", "utl", "", "createJitFn", "fn", "JitCompiledFn", `n!c"Pn#P"w$2%e#!/&4'9e"!4(9Mw)y`];
const __ΩJsonStringifyFn = ["value", () => __ΩJSONString, "", "JsonStringifyFn", 'P"2!n"/#w$y'];
const __ΩRestoreFromJsonFn = [() => __ΩJSONValue, "value", "", "RestoreFromJsonFn", 'Pn!2""/#w$y'];
const __ΩPrepareForJsonFn = ["value", () => __ΩJSONValue, "", "PrepareForJsonFn", 'P"2!n"/#w$y'];
const __ΩTypeErrorsFn = ["value", () => __ΩRunTypeError, "", "TypeErrorsFn", 'P"2!n"F/#w$y'];
const __ΩIsTypeFn = ["value", "", "IsTypeFn", 'P"2!)/"w#y'];
const __ΩToCodeFn = ["value", "", "ToCodeFn", 'P"2!&/"w#y'];
const __ΩToBinaryFn = ["value", () => __ΩDataViewSerializer, "serializer", "", "ToBinaryFn", 'P"2!n"2#$/$w%y'];
const __ΩFromBinaryFn = ["value", () => __ΩDataViewDeserializer, "deserializer", "", "FromBinaryFn", 'P-2!n"2#"/$w%y'];
const __ΩJitFunctionsCache = [() => __ΩRecord$2, () => __ΩJitCompiledFn, "JitFunctionsCache", '&n"o!#w#y'];
const __ΩPureFunctionsCache = [() => __ΩRecord$2, () => __ΩRecord$2, () => __ΩCompiledPureFunction, "PureFunctionsCache", '&&n#o"#o!#w$y'];
const __ΩFnsDataCache = [() => __ΩRecord$2, () => __ΩJitCompiledFnData, "FnsDataCache", '&n"o!#w#y'];
const __ΩPureFnsDataCache = [() => __ΩRecord$2, () => __ΩRecord$2, () => __ΩPureFunctionData, "PureFnsDataCache", '&&n#o"#o!#w$y'];
const __ΩSrcCodeJitCompiledFn = [() => __ΩJitCompiledFnData, "JITUtils", "utl", () => __ΩAnyFn, "", "createJitFn", "fn", "SrcCodeJitCompiledFn", `Pn!P"w"2#n$/%4&9-4'9Mw(y`];
const __ΩSrcCodeCompiledPureFunction = [() => __ΩPureFunctionData, "JITUtils", "utl", () => __ΩAnyFn, "", "createPureFn", "fn", "SrcCodeCompiledPureFunction", `Pn!P"w"2#n$/%4&9-4'9Mw(y`];
const __ΩSrcCodeJITCompiledFnsCache = [() => __ΩRecord$2, () => __ΩSrcCodeJitCompiledFn, "SrcCodeJITCompiledFnsCache", '&n"o!#w#y'];
const __ΩSrcCodePureFunctionsCache = [() => __ΩRecord$2, () => __ΩRecord$2, () => __ΩSrcCodeCompiledPureFunction, "SrcCodePureFunctionsCache", '&&n#o"#o!#w$y'];
const __ΩStrNumber = ["StrNumber", "P&'Jw!y"];
const __ΩAnyFn = ["args", "", "AnyFn", 'P"@2!"/"w#y'];
const __ΩAnyObject = [() => __ΩRecord$2, "AnyObject", '&#o!#w"y'];
const __ΩJSONValue = [() => __ΩStrNumber, 0, 0, "JSONValue", 'Pn!),P&n"LMn#FJw$y'];
const __ΩJSONString = ["JSONString", "&w!y"];
const __ΩStrictArrayBuffer = ["buffer", "StrictArrayBuffer", 'P_P-4!8MKw"y'];
const __ΩDataViewSerializer = ["index", () => __ΩDataView, "view", "", "reset", () => __ΩStrictArrayBuffer, "getBuffer", "getBufferView", "markAsEnded", "getLength", "str", "serString", "n", "serFloat64", "serEnum", "bitMaskIndex", "bitIndex", "setBitMask", "DataViewSerializer", `P'4!n"4#P$/$4%Pn&/$4'PW/$4(P$/$4)P'1*P&2+$1,P'2-$1.PP'&J2-$1/P'20'21$12Mw3y`];
const __ΩDataViewDeserializer = ["index", () => __ΩDataView, "view", "", "reset", () => __ΩStrictArrayBuffer, "buffer", "byteOffset", "byteLength", "setBuffer", "markAsEnded", "getLength", "desString", "desFloat64", "desEnum", "DataViewDeserializer", `P'4!n"4#P$/$4%Pn&2''2(8'2)8$/$4*P$/$4+P'1,P&1-P'1.PP'&J1/Mw0y`];
const __ΩRecord$1 = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
const __ΩMethodMetadata = ["type", "id", "isAsync", "hasReturnData", "paramNames", "paramsJitHash", "returnJitHash", () => __ΩHeadersMetaData, "headersParam", () => __ΩHeadersMetaData, "headersReturn", "middleFnIds", "pointer", "nestLevel", "MethodMetadata", `P'4!&4")4#)4$&F4%8&4&&4'n(4)8n*4+8&F4,8&F4-'4.Mw/y`];
const __ΩRemoteMethodOpts = ["runOnError", "validateParams", "validateReturn", "description", () => __ΩSerializerMode, "serializer", "isMutation", "RemoteMethodOpts", `P)4!8)4"8)4#8&4$8n%4&8P)-J4'8Mw(y`];
const __ΩMethodWithOptions = [() => __ΩMethodMetadata, () => __ΩRemoteMethodOpts, "options", "MethodWithOptions", 'Pn!n"4#Mw$y'];
const __ΩMethodsCache = [() => __ΩRecord$1, () => __ΩMethodWithOptions, "MethodsCache", '&n"o!#w#y'];
const __ΩHeadersMetaData = ["headerNames", "jitHash", "HeadersMetaData", 'P&F4!&4"Mw#y'];
const __ΩSerializableMethodsData = [() => __ΩMethodsCache, "methods", () => __ΩFnsDataCache, "deps", () => __ΩPureFnsDataCache, "purFnDeps", "SerializableMethodsData", `Pn!4"n#4$n%4&Mw'y`];
const STR = 1;
const NUM = 2;
const POW_2_32 = 2 ** 32;
const LE = true;
const DEFAULT_OPTIONS = {
  maxPoolItems: 100,
  maxStrCacheLength: 64,
  maxCacheSize: 1e3,
  bufferSize: 2 ** 24,
  averageResponseSizeMultiplier: 2,
  responseAverageSizes: /* @__PURE__ */ new Map(),
  stringBytesCache: /* @__PURE__ */ new Map()
};
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
let opts = { ...DEFAULT_OPTIONS };
function createDataViewSerializer(routeId, workflowRouteIds) {
  const size = calculateBufferSizeForRequest(routeId, workflowRouteIds);
  if (size >= POW_2_32) throw new Error("bufferSize option must be strictly less than 2 ** 32");
  return new DataViewSerializerImpl(routeId, size);
}
function createDataViewDeserializer(routeId, input) {
  if (ArrayBuffer.isView(input)) {
    const buffer = input.buffer;
    return new DataViewDeserializerImpl(routeId, buffer, input.byteOffset, input.byteLength);
  }
  return new DataViewDeserializerImpl(routeId, input);
}
class DataViewSerializerImpl {
  constructor(routeId, size) {
    __publicField(this, "buffer");
    __publicField(this, "uint8View");
    // Reusable view
    __publicField(this, "routeId");
    __publicField(this, "index", 0);
    // byte offset
    __publicField(this, "view");
    __publicField(this, "hasEnded", false);
    this.routeId = routeId;
    this.buffer = new ArrayBuffer(size);
    this.view = new DataView(this.buffer);
    this.uint8View = new Uint8Array(this.buffer);
  }
  reset() {
    this.index = 0;
    this.hasEnded = false;
  }
  resize(size) {
    this.buffer = new ArrayBuffer(size);
    this.view = new DataView(this.buffer);
    this.uint8View = new Uint8Array(this.buffer);
  }
  getBuffer() {
    const buff = this.buffer.slice(0, this.index);
    return buff;
  }
  getBufferView() {
    return new Uint8Array(this.buffer, 0, this.index);
  }
  markAsEnded() {
    this.hasEnded = true;
    updateResponseSize(this.routeId, this.index);
  }
  getLength() {
    return this.index;
  }
  serString(str, skipCache) {
    if (str.length >= opts.maxStrCacheLength || skipCache) {
      const targetView2 = this.uint8View.subarray(this.index + 4);
      const result2 = textEncoder.encodeInto(str, targetView2);
      this.view.setUint32(this.index, result2.written, LE);
      this.index += 4 + result2.written;
      return;
    }
    const cached = opts.stringBytesCache.get(str);
    if (cached) {
      this.uint8View.set(cached, this.index + 4);
      this.view.setUint32(this.index, cached.length, LE);
      this.index += 4 + cached.length;
      return;
    }
    const targetView = this.uint8View.subarray(this.index + 4);
    const result = textEncoder.encodeInto(str, targetView);
    const written = result.written;
    this.view.setUint32(this.index, written, LE);
    this.index += 4 + written;
    if (opts.stringBytesCache.size >= opts.maxCacheSize) evictStringBytesCache();
    opts.stringBytesCache.set(str, this.uint8View.slice(this.index - written, this.index));
  }
  serFloat64(n) {
    this.view.setFloat64(this.index, n, LE);
    this.index += 8;
  }
  serEnum(n) {
    if (typeof n === "number") {
      this.view.setUint32(this.index, NUM, LE);
      this.index += 4;
      this.view.setUint32(this.index, n, LE);
      this.index += 4;
      return;
    }
    this.view.setUint32(this.index, STR, LE);
    this.index += 4;
    this.serString(n);
  }
  setBitMask(bitMaskIndex, bitIndex) {
    const newBitmask = this.view.getUint8(bitMaskIndex) | 1 << bitIndex;
    this.view.setUint8(bitMaskIndex, newBitmask);
  }
}
class DataViewDeserializerImpl {
  constructor(routeId, buffer, byteOffset, byteLength) {
    __publicField(this, "buffer");
    __publicField(this, "uint8View");
    // Reusable view
    __publicField(this, "routeId");
    __publicField(this, "index", 0);
    __publicField(this, "view");
    __publicField(this, "hasEnded", false);
    this.routeId = routeId;
    this.buffer = buffer;
    this.index = 0;
    this.view = new DataView(buffer, byteOffset, byteLength);
    this.uint8View = new Uint8Array(buffer, byteOffset, byteLength);
  }
  reset() {
    this.index = 0;
    this.hasEnded = false;
  }
  setBuffer(buffer, byteOffset, byteLength) {
    this.index = 0;
    this.buffer = buffer;
    this.view = new DataView(buffer, byteOffset, byteLength);
    this.uint8View = new Uint8Array(buffer, byteOffset, byteLength);
    this.hasEnded = false;
  }
  markAsEnded() {
    this.hasEnded = true;
  }
  getLength() {
    return this.index;
  }
  desString() {
    const len = this.view.getUint32(this.index, LE);
    this.index += 4;
    const decoded = textDecoder.decode(this.uint8View.subarray(this.index, this.index + len));
    this.index += len;
    return decoded;
  }
  /** Deserialize a string that will be used as a property name, with prototype pollution protection */
  desSafePropName() {
    const key = this.desString();
    const len = key.length;
    if (len === 9) {
      if (key === "__proto__" || key === "prototype") throw new Error(`Unsafe property name: ${key}`);
    } else if (len === 11) {
      if (key === "constructor") throw new Error(`Unsafe property name: ${key}`);
    }
    return key;
  }
  desFloat64() {
    const value = this.view.getFloat64(this.index, LE);
    this.index += 8;
    return value;
  }
  desEnum() {
    const type = this.view.getUint32(this.index, LE);
    this.index += 4;
    if (type === NUM) {
      const value = this.view.getUint32(this.index, LE);
      this.index += 4;
      return value;
    }
    return this.desString();
  }
}
function calculateBufferSizeForRequest(routeId, workflowRouteIds) {
  if (!workflowRouteIds || workflowRouteIds.length === 0) {
    return calculateDefaultBufferSize(routeId);
  }
  let totalSize = 0;
  for (const id of workflowRouteIds) {
    totalSize += calculateDefaultBufferSize(id);
  }
  return totalSize;
}
function calculateDefaultBufferSize(routeId) {
  const size = opts.responseAverageSizes.get(routeId);
  if (!size) return opts.bufferSize;
  return size * opts.averageResponseSizeMultiplier;
}
function updateResponseSize(routeId, responseSize) {
  const currentSize = opts.responseAverageSizes.get(routeId) || opts.bufferSize;
  const average = (currentSize + responseSize) / 2;
  opts.responseAverageSizes.set(routeId, Math.floor(average));
}
function evictStringBytesCache() {
  const entries = Array.from(opts.stringBytesCache.entries());
  opts.stringBytesCache.clear();
  for (let i = Math.floor(entries.length / 2); i < entries.length; i++) {
    opts.stringBytesCache.set(entries[i][0], entries[i][1]);
  }
}
function restoreCompiledJitFns(jitCache, pureCache, jUtil) {
  const visitedPure = /* @__PURE__ */ new Set();
  const visitedJit = /* @__PURE__ */ new Set();
  for (const namespace in pureCache) {
    const nsCache = pureCache[namespace];
    const keysPureFns = Object.keys(nsCache);
    keysPureFns.forEach((key) => restoreCompiledPureFn(pureCache, namespace, key, jUtil, visitedPure));
  }
  const keysJitFns = Object.keys(jitCache);
  keysJitFns.forEach((key) => restoreCompiledJitFn(jitCache, pureCache, key, jUtil, visitedPure, visitedJit));
}
function restoreCompiledPureFn(pureCache, namespace, fnName, jUtil, visited) {
  const visitedKey = `${namespace}:${fnName}`;
  if (visited.has(visitedKey)) return;
  visited.add(visitedKey);
  const nsCache = pureCache[namespace];
  if (!nsCache) throw new Error(`Pure function namespace ${namespace} not found`);
  const pureCompiled = nsCache[fnName];
  if (!pureCompiled) throw new Error(`Pure function ${fnName} not found in namespace ${namespace}`);
  if (pureCompiled.fn) return;
  const dependencies = pureCompiled.pureFnDependencies;
  dependencies.forEach((depName) => restoreCompiledPureFn(pureCache, namespace, depName, jUtil, visited));
  if (pureCompiled.createPureFn) {
    pureCompiled.fn = pureCompiled.createPureFn(jUtil);
    return;
  }
  restorePureFunction(pureCompiled, jUtil);
}
function restoreCompiledJitFn(jitCache, pureCache, fnHash, jUtil, visitedPure, visitedJit) {
  if (visitedJit.has(fnHash)) return;
  visitedJit.add(fnHash);
  const jitCompiled = jitCache[fnHash];
  if (!jitCompiled) throw new Error(`Jit function ${fnHash} not found`);
  if (jitCompiled.fn) return;
  const pureDependencies = jitCompiled.pureFnDependencies;
  pureDependencies.forEach((dep) => {
    const parts = dep.split("::");
    if (parts.length !== 2) throw new Error(`Invalid pure function dependency format: ${dep}, expected "namespace::fnHash"`);
    const [namespace, fnHash2] = parts;
    restoreCompiledPureFn(pureCache, namespace, fnHash2, jUtil, visitedPure);
  });
  const dependencies = jitCompiled.jitDependencies;
  dependencies.forEach((dep) => restoreCompiledJitFn(jitCache, pureCache, dep, jUtil, visitedPure, visitedJit));
  if (jitCompiled.createJitFn) {
    jitCompiled.fn = jitCompiled.createJitFn(jUtil);
    return;
  }
  restoreCreateJitFn(jitCompiled, jUtil);
}
function restoreCreateJitFn(fnData, jUtil) {
  const fnName = fnData.jitFnHash;
  const fnWithContext = `'use strict'; ${fnData.code}`;
  try {
    const wrapperWithContext = new Function("utl", fnWithContext);
    const fn = wrapperWithContext(jUtil);
    const jitFn = fnData;
    jitFn.createJitFn = wrapperWithContext;
    jitFn.fn = fn;
    return jitFn;
  } catch (e) {
    throw new TypedError({
      type: "jit-fn-restore-error",
      message: `Failed to restore JIT function ${fnName}: ${e == null ? void 0 : e.message}`
    });
  }
}
function restorePureFunction(pureFnData, jUtil) {
  const fnName = pureFnData.fnName;
  const fnWithContext = `'use strict'; ${pureFnData.code}`;
  try {
    const wrapperWithContext = new Function("utl", fnWithContext);
    const fn = wrapperWithContext(jUtil);
    const pureFn = pureFnData;
    pureFn.createPureFn = wrapperWithContext;
    pureFn.fn = fn;
    return pureFn;
  } catch (e) {
    throw new TypedError({
      type: "pure-fn-restore-error",
      message: `Failed to restore pure function ${fnName}: ${e == null ? void 0 : e.message}`
    });
  }
}
const jitFnsCache = {};
const pureFnsCache = {};
const deserializeFnsRegistry = /* @__PURE__ */ new Map();
const serializableClassRegistry = /* @__PURE__ */ new Map();
const jitUtils = {
  addToJitCache(comp) {
    jitFnsCache[comp.jitFnHash] = comp;
  },
  removeFromJitCache(comp) {
    if (!jitFnsCache[comp.jitFnHash]) return;
    jitFnsCache[comp.jitFnHash] = void 0;
  },
  getJIT(jitFnHash) {
    return jitFnsCache[jitFnHash];
  },
  getJitFn(jitFnHash) {
    const comp = jitFnsCache[jitFnHash];
    if (!comp) throw new Error(`Jit function not found for jitFnHash ${jitFnHash}`);
    return comp.fn;
  },
  hasJitFn(jitFnHash) {
    var _a;
    return !!((_a = jitFnsCache[jitFnHash]) == null ? void 0 : _a.fn);
  },
  /**
   * Checks if key map can be serialized/deserialized with json and still works as a key for a map.
   * ie: if a map key is an string, it can be serialized to json and deserialized back an still will identify the correct map entry.
   * ie: if a map entry is an object, the object can not be serialized/deserialized and wont work as the same key for entry map as they are not same memory ref.
   *  */
  addPureFn(namespace, compiledFn) {
    const fnHash = compiledFn.fnName;
    if (!fnHash) throw new Error("Pure function must have a name and must be unique");
    const nsCache = ensureNamespace(namespace);
    const existing = nsCache[fnHash];
    if (existing) {
      if (existing.bodyHash && compiledFn.bodyHash && existing.bodyHash !== compiledFn.bodyHash) {
        console.warn(
          `Pure function ${namespace}::${fnHash} body hash mismatch. Existing: ${existing.bodyHash}, New: ${compiledFn.bodyHash}. Replacing with new version.`
        );
        nsCache[fnHash] = compiledFn;
        return compiledFn;
      }
      return existing;
    }
    nsCache[fnHash] = compiledFn;
    return compiledFn;
  },
  usePureFn(namespace, fnHash) {
    const nsCache = pureFnsCache[namespace];
    if (!nsCache) throw new Error(`Pure function namespace ${namespace} not found`);
    const compiled = nsCache[fnHash];
    if (!compiled) throw new Error(`Pure function with name ${fnHash} not found in namespace ${namespace}`);
    initPureFunction(compiled);
    return compiled.fn;
  },
  getPureFn(namespace, fnHash) {
    const nsCache = pureFnsCache[namespace];
    if (!nsCache) return;
    const compiled = nsCache[fnHash];
    if (!compiled) return;
    initPureFunction(compiled);
    return compiled.fn;
  },
  getCompiledPureFn(namespace, fnHash) {
    const nsCache = pureFnsCache[namespace];
    if (!nsCache) return;
    return nsCache[fnHash];
  },
  hasPureFn(namespace, fnHash) {
    const nsCache = pureFnsCache[namespace];
    if (!nsCache) return false;
    return !!nsCache[fnHash];
  },
  findCompiledPureFn(fnHash) {
    for (const namespace of Object.keys(pureFnsCache)) {
      const nsCache = pureFnsCache[namespace];
      if (nsCache && nsCache[fnHash]) return nsCache[fnHash];
    }
    return void 0;
  },
  setSerializableClass(cls) {
    const className = cls.name;
    const existingClass = serializableClassRegistry.get(className);
    if (existingClass && existingClass !== cls) throw new Error(`Deserializable Class ${className} already registered`);
    serializableClassRegistry.set(className, cls);
  },
  useSerializeClass(className) {
    const cls = serializableClassRegistry.get(className);
    if (!cls) throw new Error(`Serializable class with name ${className} not found, be sure to register it first`);
    return cls;
  },
  getSerializeClass(className) {
    return serializableClassRegistry.get(className);
  },
  setDeserializeFn(cls, deserializeFn) {
    const className = cls.name;
    const fn = deserializeFnsRegistry.get(className);
    if (fn && fn !== deserializeFn) throw new Error(`Deserialize function for class ${className} already exists`);
    if (fn) return;
    deserializeFnsRegistry.set(className, deserializeFn);
  },
  useDeserializeFn(className) {
    const fn = deserializeFnsRegistry.get(className);
    if (!fn) throw new Error(`Deserialize function for class ${className} not found, be sure to register it first`);
    return fn;
  },
  getDeserializeFn(className) {
    return deserializeFnsRegistry.get(className);
  }
};
function getJitUtils() {
  return jitUtils;
}
function addAOTCaches(aotFnsCache, aotPureCache) {
  restoreCaches(aotFnsCache, aotPureCache);
}
function restoreCaches(fnsCache, pureCache) {
  for (const key in fnsCache) {
    if (!(key in jitFnsCache)) {
      jitFnsCache[key] = { ...fnsCache[key] };
    }
  }
  for (const namespace in pureCache) {
    const nsCache = ensureNamespace(namespace);
    const sourceNsCache = pureCache[namespace];
    for (const key in sourceNsCache) {
      const existing = nsCache[key];
      const incoming = sourceNsCache[key];
      if (existing) {
        if (existing.bodyHash && incoming.bodyHash && existing.bodyHash !== incoming.bodyHash) {
          console.warn(
            `Pure function ${namespace}::${key} cache eviction: bodyHash mismatch (cached: ${existing.bodyHash}, server: ${incoming.bodyHash})`
          );
          nsCache[key] = { ...incoming };
        }
      } else {
        nsCache[key] = { ...incoming };
      }
    }
  }
  restoreCompiledJitFns(jitFnsCache, pureFnsCache, getJitUtils());
}
function getJitFnCaches() {
  return {
    jitFnsCache,
    pureFnsCache
  };
}
function ensureNamespace(namespace) {
  if (!pureFnsCache[namespace]) {
    pureFnsCache[namespace] = {};
  }
  return pureFnsCache[namespace];
}
function randomUUID_V7() {
  const uuid = crypto.randomUUID();
  const tHex = Date.now().toString(16).padStart(12, "0");
  return `${tHex.substring(0, 8)}-${tHex.substring(8)}-7${uuid.substring(15)}`;
}
function getENV(key) {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }
  return void 0;
}
function fromBase64Url(encoded) {
  return atob(encoded.replace(/-/g, "+").replace(/_/g, "/"));
}
let isTest = void 0;
function isMionCompileMode() {
  const val = getENV("MION_COMPILE");
  return val === "onlyAOT" || val === "viteSSR";
}
function isMionAOTEmitMode() {
  const val = getENV("MION_COMPILE");
  return val === "onlyAOT" || val === "viteSSR" || val === "serve";
}
function isTestEnv() {
  if (isTest !== void 0) return isTest;
  isTest = getENV("VITEST") !== void 0 || getENV("NODE_ENV") === "test";
  return isTest;
}
function initPureFunction(compiled) {
  if (compiled.fn) return;
  compiled.fn = compiled.createPureFn(getJitUtils());
}
const __ΩReadonly = ["T", "Readonly", 'l+e#!e"!fRb!Pde"!gN#%w"y'];
function __assignType$6(fn, args) {
  fn.__type = args;
  return fn;
}
let options = { ...DEFAULT_CORE_OPTIONS };
function setErrorOptions(opts2) {
  options = opts2;
}
setErrorOptions.__type = ["CoreRouterOptions", "opts", "setErrorOptions", 'P"w!2""/#'];
const _TypedError = class _TypedError extends Error {
  // Note: message and name are NOT declared as properties here
  // They are inherited from Error class and assigned in constructor
  // This prevents them from being included in type reflection for JIT validation
  constructor({ message, originalError, type }) {
    const errorMessage = message || (originalError == null ? void 0 : originalError.message) || "";
    super(errorMessage);
    /**
     * Unique error identifier,
     * Ideally this should be a symbol but we need to be able to serialize it so a namespaced prop is used instead
     */
    // eslint-disable-next-line @typescript-eslint/prefer-as-const
    __publicField(this, "mion@isΣrrθr", true);
    /** Error type, can be used as discriminator in union types*/
    __publicField(this, "type");
    this.type = type;
    Object.defineProperty(this, "message", {
      value: errorMessage,
      writable: true,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(this, "name", {
      value: "TypedError",
      writable: true,
      enumerable: false,
      configurable: true
    });
    if (originalError == null ? void 0 : originalError.stack) {
      try {
        this.stack = originalError.stack;
      } catch {
        try {
          Object.defineProperty(this, "stack", {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
        } catch {
        }
      }
    }
    Object.setPrototypeOf(this, _TypedError.prototype);
  }
};
__publicField(_TypedError, "__type", ["ErrType", () => Error, true, "mion@isΣrrθr", function() {
  return true;
}, "type", "TypedErrorParams", "param0", "constructor", "TypedError", `b!P7".#3$9>%e!!3&9P"w'2("0)5w*`]);
let TypedError = _TypedError;
const _RpcError = class _RpcError extends TypedError {
  constructor({ message, publicMessage, originalError, errorData, type, id, statusCode }) {
    const originalMessage = message || (originalError == null ? void 0 : originalError.message) || publicMessage || "";
    super({
      message: originalMessage,
      originalError,
      type
    });
    // Note: name is NOT declared as a property here
    // It is inherited from Error class and assigned in constructor
    // This prevents it from being included in type reflection for JIT validation
    /**
     * id of the error, ideally each error should unique identifiable
     * * if RouterOptions.autoGenerateErrorId is set to true and id with timestamp+uuid will be generated
     * */
    __publicField(this, "id");
    /** the message that will be returned in the response */
    __publicField(this, "publicMessage");
    /** options data related to the error, ie validation data, must be json serializable */
    __publicField(this, "errorData");
    /** optional http status code */
    __publicField(this, "statusCode");
    const { autoGenerateErrorId } = options;
    this.id = id ?? (autoGenerateErrorId ? randomUUID_V7() : void 0);
    this.publicMessage = publicMessage || "";
    this.errorData = errorData;
    this.statusCode = statusCode;
    Object.defineProperty(this, "name", {
      value: "RpcError",
      writable: true,
      enumerable: false,
      configurable: true
    });
    Object.setPrototypeOf(this, _RpcError.prototype);
  }
};
__publicField(_RpcError, "__type", ["ErrType", "ErrData", () => TypedError, "id", "publicMessage", () => __ΩReadonly, "errorData", "statusCode", "AnyErrorParams", "param0", "constructor", "RpcErrorParams", "RpcError", `b!"c"Pe"!7#P'&J3$89&3%9e!"o&"3'89'3(8P"w)2*"0+5e!!6""w,x"w-`]);
let RpcError = _RpcError;
let errorDeserializersRegistered = false;
function registerErrorDeserializers() {
  if (errorDeserializersRegistered)
    return;
  if (!TypedError || !RpcError)
    return;
  errorDeserializersRegistered = true;
  getJitUtils().setDeserializeFn(TypedError, __assignType$6((data) => {
    return new TypedError(data);
  }, ["DataOnly", "data", "", 'P"w!2""/#']));
  getJitUtils().setDeserializeFn(RpcError, __assignType$6((data) => {
    return new RpcError(data);
  }, ["DataOnly", "data", "", 'P"w!2""/#']));
}
registerErrorDeserializers.__type = ["registerErrorDeserializers", 'P"/!'];
function serializeBinaryBody$1(path, executionChain, body, isResponse, workflowRouteIds) {
  try {
    const serializer = createDataViewSerializer(path, workflowRouteIds);
    const itemsLengthIndex = serializer.index;
    serializer.index += 4;
    let itemsLength = 0;
    for (let i = 0; i < executionChain.length; i++) {
      const method = executionChain[i];
      const key = method.id;
      const value = body[key];
      if (serializeMethod(key, method, value, serializer, isResponse)) {
        itemsLength++;
      }
    }
    serializer.view.setUint32(itemsLengthIndex, itemsLength, true);
    serializer.markAsEnded();
    return { serializer, buffer: serializer.getBuffer() };
  } catch (err) {
    if (err instanceof RpcError) throw err;
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "binary-response-Serialization-error",
      publicMessage: `Failed to serialize body to binary: ${(err == null ? void 0 : err.message) || "unknown error"}`,
      originalError: err
    });
  }
}
function serializeMethod(key, method, value, serializer, isResponse) {
  const toBinary = method.returnJitFns.toBinary;
  if (!(toBinary == null ? void 0 : toBinary.fn))
    throw new RpcError({
      type: "missing-toBinary-jit-fn",
      publicMessage: `Missing toBinary JIT function for method ${method.id}`
    });
  if (toBinary.isNoop) return false;
  if (key === MION_ROUTES.thrownErrors) return false;
  if (!method.hasReturnData || typeof value === "undefined") return false;
  serializer.serString(key);
  toBinary.fn(value, serializer);
  return true;
}
const methodsCache = {};
const jitFunctionsCache = /* @__PURE__ */ new Map();
const headerJitFunctionsCache = /* @__PURE__ */ new Map();
const routesCache = {
  /**
   * Get method metadata from the router cache by id.
   * @param id - The method id
   * @returns The method metadata or undefined if not found
   */
  getMetadata(id) {
    return methodsCache[id];
  },
  /**
   * Set method metadata in the router cache
   * @param id - The method id
   * @param methodData - The method metadata
   */
  setMetadata(id, methodData) {
    methodsCache[id] = methodData;
  },
  /**
   * Check if the router cache contains a method by id.
   * @param id - The method id
   * @returns True if the method exists in the cache
   */
  hasMetadata(id) {
    return id in methodsCache;
  },
  /**
   * Get the raw router cache object.
   * Use with caution - prefer using get/set/has methods.
   * @returns The router cache object
   */
  getCache() {
    return methodsCache;
  },
  /**
   * Get method metadata with JIT functions restored from the router cache by id.
   * This augments the MethodWithOptions with paramsJitFns and returnJitFns.
   * JIT functions are cached in the entry after first access for performance.
   * @param id - The method id
   * @returns The method metadata with JIT functions or undefined if not found
   */
  getMethodJitFns(id) {
    if (id in methodsCache) {
      const cached = methodsCache[id];
      if (cached.paramsJitFns && cached.returnJitFns) {
        return cached;
      }
    }
    const metadata = this.getMetadata(id);
    if (!metadata) return void 0;
    const paramsJitFns = getJitFunctionsFromHash(metadata.paramsJitHash);
    const returnJitFns = getJitFunctionsFromHash(metadata.returnJitHash);
    const headersParam = metadata.headersParam ? { ...metadata.headersParam, jitFns: getHeaderJitFunctionsFromHash(metadata.headersParam.jitHash) } : void 0;
    const headersReturn = metadata.headersReturn ? { ...metadata.headersReturn, jitFns: getHeaderJitFunctionsFromHash(metadata.headersReturn.jitHash) } : void 0;
    const result = {
      ...metadata,
      paramsJitFns,
      returnJitFns,
      headersParam,
      headersReturn
    };
    methodsCache[id] = result;
    return result;
  },
  /**
   * Get method metadata with JIT functions restored from the router cache by id.
   * @param id
   * @returns
   */
  useMethodJitFns(id) {
    const MethodWithOptsAndJitFns = this.getMethodJitFns(id);
    if (!MethodWithOptsAndJitFns) throw new Error(`Metadata for remote method ${id} not found`);
    return MethodWithOptsAndJitFns;
  },
  /**
   * Set method metadata with JIT functions in the router cache.
   * This stores the complete MethodWithOptsAndJitFns object directly.
   * @param id - The method id
   * @param MethodWithOptsAndJitFns - The method metadata with JIT functions
   */
  setMethodJitFns(id, MethodWithOptsAndJitFns) {
    methodsCache[id] = MethodWithOptsAndJitFns;
  }
};
function addRoutesToCache(newCache) {
  for (const key in newCache) {
    if (!(key in methodsCache)) {
      methodsCache[key] = { ...newCache[key] };
    }
  }
}
function getJitFnHashes(jitHash) {
  return {
    isType: `${JIT_FUNCTION_IDS.isType}_${jitHash}`,
    typeErrors: `${JIT_FUNCTION_IDS.typeErrors}_${jitHash}`,
    prepareForJson: `${JIT_FUNCTION_IDS.prepareForJson}_${jitHash}`,
    restoreFromJson: `${JIT_FUNCTION_IDS.restoreFromJson}_${jitHash}`,
    stringifyJson: `${JIT_FUNCTION_IDS.stringifyJson}_${jitHash}`,
    toBinary: `${JIT_FUNCTION_IDS.toBinary}_${jitHash}`,
    fromBinary: `${JIT_FUNCTION_IDS.fromBinary}_${jitHash}`
  };
}
function getJitFunctionsFromHash(jitHash) {
  if (jitHash === EMPTY_HASH) return noopJitFns;
  const cached = jitFunctionsCache.get(jitHash);
  if (cached) return cached;
  const hashes = getJitFnHashes(jitHash);
  const jUtils = getJitUtils();
  const jitFns = {
    isType: jUtils.getJIT(hashes.isType),
    typeErrors: jUtils.getJIT(hashes.typeErrors),
    prepareForJson: jUtils.getJIT(hashes.prepareForJson),
    restoreFromJson: jUtils.getJIT(hashes.restoreFromJson),
    stringifyJson: jUtils.getJIT(hashes.stringifyJson),
    toBinary: jUtils.getJIT(hashes.toBinary),
    fromBinary: jUtils.getJIT(hashes.fromBinary)
  };
  for (const key in jitFns) {
    if (!jitFns[key]) throw new Error(`Jit function ${key} not found for jitHash ${jitHash}`);
  }
  jitFunctionsCache.set(jitHash, jitFns);
  return jitFns;
}
function getHeaderJitFunctionsFromHash(jitHash) {
  const cached = headerJitFunctionsCache.get(jitHash);
  if (cached) return cached;
  const hashes = getJitFnHashes(jitHash);
  const jUtils = getJitUtils();
  const jitFns = {
    isType: jUtils.getJIT(hashes.isType),
    typeErrors: jUtils.getJIT(hashes.typeErrors)
  };
  headerJitFunctionsCache.set(jitHash, jitFns);
  return jitFns;
}
function getRouterItemId(itemPointer) {
  return itemPointer.join(ROUTER_ITEM_SEPARATOR_CHAR);
}
function getRoutePath(pathPointer, routerOptions2) {
  const pathId = getRouterItemId(pathPointer);
  const basePath = routerOptions2.basePath.startsWith(ROUTE_PATH_ROOT) ? routerOptions2.basePath : `${ROUTE_PATH_ROOT}${routerOptions2.basePath}`;
  const routePath = basePath.endsWith(PATH_SEPARATOR) ? `${basePath}${pathId}` : `${basePath}${PATH_SEPARATOR}${pathId}`;
  return routerOptions2.suffix ? routePath + routerOptions2.suffix : routePath;
}
const noopJitFns = {
  isType: fakeJitFn(JIT_FUNCTION_IDS.isType),
  typeErrors: fakeJitFn(JIT_FUNCTION_IDS.typeErrors),
  prepareForJson: fakeJitFn(JIT_FUNCTION_IDS.prepareForJson),
  restoreFromJson: fakeJitFn(JIT_FUNCTION_IDS.restoreFromJson),
  stringifyJson: fakeJitFn(JIT_FUNCTION_IDS.stringifyJson),
  toBinary: fakeJitFn(JIT_FUNCTION_IDS.toBinary),
  fromBinary: fakeJitFn(JIT_FUNCTION_IDS.fromBinary)
};
function fakeJitFn(fnID) {
  return {
    typeName: "mionNoopJit",
    fnID,
    jitFnHash: EMPTY_HASH,
    args: { vλl: "v" },
    defaultParamValues: { vλl: "v" },
    isNoop: true,
    code: "",
    jitDependencies: [],
    pureFnDependencies: [],
    createJitFn: () => {
      throw new Error("isNoop JIT functions should not be called, this is a function when jit is never used");
    },
    fn: () => {
      throw new Error("isNoop JIT functions should not be called, this is a function when jit is never used");
    }
  };
}
function getNoopJitFns() {
  return noopJitFns;
}
function deserializeBinaryBody(path, buffer, isResponse) {
  try {
    const deserializer = createDataViewDeserializer(path, buffer);
    const body = {};
    const itemsLength = deserializer.view.getUint32(0, true);
    deserializer.index += 4;
    for (let i = 0; i < itemsLength; i++) {
      const key = deserializer.desString();
      const method = routesCache.getMethodJitFns(key);
      if (!method) {
        throw new RpcError({
          statusCode: StatusCodes.UNEXPECTED_ERROR,
          type: isResponse ? "binary-response-method-Deserialization-error" : "binary-request-method-Deserialization-error",
          publicMessage: `Unknown method key in binary body: ${key}`,
          errorData: { methodId: key }
        });
      }
      const value = deserializeMethod(key, method, deserializer, isResponse);
      body[key] = value;
    }
    deserializer.markAsEnded();
    return { deserializer, body };
  } catch (err) {
    if (err instanceof RpcError) throw err;
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "binary-request-Deserialization-error",
      publicMessage: `Failed to deserialize body from binary: ${(err == null ? void 0 : err.message) || "unknown error"}`,
      originalError: err
    });
  }
}
function deserializeMethod(key, method, deserializer, isResponse) {
  const jitFns = method.paramsJitFns;
  try {
    return jitFns.fromBinary.fn(void 0, deserializer);
  } catch (e) {
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "binary-request-method-Deserialization-error",
      publicMessage: `Failed to deserialize method ${key} from binary`,
      originalError: e,
      errorData: { methodId: key }
    });
  }
}
class HeadersSubset {
  constructor(headers) {
    __publicField(this, "headers");
    this.headers = headers;
  }
}
__publicField(HeadersSubset, "__type", ["Required", "Optional", "headers", "constructor", "HeadersSubset", `l+&R&R&R&Rb!!c"PPde#!N#!Pde#"N%"K3#9PPPde$!N'!Pde$"N)"K2#"0$5w%`]);
function __assignType$5(fn, args) {
  fn.__type = args;
  return fn;
}
function registerPureFnFactory(namespace, functionID, createPureFn, parsedFn) {
  if (!parsedFn)
    throw new Error("registerPureFnFactory requires mion vite plugin transform to inject parsedFn");
  const existing = getJitUtils().getCompiledPureFn(namespace, functionID);
  if (existing)
    return existing;
  const compiled = {
    createPureFn,
    fn: null,
    // will be set later so all possible dependencies are resolved
    namespace,
    fnName: functionID,
    bodyHash: parsedFn.bodyHash,
    paramNames: parsedFn.paramNames,
    code: parsedFn.code,
    pureFnDependencies: []
  };
  const { proxy, getDependencies } = createDependencyTrackingProxy();
  try {
    createPureFn(proxy);
  } catch {
  }
  const detectedDeps = getDependencies();
  for (const dep of detectedDeps) {
    if (dep === functionID)
      continue;
    if (!compiled.pureFnDependencies.includes(dep))
      compiled.pureFnDependencies.push(dep);
  }
  getJitUtils().addPureFn(namespace, compiled);
  return compiled;
}
registerPureFnFactory.__type = ["namespace", "functionID", "PureFunctionFactory", "createPureFn", "ParsedFactoryFn", "parsedFn", "CompiledPureFunction", "registerPureFnFactory", `P&2!&2""w#2$"w%2&8"w'/(`];
function createDependencyTrackingProxy() {
  const dependencies = (Set.Ω = [["&"]], /* @__PURE__ */ new Set());
  const realUtils = getJitUtils();
  const noopFn = () => () => {
  };
  const proxy = new Proxy(realUtils, {
    get(target, prop, receiver) {
      if (prop === "getPureFn" || prop === "usePureFn") {
        return __assignType$5((ns, fnName) => {
          dependencies.add(fnName);
          const real = target.getPureFn(ns, fnName);
          return real ?? noopFn;
        }, ["ns", "fnName", "", 'P&2!&2""/#']);
      }
      if (prop === "getCompiledPureFn") {
        return __assignType$5((ns, fnName) => {
          dependencies.add(fnName);
          return target.getCompiledPureFn(ns, fnName);
        }, ["ns", "fnName", "", 'P&2!&2""/#']);
      }
      if (prop === "hasPureFn") {
        return __assignType$5((ns, fnName) => {
          dependencies.add(fnName);
          return target.hasPureFn(ns, fnName);
        }, ["ns", "fnName", "", 'P&2!&2""/#']);
      }
      if (prop === "findCompiledPureFn") {
        return __assignType$5((fnName) => {
          dependencies.add(fnName);
          return target.findCompiledPureFn(fnName);
        }, ["fnName", "", 'P&2!"/"']);
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  return { proxy, getDependencies: () => dependencies };
}
createDependencyTrackingProxy.__type = ["JITUtils", "proxy", "", "getDependencies", "createDependencyTrackingProxy", 'PP"w!4"P&D/#4$M/%'];
const PURE_SERVER_FN_NAMESPACE = "pureServerFn";
const __ΩRouterEntry = [() => __ΩRoutes, () => __ΩMiddleFnDef, () => __ΩRouteDef, () => __ΩRawMiddleFnDef, () => __ΩHeadersMiddleFnDef, "RouterEntry", 'Pn!n"n#n$n%Jw&y'];
const __ΩRoutes = [() => __ΩRouterEntry, "Routes", 'P&n!LMw"y'];
const __ΩRouterOptions = ["Req", "ContextData", () => __ΩCoreRouterOptions, "basePath", "suffix", "request", "path", "", "pathTransform", () => __ΩContextDataFactory, "contextDataFactory", () => __ΩSerializerMode, "serializer", "RunTypeOptions", "runTypeOptions", "getPublicRoutesData", "autoGenerateErrorId", "skipClientRoutes", "aot", "maxContextPoolSize", "maxRoutesFlowsCacheSize", "RouterOptions", `"c!"c"Pn#&4$&4%Pe#!2&&2'&/(4)8e""o*"4+8n,4-"w.4/)40)41)42)43'44'45Mw6y`];
function isMiddleFnDef(entry) {
  return entry.type === HandlerType$1.middleFn;
}
isMiddleFnDef.__type = [() => __ΩRouterEntry, "entry", "isMiddleFnDef", 'Pn!2"!/#'];
function isRawMiddleFnDef(entry) {
  return entry.type === HandlerType$1.rawMiddleFn;
}
isRawMiddleFnDef.__type = [() => __ΩRouterEntry, "entry", "isRawMiddleFnDef", 'Pn!2"!/#'];
function isHeadersMiddleFnDef(entry) {
  return entry.type === HandlerType$1.headersMiddleFn;
}
isHeadersMiddleFnDef.__type = [() => __ΩRouterEntry, "entry", "isHeadersMiddleFnDef", 'Pn!2"!/#'];
function isAnyMiddleFnDef(entry) {
  return isMiddleFnDef(entry) || isRawMiddleFnDef(entry) || isHeadersMiddleFnDef(entry);
}
isAnyMiddleFnDef.__type = [() => __ΩRouterEntry, "entry", "isAnyMiddleFnDef", 'Pn!2"!/#'];
function isRoute(entry) {
  return entry.type === HandlerType$1.route;
}
isRoute.__type = [() => __ΩRouterEntry, "entry", "isRoute", 'Pn!2"!/#'];
function isRoutes(entry) {
  return typeof entry === "object";
}
isRoutes.__type = [() => __ΩRouterEntry, () => __ΩRoutes, "entry", "isRoutes", 'PPn!n"J2#!/$'];
function isExecutable(entry) {
  return typeof (entry == null ? void 0 : entry.id) === "string" && (entry.routes === "undefined" || typeof entry.handler === "function");
}
isExecutable.__type = [() => __ΩRemoteMethod, "pathPointer", "entry", "isExecutable", 'PPn!P&F4"MJ2#!/$'];
function isPublicExecutable(entry) {
  var _a, _b, _c;
  return entry.hasReturnData || entry.type === HandlerType$1.route || !!((_a = entry.paramNames) == null ? void 0 : _a.length) || !!((_c = (_b = entry.headersParam) == null ? void 0 : _b.headerNames) == null ? void 0 : _c.length);
}
isPublicExecutable.__type = [() => __ΩRemoteMethod, "entry", "isPublicExecutable", 'Pn!2"!/#'];
const __ΩMayReturnError = ["RpcError", "MayReturnError", 'P$"w!P"w!$J`Jw"y'];
const __ΩHandler = ["Context", "Params", "Ret", "context", "parameters", "", "Handler", '"c!"Fc""c#Pe"!2$e""@2%Pe##e##`J/&w\'y'];
const IS_TEST_ENV = getENV("JEST_WORKER_ID") !== void 0 || getENV("NODE_ENV") === "test";
const ROUTE_DEFAULT_PARAMS = ["context"];
const HEADER_HOOK_DEFAULT_PARAMS = ["context", "headers"];
const DEFAULT_ROUTE_OPTIONS = {
  /** Prefix for all routes, i.e: api/v1. Path separator is added between the prefix and the route */
  basePath: "",
  /** Suffix for all routes, i.e: .json. No path separator is added between the route and the suffix */
  suffix: "",
  /** Function that transforms the path before finding a route */
  pathTransform: void 0,
  /** Default serializer mode - json as default native serializer, and minimum overhead to transform just required fields */
  serializer: "json",
  /** Default run type compiling options for routes and middleFns, can't be configured by the user as would break functionality  */
  runTypeOptions: {},
  /** set to true to generate router spec for clients.  */
  getPublicRoutesData: process.env.GENERATE_ROUTER_SPEC === "true",
  /** Set true to automatically generate and id for every error.  */
  autoGenerateErrorId: false,
  /** client routes are initialized by default */
  skipClientRoutes: IS_TEST_ENV,
  /** AOT mode is disabled by default */
  aot: false,
  /** Context pooling size == 100 by default */
  maxContextPoolSize: 100,
  /** RoutesFlow cache size == 100 by default */
  maxRoutesFlowsCacheSize: 100
};
const MAX_ROUTE_NESTING = 10;
const WORKFLOW_KEY = `mion-routes-flow`;
const WORKFLOW_PATH = `${PATH_SEPARATOR}${WORKFLOW_KEY}`;
let persistedMethods = {};
function addToPersistedMethods(id, method) {
  if (!shouldCompile() || !!persistedMethods[id]) return;
  persistedMethods[id] = method;
}
function getPersistedMethod(id, handler) {
  const method = persistedMethods == null ? void 0 : persistedMethods[id];
  if (!method) return;
  return restorePersistedMethod(method, handler);
}
function getPersistedMethodMetadata(id) {
  const method = persistedMethods[id];
  return method;
}
function getPersistedMethods() {
  return persistedMethods;
}
function restorePersistedMethod(method, handler) {
  const restored = method;
  if (restored.paramsJitFns && restored.returnJitFns && restored.paramNames && !!restored.handler)
    return method;
  restored.handler = handler;
  restored.paramsJitFns = getJitFunctionsFromHash(method.paramsJitHash);
  restored.returnJitFns = getJitFunctionsFromHash(method.returnJitHash);
  if (IS_TEST_ENV) restored.isRestored = true;
  return restored;
}
function shouldCompile() {
  return isMionAOTEmitMode();
}
function loadCompiledMethods(compiledMethods) {
  for (const [key, value] of Object.entries(compiledMethods)) {
    if (!(key in persistedMethods)) {
      persistedMethods[key] = value;
    }
  }
}
const __ΩOmit = ["T", "K", () => __ΩPick, () => __ΩExclude, "Omit", 'b!b"e!!e!!ge!"o$#o##w%y'];
const __ΩPick = ["T", "K", "Pick", 'l+e#!e"!fRb!b"Pde""N#!w#y'];
const __ΩExclude = ["T", "U", "Exclude", 'l6!Re$!RPe#!e$"qk#%QRb!b"Pde"!p)w#y'];
function __assignType$4(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩMethodReflect = [() => __ΩOmit, "MethodWithJitFns", "id", "type", "nestLevel", "pointer", "options", "MethodReflect", `"w"P.#.$.%.&.'Jo!#w(y`];
class AOTCacheError extends Error {
  constructor(routeId, type = "route") {
    const typeLabel = type === "rawMiddleFn" ? "Raw middleFn" : type === "middleFn" ? "MiddleFn" : "Route/middleFn";
    super(`${typeLabel} "${routeId}" not found in AOT cache.
Regenerate AOT caches using 'mion-build-aot' command.`);
    this.name = "AOTCacheError";
  }
}
__publicField(AOTCacheError, "__type", [() => Error, "routeId", "route", "middleFn", "rawMiddleFn", "type", () => "route", "constructor", "AOTCacheError", `P7!P&2"P.#.$.%J2&>'"0(5w)`]);
const __ΩRunTypesModule = ["RunTypesModule", "!w!y"];
const __ΩRunTypesFunctions = [() => __ΩRunTypesModule, "JitFunctions", "JitFunctions", () => __ΩRunTypesModule, "reflectFunction", "reflectFunction", () => __ΩRunTypesModule, "isUnionRunType", "isUnionRunType", () => __ΩRunTypesModule, "isClassRunType", "isClassRunType", () => __ΩRunTypesModule, "isLiteralRunType", "isLiteralRunType", () => __ΩRunTypesModule, "isNeverRunType", "isNeverRunType", "RunTypesFunctions", `Pn!."f4#n$.%f4&n'.(f4)n*.+f4,n-..f4/n0.1f42Mw3y`];
let runTypesModule = null;
let runTypesLoadPromise = null;
async function loadRunTypesModule() {
  if (runTypesModule)
    return runTypesModule;
  if (runTypesLoadPromise)
    return runTypesLoadPromise;
  runTypesLoadPromise = Promise.resolve().then(() => require("./index-ZvYku_Ye.js")).then(__assignType$4((module2) => {
    runTypesModule = {
      JitFunctions: module2.JitFunctions,
      reflectFunction: module2.reflectFunction,
      isUnionRunType: module2.isUnionRunType,
      isClassRunType: module2.isClassRunType,
      isLiteralRunType: module2.isLiteralRunType,
      isNeverRunType: module2.isNeverRunType
    };
    return runTypesModule;
  }, ["module", "", 'P"2!"/"']));
  return runTypesLoadPromise;
}
loadRunTypesModule.__type = [() => __ΩRunTypesFunctions, "loadRunTypesModule", 'Pn!`/"'];
const rawMiddleFnReflectionCache = (Map.Ω = [["&"], [() => __ΩMethodReflect, "n!"]], /* @__PURE__ */ new Map());
function createRawMiddleFnReflection(isAsync, hasReturnData = false, paramNames = []) {
  const cacheKey = `${isAsync}_${hasReturnData}_${paramNames.join(",")}`;
  const cached = rawMiddleFnReflectionCache.get(cacheKey);
  if (cached)
    return cached;
  const reflection = {
    paramNames,
    paramsJitFns: getNoopJitFns(),
    returnJitFns: getNoopJitFns(),
    paramsJitHash: EMPTY_HASH,
    returnJitHash: EMPTY_HASH,
    hasReturnData,
    isAsync
  };
  rawMiddleFnReflectionCache.set(cacheKey, reflection);
  return reflection;
}
createRawMiddleFnReflection.__type = ["isAsync", "hasReturnData", () => false, "paramNames", () => [], () => __ΩMethodReflect, "createRawMiddleFnReflection", `P)2!)2">#&F2$>%n&/'`];
const __ΩCachedMethodMetadata = ["MethodMetadata", () => __ΩMethodReflect, "_cachedReflection", "CachedMethodMetadata", 'P"w!Pn"4#8MKw$y'];
function extractReflectionFromCached(cached) {
  if (cached._cachedReflection)
    return cached._cachedReflection;
  const reflectionItems = {
    paramNames: cached.paramNames || [],
    paramsJitFns: getJitFunctionsFromHash(cached.paramsJitHash),
    returnJitFns: getJitFunctionsFromHash(cached.returnJitHash),
    paramsJitHash: cached.paramsJitHash,
    returnJitHash: cached.returnJitHash,
    hasReturnData: cached.hasReturnData,
    isAsync: cached.isAsync
  };
  if (cached.headersParam) {
    reflectionItems.headersParam = {
      headerNames: cached.headersParam.headerNames,
      jitFns: getJitFunctionsFromHash(cached.headersParam.jitHash),
      jitHash: cached.headersParam.jitHash
    };
  }
  if (cached.headersReturn) {
    reflectionItems.headersReturn = {
      headerNames: cached.headersReturn.headerNames,
      jitFns: getJitFunctionsFromHash(cached.headersReturn.jitHash),
      jitHash: cached.headersReturn.jitHash
    };
  }
  cached._cachedReflection = reflectionItems;
  return reflectionItems;
}
extractReflectionFromCached.__type = [() => __ΩCachedMethodMetadata, "cached", () => __ΩMethodReflect, "extractReflectionFromCached", 'Pn!2"n#/$'];
async function getHandlerReflection(handler, routeId, routerOptions2, isHeadersMiddleFn = false) {
  const cached = getPersistedMethodMetadata(routeId);
  if (cached)
    return extractReflectionFromCached(cached);
  if (routerOptions2.aot)
    throw new AOTCacheError(routeId, isHeadersMiddleFn ? "middleFn" : "route");
  const rt = await loadRunTypesModule();
  return generateHandlerReflection(handler, routeId, routerOptions2, isHeadersMiddleFn, rt);
}
getHandlerReflection.__type = [() => __ΩHandler, "handler", "routeId", () => __ΩRouterOptions, "routerOptions", "isHeadersMiddleFn", () => false, () => __ΩMethodReflect, "getHandlerReflection", "Pn!2\"&2#n$2%)2&>'n(`/)"];
async function getRawMethodReflection(handler, routeId, routerOptions2) {
  const cached = getPersistedMethodMetadata(routeId);
  if (cached)
    return createRawMiddleFnReflection(cached.isAsync, cached.hasReturnData, cached.paramNames || []);
  if (routerOptions2.aot)
    return createRawMiddleFnReflection(true);
  const rt = await loadRunTypesModule();
  return generateRawMethodReflection(handler, routeId, rt);
}
getRawMethodReflection.__type = [() => __ΩHandler, "handler", "routeId", () => __ΩRouterOptions, "routerOptions", () => __ΩMethodReflect, "getRawMethodReflection", "Pn!2\"&2#n$2%n&`/'"];
function generateHandlerReflection(handler, routeId, routerOptions2, isHeadersMiddleFn, rt) {
  const reflectionItems = {};
  let handlerRunType;
  const runTypeOptions = (routerOptions2 == null ? void 0 : routerOptions2.runTypeOptions) || DEFAULT_ROUTE_OPTIONS.runTypeOptions;
  try {
    handlerRunType = rt.reflectFunction(handler);
  } catch (error) {
    throw new Error(`Can not get RunType of handler for route/middleFn "${routeId}." Error: ${error == null ? void 0 : error.message}`);
  }
  const paramsSlice = isHeadersMiddleFn ? { start: HEADER_HOOK_DEFAULT_PARAMS.length } : { start: ROUTE_DEFAULT_PARAMS.length };
  const paramsOpts = { ...runTypeOptions, paramsSlice };
  try {
    reflectionItems.paramNames = handlerRunType.getParameterNames(paramsOpts);
    if (reflectionItems.paramNames.length === 0) {
      reflectionItems.paramsJitHash = EMPTY_HASH;
      reflectionItems.paramsJitFns = getNoopJitFns();
    } else {
      reflectionItems.paramsJitFns = getFunctionJitFns(handler, paramsOpts, rt, false);
      reflectionItems.paramsJitHash = handlerRunType.getParameters().getJitHash(paramsOpts);
    }
  } catch (error) {
    throw new Error(`Can not compile Jit Functions for Parameters of route/middleFn "${routeId}." Error: ${error == null ? void 0 : error.message}`);
  }
  if (isHeadersMiddleFn) {
    const headersRunType = getParamsHeadersRunType(handlerRunType, routeId, routerOptions2, rt);
    const headerNames = getHeaderNames(headersRunType, routeId, rt);
    try {
      const opts2 = {
        ...runTypeOptions,
        paramsSlice: void 0
      };
      const jitFns = getTypeJitFunctions(headersRunType, opts2, rt);
      const jitHash = headersRunType.getJitHash(opts2);
      reflectionItems.headersParam = { headerNames, jitFns, jitHash };
    } catch (error) {
      throw new Error(`Can not compile Jit Functions for Headers of Headers MiddleFn "${routeId}." Error: ${error == null ? void 0 : error.message}`);
    }
  }
  const returnHeadersRunType = getReturnHeadersRunType(handlerRunType, rt);
  if (returnHeadersRunType) {
    const opts2 = {};
    const headerNames = getHeaderNames(returnHeadersRunType, routeId, rt);
    const jitFns = getFunctionJitFns(handler, opts2, rt, true);
    const jitHash = returnHeadersRunType.getJitHash(opts2);
    reflectionItems.headersReturn = { headerNames, jitFns, jitHash };
  }
  const returnOpts = runTypeOptions;
  reflectionItems.hasReturnData = handlerRunType.hasReturnData();
  try {
    if (!reflectionItems.hasReturnData) {
      reflectionItems.returnJitFns = getNoopJitFns();
      reflectionItems.returnJitHash = EMPTY_HASH;
    } else {
      reflectionItems.returnJitFns = getFunctionJitFns(handler, returnOpts, rt, true);
      reflectionItems.returnJitHash = handlerRunType.getReturnType().getJitHash(returnOpts);
    }
  } catch (error) {
    throw new Error(`Can not get Jit Functions for Return of route/middleFn "${routeId}." Error: ${error == null ? void 0 : error.message}`);
  }
  reflectionItems.isAsync = handlerRunType.isAsync();
  return reflectionItems;
}
generateHandlerReflection.__type = [() => __ΩHandler, "handler", "routeId", () => __ΩRouterOptions, "routerOptions", "isHeadersMiddleFn", () => __ΩRunTypesFunctions, "rt", () => __ΩMethodReflect, "generateHandlerReflection", `Pn!2"&2#n$2%)2&n'2(n)/*`];
function generateRawMethodReflection(handler, routeId, rt) {
  let handlerRunType;
  try {
    handlerRunType = rt.reflectFunction(handler);
  } catch (error) {
    throw new Error(`Can not get RunType of handler for route/middleFn "${routeId}." Error: ${error == null ? void 0 : error.message}`);
  }
  const isAsync = (handlerRunType == null ? void 0 : handlerRunType.isAsync()) || true;
  return createRawMiddleFnReflection(isAsync);
}
generateRawMethodReflection.__type = [() => __ΩHandler, "handler", "routeId", () => __ΩRunTypesFunctions, "rt", () => __ΩMethodReflect, "generateRawMethodReflection", `Pn!2"&2#n$2%n&/'`];
function getParamsHeadersRunType(handlerRunType, routeId, routerOptions2, rt) {
  var _a, _b;
  const paramRunTypes = handlerRunType.getParameters().getParamRunTypes(getFakeCompiler(routerOptions2));
  const headersSubset = (_b = (_a = paramRunTypes[1]) == null ? void 0 : _a.getMemberType) == null ? void 0 : _b.call(_a);
  if (!isHeaderSubSetRunType(headersSubset, rt)) {
    throw new Error(`Headers MiddleFn '${routeId}' second parameter must be a HeadersSubset.`);
  }
  return headersSubset;
}
getParamsHeadersRunType.__type = ["FunctionRunType", "handlerRunType", "routeId", () => __ΩRouterOptions, "routerOptions", () => __ΩRunTypesFunctions, "rt", "BaseRunType", "getParamsHeadersRunType", `P"w!2"&2#n$2%n&2'"w(/)`];
function getReturnHeadersRunType(handlerRunType, rt) {
  const returnRunType = handlerRunType.getReturnType();
  if (rt.isUnionRunType(returnRunType)) {
    const headersSubset = returnRunType.getChildRunTypes().find(__assignType$4((child) => isHeaderSubSetRunType(child, rt), ["child", "", 'P"2!"/"']));
    if (!headersSubset)
      return void 0;
    return headersSubset;
  }
  if (!isHeaderSubSetRunType(returnRunType, rt))
    return void 0;
  return returnRunType;
}
getReturnHeadersRunType.__type = ["FunctionRunType", "handlerRunType", () => __ΩRunTypesFunctions, "rt", "BaseRunType", "getReturnHeadersRunType", 'P"w!2"n#2$P"w%-J/&'];
function isHeaderSubSetRunType(runType, rt) {
  if (!runType)
    return false;
  return rt.isClassRunType(runType, HeadersSubset);
}
isHeaderSubSetRunType.__type = ["BaseRunType", "runType", () => __ΩRunTypesFunctions, "rt", "isHeaderSubSetRunType", 'PP"w!-J2"n#2$!/%'];
function getHeaderNames(runType, routeId, rt) {
  const typeArguments = runType.src.typeArguments;
  if (!typeArguments || typeArguments.length === 0) {
    throw new Error(`HeadersSubset must have type arguments in route/middleFn ${routeId}`);
  }
  const headerNames = [];
  const requiredArg = typeArguments[0];
  if (requiredArg) {
    const requiredNames = extractLiteralStringsFromType(requiredArg._rt, rt);
    headerNames.push(...requiredNames);
  }
  if (typeArguments.length > 1) {
    const optionalArg = typeArguments[1];
    if (optionalArg) {
      const optionalNames = extractLiteralStringsFromType(optionalArg._rt, rt);
      headerNames.push(...optionalNames);
    }
  }
  if (headerNames.length === 0)
    throw new Error(`Header names array cannot be empty in route/middleFn ${routeId}`);
  return headerNames;
}
getHeaderNames.__type = ["BaseRunType", "runType", "routeId", () => __ΩRunTypesFunctions, "rt", "getHeaderNames", 'P"w!2"&2#n$2%&F/&'];
function extractLiteralStringsFromTypeRecursive(runType, rt) {
  if (rt.isLiteralRunType(runType)) {
    const literal = runType.getLiteralValue();
    if (typeof literal === "string") {
      return [literal];
    }
    return [];
  }
  if (rt.isUnionRunType(runType)) {
    const children = runType.getChildRunTypes();
    const literals = [];
    for (const child of children) {
      const childLiterals = extractLiteralStringsFromTypeRecursive(child, rt);
      literals.push(...childLiterals);
    }
    return literals;
  }
  return [];
}
extractLiteralStringsFromTypeRecursive.__type = ["BaseRunType", "runType", () => __ΩRunTypesFunctions, "rt", "extractLiteralStringsFromTypeRecursive", 'P"w!2"n#2$&F/%'];
function extractLiteralStringsFromType(runType, rt) {
  if (rt.isNeverRunType(runType))
    return [];
  return extractLiteralStringsFromTypeRecursive(runType, rt);
}
extractLiteralStringsFromType.__type = ["BaseRunType", "runType", () => __ΩRunTypesFunctions, "rt", "extractLiteralStringsFromType", 'P"w!2"n#2$&F/%'];
function getFakeCompiler(routerOptions2) {
  return { opts: routerOptions2 };
}
getFakeCompiler.__type = [() => __ΩRouterOptions, "routerOptions", "JitFnCompiler", "getFakeCompiler", 'Pn!2""w#/$'];
function getTypeJitFunctions(runType, opts2, rtModule) {
  const jitFns = {
    isType: runType.createJitCompiledFunction(rtModule.JitFunctions.isType.id, void 0, opts2),
    typeErrors: runType.createJitCompiledFunction(rtModule.JitFunctions.typeErrors.id, void 0, opts2),
    prepareForJson: runType.createJitCompiledFunction(rtModule.JitFunctions.prepareForJson.id, void 0, opts2),
    restoreFromJson: runType.createJitCompiledFunction(rtModule.JitFunctions.restoreFromJson.id, void 0, opts2),
    stringifyJson: runType.createJitCompiledFunction(rtModule.JitFunctions.stringifyJson.id, void 0, opts2),
    toBinary: runType.createJitCompiledFunction(rtModule.JitFunctions.toBinary.id, void 0, opts2),
    fromBinary: runType.createJitCompiledFunction(rtModule.JitFunctions.fromBinary.id, void 0, opts2)
  };
  return jitFns;
}
getTypeJitFunctions.__type = ["BaseRunType", "runType", "RunTypeOptions", "opts", () => __ΩRunTypesFunctions, "rtModule", "JitCompiledFunctions", "getTypeJitFunctions", `P"w!2"P"w#-J2$n%2&"w'/(`];
const functionRunTypeCache = (WeakMap.Ω = [["AnyFn", '"w!'], ["FunctionRunType", '"w!']], /* @__PURE__ */ new WeakMap());
function getFunctionJitFns(fn, opts2, rtModule, isReturn) {
  let runType = functionRunTypeCache.get(fn);
  if (!runType) {
    runType = rtModule.reflectFunction(fn);
    functionRunTypeCache.set(fn, runType);
  }
  const createFn = isReturn ? runType.createJitCompiledReturnFunction.bind(runType) : runType.createJitCompiledParamsFunction.bind(runType);
  const jitFunctions = {
    isType: createFn(rtModule.JitFunctions.isType, opts2),
    typeErrors: createFn(rtModule.JitFunctions.typeErrors, opts2),
    prepareForJson: createFn(rtModule.JitFunctions.prepareForJson, opts2),
    restoreFromJson: createFn(rtModule.JitFunctions.restoreFromJson, opts2),
    stringifyJson: createFn(rtModule.JitFunctions.stringifyJson, opts2),
    toBinary: createFn(rtModule.JitFunctions.toBinary, opts2),
    fromBinary: createFn(rtModule.JitFunctions.fromBinary, opts2)
  };
  return jitFunctions;
}
getFunctionJitFns.__type = ["fn", "RunTypeOptions", "opts", () => __ΩRunTypesFunctions, "rtModule", "isReturn", "JitCompiledFunctions", "getFunctionJitFns", `P"2!P"w"-J2#n$2%)2&"w'/(`];
function route(handler, opts2) {
  return {
    type: HandlerType$1.route,
    handler,
    options: opts2
  };
}
function rawMiddleFn(handler, opts2) {
  return {
    type: HandlerType$1.rawMiddleFn,
    handler,
    options: opts2
  };
}
function getRouterFatalErrorResponse(returnErr, respHeaders) {
  const body = {
    "@thrownErrors": { [MION_ROUTES.platformError]: returnErr }
  };
  respHeaders.set("content-type", "application/json; charset=utf-8");
  const response = {
    statusCode: returnErr.statusCode || StatusCodes.SERVER_ERROR,
    // Global errors are always unexpected
    hasErrors: true,
    headers: respHeaders,
    body,
    rawBody: JSON.stringify(body),
    serializer: SerializerModes.json
    // global errors are always json
  };
  return response;
}
function onExecutableError(context, executable, err) {
  const response = context.response;
  const path = executable.id;
  const rpcError = err instanceof RpcError ? err : new RpcError({
    statusCode: StatusCodes.UNEXPECTED_ERROR,
    publicMessage: `Unknown error in handler "${path}" of route ExecutionChain.`,
    originalError: err,
    type: "unknown-error"
  });
  if (!response.hasErrors) response.headers.set("x-rpc-error", rpcError.type);
  response.statusCode = rpcError.statusCode ?? StatusCodes.UNEXPECTED_ERROR;
  response.hasErrors = true;
  const thrownErrors = context.request.thrownErrors || {};
  thrownErrors[path] = rpcError;
  context.request.thrownErrors = thrownErrors;
}
function deserializeRequestBody(context) {
  if (!context.request.rawBody)
    return;
  let parsedBody;
  switch (context.request.bodyType) {
    case SerializerModes.stringifyJson:
      try {
        parsedBody = JSON.parse(context.request.rawBody);
      } catch (err) {
        throw new RpcError({
          statusCode: StatusCodes.UNEXPECTED_ERROR,
          type: "parsing-json-request-error",
          publicMessage: `Invalid json request body: ${(err == null ? void 0 : err.message) || "unknown parsing error."}`
        });
      }
      break;
    case SerializerModes.binary: {
      const rawBody = context.request.rawBody;
      const { body } = deserializeBinaryBody(context.path, rawBody, false);
      parsedBody = body;
      break;
    }
    case SerializerModes.json:
      parsedBody = context.request.rawBody;
      break;
    default:
      throw new Error(`Invalid body type ${context.request.bodyType}`);
  }
  if (parsedBody) {
    if (Array.isArray(parsedBody)) {
      parsedBody = { [getRouteExecutableFromPath(context.path).id]: parsedBody };
    }
    if (typeof parsedBody !== "object")
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "invalid-request-body",
        publicMessage: "Wrong request body. Expecting a body containing the route name and parameters."
      });
    context.request.body = parsedBody;
  }
}
deserializeRequestBody.__type = [() => __ΩCallContext, "context", () => __ΩMayReturnError, "deserializeRequestBody", 'Pn!2"n#/$'];
function serializeResponseBody(context, opts2) {
  const response = context.response;
  const respBody = response.body;
  const bodyType = context.response.serializer;
  const thrownErrors = context.request.thrownErrors;
  if (thrownErrors)
    response.body["@thrownErrors"] = thrownErrors;
  switch (bodyType) {
    case SerializerModes.stringifyJson: {
      response.headers.set("content-type", "application/json; charset=utf-8");
      const body = stringifyBody(context, context.executionChain.methods, respBody);
      response.rawBody = body;
      break;
    }
    case SerializerModes.json: {
      response.headers.set("content-type", "application/json; charset=utf-8");
      prepareBodyForJson(context, context.executionChain.methods, respBody);
      break;
    }
    case SerializerModes.binary: {
      response.headers.set("content-type", "application/octet-stream");
      serializeBinaryBody(context, context.executionChain.methods, respBody);
      break;
    }
    default:
      throw new Error(`Invalid body type ${context.request.bodyType}`);
  }
}
serializeResponseBody.__type = [() => __ΩCallContext, "context", () => __ΩRouterOptions, "opts", () => __ΩMayReturnError, "serializeResponseBody", 'Pn!2"n#2$n%/&'];
function serializeBinaryBody(context, executionChain, respBody) {
  const response = context.response;
  const { serializer, buffer } = serializeBinaryBody$1(context.path, executionChain, respBody, true, context.routesFlowRouteIds);
  response.binSerializer = serializer;
  response.rawBody = new Uint8Array(buffer);
}
serializeBinaryBody.__type = [() => __ΩCallContext, "context", () => __ΩRemoteMethod, "executionChain", () => __ΩResponseBody, "respBody", "serializeBinaryBody", `Pn!2"n#F2$n%2&$/'`];
function stringifyBody(context, executionChain, respBody) {
  const props = [];
  for (let i = 0; i < executionChain.length; i++) {
    const method = executionChain[i];
    const returnValue = respBody[method.id];
    if (!method.hasReturnData || typeof returnValue === "undefined")
      continue;
    try {
      const jsonValue = stringifyHandlerReturnValue(method, returnValue);
      if (!jsonValue)
        continue;
      props.push(`${JSON.stringify(method.id)}:${jsonValue}`);
    } catch (e) {
      onStringifyExecutableError(context, method, e);
    }
  }
  const thrownErrors = respBody["@thrownErrors"];
  if (thrownErrors) {
    const method = getRouteExecutable(MION_ROUTES.thrownErrors);
    try {
      const jsonValue = stringifyHandlerReturnValue(method, thrownErrors);
      if (jsonValue)
        props.push(`${JSON.stringify(method.id)}:${jsonValue}`);
    } catch (e) {
      onStringifyExecutableError(context, method, e);
    }
  }
  return `{${props.join(",")}}`;
}
stringifyBody.__type = [() => __ΩCallContext, "context", () => __ΩRemoteMethod, "executionChain", () => __ΩResponseBody, "respBody", "stringifyBody", `Pn!2"n#F2$n%2&&/'`];
function onStringifyExecutableError(context, method, e) {
  const err = new RpcError({
    statusCode: StatusCodes.UNEXPECTED_ERROR,
    type: "json-stringify-response-error",
    publicMessage: `Failed to stringify return value for handler ${method.id}, expected response type: ${method.returnJitFns.stringifyJson.typeName}`,
    originalError: e,
    errorData: { methodId: method.id }
  });
  onExecutableError(context, method, err);
}
onStringifyExecutableError.__type = [() => __ΩCallContext, "context", () => __ΩRemoteMethod, "method", "e", "onStringifyExecutableError", 'Pn!2"n#2$"2%"/&'];
function stringifyHandlerReturnValue(method, returnValue) {
  if (!method.hasReturnData)
    return "";
  if (method.returnJitFns.prepareForJson.isNoop)
    JSON.stringify(returnValue);
  return method.returnJitFns.stringifyJson.fn(returnValue);
}
stringifyHandlerReturnValue.__type = [() => __ΩRemoteMethod, "method", "returnValue", "stringifyHandlerReturnValue", 'Pn!2""2#&/$'];
function prepareBodyForJson(context, executionChain, respBody) {
  for (let i = 0; i < executionChain.length; i++) {
    const method = executionChain[i];
    const returnValue = respBody[method.id];
    if (!method.hasReturnData || typeof returnValue === "undefined")
      continue;
    try {
      const preparedValue = prepareHandlerReturnValue(method, returnValue);
      if (preparedValue !== void 0)
        respBody[method.id] = preparedValue;
    } catch (e) {
      onPrepareForJsonExecutableError(context, method, e);
    }
  }
  const thrownErrors = respBody["@thrownErrors"];
  if (thrownErrors) {
    const method = getRouteExecutable(MION_ROUTES.thrownErrors);
    try {
      const preparedValue = prepareHandlerReturnValue(method, thrownErrors);
      if (preparedValue !== void 0)
        respBody[method.id] = preparedValue;
    } catch (e) {
      onPrepareForJsonExecutableError(context, method, e);
    }
  }
}
prepareBodyForJson.__type = [() => __ΩCallContext, "context", () => __ΩRemoteMethod, "executionChain", () => __ΩResponseBody, "respBody", "prepareBodyForJson", `Pn!2"n#F2$n%2&$/'`];
function onPrepareForJsonExecutableError(context, method, e) {
  const err = new RpcError({
    statusCode: StatusCodes.UNEXPECTED_ERROR,
    type: "prepare-for-json-response-error",
    publicMessage: `Failed to prepare return value for JSON for handler ${method.id}, expected response type: ${method.returnJitFns.prepareForJson.typeName}`,
    originalError: e,
    errorData: { methodId: method.id }
  });
  onExecutableError(context, method, err);
}
onPrepareForJsonExecutableError.__type = [() => __ΩCallContext, "context", () => __ΩRemoteMethod, "method", "e", "onPrepareForJsonExecutableError", 'Pn!2"n#2$"2%"/&'];
function prepareHandlerReturnValue(method, returnValue) {
  if (!method.hasReturnData)
    return void 0;
  if (method.returnJitFns.prepareForJson.isNoop)
    return returnValue;
  return method.returnJitFns.prepareForJson.fn(returnValue);
}
prepareHandlerReturnValue.__type = [() => __ΩRemoteMethod, "method", "returnValue", "prepareHandlerReturnValue", 'Pn!2""2#"/$'];
const serializerMiddleFns = {
  mionDeserializeRequest: rawMiddleFn(deserializeRequestBody, { runOnError: true }),
  mionSerializeResponse: rawMiddleFn(serializeResponseBody, { runOnError: true })
};
const publicMethods = /* @__PURE__ */ new Map();
function getPublicApi(routes2) {
  return recursiveGetSerializableRoutes(routes2);
}
function recursiveGetSerializableRoutes(routes2, currentPointer = [], publicData = {}) {
  const entries = Object.entries(routes2);
  entries.forEach(([key, item]) => {
    const itemPointer = [...currentPointer, key];
    const id = getRouterItemId(itemPointer);
    if (isPrivateDefinition(item, id)) {
      publicData[key] = null;
    } else if (isMiddleFnDef(item) || isHeadersMiddleFnDef(item) || isRoute(item)) {
      const executable = getMiddleFnExecutable(id) || getRouteExecutable(id);
      if (!executable)
        throw new Error(`Route or MiddleFn ${id} not found. Please check you have called router.registerRoutes first.`);
      publicData[key] = getSerializableMethod(executable);
    } else {
      const subRoutes = routes2[key];
      publicData[key] = recursiveGetSerializableRoutes(subRoutes, itemPointer);
    }
  });
  return publicData;
}
function getSerializableMethod(executable) {
  const existing = publicMethods.get(executable.id);
  if (existing) return existing;
  const newRemoteMethod = {
    type: executable.type,
    id: executable.id,
    nestLevel: executable.nestLevel,
    isAsync: executable.isAsync,
    hasReturnData: executable.hasReturnData,
    paramsJitHash: executable.paramsJitHash,
    returnJitHash: executable.returnJitHash,
    pointer: executable.pointer,
    ...executable.paramNames ? { paramNames: executable.paramNames } : {},
    options: executable.options
  };
  if (executable.headersParam) newRemoteMethod.headersParam = executable.headersParam;
  if (executable.middleFnIds) newRemoteMethod.middleFnIds = executable.middleFnIds;
  publicMethods.set(executable.id, newRemoteMethod);
  return newRemoteMethod;
}
function serializePureDeps(namespacedDepHash, purFnDeps, depth = 0) {
  if (depth >= MAX_STACK_DEPTH)
    throw new Error(`Max depth reached serializing pure function dependencies, for: ${namespacedDepHash}`);
  const parts = namespacedDepHash.split("::");
  if (parts.length !== 2)
    throw new Error(`Invalid pure function dependency format: ${namespacedDepHash}, expected "namespace::fnHash"`);
  const [namespace, fnHash] = parts;
  if (!purFnDeps[namespace]) purFnDeps[namespace] = {};
  if (purFnDeps[namespace][fnHash]) return;
  const pureDep = getJitUtils().getCompiledPureFn(namespace, fnHash);
  if (!pureDep) throw new Error(`Pure function ${fnHash} not found in namespace ${namespace}`);
  const serializedPureDep = { ...pureDep, pureFnDependencies: [...pureDep.pureFnDependencies] };
  purFnDeps[namespace][fnHash] = serializedPureDep;
  pureDep.pureFnDependencies.forEach((depFnHash) => serializePureDeps(`${namespace}::${depFnHash}`, purFnDeps, depth + 1));
}
function serializeJitFn(jitFnHash, deps, purFnDeps, depth = 0) {
  if (depth >= MAX_STACK_DEPTH)
    throw new Error(`Max depth reached serializing jit function dependencies for jitHash: ${jitFnHash}`);
  const jitFn = getJitUtils().getJIT(jitFnHash);
  if (!jitFn) throw new Error(`Jit function ${jitFnHash} not found`);
  if (deps[jitFnHash]) return;
  const serializedJitFn = getSerializableJitCompiler(jitFn);
  deps[jitFnHash] = serializedJitFn;
  jitFn.jitDependencies.forEach((h) => serializeJitFn(h, deps, purFnDeps, depth + 1));
  jitFn.pureFnDependencies.forEach((h) => serializePureDeps(h, purFnDeps));
}
function serializeMethodDeps(method, deps, purFnDeps) {
  const { paramsJitHash, returnJitHash } = method;
  if (paramsJitHash !== EMPTY_HASH) {
    const paramsJitHashes = getJitFnHashes(paramsJitHash);
    for (const k in paramsJitHashes) serializeJitFn(paramsJitHashes[k], deps, purFnDeps);
  }
  if (returnJitHash !== EMPTY_HASH) {
    const returnJitHashes = getJitFnHashes(returnJitHash);
    for (const k in returnJitHashes) serializeJitFn(returnJitHashes[k], deps, purFnDeps);
  }
}
function getSerializableJitCompiler(comp) {
  return {
    typeName: comp.typeName,
    fnID: comp.fnID,
    jitFnHash: comp.jitFnHash,
    args: structuredClone(comp.args),
    isNoop: comp.isNoop,
    defaultParamValues: structuredClone(comp.defaultParamValues),
    code: comp.code,
    jitDependencies: [...comp.jitDependencies],
    pureFnDependencies: [...comp.pureFnDependencies],
    ...comp.paramNames ? { paramNames: [...comp.paramNames] } : {}
  };
}
function __assignType$3(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩClientRouteOptions = [() => __ΩRouterOptions, "getAllRemoteMethodsMaxNumber", "ClientRouteOptions", `Pn!'4"8Mw#y`];
const defaultClientRouteOptions = {
  getAllRemoteMethodsMaxNumber: 100
};
const mionInternalRoutes$1 = Object.values(MION_ROUTES);
function mionGetRemoteMethodsDataById(ctx, methodsIds, getAllRemoteMethods) {
  const resp = {
    methods: {},
    deps: {},
    purFnDeps: {}
  };
  const errorData = {};
  const maxMethods = (getRouterOptions.Ω = [[() => __ΩClientRouteOptions, "n!"]], getRouterOptions()).getAllRemoteMethodsMaxNumber || defaultClientRouteOptions.getAllRemoteMethodsMaxNumber;
  const shouldReturnAll = getAllRemoteMethods && getTotalExecutables() <= maxMethods;
  const idsToReturn = shouldReturnAll ? getAllExecutablesIds().filter(__assignType$3((id) => !mionInternalRoutes$1.includes(id) && !isPrivateExecutable(getAnyExecutable(id)), ["id", "", 'P"2!"/"'])) : methodsIds;
  idsToReturn.forEach(__assignType$3((id) => addRequiredRemoteMethodsToResponse(id, resp, errorData), ["id", "", 'P"2!"/"']));
  if (Object.keys(errorData).length)
    return new RpcError({
      type: "rpc-metadata-not-found",
      publicMessage: "Errors getting Remote Methods Metadata",
      errorData
    });
  return resp;
}
mionGetRemoteMethodsDataById.__type = ["ctx", "methodsIds", "getAllRemoteMethods", () => __ΩSerializableMethodsData, "rpc-metadata-not-found", () => RpcError, "mionGetRemoteMethodsDataById", `P"2!&F2")2#8Pn$P.%7&J/'`];
function mionGetRemoteMethodsDataByPath(ctx, path, getAllRemoteMethods) {
  const executables = getRouteExecutionChain(path);
  if (!executables)
    return new RpcError({
      type: "rpc-metadata-not-found",
      publicMessage: `Route ${path} not found`
    });
  const privateExecutables = executables.methods.filter(__assignType$3((e) => !isPrivateExecutable(e), ["e", "", 'P"2!"/"']));
  return mionGetRemoteMethodsDataById(ctx, privateExecutables.map(__assignType$3((e) => e.id, ["e", "", 'P"2!"/"'])), getAllRemoteMethods);
}
mionGetRemoteMethodsDataByPath.__type = ["ctx", "path", "getAllRemoteMethods", () => __ΩSerializableMethodsData, "rpc-metadata-not-found", () => RpcError, "mionGetRemoteMethodsDataByPath", `P"2!&2")2#8Pn$P.%7&J/'`];
function addRequiredRemoteMethodsToResponse(id, resp, errorData) {
  var _a;
  const { methods, deps, purFnDeps } = resp;
  if (methods[id])
    return;
  if (mionInternalRoutes$1.includes(id))
    return;
  const executable = getMiddleFnExecutable(id) || getRouteExecutable(id);
  if (!executable) {
    errorData[id] = `Remote Method ${id} not found`;
    return;
  }
  if (isPrivateExecutable(executable))
    return;
  const method = getSerializableMethod(executable);
  methods[id] = method;
  (_a = method.middleFnIds) == null ? void 0 : _a.forEach(__assignType$3((middleFnId) => addRequiredRemoteMethodsToResponse(middleFnId, resp, errorData), ["middleFnId", "", 'P"2!"/"']));
  serializeMethodDeps(method, deps, purFnDeps);
}
addRequiredRemoteMethodsToResponse.__type = ["id", () => __ΩSerializableMethodsData, "resp", () => __ΩAnyObject, "errorData", "addRequiredRemoteMethodsToResponse", 'P&2!n"2#n$2%$/&'];
const mionClientRoutes = {
  // Client routes always use stringifyJson serialization to avoid mutating data as is cached
  // These routes are used by the client to fetch metadata and must work regardless of router's default serialization
  [MION_ROUTES.methodsMetadataById]: route(mionGetRemoteMethodsDataById, { serializer: "stringifyJson" }),
  [MION_ROUTES.methodsMetadataByPath]: route(mionGetRemoteMethodsDataByPath, { serializer: "stringifyJson" })
};
const __ΩRecord = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
function __assignType$2(fn, args) {
  fn.__type = args;
  return fn;
}
const mionErrorsRoutes = {
  /**
   * !IMPORTANT!
   * This is declared as route mostly to reuse existing router serialization/deserialization functionality.
   * But "@thrownErrors" is expected to be a field in response body that contain all thrown errors from other executables.
   * thrown Errors are not strongly typed and are all serialized/deserialized as RpcError<string>.
   * this also prevents users to register a route with the same name.
   */
  [MION_ROUTES.thrownErrors]: route(__assignType$2((ctx) => {
    return ctx.request.thrownErrors || {};
  }, ["CallContext", "ctx", () => __ΩRecord, () => RpcError, "", 'P"w!2"&P&7$o##/%'])),
  /**
   * Route that handles not-found scenarios when a requested route doesn't exist.
   * This route is registered as an internal mion route.
   * The route is called by dispatch logic when no matching route is found.
   * Throws an RpcError that will be caught and stored in thrownErrors by the router.
   */
  [MION_ROUTES.notFound]: route(__assignType$2((ctx) => {
    throw new RpcError({
      statusCode: StatusCodes.NOT_FOUND,
      publicMessage: `Route not found`,
      type: "route-not-found"
    });
  }, ["CallContext", "ctx", "route-not-found", () => RpcError, "", 'P"w!2"P.#7$/%'])),
  /**
   * Platform error route for strongly typing platform/adapter errors.
   * Platform errors occur before reaching the router or outside the router
   * and are platform/adapter related (e.g., HTTP server errors, connection issues).
   * This route is used for serialization/deserialization of platform errors.
   * This also prevents users to register a route with the same name.
   */
  [MION_ROUTES.platformError]: route(__assignType$2((_ctx) => {
    return new RpcError({
      publicMessage: "Platform error",
      type: "platform-error"
    });
  }, ["CallContext", "_ctx", () => RpcError, "", 'P"w!2"P&7#/$']))
};
const serverPureFnsCache = {};
function __assignType$1(fn, args) {
  fn.__type = args;
  return fn;
}
const routesFlowCache = (Map.Ω = [["&"], [() => __ΩMethodsExecutionChain, "n!"]], /* @__PURE__ */ new Map());
const cacheOrder = [];
const mappingMethodCache = (Map.Ω = [["&"], [() => __ΩRemoteMethod, "n!"]], /* @__PURE__ */ new Map());
function addToRoutesFlowCache(query, chain) {
  const routerOpts = getRouterOptions();
  const maxSize = routerOpts.maxRoutesFlowsCacheSize;
  if (maxSize <= 0)
    return;
  while (cacheOrder.length >= maxSize) {
    const oldestKey = cacheOrder.shift();
    if (oldestKey)
      routesFlowCache.delete(oldestKey);
  }
  routesFlowCache.set(query, chain);
  cacheOrder.push(query);
}
addToRoutesFlowCache.__type = ["query", () => __ΩMethodsExecutionChain, "chain", "addToRoutesFlowCache", 'P&2!n"2#$/$'];
function decodeRoutesFlowQuery(urlQuery) {
  try {
    const dataParam = urlQuery.startsWith("data=") ? urlQuery.slice(5) : urlQuery;
    const jsonString = fromBase64Url(dataParam);
    return JSON.parse(jsonString);
  } catch (e) {
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "routesFlow-invalid-query",
      publicMessage: "RoutesFlow query string is not valid base64url-encoded JSON.",
      errorData: { parseError: (e == null ? void 0 : e.message) || "Unknown error" }
    });
  }
}
decodeRoutesFlowQuery.__type = ["urlQuery", "RoutesFlowQuery", "decodeRoutesFlowQuery", 'P&2!"w"/#'];
function getRoutesFlowExecutionChain(rawRequest, opts2, urlQuery) {
  if (!urlQuery) {
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "routesFlow-missing-query",
      publicMessage: "RoutesFlow request requires a query string with route paths."
    });
  }
  const query = decodeRoutesFlowQuery(urlQuery);
  const routePaths = query.routes;
  const mappings = query.mappings;
  if (!routePaths || routePaths.length === 0) {
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "routesFlow-empty-routes",
      publicMessage: "RoutesFlow request requires at least one route path in query string."
    });
  }
  const routeIds = routePaths.map(__assignType$1((path) => path.startsWith("/") ? path.slice(1) : path, ["path", "", 'P"2!"/"']));
  let executionChain = routesFlowCache.get(urlQuery);
  if (executionChain)
    return { executionChain, routesFlowRouteIds: routeIds, mappings };
  executionChain = buildMergedExecutionChain(routePaths, rawRequest, opts2, mappings);
  addToRoutesFlowCache(urlQuery, executionChain);
  return { executionChain, routesFlowRouteIds: routeIds, mappings };
}
getRoutesFlowExecutionChain.__type = ["rawRequest", () => __ΩRouterOptions, "opts", "urlQuery", () => __ΩRoutesFlowExecutionResult, "getRoutesFlowExecutionChain", 'P#2!n"2#&2$8n%/&'];
function buildMergedExecutionChain(routePaths, rawRequest, opts2, mappings) {
  var _a;
  const seenIds = (Set.Ω = [["&"]], /* @__PURE__ */ new Set());
  const middleMethods = [];
  let resolvedSerializer;
  let firstRouteIndex = -1;
  const defaultSerializerCode = SerializerModes[opts2.serializer];
  const startMiddleFnIds = new Set(startMiddleFns.map(__assignType$1((m) => m.id, ["m", "", 'P"2!"/"'])));
  const endMiddleFnIds = new Set(endMiddleFns.map(__assignType$1((m) => m.id, ["m", "", 'P"2!"/"'])));
  for (const routePath of routePaths) {
    const transformedPath = ((_a = opts2.pathTransform) == null ? void 0 : _a.call(opts2, rawRequest, routePath)) || routePath;
    const chain = getRouteExecutionChain(transformedPath);
    if (!chain) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "routesFlow-route-not-found",
        publicMessage: `Route not found in routesFlow: ${routePath}`,
        errorData: { routePath }
      });
    }
    if (!resolvedSerializer) {
      resolvedSerializer = chain.serializer;
      firstRouteIndex = chain.routeIndex;
    } else if (resolvedSerializer !== chain.serializer) {
      resolvedSerializer = defaultSerializerCode;
    }
    for (const method of chain.methods) {
      if (seenIds.has(method.id))
        continue;
      if (startMiddleFnIds.has(method.id))
        continue;
      if (endMiddleFnIds.has(method.id))
        continue;
      seenIds.add(method.id);
      middleMethods.push(method);
    }
  }
  if (mappings && mappings.length > 0) {
    insertMappingMethods(middleMethods, mappings);
  }
  const mergedMethods = [...startMiddleFns, ...middleMethods, ...endMiddleFns];
  return {
    // Use the first route's routeIndex since that's where the first route handler is
    routeIndex: firstRouteIndex,
    methods: mergedMethods,
    serializer: resolvedSerializer ?? defaultSerializerCode
  };
}
buildMergedExecutionChain.__type = ["routePaths", "rawRequest", () => __ΩRouterOptions, "opts", "RoutesFlowMapping", "mappings", () => __ΩMethodsExecutionChain, "buildMergedExecutionChain", `P&F2!#2"n#2$"w%F2&8n'/(`];
function insertMappingMethods(middleMethods, mappings) {
  var _a, _b;
  const idToIndex = (Map.Ω = [["&"], ["'"]], /* @__PURE__ */ new Map());
  for (let i = 0; i < middleMethods.length; i++) {
    idToIndex.set(middleMethods[i].id, i);
  }
  const insertions = [];
  for (const mapping of mappings) {
    const fromIndex = idToIndex.get(mapping.fromId);
    const toIndex = idToIndex.get(mapping.toId);
    if (fromIndex === void 0) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "routesFlow-mapping-invalid-source",
        publicMessage: `Mapping source route '${mapping.fromId}' not found in routesFlow execution chain.`,
        errorData: { mapping }
      });
    }
    if (toIndex === void 0) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "routesFlow-mapping-invalid-target",
        publicMessage: `Mapping target route '${mapping.toId}' not found in routesFlow execution chain.`,
        errorData: { mapping }
      });
    }
    if (!((_b = (_a = serverPureFnsCache[PURE_SERVER_FN_NAMESPACE]) == null ? void 0 : _a[mapping.bodyHash]) == null ? void 0 : _b.fn)) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "routesFlow-mapping-missing-pure-fn",
        publicMessage: `Mapping pure function '${mapping.bodyHash}' not found. Ensure the function is registered on the server.`,
        errorData: { mapping }
      });
    }
    insertions.push({
      index: fromIndex + 1,
      method: createMappingMethod(mapping)
    });
  }
  insertions.sort(__assignType$1((a, b) => b.index - a.index, ["a", "b", "", 'P"2!"2""/#']));
  for (const { index, method } of insertions) {
    middleMethods.splice(index, 0, method);
  }
}
insertMappingMethods.__type = [() => __ΩRemoteMethod, "middleMethods", "RoutesFlowMapping", "mappings", "insertMappingMethods", 'Pn!F2""w#F2$$/%'];
function createMappingMethod(mapping) {
  const id = `mionMapFrom_${mapping.fromId}_${mapping.bodyHash}_to_${mapping.toId}`;
  const cached = mappingMethodCache.get(id);
  if (cached)
    return cached;
  const noopJitFns2 = getNoopJitFns();
  const method = {
    type: HandlerType$1.rawMiddleFn,
    id,
    isAsync: false,
    hasReturnData: false,
    paramsJitHash: "",
    returnJitHash: "",
    paramsJitFns: noopJitFns2,
    returnJitFns: noopJitFns2,
    handler: createMappingHandler(mapping),
    options: { runOnError: false, validateParams: false },
    methodCaller: runMappingHandler
  };
  mappingMethodCache.set(id, method);
  return method;
}
createMappingMethod.__type = ["RoutesFlowMapping", "mapping", () => __ΩRemoteMethod, "createMappingMethod", 'P"w!2"n#/$'];
function createMappingHandler(mapping) {
  return __assignType$1((ctx) => {
    var _a;
    const sourceOutput = ctx.response.body[mapping.fromId];
    const entry = (_a = serverPureFnsCache[PURE_SERVER_FN_NAMESPACE]) == null ? void 0 : _a[mapping.bodyHash];
    if (!(entry == null ? void 0 : entry.fn)) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "routesFlow-mapping-missing-pure-fn",
        publicMessage: `Mapping pure function '${mapping.bodyHash}' not found at runtime.`
      });
    }
    const mappedValue = entry.fn(sourceOutput);
    const targetParams = ctx.request.body[mapping.toId];
    if (targetParams)
      targetParams[mapping.paramIndex] = mappedValue;
  }, ["CallContext", "ctx", "", 'P"w!2""/#']);
}
createMappingHandler.__type = ["RoutesFlowMapping", "mapping", "createMappingHandler", 'P"w!2""/#'];
async function runMappingHandler(context, executable, ...args) {
  return executable.handler(context);
}
runMappingHandler.__type = ["CallContext", "context", () => __ΩRemoteMethod, "executable", "args", "runMappingHandler", 'P"w!2"n#2$#@2%"/&'];
let contextPool = [];
function createCallContext(path, opts2, reqRawBody, rawRequest, reqHeaders, respHeaders, reqBodyType, urlQuery) {
  var _a;
  const transformedPath = ((_a = opts2.pathTransform) == null ? void 0 : _a.call(opts2, rawRequest, path)) || path;
  const { executionChain, routesFlowRouteIds } = getExecutionChain(path, transformedPath, urlQuery, rawRequest, opts2);
  return {
    path: transformedPath,
    request: {
      headers: reqHeaders,
      rawBody: reqRawBody,
      bodyType: reqBodyType ?? getRequestBodyType(reqRawBody),
      body: {},
      thrownErrors: void 0
    },
    response: {
      statusCode: StatusCodes.OK,
      hasErrors: false,
      headers: respHeaders,
      body: {},
      rawBody: "",
      serializer: SerializerModes.json,
      binSerializer: void 0
    },
    executionChain,
    shared: opts2.contextDataFactory ? opts2.contextDataFactory() : {},
    urlQuery,
    routesFlowRouteIds
  };
}
function acquireCallContext(usePooling, path, opts2, reqRawBody, rawRequest, reqHeaders, respHeaders, reqBodyType, urlQuery) {
  var _a;
  if (!usePooling) return createCallContext(path, opts2, reqRawBody, rawRequest, reqHeaders, respHeaders, reqBodyType, urlQuery);
  const pooledContext = contextPool.pop();
  const transformedPath = ((_a = opts2.pathTransform) == null ? void 0 : _a.call(opts2, rawRequest, path)) || path;
  if (pooledContext) {
    const ctx = pooledContext;
    ctx.path = transformedPath;
    const req = ctx.request;
    req.headers = reqHeaders;
    req.rawBody = reqRawBody;
    req.bodyType = reqBodyType ?? getRequestBodyType(reqRawBody);
    req.body = {};
    req.thrownErrors = void 0;
    const resp = ctx.response;
    resp.statusCode = StatusCodes.OK;
    resp.hasErrors = false;
    resp.headers = respHeaders;
    resp.body = {};
    resp.rawBody = "";
    resp.serializer = SerializerModes.json;
    resp.binSerializer = void 0;
    const { executionChain, routesFlowRouteIds } = getExecutionChain(path, transformedPath, urlQuery, rawRequest, opts2);
    ctx.executionChain = executionChain;
    ctx.routesFlowRouteIds = routesFlowRouteIds;
    ctx.shared = opts2.contextDataFactory ? opts2.contextDataFactory() : {};
    ctx.urlQuery = urlQuery;
    return ctx;
  }
  return createCallContext(path, opts2, reqRawBody, rawRequest, reqHeaders, respHeaders, reqBodyType, urlQuery);
}
function releaseCallContext(ctx, maxPoolSize) {
  if (contextPool.length < maxPoolSize) {
    const mutableCtx = ctx;
    const req = mutableCtx.request;
    req.rawBody = "";
    req.body = null;
    req.thrownErrors = void 0;
    mutableCtx.response = {
      statusCode: StatusCodes.OK,
      hasErrors: false,
      headers: null,
      // Will be set when context is acquired
      body: null,
      // Will be set when context is acquired
      rawBody: "",
      serializer: SerializerModes.json,
      binSerializer: void 0
    };
    mutableCtx.shared = null;
    mutableCtx.executionChain = null;
    mutableCtx.routesFlowRouteIds = void 0;
    contextPool.push(ctx);
  }
}
function getRequestBodyType(rawBody) {
  if (typeof rawBody === "string") return SerializerModes.stringifyJson;
  if (rawBody instanceof ArrayBuffer || rawBody instanceof Uint8Array) return SerializerModes.binary;
  return SerializerModes.json;
}
function getExecutionChain(originalPath, transformedPath, urlQuery, rawRequest, opts2) {
  const hasPrefix = !!opts2.basePath;
  const isRoutesFlowPath = hasPrefix ? originalPath.endsWith(WORKFLOW_PATH) : originalPath === WORKFLOW_PATH;
  if (isRoutesFlowPath) return getRoutesFlowExecutionChain(rawRequest, opts2, urlQuery);
  let executionChain = getRouteExecutionChain(transformedPath);
  if (!executionChain) {
    const notFoundPath = getRoutePath([MION_ROUTES.notFound], opts2);
    executionChain = getRouteExecutionChain(notFoundPath);
    if (!executionChain) {
      throw new RpcError({
        statusCode: StatusCodes.UNEXPECTED_ERROR,
        type: "not-found",
        publicMessage: "Not-found route is not registered. This should never happen."
      });
    }
  }
  return { executionChain };
}
const mionInternalRoutes = Object.values(MION_ROUTES);
const flatRouter = /* @__PURE__ */ new Map();
const middleFnsById = /* @__PURE__ */ new Map();
const routesById = /* @__PURE__ */ new Map();
const rawMiddleFnsById = /* @__PURE__ */ new Map();
const middleFnNames = /* @__PURE__ */ new Set();
const routeNames = /* @__PURE__ */ new Set();
let routerOptions = { ...DEFAULT_ROUTE_OPTIONS };
let isRouterInitialized = false;
let allExecutablesIds;
const defaultStartMiddleFns = {
  mionDeserializeRequest: serializerMiddleFns.mionDeserializeRequest
};
const defaultEndMiddleFns = {
  mionSerializeResponse: serializerMiddleFns.mionSerializeResponse
};
let startMiddleFnsDef = { ...defaultStartMiddleFns };
let endMiddleFnsDef = { ...defaultEndMiddleFns };
let startMiddleFns = [];
let endMiddleFns = [];
const getRouteExecutionChain = (path) => flatRouter.get(path);
const getRouteExecutable = (id) => routesById.get(id);
const getMiddleFnExecutable = (id) => middleFnsById.get(id);
const getRouterOptions = () => routerOptions;
const getAnyExecutable = (id) => routesById.get(id) || middleFnsById.get(id) || rawMiddleFnsById.get(id);
async function initMionRouter(routes2, opts2) {
  await initRouter(opts2);
  const publicApi = await registerRoutes(routes2);
  await emitAOTCaches();
  return publicApi;
}
async function initRouter(opts2) {
  if (isRouterInitialized) throw new Error("Router has already been initialized");
  routerOptions = { ...routerOptions, ...opts2 };
  validateSharedDataFactory(routerOptions);
  Object.freeze(routerOptions);
  setErrorOptions(routerOptions);
  if (routerOptions.aot) await loadAOTCaches();
  isRouterInitialized = true;
  await registerRoutes({ ...mionErrorsRoutes });
  if (!routerOptions.skipClientRoutes) await registerRoutes({ ...mionClientRoutes });
  if (!isTestEnv()) console.log("mion router initialized", { routerOptions });
  return routerOptions;
}
async function registerRoutes(routes2) {
  if (!isRouterInitialized) throw new Error("initRouter should be called first");
  startMiddleFns = await getExecutablesFromMiddleFnsCollection(startMiddleFnsDef);
  endMiddleFns = await getExecutablesFromMiddleFnsCollection(endMiddleFnsDef);
  await recursiveFlatRoutes(routes2);
  if (shouldFullGenerateSpec()) {
    return getPublicApi(routes2);
  }
  return {};
}
function isPrivateDefinition(entry, id) {
  if (isRoute(entry)) return false;
  if (isRawMiddleFnDef(entry)) return true;
  try {
    const executable = getMiddleFnExecutable(id) || getRouteExecutable(id);
    if (!executable)
      throw new Error(`Route or MiddleFn ${id} not found. Please check you have called router.registerRoutes first.`);
    return isPrivateExecutable(executable);
  } catch {
    return false;
  }
}
function isPrivateExecutable(executable) {
  var _a, _b, _c;
  if (executable.type === HandlerType$1.rawMiddleFn) return true;
  if (executable.type === HandlerType$1.route) return false;
  const hasPublicParams = !!((_a = executable.paramNames) == null ? void 0 : _a.length);
  const hasHeaderParams = !!((_c = (_b = executable.headersParam) == null ? void 0 : _b.headerNames) == null ? void 0 : _c.length);
  return !hasPublicParams && !hasHeaderParams && !executable.hasReturnData;
}
function getTotalExecutables() {
  return routesById.size + middleFnsById.size + rawMiddleFnsById.size;
}
function getAllExecutablesIds() {
  if (allExecutablesIds) return allExecutablesIds;
  allExecutablesIds = [...routesById.keys(), ...middleFnsById.keys(), ...rawMiddleFnsById.keys()];
  return allExecutablesIds;
}
function shouldFullGenerateSpec() {
  return routerOptions.getPublicRoutesData || getENV("GENERATE_ROUTER_SPEC") === "true" || isMionCompileMode();
}
function getRouteExecutableFromPath(path) {
  const executionChain = flatRouter.get(path);
  if (!executionChain) {
    return getAnyExecutable(MION_ROUTES.notFound);
  }
  return executionChain.methods[executionChain.routeIndex];
}
async function loadAOTCaches() {
  const loader = await Promise.resolve().then(() => require("./aotCacheLoader-CFRf5oxa.js"));
  return loader.loadRouterAOTCaches();
}
async function emitAOTCaches() {
  if (!isMionAOTEmitMode()) return;
  const aotEmitter = await Promise.resolve().then(() => require("./aotEmitter-rVPAjd7v.js"));
  return aotEmitter.emitAOTCaches();
}
async function recursiveFlatRoutes(routes2, currentPointer = [], preMiddleFns = [], postMiddleFns = [], nestLevel = 0) {
  if (nestLevel > MAX_ROUTE_NESTING)
    throw new Error("Too many nested routes, you can only nest routes ${MAX_ROUTE_NESTING} levels");
  const entries = Object.entries(routes2);
  if (entries.length === 0)
    throw new Error(
      `Invalid route: ${currentPointer.length ? joinPath(...currentPointer) : "*"}. Can Not define empty routes`
    );
  let minus1Props = null;
  for (let index = 0; index < entries.length; index++) {
    const [key, item] = entries[index];
    const newPointer = [...currentPointer, key];
    let routeEntry;
    if (typeof key !== "string" || !isNaN(key))
      throw new Error(`Invalid route: ${joinPath(...newPointer)}. Numeric route names are not allowed`);
    if (key.includes(",")) throw new Error(`Invalid route: ${joinPath(...newPointer)}. Route names cannot contain commas.`);
    if (key === WORKFLOW_KEY)
      throw new Error(`Invalid route: ${joinPath(...newPointer)}. '${WORKFLOW_KEY}' is a reserved mion route name.`);
    if (isAnyMiddleFnDef(item)) {
      routeEntry = await getExecutableFromAnyMiddleFn(item, newPointer, nestLevel);
      if (middleFnNames.has(routeEntry.id))
        throw new Error(
          `Invalid middleFn: ${joinPath(...newPointer)}. Naming collision, Naming collision, duplicated middleFn.`
        );
      middleFnNames.add(routeEntry.id);
    } else if (isRoute(item)) {
      routeEntry = await getExecutableFromRoute(item, newPointer, nestLevel);
      if (routeNames.has(routeEntry.id))
        throw new Error(`Invalid route: ${joinPath(...newPointer)}. Naming collision, duplicated route`);
      routeNames.add(routeEntry.id);
    } else if (isRoutes(item)) {
      routeEntry = {
        pathPointer: newPointer,
        routes: item
      };
    } else {
      const itemType = typeof item;
      throw new Error(`Invalid route: ${joinPath(...newPointer)}. Type <${itemType}> is not a valid route.`);
    }
    minus1Props = await recursiveCreateExecutionChainAsync(
      routeEntry,
      newPointer,
      preMiddleFns,
      postMiddleFns,
      nestLevel,
      index,
      entries,
      minus1Props
    );
  }
}
async function recursiveCreateExecutionChainAsync(routeEntry, currentPointer, preMiddleFns, postMiddleFns, nestLevel, index, routeKeyedEntries, minus1Props) {
  const minus1 = getEntry(index - 1, routeKeyedEntries);
  const plus1 = getEntry(index + 1, routeKeyedEntries);
  const props = getRouteEntryProperties(minus1, routeEntry, plus1);
  if (props.isBetweenRoutes && minus1Props) {
    props.preLevelMiddleFns = minus1Props.preLevelMiddleFns;
    props.postLevelMiddleFns = minus1Props.postLevelMiddleFns;
  } else {
    for (let i = 0; i < routeKeyedEntries.length; i++) {
      const [k, entry] = routeKeyedEntries[i];
      if (!isAnyMiddleFnDef(entry)) continue;
      const newPointer = [...currentPointer.slice(0, -1), k];
      const executable = await getExecutableFromAnyMiddleFn(entry, newPointer, nestLevel);
      if (i < index) props.preLevelMiddleFns.push(executable);
      if (i > index) props.postLevelMiddleFns.push(executable);
    }
  }
  const isExec = isExecutable(routeEntry);
  if (isExec && props.isRoute) {
    const path = getRoutePath(routeEntry.pointer, routerOptions);
    const routeMethod = routeEntry;
    const levelMethods = [
      ...preMiddleFns,
      ...props.preLevelMiddleFns,
      routeEntry,
      ...props.postLevelMiddleFns,
      ...postMiddleFns
    ];
    const methods = [...startMiddleFns, ...levelMethods, ...endMiddleFns];
    const executionChain = {
      routeIndex: startMiddleFns.length + preMiddleFns.length + props.preLevelMiddleFns.length,
      methods,
      serializer: getSerializerCodeFromMode(routeMethod.options.serializer)
    };
    const middleFnIds = getPublicMiddleFnIds(methods);
    if (middleFnIds.length) routeMethod.middleFnIds = middleFnIds;
    flatRouter.set(path, executionChain);
  } else if (!isExec) {
    await recursiveFlatRoutes(
      routeEntry.routes,
      routeEntry.pathPointer,
      [...preMiddleFns, ...props.preLevelMiddleFns],
      [...props.postLevelMiddleFns, ...postMiddleFns],
      nestLevel + 1
    );
  }
  return props;
}
async function getExecutableFromAnyMiddleFn(middleFn, middleFnPointer, nestLevel) {
  if (isRawMiddleFnDef(middleFn)) return getExecutableFromRawMiddleFn(middleFn, middleFnPointer, nestLevel);
  return getExecutableFromMiddleFn(middleFn, middleFnPointer, nestLevel);
}
async function getExecutableFromMiddleFn(middleFn, middleFnPointer, nestLevel) {
  var _a, _b, _c, _d;
  const isHeader = isHeadersMiddleFnDef(middleFn);
  const middleFnId = getRouterItemId(middleFnPointer);
  const existing = middleFnsById.get(middleFnId);
  if (existing) return existing;
  const compiledMethod = getPersistedMethod(middleFnId, middleFn.handler);
  let executable;
  if (compiledMethod) {
    executable = compiledMethod;
  } else {
    const reflectionData = await getHandlerReflection(middleFn.handler, middleFnId, routerOptions, isHeader);
    executable = {
      id: middleFnId,
      type: isHeader ? HandlerType$1.headersMiddleFn : HandlerType$1.middleFn,
      nestLevel,
      handler: middleFn.handler,
      pointer: middleFnPointer,
      ...reflectionData,
      options: {
        runOnError: !!((_a = middleFn.options) == null ? void 0 : _a.runOnError),
        validateParams: ((_b = middleFn.options) == null ? void 0 : _b.validateParams) ?? true,
        validateReturn: ((_c = middleFn.options) == null ? void 0 : _c.validateReturn) ?? false,
        description: (_d = middleFn.options) == null ? void 0 : _d.description
      }
    };
    addToPersistedMethods(middleFnId, executable);
  }
  middleFnsById.set(middleFnId, executable);
  routesCache.setMethodJitFns(middleFnId, executable);
  return executable;
}
async function getExecutableFromRawMiddleFn(middleFn, middleFnPointer, nestLevel) {
  var _a, _b;
  const middleFnId = getRouterItemId(middleFnPointer);
  const existing = rawMiddleFnsById.get(middleFnId);
  if (existing) return existing;
  const reflectionData = await getRawMethodReflection(middleFn.handler, middleFnId, routerOptions);
  const executable = {
    id: middleFnId,
    type: HandlerType$1.rawMiddleFn,
    nestLevel,
    handler: middleFn.handler,
    pointer: middleFnPointer,
    ...reflectionData,
    options: {
      runOnError: !!((_a = middleFn.options) == null ? void 0 : _a.runOnError),
      validateParams: false,
      validateReturn: false,
      description: (_b = middleFn.options) == null ? void 0 : _b.description
    }
  };
  rawMiddleFnsById.set(middleFnId, executable);
  routesCache.setMethodJitFns(middleFnId, executable);
  return executable;
}
async function getExecutableFromRoute(route2, routePointer, nestLevel) {
  var _a, _b, _c, _d, _e;
  const routeId = getRouterItemId(routePointer);
  const existing = routesById.get(routeId);
  if (existing) return existing;
  const compiledMethod = getPersistedMethod(routeId, route2.handler);
  let executable;
  if (compiledMethod) {
    executable = compiledMethod;
  } else {
    const reflectionData = await getHandlerReflection(route2.handler, routeId, routerOptions);
    executable = {
      id: routeId,
      type: HandlerType$1.route,
      nestLevel,
      handler: route2.handler,
      pointer: routePointer,
      ...reflectionData,
      options: {
        runOnError: false,
        validateParams: ((_a = route2.options) == null ? void 0 : _a.validateParams) ?? true,
        validateReturn: ((_b = route2.options) == null ? void 0 : _b.validateReturn) ?? false,
        description: (_c = route2.options) == null ? void 0 : _c.description,
        serializer: ((_d = route2.options) == null ? void 0 : _d.serializer) ?? routerOptions.serializer,
        isMutation: (_e = route2.options) == null ? void 0 : _e.isMutation
      }
    };
    addToPersistedMethods(routeId, executable);
  }
  routesById.set(routeId, executable);
  routesCache.setMethodJitFns(routeId, executable);
  return executable;
}
function getPublicMiddleFnIds(methods) {
  const ids = methods.filter((exec) => isPublicExecutable(exec)).map((exec) => getRouterItemId(exec.pointer)).filter((mfId) => {
    if (mionInternalRoutes.includes(mfId)) return false;
    const exec = getMiddleFnExecutable(mfId);
    return exec && isPublicExecutable(exec);
  });
  return ids;
}
function getEntry(index, keyEntryList) {
  var _a;
  return (_a = keyEntryList[index]) == null ? void 0 : _a[1];
}
function getRouteEntryProperties(minus1, zero, plus1) {
  const minus1IsRoute = minus1 && isRoute(minus1);
  const zeroIsRoute = zero.type === HandlerType$1.route;
  const plus1IsRoute = plus1 && isRoute(plus1);
  const isExec = !!zero.handler;
  return {
    isBetweenRoutes: minus1IsRoute && zeroIsRoute && plus1IsRoute,
    isExecutable: isExec,
    isRoute: zeroIsRoute,
    preLevelMiddleFns: [],
    postLevelMiddleFns: []
  };
}
async function getExecutablesFromMiddleFnsCollection(middleFnsDef) {
  const results = [];
  for (const [key, middleFn] of Object.entries(middleFnsDef)) {
    if (isRawMiddleFnDef(middleFn)) {
      results.push(await getExecutableFromRawMiddleFn(middleFn, [key], 0));
    } else if (isHeadersMiddleFnDef(middleFn) || isMiddleFnDef(middleFn)) {
      results.push(await getExecutableFromMiddleFn(middleFn, [key], 0));
    } else {
      throw new Error(`Invalid middleFn: ${key}. Invalid middleFn definition`);
    }
  }
  return results;
}
function validateSharedDataFactory(opts2) {
  if (!(opts2 == null ? void 0 : opts2.contextDataFactory)) return;
  const testSharedData = opts2.contextDataFactory();
  if (typeof testSharedData !== "object" || Array.isArray(testSharedData) || testSharedData === null || Object.keys(testSharedData).length === 0) {
    throw new Error("contextDataFactory must return a plain object with at least one property");
  }
}
function getSerializerCodeFromMode(mode) {
  switch (mode) {
    case "binary":
      return SerializerModes.binary;
    case "stringifyJson":
      return SerializerModes.stringifyJson;
    case "json":
    default:
      return SerializerModes.json;
  }
}
function joinPath(...parts) {
  return parts.filter(Boolean).join("/");
}
async function dispatchRoute(path, reqRawBody, reqHeaders, respHeaders, rawRequest, rawResponse, reqBodyType, urlQuery) {
  const opts2 = getRouterOptions();
  const usePooling = opts2.maxContextPoolSize > 0;
  const context = acquireCallContext(
    usePooling,
    path,
    opts2,
    reqRawBody,
    rawRequest,
    reqHeaders,
    respHeaders,
    reqBodyType,
    urlQuery
  );
  try {
    await runExecutionChain(context, rawRequest, rawResponse, opts2);
    return context.response;
  } catch (err) {
    return Promise.reject(err);
  } finally {
    if (usePooling) {
      releaseCallContext(context, opts2.maxContextPoolSize);
    }
  }
}
async function runExecutionChain(context, rawRequest, rawResponse, opts2) {
  const { response, request } = context;
  const executionList = context.executionChain.methods;
  response.serializer = context.executionChain.serializer;
  for (let i = 0; i < executionList.length; i++) {
    const executable = executionList[i];
    if (response.hasErrors && !executable.options.runOnError) continue;
    try {
      const methodCaller = executable.methodCaller || getMethodCaller(executable);
      const result = await methodCaller(context, executable, request, response, opts2, rawRequest, rawResponse);
      if (result === void 0 || !executable.hasReturnData) continue;
      if (executable.headersReturn && result instanceof HeadersSubset) {
        const headersMap = result.headers;
        for (const name in headersMap) {
          const value = headersMap[name];
          if (value !== void 0 && value !== null) {
            response.headers.set(name, value);
          }
        }
        continue;
      }
      response.body[executable.id] = result;
    } catch (err) {
      onExecutableError(context, executable, err);
    }
  }
  return context.response;
}
async function runRawMiddleFn(context, executable, req, resp, opts2, rawRequest, rawResponse) {
  const result = await executable.handler(context, rawRequest, rawResponse, opts2);
  return result;
}
async function runHeadersMiddleFn(context, executable, request) {
  const headerNames = executable.headersParam.headerNames;
  const params = deserializeBodyParamsOrThrow(request, executable);
  const headersMap = {};
  headerNames.forEach((name) => {
    const value = request.headers.get(name);
    if (value) headersMap[name] = value;
  });
  const headersSubset = new HeadersSubset(headersMap);
  validateHeaderParamsOrThrow(headersSubset, executable);
  if (executable.options.validateParams) validateParametersOrThrow(params, executable);
  const result = await executable.handler(context, headersSubset, ...params);
  return result;
}
async function runRouteOrMiddleFn(context, executable, request) {
  const params = deserializeBodyParamsOrThrow(request, executable);
  if (executable.options.validateParams) validateParametersOrThrow(params, executable);
  const result = await executable.handler(context, ...params);
  return result;
}
function getMethodCaller(executable) {
  if (executable.type === HandlerType$1.rawMiddleFn) {
    executable.methodCaller = runRawMiddleFn;
  } else if (executable.type === HandlerType$1.headersMiddleFn) {
    executable.methodCaller = runHeadersMiddleFn;
  } else {
    executable.methodCaller = runRouteOrMiddleFn;
  }
  return executable.methodCaller;
}
function deserializeBodyParamsOrThrow(request, executable) {
  const params = request.body[executable.id] || [];
  if (request.bodyType === SerializerModes.binary) return params;
  if (executable.paramsJitFns.restoreFromJson.isNoop) return params;
  try {
    request.body[executable.id] = executable.paramsJitFns.restoreFromJson.fn(params);
    return request.body[executable.id];
  } catch (e) {
    throw new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "serialization-error",
      publicMessage: `Invalid params '${executable.id}', can not deserialize. Parameters might be of the wrong type.`,
      originalError: e,
      errorData: {
        deserializeError: (e == null ? void 0 : e.message) || "Unknown error"
      }
    });
  }
}
function validateParametersOrThrow(params, executable) {
  if (executable.paramsJitFns.isType.isNoop) return;
  if (!executable.paramsJitFns.isType.fn(params)) {
    const validationError = new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "validation-error",
      publicMessage: `Invalid params in '${executable.id}', validation failed.`,
      errorData: {
        typeErrors: executable.paramsJitFns.typeErrors.fn(params)
      }
    });
    throw validationError;
  }
}
function validateHeaderParamsOrThrow(headers, executable) {
  if (!executable.headersParam.jitFns.isType.fn(headers)) {
    const validationError = new RpcError({
      statusCode: StatusCodes.UNEXPECTED_ERROR,
      type: "validation-error",
      publicMessage: `Invalid params in '${executable.id}', validation failed.`,
      errorData: {
        typeErrors: executable.headersParam.jitFns.typeErrors.fn(headers)
      }
    });
    throw validationError;
  }
}
const __ΩQueryBodyResult = ["rawBody", "SerializerCode", "bodyType", "QueryBodyResult", 'P&4!"w"4#Mw$y'];
function decodeQueryBody(urlQuery, rawBody) {
  if (rawBody)
    return void 0;
  if (!urlQuery)
    return void 0;
  const dataValue = extractDataParam(urlQuery);
  if (!dataValue)
    return void 0;
  return {
    rawBody: fromBase64Url(dataValue),
    bodyType: SerializerModes.stringifyJson
  };
}
decodeQueryBody.__type = ["urlQuery", "rawBody", () => __ΩQueryBodyResult, "decodeQueryBody", 'PP&-J2!#2"Pn#-J/$'];
function extractDataParam(urlQuery) {
  if (urlQuery.startsWith("data=")) {
    const ampIndex2 = urlQuery.indexOf("&", 5);
    return ampIndex2 === -1 ? urlQuery.slice(5) : urlQuery.slice(5, ampIndex2);
  }
  const idx = urlQuery.indexOf("&data=");
  if (idx === -1)
    return void 0;
  const start = idx + 6;
  const ampIndex = urlQuery.indexOf("&", start);
  return ampIndex === -1 ? urlQuery.slice(start) : urlQuery.slice(start, ampIndex);
}
extractDataParam.__type = ["urlQuery", "extractDataParam", 'P&2!P&-J/"'];
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
  hello: route(__assignType(() => "world", ["", "P&/!"])),
  updateUser: route(__assignType((ctx, user) => {
    user.updatedAt = /* @__PURE__ */ new Date();
    user.lastLoginAt = /* @__PURE__ */ new Date();
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;
    return user;
  }, ["ctx", () => __ΩUser, "user", () => __ΩUser, "", 'P"2!n"2#n$/%'])),
  updateSimpleUser: route(__assignType((ctx, user) => {
    user.lastUpdate = /* @__PURE__ */ new Date();
    return user;
  }, ["ctx", () => __ΩSimpleUser, "user", () => __ΩSimpleUser, "", 'P"2!n"2#n$/%']))
};
exports.JIT_FUNCTION_IDS = JIT_FUNCTION_IDS;
exports.MAX_STACK_DEPTH = MAX_STACK_DEPTH;
exports.RpcError = RpcError;
exports.SerializerModes = SerializerModes;
exports.__ΩFromBinaryFn = __ΩFromBinaryFn;
exports.__ΩIsTypeFn = __ΩIsTypeFn;
exports.__ΩJitCompiledFn = __ΩJitCompiledFn;
exports.__ΩJitFunctionsCache = __ΩJitFunctionsCache;
exports.__ΩJsonStringifyFn = __ΩJsonStringifyFn;
exports.__ΩMethodsCache = __ΩMethodsCache;
exports.__ΩPrepareForJsonFn = __ΩPrepareForJsonFn;
exports.__ΩPureFunctionsCache = __ΩPureFunctionsCache;
exports.__ΩRestoreFromJsonFn = __ΩRestoreFromJsonFn;
exports.__ΩSrcCodeJITCompiledFnsCache = __ΩSrcCodeJITCompiledFnsCache;
exports.__ΩSrcCodePureFunctionsCache = __ΩSrcCodePureFunctionsCache;
exports.__ΩToBinaryFn = __ΩToBinaryFn;
exports.__ΩToCodeFn = __ΩToCodeFn;
exports.__ΩTypeErrorsFn = __ΩTypeErrorsFn;
exports.addAOTCaches = addAOTCaches;
exports.addRoutesToCache = addRoutesToCache;
exports.decodeQueryBody = decodeQueryBody;
exports.dispatchRoute = dispatchRoute;
exports.getENV = getENV;
exports.getJitFnCaches = getJitFnCaches;
exports.getJitUtils = getJitUtils;
exports.getPersistedMethods = getPersistedMethods;
exports.getRouterFatalErrorResponse = getRouterFatalErrorResponse;
exports.initMionRouter = initMionRouter;
exports.isMionAOTEmitMode = isMionAOTEmitMode;
exports.isMionCompileMode = isMionCompileMode;
exports.loadCompiledMethods = loadCompiledMethods;
exports.registerErrorDeserializers = registerErrorDeserializers;
exports.registerPureFnFactory = registerPureFnFactory;
exports.routes = routes;
//# sourceMappingURL=mionRoutes-wDZ_9Gb6.js.map
