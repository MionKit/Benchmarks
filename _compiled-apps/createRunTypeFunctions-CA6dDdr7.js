"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const mionRoutes = require("./mionRoutes-D2bBEZx4.js");
const type = require("@deepkit/type");
const hashes = /* @__PURE__ */ new Map();
const literalHashes = /* @__PURE__ */ new Map();
const hashChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const alphaChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hashIncrement = 2;
const maxHashCollisions = 22;
const PRIME = 37;
const hashDefaultLength = 6;
const defaultLiteralLength = 5;
function quickHash(input, length = hashDefaultLength, prevResult) {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = Math.imul(hash, PRIME) + input.charCodeAt(i) >>> 0;
  }
  let result = prevResult || "";
  hash = Math.imul(hash, PRIME) >>> 0;
  result += alphaChars.charAt(hash % alphaChars.length);
  while (result.length < length) {
    hash = Math.imul(hash, PRIME) >>> 0;
    result += hashChars.charAt(hash % hashChars.length);
  }
  return result.slice(0, length);
}
function createUniqueHash(id, length = hashDefaultLength, isLiteral = false) {
  const dictionary = isLiteral ? literalHashes : hashes;
  let hash = quickHash(id, length);
  let counter = 1;
  let existingId = dictionary.get(hash);
  while (existingId && existingId !== id) {
    length += counter * hashIncrement;
    const newId = quickHash(id, length, hash);
    if (mionRoutes.getENV("DEBUG_JIT"))
      console.warn(
        `Collision for typeID: ${id} with extended hash: ${newId}, and existing typeID: ${existingId} with hash: ${hash}`
      );
    hash = newId;
    counter++;
    existingId = dictionary.get(hash);
    if (counter > maxHashCollisions) throw new Error(`Cannot generate unique hash for typeID: ${id} too many collisions.`);
  }
  dictionary.set(hash, id);
  return hash;
}
function createHashLiteral(id, length = defaultLiteralLength) {
  return createUniqueHash(id, length, true);
}
const __ΩError = ["name", "message", "stack", "Error", 'P&4!&4"&4#8Mw$y'];
const __ΩRecord$2 = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
const __ΩStrNumber = ["StrNumber", "P&'Jw!y"];
const __ΩJitCode = ["code", "CodeType", "type", "JitCode", 'PP&-J4!"w"4#Mw$y'];
const __ΩSrcType = ["Type", "T", () => __ΩRunType, "_rt", () => __ΩStrNumber, "_typeId", "_formatId", () => __ΩSubKind, "subKind", "SrcType", `"w!c"Pe"!Pn#4$9n%4&89&4'89n(4)89MKw*y`];
const __ΩRunTypeFamily = ["A", "C", "M", "F", "RunTypeFamily", 'P.!.".#.$Jw%y'];
const __ΩRunType = [() => __ΩSrcType, "src", "getKindName", () => __ΩRunTypeFamily, "getFamily", () => __ΩDeepPartial, () => __ΩRunTypeOptions, "options", "", "mock", () => __ΩStrNumber, "getTypeID", () => __ΩRunTypeOptions, "opts", "getJitHash", () => __ΩJitFn, "jitFn", () => __ΩRunTypeOptions, "args", "createJitFunction", "RunType", 'P"o!"4"9P&1#Pn$1%Pn\'o&"2(8"`/)4*Pn+1,Pn-2.&1/Pn021n22.8P"@23"/)14Mw5y'];
const __ΩSubKind = [() => ReflectionSubKind, () => ReflectionSubKind, "SubKind", 'i!i"gfw#y'];
const __ΩRunTypeVisitor = ["Type", "deepkitType", () => __ΩRunType, "parents", () => __ΩRunTypeOptions, "opts", () => __ΩRunType, "", "RunTypeVisitor", `P"w!2"n#F2$n%2&n'/(w)y`];
const __ΩSrcCollection = ["Type", "types", "SrcCollection", 'P"w!P"w!F4"MKw#y'];
const __ΩSrcMember = ["Type", "type", "SrcMember", 'P"w!P"w!4"MKw#y'];
const __ΩJitCompilerOpts = ["fnID", () => __ΩStrNumber, "typeID", "jitFnHash", () => __ΩRunTypeOptions, "opts", "JitCompilerOpts", `P&4!9n"4#9&4$9n%4&9Mw'y`];
const __ΩRunTypeChildAccessor = [() => __ΩRunType, "JitFnCompiler", "comp", "getChildIndex", () => __ΩStrNumber, "getChildVarName", () => __ΩStrNumber, "getChildLiteral", "useArrayAccessor", "isOptional", "skipSettingAccessor", "skipCommas", "RunTypeChildAccessor", `Pn!P"w"2#'1$P"w"2#n%1&P"w"2#n'1(P)1)P)1*P)1+8)4,8Mw-y`];
const __ΩCustomVλl = ["vλl", "isStandalone", "useArrayAccessor", "CustomVλl", 'P&4!)4"8)4#8Mw$y'];
const __ΩRunTypeOptions = ["start", "end", "paramsSlice", () => __ΩMockOptions, "mock", "noLiterals", "noIsArrayCheck", "strictTypes", "RunTypeOptions", `PP'4!8'4"8M4#8n$4%8)4&8)4'8)4(8Mw)y`];
const __ΩPartialRunTypeOptions = [() => __ΩDeepPartial, () => __ΩRunTypeOptions, "PartialRunTypeOptions", 'n"o!"w#y'];
const __ΩJitFn = [() => JitFunctions, () => JitFunctions, "JitFn", 'i!i"gfw#y'];
const __ΩJitFnID = [() => __ΩJitFn, "id", "JitFnID", 'n!."fw#y'];
const __ΩAnyFunction = ["TypeMethodSignature", "TypeCallSignature", "TypeFunction", "TypeMethod", "AnyFunction", 'P"w!"w""w#"w$Jw%y'];
const __ΩAnyParameterListRunType = [() => __ΩAnyFunction, "TypeTuple", "AnyParameterListRunType", 'Pn!"w"Jw#y'];
const __ΩMockOptions = ["anyValuesList", "minNumber", "maxNumber", "minDate", "maxDate", "enumIndex", "objectList", "promiseTimeOut", () => __ΩError, "promiseReject", "regexpList", "maxRandomStringLength", "stringLength", "stringCharSet", "symbolLength", "symbolCharSet", "symbolName", "maxRandomItemsLength", "arrayLength", "optionalProbability", () => __ΩRecord$2, () => __ΩStrNumber, "optionalPropertyProbability", () => __ΩRecord$2, () => __ΩStrNumber, "parentObj", "unionIndex", 0, "tupleOptions", 0, "paramsOptions", "maxStackDepth", "maxMockRecursion", "MockOptions", `P"F4!'4"8'4#8'4$8'4%8'4&8%F4''4(P&n)"J4*8AF4+'4,'4-8&4.'4/8&408&418'42'438'44n6'o5#478Pn9+J"o8#4:8'4;8n<F4=8n>F4?8'4@'4AMwBy`];
const __ΩMockOperation = [() => __ΩMockOptions, () => __ΩRunType, "stack", () => __ΩJitFnID, "fnID", "MockOperation", 'Pn!n"F4#n$4%Mw&y'];
const __ΩDKAnnotation = ["name", () => __ΩSrcType, "options", "DKAnnotation", 'P&4!n"4#Mw$y'];
const __ΩFormatAnnotation = [() => __ΩDKAnnotation, "TypeFormatParams", "params", "BaseRunTypeFormat", "formatter", "FormatAnnotation", 'Pn!P"w"4#8"w$4%MKw&y'];
const __ΩRunTypeAnnotation = ["name", () => __ΩRunType, "options", "RunTypeAnnotation", 'P&4!n"4#Mw$y'];
const __ΩAnyClass = ["T", "args", "new", "AnyClass", '"c!PP"@2"e#!1#Mw$y'];
const __ΩMutable = ["T", "Mutable", 'l+e#!e"!fRb!Pde"!gN#)w"y'];
const __ΩDeepRequired = ["T", 0, "DeepRequired", 'lGe&!e"!fo""RPde%!gN#"Re$!RPe#!%qk.8QRb!Pde"!p<w#y'];
const __ΩDeepPartial = ["T", 0, "DeepPartial", 'lGe&!e"!fo""RPde%!gN#"Re$!RPe#!%qk.8QRb!Pde"!p<w#y'];
const __ΩRecord$1 = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
function __assignType$h(fn, args) {
  fn.__type = args;
  return fn;
}
const CodeTypes = {
  expression: "E",
  // single expression, that could be concatenated using js operators like + - * && || etc...
  statement: "S",
  // one or multiple statements, that could be concatenated using ; to ensure correct syntax
  returnBlock: "RB"
  // code block, it can not be concatenated with other code, it has an explicit return statement and needs to be wrapped in a function
};
const __ΩCodeType = [() => CodeTypes, () => CodeTypes, "CodeType", 'i!i"gfw#y'];
const __ΩJitFnSettings = ["id", "name", "args", "", "import", "JitFnArgs", "jitArgs", "jitDefaultArgs", "returnName", true, "noInitialVλl", () => __ΩRecord$1, "keyName", "boolean", "number", "string", "type", "defaultValue", "runTimeOptions", true, "formatShouldReplaceJitCode", "JitFnSettings", 'P&4!&4"PP"@2#"/$`/$4%8"w&4\'"w&4(&4).*4+8&P&4-P.../.0J41"42Mo,#438.4458Mw6y'];
const jitArgs = { vλl: "v" };
const jitDefaultArgs = { vλl: "" };
const jitErrorArgs = { vλl: "v", pλth: "pth", εrr: "er" };
const jitDefaultErrorArgs = { vλl: "", pλth: "[]", εrr: "[]" };
const jitArgsWithOptions = { vλl: "v", θpts: "opts" };
const jitDefaultArgsWithOptions = { vλl: "", θpts: "{}" };
const jitBinarySerializerArgs = { vλl: "v", sεr: "Ser" };
const jitBinaryDeserializerArgs = { vλl: "ret", dεs: "Des" };
const jitDefaultBinarySerializerArgs = { vλl: "", sεr: "" };
const jitDefaultBinaryDeserializerArgs = { vλl: "", dεs: "" };
const jitValidationFunctions = {
  isType: {
    id: mionRoutes.JIT_FUNCTION_IDS.isType,
    name: "isType",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  typeErrors: {
    id: mionRoutes.JIT_FUNCTION_IDS.typeErrors,
    name: "typeErrors",
    jitArgs: jitErrorArgs,
    jitDefaultArgs: jitDefaultErrorArgs,
    returnName: jitErrorArgs.εrr
  }
};
const jitSerializationFunctions = {
  prepareForJson: {
    id: mionRoutes.JIT_FUNCTION_IDS.prepareForJson,
    name: "prepareForJson",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  restoreFromJson: {
    id: mionRoutes.JIT_FUNCTION_IDS.restoreFromJson,
    name: "restoreFromJson",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  stringifyJson: {
    id: mionRoutes.JIT_FUNCTION_IDS.stringifyJson,
    name: "stringifyJson",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  // similar to json stringify but outputs js code, including pure functions, already imported as size is quite small
  toJSCode: {
    id: mionRoutes.JIT_FUNCTION_IDS.toJSCode,
    name: "toJSCode",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  // Binary serialization functions
  toBinary: {
    id: mionRoutes.JIT_FUNCTION_IDS.toBinary,
    name: "toBinary",
    jitArgs: jitBinarySerializerArgs,
    jitDefaultArgs: jitDefaultBinarySerializerArgs,
    // returns the serializer buffer
    returnName: jitBinarySerializerArgs.sεr,
    formatShouldReplaceJitCode: true
  },
  fromBinary: {
    id: mionRoutes.JIT_FUNCTION_IDS.fromBinary,
    name: "fromBinary",
    jitArgs: jitBinaryDeserializerArgs,
    jitDefaultArgs: jitDefaultBinaryDeserializerArgs,
    // deserialized value is stored in vλl that is initially undefined
    returnName: jitBinaryDeserializerArgs.vλl,
    noInitialVλl: true,
    formatShouldReplaceJitCode: true
  },
  // apply type formatters, ie: lowercase, uppercase, trim, etc
  format: {
    id: mionRoutes.JIT_FUNCTION_IDS.format,
    name: "format",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  }
};
const JitFunctions$1 = {
  ...jitValidationFunctions,
  ...jitSerializationFunctions,
  unknownKeyErrors: {
    id: mionRoutes.JIT_FUNCTION_IDS.unknownKeyErrors,
    name: "unknownKeyErrors",
    jitArgs: jitErrorArgs,
    jitDefaultArgs: jitDefaultErrorArgs,
    returnName: jitErrorArgs.εrr
  },
  hasUnknownKeys: {
    id: mionRoutes.JIT_FUNCTION_IDS.hasUnknownKeys,
    name: "hasUnknownKeys",
    jitArgs: jitArgsWithOptions,
    jitDefaultArgs: jitDefaultArgsWithOptions,
    runTimeOptions: { checkNonJitProps: { keyName: "checkNonJitProps", type: "boolean", defaultValue: false } },
    returnName: jitArgsWithOptions.vλl
  },
  stripUnknownKeys: {
    id: mionRoutes.JIT_FUNCTION_IDS.stripUnknownKeys,
    name: "stripUnknownKeys",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  unknownKeysToUndefined: {
    id: mionRoutes.JIT_FUNCTION_IDS.unknownKeysToUndefined,
    name: "unknownKeysToUndefined",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  aux: {
    id: mionRoutes.JIT_FUNCTION_IDS.aux,
    name: "aux",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  // mock is not really a jit function but is used in a similar way, main difference is that it is not compiled
  mock: {
    id: mionRoutes.JIT_FUNCTION_IDS.mock,
    name: "mockType",
    import: () => Promise.resolve().then(() => require("./mockType-C0u56bJX.js")).then((n) => n.mockType$1).then(__assignType$h((m) => m.mockType, ["m", "", 'P"2!"/"'])),
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  },
  // pure function are not jit compiled but we ensure we reserve a prefix to avoid collisions
  pureFunction: {
    id: mionRoutes.JIT_FUNCTION_IDS.pureFunction,
    name: "pureFunction",
    jitArgs,
    jitDefaultArgs,
    returnName: jitArgs.vλl
  }
};
const jitFunctionList = Object.values(JitFunctions$1);
const jitFunctionsById = Object.fromEntries(jitFunctionList.map(__assignType$h((f) => [f.id, f], ["f", "", 'P"2!"/"'])));
const ReflectionKindName = {
  0: "never",
  1: "any",
  2: "unknown",
  3: "void",
  4: "objectLiteral",
  // name was changed from deepkit's 'object' to 'objectLiteral'
  5: "string",
  6: "number",
  7: "boolean",
  8: "symbol",
  9: "bigint",
  10: "null",
  11: "undefined",
  12: "regexp",
  13: "literal",
  14: "templateLiteral",
  15: "property",
  16: "method",
  17: "function",
  18: "parameter",
  19: "promise",
  20: "class",
  21: "typeParameter",
  22: "enum",
  23: "union",
  24: "intersection",
  25: "array",
  26: "tuple",
  27: "tupleMember",
  28: "enumMember",
  29: "rest",
  30: "object",
  // name was changed from deepkit's 'objectLiteral' to 'object' for better error messages
  31: "indexSignature",
  32: "propertySignature",
  33: "methodSignature",
  34: "infer",
  35: "callSignature"
};
const ReflectionSubKind$1 = {
  // group of sub-kinds that extends ReflectionKind.class
  date: 2001,
  map: 2002,
  set: 2003,
  nonSerializable: 2004,
  params: 1701,
  mapKey: 1801,
  mapValue: 1802,
  setItem: 1803
};
const ReflectionSubNames = {
  2001: "date",
  2002: "map",
  2003: "set",
  1701: "params"
};
const __ΩAnyKindName = [() => type.ReflectionKind, () => ReflectionSubKind$1, "AnyKindName", 'Pi!gi"gJw#y'];
function getReflectionName(rt) {
  if (rt.src.subKind)
    return ReflectionSubNames[rt.src.subKind];
  return ReflectionKindName[rt.src.kind];
}
getReflectionName.__type = [() => __ΩRunType, "rt", () => __ΩAnyKindName, "getReflectionName", 'Pn!2"n#/$'];
const nonSerializableClasses = [
  // TODO: decide what to do with native errors, they should be easily serializable
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  AggregateError,
  // Promise, // Promise has it's own RunType
  // data types
  WeakMap,
  WeakSet,
  DataView,
  ArrayBuffer,
  SharedArrayBuffer,
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint8ClampedArray,
  Uint16Array,
  Uint32Array,
  BigInt64Array,
  BigUint64Array
];
const nonSerializableGlobals = [
  // TODO: decide what to do with native errors, they should be easily serializable
  "Error",
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
  "AggregateError",
  // data types
  "WeakMap",
  "WeakSet",
  "DataView",
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Int16Array",
  "Int32Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // bellow are common interface names from standard libraries, they added here but not tested
  "Generator",
  "GeneratorFunction",
  "AsyncGenerator",
  "Iterator",
  "AsyncGeneratorFunction",
  "AsyncIterator"
];
const nativeUtilityStringTypes = ["Uppercase", "Lowercase", "Capitalize", "Uncapitalize"];
const validPropertyNameRegExp = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
const maxStackErrorMessage = "Max compilation nested level reached, either you have a very deeply nested type or there is an error related to circular references un the types.";
const JIT_STACK_TRACE_MESSAGE = "\nJIT runType trace => ";
const MAX_UNION_ITEMS = 2 ** 16 - 1;
function isAnyRunType(rt) {
  return rt.src.kind === type.ReflectionKind.any;
}
function isArrayRunType(rt) {
  return rt.src.kind === type.ReflectionKind.array;
}
function isBigIntRunType(rt) {
  return rt.src.kind === type.ReflectionKind.bigint;
}
function isBooleanRunType(rt) {
  return rt.src.kind === type.ReflectionKind.boolean;
}
function isCallSignatureRunType(rt) {
  return rt.src.kind === type.ReflectionKind.callSignature;
}
function isDateRunType(rt) {
  return rt.getTypeID() === ReflectionSubKind$1.date;
}
function isEnumRunType(rt) {
  return rt.src.kind === type.ReflectionKind.enum;
}
function isEnumMemberRunType(rt) {
  return rt.src.kind === type.ReflectionKind.enumMember;
}
function isFunctionRunType(rt) {
  return rt.src.kind === type.ReflectionKind.function;
}
function isFunctionParamsRunType(rt) {
  return rt.src.subKind === ReflectionSubKind$1.params;
}
function isAnyFunctionRunType(rt) {
  var _a;
  return ((_a = rt.src.return) == null ? void 0 : _a.kind) !== void 0;
}
function isIndexSignatureRunType(rt) {
  return rt.src.kind === type.ReflectionKind.indexSignature;
}
function isLiteralRunType(rt) {
  return rt.src.kind === type.ReflectionKind.literal;
}
function isMethodSignatureRunType(rt) {
  return rt.src.kind === type.ReflectionKind.methodSignature;
}
function isNullRunType(rt) {
  return rt.src.kind === type.ReflectionKind.null;
}
function isNumberRunType(rt) {
  return rt.src.kind === type.ReflectionKind.number;
}
function isInterfaceRunType(rt) {
  return rt.src.kind === type.ReflectionKind.objectLiteral;
}
function isObjectLiteralRunType(rt) {
  return rt.src.kind === type.ReflectionKind.objectLiteral;
}
function isClassRunType(rt, cls) {
  const isClassRt = rt.src.kind === type.ReflectionKind.class && rt.src.subKind !== ReflectionSubKind$1.date;
  if (!cls) return isClassRt;
  return isClassRt && (rt.src.classType === cls || rt.src.classType.name === cls);
}
function isIntersectionRunType(rt) {
  return rt.src.kind === type.ReflectionKind.intersection;
}
function isPropertyRunType(rt) {
  return rt.src.kind === type.ReflectionKind.property;
}
function isPropertySignatureRunType(rt) {
  return rt.src.kind === type.ReflectionKind.propertySignature;
}
function isRegexpRunType(rt) {
  return rt.src.kind === type.ReflectionKind.regexp;
}
function isStringRunType(rt) {
  return rt.src.kind === type.ReflectionKind.string;
}
function isSymbolRunType(rt) {
  return rt.src.kind === type.ReflectionKind.symbol;
}
function isTupleRunType(rt) {
  return rt.src.kind === type.ReflectionKind.tuple;
}
function isTupleMemberRunType(rt) {
  return rt.src.kind === type.ReflectionKind.tupleMember;
}
function isUndefinedRunType(rt) {
  return rt.src.kind === type.ReflectionKind.undefined;
}
function isUnionRunType(rt) {
  return rt.src.kind === type.ReflectionKind.union;
}
function isUnknownRunType(rt) {
  return rt.src.kind === type.ReflectionKind.unknown;
}
function isVoidRunType(rt) {
  return rt.src.kind === type.ReflectionKind.void;
}
function isNeverRunType(rt) {
  return rt.src.kind === type.ReflectionKind.never;
}
function isObjectRunType(rt) {
  return rt.src.kind === type.ReflectionKind.object;
}
function isParameterRunType(rt) {
  return rt.src.kind === type.ReflectionKind.parameter;
}
function isPromiseRunType(rt) {
  return rt.src.kind === type.ReflectionKind.promise;
}
function isConstructor(rt) {
  return (rt.src.kind === type.ReflectionKind.method || rt.src.kind === type.ReflectionKind.methodSignature) && rt.src.name === "constructor";
}
function isChildAccessorType(rt) {
  return !!rt.getChildVarName && !!rt.getChildLiteral;
}
function isAtomicRunType(rt) {
  return rt.getFamily() === "A";
}
function isCollectionRunType(rt) {
  return rt.getFamily() === "C";
}
function isMemberRunType(rt) {
  return rt.getFamily() === "M";
}
function isRunType(value) {
  var _a;
  return typeof ((_a = value == null ? void 0 : value.src) == null ? void 0 : _a.kind) === "number" && typeof (value == null ? void 0 : value.getTypeID) === "function";
}
function isJitErrorsCompiler(value) {
  return value.fnID === JitFunctions$1.typeErrors.id || value.fnID === JitFunctions$1.unknownKeyErrors.id;
}
function isNonSerializableClass(src) {
  return nonSerializableClasses.includes(src.classType);
}
function isNonSerializableObject(src) {
  if (!src.typeName) return false;
  return nonSerializableGlobals.includes(src.typeName);
}
function isNativeUtilityStringTypes(src) {
  if (!src.typeName) return false;
  return nativeUtilityStringTypes.includes(src.typeName);
}
function hasType(src) {
  return type.isType(src == null ? void 0 : src.type);
}
function hasTypes(src) {
  return Array.isArray(src == null ? void 0 : src.types) && type.isType(src);
}
function hasReturn(src) {
  return type.isType(src == null ? void 0 : src.return);
}
function hasParameters(src) {
  return Array.isArray(src == null ? void 0 : src.parameters) && type.isType(src);
}
function hasIndexType(src) {
  return type.isType(src == null ? void 0 : src.indexType);
}
function hasArguments(src) {
  return Array.isArray(src == null ? void 0 : src.arguments) && type.isType(src);
}
function hasExtends(src) {
  return Array.isArray(src == null ? void 0 : src.extends) && type.isType(src);
}
function hasExtendsArguments(src) {
  return Array.isArray(src == null ? void 0 : src.extendsArguments) && type.isType(src);
}
function hasTypeArguments(src) {
  return Array.isArray(src == null ? void 0 : src.typeArguments) && type.isType(src);
}
function hasTypeParameters(src) {
  return Array.isArray(src == null ? void 0 : src.typeParameters) && type.isType(src);
}
function hasMembers(src) {
  return Array.isArray(src == null ? void 0 : src.members) && type.isType(src);
}
function hasImplements(src) {
  return Array.isArray(src == null ? void 0 : src.implements) && type.isType(src);
}
function isFormatParamMeta(src) {
  return (src == null ? void 0 : src.val) !== void 0;
}
const jitFunctionsRegistry = /* @__PURE__ */ new Map();
const nativeIds = new Set(jitFunctionList.filter((f) => !f.import).map((f) => f.id));
async function registerJitFunctionCompiler(jitFnSettings) {
  const existing = jitFunctionsRegistry.get(jitFnSettings.id);
  if (nativeIds.has(jitFnSettings.id))
    throw new Error(`Jit function ${jitFnSettings.name} is native and can not be registered`);
  if (existing) return existing.compiler;
  if (!jitFnSettings.import) throw new Error(`Jit function ${jitFnSettings.name} has no import function`);
  try {
    const newFn = await jitFnSettings.import();
    jitFunctionsRegistry.set(jitFnSettings.id, {
      jitFnSettings,
      compiler: newFn
    });
    return newFn;
  } catch (e) {
    console.warn(e);
    throw new Error(`Error loading jit function ${jitFnSettings.name}: ${e == null ? void 0 : e.message}`);
  }
}
function getJitFunctionCompiler(jitFnSettings) {
  const existing = jitFunctionsRegistry.get(jitFnSettings.id);
  if (existing) return existing.compiler;
  throw new Error(`Function ${jitFnSettings.name} has not been loaded.`);
}
function getJitFnSettings(fnID2) {
  var _a;
  const fnConfig = jitFunctionsById[fnID2] || ((_a = jitFunctionsRegistry.get(fnID2)) == null ? void 0 : _a.jitFnSettings);
  if (fnConfig === void 0) throw new Error(`Unknown jit function id: ${fnID2}`);
  return fnConfig;
}
function getJITFnName(fnID2) {
  return getJitFnSettings(fnID2).name;
}
function toLiteral(value) {
  switch (typeof value) {
    case "number":
      return `${value}`;
    case "string":
      return JSON.stringify(value);
    case "boolean":
      return value ? "true" : "false";
    case "undefined":
      return "undefined";
    case "bigint":
      return `${value}n`;
    case "symbol":
      return `Symbol(${toLiteral(value.description)})`;
    case "object":
      if (value === null) return "null";
      if (value instanceof RegExp) return value.toString();
      throw new Error(`Unsupported literal type ${value}`);
    default:
      throw new Error(`Unsupported literal type ${value}`);
  }
}
function arrayToLiteral(value) {
  return `[${arrayToArgumentsLiteral(value)}]`;
}
function arrayToArgumentsLiteral(value) {
  return value.map((v) => `${toLiteral(v)}`).join(", ");
}
function memorize(fn) {
  let cached;
  return ((...args) => {
    if (!cached) cached = fn(...args);
    return cached;
  });
}
function isSafePropName(name) {
  return typeof name === "string" && validPropertyNameRegExp.test(name) || typeof name === "number";
}
function getPropVarName(name) {
  if (typeof name === "symbol") return name.toString();
  return name;
}
function getPropLiteral(name) {
  return toLiteral(name);
}
function useArrayAccessorForProp(name) {
  if (typeof name === "number") return true;
  return !isSafePropName(name);
}
function getPropIndex(src) {
  const parent = src.parent;
  if (!parent) return -1;
  const types = parent.types;
  if (types) return types.indexOf(src);
  return 0;
}
function getParamIndex(src) {
  const parent = src.parent;
  if (!parent) return -1;
  if (parent.parameters) return parent.parameters.indexOf(src);
  if (parent.types) return parent.types.indexOf(src);
  return 0;
}
function childIsExpression(childJCode, child) {
  return childJCode.type === "E" || !child.isJitInlined();
}
const maxStringLength = 10;
function toLiteralInContext(comp, params, ignoreProps = [], isDependencies = false) {
  switch (true) {
    case typeof params === "string": {
      const literal = toLiteral(params);
      if (params.length > maxStringLength) {
        const hash = createHashLiteral(params);
        const strName = hash;
        if (!comp.hasContextItem(strName)) comp.setContextItem(strName, `const ${strName} = ${literal}`);
        return strName;
      }
      return literal;
    }
    case typeof params === "number":
      return `${params}`;
    case typeof params === "boolean":
      return params ? "true" : "false";
    case params instanceof RegExp: {
      const regCode = params.toString();
      const hash = createHashLiteral(regCode);
      const regName = hash;
      if (!comp.hasContextItem(regName)) comp.setContextItem(regName, `const ${regName} = ${regCode}`);
      return regName;
    }
    case Array.isArray(params): {
      const arrCode = `[${params.map((v) => toLiteralInContext(comp, v, ignoreProps, isDependencies)).join(",")}]`;
      const hash = createHashLiteral(arrCode);
      const arrName = hash;
      if (!comp.hasContextItem(arrName)) comp.setContextItem(arrName, `const ${arrName} = ${arrCode}`);
      return arrName;
    }
    case typeof params === "object": {
      const entriesLiterals = Object.entries(params).map(([k, v]) => {
        if (ignoreProps.includes(k) || typeof v === "undefined") return void 0;
        const propName = isSafePropName(k) ? k : toLiteral(k);
        if (!isDependencies) return `${propName}:${toLiteralInContext(comp, v, ignoreProps, isDependencies)}`;
        return `${propName}:${dependencyValueToLiteral(comp, v)}`;
      });
      const objCode = `{${entriesLiterals.filter(Boolean).join(",")}}`;
      const hash = createHashLiteral(objCode);
      const objName = hash;
      if (!comp.hasContextItem(objName)) comp.setContextItem(objName, `const ${objName} = ${objCode}`);
      return objName;
    }
    case typeof params === "bigint":
      return toLiteral(params);
    default:
      throw new Error(`Unsupported type format params ${params}`);
  }
}
function dependencyValueToLiteral(comp, propVal) {
  if (typeof propVal === "object" && propVal !== null && "createJitFn" in propVal && "namespace" in propVal && "fnName" in propVal) {
    if (!comp) throw new Error("Dependencies must be pure functions or code");
    comp.addPureFnDependency(propVal);
    return `utl.getPureFn(${toLiteral(propVal.namespace)}, ${toLiteral(propVal.fnName)})`;
  }
  if (typeof propVal === "string") return propVal;
  throw new Error("Dependencies must be CompiledPureFunction objects or code strings");
}
function typeParamsToString(params, ignoreProps) {
  switch (true) {
    case typeof params === "string":
      return toLiteral(params);
    case typeof params === "number":
      return `${params}`;
    case typeof params === "boolean":
      return params ? "true" : "false";
    case params instanceof RegExp:
      return params.toString();
    case Array.isArray(params):
      return `[${params.map((v) => typeParamsToString(v, ignoreProps)).join(", ")}]`;
    case typeof params === "object": {
      const entriesLiterals = Object.entries(params).map(([k, v]) => {
        if (ignoreProps.includes(k) || typeof v === "undefined") return void 0;
        return `${k}:${typeParamsToString(v, ignoreProps)}`;
      });
      return `{${entriesLiterals.filter(Boolean).join(",")}}`;
    }
    case typeof params === "bigint":
      return `${params}n`;
    default:
      throw new Error(`Unsupported type format params ${params}`);
  }
}
function getFormatterHash(rt) {
  const literal = rt.getFormatTypeID();
  if (!literal) throw new Error("Formatter JIT ID not found");
  return createHashLiteral(literal);
}
const familyComplexity = {
  A: 2,
  M: 20,
  // member usually involves iteration
  C: 10,
  // collection usually involves calling and extra jit function
  F: 1e7
};
const typesComplexity = {
  [type.ReflectionKind.indexSignature]: 20,
  // index involves traversing all object keys
  [type.ReflectionKind.array]: 30,
  // array involves iterating all items
  [type.ReflectionKind.property]: 0,
  // property involves just checking a single property
  [type.ReflectionKind.propertySignature]: 0,
  // property involves just checking a single property
  [type.ReflectionKind.boolean]: 1,
  // boolean is fast to check
  [type.ReflectionKind.null]: 1,
  // null is fast to check
  [type.ReflectionKind.undefined]: 1,
  // undefined is fast to check
  [type.ReflectionKind.enum]: 20
  // enum can involve checking multiple values
};
const subTypesComplexity = {
  [ReflectionSubKind$1.date]: 3
};
function getTotalComplexity(comp, rt, stack = []) {
  if (!rt) return 0;
  if (stack.includes(rt)) return 0;
  stack.push(rt);
  let result = 0;
  const subKindC = rt.src.subKind ? subTypesComplexity[rt.src.subKind] : void 0;
  const typeC = subKindC || typesComplexity[rt.src.kind];
  const familyC = rt.getFamily();
  if (familyC === "A") result = typeC || familyComplexity.A;
  else if (familyC === "M") {
    const childRT = rt.getJitChild(comp);
    if (!childRT) return typeC ?? familyComplexity.M;
    const childC = getTotalComplexity(comp, childRT, stack);
    result = (typeC ?? familyComplexity.M) + childC;
  } else if (familyC === "C") {
    const childrenC = rt.getJitChildren(comp).map((child) => getTotalComplexity(comp, child, stack));
    const totalChildrenC = childrenC.reduce((acc, childC) => acc + childC, 0);
    result = (typeC ?? familyComplexity.C) + totalChildrenC;
  } else {
    result = typeC ?? familyComplexity.F;
  }
  stack.pop();
  return result;
}
function sortRunTypeByComplexity(comp, a, b) {
  if (a.getFamily() === "M" && b.getFamily() === "M") {
    const aIsDiscriminator = a.isUnionDiscriminator;
    const bIsDiscriminator = b.isUnionDiscriminator;
    if (aIsDiscriminator && !bIsDiscriminator) return -1;
    if (!aIsDiscriminator && bIsDiscriminator) return 1;
  }
  if (b.getFamily() === "M" && b.isUnionDiscriminator) return 1;
  const aTotal = getTotalComplexity(comp, a);
  const bTotal = getTotalComplexity(comp, b);
  return aTotal - bTotal;
}
function sortDiscriminatorsFirst(a, b) {
  if (a.getFamily() === "M" && b.getFamily() === "M") {
    const aIsDiscriminator = a.isUnionDiscriminator;
    const bIsDiscriminator = b.isUnionDiscriminator;
    if (aIsDiscriminator && !bIsDiscriminator) return -1;
    if (!aIsDiscriminator && bIsDiscriminator) return 1;
  }
  return 0;
}
function createIfElseFn() {
  let isFirst = true;
  return (end = false) => {
    const elseIf = end ? "else" : "else if";
    const iF = isFirst ? "if" : elseIf;
    isFirst = false;
    return iF;
  };
}
function getJitFnArgCallVarName(parentComp, rt, idFnToCall, argKey) {
  var _a;
  const fnConfig = getJitFnSettings(idFnToCall);
  const defaultArgVal = fnConfig.jitDefaultArgs[argKey];
  if (argKey === "vλl" && fnConfig.noInitialVλl) return "undefined";
  if (argKey === "vλl") return parentComp.getCurrentStackItem().vλl;
  const varNameFromContext = (_a = parentComp.getChildrenCallArgs(idFnToCall)) == null ? void 0 : _a[argKey];
  if (varNameFromContext) return varNameFromContext;
  const varNameFromParent = parentComp.args[argKey];
  if (varNameFromParent) return varNameFromParent;
  if (!defaultArgVal)
    throw new Error(
      `Can not call jit function ${idFnToCall} because it requires argument ${argKey} but it is not provided,
            neither in the parent function nor in the function context and there is no default value for it.`
    );
  const defaultName = fnConfig.jitArgs[argKey];
  const optsVarName = `${defaultName}_${idFnToCall}0`;
  parentComp.setContextItem(optsVarName, `const ${optsVarName} = ${defaultArgVal}`);
  return optsVarName;
}
function parentIs(rt, kind) {
  const parentRT = rt.getParent();
  if (!parentRT) return false;
  if (parentRT.src.kind === type.ReflectionKind.union) return parentIs(parentRT, kind);
  if (Array.isArray(kind) ? kind.includes(parentRT.src.kind) : parentRT.src.kind === kind) return true;
  return false;
}
function addFullStop(code) {
  if (!code) return code;
  const lastChar = code.length - 1;
  const hasFullStop = code[lastChar] === ";";
  if (hasFullStop) return code;
  const hasBlockClose = code[lastChar] === "}";
  return hasBlockClose ? code : `${code};`;
}
const typeAnnotationsCache = /* @__PURE__ */ new Map();
const formatterPrefix = "f";
function registerFormatter(operation, shouldThrow = false) {
  const id = getFormatterKey(formatterPrefix, operation.kind, operation.name);
  const exiting = typeAnnotationsCache.get(id);
  if (exiting && exiting !== operation) {
    if (shouldThrow)
      throw new Error(`Annotation type ${operation.name} already registered for ${ReflectionKindName[operation.kind]}`);
    return operation;
  }
  typeAnnotationsCache.set(id, operation);
  return operation;
}
function getFormatterFromCache(typeKind, name, shouldThrow = false) {
  const formatter = typeAnnotationsCache.get(getFormatterKey(formatterPrefix, typeKind, name));
  if (!formatter) {
    if (shouldThrow) throw new Error(`Annotation type ${name} not found for ${ReflectionKindName[typeKind]}`);
    return void 0;
  }
  return formatter;
}
function getFormatterKey(prefix, kind, name) {
  return `${prefix}:${kind}:${name}`;
}
function getRunTypeFormat(rt) {
  var _a;
  return (_a = getFormatAnnotation(rt)) == null ? void 0 : _a.formatter;
}
function getRunTypeTransformer(rt) {
  const rtFormat = getRunTypeFormat(rt);
  if (rtFormat == null ? void 0 : rtFormat.emitFormat) return rtFormat;
  return void 0;
}
function initFormatAnnotations(rt) {
  const annotations = type.typeAnnotation.getAnnotations(rt.src);
  if (annotations.length === 0) return;
  if (annotations.length > 1)
    throw new Error(`Only one type annotation is allowed for runTypes and ${rt.getTypeName()} has ${annotations.length}`);
  const annotation = annotations[0];
  if (!annotation.name) throw new Error(`Type annotation must have a name for ${rt.getTypeName()}`);
  const params = annotation.options;
  const formatter = getFormatterFromCache(rt.src.kind, annotation.name);
  if (formatter && params.kind === type.ReflectionKind.objectLiteral) {
    annotation.formatter = formatter;
    return annotation;
  }
  return annotation;
}
function getFormatterParams(rt, fmtName) {
  const annotation = getFormatAnnotation(rt);
  if ((annotation == null ? void 0 : annotation.name) === fmtName) {
    if (annotation.params) return annotation.params;
    annotation.params = type.typeAnnotation.getOption(rt.src, annotation.name);
    return annotation.params;
  }
  throw new Error(`Type Formatter ${fmtName} not found for ${rt.getTypeName()}`);
}
function getFormatAnnotation(rt) {
  const parsedAnnotations = type.typeAnnotation.getAnnotations(rt.src);
  const formatAnnotations = parsedAnnotations.filter((a) => a.formatter);
  return formatAnnotations[0];
}
const defaultIgnoreFormatProps = ["mockSamples"];
function paramsToLiteral(comp, params, ignoreProps) {
  return toLiteralInContext(comp, params, ignoreProps, false);
}
function getToLiteralFn(comp, ignoreProps) {
  return (params) => paramsToLiteral(comp, params, ignoreProps);
}
function dependenciesToLiteral(comp, params, ignoreProps = []) {
  return toLiteralInContext(comp, params, ignoreProps, true);
}
const __ΩRecord = ["K", "T", "Record", `l'e#"Rb!b"Pde"!N#!w#y`];
function __assignType$g(fn, args) {
  fn.__type = args;
  return fn;
}
const cpf_asJSONString = mionRoutes.registerPureFnFactory("mion", "asJSONString", function() {
  if (typeof Bun !== "undefined")
    return JSON.stringify;
  const STR_ESCAPE = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return __assignType$g(function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  }, ["str", "_asJSONStringRegexOnly", 'P"2!"/"']);
}, { bodyHash: "4WYkR03dXOzAUe", paramNames: [], code: `if (typeof Bun !== "undefined") return JSON.stringify;
  const STR_ESCAPE = /[\\u0000-\\u001f\\u0022\\u005c\\ud800-\\udfff]/;
  const MAX_SCAPE_TEST_LENGTH = 1e3;
  return function _asJSONStringRegexOnly(str) {
    if (str.length < MAX_SCAPE_TEST_LENGTH && STR_ESCAPE.test(str) === false) {
      return '"' + str + '"';
    } else {
      return JSON.stringify(str);
    }
  };` });
const cpf_getUnknownKeysFromArray = mionRoutes.registerPureFnFactory("mion", "getUnknownKeysFromArray", function() {
  const MAX_UNKNOWN_KEYS = 10;
  return __assignType$g(function _getUnknownKeysFromArray(obj, keys) {
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
  }, [() => __ΩRecord, "StrNumber", "obj", "keys", "_getUnknownKeysFromArray", 'P"w""o!#2#"w"F2$"w"F/%']);
}, { bodyHash: "D2CDXI8OoGLGyW", paramNames: [], code: 'const MAX_UNKNOWN_KEYS = 10;\n  return function _getUnknownKeysFromArray(obj, keys) {\n    const unknownKeys = [];\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) {\n        unknownKeys.push(prop);\n        if (unknownKeys.length >= MAX_UNKNOWN_KEYS) throw new Error("Too many unknown keys");\n      }\n    }\n    return unknownKeys;\n  };' });
const cpf_hasUnknownKeysFromArray = mionRoutes.registerPureFnFactory("mion", "hasUnknownKeysFromArray", function() {
  return __assignType$g(function _hasUnknownKeysFromArray(obj, keys) {
    for (const prop in obj) {
      let found = false;
      for (let j = 0; j < keys.length; j++) {
        if (keys[j] === prop) {
          found = true;
          break;
        }
      }
      if (!found)
        return true;
    }
    return false;
  }, [() => __ΩRecord, "StrNumber", "obj", "keys", "_hasUnknownKeysFromArray", 'P"w""o!#2#"w"F2$)/%']);
}, { bodyHash: "K7uzDGNnPwcqQ9", paramNames: [], code: "return function _hasUnknownKeysFromArray(obj, keys) {\n    for (const prop in obj) {\n      let found = false;\n      for (let j = 0; j < keys.length; j++) {\n        if (keys[j] === prop) {\n          found = true;\n          break;\n        }\n      }\n      if (!found) return true;\n    }\n    return false;\n  };" });
const cpf_newRunTypeErr = mionRoutes.registerPureFnFactory("mion", "newRunTypeErr", function() {
  return __assignType$g(function _err(pλth, εrr, expected, accessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const runTypeErr = { expected, path };
    εrr.push(runTypeErr);
  }, ["StrNumber", "pλth", "RunTypeError", "εrr", "expected", "accessPath", "_err", `P"w!F92""w#F2$&2%"w!F92&8$/'`]);
}, { bodyHash: "eCwDrS1nuSv7ge", paramNames: [], code: "return function _err(p\\u03BBth, \\u03B5rr, expected, accessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const runTypeErr = { expected, path };\n    \\u03B5rr.push(runTypeErr);\n  };" });
const cpf_formatErr = mionRoutes.registerPureFnFactory("mion", "formatErr", function() {
  return __assignType$g(function _formatErr(pλth, εrr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {
    const path = (accessPath == null ? void 0 : accessPath.length) ? [...pλth, ...accessPath] : [...pλth];
    const formatPath = (fmtAccessPath == null ? void 0 : fmtAccessPath.length) ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];
    const format = { name: fmtName, formatPath, val: paramVal };
    const runTypeErr = { expected, path, format };
    εrr.push(runTypeErr);
  }, ["StrNumber", "pλth", "RunTypeError", "εrr", "expected", "fmtName", "paramName", "paramVal", "fmtPath", "accessPath", "fmtAccessPath", "_formatErr", `P"w!F2""w#F2$&2%&2&&2'P&')*J2("w!F2)"w!F2*8"w!F2+8$/,`]);
}, { bodyHash: "2isPiuLWPtohVR", paramNames: [], code: "return function _formatErr(p\\u03BBth, \\u03B5rr, expected, fmtName, paramName, paramVal, fmtPath, accessPath, fmtAccessPath) {\n    const path = accessPath?.length ? [...p\\u03BBth, ...accessPath] : [...p\\u03BBth];\n    const formatPath = fmtAccessPath?.length ? [...fmtPath, ...fmtAccessPath, paramName] : [...fmtPath, paramName];\n    const format = { name: fmtName, formatPath, val: paramVal };\n    const runTypeErr = { expected, path, format };\n    \\u03B5rr.push(runTypeErr);\n  };" });
const cpf_safeIterableKey = mionRoutes.registerPureFnFactory("mion", "safeIterableKey", function() {
  return __assignType$g(function _safeKey(value) {
    if (value === void 0)
      return null;
    if (value === null)
      return null;
    const type2 = typeof value;
    if (type2 === "number" || type2 === "string" || type2 === "boolean")
      return value;
    return null;
  }, ["value", "_safeKey", 'P"2!"/"']);
}, { bodyHash: "BrjL47E-GRjUpQ", paramNames: [], code: 'return function _safeKey(value) {\n    if (value === void 0) return null;\n    if (value === null) return null;\n    const type = typeof value;\n    if (type === "number" || type === "string" || type === "boolean") return value;\n    return null;\n  };' });
const cpf_sanitizeCompiledFn = mionRoutes.registerPureFnFactory("mion", "sanitizeCompiledFn", function() {
  const anonymousRegex = /^\s*function\s+anonymous\s*\(/;
  return function sanitizeCompiled(fnCode) {
    if (anonymousRegex.test(fnCode)) {
      return fnCode.replace(anonymousRegex, "function (");
    }
    return fnCode;
  };
}, { bodyHash: "UjTRflEOSgqLPC", paramNames: [], code: 'const anonymousRegex = /^\\s*function\\s+anonymous\\s*\\(/;\n  return function sanitizeCompiled(fnCode) {\n    if (anonymousRegex.test(fnCode)) {\n      return fnCode.replace(anonymousRegex, "function (");\n    }\n    return fnCode;\n  };' });
function createStringifyCompiler(fnID2) {
  const compileStringifyIterable = createStringifyIterable(fnID2);
  function compileStringify(runType2, comp) {
    const src = runType2.src;
    const kind = src.kind;
    switch (kind) {
      // ###################### ATOMIC RUNTYPES ######################
      // Primitive types and other atomic types that don't contain other types
      case type.ReflectionKind.unknown:
      case type.ReflectionKind.any:
        return { code: `JSON.stringify(${comp.vλl})`, type: "E" };
      case type.ReflectionKind.bigint:
        return { code: `'"'+${comp.vλl}.toString()+'"'`, type: "E" };
      case type.ReflectionKind.boolean:
        return { code: `(${comp.vλl} ? 'true' : 'false')`, type: "E" };
      case type.ReflectionKind.enum:
        if (src.indexType.kind === type.ReflectionKind.number) return { code: comp.vλl, type: "E" };
        return { code: `JSON.stringify(${comp.vλl})`, type: "E" };
      case type.ReflectionKind.enumMember:
        throw new Error("StringifyJson enum member is not supported.");
      case type.ReflectionKind.literal: {
        const rt = runType2;
        if (src.literal instanceof RegExp) return compileStringify({ src: { kind: type.ReflectionKind.regexp } }, comp);
        const literalRt = runType2;
        const originalKind = src.kind;
        let result;
        switch (typeof rt.src.literal) {
          case "number":
            literalRt.src.kind = type.ReflectionKind.number;
            result = compileStringify(literalRt, comp);
            break;
          case "string":
            literalRt.src.kind = type.ReflectionKind.string;
            result = compileStringify(literalRt, comp);
            break;
          case "boolean":
            literalRt.src.kind = type.ReflectionKind.boolean;
            result = compileStringify(literalRt, comp);
            break;
          case "bigint":
            literalRt.src.kind = type.ReflectionKind.bigint;
            result = compileStringify(literalRt, comp);
            break;
          case "symbol":
            literalRt.src.kind = type.ReflectionKind.symbol;
            result = compileStringify(literalRt, comp);
            break;
          default:
            result = { code: `JSON.stringify(${comp.vλl})`, type: "E" };
            break;
        }
        literalRt.src.kind = originalKind;
        return result;
      }
      case type.ReflectionKind.never:
        throw new Error("Never type cannot be stringified.");
      case type.ReflectionKind.null: {
        const isRoot = comp.getNestLevel(runType2) === 0;
        return { code: isRoot ? `String(${comp.vλl})` : comp.vλl, type: "E" };
      }
      case type.ReflectionKind.number: {
        const isRoot = comp.getNestLevel(runType2) === 0;
        return { code: isRoot ? `String(${comp.vλl})` : comp.vλl, type: "E" };
      }
      case type.ReflectionKind.object:
        return { code: `JSON.stringify(${comp.vλl})`, type: "E" };
      case type.ReflectionKind.regexp: {
        return { code: `JSON.stringify(${comp.vλl}.toString())`, type: "E" };
      }
      case type.ReflectionKind.string: {
        return { code: `JSON.stringify(${comp.vλl})`, type: "E" };
      }
      case type.ReflectionKind.symbol:
        return { code: `JSON.stringify('Symbol:' + (${comp.vλl}.description || ''))`, type: "E" };
      case type.ReflectionKind.templateLiteral:
        throw new Error("Template Literals are not supported.");
      case type.ReflectionKind.undefined: {
        const isRoot = comp.getNestLevel(runType2) === 0;
        if (isRoot) return { code: `undefined`, type: "E" };
        const parentIsArray = parentIs(runType2, type.ReflectionKind.array);
        if (parentIsArray) return { code: `'null'`, type: "E" };
        return { code: `null`, type: "E" };
      }
      case type.ReflectionKind.void:
        return { code: "undefined", type: "E" };
      // ###################### MEMBER RUNTYPES ######################
      // Types that represent members of collections or other structures
      case type.ReflectionKind.array: {
        const rt = runType2;
        rt.checkNonSkipTypes(comp);
        const childJit = comp.compile(rt.getJitChild(comp), "E", fnID2);
        if (!(childJit == null ? void 0 : childJit.code)) return { code: `JSON.stringify(${comp.vλl})`, type: "RB" };
        const jsonItems = comp.getLocalVarName("ls", rt);
        const resultVal = comp.getLocalVarName("res", rt);
        const index = rt.getChildVarName(comp);
        return {
          code: `
                const ${jsonItems} = [];
                for (let ${index} = ${rt.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {
                    const ${resultVal} = ${childJit.code};
                    ${jsonItems}.push(${resultVal});
                }
                return '[' + ${jsonItems}.join(',') + ']';
            `,
          type: "RB"
        };
      }
      case type.ReflectionKind.indexSignature: {
        const rt = runType2;
        const child = rt.getJitChild(comp);
        const childJit = comp.compile(child, "E", fnID2);
        if (!child || !(childJit == null ? void 0 : childJit.code)) return { code: void 0, type: "RB" };
        const varName = comp.vλl;
        const prop = rt.getChildVarName(comp);
        const arrName = comp.getLocalVarName("ls", rt);
        const sep = rt.skipCommas ? "" : '+","';
        const skipCode = rt.getSkipCode(comp, prop);
        const asJSONStringFn = comp.addPureFunction(cpf_asJSONString);
        return {
          code: `
                const ${arrName} = [];
                for (const ${prop} in ${varName}) {
                    ${skipCode}
                    if (${prop} !== undefined) ${arrName}.push(${asJSONStringFn}(${prop}) + ':' + ${childJit.code});
                }
                if (!${arrName}.length) return '';
                return ${arrName}.join(',')${sep};
            `,
          type: "RB"
        };
      }
      case type.ReflectionKind.function:
      case type.ReflectionKind.method:
      case type.ReflectionKind.methodSignature:
      case type.ReflectionKind.callSignature:
        if (runType2.src.subKind === ReflectionSubKind$1.params) {
          const rt = runType2;
          const skip = rt.skipJit(comp);
          if (skip) return { code: "", type: "E" };
          const params = rt.getParamRunTypes(comp);
          if (params.length === 0) return { code: `'[]'`, type: "E" };
          const paramsCode = params.map((p) => comp.compile(p, "E", fnID2).code).join("+");
          return { code: `'['+${paramsCode}+']'`, type: "E" };
        } else {
          throw new Error(
            `Compile function ${getOperationName()} not supported, call compileParams or compileReturn instead.`
          );
        }
      case type.ReflectionKind.parameter: {
        const rt = runType2;
        switch (src.subKind) {
          case ReflectionSubKind$1.mapKey:
          case ReflectionSubKind$1.mapValue:
          case ReflectionSubKind$1.setItem:
            return compileStringifyGenericMember(rt, comp);
          default:
            return compileStringifyParameter(rt, comp);
        }
      }
      case type.ReflectionKind.property:
      case type.ReflectionKind.propertySignature: {
        const rt = runType2;
        const child = rt.getJitChild(comp);
        const childJit = comp.compile(child, "E", fnID2);
        if (!child || !(childJit == null ? void 0 : childJit.code)) return { code: void 0, type: "E" };
        const sep = rt.skipCommas ? "" : '+","';
        const propDef = getPropName2(rt, comp);
        if (rt.src.optional) {
          rt.tempChildVλl = comp.getChildVλl();
          return { code: `(${rt.tempChildVλl} === undefined ? '' : ${propDef}+${childJit.code}${sep})`, type: "E" };
        }
        return { code: `${propDef}+${childJit.code}${sep}`, type: "E" };
      }
      case type.ReflectionKind.rest: {
        const rt = runType2;
        const childJit = comp.compile(rt.getJitChild(comp), "E", fnID2);
        const itemCodeStr = (childJit == null ? void 0 : childJit.code) || "JSON.stringify(" + comp.getChildVλl() + ")";
        const arrName = comp.getLocalVarName("res", rt);
        const itemName = comp.getLocalVarName("its", rt);
        const index = rt.getChildVarName(comp);
        const isFist = rt.getChildIndex(comp) === 0;
        const sep = isFist ? "" : `','+`;
        return {
          code: `
                const ${arrName} = [];
                for (let ${index} = ${rt.getChildIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {
                    const ${itemName} = ${itemCodeStr};
                    if(${itemName}) ${arrName}.push(${itemName});
                }
                if (!${arrName}.length) {return '';}
                else {return ${sep}${arrName}.join(',')}
            `,
          type: "RB"
        };
      }
      case type.ReflectionKind.tupleMember: {
        const rt = runType2;
        const childJit = comp.compile(rt.getJitChild(comp), "E", fnID2);
        const childCodeStr = (childJit == null ? void 0 : childJit.code) || `null`;
        if (rt.isRest()) return childJit || { code: `null`, type: "E" };
        const isFirst = rt.getChildIndex(comp) === 0;
        const sep = isFirst ? "" : `','+`;
        if (rt.isOptional())
          return { code: `(${comp.getChildVλl()} === undefined ? ${sep}'null' : ${sep}${childCodeStr})`, type: "E" };
        return { code: `${sep}${childCodeStr}`, type: "E" };
      }
      case type.ReflectionKind.promise: {
        throw new Error(`Jit compilation disabled for Non Serializable types.`);
      }
      // ###################### COLLECTION RUNTYPES ######################
      // Types that contain other types as members
      case type.ReflectionKind.objectLiteral:
      case type.ReflectionKind.intersection: {
        if (runType2.src.subKind === ReflectionSubKind$1.nonSerializable) {
          throw new Error(`${getOperationName()} is disabled for Non Serializable types.`);
        } else {
          const rt = runType2;
          return compileStringifyInterface(rt, comp);
        }
      }
      case type.ReflectionKind.class:
        return compileStringifyClass(runType2, comp);
      case type.ReflectionKind.infer:
        throw new Error("Infer is not supported.");
      case type.ReflectionKind.tuple: {
        const rt = runType2;
        const skip = rt.skipJit(comp);
        if (skip) return { code: "", type: "E" };
        if (rt.getChildRunTypes().length === 0) return { code: `'[]'`, type: "E" };
        const paramsCode = rt.getChildRunTypes().map((p) => comp.compile(p, "E", fnID2).code).join("+");
        return { code: `'['+${paramsCode}+']'`, type: "E" };
      }
      case type.ReflectionKind.typeParameter:
        throw new Error("Type parameter not implemented.");
      case type.ReflectionKind.union: {
        const urt = runType2;
        urt.checkAllowedChildren(comp);
        const { simpleItems, objectTypes, anyItem } = urt.getUnionChildren(comp);
        const errName = comp.getLocalVarName("uErr", urt);
        const fail = `throw new Error(${errName});`;
        comp.setContextItem(
          errName,
          `const ${errName} = "Can not ${getOperationName()} union: item does not belong to the union"`
        );
        const ifElse = createIfElseFn();
        const getStringifyCode = (unionItem) => {
          const childJit = comp.compile(unionItem, "E", fnID2);
          const encJit = comp.compilePrepareForJson(unionItem, "E");
          const decJit = comp.compileRestoreFromJson(unionItem, "E");
          const needsTupleEncoding = !!(encJit == null ? void 0 : encJit.code) || !!(decJit == null ? void 0 : decJit.code);
          const skiEncode = !(childJit == null ? void 0 : childJit.code) || childJit.code === comp.vλl;
          const stringifyCode = skiEncode ? comp.vλl : childJit.code;
          const index = urt.getUnionItemIndex(comp, unionItem);
          const toTuple = `'[${index},' + ${stringifyCode} + ']'`;
          const tupleCode = unionItem.getFamily() === "A" ? `(${toTuple})` : toTuple;
          return needsTupleEncoding ? `return ${tupleCode}` : `return ${stringifyCode}`;
        };
        const simpleCode = simpleItems.map((unionItem) => {
          const isTypeCode = urt.getChildIsTypeWithLooseCheck(unionItem, comp);
          return `${ifElse()} (${isTypeCode}) {${getStringifyCode(unionItem)}}`;
        });
        const objCode = objectTypes.length ? objectTypes.map((unionItem) => {
          const isTypeCode = urt.getChildIsTypeWithLooseCheck(unionItem, comp);
          return `${ifElse()} (typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null && ${isTypeCode}) {${getStringifyCode(unionItem)}}`;
        }) : [];
        const anyCode = anyItem ? `${ifElse(true)} {${getStringifyCode(anyItem)}}` : `${ifElse(true)} {${fail}}`;
        return { code: [...simpleCode, ...objCode, anyCode].join(""), type: "RB" };
      }
      default:
        throw new Error(`Cant ${getOperationName()} for unsupported RunType: ${runType2.getTypeName()}`);
    }
  }
  function getOperationName() {
    switch (fnID2) {
      case JitFunctions$1.stringifyJson.id:
        return "StringifyJson";
      case JitFunctions$1.toJSCode.id:
        return "ToCode";
      default:
        throw new Error(`Unknown operation: ${fnID2}`);
    }
  }
  function getPropName2(rt, comp) {
    if (!isSafePropName(rt.src.name)) return `${JSON.stringify(rt.getChildLiteral(comp))}+':'`;
    if (fnID2 === JitFunctions$1.toJSCode.id) return `'${rt.getChildVarName(comp)}:'`;
    return `'"${rt.getChildVarName(comp)}":'`;
  }
  function compileStringifyParameter(rt, comp) {
    const childJit = comp.compile(rt.getJitChild(comp), "E", fnID2);
    const childCodeStr = (childJit == null ? void 0 : childJit.code) || `null`;
    if (rt.isRest()) return childJit || { code: `null`, type: "E" };
    const isFirst = rt.getChildIndex(comp) === 0;
    const sep = isFirst ? "" : `','+`;
    if (rt.isOptional())
      return { code: `(${comp.getChildVλl()} === undefined ? ${sep}'null' : ${sep}${childCodeStr})`, type: "E" };
    return { code: `${sep}${childCodeStr}`, type: "E" };
  }
  function compileStringifyGenericMember(rt, comp) {
    const child = rt.getJitChild(comp);
    const argCode = comp.compile(child, "E", fnID2);
    if (!(argCode == null ? void 0 : argCode.code)) return { code: void 0, type: "E" };
    const isFirst = rt.getChildIndex(comp) === 0;
    const sep = isFirst ? "" : `','+`;
    if (rt.isOptional()) return { code: `(${comp.getChildVλl()} === undefined ? '': ${sep}${argCode.code})`, type: "E" };
    return { code: `${sep}${argCode.code}`, type: "E" };
  }
  function compileStringifyInterface(rt, comp) {
    if (rt.isCallable()) return comp.compile(rt.getCallSignature(), "E", fnID2);
    const children = rt.getJsonStringifySortedChildren(comp);
    if (children.length === 0) return { code: `''`, type: "E" };
    const allOptional = children.every((prop) => prop.isOptional());
    if (allOptional) return compileInterfaceIntoArray(rt, comp, children);
    const childrenCode = children.map((prop, i) => {
      const nexChild = children[i + 1];
      const isLast = !nexChild;
      prop.skipCommas = isLast;
      return comp.compile(prop, "E", fnID2).code;
    }).filter(Boolean).join("+");
    return { code: `'{'+${childrenCode}+'}'`, type: "E" };
  }
  function compileInterfaceIntoArray(rt, comp, children) {
    const arrName = comp.getLocalVarName("ns", rt);
    const childrenCode = children.map((prop) => {
      prop.skipCommas = true;
      const childJit = comp.compile(prop, "E", fnID2);
      if (!(childJit == null ? void 0 : childJit.code)) return "";
      const code = `${arrName}.push(${childJit.code})`;
      return prop.isOptional() && prop.tempChildVλl ? `if (${prop.tempChildVλl} !== undefined){${code}}` : `${code};`;
    }).filter(Boolean).join("");
    return { code: `(function(){const ${arrName} = [];${childrenCode};return '{'+${arrName}.join(',')+'}'})()`, type: "E" };
  }
  function compileStringifyClass(runType2, comp) {
    switch (runType2.src.subKind) {
      case ReflectionSubKind$1.date:
        return { code: `'"'+${comp.vλl}.toJSON()+'"'`, type: "E" };
      case ReflectionSubKind$1.map: {
        const rt = runType2;
        return compileStringifyIterable(rt, comp);
      }
      case ReflectionSubKind$1.set: {
        const rt = runType2;
        return compileStringifyIterable(rt, comp);
      }
      case ReflectionSubKind$1.nonSerializable:
        throw new Error(`Jit compilation disabled for Non Serializable types.`);
      default: {
        const rt = runType2;
        if (rt.isCallable()) {
          const callSignature = rt.getCallSignature();
          if (callSignature) return comp.compile(callSignature, "E", fnID2);
        }
        const children = rt.getJsonStringifySortedChildren(comp);
        if (children.length === 0) return { code: `''`, type: "E" };
        const childrenCode = children.map((prop, i) => {
          const nexChild = children[i + 1];
          const isLast = !nexChild;
          prop.skipCommas = isLast;
          return comp.compile(prop, "E", fnID2).code;
        }).filter(Boolean).join("+");
        return { code: `'{'+${childrenCode}+'}'`, type: "E" };
      }
    }
  }
  return compileStringify;
}
function createStringifyIterable(fnID2) {
  return function compileStringifyIterable(rt, comp, codePrefix = "", codeSuffix = "") {
    var _a;
    const entry = ((_a = rt.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const jitChildren = rt.getJitChildren(comp);
    const childrenCode = jitChildren.map((c) => comp.compile(c, "E", fnID2).code).join("+");
    const jsonItems = comp.getLocalVarName("ls", rt);
    const resultVal = comp.getLocalVarName("res", rt);
    const childrenResult = jitChildren.length > 1 ? `'['+${childrenCode}+']'` : childrenCode;
    const earlyReturn = codePrefix && codeSuffix ? `if (!${jsonItems}.length) return '${codePrefix}${codeSuffix}';` : "";
    return {
      code: `
        const ${jsonItems} = [];
        for (const ${entry} of ${comp.vλl}) {
            const ${resultVal} = ${childrenResult};
            ${jsonItems}.push(${resultVal});
        }
        ${earlyReturn}return '${codePrefix}[' + ${jsonItems}.join(',') + ']${codeSuffix}'
    `,
      type: "RB"
    };
  };
}
const emitJsonStringify = createStringifyCompiler(JitFunctions$1.stringifyJson.id);
const fnID$1 = JitFunctions$1.toBinary.id;
function emitToBinary(runType2, comp) {
  var _a, _b;
  const src = runType2.src;
  const kind = src.kind;
  const sεr = comp.args.sεr;
  switch (kind) {
    // ###################### ATOMIC TYPES ######################
    case type.ReflectionKind.unknown:
    case type.ReflectionKind.any: {
      return { code: `${sεr}.serString(JSON.stringify(${comp.vλl}))`, type: "S" };
    }
    case type.ReflectionKind.null:
      return { code: `${sεr}.view.setUint8(${sεr}.index++, 0)`, type: "S" };
    case type.ReflectionKind.boolean:
      return { code: `${sεr}.view.setUint8(${sεr}.index++, !!${comp.vλl})`, type: "S" };
    case type.ReflectionKind.number: {
      return { code: `${sεr}.view.setFloat64(${sεr}.index,${comp.vλl}, 1, (${sεr}.index += 8))`, type: "S" };
    }
    case type.ReflectionKind.string: {
      return { code: `${sεr}.serString(${comp.vλl})`, type: "S" };
    }
    case type.ReflectionKind.bigint: {
      return { code: `${sεr}.serString(${comp.vλl}.toString(), true)`, type: "S" };
    }
    case type.ReflectionKind.undefined:
    case type.ReflectionKind.void:
      return { code: `${sεr}.view.setUint8(${sεr}.index++, 1)`, type: "S" };
    case type.ReflectionKind.symbol: {
      return { code: `${sεr}.serString(${comp.vλl}.description || '')`, type: "S" };
    }
    case type.ReflectionKind.regexp: {
      return { code: `${sεr}.serString(${comp.vλl}.source);${sεr}.serString(${comp.vλl}.flags)`, type: "S" };
    }
    case type.ReflectionKind.object:
      return { code: `${sεr}.serString(JSON.stringify(${comp.vλl}))`, type: "S" };
    case type.ReflectionKind.enum: {
      return { code: `${sεr}.serEnum(${comp.vλl})`, type: "S" };
    }
    case type.ReflectionKind.enumMember:
      throw new Error("Binary serialization not supported for enum member types");
    case type.ReflectionKind.never:
      throw new Error("Never type cannot be serialized to Binary");
    case type.ReflectionKind.templateLiteral:
      throw new Error("Template literals are not supported in Binary serialization");
    case type.ReflectionKind.literal: {
      if (comp.opts.noLiterals) {
        const lit = runType2.src.literal;
        if (lit instanceof RegExp) return emitToBinaryAs(runType2, comp, type.ReflectionKind.regexp);
        switch (typeof lit) {
          case "string":
            return emitToBinaryAs(runType2, comp, type.ReflectionKind.string);
          case "number":
            return emitToBinaryAs(runType2, comp, type.ReflectionKind.number);
          case "boolean":
            return emitToBinaryAs(runType2, comp, type.ReflectionKind.boolean);
          case "bigint":
            return emitToBinaryAs(runType2, comp, type.ReflectionKind.bigint);
          case "symbol":
            return emitToBinaryAs(runType2, comp, type.ReflectionKind.symbol);
          default:
            throw new Error(`Unsupported literal type ${typeof lit}`);
        }
      }
      return { code: "", type: "S" };
    }
    // ###################### MEMBER RUNTYPES ######################
    // Types that represent members of collections or other structures
    case type.ReflectionKind.rest:
    // rest params are serialized as array but start at rest item index
    case type.ReflectionKind.array: {
      const rt = runType2;
      rt.checkNonSkipTypes(comp);
      const child = rt.getMemberType();
      const memberJit = comp.compile(child, "S", fnID$1);
      if (!(memberJit == null ? void 0 : memberJit.code)) throw new Error(`Do not know how to serialize Array<${child.getTypeName()}> to Binary.`);
      const index = rt.getChildVarName(comp);
      return {
        code: `
                ${sεr}.view.setUint32(${sεr}.index, ${comp.vλl}.length, 1); ${sεr}.index += 4;
                for (let ${index} = ${rt.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {${memberJit.code}}
            `,
        type: "S"
      };
    }
    case type.ReflectionKind.indexSignature: {
      const rt = runType2;
      const indexKind = (_a = rt.src.index) == null ? void 0 : _a.kind;
      const memberJit = comp.compile(rt.getJitChild(comp), "S", fnID$1);
      if (!(memberJit == null ? void 0 : memberJit.code)) return { code: void 0, type: "S" };
      const propVar = rt.getChildVarName(comp);
      const lengthVar = comp.getLocalVarName("cnt", rt);
      const indexVar = comp.getLocalVarName("piI", rt);
      const varsInit = `let ${lengthVar} = 0; const ${indexVar} = ${sεr}.index; ${sεr}.index += 4;`;
      let keySerializationCode;
      if (indexKind === type.ReflectionKind.number) {
        keySerializationCode = `${sεr}.view.setUint32(${sεr}.index , Number(${propVar}), 1); ${sεr}.index += 4;`;
      } else {
        keySerializationCode = `${sεr}.serString(${propVar});`;
      }
      return {
        code: `
                ${varsInit};
                for (const ${propVar} in ${comp.vλl}) {${keySerializationCode} ${memberJit.code}; ${lengthVar}++;}
                ${sεr}.view.setUint32(${indexVar}, ${lengthVar}, 1);
            `,
        type: "S"
      };
    }
    case type.ReflectionKind.function:
    case type.ReflectionKind.method:
    case type.ReflectionKind.methodSignature:
    case type.ReflectionKind.callSignature:
      if (runType2.src.subKind === ReflectionSubKind$1.params) {
        return emitToBinaryAs(runType2, comp, type.ReflectionKind.tuple);
      } else {
        throw new Error("Binary serialization not supported for functions, call compileParams or compileReturn instead.");
      }
    case type.ReflectionKind.parameter: {
      const rt = runType2;
      switch (src.subKind) {
        case ReflectionSubKind$1.mapKey:
        case ReflectionSubKind$1.mapValue:
        case ReflectionSubKind$1.setItem: {
          const child = rt.getJitChild(comp);
          const childJit = comp.compile(child, "S", fnID$1);
          if (!(childJit == null ? void 0 : childJit.code)) throw new Error(`Do not know how to serialize ${rt.getTypeName()} to Binary.`);
          return childJit;
        }
        default: {
          return emitToBinaryAs(runType2, comp, type.ReflectionKind.tupleMember);
        }
      }
    }
    case type.ReflectionKind.property:
    case type.ReflectionKind.propertySignature: {
      const rt = runType2;
      const parent = rt.getParent();
      if (parent.hasIndexSignature(comp)) return { code: void 0, type: "S" };
      const memberCode = comp.compile(rt.getJitChild(comp), "S", fnID$1).code || "";
      if (rt.isOptional()) {
        const { bitMIndexVar, bitIndex } = getOptionalBitmapItems$1(parent, comp, 0, rt.optionalIndex, false);
        const setBitMask = `${sεr}.setBitMask(${bitMIndexVar}, ${bitIndex})`;
        return { code: `if (${comp.getChildVλl()} !== undefined) {${memberCode};${setBitMask}}`, type: "S" };
      }
      return { code: `${memberCode}`, type: "S" };
    }
    case type.ReflectionKind.tupleMember: {
      const rt = runType2;
      const child = rt.getJitChild(comp);
      const childJit = comp.compile(child, "S", fnID$1);
      const nullJIt = emitToBinaryAs(rt, comp, type.ReflectionKind.undefined);
      const itemJit = (childJit == null ? void 0 : childJit.code) ? childJit : nullJIt;
      if (rt.isRest()) return itemJit;
      const optionalIndex = rt.optionalIndex;
      const bitMIndexVar = rt._bitmapVar;
      const isFnParam = rt._isFnParam;
      const isOptional = rt.isOptional() || isFnParam;
      if (isOptional && optionalIndex !== void 0 && bitMIndexVar) {
        const bitIndex = optionalIndex & 7;
        const setBitMask = `${sεr}.setBitMask(${bitMIndexVar}, ${bitIndex})`;
        return { code: `if (${comp.getChildVλl()} !== undefined) {${itemJit.code};${setBitMask}}`, type: "S" };
      }
      return itemJit;
    }
    case type.ReflectionKind.promise:
      throw new Error("Jit compilation disabled for Non Serializable types.");
    // ###################### COLLECTION RUNTYPES ######################
    // Types that contain other types as members
    case type.ReflectionKind.objectLiteral:
    case type.ReflectionKind.intersection: {
      const rt = runType2;
      if (rt.isCallable()) return comp.compile(rt.getCallSignature(), "S", fnID$1);
      if (runType2.src.subKind === ReflectionSubKind$1.nonSerializable) {
        throw new Error("Binary serialization is disabled for Non Serializable types");
      } else {
        const { required, optional, indexSignatures } = rt.splitJitSplitChildren(comp);
        if (indexSignatures.length) {
          return comp.compile(indexSignatures[0], "S", fnID$1);
        }
        const requiredProps = required.map((prop) => comp.compile(prop, "S", fnID$1).code);
        const requiredPropsCode = requiredProps.join(";");
        let optionalPropsCode = "";
        if (optional.length) {
          const { bitMapInit, bitMIndexVar } = getOptionalBitmapItems$1(rt, comp, optional.length, 0, false);
          const propsCode = optional.map((prop, i) => {
            prop.optionalIndex = i;
            const modIndex = i + 1;
            const shouldIncreaseBufferIndex = modIndex % 8 === 0;
            const propCode = comp.compile(prop, "S", fnID$1).code;
            if (!shouldIncreaseBufferIndex) return propCode;
            return `${propCode} ${bitMIndexVar}++;`;
          }).filter(Boolean).join("");
          optionalPropsCode = `${bitMapInit}
${propsCode}`;
        }
        return { code: `${requiredPropsCode}
${optionalPropsCode}`, type: "S" };
      }
    }
    case type.ReflectionKind.class:
      switch (runType2.src.subKind) {
        case ReflectionSubKind$1.date:
          return {
            code: `${sεr}.view.setFloat64(${sεr}.index, ${comp.vλl}.getTime(), 1, (${sεr}.index += 8))`,
            type: "S"
          };
        case ReflectionSubKind$1.map:
        case ReflectionSubKind$1.set: {
          const rt = runType2;
          const sεr2 = comp.args.sεr;
          const entry = ((_b = rt.getCustomVλl(comp)) == null ? void 0 : _b.vλl) || comp.vλl;
          const jitChildren = rt.getJitChildren(comp);
          const childrenCode = jitChildren.map((c) => comp.compile(c, "S", fnID$1).code).filter(Boolean).join(";");
          const setLength = `${sεr2}.view.setUint32(${sεr2}.index, ${comp.vλl}.size, 1); ${sεr2}.index += 4;`;
          return {
            code: `${setLength} for (const ${entry} of ${comp.vλl}) {${childrenCode}}`,
            type: "S"
          };
        }
        case ReflectionSubKind$1.nonSerializable:
          throw new Error("Binary serialization disabled for Non Serializable types");
        default: {
          const rt = runType2;
          if (rt.isCallable()) {
            const callSignature = rt.getCallSignature();
            if (callSignature) return comp.compile(callSignature, "S", fnID$1);
          }
          const originalKind = runType2.src.kind;
          runType2.src.kind = type.ReflectionKind.objectLiteral;
          const result = emitToBinary(runType2, comp);
          runType2.src.kind = originalKind;
          return result;
        }
      }
      break;
    case type.ReflectionKind.infer:
      throw new Error("Infer is not supported in Binary serialization");
    case type.ReflectionKind.tuple: {
      const rt = runType2;
      const skip = rt.skipJit(comp);
      if (skip) return { code: void 0, type: "S" };
      const params = rt.getParamRunTypes(comp);
      if (params.length === 0) return { code: void 0, type: "S" };
      const isFnParams = runType2.src.subKind === ReflectionSubKind$1.params;
      const required = isFnParams ? [] : params.filter((p) => !p.isOptional() && !p.isRest());
      const optional = isFnParams ? params.filter((p) => !p.isRest()) : params.filter((p) => p.isOptional() && !p.isRest());
      const rest = params.filter((p) => p.isRest());
      const requiredCode = required.map((p) => comp.compile(p, "S", fnID$1).code).join(";");
      let optionalCode = "";
      if (optional.length) {
        const { bitMapInit, bitMIndexVar } = getOptionalBitmapItems$1(rt, comp, optional.length, 0, true);
        const optionalParamsCode = optional.map((p, i) => {
          p.optionalIndex = i;
          p._bitmapVar = bitMIndexVar;
          p._isFnParam = isFnParams;
          const paramCode = comp.compile(p, "S", fnID$1).code || "";
          const modIndex = i + 1;
          const shouldIncreaseBufferIndex = modIndex % 8 === 0 && modIndex < optional.length;
          const increaseIndex = shouldIncreaseBufferIndex ? `${bitMIndexVar}++;` : "";
          return `${paramCode} ${increaseIndex}`;
        }).join("");
        optionalCode = `${bitMapInit}
${optionalParamsCode}`;
      }
      const restCode = rest.map((p) => comp.compile(p, "S", fnID$1).code).join(";");
      const allCode = [requiredCode, optionalCode, restCode].filter(Boolean).join(";");
      return { code: allCode, type: "S" };
    }
    case type.ReflectionKind.typeParameter:
      throw new Error("Type parameter not implemented in Binary serialization");
    case type.ReflectionKind.union: {
      const rt = runType2;
      rt.checkAllowedChildren(comp);
      const { simpleItems, objectTypes, anyItem } = rt.getUnionChildren(comp);
      const totalLength = simpleItems.length + objectTypes.length + (anyItem ? 1 : 0);
      if (totalLength > MAX_UNION_ITEMS) {
        throw new Error(
          `Binary serialization not supported for Union with more than ${MAX_UNION_ITEMS} items. Found ${totalLength} in ${rt.getUnionTypeNames()}`
        );
      }
      const errName = comp.getLocalVarName("uErr", rt);
      const fail = `throw new Error(${errName});`;
      comp.setContextItem(
        errName,
        `const ${errName} = "Can not encode union to binary: item does not belong to the union"`
      );
      const ifElse = createIfElseFn();
      const getEncodeCode = (childRt) => {
        const toJit = comp.compile(childRt, "S", fnID$1);
        const encodeCode = toJit.code || "";
        const index = rt.getUnionItemIndex(comp, childRt);
        const isUint16 = index > 255;
        const writeIndex = isUint16 ? `${sεr}.view.setUint16(${sεr}.index, ${index}, 1, (${sεr}.index += 2))` : `${sεr}.view.setUint8(${sεr}.index++, ${index})`;
        return `${writeIndex};${encodeCode}`;
      };
      const simpleCode = simpleItems.map((childRt) => {
        const isTypeCode = rt.getChildIsTypeWithLooseCheck(childRt, comp);
        return `${ifElse()} (${isTypeCode}) {${getEncodeCode(childRt)}}`;
      });
      const objCode = objectTypes.length ? objectTypes.map((childRt) => {
        const isTypeCode = rt.getChildIsTypeWithLooseCheck(childRt, comp);
        return `${ifElse()} (typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null && ${isTypeCode}) {${getEncodeCode(childRt)}}`;
      }) : [];
      const anyCode = anyItem ? `${ifElse(true)} {${getEncodeCode(anyItem)}}` : `${ifElse(true)} {${fail}}`;
      return { code: [...simpleCode, ...objCode, anyCode].join(""), type: "S" };
    }
    default:
      throw new Error(`Binary serialization not supported for ${type.ReflectionKind[kind]} types`);
  }
  return { code: void 0, type: "S" };
}
function getOptionalBitmapItems$1(rt, comp, optionalLength = 0, currentIndex = 0, isTuple = false) {
  const sεr = comp.args.sεr;
  const prefix = isTuple ? "t" : "";
  const bitMIndexVar = comp.getLocalVarName(`${prefix}bmI`, rt);
  const bitmapLength = Math.ceil(optionalLength / 8);
  const bitIndex = `${currentIndex} & 7`;
  const indexVar = comp.getLocalVarName(`${prefix}iBl`, rt);
  const setBitmapToZero = bitmapLength > 1 ? `for (let ${indexVar} = 0; ${indexVar} < ${bitmapLength}; ${indexVar}++) {${sεr}.view.setUint8(${sεr}.index++, 0)}` : `${sεr}.view.setUint8(${sεr}.index++, 0)`;
  const bitMapInit = `${bitmapLength > 1 ? "let " : "const"} ${bitMIndexVar} = ${sεr}.index; ${setBitmapToZero}`;
  return { bitMIndexVar, bitmapLength, bitIndex, bitMapInit };
}
function emitToBinaryAs(rt, comp, kind) {
  const originalKind = rt.src.kind;
  rt.src.kind = kind;
  const result = emitToBinary(rt, comp);
  rt.src.kind = originalKind;
  return result;
}
const fnID = JitFunctions$1.fromBinary.id;
function emitFromBinary(runType2, comp) {
  var _a, _b, _c, _d;
  const src = runType2.src;
  const kind = src.kind;
  const dεs = comp.args.dεs;
  switch (kind) {
    // ###################### ATOMIC TYPES ######################
    case type.ReflectionKind.unknown:
    case type.ReflectionKind.any: {
      return { code: `JSON.parse(${dεs}.desString())`, type: "E" };
    }
    case type.ReflectionKind.null:
      return { code: `(${dεs}.index++, null)`, type: "E" };
    case type.ReflectionKind.boolean:
      return { code: `${dεs}.view.getUint8(${dεs}.index++) === 1`, type: "E" };
    case type.ReflectionKind.number: {
      return { code: `${dεs}.view.getFloat64(${dεs}.index, 1, (${dεs}.index += 8))`, type: "E" };
    }
    case type.ReflectionKind.string: {
      return { code: `${dεs}.desString()`, type: "E" };
    }
    case type.ReflectionKind.bigint: {
      return { code: `BigInt(${dεs}.desString(true))`, type: "E" };
    }
    case type.ReflectionKind.undefined:
    case type.ReflectionKind.void:
      return { code: `(${dεs}.index++, undefined)`, type: "E" };
    case type.ReflectionKind.symbol: {
      return { code: `Symbol(${dεs}.desString() || undefined)`, type: "E" };
    }
    case type.ReflectionKind.regexp: {
      return { code: `new RegExp(${dεs}.desString(), ${dεs}.desString())`, type: "E" };
    }
    case type.ReflectionKind.object:
      return { code: `JSON.parse(${dεs}.desString())`, type: "E" };
    case type.ReflectionKind.enum: {
      return { code: `${dεs}.desEnum()`, type: "E" };
    }
    case type.ReflectionKind.enumMember:
      throw new Error("Binary deserialization not supported for enum member types");
    case type.ReflectionKind.never:
      throw new Error("Never type cannot be deserialized from Binary");
    case type.ReflectionKind.templateLiteral:
      throw new Error("Template literals are not supported in Binary deserialization");
    case type.ReflectionKind.literal: {
      if (comp.opts.noLiterals) {
        const lit = runType2.src.literal;
        if (lit instanceof RegExp) return emitFromBinaryAs(runType2, comp, type.ReflectionKind.regexp);
        switch (typeof lit) {
          case "string":
            return emitFromBinaryAs(runType2, comp, type.ReflectionKind.string);
          case "number":
            return emitFromBinaryAs(runType2, comp, type.ReflectionKind.number);
          case "boolean":
            return emitFromBinaryAs(runType2, comp, type.ReflectionKind.boolean);
          case "bigint":
            return emitFromBinaryAs(runType2, comp, type.ReflectionKind.bigint);
          case "symbol":
            return emitFromBinaryAs(runType2, comp, type.ReflectionKind.symbol);
          default:
            throw new Error(`Unsupported literal type ${typeof lit}`);
        }
      }
      return { code: toLiteral(runType2.src.literal), type: "E" };
    }
    // ###################### MEMBER RUNTYPES ######################
    // Types that represent members of collections or other structures
    case type.ReflectionKind.rest:
    // rest params are deserialized as array but start at rest item index
    case type.ReflectionKind.array: {
      const rt = runType2;
      rt.checkNonSkipTypes(comp);
      const child = rt.getMemberType();
      const childCode = comp.compile(child, "S", fnID);
      if (!(childCode == null ? void 0 : childCode.code)) throw new Error(`Do not know how to deserialize Array<${child.getTypeName()}> from Binary.`);
      const isRest = rt.src.kind === type.ReflectionKind.rest;
      const index = rt.getChildVarName(comp);
      const isExpression = childIsExpression(childCode, child);
      const code = isExpression ? `${comp.getChildVλl()} = ${childCode.code};` : childCode.code;
      const lengthVal = comp.getLocalVarName("arrL", rt);
      const arrayInit = isRest ? "" : `${comp.vλl} = new Array(${lengthVal})`;
      return {
        code: `
                const ${lengthVal} = ${dεs}.view.getUint32(${dεs}.index, 1); ${dεs}.index += 4; ${arrayInit};
                for (let ${index} = ${rt.startIndex(comp)}; ${index} < ${lengthVal}; ${index}++) {${code}}
            `,
        type: "S"
      };
    }
    case type.ReflectionKind.indexSignature: {
      const rt = runType2;
      const indexKind = (_a = rt.src.index) == null ? void 0 : _a.kind;
      const memberCode = comp.compile(rt.getJitChild(comp), "S", fnID);
      if (!(memberCode == null ? void 0 : memberCode.code)) return { code: void 0, type: "E" };
      const prop = rt.getChildVarName(comp);
      const countVar = comp.getLocalVarName("cnt", rt);
      const indexVar = comp.getLocalVarName("propI", rt);
      let keyDeserializationCode;
      if (indexKind === type.ReflectionKind.number) {
        keyDeserializationCode = `const ${prop} = ${dεs}.view.getUint32(${dεs}.index, 1); ${dεs}.index += 4;`;
      } else {
        keyDeserializationCode = `const ${prop} = ${dεs}.desSafePropName();`;
      }
      const memberInit = memberCode.type === "E" ? `${comp.vλl}[${prop}] = ${memberCode.code};` : memberCode.code;
      const deserializeCode = `for (let ${indexVar} = 0; ${indexVar} < ${countVar}; ${indexVar}++) {${keyDeserializationCode}${memberInit}}`;
      return {
        code: `const ${countVar} = ${dεs}.view.getUint32(${dεs}.index, 1); ${dεs}.index += 4; ${comp.vλl} = {}; ${deserializeCode}`,
        type: "S"
      };
    }
    case type.ReflectionKind.function:
    case type.ReflectionKind.method:
    case type.ReflectionKind.methodSignature:
    case type.ReflectionKind.callSignature:
      if (runType2.src.subKind === ReflectionSubKind$1.params) {
        return emitFromBinaryAs(runType2, comp, type.ReflectionKind.tuple);
      } else {
        throw new Error(
          "Binary deserialization not supported for functions, call compileParams or compileReturn instead."
        );
      }
    case type.ReflectionKind.parameter: {
      const rt = runType2;
      switch (src.subKind) {
        case ReflectionSubKind$1.mapKey:
        case ReflectionSubKind$1.mapValue:
        case ReflectionSubKind$1.setItem: {
          const child = rt.getJitChild(comp);
          const childJit = comp.compile(child, "S", fnID);
          if (!(childJit == null ? void 0 : childJit.code) || !child)
            throw new Error(`Do not know how to deserialize ${rt.getTypeName()} from Binary.`);
          const parent = rt.getParent();
          const parentVλl = ((_b = parent.getCustomVλl(comp)) == null ? void 0 : _b.vλl) || comp.vλl;
          const vλl = (_c = rt.getCustomVλl(comp)) == null ? void 0 : _c.vλl;
          const isExpression = childIsExpression(childJit, child);
          const code = isExpression ? `const ${vλl} = ${childJit.code};` : childJit.code || "";
          let setOperation = "";
          switch (rt.src.subKind) {
            case ReflectionSubKind$1.mapKey:
              break;
            // we set map item once we have the key and value
            case ReflectionSubKind$1.mapValue: {
              const mapKey = parent.getMapKeyVλl(comp);
              setOperation = `${parentVλl}.set(${mapKey}, ${vλl})`;
              break;
            }
            case ReflectionSubKind$1.setItem:
              setOperation = `${parentVλl}.add(${vλl})`;
              break;
          }
          return { code: `${code}; ${setOperation};`, type: "S" };
        }
        default:
          return emitFromBinaryAs(runType2, comp, type.ReflectionKind.tupleMember);
      }
    }
    case type.ReflectionKind.property:
    case type.ReflectionKind.propertySignature: {
      const rt = runType2;
      const parent = rt.getParent();
      const child = rt.getJitChild(comp);
      const childJit = comp.compile(child, "S", fnID);
      if (rt.isOptional()) {
        const { bitMIndexVar, bitIndex } = getOptionalBitmapItems(parent, comp, 0, rt.optionalIndex, false);
        const initCode = childJit.type === "E" ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code;
        return {
          code: `if (${dεs}.view.getUint8(${bitMIndexVar}, 1) & (1 << (${bitIndex}))) {${initCode}}`,
          type: "S"
        };
      }
      const isExpression = childIsExpression(childJit, child);
      if (!isExpression) {
        return childJit;
      }
      const propName = getPropName(rt, comp);
      return { code: `${propName}:${childJit == null ? void 0 : childJit.code}`, type: "E" };
    }
    case type.ReflectionKind.tupleMember: {
      const rt = runType2;
      const childJit = comp.compile(rt.getJitChild(comp), "S", fnID);
      const nullJIt = emitFromBinaryAs(rt, comp, type.ReflectionKind.undefined);
      const itemJit = (childJit == null ? void 0 : childJit.code) ? childJit : nullJIt;
      const initCode = itemJit.type === "E" ? `${comp.getChildVλl()} = ${itemJit.code}` : itemJit.code;
      if (rt.isRest()) return itemJit;
      const optionalIndex = rt.optionalIndex;
      const bitMIndexVar = rt._bitmapVar;
      const isFnParam = rt._isFnParam;
      const isOptional = rt.isOptional() || isFnParam;
      if (isOptional && optionalIndex !== void 0 && bitMIndexVar) {
        const bitIndex = optionalIndex & 7;
        const code = `if (${dεs}.view.getUint8(${bitMIndexVar}, 1) & (1 << (${bitIndex}))) {${initCode}}`;
        return { code, type: "S" };
      }
      return { code: initCode, type: "S" };
    }
    case type.ReflectionKind.promise:
      throw new Error("Jit compilation disabled for Non Serializable types.");
    // ###################### COLLECTION RUNTYPES ######################
    // Types that contain other types as members
    case type.ReflectionKind.objectLiteral:
    case type.ReflectionKind.intersection: {
      const rt = runType2;
      if (rt.isCallable()) return comp.compile(rt.getCallSignature(), "S", fnID);
      if (runType2.src.subKind === ReflectionSubKind$1.nonSerializable) {
        throw new Error("Binary deserialization is disabled for Non Serializable types");
      } else {
        const { required, optional, indexSignatures } = rt.splitJitSplitChildren(comp);
        if (indexSignatures.length) {
          return comp.compile(indexSignatures[0], "S", fnID);
        }
        const requiredItemsJit = required.map((prop) => comp.compile(prop, "S", fnID));
        const expressionItemsJit = requiredItemsJit.filter((childJit, i) => childIsExpression(childJit, required[i])).map((prop) => prop.code).filter(Boolean);
        const statementItemsCode = requiredItemsJit.filter(Boolean).filter((childJit, i) => !childIsExpression(childJit, required[i])).map((prop) => prop.code);
        const expressionsPropsCode = expressionItemsJit.join(",");
        const requiredPropsCode = statementItemsCode.join(";");
        let optionalPropsCode = "";
        if (optional.length) {
          const { bitMapInit, bitMIndexVar } = getOptionalBitmapItems(rt, comp, optional.length, 0, false);
          const propsCode = optional.map((prop, i) => {
            prop.optionalIndex = i;
            const modIndex = i + 1;
            const shouldIncreaseBufferIndex = modIndex % 8 === 0;
            const propCode = comp.compile(prop, "S", fnID).code;
            if (!shouldIncreaseBufferIndex) return propCode;
            return `${propCode} ${bitMIndexVar}++; `;
          }).filter(Boolean).join("");
          const sep = requiredPropsCode ? ";" : "";
          optionalPropsCode = `${sep}
${bitMapInit}
${propsCode}`;
        }
        const canBeExpression = !requiredPropsCode && !optionalPropsCode;
        if (canBeExpression) return { code: `{${expressionsPropsCode}}`, type: "E" };
        return { code: `${comp.vλl} = {${expressionsPropsCode}}
${requiredPropsCode}${optionalPropsCode}`, type: "S" };
      }
    }
    case type.ReflectionKind.class:
      switch (runType2.src.subKind) {
        case ReflectionSubKind$1.date:
          return { code: `new Date(${dεs}.view.getFloat64(${dεs}.index, 1, (${dεs}.index += 8)))`, type: "E" };
        case ReflectionSubKind$1.map:
        case ReflectionSubKind$1.set: {
          const rt = runType2;
          const children = rt.getJitChildren(comp);
          const vλl = ((_d = rt.getCustomVλl(comp)) == null ? void 0 : _d.vλl) || comp.vλl;
          const initCode = `const ${vλl} = new ${rt.constructorName}()`;
          if (!children.length) return { code: `new ${rt.constructorName}()`, type: "E" };
          const childrenCode = children.map((c) => comp.compile(c, "S", fnID).code).filter(Boolean).join(";");
          if (!childrenCode) return { code: initCode, type: "E" };
          const index = comp.getLocalVarName("itI", rt);
          const lengthVar = comp.getLocalVarName("itL", rt);
          const readLength = `const ${lengthVar} = ${dεs}.view.getUint32(${dεs}.index, 1); ${dεs}.index += 4`;
          return {
            code: `${initCode}; ${readLength}; for (let ${index} = 0; ${index} < ${lengthVar}; ${index}++) {${childrenCode}} ${comp.vλl} = ${vλl};`,
            type: "S"
          };
        }
        case ReflectionSubKind$1.nonSerializable:
          throw new Error("Binary deserialization disabled for Non Serializable types");
        default: {
          const rt = runType2;
          if (rt.isCallable()) {
            const callSignature = rt.getCallSignature();
            if (callSignature) return comp.compile(callSignature, "S", fnID);
          }
          const originalKind = rt.src.kind;
          runType2.src.kind = type.ReflectionKind.objectLiteral;
          const plainObjCode = emitFromBinary(rt, comp);
          runType2.src.kind = originalKind;
          const desFnVarName = comp.getLocalVarName("desFn", rt);
          const desFnInit = `let ${desFnVarName} = utl.${mionRoutes.getJitUtils().getDeserializeFn.name}(${toLiteral(rt.getClassName())})`;
          const desFnCode = `if (${desFnVarName}) {${comp.vλl} = ${desFnVarName}(${comp.vλl})}`;
          const desClassCode = `else if (${desFnVarName} = utl.${mionRoutes.getJitUtils().getSerializeClass.name}(${toLiteral(rt.getClassName())})) {${comp.vλl} = new ${desFnVarName}(${comp.vλl})}`;
          const initCode = plainObjCode.type === "E" ? `${comp.vλl} = ${plainObjCode.code}` : plainObjCode.code;
          return { code: `${initCode};${desFnInit};${desFnCode} ${desClassCode}`, type: "S" };
        }
      }
      break;
    case type.ReflectionKind.infer:
      throw new Error("Infer is not supported in Binary deserialization");
    case type.ReflectionKind.tuple: {
      const rt = runType2;
      const skip = rt.skipJit(comp);
      if (skip) return { code: void 0, type: "S" };
      const params = rt.getParamRunTypes(comp);
      const isFnParams = runType2.src.subKind === ReflectionSubKind$1.params;
      const hasFixedSize = !isFnParams && params.every((p) => !p.isOptional() && !p.isRest());
      const initTuple = hasFixedSize ? `${comp.vλl} = new Array(${params.length});` : `${comp.vλl} = [];`;
      if (params.length === 0) return { code: initTuple, type: "S" };
      const required = isFnParams ? [] : params.filter((p) => !p.isOptional() && !p.isRest());
      const optional = isFnParams ? params.filter((p) => !p.isRest()) : params.filter((p) => p.isOptional() && !p.isRest());
      const rest = params.filter((p) => p.isRest());
      const requiredCode = required.map((p) => comp.compile(p, "S", fnID).code || "").join(";");
      let optionalCode = "";
      if (optional.length) {
        const { bitMapInit, bitMIndexVar } = getOptionalBitmapItems(rt, comp, optional.length, 0, true);
        const optionalParamsCode = optional.map((p, i) => {
          p.optionalIndex = i;
          p._bitmapVar = bitMIndexVar;
          p._isFnParam = isFnParams;
          const paramCode = comp.compile(p, "S", fnID).code || "";
          const modIndex = i + 1;
          const shouldIncreaseBufferIndex = modIndex % 8 === 0 && modIndex < optional.length;
          const increaseIndex = shouldIncreaseBufferIndex ? `${bitMIndexVar}++;` : "";
          return `${paramCode} ${increaseIndex}`;
        }).join("");
        optionalCode = `${bitMapInit}
${optionalParamsCode}`;
      }
      const restCode = rest.map((p) => comp.compile(p, "S", fnID).code || "").join(";");
      const allCode = [requiredCode, optionalCode, restCode].filter(Boolean).join(";");
      return { code: `${initTuple}${allCode}`, type: "S" };
    }
    case type.ReflectionKind.typeParameter:
      throw new Error("Type parameter not implemented in Binary deserialization");
    case type.ReflectionKind.union: {
      const rt = runType2;
      rt.checkAllowedChildren(comp);
      const decVar = comp.getLocalVarName("dec", rt);
      const errVarName = comp.getLocalVarName("uErr", rt);
      comp.setContextItem(errVarName, `const ${errVarName} = "Can not binary decode union: invalid union index"`);
      const children = rt.getJitChildren(comp);
      if (children.length > MAX_UNION_ITEMS) {
        throw new Error(
          `Binary deserialization not supported for Union with more than ${MAX_UNION_ITEMS} items. Found ${children.length} in ${rt.getUnionTypeNames()}`
        );
      }
      const maxIndex = children.length - 1;
      const isUint16 = maxIndex > 255;
      const readIndex = isUint16 ? `const ${decVar} = ${dεs}.view.getUint16(${dεs}.index, 1); ${dεs}.index += 2;` : `const ${decVar} = ${dεs}.view.getUint8(${dεs}.index++);`;
      const ifElse = createIfElseFn();
      const itemsCode = children.map((unionItem) => {
        const childJit = comp.compile(unionItem, "S", fnID);
        const isExpression = childIsExpression(childJit, unionItem);
        const code2 = isExpression && childJit.code && childJit.code !== comp.vλl ? `${comp.vλl} = ${childJit.code}` : childJit.code || "";
        const index = rt.getUnionItemIndex(comp, unionItem);
        return `${ifElse()} (${decVar} === ${index}) {${code2 || "/*noop*/"}}`;
      }).filter(Boolean);
      const childrenCode = itemsCode.join("");
      const failCode = childrenCode ? `else {throw new Error(${errVarName})}` : "";
      const code = `
                ${readIndex}
                ${childrenCode}
                ${failCode}
            `;
      return { code, type: "S" };
    }
    default:
      throw new Error(`Binary deserialization not supported for ${type.ReflectionKind[kind]} types`);
  }
  throw new Error(`Do not know how to deserialize ${runType2.getTypeName()} from Binary.`);
}
function getPropName(rt, comp, isObjectConstructor) {
  const isSafe = isSafePropName(rt.src.name);
  return isSafe ? rt.getChildVarName(comp) : rt.getChildLiteral(comp);
}
function getOptionalBitmapItems(rt, comp, optionalLength = 0, currentIndex = 0, isTuple = false) {
  const dεs = comp.args.dεs;
  const prefix = isTuple ? "t" : "";
  const bitMIndexVar = comp.getLocalVarName(`${prefix}bimI`, rt);
  const bitmapLength = Math.ceil(optionalLength / 8);
  const bitIndex = `${currentIndex} & 7`;
  const bitMapInit = `${bitmapLength > 1 ? "let " : "const"} ${bitMIndexVar} = ${dεs}.index; ${dεs}.index += ${bitmapLength};`;
  return { bitMIndexVar, bitmapLength, bitIndex, bitMapInit };
}
function emitFromBinaryAs(rt, comp, kind) {
  const originalKind = rt.src.kind;
  rt.src.kind = kind;
  const result = emitFromBinary(rt, comp);
  rt.src.kind = originalKind;
  return result;
}
function getParentSiblingNames(srcMS) {
  let parent = srcMS.parent;
  if ((parent == null ? void 0 : parent.kind) === type.ReflectionKind.propertySignature) parent = parent.parent;
  if ((parent == null ? void 0 : parent.kind) !== type.ReflectionKind.objectLiteral) return void 0;
  const types = parent.types;
  if (!types) return void 0;
  return new Set(types.map((t) => t.name).filter((n) => n !== void 0));
}
function createToCodeCompiler() {
  const fnID2 = JitFunctions$1.toJSCode.id;
  const visitJsonStringify = createStringifyCompiler(fnID2);
  const visitJsonStringifyIterable = createStringifyIterable(fnID2);
  function compileToCode(runType2, comp) {
    const src = runType2.src;
    const kind = src.kind;
    switch (kind) {
      // ###################### ATOMIC RUNTYPES ######################
      case type.ReflectionKind.undefined:
        return { code: `'undefined'`, type: "E" };
      case type.ReflectionKind.symbol:
        return { code: `'Symbol('+'"'+${comp.vλl}.description+'"'+')'`, type: "E" };
      // ###################### MEMBER RUNTYPES ######################
      case type.ReflectionKind.methodSignature: {
        const rt = runType2;
        const srcMS = src;
        const accessor = srcMS.name;
        const name = String(accessor);
        const isSafe = isSafePropName(accessor);
        const safeName = isSafe ? name : JSON.stringify(name);
        const sep = rt.skipCommas ? "" : '+","';
        if (isCompilingFnProp(rt, comp)) {
          return { code: `'undefined'`, type: "E" };
        } else if (isCompilingClosureFn(rt, comp)) {
          const isPureFn = rt.getChildVarName(comp) === "createPureFn";
          const fnName = isPureFn ? `${comp.vλl}.fnName` : `${comp.vλl}.jitFnHash`;
          const fnCode = `${comp.vλl}.code`;
          const paramList = isPureFn ? `${comp.vλl}.paramNames.join(',')` : `'utl'`;
          const closureCode = `'function get_'+${fnName}+'('+${paramList}+'){'+${fnCode}+'}'`;
          return { code: `'${safeName}:'+${closureCode}${sep}`, type: "E" };
        } else if (rt.src.subKind === ReflectionSubKind$1.params) {
          const paramsCode = visitJsonStringify(rt, comp);
          if (rt.isOptional())
            return {
              code: `(${comp.getChildVλl()} === undefined ? "" : '${safeName}:'+${paramsCode == null ? void 0 : paramsCode.code}${sep})`,
              type: "E"
            };
          return { code: `'${safeName}:'+${paramsCode == null ? void 0 : paramsCode.code}${sep}`, type: "E" };
        } else {
          const fnName = comp.addPureFunction(cpf_sanitizeCompiledFn);
          const parent = srcMS.parent;
          const isDuplicatedChild = (parent == null ? void 0 : parent.kind) === type.ReflectionKind.propertySignature && (parent == null ? void 0 : parent.name) === srcMS.name;
          if (isDuplicatedChild) return { code: `${fnName}(${comp.vλl}.toString())`, type: "E" };
          const accessorCode = isSafe ? `.${safeName}` : `[${safeName}]`;
          const fnCode = `${fnName}(${comp.vλl}${accessorCode}.toString())`;
          if (rt.isOptional())
            return { code: `(${comp.getChildVλl()} === undefined ? "" : '${safeName}:'+${fnCode}${sep})`, type: "E" };
          return { code: `'${safeName}:'+${fnCode}${sep}`, type: "E" };
        }
      }
      case type.ReflectionKind.function:
      case type.ReflectionKind.method:
      case type.ReflectionKind.callSignature:
        if (runType2.src.subKind === ReflectionSubKind$1.params) {
          return visitJsonStringify(runType2, comp);
        } else {
          return { code: `${comp.vλl}.toString()`, type: "E" };
        }
      // ###################### COLLECTION RUNTYPES ######################
      case type.ReflectionKind.class: {
        switch (runType2.src.subKind) {
          case ReflectionSubKind$1.date:
            return { code: `'new Date('+${visitJsonStringify(runType2, comp).code}+')'`, type: "E" };
          case ReflectionSubKind$1.map: {
            return visitJsonStringifyIterable(runType2, comp, "new Map(", ")");
          }
          case ReflectionSubKind$1.set: {
            return visitJsonStringifyIterable(runType2, comp, "new Set(", ")");
          }
          case ReflectionSubKind$1.nonSerializable:
            throw new Error(`Can not generate code for Non Serializable types.`);
          default: {
            const rt = runType2;
            throw new Error(`Can not generate code for classes. Class: ${rt.getClassName()}`);
          }
        }
      }
      default:
        return visitJsonStringify(runType2, comp);
    }
  }
  function isCompilingClosureFn(runType2, comp) {
    const childName = runType2.getChildVarName(comp);
    if (childName !== "createJitFn" && childName !== "createPureFn") return false;
    const siblings = getParentSiblingNames(runType2.src);
    if (!siblings) return false;
    if (!siblings.has("code")) return false;
    if (childName === "createJitFn") return siblings.has("jitFnHash");
    return siblings.has("bodyHash");
  }
  function isCompilingFnProp(runType2, comp) {
    if (runType2.getChildVarName(comp) !== "fn") return false;
    const siblings = getParentSiblingNames(runType2.src);
    if (!siblings) return false;
    return siblings.has("code") && (siblings.has("createJitFn") || siblings.has("createPureFn"));
  }
  return compileToCode;
}
let lazyFn = void 0;
function emitToCode(runType2, comp) {
  if (!lazyFn) lazyFn = createToCodeCompiler();
  return lazyFn(runType2, comp);
}
function getJITFnHash(id, rt, opts) {
  if (opts) return `${id}_${rt.getJitHash(opts)}`;
  return `${id}_${rt.getJitHash({})}`;
}
function createJitFunction(comp) {
  if (comp.fn) return comp.fn;
  if (comp.stack.length !== 0) throw new Error("Can not get compiled function before the compile operation is finished");
  if (mionRoutes.getJitUtils().hasJitFn(comp.jitFnHash)) return mionRoutes.getJitUtils().getJitFn(comp.jitFnHash);
  const { fnCode, fnName, contextCode } = getJitFnCode(comp);
  const { createJitFn, fn, code } = createJitFnWithContext(comp, fnName, fnCode, contextCode);
  comp.code = code;
  comp.fn = fn;
  comp.createJitFn = createJitFn;
  return fn;
}
function createJitFnWithContext(comp, fnName, fnCode, contextCode) {
  const context = contextCode ? `${contextCode};` : "";
  let fnWithContext = `'use strict'; ${context} return ${fnCode}`;
  if (mionRoutes.getENV("DEBUG_RUN_TIME")) {
    const fnArgs = getJitFnArgs(comp);
    const argsCall = getJitFnArgs(comp, false);
    const debugWrapper = `function debug_${fnName}(${fnArgs}){
            const resp = ${fnName}(${argsCall});
            console.log('${fnName} ${getJITFnName(comp.fnID)} ${comp.rootType.getTypeName()}', 'result:', resp, ' value:', ${argsCall});
            return resp;
        }`;
    fnWithContext = `'use strict'; ${context} ${fnCode} ${debugWrapper} return debug_${fnName};`;
  }
  try {
    const wrapperWithContext = new Function("utl", fnWithContext);
    if (mionRoutes.getENV("DEBUG_JIT")) console.log(printClosure(fnWithContext, fnName));
    return { createJitFn: wrapperWithContext, fn: wrapperWithContext(mionRoutes.getJitUtils()), code: fnWithContext };
  } catch (e) {
    if (mionRoutes.getENV("DEBUG_JIT")) {
      console.warn("Error creating jit function with context code:\n", printClosure(fnWithContext, fnName));
    }
    throw e;
  }
}
function getJitFnCode(comp) {
  const fnName = comp.jitFnHash;
  const fnArgs = getJitFnArgs(comp);
  const fnCode = `function ${fnName}(${fnArgs}){${comp.code}}`;
  return { fnName, fnCode, contextCode: comp.getContextItemValues().join(";\n") };
}
function getJitFnArgs(comp, defaultValues = true) {
  return Object.entries(comp.args).map(([key, name]) => {
    if (!comp.defaultParamValues[key] || !defaultValues) return name;
    const value = comp.defaultParamValues[key];
    return `${name}=${value}`;
  }).join(",");
}
const RB = CodeTypes.returnBlock;
const S$1 = CodeTypes.statement;
const E$1 = CodeTypes.expression;
class BaseFnCompiler {
  constructor(rootType, fnID2, jitFnSettings, parentCompiler, jitFnHash, typeID, opts = {}) {
    // !!! DO NOT MODIFY METHOD WITHOUT REVIEWING JIT CODE INVOCATIONS!!!
    /** The Jit Generated function once the compilation is finished */
    __publicField(this, "fn");
    __publicField(this, "createJitFn");
    __publicField(this, "isCompiled", false);
    __publicField(this, "typeName");
    __publicField(this, "typeID");
    __publicField(this, "jitFnHash");
    __publicField(this, "args");
    __publicField(this, "defaultParamValues");
    __publicField(this, "returnName");
    /** Alternative arguments to use when calling a child function */
    __publicField(this, "childrenCallArgs", {});
    /** Code for the jit function. after the operation has been compiled */
    __publicField(this, "code", "");
    /** Code for the context function enclosing the jit function.
     * This can be used to initialize constant or some other things that will be required across all invocation.
     * By default this contains constants for the direct dependencies of the jit function.
     * */
    __publicField(this, "contextCodeItems", /* @__PURE__ */ new Map());
    /**
     * This flag is set to true when the result of a jit compilation is a no operation (empty function).
     * Some jit compiled functions could execute no operations (ie: string, boolean and numbers does not require prepareForJson/restoreFromJson)
     */
    __publicField(this, "isNoop", false);
    /** The list of all jit functions that are used by this function and it's children. */
    __publicField(this, "jitDependencies", []);
    __publicField(this, "pureFnDependencies", []);
    /** The list of types being compiled.*/
    __publicField(this, "stack", []);
    __publicField(this, "popItem");
    /** The variable name for the current item in the stack. */
    __publicField(this, "vλl", "");
    __publicField(this, "varNameindex", /* @__PURE__ */ new Map());
    /**
     * The path to the current item in the stack,
     * This path can contain prop names array indexes or event literal variable values, ie: if parsing an array the path item would be the name if the index variable.
     * This is used to generate the correct code to access the value at runtime of the current item in the stack.
     * ie: if parsing the tuple ['A','B','C'] and the current item is 'B', the path would [1] as is the index of the item in the stack.
     * ie: if parsing the object {a: {b: {c: 'C'}}} and the current item is 'b', the path would ['a','b'] as is the path to the item in the stack.
     * At runtime this path gets combined with the runtime pλth variable to generate the correct path to access the value
     * */
    __publicField(this, "_accessPathLiterals", []);
    this.rootType = rootType;
    this.fnID = fnID2;
    this.parentCompiler = parentCompiler;
    this.opts = opts;
    this.typeName = this.rootType.getTypeName();
    this.jitFnHash = jitFnHash || getJITFnHash(this.fnID, this.rootType, opts);
    this.typeID = typeID || this.rootType.getTypeID();
    this.args = { ...jitFnSettings.jitArgs };
    this.defaultParamValues = { ...jitFnSettings.jitDefaultArgs };
    this.returnName = jitFnSettings.returnName;
    if (this.args.vλl) this.vλl = this.args.vλl;
    mionRoutes.getJitUtils().addToJitCache(this);
    validateCompilerOptions(opts);
  }
  /** shorthand for  this.length */
  get length() {
    return this.stack.length;
  }
  get totalLength() {
    if (this.parentCompiler) return this.stack.length + this.parentCompiler.totalLength;
    return this.stack.length;
  }
  getNestLevel(rt) {
    var _a;
    let index = -1;
    this.stack.forEach((item, i) => {
      if (item.rt === rt) index = i;
      if (item.rt.src.id && item.rt.src.id === rt.src.id) index = i;
    });
    if (index !== -1) return index;
    const fromParent = (_a = this.parentCompiler) == null ? void 0 : _a.getNestLevel(rt);
    if (fromParent && fromParent !== -1) return fromParent;
    return -1;
  }
  getLocalVarName(prefix, rt) {
    const key = rt.src.id || rt;
    const index = this.varNameindex.get(key);
    if (index !== void 0) return `${prefix}${index}`;
    const newIndex = this.varNameindex.size;
    this.varNameindex.set(key, newIndex);
    return `${prefix}${newIndex}`;
  }
  /** push new item to the stack, returns true if new child is already in the stack (is circular type) */
  pushStack(newChild) {
    const totalLength = this.stack.length + this.totalLength;
    if (totalLength > mionRoutes.MAX_STACK_DEPTH) throw new Error(maxStackErrorMessage);
    if (this.stack.length === 0) {
      if (newChild !== this.rootType) throw new Error("rootType should be the first item in the stack");
      newChild.getTypeID();
    }
    this.vλl = getStackVλl(this);
    if (isJitErrorsCompiler(this)) this._accessPathLiterals = getAccessPath(this);
    const newStackItem = { vλl: this.vλl, rt: newChild, staticPath: this._accessPathLiterals };
    this.stack.push(newStackItem);
  }
  popStack(resultCode) {
    if (resultCode == null ? void 0 : resultCode.code) this.code = resultCode.code;
    this.popItem = this.stack.pop();
    const item = this.stack[this.stack.length - 1];
    this.vλl = (item == null ? void 0 : item.vλl) || this.args.vλl;
    if (isJitErrorsCompiler(this)) this._accessPathLiterals = (item == null ? void 0 : item.staticPath) || [];
  }
  siplePushStack(newChild) {
    const newStackItem = { vλl: this.vλl, rt: newChild, staticPath: this._accessPathLiterals };
    this.stack.push(newStackItem);
  }
  simplePopStack() {
    this.popItem = this.stack.pop();
  }
  createJitFunction(overrideCode) {
    try {
      if (overrideCode) {
        this.code = overrideCode;
        this.isCompiled = false;
      }
      this.handleFunctionReturn();
      return createJitFunction(this);
    } catch (e) {
      const fnName = getJITFnName(this.fnID);
      const fnCode = ` Code:
function ${fnName}(){${this.code}}`;
      const name = `(${this.rootType.getTypeName()}:${this.rootType.getTypeID()})`;
      const typeString = `Type: ${this.rootType.stringify()}`;
      throw new Error(`Error building ${fnName} JIT function for type ${name}: ${e == null ? void 0 : e.message} 
${typeString} 
${fnCode}`);
    }
  }
  /** Returns a copy of the access pat for current stack item */
  getAccessPath() {
    return [...this._accessPathLiterals];
  }
  getAccessPathArgs() {
    return this._accessPathLiterals.join(",");
  }
  getAccessPathLength() {
    return this._accessPathLiterals.length;
  }
  getAccessPathArgsForFnCall() {
    return { args: this.getAccessPathArgs(), length: this.getAccessPathLength() };
  }
  getCurrentStackItem() {
    const item = this.stack[this.stack.length - 1];
    if (!item) throw new Error("Compiler stack is empty, no current item");
    return item;
  }
  getChildVλl() {
    var _a;
    const parent = this.getCurrentStackItem();
    if (!parent) return this.args.vλl;
    const rt = parent.rt;
    if (!isChildAccessorType(rt)) throw new Error(`cant get child var name from ${rt.getKindName()}`);
    if ((_a = rt.skipSettingAccessor) == null ? void 0 : _a.call(rt)) return parent.vλl;
    return parent.vλl + (rt.useArrayAccessor() ? `[${rt.getChildLiteral(this)}]` : `.${rt.getChildVarName(this)}`);
  }
  shouldCallDependency() {
    const stackItem = this.getCurrentStackItem();
    return !stackItem.rt.isJitInlined() && this.stack.length > 1;
  }
  updateDependencies(childComp) {
    if (childComp.isNoop) return;
    if (this.jitDependencies.includes(childComp.jitFnHash)) return;
    this.jitDependencies.push(childComp.jitFnHash);
  }
  removeFromJitCache() {
    mionRoutes.getJitUtils().removeFromJitCache(this);
  }
  getStackTrace() {
    var _a;
    const separator = ".";
    const parentTrace = this.parentCompiler ? this.parentCompiler.getStackTrace() + separator : JIT_STACK_TRACE_MESSAGE;
    const lastParentItem = (_a = this.parentCompiler) == null ? void 0 : _a.getCurrentStackItem();
    const filteredStack = lastParentItem ? this.stack.filter((item) => item.rt !== (lastParentItem == null ? void 0 : lastParentItem.rt)) : this.stack;
    return parentTrace + filteredStack.map((item) => this.getTypeTraceInfo(item.rt)).join(separator);
  }
  hasStackTrace(errorMessage) {
    return errorMessage.includes(JIT_STACK_TRACE_MESSAGE);
  }
  /** Set a context code item */
  setContextItem(key, value) {
    this.contextCodeItems.set(key, value);
  }
  /** Get a context code item */
  getContextItem(key) {
    return this.contextCodeItems.get(key);
  }
  /** Check if a context code item exists */
  hasContextItem(key) {
    return this.contextCodeItems.has(key);
  }
  /** Get all context code items values */
  getContextItemValues() {
    return Array.from(this.contextCodeItems.values());
  }
  setChildrenCallArgs(fnID2, args) {
    this.childrenCallArgs[fnID2] = args;
  }
  getChildrenCallArgs(fnID2) {
    return this.childrenCallArgs[fnID2];
  }
  /**
   * Compiles the current function.
   * This function handles the logic to determine if the operation should be compiled and code should be inlined, or called as a dependency.
   * Note current JitCompiler operation might be different from the passed operation id.
   * ie: typeErrors might want to compile isType to generate the part of the code that checks for the type.
   * @param comp current jit compiler operation
   * @param fnID operation id
   * @returns
   */
  compile(rt, expectedCType, fnID2) {
    if (!rt) return { code: void 0, type: expectedCType };
    let jCode;
    this.pushStack(rt);
    if (this.shouldCallDependency()) {
      const compiledOp = rt.createJitCompiledFunction(fnID2, this, this.opts);
      jCode = this.callDependency(rt, compiledOp);
      this.updateDependencies(compiledOp);
    } else {
      switch (fnID2) {
        case JitFunctions$1.isType.id:
          jCode = this.compileFormatter(rt, fnID2, rt.emitIsType(this, expectedCType), expectedCType, "&&");
          break;
        case JitFunctions$1.typeErrors.id:
          jCode = this.compileFormatter(rt, fnID2, rt.emitTypeErrors(this, expectedCType), expectedCType, ";");
          break;
        case JitFunctions$1.prepareForJson.id:
          jCode = this.compileFormatter(rt, fnID2, rt.emitPrepareForJson(this, expectedCType), expectedCType, ";");
          break;
        case JitFunctions$1.restoreFromJson.id:
          jCode = this.compileFormatter(rt, fnID2, rt.emitRestoreFromJson(this, expectedCType), expectedCType, ";");
          break;
        case JitFunctions$1.stringifyJson.id:
          jCode = this.compileFormatter(rt, fnID2, emitJsonStringify(rt, this), expectedCType, ";");
          break;
        case JitFunctions$1.toBinary.id:
          jCode = this.compileFormatter(rt, fnID2, emitToBinary(rt, this), expectedCType, ";");
          break;
        case JitFunctions$1.fromBinary.id:
          jCode = this.compileFormatter(rt, fnID2, emitFromBinary(rt, this), expectedCType, ";");
          break;
        case JitFunctions$1.toJSCode.id:
          jCode = this.compileFormatter(rt, fnID2, emitToCode(rt, this), expectedCType, ";");
          break;
        case JitFunctions$1.unknownKeyErrors.id:
          jCode = rt.emitUnknownKeyErrors(this, expectedCType);
          break;
        case JitFunctions$1.hasUnknownKeys.id:
          jCode = rt.emitHasUnknownKeys(this, expectedCType);
          break;
        case JitFunctions$1.stripUnknownKeys.id:
          jCode = rt.emitStripUnknownKeys(this, expectedCType);
          break;
        case JitFunctions$1.unknownKeysToUndefined.id:
          jCode = rt.emitUnknownKeysToUndefined(this, expectedCType);
          break;
        case JitFunctions$1.format.id:
          jCode = { code: void 0, type: E$1 };
          break;
        default:
          throw new Error(`Unknown compile operation: ${fnID2}`);
      }
      if (jCode == null ? void 0 : jCode.code) {
        const compatibleCode = this.handleCodeInterpolation(rt, jCode, expectedCType);
        jCode = { code: compatibleCode, type: jCode.type };
      }
    }
    this.popStack(jCode);
    return jCode;
  }
  compileFormatter(rt, fnID2, childJCode, expectedCType, separator) {
    const expectedCT = childJCode.code ? childJCode.type : expectedCType;
    const typeFormatter = getRunTypeFormat(rt);
    if (!typeFormatter) return childJCode;
    let jitCode = void 0;
    const formatterCode = typeFormatter.compileFormat(fnID2, this, rt);
    const canEmbed = typeFormatter.canEmbedFormatterCode(fnID2, rt);
    const codeHasReturn = formatterCode.type === RB;
    const isCompatible = formatterCode.type === expectedCT;
    if (canEmbed && isCompatible && !codeHasReturn) {
      jitCode = formatterCode;
    } else {
      const compiled = typeFormatter.createJitCompiledFormatter(fnID2, rt, this, void 0, void 0, void 0, this.opts);
      if (!compiled.isNoop) {
        this.updateDependencies(compiled);
        jitCode = this.callDependency(rt, compiled);
      }
    }
    if (!(jitCode == null ? void 0 : jitCode.code)) return childJCode;
    const shouldReplace = getJitFnSettings(fnID2).formatShouldReplaceJitCode;
    const joiner = separator === "&&" ? " && " : "; ";
    if (shouldReplace) {
      return jitCode;
    }
    const finalCode = (childJCode == null ? void 0 : childJCode.code) ? childJCode.code + joiner + jitCode.code : jitCode.code;
    return { code: finalCode, type: expectedCT };
  }
  callDependency(rt, dependencyComp) {
    if (dependencyComp.isNoop) return { code: "", type: E$1 };
    const isErrorCall = dependencyComp.fnID === JitFunctions$1.typeErrors.id || dependencyComp.fnID === JitFunctions$1.unknownKeyErrors.id;
    const depArgs = getJitFnSettings(dependencyComp.fnID).jitArgs;
    const callArgsCode = Object.keys(depArgs).map((key) => getJitFnArgCallVarName(this, rt, dependencyComp.fnID, key)).join(",");
    const isSelf = this.jitFnHash === dependencyComp.jitFnHash;
    const varName = dependencyComp.jitFnHash;
    const callCode = isSelf ? `${varName}(${callArgsCode})` : `${varName}.fn(${callArgsCode})`;
    if (!isSelf) this.setContextItem(varName, `const ${varName} = utl.getJIT(${toLiteral(varName)})`);
    if (isErrorCall) {
      const pathArgs = this.getAccessPathArgs();
      const pathLength = this.getAccessPathLength();
      if (!pathLength) return { code: callCode, type: "E" };
      return {
        code: `${jitErrorArgs.pλth}.push(${pathArgs}); ${callCode}; ${jitErrorArgs.pλth}.splice(-${pathLength});`,
        type: "S"
      };
    }
    return { code: callCode, type: "E" };
  }
  /** Check if root type is a FunctionParamsRunType with no children (empty params) */
  isEmptyFunctionParams() {
    if (!isFunctionParamsRunType(this.rootType)) return false;
    return this.rootType.getChildRunTypes().length === 0;
  }
  /**
   * Set the isNoop flag based on the code of the operation.
   * must be called before function gets compiled.
   * The isNoop flag is used to avoid calling the function when the result of compilation is an empty function.
   */
  handleFunctionReturn() {
    if (this.isCompiled) return;
    let isNoop = false;
    let code = this.code.replace(/[ \t]+/g, " ").replace(/;+/g, ";");
    const isEmptyParams = this.isEmptyFunctionParams();
    switch (this.fnID) {
      case JitFunctions$1.isType.id:
        isNoop = isEmptyParams || !this.code || this.code === "true" || this.code === "return true";
        if (isNoop) code = `return true`;
        break;
      case JitFunctions$1.hasUnknownKeys.id:
        isNoop = !this.code || this.code === "false" || this.code === "return false";
        if (isNoop) code = `return false`;
        break;
      case JitFunctions$1.prepareForJson.id:
      case JitFunctions$1.restoreFromJson.id:
      case JitFunctions$1.stripUnknownKeys.id:
      case JitFunctions$1.unknownKeysToUndefined.id:
        isNoop = isEmptyParams || !this.code || this.code === this.args.vλl || this.code === `return ${this.args.vλl}`;
        if (isNoop) code = `return ${this.args.vλl}`;
        break;
      case JitFunctions$1.typeErrors.id:
      case JitFunctions$1.unknownKeyErrors.id:
        isNoop = isEmptyParams || !this.code || this.code === this.args.εrr || this.code === `return ${this.args.εrr}`;
        if (isNoop) code = `return ${this.args.εrr}`;
        break;
      case JitFunctions$1.format.id:
        isNoop = !this.code || this.code === this.args.vλl || this.code === `return ${this.args.vλl}`;
        if (isNoop) code = `return ${this.args.vλl}`;
        break;
    }
    this.isNoop = isNoop;
    this.code = code;
    this.isCompiled = true;
  }
  /** Ensures the child code type is compatible with the parent code type */
  handleCodeInterpolation(rt, childJCode, parentCodeType) {
    const code = childJCode.code || "";
    const childCodeType = childJCode.type;
    const isRoot = this.length === 1;
    if (isRoot) {
      switch (childCodeType) {
        case E$1:
          return `return ${code}`;
        case S$1:
          return `${addFullStop(code)} return ${this.returnName}`;
        case RB:
          return code;
      }
    }
    switch (true) {
      case (parentCodeType === E$1 && childCodeType === E$1):
        return code;
      case (parentCodeType === E$1 && childCodeType === S$1):
        return this.callSelfInvokingFunction(childJCode);
      case (parentCodeType === E$1 && childCodeType === RB):
        return this.callSelfInvokingFunction(childJCode);
      case (parentCodeType === S$1 && childCodeType === E$1):
        return code;
      // no need for full stop, parent should handle it
      case (parentCodeType === S$1 && childCodeType === S$1):
        return addFullStop(code);
      case (parentCodeType === S$1 && childCodeType === RB):
        return this.callSelfInvokingFunction(childJCode);
      case (parentCodeType === RB && childCodeType === E$1):
        throw new Error("Expected an block code but got an expression, rt should not happen as would be useless code.");
      case (parentCodeType === RB && childCodeType === S$1):
        return addFullStop(code);
      case (parentCodeType === RB && childCodeType === RB):
        return `${addFullStop(code)} return ${this.returnName}`;
      default:
        throw new Error(`Unexpected code type (expected: ${parentCodeType}, got: ${childCodeType})`);
    }
  }
  /**
   * If code should be an expression, but code has return a statement, we need to wrap it in a self invoking function to avoid syntax errors
   * IMPORTANT TODO, WE CAN IMPROVE PERF QUITE A BIT BY CREATING A NEW FUNCTION IN CONTEXT INSTEAD SELF INVOkING
   * TODO: we could create a new function and cache instead a self invoking function a performance is same but code is not repeated
   * IE: this.selfInvoke(code), rt will create a new function in context and call that function instead of self invoking
   * rt is specially for atomic types as we can be sure there are no references to children types inside the code block
   */
  callSelfInvokingFunction(jCode) {
    if (jCode.type === E$1) throw new Error("Javascript expressions never need to be wrapped in a self invoking function.");
    if (!jCode.code) return "";
    const code = jCode.code.trim();
    const isSelfInvoking = code.startsWith("(function()") && code.endsWith(")()");
    if (isSelfInvoking) return code;
    const addReturn = jCode.type !== RB;
    const returnCode = addReturn ? `return ` : "";
    return `(function(){${returnCode}${jCode.code}})()`;
  }
  getTypeTraceInfo(rt) {
    if (rt.getFamily() === "C") return rt.src.typeName || getReflectionName(rt);
    if (rt.getFamily() === "F") return String(rt.src.name) || getReflectionName(rt);
    if (rt.getFamily() === "M") {
      const rtChild = rt;
      const isRunTypeChildAccessor = !!rtChild.getChildVarName;
      if (!isRunTypeChildAccessor) return getReflectionName(rt);
      return String(rtChild.getChildVarName(this));
    }
    return getReflectionName(rt);
  }
  // ########## Compile Methods shorthands ##########
  compileIsType(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.isType.id);
  }
  compileTypeErrors(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.typeErrors.id);
  }
  compilePrepareForJson(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.prepareForJson.id);
  }
  compileRestoreFromJson(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.restoreFromJson.id);
  }
  compileJsonStringify(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.stringifyJson.id);
  }
  compileToBinary(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.toBinary.id);
  }
  compileFromBinary(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.fromBinary.id);
  }
  compileUnknownKeyErrors(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.unknownKeyErrors.id);
  }
  compileHasUnknownKeys(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.hasUnknownKeys.id);
  }
  compileStripUnknownKeys(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.stripUnknownKeys.id);
  }
  compileUnknownKeysToUndefined(rt, expectedCType) {
    return this.compile(rt, expectedCType, JitFunctions$1.unknownKeysToUndefined.id);
  }
  // ################### Pure Functions Operations ###################
  addPureFunction(compiledPureFn) {
    const { namespace, fnName } = compiledPureFn;
    const varName = quickHash(fnName, 8);
    if (this.hasContextItem(varName)) return varName;
    this.addPureFnDependency(compiledPureFn);
    const pureFunctionCode = `const ${varName} = utl.getPureFn(${toLiteral(namespace)}, ${toLiteral(fnName)})`;
    this.setContextItem(varName, pureFunctionCode);
    return varName;
  }
  addPureFnDependency(compiledPureFn) {
    const { namespace, fnName } = compiledPureFn;
    if (!mionRoutes.getJitUtils().hasPureFn(namespace, fnName))
      throw new Error(
        `Pure function with name ${fnName} can not be added as jit dependency in namespace ${namespace}, be sure to register the pure function first by calling getJitUtils().addPureFn()`
      );
    const key = `${namespace}::${fnName}`;
    if (this.pureFnDependencies.includes(key)) return;
    this.pureFnDependencies.push(key);
  }
}
class JitFnCompiler extends BaseFnCompiler {
  constructor(rt, fnID2, parentCompiler, jitFnHash, typeID, opts = {}) {
    const fnSettings = getJitFnSettings(fnID2);
    super(rt, fnID2, fnSettings, parentCompiler, jitFnHash, typeID, opts);
  }
}
class JitErrorsFnCompiler extends BaseFnCompiler {
  constructor(rt, fnID2, parentCompiler, jitFnHash, typeID, opts = {}) {
    const fnSettings = getJitFnSettings(fnID2);
    super(rt, fnID2, fnSettings, parentCompiler, jitFnHash, typeID, opts);
  }
  callJitErr(expected) {
    return this.callJitErrWithPath(expected);
  }
  /**
   * This is used when we add an extra item to the path,
   * for extra info, ie union items, maps keys, etc...
   * This is because we don't want the item int the real path as it is not part of the runtime path of an object.
   * but we still want to add that info to process the error.
   * ie: type  AorBList = ({a: string} | {b: string})[];
   * we want the error to contain the info if it is union item a or b, but the path to the the doesn't have that info is just list[index]
   * */
  callJitErrWithPath(exp, extraPathLiteral) {
    const args = this._getJitErrorArgs(exp);
    const accessPath = this.getAccessPathLiteral(extraPathLiteral);
    if (accessPath) args.push(accessPath);
    const errFn = this.addPureFunction(cpf_newRunTypeErr);
    return `${errFn}(${args.join(",")})`;
  }
  callJitFormatErr(expected, formatter, paramName, paramValue, extraPathLiteral) {
    const typeErrArgs = this._getJitErrorArgs(expected);
    const fmtName = toLiteralInContext(this, formatter.getFormatName());
    const pName = toLiteralInContext(this, paramName);
    const pVal = toLiteralInContext(this, paramValue);
    const fmtPath = toLiteralInContext(this, formatter.getFormatPath());
    const formatArgs = [fmtName, pName, pVal, fmtPath];
    const optionalArgs = [];
    const accessPath = this.getAccessPathLiteral(extraPathLiteral);
    const formatAccessPath = this.getFormatAccessPathLiteral(formatter);
    if (!accessPath && formatAccessPath) optionalArgs.push("undefined");
    if (accessPath) optionalArgs.push(accessPath);
    if (formatAccessPath) optionalArgs.push(formatAccessPath);
    const formatErrFn = this.addPureFunction(cpf_formatErr);
    return `${formatErrFn}(${[...typeErrArgs, ...formatArgs, ...optionalArgs].join(",")})`;
  }
  _getJitErrorArgs(exp) {
    const path = this.args.pλth;
    const err = this.args.εrr;
    const expected = typeof exp === "string" ? toLiteral(exp) : toLiteral(exp.getKindName());
    return [path, err, expected];
  }
  getAccessPathLiteral(extraPathLiteral) {
    const accessPath = this.getAccessPath();
    if (extraPathLiteral) accessPath.push(extraPathLiteral);
    return accessPath.length ? `[${accessPath.join(",")}]` : "";
  }
  getFormatAccessPathLiteral(formatter) {
    const formatExtraPathLiteral = formatter.getFormatExtraPathLiteral();
    return formatExtraPathLiteral ? `[${formatExtraPathLiteral}]` : "";
  }
}
class MockJitCompiler extends BaseFnCompiler {
  constructor(rt, opts, parentCompiler, jitFnHash, typeID) {
    super(rt, JitFunctions$1.mock.id, JitFunctions$1.mock, parentCompiler, jitFnHash, typeID, opts);
  }
}
function createJitCompiler(rt, fnID2, parent, jitFnHash, typeID, opts = {}) {
  switch (fnID2) {
    case JitFunctions$1.isType.id:
    case JitFunctions$1.prepareForJson.id:
    case JitFunctions$1.restoreFromJson.id:
    case JitFunctions$1.stringifyJson.id:
    case JitFunctions$1.hasUnknownKeys.id:
    case JitFunctions$1.stripUnknownKeys.id:
    case JitFunctions$1.unknownKeysToUndefined.id:
    case JitFunctions$1.format.id:
    case JitFunctions$1.toJSCode.id:
    case JitFunctions$1.toBinary.id:
    case JitFunctions$1.fromBinary.id:
      return new JitFnCompiler(rt, fnID2, parent, jitFnHash, typeID, opts);
    case JitFunctions$1.typeErrors.id:
    case JitFunctions$1.unknownKeyErrors.id:
      return new JitErrorsFnCompiler(rt, fnID2, parent, jitFnHash, typeID, opts);
    case JitFunctions$1.mock.id:
      return new MockJitCompiler(rt, opts, parent, jitFnHash, typeID);
    default:
      throw new Error(`Unknown compile operation: ${fnID2}`);
  }
}
function printClosure(fnWithContext, functionName) {
  return `function get_${functionName}(utl){${fnWithContext}}`;
}
function getStackVλl(comp) {
  var _a;
  let vλl = comp.args.vλl;
  for (let i = 0; i < comp.stack.length; i++) {
    const rt = comp.stack[i].rt;
    const custom = rt.getCustomVλl(comp);
    if (custom && custom.isStandalone) {
      vλl = custom.vλl;
    } else if (custom) {
      vλl += custom.useArrayAccessor ? `[${custom.vλl}]` : `.${custom.vλl}`;
    } else if (isChildAccessorType(rt) && !((_a = rt.skipSettingAccessor) == null ? void 0 : _a.call(rt))) {
      vλl += rt.useArrayAccessor() ? `[${rt.getChildLiteral(comp)}]` : `.${rt.getChildVarName(comp)}`;
    }
  }
  return vλl;
}
function getAccessPath(comp) {
  var _a;
  const path = [];
  const rtName = [];
  for (let i = 0; i < comp.stack.length; i++) {
    const rt = comp.stack[i].rt;
    const pathItem = rt.getStaticPathLiteral(comp);
    if (pathItem) {
      path.push(pathItem);
    } else if (isChildAccessorType(rt) && !((_a = rt.skipSettingAccessor) == null ? void 0 : _a.call(rt))) {
      path.push(rt.getChildLiteral(comp));
    }
    rtName.push({ path: [...path], name: rt.constructor.name });
  }
  return path;
}
function validateCompilerOptions(opts) {
  var _a, _b;
  if (opts.paramsSlice) {
    const start = (_a = opts.paramsSlice) == null ? void 0 : _a.start;
    const end = (_b = opts.paramsSlice) == null ? void 0 : _b.end;
    if (start && start < 0) {
      throw new Error(`paramsSlice.start must be greater than 0`);
    }
    if (end && end < 0) {
      throw new Error(`paramsSlice.end must be greater than 0`);
    }
    if (end && start && end <= start) {
      throw new Error(`paramsSlice.end must be greater than paramsSlice.start`);
    }
  }
}
function createTypeId(type2, stack = []) {
  if (type2._typeId !== void 0) return type2._typeId;
  const typeId = _createTypeId(type2, stack);
  type2._typeId = typeId;
  return typeId;
}
function _createTypeId(type2, stack) {
  if (stack.length > mionRoutes.MAX_STACK_DEPTH) {
    throw new Error(`Max stack depth exceeded while computing type ID. This usually indicates a circular type reference.`);
  }
  const circularId = checkCircularAndGetRefId(type2, stack);
  if (circularId !== void 0) return circularId;
  const kind = type2.subKind || type2.kind;
  const baseTypeId = computeBaseTypeId(type2, kind, stack);
  const formatId = computeDeepkitFormatID(type2);
  if (formatId) return `${baseTypeId}${formatId}`;
  return baseTypeId;
}
function computeBaseTypeId(type$1, kind, stack) {
  const subKind = type$1.subKind;
  if (subKind === ReflectionSubKind$1.params) return computeParamsTypeId(type$1, stack);
  switch (type$1.kind) {
    // Atomic types - just return the kind
    case type.ReflectionKind.any:
    case type.ReflectionKind.bigint:
    case type.ReflectionKind.boolean:
    case type.ReflectionKind.never:
    case type.ReflectionKind.null:
    case type.ReflectionKind.number:
    case type.ReflectionKind.object:
    case type.ReflectionKind.regexp:
    case type.ReflectionKind.string:
    case type.ReflectionKind.symbol:
    case type.ReflectionKind.undefined:
    case type.ReflectionKind.unknown:
    case type.ReflectionKind.void:
    case type.ReflectionKind.enum:
    case type.ReflectionKind.enumMember:
    case type.ReflectionKind.promise:
      return kind;
    case type.ReflectionKind.literal: {
      const literal = type$1.literal;
      return `${kind}:${String(literal)}`;
    }
    // Collection types - contain multiple child types
    case type.ReflectionKind.union:
    case type.ReflectionKind.intersection:
    case type.ReflectionKind.objectLiteral:
    case type.ReflectionKind.tuple:
      return computeCollectionTypeId(type$1, stack);
    // Member types - contain a single child type
    case type.ReflectionKind.array:
    case type.ReflectionKind.property:
    case type.ReflectionKind.propertySignature:
    case type.ReflectionKind.tupleMember:
    case type.ReflectionKind.parameter:
    case type.ReflectionKind.rest:
    case type.ReflectionKind.indexSignature:
      return computeMemberTypeId(type$1, stack);
    // Function types
    case type.ReflectionKind.function: {
      const parent = type$1.parent;
      const name = type$1.name;
      if (name && parent && (parent.kind === type.ReflectionKind.objectLiteral || parent.kind === type.ReflectionKind.class)) {
        return `${type.ReflectionKind.function}${String(name)}`;
      }
      return type.ReflectionKind.function;
    }
    case type.ReflectionKind.method:
    case type.ReflectionKind.methodSignature:
    case type.ReflectionKind.callSignature:
      return computeFunctionTypeId(type$1);
    // Class types
    case type.ReflectionKind.class:
      return computeClassTypeId(type$1, stack);
    default:
      if (hasTypes(type$1)) return computeCollectionTypeId(type$1, stack);
      if (hasType(type$1)) return computeMemberTypeId(type$1, stack);
      return kind;
  }
}
function computeCollectionTypeId(type$1, stack) {
  const types = type$1.types;
  if (!Array.isArray(types)) return type$1.subKind || type$1.kind;
  stack.push(type$1);
  const childIds = [];
  for (const childType of types) childIds.push(_createTypeId(childType, stack));
  stack.pop();
  const isTuple = type$1.kind === type.ReflectionKind.tuple;
  const groupID = isTuple ? `[${childIds.join(",")}]` : `{${childIds.join(",")}}`;
  const kind = type$1.subKind || type$1.kind;
  return `${kind}${groupID}`;
}
function computeMemberTypeId(type$1, stack) {
  var _a, _b;
  const memberType = type$1.type;
  if (!memberType || typeof memberType.kind !== "number") return type$1.subKind || type$1.kind;
  const isRest = memberType.kind === type.ReflectionKind.rest;
  const isTupleParam = type$1.kind === type.ReflectionKind.tupleMember || type$1.kind === type.ReflectionKind.parameter;
  const hasDefault = isTupleParam && type$1.default !== void 0;
  const optional = type$1.optional || type$1.kind === type.ReflectionKind.indexSignature || isRest || hasDefault ? "?" : "";
  const propName = ((_a = type$1.name) == null ? void 0 : _a.toString()) || ((_b = type$1.index) == null ? void 0 : _b.kind) || type$1.subKind || type$1.kind;
  const kindID = `${propName}${optional}`;
  const circularId = checkCircularAndGetRefId(type$1, stack);
  if (circularId) return `${kindID}:${circularId}`;
  stack.push(type$1);
  const memberTypeId = _createTypeId(memberType, stack);
  stack.pop();
  return `${kindID}:${memberTypeId}`;
}
function computeFunctionTypeId(type$1) {
  const kind = type.ReflectionKind.function;
  const parent = type$1.parent;
  const name = type$1.name;
  let baseId;
  if (name && parent && (parent.kind === type.ReflectionKind.objectLiteral || parent.kind === type.ReflectionKind.class)) {
    baseId = `${kind}${String(name)}`;
  } else {
    baseId = String(kind);
  }
  const isOptional = !!type$1.optional;
  return isOptional ? `${baseId}:?` : baseId;
}
function computeClassTypeId(type2, stack) {
  if (type2.classType === Date) return ReflectionSubKind$1.date;
  if (type2.classType === Map) {
    const args = type2.arguments;
    if (!args || args.length !== 2) return ReflectionSubKind$1.map;
    stack.push(type2);
    const keyTypeId = _createTypeId(args[0], stack);
    const valueTypeId = _createTypeId(args[1], stack);
    stack.pop();
    return `${ReflectionSubKind$1.map}{${ReflectionSubKind$1.mapKey}:${keyTypeId},${ReflectionSubKind$1.mapValue}:${valueTypeId}}`;
  }
  if (type2.classType === Set) {
    const args = type2.arguments;
    if (!args || args.length !== 1) return ReflectionSubKind$1.set;
    stack.push(type2);
    const itemTypeId = _createTypeId(args[0], stack);
    stack.pop();
    return `${ReflectionSubKind$1.set}{${ReflectionSubKind$1.setItem}:${itemTypeId}}`;
  }
  const kind = type2.subKind || type2.kind;
  const types = type2.types;
  if (Array.isArray(types) && types.length > 0) {
    stack.push(type2);
    const childIds = types.map((t) => _createTypeId(t, stack));
    stack.pop();
    return `${kind}{${childIds.join(",")}}`;
  }
  return kind;
}
function computeParamsTypeId(type2, stack) {
  if (!hasParameters(type2)) return type2.subKind || type2.kind;
  const circularId = checkCircularAndGetRefId(type2, stack);
  if (circularId) return circularId;
  stack.push(type2);
  const childIds = [];
  for (const param of type2.parameters) childIds.push(_createTypeId(param, stack));
  stack.pop();
  const kind = type2.subKind || type2.kind;
  return `${kind}{${childIds.join(",")}}`;
}
function checkCircularAndGetRefId(type2, stack) {
  const inStackIndex = stack.findIndex((t) => {
    if (t === type2) return true;
    return t.id && type2.id && t.id === type2.id;
  });
  if (inStackIndex >= 0) {
    const name = type2.typeName || "";
    return "$" + type2.kind + `_${inStackIndex}` + name;
  }
  return void 0;
}
function computeDeepkitFormatID(deepkitType) {
  if (deepkitType._formatId !== void 0) return deepkitType._formatId || void 0;
  const annotations = type.typeAnnotation.getAnnotations(deepkitType);
  if (annotations.length === 0) {
    deepkitType._formatId = "";
    return void 0;
  }
  for (const annotation of annotations) {
    const formatAnnotation = annotation;
    if (!formatAnnotation.name) continue;
    const formatter = getFormatterFromCache(deepkitType.kind, formatAnnotation.name);
    if (!formatter) continue;
    const params = type.typeAnnotation.getOption(deepkitType, formatAnnotation.name);
    if (!params) continue;
    const formatId = `<${typeParamsToString(params, defaultIgnoreFormatProps)}>`;
    deepkitType._formatId = formatId;
    return formatId;
  }
  deepkitType._formatId = "";
  return void 0;
}
const mockRegExpsList = [
  /abc/,
  // Matches the string 'abc'
  /def/,
  // Matches the string 'def'
  /123/,
  // Matches the string '123'
  /xyz/,
  // Matches the string 'xyz'
  /[\w]+/,
  // Matches one or more word characters
  /\d{3}-\d{3}-\d{4}/,
  // Matches a phone number in the format XXX-XXX-XXXX
  /[A-Z]/,
  // Matches a single uppercase letter
  /[a-z]/,
  // Matches a single lowercase letter
  /\d+/,
  // Matches one or more digits
  /\s+/,
  // Matches one or more whitespace characters
  /^https:\/\/[\w.-]+\.[a-zA-Z]{2,}$/i,
  // Matches a URL starting with http:// or https://
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  // Matches an email address
  /\b\d{2}\/\d{2}\/\d{4}\b/,
  // Matches a date in the format MM/DD/YYYY
  /\b\d{1,2}:\d{2}\b/,
  // Matches a time in the format HH:MM
  /\b\d{1,2}:\d{2}:\d{2}\b/,
  // Matches a time in the format HH:MM:SS
  /\b\d{1,2}\/\d{1,2}\/\d{2}\b/,
  // Matches a date in the format M/D/YY
  /\b\d{1,2}\/\d{1,2}\/\d{4}\b/,
  // Matches a date in the format M/D/YYYY
  /\b\d{1,2}:\d{2}:\d{2} [AP]M\b/,
  // Matches a time in the format HH:MM:SS AM/PM
  /\b\d{1,2}:\d{2} [AP]M\b/,
  // Matches a time in the format HH:MM AM/PM
  /abc/gi,
  // Matches the string 'abc' with the global and case-insensitive flags
  /['"]/,
  // regexp that contains single and double quotes
  /\/(.*)\/(.*)?/,
  // regexp that contains a slash
  /\/\//,
  // regexp that contains two slashes
  /`/,
  // regexp that contains backticks
  /\/\\\//
  // regexp double scaped \\
];
const stringCharSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 .>?<~!@#$%^&*()_+-=[]{}|;:,";
const emailLocalPartSymbols = "._%-";
const anyValuesList = [
  {},
  { hello: "world" },
  [],
  [1, 3, "hello"],
  "hello",
  1234,
  BigInt(1),
  true,
  false,
  null,
  void 0,
  /* @__PURE__ */ Symbol("hello"),
  -124,
  0,
  124,
  0.1,
  -0.1,
  Infinity,
  NaN,
  /* @__PURE__ */ new Date(),
  /abc/,
  /* @__PURE__ */ new Map([
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4]
  ]),
  /* @__PURE__ */ new Set(["zero", 1, 2, 3, "four"])
];
const mockObjectList = [{}, { a: 1 }, { b: 2 }, { a: 1, b: "hello" }, { a: 1, b: 2, c: 3 }, { a: "hello", b: 2, c: "wold", d: 4 }];
const defaultMockOptions = {
  anyValuesList,
  promiseTimeOut: 1,
  regexpList: mockRegExpsList,
  maxRandomStringLength: 100,
  stringCharSet,
  maxRandomItemsLength: 60,
  /** probability to generate options types, number between 0 and 1 */
  optionalProbability: 0.5,
  objectList: mockObjectList,
  maxStackDepth: 50,
  maxMockRecursion: 10
};
CodeTypes.returnBlock;
const S = CodeTypes.statement;
const E = CodeTypes.expression;
class BaseRunType {
  constructor() {
    __publicField(this, "isCircular");
    __publicField(this, "src", null);
    // Atomic, Collection, Member, Function
    /**
     * This single functions controls whether or not the code for a type should be inlined into the parent function
     * or should create a separate jit function for it, add as a dependency and call it.
     * @returns
     */
    __publicField(this, "isJitInlined", () => {
      if (this.isCircular) return false;
      if (mionRoutes.getENV("DEBUG_JIT") === "INLINED") return true;
      if (this.src.kind === type.ReflectionKind.array) return false;
      if (this.src.typeName && this.getFamily() === "C") return false;
      return true;
    });
    __publicField(this, "getKindName", memorize(() => getReflectionName(this)));
    __publicField(this, "getTypeName", () => this.src.typeName || this.getKindName());
    __publicField(this, "stringify", memorize(() => type.stringifyType(this.src)));
    __publicField(this, "getParent", () => {
      var _a;
      return (_a = this.src.parent) == null ? void 0 : _a._rt;
    });
    // ########## Create Jit Functions ##########
    __publicField(this, "createJitFunction", (jitFn, opts = {}) => {
      return this.createJitCompiledFunction(jitFn.id, void 0, opts).fn;
    });
  }
  skipJit(comp) {
    return false;
  }
  /** Returns the format portion of the type ID (cached in src._formatId), or undefined if no format. */
  getFormatTypeID() {
    const formatId = this.src._formatId;
    return formatId || void 0;
  }
  /** Returns the type ID which is cached in src._typeId by getDeepkitTypeId(). Format ID is already included. */
  getTypeID() {
    if (this.src._typeId === void 0) {
      throw new Error(`Missing cached type ID for ${this.getTypeName()}. Ensure getDeepkitTypeId() has been called.`);
    }
    return this.src._typeId;
  }
  getJitHash(opts) {
    const optsCopy = { ...opts };
    if (optsCopy.mock) delete optsCopy.mock;
    return createUniqueHash(this.getTypeID().toString() + JSON.stringify(optsCopy));
  }
  checkIsCircularAndGetRefId(stack = []) {
    const inStackIndex = stack.findIndex((rt) => {
      if (rt === this) return true;
      return rt.src.id && this.src.id && rt.src.id === this.src.id;
    });
    stack.findIndex((rt) => rt.src.id && this.src.id && rt.src.id === this.src.id);
    const isInStack = inStackIndex >= 0;
    if (isInStack) {
      this.isCircular = true;
      const name = this.src.typeName || "";
      const refId = "$" + this.src.kind + `_${inStackIndex}` + name;
      return refId;
    }
    return void 0;
  }
  /**
   * Method that should be called Immediately after the RunType gets created to link the SrcType and RunType.
   * This is more flexible than passing params to the constructor helps to avoid circular dependencies, etc.
   * */
  onCreated(src) {
    this.src = src;
    src._rt = this;
    initFormatAnnotations(this);
    createTypeId(src);
  }
  /**
   * Some elements might need a standalone name variable that ignores the vλl value of the parents.
   * returns a variable that is being compiled, ignores the parents variable names */
  getCustomVλl(comp) {
    return void 0;
  }
  /**
   * Some elements might need a custom static path to be able to reference the source of an error.
   * ie: when validating a Map we need to differentiate if the value that failed is the  key or the value of a map's entry.
   */
  getStaticPathLiteral(comp) {
    return void 0;
  }
  // ########## Mock ##########
  async mock(opts) {
    await registerJitFunctionCompiler(JitFunctions$1.mock);
    return this.mockType(opts);
  }
  /** synchronous version of mock, throws an error if the mock function has not been loaded */
  mockType(opts = {}) {
    const mockFn = getJitFunctionCompiler(JitFunctions$1.mock);
    if (!mockFn)
      throw new Error(
        `Function ${JitFunctions$1.mock.name} has not been loaded. make sure you have called loadJitCompilerFunction(JitFunctions.mock) before calling mockType.`
      );
    const fnID2 = JitFunctions$1.mock.id;
    const mockingOpts = { ...opts, mock: { ...defaultMockOptions, ...opts.mock || {} } };
    const hash = getJITFnHash(fnID2, this, mockingOpts);
    const comp = new MockJitCompiler(this, mockingOpts, void 0, hash, this.getTypeID());
    return mockFn(this, comp);
  }
  createJitCompiledFunction(fnID2, parentCop, opts = {}) {
    const fnHash = getJITFnHash(fnID2, this, opts);
    const jitCompiled = mionRoutes.getJitUtils().getJIT(fnHash);
    if (jitCompiled) {
      if (mionRoutes.getENV("DEBUG_JIT") === "VERBOSE")
        console.log(`\x1B[32m Using cached function: ${jitCompiled.jitFnHash} \x1B[0m`);
      return jitCompiled;
    }
    const newJitCompiler = createJitCompiler(
      this,
      fnID2,
      parentCop,
      void 0,
      void 0,
      opts
    );
    try {
      const codeType = this.getFamily() === "A" ? E : S;
      newJitCompiler.compile(this, codeType, fnID2);
      newJitCompiler.createJitFunction();
    } catch (e) {
      newJitCompiler.removeFromJitCache();
      if (typeof (e == null ? void 0 : e.message) === "string" && !newJitCompiler.hasStackTrace(e.message))
        e.message += newJitCompiler.getStackTrace();
      throw e;
    }
    return newJitCompiler;
  }
}
class AtomicRunType extends BaseRunType {
  getFamily() {
    return "A";
  }
  emitPrepareForJson(comp) {
    return { code: void 0, type: S };
  }
  emitRestoreFromJson(comp) {
    return { code: void 0, type: S };
  }
  emitHasUnknownKeys(comp) {
    return { code: void 0, type: E };
  }
  emitUnknownKeyErrors(comp) {
    return { code: void 0, type: S };
  }
  emitStripUnknownKeys(comp) {
    return { code: void 0, type: S };
  }
  emitUnknownKeysToUndefined(comp) {
    return { code: void 0, type: S };
  }
}
class CollectionRunType extends BaseRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildRunTypes", () => {
      const childTypes = this.src.types || [];
      return childTypes.map((t) => t._rt);
    });
  }
  getFamily() {
    return "C";
  }
  getJitChildren(comp) {
    let skipIndex = false;
    return this.getChildRunTypes().filter((c) => {
      if (c.skipJit(comp)) return false;
      const isIndex = c.src.kind === type.ReflectionKind.indexSignature;
      if (isIndex && skipIndex) return false;
      if (isIndex) skipIndex = true;
      return true;
    });
  }
  areAllChildrenOptional(children) {
    return children.every(
      (prop) => {
        var _a;
        return (prop == null ? void 0 : prop.isOptional()) || ((_a = prop.src) == null ? void 0 : _a.optional) || prop.src.kind === type.ReflectionKind.indexSignature;
      }
    );
  }
  emitHasUnknownKeys(comp) {
    const codes = this.getJitChildren(comp).map((c) => comp.compileHasUnknownKeys(c, E).code).filter((code) => !!code);
    return { code: codes.join(" || "), type: E };
  }
  emitUnknownKeyErrors(comp) {
    const codes = this.getJitChildren(comp).map((c) => comp.compileUnknownKeyErrors(c, S).code).filter((code) => !!code);
    return { code: codes.join(";"), type: S };
  }
  emitStripUnknownKeys(comp) {
    const codes = this.getJitChildren(comp).map((c) => comp.compileStripUnknownKeys(c, S).code).filter((code) => !!code);
    return { code: codes.join(";"), type: S };
  }
  emitUnknownKeysToUndefined(comp) {
    const codes = this.getJitChildren(comp).map((c) => comp.compileUnknownKeysToUndefined(c, S).code).filter((code) => !!code);
    return { code: codes.join(";"), type: S };
  }
}
class MemberRunType extends BaseRunType {
  constructor() {
    super(...arguments);
    /** used to compile json stringify */
    __publicField(this, "skipCommas");
    /** used to compile json stringify */
    __publicField(this, "tempChildVλl");
  }
  getFamily() {
    return "M";
  }
  getMemberType() {
    const memberType = this.src.type;
    return memberType._rt;
  }
  getChildIndex(comp) {
    var _a, _b;
    const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    if (start) return getPropIndex(this.src) - start;
    return getPropIndex(this.src);
  }
  getJitChild(comp) {
    const member = this.getMemberType();
    if (member.skipJit(comp)) return void 0;
    return member;
  }
  emitHasUnknownKeys(comp) {
    const child = this.getJitChild(comp);
    const codeResult = comp.compileHasUnknownKeys(child, E);
    if (!(codeResult == null ? void 0 : codeResult.code)) return { code: void 0, type: E };
    const childName = comp.getChildVλl();
    const finalCode = this.isOptional() ? `(${childName} !== undefined && ${codeResult.code})` : codeResult.code;
    return { code: finalCode, type: codeResult.type };
  }
  emitUnknownKeyErrors(comp) {
    const child = this.getJitChild(comp);
    const codeResult = comp.compileUnknownKeyErrors(child, S);
    if (!(codeResult == null ? void 0 : codeResult.code)) return { code: void 0, type: S };
    const finalCode = this.isOptional() ? `if (${comp.getChildVλl()} !== undefined) {${codeResult.code}}` : codeResult.code;
    return { code: finalCode, type: codeResult.type };
  }
  emitStripUnknownKeys(comp) {
    const child = this.getJitChild(comp);
    const codeResult = comp.compileStripUnknownKeys(child, S);
    if (!(codeResult == null ? void 0 : codeResult.code)) return { code: void 0, type: S };
    const finalCode = this.isOptional() ? `if (${comp.getChildVλl()} !== undefined) {${codeResult.code}}` : codeResult.code;
    return { code: finalCode, type: codeResult.type };
  }
  emitUnknownKeysToUndefined(comp) {
    const child = this.getJitChild(comp);
    const codeResult = comp.compileUnknownKeysToUndefined(child, S);
    if (!(codeResult == null ? void 0 : codeResult.code)) return { code: void 0, type: S };
    const finalCode = this.isOptional() ? `if (${comp.getChildVλl()} !== undefined) {${codeResult.code}}` : codeResult.code;
    return { code: finalCode, type: codeResult.type };
  }
  visitToBinary(comp) {
    const child = this.getJitChild(comp);
    const code = comp.compileToBinary(child, S);
    if (!(code == null ? void 0 : code.code)) return { code: void 0, type: S };
    return this.isOptional() ? { code: `(${comp.getChildVλl()} !== undefined ? ${code.code} : utl.writeBinaryNull())`, type: S } : code;
  }
  visitFromBinary(comp) {
    const child = this.getJitChild(comp);
    const code = comp.compileFromBinary(child, S);
    if (!(code == null ? void 0 : code.code)) return { code: void 0, type: S };
    return code;
  }
}
class StringRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `typeof ${comp.vλl} === 'string'`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (typeof ${comp.vλl} !== 'string') ${comp.callJitErr(this)}`, type: "S" };
  }
}
__publicField(StringRunType, "__type", ["TypeString", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "StringRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(5"w!6"w)`]);
class DateRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `(${comp.vλl} instanceof Date && !isNaN(${comp.vλl}.getTime()))`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (!(${comp.vλl} instanceof Date && !isNaN(${comp.vλl}.getTime()))) ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson() {
    return { code: void 0, type: "S" };
  }
  emitRestoreFromJson(comp) {
    return { code: `new Date(${comp.vλl})`, type: "E" };
  }
}
__publicField(DateRunType, "__type", ["TypeClass", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "DateRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w%0)P"w#2$"w%0*5"w!6"w+`]);
class NumberRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `Number.isFinite(${comp.vλl})`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if(!(Number.isFinite(${comp.vλl}))) ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson() {
    return { code: void 0, type: "S" };
  }
  emitRestoreFromJson() {
    return { code: void 0, type: "S" };
  }
}
__publicField(NumberRunType, "__type", ["TypeNumber", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "NumberRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w%0)P"w%0*5"w!6"w+`]);
class BooleanRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `typeof ${comp.vλl} === 'boolean'`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (typeof ${comp.vλl} !== 'boolean') ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson() {
    return { code: void 0, type: "S" };
  }
  emitRestoreFromJson() {
    return { code: void 0, type: "S" };
  }
}
__publicField(BooleanRunType, "__type", ["TypeBoolean", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "BooleanRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w%0)P"w%0*5"w!6"w+`]);
class NullRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `${comp.vλl} === null`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (${comp.vλl} !== null) ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson() {
    return { code: void 0, type: "S" };
  }
  emitRestoreFromJson() {
    return { code: void 0, type: "S" };
  }
}
__publicField(NullRunType, "__type", ["TypeNull", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "NullRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w%0)P"w%0*5"w!6"w+`]);
class BigIntRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `typeof ${comp.vλl} === 'bigint'`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (typeof ${comp.vλl} !== 'bigint') ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    return { code: `${comp.vλl}.toString()`, type: "E" };
  }
  emitRestoreFromJson(comp) {
    return { code: `BigInt(${comp.vλl})`, type: "E" };
  }
}
__publicField(BigIntRunType, "__type", ["TypeBigInt", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "BigIntRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w#2$"w%0)P"w#2$"w%0*5"w!6"w+`]);
class AnyRunType extends AtomicRunType {
  emitIsType(comp) {
    const isRoot = comp.getNestLevel(this) === 0;
    if (isRoot)
      return { code: void 0, type: "E" };
    return { code: "true", type: "E" };
  }
  emitTypeErrors() {
    return { code: void 0, type: "S" };
  }
}
__publicField(AnyRunType, "__type", ["TypeAny", "TypeUnknown", () => AtomicRunType, () => JitFnCompiler, "comp", "JitCode", "emitIsType", "emitTypeErrors", "AnyRunType", `PP"w!"w"J7#PP7$2%"w&0'P"w&0(5P"w!"w"J6"w)`]);
class UndefinedRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `typeof ${comp.vλl} === 'undefined'`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (typeof ${comp.vλl} !== 'undefined') ${comp.callJitErr(this)}`, type: "S" };
  }
  emitRestoreFromJson() {
    return { code: `undefined`, type: "E" };
  }
}
__publicField(UndefinedRunType, "__type", ["TypeUndefined", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitRestoreFromJson", "UndefinedRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w%0)5"w!6"w*`]);
class UnknownRunType extends AnyRunType {
}
__publicField(UnknownRunType, "__type", [() => AnyRunType, "UnknownRunType", 'P7!5w"']);
class VoidRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `${comp.vλl} === undefined`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (${comp.vλl} !== undefined) ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    return { code: `${comp.vλl} = undefined`, type: "E" };
  }
  emitRestoreFromJson(comp) {
    return { code: `${comp.vλl} = undefined`, type: "E" };
  }
}
__publicField(VoidRunType, "__type", ["TypeVoid", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "VoidRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w#2$"w%0)P"w#2$"w%0*5"w!6"w+`]);
class ArrayRunType extends MemberRunType {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startIndex(comp) {
    return 0;
  }
  getChildVarName(comp) {
    return comp.getLocalVarName("i", this);
  }
  getChildLiteral(comp) {
    return this.getChildVarName(comp);
  }
  useArrayAccessor() {
    return true;
  }
  isOptional() {
    return false;
  }
  // #### jit code ####
  emitIsType(comp) {
    this.checkNonSkipTypes(comp);
    const resultVal = comp.getLocalVarName("res", this);
    const index = this.getChildVarName(comp);
    const child = this.getJitChild(comp);
    const childJit = comp.compileIsType(child, "E");
    if (!(childJit == null ? void 0 : childJit.code) && comp.opts.noIsArrayCheck)
      return { code: void 0, type: "E" };
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: `Array.isArray(${comp.vλl})`, type: "E" };
    const isArrayCheckCode = comp.opts.noIsArrayCheck ? "" : `if (!Array.isArray(${comp.vλl})) return false;`;
    return {
      code: `
            ${isArrayCheckCode}
            for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {
                const ${resultVal} = ${childJit.code};
                if (!(${resultVal})) return false;
            }
            return true;
        `,
      type: "RB"
    };
  }
  emitTypeErrors(comp) {
    this.checkNonSkipTypes(comp);
    const index = this.getChildVarName(comp);
    const child = this.getJitChild(comp);
    const childJit = comp.compileTypeErrors(child, "S");
    if (!(childJit == null ? void 0 : childJit.code) && comp.opts.noIsArrayCheck)
      return { code: void 0, type: "E" };
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: `if (!Array.isArray(${comp.vλl})) ${comp.callJitErr(this)};`, type: "S" };
    const itemsCode = `for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {${childJit.code}}`;
    if (comp.opts.noIsArrayCheck)
      return { code: itemsCode, type: "S" };
    return {
      code: `if (!Array.isArray(${comp.vλl})) {${comp.callJitErr(this)}} else {${itemsCode}}`,
      type: "S"
    };
  }
  emitPrepareForJson(comp) {
    this.checkNonSkipTypes(comp);
    const index = this.getChildVarName(comp);
    const child = this.getJitChild(comp);
    const childJit = comp.compilePrepareForJson(child, "S");
    if (!(childJit == null ? void 0 : childJit.code) || !child)
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return {
      code: `for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {${code}}`,
      type: "S"
    };
  }
  emitRestoreFromJson(comp) {
    this.checkNonSkipTypes(comp);
    const index = this.getChildVarName(comp);
    const child = this.getJitChild(comp);
    const childJit = comp.compileRestoreFromJson(child, "S");
    if (!(childJit == null ? void 0 : childJit.code) || !child)
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return {
      code: `for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {${code}}`,
      type: "S"
    };
  }
  emitHasUnknownKeys(comp) {
    this.checkNonSkipTypes(comp);
    if (this.getMemberType().getFamily() === "A")
      return { code: void 0, type: "E" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileHasUnknownKeys(child, "E");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "E" };
    const resultVal = comp.getLocalVarName("res", this);
    const index = this.getChildVarName(comp);
    return {
      code: `
            if (!Array.isArray(${comp.vλl})) return false;
            for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {
                const ${resultVal} = ${childJit.code};
                if (${resultVal}) return true;
            }
            return false;
        `,
      type: "RB"
    };
  }
  emitUnknownKeyErrors(comp) {
    this.checkNonSkipTypes(comp);
    if (this.getMemberType().getFamily() === "A")
      return { code: "", type: "E" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileUnknownKeyErrors(child, "S");
    return this.traverseCode(comp, childJit);
  }
  emitStripUnknownKeys(comp) {
    this.checkNonSkipTypes(comp);
    if (this.getMemberType().getFamily() === "A")
      return { code: "", type: "E" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileStripUnknownKeys(child, "S");
    return this.traverseCode(comp, childJit);
  }
  emitUnknownKeysToUndefined(comp) {
    this.checkNonSkipTypes(comp);
    if (this.getMemberType().getFamily() === "A")
      return { code: "", type: "E" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileUnknownKeysToUndefined(child, "S");
    return this.traverseCode(comp, childJit);
  }
  traverseCode(comp, childJit) {
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const index = this.getChildVarName(comp);
    return {
      code: `for (let ${index} = ${this.startIndex(comp)}; ${index} < ${comp.vλl}.length; ${index}++) {${childJit.code}}`,
      type: "S"
    };
  }
  checkNonSkipTypes(comp) {
    const child = this.getMemberType();
    if (child.skipJit(comp))
      throw new Error(`Arrays can not have non serializable types, ie: Symbol[], Function[], etc.`);
  }
}
__publicField(ArrayRunType, "__type", ["TypeArray", "T", () => MemberRunType, "JitFnCompiler", "comp", "startIndex", "getChildVarName", "getChildLiteral", true, "useArrayAccessor", "isOptional", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "emitHasUnknownKeys", "emitUnknownKeyErrors", "emitStripUnknownKeys", "emitUnknownKeysToUndefined", "childJit", "code", "S", "type", "traverseCode", "checkNonSkipTypes", "ArrayRunType", `"w!c"Pe"!7#P"w$2%'0&P"w$2%&0'P"w$2%&0(P.)0*P)0+P"w$2%"w,0-P"w.2%"w,0/P"w$2%"w,00P"w$2%"w,01P"w$2%"w,02P"w.2%"w,03P"w$2%"w,04P"w$2%"w,05P"w$2%P"w,-J26PP&-J47.849M0:P"w$2%"0;5e!!6"w<`]);
class RegexpRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `(${comp.vλl} instanceof RegExp)`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (!(${comp.vλl} instanceof RegExp)) ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    return { code: `${comp.vλl}.toString()`, type: "E" };
  }
  emitRestoreFromJson(comp) {
    return {
      code: `(function(){const parts = ${comp.vλl}.match(/\\/(.*)\\/(.*)?/) ;return new RegExp(parts[1], parts[2] || '')})()`,
      type: "E"
    };
  }
}
__publicField(RegexpRunType, "__type", ["TypeRegexp", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "RegexpRunType", `P"w!7"P"w#2$"w%0&P"w'2$"w%0(P"w#2$"w%0)P"w#2$"w%0*5"w!6"w+`]);
class SymbolRunType extends AtomicRunType {
  skipJit(comp) {
    if (!comp)
      return true;
    return comp.fnID !== JitFunctions$1.toJSCode.id;
  }
  emitIsType(comp) {
    return { code: `typeof ${comp.vλl} === 'symbol'`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (typeof ${comp.vλl} !== 'symbol') ${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    return { code: `'Symbol:' + (${comp.vλl}.description || '')`, type: "E" };
  }
  emitRestoreFromJson(comp) {
    return { code: `Symbol(${comp.vλl}.substring(7))`, type: "E" };
  }
}
__publicField(SymbolRunType, "__type", ["TypeSymbol", () => AtomicRunType, "JitFnCompiler", "comp", "skipJit", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "SymbolRunType", `P"w!7"P"w#2$)0%P"w#2$"w&0'P"w(2$"w&0)P"w#2$"w&0*P"w#2$"w&0+5"w!6"w,`]);
const stringRt = new StringRunType();
const numberRt = new NumberRunType();
const booleanRt = new BooleanRunType();
const symbolRt = new SymbolRunType();
const regexpRt = new RegexpRunType();
const bigIntRt = new BigIntRunType();
const __ΩAnyLiteralRunType = [() => StringRunType, () => NumberRunType, () => BooleanRunType, () => SymbolRunType, () => RegexpRunType, () => BigIntRunType, "AnyLiteralRunType", `PP7!P7"P7#P7$P7%P7&Jw'y`];
class LiteralRunType extends AtomicRunType {
  getRunTypeForLiteral(comp) {
    const noLiterals = comp.opts.noLiterals;
    const lit = this.src.literal;
    let rt;
    if (lit instanceof RegExp) {
      rt = regexpRt;
      rt.src = this.src;
      if (noLiterals)
        this.src.kind = type.ReflectionKind.regexp;
      return rt;
    }
    switch (typeof lit) {
      case "string":
        rt = stringRt;
        if (noLiterals)
          this.src.kind = type.ReflectionKind.string;
        break;
      case "number":
        rt = numberRt;
        if (noLiterals)
          this.src.kind = type.ReflectionKind.number;
        break;
      case "boolean":
        rt = booleanRt;
        if (noLiterals)
          this.src.kind = type.ReflectionKind.boolean;
        break;
      case "bigint":
        rt = bigIntRt;
        if (noLiterals)
          this.src.kind = type.ReflectionKind.bigint;
        break;
      case "symbol":
        rt = symbolRt;
        if (noLiterals)
          this.src.kind = type.ReflectionKind.symbol;
        break;
      default:
        throw new Error(`Unsupported literal type ${typeof lit}`);
    }
    rt.src = this.src;
    return rt;
  }
  emitIsType(comp) {
    if (comp.opts.noLiterals)
      return this.getRunTypeForLiteral(comp).emitIsType(comp);
    return { code: compileIsLiteral(comp, this.src.literal), type: "E" };
  }
  emitTypeErrors(comp) {
    if (comp.opts.noLiterals)
      return this.getRunTypeForLiteral(comp).emitTypeErrors(comp);
    return { code: compileTypeErrorsLiteral(comp, this.src.literal, this.getKindName()), type: "S" };
  }
  emitPrepareForJson(comp) {
    return this.getRunTypeForLiteral(comp).emitPrepareForJson(comp);
  }
  emitRestoreFromJson(comp) {
    return this.getRunTypeForLiteral(comp).emitRestoreFromJson(comp);
  }
  getLiteralValue() {
    return this.src.literal;
  }
}
__publicField(LiteralRunType, "__type", ["TypeLiteral", () => AtomicRunType, "JitFnCompiler", "comp", () => __ΩAnyLiteralRunType, "getRunTypeForLiteral", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "getLiteralValue", "LiteralRunType", `P"w!7"P"w#2$n%0&P"w#2$"w'0(P"w)2$"w'0*P"w#2$"w'0+P"w#2$"w'0,P"0-5"w!6"w.`]);
function compileIsLiteral(comp, lit) {
  const literalType = typeof lit;
  if (lit instanceof RegExp)
    return `${comp.vλl} instanceof RegExp && String(${comp.vλl}) === String(${lit})`;
  switch (literalType) {
    case "string":
      return `${comp.vλl} === ${toLiteral(lit)}`;
    case "number":
      return `${comp.vλl} === ${toLiteral(lit)}`;
    case "boolean":
      return `${comp.vλl} === ${toLiteral(lit)}`;
    case "bigint":
      return `${comp.vλl} === ${toLiteral(lit)}`;
    case "symbol":
      return `typeof ${comp.vλl} === 'symbol' && ${comp.vλl}.description === ${toLiteral(lit.description)}`;
    default:
      throw new Error(`Unsupported literal type ${literalType}`);
  }
}
compileIsLiteral.__type = ["JitFnCompiler", "comp", "TypeLiteral", "literal", "lit", "compileIsLiteral", 'P"w!2""w#.$f2%&/&'];
function compileTypeErrorsLiteral(comp, lit, name) {
  const literalType = typeof lit;
  if (lit instanceof RegExp)
    return `if (!(${comp.vλl} instanceof RegExp) || String(${comp.vλl}) !== String(${lit})) ${comp.callJitErr(name)}`;
  switch (literalType) {
    case "string":
      return `if (${comp.vλl} !== ${toLiteral(lit)}) ${comp.callJitErr(name)}`;
    case "number":
      return `if (${comp.vλl} !== ${toLiteral(lit)}) ${comp.callJitErr(name)}`;
    case "boolean":
      return `if (${comp.vλl} !== ${toLiteral(lit)}) ${comp.callJitErr(name)}`;
    case "bigint":
      return `if (${comp.vλl} !== ${toLiteral(lit)}) ${comp.callJitErr(name)}`;
    case "symbol":
      return `if (typeof ${comp.vλl} !== 'symbol' || ${comp.vλl}.description !== ${toLiteral(lit.description)}) {${comp.callJitErr(name)}}`;
    default:
      throw new Error(`Unsupported literal type ${literalType}`);
  }
}
compileTypeErrorsLiteral.__type = ["JitErrorsFnCompiler", "comp", "TypeLiteral", "literal", "lit", () => __ΩAnyKindName, "name", "compileTypeErrorsLiteral", `P"w!2""w#.$f2%n&2'&/(`];
class NeverRunType extends AtomicRunType {
  emitIsType() {
    return { code: "false", type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `${comp.callJitErr(this)}`, type: "S" };
  }
  emitPrepareForJson() {
    throw new Error("Never type cannot be encoded to JSON.");
  }
  emitRestoreFromJson() {
    throw new Error("Never type cannot be decoded from JSON.");
  }
}
__publicField(NeverRunType, "__type", ["TypeNever", () => AtomicRunType, () => __ΩJitCode, "emitIsType", () => JitErrorsFnCompiler, "comp", () => __ΩJitCode, "emitTypeErrors", () => __ΩJitCode, "emitPrepareForJson", () => __ΩJitCode, "emitRestoreFromJson", "NeverRunType", `P"w!7"Pn#0$PP7%2&n'0(Pn)0*Pn+0,5"w!6"w-`]);
function __assignType$f(fn, args) {
  fn.__type = args;
  return fn;
}
class EnumRunType extends AtomicRunType {
  emitIsType(comp) {
    const items = this.src.values.map(__assignType$f((v) => `${comp.vλl} === ${toLiteral(v)}`, ["v", "", 'P"2!"/"']));
    return { code: `(${items.join(" || ")})`, type: "E" };
  }
  emitTypeErrors(comp) {
    const items = this.src.values.map(__assignType$f((v) => `${comp.vλl} === ${toLiteral(v)}`, ["v", "", 'P"2!"/"']));
    return { code: `if (!(${items.join(" || ")})) ${comp.callJitErr(this)}`, type: "S" };
  }
}
__publicField(EnumRunType, "__type", [() => type.__ΩTypeEnum, () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", () => type.__ΩTypeEnum, "EnumRunType", `Pn!7"P"w#2$"w%0&P"w'2$"w%0(5n)6"w*`]);
class EnumMemberRunType extends AtomicRunType {
  skipJit() {
    return true;
  }
  emitIsType() {
    throw new Error("Enum member operations are not supported");
  }
  emitTypeErrors() {
    throw new Error("Enum member operations are not supported");
  }
  emitPrepareForJson() {
    throw new Error("Enum member operations are not supported");
  }
  emitRestoreFromJson() {
    throw new Error("Enum member operations are not supported");
  }
}
__publicField(EnumMemberRunType, "__type", ["TypeEnum", () => AtomicRunType, "skipJit", () => __ΩJitCode, "emitIsType", () => __ΩJitCode, "emitTypeErrors", () => __ΩJitCode, "emitPrepareForJson", () => __ΩJitCode, "emitRestoreFromJson", "EnumMemberRunType", `P"w!7"P"0#Pn$0%Pn&0'Pn(0)Pn*0+5"w!6"w,`]);
function __assignType$e(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩFlattenedProp = ["CollectionRunType", "unionItem", "unionIndex", "PropertyRunType", "prop", "typeID", "compiledName", "FlattenedProp", `P"w!4"P&'J4#"w$4%P&'J4&&4'Mw(y`];
const __ΩSplitUnionResult = ["BaseRunType", "simpleItems", "CollectionRunType", "objectTypes", "anyItem", "SplitUnionResult", 'P"w!F4""w#F4$"w!4%8Mw&y'];
function splitUnionItems(comp, urt, unionChildren) {
  const unionItems = unionChildren || urt.getJitChildren(comp);
  const objectTypes = [];
  const simpleItems = [];
  let anyItem;
  unionItems.forEach(__assignType$e((unionItem) => {
    if (isAnyRunType(unionItem) || isUnknownRunType(unionItem)) {
      if (!anyItem)
        anyItem = unionItem;
      return;
    }
    const isObj = urt.isTypeWithProperties(unionItem);
    if (!isObj)
      return simpleItems.push(unionItem);
    return objectTypes.push(unionItem);
  }, ["unionItem", "", 'P"2!"/"']));
  const sortedObjectTypes = sortUnreachableTypes(comp, objectTypes);
  return { simpleItems, objectTypes: sortedObjectTypes, anyItem };
}
splitUnionItems.__type = ["JitFnCompiler", "comp", "UnionRunType", "urt", "BaseRunType", "unionChildren", () => __ΩSplitUnionResult, "splitUnionItems", `P"w!2""w#2$"w%F2&8n'/(`];
function sortUnreachableTypes(comp, objectTypes) {
  if (objectTypes.length <= 1)
    return objectTypes;
  const typePropsMap = (Map.Ω = [["CollectionRunType", '"w!'], ["P&'JD"]], /* @__PURE__ */ new Map());
  objectTypes.forEach(__assignType$e((objType) => {
    const props = objType.getJitChildren(comp);
    const propTypeIDs = (Set.Ω = [["P&'J"]], /* @__PURE__ */ new Set());
    props.forEach(__assignType$e((prop) => propTypeIDs.add(prop.getTypeID()), ["prop", "", 'P"2!"/"']));
    typePropsMap.set(objType, propTypeIDs);
  }, ["objType", "", 'P"2!"/"']));
  const isSubsetOf = __assignType$e((smaller, larger) => {
    const smallerProps = typePropsMap.get(smaller);
    const largerProps = typePropsMap.get(larger);
    if (smallerProps.size >= largerProps.size)
      return false;
    for (const typeID of smallerProps) {
      if (!largerProps.has(typeID))
        return false;
    }
    return true;
  }, ["CollectionRunType", "smaller", "larger", "", 'P"w!2""w!2#)/$']);
  const processed = (Set.Ω = [["CollectionRunType", '"w!']], /* @__PURE__ */ new Set());
  const result = [];
  for (let i = 0; i < objectTypes.length; i++) {
    const current = objectTypes[i];
    if (processed.has(current))
      continue;
    const relatedGroup = [current];
    processed.add(current);
    for (let j = 0; j < objectTypes.length; j++) {
      if (i === j)
        continue;
      const other = objectTypes[j];
      if (processed.has(other))
        continue;
      if (isSubsetOf(current, other) || isSubsetOf(other, current)) {
        relatedGroup.push(other);
        processed.add(other);
      }
    }
    if (relatedGroup.length > 1) {
      relatedGroup.sort(__assignType$e((a, b) => {
        const aSize = typePropsMap.get(a).size;
        const bSize = typePropsMap.get(b).size;
        return bSize - aSize;
      }, ["a", "b", "", 'P"2!"2""/#']));
    }
    result.push(...relatedGroup);
  }
  return result;
}
sortUnreachableTypes.__type = ["JitFnCompiler", "comp", "CollectionRunType", "objectTypes", "sortUnreachableTypes", 'P"w!2""w#F2$"w#F/%'];
function markDiscriminators(comp, urt, unionItems) {
  if (urt.hasDiscriminators !== void 0 && urt.hasObjectTypes !== void 0)
    return;
  const objectTypes = unionItems.filter(__assignType$e((item) => urt.isTypeWithProperties(item), ["item", "", 'P"2!"/"']));
  const namedDiscriminators = getDiscriminatorProperties(comp, urt, objectTypes, initGetCompiledName());
  const uniqueDiscriminators = getUniqueDiscriminatorProperties(comp, urt, objectTypes, initGetCompiledName());
  urt.hasObjectTypes = !!objectTypes.length;
  urt.hasDiscriminators = !!namedDiscriminators.length || !!uniqueDiscriminators.length;
}
markDiscriminators.__type = ["JitFnCompiler", "comp", "UnionRunType", "urt", "BaseRunType", "unionItems", "markDiscriminators", `P"w!2""w#2$"w%F2&"/'`];
const __ΩPropUnionItemPair = ["PropertyRunType", "prop", "CollectionRunType", "unionItem", "PropUnionItemPair", 'P"w!4""w#4$Mw%y'];
function getDiscriminatorProperties(comp, urt, unionTypes, getCompiledName) {
  if (!unionTypes.length)
    return [];
  const propByName = (Map.Ω = [["P&'J"], [() => __ΩPropUnionItemPair, "n!F"]], /* @__PURE__ */ new Map());
  unionTypes.forEach(__assignType$e((unionItem) => {
    const props = unionItem.getJitChildren(comp);
    props.forEach(__assignType$e((prop) => {
      const name = prop.getChildVarName(comp);
      const existing = propByName.get(name) || [];
      propByName.set(name, [...existing, { prop, unionItem }]);
    }, ["prop", "", 'P"2!"/"']));
  }, ["unionItem", "", 'P"2!"/"']));
  const propsOnAllTypes = Array.from(propByName.entries()).filter(__assignType$e(([, props]) => props.length === unionTypes.length, ["param0", "", 'P"2!"/"'])).map(__assignType$e(([key, props]) => ({
    name: key,
    props,
    complexity: props.reduce(__assignType$e((acc, item) => acc + getTotalComplexity(comp, item.prop), ["acc", "item", "", 'P"2!"2""/#']), 0),
    isUniqueType: props.every(__assignType$e((item) => {
      const child = item;
      const typeID = child.prop.getTypeID();
      const isDiff = props.every(__assignType$e((otherItem) => child.prop === otherItem.prop || otherItem.prop.getTypeID() !== typeID, ["otherItem", "", 'P"2!"/"']));
      return isDiff;
    }, ["item", "", 'P"2!"/"']))
  }), ["param0", "", 'P"2!"/"'])).filter(__assignType$e((item) => item.isUniqueType, ["item", "", 'P"2!"/"']));
  const lessComplexProps = propsOnAllTypes.toSorted(__assignType$e((a, b) => a.complexity - b.complexity, ["a", "b", "", 'P"2!"2""/#']));
  const lessComplex = lessComplexProps[0];
  if (!lessComplex)
    return [];
  return lessComplex.props.map(__assignType$e((item) => {
    item.prop.isUnionDiscriminator = true;
    const unionIndex = urt.getUnionItemIndex(comp, item.unionItem);
    const typeID = item.prop.getTypeID();
    return {
      unionItem: item.unionItem,
      unionIndex,
      prop: item.prop,
      typeID,
      compiledName: getCompiledName(comp, urt, typeID)
    };
  }, ["item", "", 'P"2!"/"']));
}
getDiscriminatorProperties.__type = ["JitFnCompiler", "comp", "UnionRunType", "urt", "CollectionRunType", "unionTypes", "propTypeID", "", "getCompiledName", () => __ΩFlattenedProp, "getDiscriminatorProperties", `P"w!2""w#2$"w%F2&P"w!2""w#2$P&'J2'&/(2)n*F/+`];
function getUniqueDiscriminatorProperties(comp, urt, unionTypes, getCompiledName) {
  if (!unionTypes.length)
    return [];
  const uniquePropByUnionItem = (Map.Ω = [["CollectionRunType", '"w!'], [() => __ΩPropUnionItemPair, "n!"]], /* @__PURE__ */ new Map());
  unionTypes.forEach(__assignType$e((unionItem) => {
    const props = unionItem.getJitChildren(comp);
    props.forEach(__assignType$e((prop) => {
      const typeID = prop.getTypeID();
      const isUnique = unionTypes.every(__assignType$e((otherUnionItem) => {
        if (otherUnionItem === unionItem)
          return true;
        const otherProps = otherUnionItem.getJitChildren(comp);
        return otherProps.every(__assignType$e((otherProp) => otherProp.getTypeID() !== typeID, ["otherProp", "", 'P"2!"/"']));
      }, ["otherUnionItem", "", 'P"2!"/"']));
      if (isUnique) {
        const existing = uniquePropByUnionItem.get(unionItem);
        if (!existing) {
          uniquePropByUnionItem.set(unionItem, {
            prop,
            unionItem
          });
          return;
        }
        const newItem = { prop, unionItem };
        const lessComplex = [newItem, existing].toSorted(__assignType$e((a, b) => sortRunTypeByComplexity(comp, a.prop, b.prop), ["a", "b", "", 'P"2!"2""/#']))[0];
        uniquePropByUnionItem.set(unionItem, lessComplex);
      }
    }, ["prop", "", 'P"2!"/"']));
  }, ["unionItem", "", 'P"2!"/"']));
  if (!uniquePropByUnionItem.size)
    return [];
  const uniqueProps = Array.from(uniquePropByUnionItem.values());
  return uniqueProps.map(__assignType$e((item) => {
    item.prop.isUnionDiscriminator = true;
    const unionIndex = urt.getUnionItemIndex(comp, item.unionItem);
    const typeID = item.prop.getTypeID();
    return {
      unionItem: item.unionItem,
      unionIndex,
      prop: item.prop,
      typeID,
      compiledName: getCompiledName(comp, urt, typeID)
    };
  }, ["item", "", 'P"2!"/"']));
}
getUniqueDiscriminatorProperties.__type = ["JitFnCompiler", "comp", "UnionRunType", "urt", "CollectionRunType", "unionTypes", "propTypeID", "", "getCompiledName", () => __ΩFlattenedProp, "getUniqueDiscriminatorProperties", `P"w!2""w#2$"w%F2&P"w!2""w#2$P&'J2'&/(2)n*F/+`];
function initGetCompiledName() {
  const typeIDs = (Map.Ω = [["P&'J"], ["'"]], /* @__PURE__ */ new Map());
  return __assignType$e(function getCompiledName(comp, urt, typeID) {
    const existingIndex = typeIDs.get(typeID);
    if (existingIndex)
      return comp.getLocalVarName("prop", urt) + `_${existingIndex}`;
    const newIndex = typeIDs.size;
    typeIDs.set(typeID, newIndex);
    return comp.getLocalVarName("prop", urt) + `_${newIndex}`;
  }, ["JitFnCompiler", "comp", "UnionRunType", "urt", "typeID", "getCompiledName", `P"w!2""w#2$P&'J2%&/&`]);
}
initGetCompiledName.__type = ["initGetCompiledName", 'P"/!'];
function __assignType$d(fn, args) {
  fn.__type = args;
  return fn;
}
class UnionRunType extends CollectionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "hasDiscriminators");
    __publicField(this, "hasObjectTypes");
  }
  isTypeWithProperties(rt) {
    return rt.getFamily() === "C" && (isInterfaceRunType(rt) || isClassRunType(rt) || isObjectLiteralRunType(rt) || isIntersectionRunType(rt));
  }
  getUnionChildren(comp) {
    const children = this.getJitChildren(comp);
    markDiscriminators(comp, this, children);
    return splitUnionItems(comp, this, children);
  }
  getUnionItemIndex(comp, unionItem) {
    const children = this.getJitChildren(comp);
    const index = children.findIndex(__assignType$d((child) => child === unionItem, ["child", "", 'P"2!"/"']));
    if (index === -1)
      throw new Error(`Item ${unionItem.getTypeName()} not found in union ${this.getTypeName()}`);
    return index;
  }
  /**
   * Returns isType check for a union child with loose matching.
   * Uses first-match strategy: returns first matching type in declaration order.
   * For all-optional types (weak types), ensures at least one property matches or is empty object.
   * Note: Use ESLint rules @mionjs/no-unreachable-union-types and @mionjs/no-mixed-union-properties
   * to detect overlapping union types at compile time.
   * @see union.spec.ts 'Union Obj' and 'Union Mixed' test suites for examples.
   */
  getChildIsTypeWithLooseCheck(rt, comp) {
    const isTypeCode = comp.compileIsType(rt, "E").code || "";
    const isTypeWithProperties = isInterfaceRunType(rt) || isClassRunType(rt) || isObjectLiteralRunType(rt) || isIntersectionRunType(rt);
    if (!isTypeWithProperties || rt.getFamily() !== "C")
      return isTypeCode;
    const props = rt.getJitChildren(comp);
    const hasIndexProperty = props.some(__assignType$d((prop) => prop.src.kind === type.ReflectionKind.indexSignature, ["prop", "", 'P"2!"/"']));
    if (hasIndexProperty)
      return isTypeCode;
    const isAllOptional = rt.areAllChildrenOptional(props);
    if (isAllOptional && props.length > 0) {
      const hasOwnPropCheck = props.map(__assignType$d((p) => {
        const name = p.getPropertyName();
        return `(${toLiteral(name)} in ${comp.vλl})`;
      }, ["p", "", 'P"2!"/"']));
      hasOwnPropCheck.push(`Object.keys(${comp.vλl}).length === 0`);
      const weakTypeCheck = `(${hasOwnPropCheck.join(" || ")})`;
      return `(${isTypeCode} && ${weakTypeCheck})`;
    }
    return isTypeCode;
  }
  /**
   * Loose union matching: returns first matching type in declaration order.
   * Objects with properties from multiple union types will match the first compatible type.
   * Use ESLint rules to detect overlapping types at compile time.
   */
  emitIsType(comp) {
    this.checkAllowedChildren(comp);
    const { simpleItems, objectTypes, anyItem } = this.getUnionChildren(comp);
    const simpleChecks = simpleItems.map(__assignType$d((rt) => this.getChildIsTypeWithLooseCheck(rt, comp), ["rt", "", 'P"2!"/"'])).filter(Boolean);
    const objChecks = objectTypes.map(__assignType$d((rt) => this.getChildIsTypeWithLooseCheck(rt, comp), ["rt", "", 'P"2!"/"'])).filter(Boolean);
    const objCode = objChecks.length ? `(typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null && (${objChecks.join(" || ")}))` : "";
    const anyCheck = anyItem ? this.getChildIsTypeWithLooseCheck(anyItem, comp) : "";
    const allChecks = [...simpleChecks, objCode, anyCheck].filter(Boolean);
    return { code: `(${allChecks.join(" || ")})`, type: "E" };
  }
  emitTypeErrors(comp) {
    this.checkAllowedChildren(comp);
    const isType = comp.compileIsType(this, "E").code;
    const code = `if (!${isType}) ${comp.callJitErr(this)};`;
    return { code, type: "S" };
  }
  /**
   * When a union is encodes to json is encode into and array with two elements: [unionDiscriminator, encoded Value]
   * the first element is the index of the type in the union.
   * the second element is the encoded value of the type.
   * ie: type union = string | number | bigint;  var v1: union = 123n;  v1 is encoded as [2, "123n"]
   */
  emitPrepareForJson(comp) {
    this.checkAllowedChildren(comp);
    const { simpleItems, objectTypes, anyItem } = this.getUnionChildren(comp);
    const errName = comp.getLocalVarName("uErr", this);
    const fail = `throw new Error(${errName});`;
    comp.setContextItem(errName, `const ${errName} = "Can not json encode union: item does not belong to the union"`);
    const ifElse = createIfElseFn();
    const getEncodeCode = __assignType$d((childRt) => {
      const toJit = comp.compilePrepareForJson(childRt, "S");
      const fromJit = comp.compileRestoreFromJson(childRt, "S");
      const needsTupleEncoding = !!toJit.code || !!fromJit.code;
      const isExpression = childIsExpression(toJit, childRt);
      const encodeCode = isExpression && toJit.code ? `${comp.vλl} = ${toJit.code};` : toJit.code || "";
      const index = this.getUnionItemIndex(comp, childRt);
      const tupleEncode = needsTupleEncoding ? `${comp.vλl} = [${index}, ${comp.vλl}]` : "/*noop*/";
      return `${encodeCode} ${tupleEncode}`;
    }, [() => BaseRunType, "childRt", "", 'PP7!2""/#']);
    const simpleCode = simpleItems.map(__assignType$d((rt) => {
      const isTypeCode = this.getChildIsTypeWithLooseCheck(rt, comp);
      return `${ifElse()} (${isTypeCode}) {${getEncodeCode(rt)}}`;
    }, ["rt", "", 'P"2!"/"']));
    const objCode = objectTypes.length ? objectTypes.map(__assignType$d((rt) => {
      const isTypeCode = this.getChildIsTypeWithLooseCheck(rt, comp);
      return `${ifElse()} (typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null && ${isTypeCode}) {${getEncodeCode(rt)}}`;
    }, ["rt", "", 'P"2!"/"'])) : [];
    const anyCode = anyItem ? `${ifElse(true)} {${getEncodeCode(anyItem)}}` : `${ifElse(true)} {${fail}}`;
    return { code: [...simpleCode, ...objCode, anyCode].join(""), type: "S" };
  }
  /**
   * When a union is decoded from json it expects de two elements array format: [unionDiscriminator, Value to decode]
   * the first element is the index of the type in the union.
   * the second element is the encoded value of the type.
   * ie: type union = string | number | bigint;  var v1: union = 123n;  v1 is encoded as [2, "123n"]
   */
  emitRestoreFromJson(comp) {
    this.checkAllowedChildren(comp);
    const decVar = comp.getLocalVarName("dec", this);
    const errVarName = comp.getLocalVarName("uErr", this);
    comp.setContextItem(errVarName, `const ${errVarName} = "Can not json decode union: invalid union index"`);
    const children = this.getJitChildren(comp);
    const ifElse = createIfElseFn();
    const itemsCode = children.map(__assignType$d((unionItem) => {
      const childJit = comp.compileRestoreFromJson(unionItem, "S");
      const isExpression = childIsExpression(childJit, unionItem);
      const code2 = isExpression && childJit.code && childJit.code !== comp.vλl ? `${comp.vλl} = ${childJit.code}` : childJit.code || "";
      const index = this.getUnionItemIndex(comp, unionItem);
      return `${ifElse()} (${decVar} === ${index}) {${code2 || "/*noop*/"}}`;
    }, ["unionItem", "", 'P"2!"/"'])).filter(Boolean);
    const childrenCode = itemsCode.join("");
    const failCode = childrenCode ? `else {throw new Error(${errVarName})}` : "";
    const code = `
            if (${comp.vλl}?.length === 2 && Array.isArray(${comp.vλl}) && typeof ${comp.vλl}[0] === 'number') {
                const ${decVar} = ${comp.vλl}[0]; ${comp.vλl} = ${comp.vλl}[1];
                ${childrenCode}
                ${failCode}
            }
        `;
    return { code, type: "S" };
  }
  getUnionTypeNames() {
    return this.getChildRunTypes().map(__assignType$d((rt) => rt.getTypeName(), ["rt", "", 'P"2!"/"'])).join(" | ");
  }
  checkAllowedChildren(comp) {
    const allChildren = this.getChildRunTypes();
    const toSkip = allChildren.filter(__assignType$d((rt) => rt.skipJit(comp), ["rt", "", 'P"2!"/"']));
    if (toSkip.length)
      throw new Error(`Union can not have non serializable types, ie: Symbol, Function, etc. 
Type: ${this.stringify()}`);
  }
}
__publicField(UnionRunType, "__type", ["TypeUnion", () => CollectionRunType, "hasDiscriminators", function() {
  return void 0;
}, "hasObjectTypes", function() {
  return void 0;
}, () => BaseRunType, "rt", "isTypeWithProperties", "JitFnCompiler", "comp", () => __ΩSplitUnionResult, "getUnionChildren", () => BaseRunType, "unionItem", "getUnionItemIndex", () => BaseRunType, "getChildIsTypeWithLooseCheck", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "getUnionTypeNames", "checkAllowedChildren", "UnionRunType", `P"w!7"P)-J3#>$P)-J3%>&PP7'2("0)P"w*2+n,0-P"w*2+P7.2/'00PP712("w*2+&02P"w*2+"w304P"w52+"w306P"w*2+"w307P"w*2+"w308P&09P"w*2+"0:5"w!6"w;`]);
class TupleMemberRunType extends MemberRunType {
  isOptional() {
    return !!this.src.optional || this.isRest() || this.hasDefaultValue();
  }
  getChildIndex(comp) {
    var _a, _b;
    const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    if (start)
      return getParamIndex(this.src) - start;
    return getParamIndex(this.src);
  }
  getChildVarName(comp) {
    var _a;
    const src = this.src;
    if ((_a = src.parent) == null ? void 0 : _a.types) {
      return src.parent.types.indexOf(this.src);
    }
    return this.getChildIndex(comp);
  }
  getChildLiteral(comp) {
    return this.getChildVarName(comp);
  }
  useArrayAccessor() {
    return true;
  }
  isRest() {
    return this.getMemberType().src.kind === type.ReflectionKind.rest;
  }
  skipSettingAccessor() {
    return this.isRest();
  }
  hasDefaultValue() {
    return !!this.src.default;
  }
  emitIsType(comp) {
    const child = this.getJitChild(comp);
    const skipChild = child == null ? void 0 : child.skipJit(comp);
    const childJit = comp.compileIsType(child, "E");
    const isNonSerializable = skipChild || !(childJit == null ? void 0 : childJit.code) && !child;
    if (isNonSerializable)
      return { code: `${comp.getChildVλl()} === undefined`, type: "E" };
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "E" };
    if (this.isRest())
      return childJit;
    return this.isOptional() ? { code: `(${comp.getChildVλl()} === undefined || (${childJit.code}))`, type: "E" } : childJit;
  }
  emitTypeErrors(comp) {
    const child = this.getJitChild(comp);
    const skipChild = child == null ? void 0 : child.skipJit(comp);
    const childJit = comp.compileTypeErrors(child, "S");
    const isNonSerializable = skipChild || !(childJit == null ? void 0 : childJit.code) && !child;
    if (isNonSerializable)
      return {
        code: `if (${comp.getChildVλl()} !== undefined) ${comp.callJitErrWithPath("undefined", this.getChildIndex(comp))}`,
        type: "S"
      };
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    if (this.isRest())
      return childJit;
    return this.isOptional() ? { code: `if (${comp.getChildVλl()} !== undefined) {${childJit.code}}`, type: "S" } : childJit;
  }
  emitPrepareForJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compilePrepareForJson(child, "S");
    const optionalCode = `if (${comp.getChildVλl()} === undefined ) {if (${comp.vλl}.length > ${this.getChildIndex(comp)}) ${comp.getChildVλl()} = null}`;
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return this.isOptional() ? { code: optionalCode, type: "S" } : { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return this.isOptional() ? { code: `${optionalCode} else {${code}}`, type: "S" } : { code, type: "S" };
  }
  emitRestoreFromJson(comp) {
    if (!this.getJitChild(comp))
      return { code: `${comp.getChildVλl()} = undefined;`, type: "S" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileRestoreFromJson(child, "S");
    const optionalCOde = `if (${comp.getChildVλl()} === null ) {${comp.getChildVλl()} = undefined}`;
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return this.isOptional() ? { code: optionalCOde, type: "S" } : { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return this.isOptional() ? { code: `${optionalCOde} else if (${comp.getChildVλl()} !== undefined) {${code}}`, type: "S" } : { code, type: "S" };
  }
}
__publicField(TupleMemberRunType, "__type", [() => type.__ΩTypeTupleMember, "T", () => MemberRunType, "isOptional", "JitFnCompiler", "comp", "getChildIndex", "getChildVarName", "getChildLiteral", true, "useArrayAccessor", "isRest", "skipSettingAccessor", "hasDefaultValue", () => __ΩJitCode, "emitIsType", "JitErrorsFnCompiler", () => __ΩJitCode, "emitTypeErrors", () => __ΩJitCode, "emitPrepareForJson", () => __ΩJitCode, "emitRestoreFromJson", "TupleMemberRunType", `n!c"Pe"!7#P)0$P"w%2&'0'P"w%2&'0(P"w%2&'0)P.*0+P)0,P"0-P)0.P"w%2&n/00P"w12&n203P"w%2&n405P"w%2&n6075e!!6"w8`]);
function __assignType$c(fn, args) {
  fn.__type = args;
  return fn;
}
class TupleRunType extends CollectionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildRunTypes", __assignType$c(() => {
      const childTypes = this.src.parameters || this.src.types || [];
      return childTypes.map(__assignType$c((t) => t._rt, ["t", "", 'P"2!"/"']));
    }, ["", "P!F/!"]));
  }
  getParamRunTypes(comp) {
    var _a, _b, _c, _d;
    const start = (_b = (_a = comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    const end = (_d = (_c = comp.opts) == null ? void 0 : _c.paramsSlice) == null ? void 0 : _d.end;
    const children = this.getChildRunTypes();
    if (!start && !end)
      return children;
    return children.slice(start, end);
  }
  hasRestParameter(comp) {
    return !!this.getParamRunTypes(comp).length && this.getParamRunTypes(comp)[this.getParamRunTypes(comp).length - 1].isRest();
  }
  totalRequiredParams(comp) {
    return this.getParamRunTypes(comp).filter(__assignType$c((p) => !p.isOptional() && !p.isRest(), ["p", "", 'P"2!"/"'])).length;
  }
  // ####### params #######
  emitIsType(comp) {
    const children = this.getParamRunTypes(comp);
    if (children.length === 0 && comp.opts.noIsArrayCheck)
      return { code: void 0, type: "E" };
    if (children.length === 0)
      return { code: `Array.isArray(${comp.vλl}) && ${comp.vλl}.length === 0`, type: "E" };
    const lengthCode = this.hasRestParameter(comp) ? "" : `&& ${comp.vλl}.length <= ${this.getParamRunTypes(comp).length}`;
    const paramsCode = children.map(__assignType$c((p) => `(${comp.compileIsType(p, "E").code})`, ["p", "", 'P"2!"/"'])).join(" && ");
    const checkIsArrayCode = comp.opts.noIsArrayCheck ? "" : `Array.isArray(${comp.vλl})${lengthCode} && `;
    return { code: `(${checkIsArrayCode} ${paramsCode})`, type: "E" };
  }
  emitTypeErrors(comp) {
    const children = this.getParamRunTypes(comp);
    if (children.length === 0 && comp.opts.noIsArrayCheck)
      return { code: void 0, type: "S" };
    if (children.length === 0)
      return { code: `if (!Array.isArray(${comp.vλl}) || && ${comp.vλl}.length === 0) ${comp.callJitErr(this)}`, type: "S" };
    const lengthCode = this.hasRestParameter(comp) ? "" : `|| ${comp.vλl}.length > ${this.getParamRunTypes(comp).length}`;
    const paramsCode = children.map(__assignType$c((p) => comp.compileTypeErrors(p, "S").code, ["p", "", 'P"2!"/"'])).join(";");
    if (comp.opts.noIsArrayCheck)
      return { code: paramsCode, type: "S" };
    return { code: `if (!Array.isArray(${comp.vλl})${lengthCode}) ${comp.callJitErr(this)}; else {${paramsCode}}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    const children = this.getParamRunTypes(comp);
    if (!children.length)
      return { code: void 0, type: "S" };
    const code = children.map(__assignType$c((p) => comp.compilePrepareForJson(p, "S").code, ["p", "", 'P"2!"/"'])).filter(Boolean).join(";");
    return { code, type: "S" };
  }
  emitRestoreFromJson(comp) {
    const children = this.getParamRunTypes(comp);
    if (!children.length)
      return { code: void 0, type: "S" };
    const code = children.map(__assignType$c((p) => comp.compileRestoreFromJson(p, "S").code, ["p", "", 'P"2!"/"'])).filter(Boolean).join(";");
    return { code, type: "S" };
  }
}
__publicField(TupleRunType, "__type", ["TypeTuple", "ParamList", () => TupleMemberRunType, "ParamType", () => CollectionRunType, "getChildRunTypes", function() {
  return __assignType$c(() => {
    const childTypes = this.src.parameters || this.src.types || [];
    return childTypes.map(__assignType$c((t) => t._rt, ["t", "", 'P"2!"/"']));
  }, ["", "P!F/!"]);
}, "JitFnCompiler", "comp", "getParamRunTypes", "hasRestParameter", "totalRequiredParams", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "TupleRunType", `"w!c"P7#c$Pe"!7%!3&>'P"w(2)e""F0*P"w(2))0+P"w(2)'0,P"w(2)"w-0.P"w/2)"w-00P"w(2)"w-01P"w(2)"w-025e!!6"w3`]);
class ParameterRunType extends TupleMemberRunType {
  getParamName() {
    return this.src.name;
  }
  getChildVarName(comp) {
    return this.getChildIndex(comp);
  }
  getChildLiteral(comp) {
    return this.getChildIndex(comp);
  }
}
__publicField(ParameterRunType, "__type", ["TypeParameter", "T", () => TupleMemberRunType, "getParamName", "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", "ParameterRunType", `"w!c"Pe"!7#P"0$P"w%2&'0'P"w%2&'0(5e!!6"w)`]);
function __assignType$b(fn, args) {
  fn.__type = args;
  return fn;
}
class FunctionParamsRunType extends TupleRunType {
  emitIsType(comp) {
    const children = this.getParamRunTypes(comp);
    if (children.length === 0)
      return { code: `${comp.vλl}.length === 0`, type: "E" };
    const lengthCode = this.hasRestParameter(comp) ? "" : `${comp.vλl}.length <= ${children.length}`;
    const paramsCode = children.map(__assignType$b((p) => comp.compileIsType(p, "E").code, ["p", "", 'P"2!"/"'])).filter(Boolean);
    if (paramsCode.length === 0)
      return lengthCode ? { code: `(${lengthCode})`, type: "E" } : { code: void 0, type: "E" };
    return lengthCode ? { code: `(${lengthCode} && ${paramsCode.join(" && ")})`, type: "E" } : { code: `(${paramsCode.join(" && ")})`, type: "E" };
  }
  emitTypeErrors(comp) {
    const children = this.getParamRunTypes(comp);
    if (children.length === 0)
      return { code: `if (${comp.vλl}.length !== 0) ${comp.callJitErr(this)}`, type: "S" };
    const lengthCode = this.hasRestParameter(comp) ? "" : `${comp.vλl}.length > ${children.length}`;
    const paramsCode = children.map(__assignType$b((p) => comp.compileTypeErrors(p, "S").code, ["p", "", 'P"2!"/"'])).filter(Boolean);
    if (paramsCode.length === 0)
      return lengthCode ? { code: `if (${lengthCode}) ${comp.callJitErr(this)}`, type: "S" } : { code: void 0, type: "S" };
    return lengthCode ? { code: `if (${lengthCode}) ${comp.callJitErr(this)}; else {${paramsCode.join(";")}}`, type: "S" } : { code: paramsCode.join(";"), type: "S" };
  }
}
__publicField(FunctionParamsRunType, "__type", ["TypeFunction", "ParamList", () => ParameterRunType, () => TupleRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", () => ParameterRunType, "FunctionParamsRunType", `"w!c"Pe"!P7#7$P"w%2&"w'0(P"w)2&"w'0*5e!!P7+6#w,`]);
function __assignType$a(fn, args) {
  fn.__type = args;
  return fn;
}
class PropertyRunType extends MemberRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "isUnionDiscriminator", false);
    /** this is set by the parent interface if prop is optional, when optional properties are sorted */
    __publicField(this, "optionalIndex", -1);
    __publicField(this, "getJitChildIndex", __assignType$a((comp) => this.getParent().getJitChildren(comp).indexOf(this), ["JitFnCompiler", "comp", "", 'P"w!2""/#']));
    __publicField(this, "isOptional", () => !!this.src.optional);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getPropertyName() {
    return getPropVarName(this.src.name);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildVarName(comp) {
    return getPropVarName(this.src.name);
  }
  getChildLiteral(comp) {
    return getPropLiteral(this.getChildVarName(comp));
  }
  useArrayAccessor() {
    return useArrayAccessorForProp(this.src.name);
  }
  skipJit(comp) {
    const name = this.src.name;
    if (typeof name === "symbol") {
      return (comp == null ? void 0 : comp.fnID) !== JitFunctions$1.toJSCode.id;
    }
    return false;
  }
  // #### jit code ####
  emitIsType(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileIsType(child, "E");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "E" };
    return this.src.optional ? { code: `(${comp.getChildVλl()} === undefined || ${childJit.code})`, type: "E" } : childJit;
  }
  emitTypeErrors(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileTypeErrors(child, "S");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    return this.src.optional ? { code: `if (${comp.getChildVλl()} !== undefined) {${childJit.code}}`, type: "S" } : childJit;
  }
  emitPrepareForJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compilePrepareForJson(child, "S");
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    if (this.src.optional)
      return { code: `if (${comp.getChildVλl()} !== undefined) {${code}}`, type: "S" };
    return { code, type: "S" };
  }
  emitRestoreFromJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileRestoreFromJson(child, "S");
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    if (this.src.optional)
      return { code: `if (${comp.getChildVλl()} !== undefined) {${code}}`, type: "S" };
    return { code, type: "S" };
  }
}
__publicField(PropertyRunType, "__type", ["TypePropertySignature", "TypeProperty", () => MemberRunType, "isUnionDiscriminator", function() {
  return false;
}, "optionalIndex", function() {
  return -1;
}, "getPropertyName", "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", "useArrayAccessor", "getJitChildIndex", function() {
  return __assignType$a((comp) => this.getParent().getJitChildren(comp).indexOf(this), ["JitFnCompiler", "comp", "", 'P"w!2""/#']);
}, "isOptional", function() {
  return () => !!this.src.optional;
}, "skipJit", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "PropertyRunType", `PP"w!"w"J7#)3$>%!3&>'P"0(P"w)2*"0+P"w)2*"0,P"0-!3.>/!30>1P"w)2*)02P"w)2*"w304P"w52*"w306P"w)2*"w307P"w)2*"w3085P"w!"w"J6"w9`]);
function __assignType$9(fn, args) {
  fn.__type = args;
  return fn;
}
class FunctionRunType extends BaseRunType {
  constructor() {
    super(...arguments);
    // parameterRunTypes.src must be set after FunctionRunType creation
    __publicField(this, "parameterRunTypes", new FunctionParamsRunType());
  }
  skipJit(comp) {
    if (!comp)
      return true;
    return comp.fnID !== JitFunctions$1.toJSCode.id;
  }
  onCreated(deepkitType) {
    super.onCreated(deepkitType);
    const paramsType = { ...deepkitType, subKind: ReflectionSubKind$1.params };
    delete paramsType._typeId;
    delete paramsType._formatId;
    this.parameterRunTypes.onCreated(paramsType);
  }
  getFamily() {
    return "F";
  }
  getFnName() {
    const name = this.src.name;
    if (!name)
      return "";
    if (typeof name === "symbol")
      return name.toString();
    return name;
  }
  createJitParamsFunction(jitFn, opts) {
    return this.createJitCompiledParamsFunction(jitFn, opts).fn;
  }
  createJitCompiledParamsFunction(jitFn, opts) {
    var _a, _b;
    const start = (_a = opts == null ? void 0 : opts.paramsSlice) == null ? void 0 : _a.start;
    const end = (_b = opts == null ? void 0 : opts.paramsSlice) == null ? void 0 : _b.end;
    if (start && end) {
      if (start < 0 || end > this.parameterRunTypes.getChildRunTypes().length)
        throw new Error(`Invalid paramsSlice, start: ${start}, end: ${end}.`);
      if (end <= start)
        throw new Error(`Invalid paramsSlice, start: ${start}, end: ${end}`);
    }
    return this.parameterRunTypes.createJitCompiledFunction(jitFn.id, void 0, opts);
  }
  createJitReturnFunction(jitFn) {
    return this.createJitCompiledReturnFunction(jitFn).fn;
  }
  createJitCompiledReturnFunction(jitFn, opts) {
    let currentType = this;
    while (true) {
      if (isAnyFunctionRunType(currentType)) {
        const returnType = currentType.getReturnType();
        if (isPromiseRunType(returnType) || isFunctionRunType(returnType)) {
          currentType = returnType;
          continue;
        }
        return returnType.createJitCompiledFunction(jitFn.id, void 0, opts);
      }
      const memberType = currentType.getMemberType();
      if (isPromiseRunType(memberType) || isFunctionRunType(memberType)) {
        currentType = memberType;
        continue;
      }
      return memberType.createJitCompiledFunction(jitFn.id, void 0, opts);
    }
  }
  // ######## JIT functions (all throw error) ########
  // can't know the types of the run type function parameters, neither the return type, so only compare function name and length
  emitIsType(comp) {
    const minLength = this.parameterRunTypes.totalRequiredParams(comp);
    const totalParams = this.parameterRunTypes.getParamRunTypes(comp).length;
    const hasOptional = totalParams > minLength;
    const maxLength = this.parameterRunTypes.hasRestParameter(comp) || !hasOptional ? "" : ` && ${comp.vλl}.length <= ${totalParams}`;
    return { code: `(typeof ${comp.vλl} === 'function' && ${comp.vλl}.length >= ${minLength} ${maxLength})`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (!(${this.emitIsType(comp).code})) ${comp.callJitErr(this)};`, type: "S" };
  }
  /**
   * json encode a function
   */
  emitPrepareForJson() {
    throw new Error(`Compile function PrepareForJson not supported, call compileParams or compileReturn instead.`);
  }
  emitRestoreFromJson() {
    throw new Error(`Compile function RestoreFromJson not supported, call compileParams or compileReturn instead.`);
  }
  emitHasUnknownKeys() {
    return { code: "", type: "E" };
  }
  emitUnknownKeyErrors() {
    return { code: "", type: "S" };
  }
  emitStripUnknownKeys() {
    return { code: "", type: "S" };
  }
  emitUnknownKeysToUndefined() {
    return { code: "", type: "S" };
  }
  // TODO: paramsSlice has been removed as options are not jet passed when building the run type. maybe we can pass it to the JitCompileOperation instead
  // constructor() {
  //     const start = opts?.paramsSlice?.start;
  //     const end = opts?.paramsSlice?.end;
  //     parameterRunTypes = src.parameters.slice(start, end).map((p) => visitor(p, parents, opts)) as ParameterRunType[];
  // }
  getReturnType() {
    return this.src.return._rt;
  }
  getParameters() {
    return this.parameterRunTypes;
  }
  getParameterNames(opts) {
    var _a, _b;
    const start = (_a = opts == null ? void 0 : opts.paramsSlice) == null ? void 0 : _a.start;
    const end = (_b = opts == null ? void 0 : opts.paramsSlice) == null ? void 0 : _b.end;
    if (start || end) {
      return this.src.parameters.slice(start, end).map(__assignType$9((p) => p.name, ["p", "", 'P"2!"/"']));
    }
    return this.src.parameters.map(__assignType$9((p) => p.name, ["p", "", 'P"2!"/"']));
  }
  hasReturnData() {
    const returnKind = this.getReturnType().src.kind;
    return returnKind !== type.ReflectionKind.void && returnKind !== type.ReflectionKind.never && returnKind !== type.ReflectionKind.undefined;
  }
  isAsync() {
    const returnKind = this.getReturnType().src.kind;
    return returnKind === type.ReflectionKind.promise || returnKind === type.ReflectionKind.any || returnKind === type.ReflectionKind.unknown;
  }
  returnIsPromise() {
    return isPromiseRunType(this.getReturnType());
  }
  async mockReturn(ctx) {
    await registerJitFunctionCompiler(JitFunctions$1.mock);
    return this.getReturnType().mockType(ctx);
  }
  async mockParams(ctx) {
    await registerJitFunctionCompiler(JitFunctions$1.mock);
    return this.parameterRunTypes.mockType(ctx);
  }
}
__publicField(FunctionRunType, "__type", [() => type.__ΩTypeFunction, "CallType", () => BaseRunType, () => FunctionParamsRunType, "parameterRunTypes", function() {
  return new FunctionParamsRunType();
}, () => JitFnCompiler, "comp", "skipJit", "SrcType", "deepkitType", "onCreated", "F", "getFamily", "getFnName", "JitFn", "jitFn", "RunTypeOptions", "opts", "args", "", "createJitParamsFunction", () => mionRoutes.__ΩJitCompiledFn, "createJitCompiledParamsFunction", "createJitReturnFunction", () => mionRoutes.__ΩJitCompiledFn, "createJitCompiledReturnFunction", () => JitFnCompiler, "JitCode", "emitIsType", () => JitErrorsFnCompiler, "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "emitHasUnknownKeys", "emitUnknownKeyErrors", "emitStripUnknownKeys", "emitUnknownKeysToUndefined", () => BaseRunType, "getReturnType", () => FunctionParamsRunType, "getParameters", "getParameterNames", "hasReturnData", "isAsync", "returnIsPromise", "ctx", "mockReturn", "mockParams", "FunctionRunType", 'n!c"Pe"!7#P7$3%>&PP7\'2()0)P"w*2+$0,P.-0.PP&\'J0/P"w021"w2238P"@24"/506P"w021"w2238n708P"w021P"@24"/509P"w021"w2238n:0;PP7<2("w=0>PP7?2("w=0@P"w=0AP"w=0BP"w=0CP"w=0DP"w=0EP"w=0FPP7G0HPP7I0JP"w2238&F0KP)0LP)0MP)0NP"w22O8"`0PP"w22O8"F`0Q5e!!6"wR']);
function __assignType$8(fn, args) {
  fn.__type = args;
  return fn;
}
class MethodSignatureRunType extends FunctionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildIndex", __assignType$8((comp) => {
      var _a, _b;
      const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
      if (start)
        return getPropIndex(this.src) - start;
      return getPropIndex(this.src);
    }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']));
    __publicField(this, "isOptional", () => !!this.src.optional);
    __publicField(this, "skipCommas", false);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildVarName(comp) {
    return getPropVarName(this.src.name);
  }
  getChildLiteral(comp) {
    return getPropLiteral(this.getChildVarName(comp));
  }
  useArrayAccessor() {
    return useArrayAccessorForProp(this.src.name);
  }
}
__publicField(MethodSignatureRunType, "__type", [() => type.__ΩTypeMethodSignature, () => FunctionRunType, "getChildIndex", function() {
  return __assignType$8((comp) => {
    var _a, _b;
    const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    if (start)
      return getPropIndex(this.src) - start;
    return getPropIndex(this.src);
  }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']);
}, "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", "useArrayAccessor", "isOptional", function() {
  return () => !!this.src.optional;
}, "skipCommas", function() {
  return false;
}, () => type.__ΩTypeMethodSignature, () => __ΩRunTypeChildAccessor, "MethodSignatureRunType", `Pn!7"!3#>$P"w%2&"0'P"w%2&"0(P"0)!3*>+)3,>-5n.6"n/x"w0`]);
function __assignType$7(fn, args) {
  fn.__type = args;
  return fn;
}
class IndexSignatureRunType extends MemberRunType {
  isOptional() {
    return true;
  }
  getChildVarName(comp) {
    return comp.getLocalVarName("p", this);
  }
  getChildLiteral(comp) {
    return this.getChildVarName(comp);
  }
  useArrayAccessor() {
    return true;
  }
  skipJit(comp) {
    var _a;
    const index = (_a = this.src.index) == null ? void 0 : _a.kind;
    if (index === type.ReflectionKind.symbol) {
      return (comp == null ? void 0 : comp.fnID) !== JitFunctions$1.toJSCode.id;
    }
    return false;
  }
  // #### jit code ####
  emitIsType(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileIsType(child, "E");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "E" };
    return {
      code: `for (const ${this.getChildVarName(comp)} in ${comp.vλl}){if (!(${childJit.code})) return false;} return true;`,
      type: "RB"
    };
  }
  emitTypeErrors(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileTypeErrors(child, "S");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    return { code: `for (const ${this.getChildVarName(comp)} in ${comp.vλl}) {${childJit.code}}`, type: "S" };
  }
  emitPrepareForJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compilePrepareForJson(child, "S");
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const varName = comp.vλl;
    const prop = this.getChildVarName(comp);
    const skipCode = this.getSkipCode(comp, prop);
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return { code: `for (const ${prop} in ${varName}){${skipCode} ${code}}`, type: "S" };
  }
  emitRestoreFromJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileRestoreFromJson(child, "S");
    if (!child || !(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const varName = comp.vλl;
    const prop = this.getChildVarName(comp);
    const skipCode = this.getSkipCode(comp, prop);
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    return { code: `for (const ${prop} in ${varName}){${skipCode} ${code}}`, type: "S" };
  }
  emitHasUnknownKeys(comp) {
    if (this.getMemberType().getFamily() === "A")
      return { code: void 0, type: "E" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileHasUnknownKeys(child, "E");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: "", type: "E" };
    const varName = comp.vλl;
    const prop = this.getChildVarName(comp);
    const resultVal = comp.getLocalVarName("res", this);
    return {
      code: `for (const ${prop} in ${varName}) {const ${resultVal} = ${childJit.code};if (${resultVal}) return true;}return false;`,
      type: "RB"
    };
  }
  emitUnknownKeyErrors(comp) {
    if (this.getMemberType().getFamily() === "A")
      return { code: void 0, type: "S" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileUnknownKeyErrors(child, "S");
    return this.traverseCode(comp, childJit);
  }
  emitStripUnknownKeys(comp) {
    if (this.getMemberType().getFamily() === "A")
      return { code: void 0, type: "S" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileStripUnknownKeys(child, "S");
    return this.traverseCode(comp, childJit);
  }
  emitUnknownKeysToUndefined(comp) {
    if (this.getMemberType().getFamily() === "A")
      return { code: void 0, type: "S" };
    const child = this.getJitChild(comp);
    const childJit = comp.compileUnknownKeysToUndefined(child, "S");
    return this.traverseCode(comp, childJit);
  }
  traverseCode(comp, childJit) {
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    const prop = this.getChildVarName(comp);
    return { code: `for (const ${prop} in ${comp.vλl}) {${childJit.code}}`, type: "S" };
  }
  /**
   * if index property should be skipped then it output some code to skip it,
   * this happen when an object/interface has an index property but also has named properties
   * that might collide with the index property. ie {[key: string]: string, a: string}
   * when executing the logic for the index property we need to skip the named properties.
   */
  getSkipCode(comp, prop) {
    const parent = this.getParent();
    const namedChildren = parent.getNamedChildren(comp);
    const skipNames = namedChildren.length ? namedChildren.map(__assignType$7((child) => `${child.getChildLiteral(comp)} === ${prop}`, ["child", "", 'P"2!"/"'])).join(" || ") : "";
    return namedChildren.length ? `if (${skipNames}) continue;` : "";
  }
}
__publicField(IndexSignatureRunType, "__type", [() => type.__ΩTypeIndexSignature, () => MemberRunType, "isOptional", "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", true, "useArrayAccessor", "skipJit", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "emitHasUnknownKeys", "emitUnknownKeyErrors", "emitStripUnknownKeys", "emitUnknownKeysToUndefined", "childJit", "traverseCode", "prop", "getSkipCode", () => type.__ΩTypeIndexSignature, "IndexSignatureRunType", `Pn!7"P)0#P"w$2%&0&P"w$2%&0'P.(0)P"w$2%)0*P"w$2%"w+0,P"w-2%"w+0.P"w$2%"w+0/P"w$2%"w+00P"w$2%"w+01P"w-2%"w+02P"w$2%"w+03P"w$2%"w+04P"w$2%P"w+-J25"w+06P"w$2%&27&085n96"w:`]);
function __assignType$6(fn, args) {
  fn.__type = args;
  return fn;
}
class MethodRunType extends FunctionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildIndex", __assignType$6((comp) => {
      var _a, _b;
      const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
      if (start)
        return getPropIndex(this.src) - start;
      return getPropIndex(this.src);
    }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']));
    __publicField(this, "isOptional", () => !!this.src.optional);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildVarName(comp) {
    return getPropVarName(this.src.name);
  }
  getChildLiteral(comp) {
    return getPropLiteral(this.getChildVarName(comp));
  }
  useArrayAccessor() {
    return useArrayAccessorForProp(this.src.name);
  }
}
__publicField(MethodRunType, "__type", [() => type.__ΩTypeMethod, () => FunctionRunType, "getChildIndex", function() {
  return __assignType$6((comp) => {
    var _a, _b;
    const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    if (start)
      return getPropIndex(this.src) - start;
    return getPropIndex(this.src);
  }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']);
}, "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", "useArrayAccessor", "isOptional", function() {
  return () => !!this.src.optional;
}, () => type.__ΩTypeMethod, () => __ΩRunTypeChildAccessor, "MethodRunType", `Pn!7"!3#>$P"w%2&"0'P"w%2&"0(P"0)!3*>+5n,6"n-x"w.`]);
function __assignType$5(fn, args) {
  fn.__type = args;
  return fn;
}
class CallSignatureRunType extends FunctionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildIndex", __assignType$5((comp) => {
      var _a, _b;
      const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
      if (start)
        return getPropIndex(this.src) - start;
      return getPropIndex(this.src);
    }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']));
    __publicField(this, "getChildVarName", () => "");
    __publicField(this, "getChildLiteral", () => '""');
    __publicField(this, "useArrayAccessor", () => false);
    __publicField(this, "isOptional", () => false);
  }
}
__publicField(CallSignatureRunType, "__type", [() => type.__ΩTypeCallSignature, () => FunctionRunType, "getChildIndex", function() {
  return __assignType$5((comp) => {
    var _a, _b;
    const start = (_b = (_a = comp == null ? void 0 : comp.opts) == null ? void 0 : _a.paramsSlice) == null ? void 0 : _b.start;
    if (start)
      return getPropIndex(this.src) - start;
    return getPropIndex(this.src);
  }, ["JitFnCompiler", "comp", "", 'P"w!2""/#']);
}, "getChildVarName", function() {
  return () => "";
}, "getChildLiteral", function() {
  return () => '""';
}, "useArrayAccessor", function() {
  return () => false;
}, "isOptional", function() {
  return () => false;
}, () => type.__ΩTypeCallSignature, () => __ΩRunTypeChildAccessor, "CallSignatureRunType", `Pn!7"!3#>$!3%>&!3'>(!3)>*!3+>,5n-6"n.x"w/`]);
function __assignType$4(fn, args) {
  fn.__type = args;
  return fn;
}
const __ΩInterfaceMember = [() => PropertyRunType, () => MethodSignatureRunType, () => IndexSignatureRunType, () => MethodRunType, () => CallSignatureRunType, "InterfaceMember", 'PP7!P7"P7#P7$P7%Jw&y'];
class InterfaceRunType extends CollectionRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getCallSignature", memorize(__assignType$4(() => {
      return this.getChildRunTypes().find(__assignType$4((prop) => prop.src.kind === type.ReflectionKind.callSignature, ["prop", "", 'P"2!"/"']));
    }, [() => CallSignatureRunType, "", 'PPP7!-J/"'])));
  }
  getNamedChildren(comp) {
    return this.getJitChildren(comp).filter(__assignType$4((prop) => !!prop.src.name, ["prop", "", 'P"2!"/"']));
  }
  isCallable() {
    return this.getCallSignature() !== void 0;
  }
  getJitChildren(comp) {
    const children = super.getJitChildren(comp);
    return children.toSorted(__assignType$4((a, b) => sortDiscriminatorsFirst(a, b), ["a", "b", "", 'P"2!"2""/#']));
  }
  /** Split children in two groups: required and optional */
  splitJitSplitChildren(comp) {
    const children = super.getJitChildren(comp);
    const required = children.filter(__assignType$4((prop) => !prop.isOptional(), ["prop", "", 'P"2!"/"']));
    const optional = children.filter(__assignType$4((prop) => prop.isOptional() && !isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const indexSignatures = children.filter(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    return { required, optional, indexSignatures };
  }
  isPartOfUnion() {
    var _a;
    return ((_a = this.getParent()) == null ? void 0 : _a.src.kind) === type.ReflectionKind.union;
  }
  hasIndexSignature(comp) {
    return this.getJitChildren(comp).some(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
  }
  // #### collection's jit code ####
  emitIsType(comp) {
    const varName = comp.vλl;
    const children = this.getJitChildren(comp);
    const childrenCode = children.map(__assignType$4((prop) => comp.compileIsType(prop, "E").code, ["prop", "", 'P"2!"/"'])).filter(Boolean).join(" && ");
    if (this.isCallable())
      return {
        code: [this.getCallSignature().emitIsType(comp).code, childrenCode].filter(Boolean).join(" && "),
        type: "E"
      };
    let propsCode = "";
    if (comp.opts.strictTypes && !this.hasIndexSignature(comp)) {
      const unknownCheck = callCheckUnknownProperties(this, comp, children, false, false);
      if (unknownCheck)
        propsCode = `!${unknownCheck}`;
    }
    const objectCheck = this.isPartOfUnion() ? "" : `typeof ${varName} === 'object' && ${varName} !== null`;
    const itemsCode = [objectCheck, this.allOptionalCode(comp), childrenCode, propsCode].filter(Boolean).join(" && ");
    return { code: `(${itemsCode})`, type: "E" };
  }
  emitTypeErrors(comp) {
    const varName = comp.vλl;
    const children = this.getJitChildren(comp);
    const childrenCode = children.map(__assignType$4((prop) => comp.compileTypeErrors(prop, "S").code, ["prop", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (this.isCallable()) {
      return { code: `${this.getCallSignature().emitTypeErrors(comp).code} else {${childrenCode}}`, type: "S" };
    }
    let propsCode = "";
    if (comp.opts.strictTypes && !this.hasIndexSignature(comp)) {
      const unknownVar = comp.getLocalVarName("unk", this);
      const keyVar = comp.getLocalVarName("ky", this);
      const unknownValue = callCheckUnknownProperties(this, comp, children, true, false);
      if (unknownValue) {
        propsCode = `
                    const ${unknownVar} = ${unknownValue};
                    if (${unknownVar}) {for (const ${keyVar} of ${unknownVar}) {${comp.callJitErrWithPath("never", keyVar)}}}
                `;
      }
    }
    const objectCheck = this.isPartOfUnion() ? "" : `typeof ${varName} === 'object' && ${varName} !== null`;
    const isObjectCode = [objectCheck, this.allOptionalCode(comp)].filter(Boolean).join(" && ");
    return {
      code: `
            if (!(${isObjectCode})) {
                ${comp.callJitErr(this)};
            } else {
                ${childrenCode}
                ${propsCode}
            }
        `,
      type: "S"
    };
  }
  emitPrepareForJson(comp) {
    if (this.isCallable())
      return this.getCallSignature().emitPrepareForJson();
    const children = this.getJitChildren(comp);
    const childrenCode = children.map(__assignType$4((prop) => comp.compilePrepareForJson(prop, "S").code, ["prop", "", 'P"2!"/"'])).filter(Boolean).join(";");
    return { code: childrenCode, type: "S" };
  }
  emitRestoreFromJson(comp) {
    if (this.isCallable())
      return this.getCallSignature().emitRestoreFromJson();
    const children = this.getJitChildren(comp);
    const childrenCode = children.map(__assignType$4((prop) => comp.compileRestoreFromJson(prop, "S").code, ["prop", "", 'P"2!"/"'])).filter(Boolean).join(";");
    return { code: childrenCode, type: "S" };
  }
  emitHasUnknownKeys(comp) {
    const children = this.getJitChildren(comp);
    const allChildren = this.getChildRunTypes().filter(__assignType$4((prop) => !isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const hasIndexProp = children.some(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const parentCode = hasIndexProp ? "" : callCheckUnknownProperties(this, comp, children, false, !this.isPartOfUnion(), allChildren);
    const childrenCode = super.emitHasUnknownKeys(comp).code;
    return { code: [parentCode, childrenCode].filter(Boolean).join(" || "), type: "E" };
  }
  emitUnknownKeyErrors(comp) {
    const children = this.getJitChildren(comp);
    const allChildren = this.getChildRunTypes().filter(__assignType$4((prop) => !isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const hasIndexProp = children.some(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const unknownVar = comp.getLocalVarName("unk", this);
    const keyVar = comp.getLocalVarName("ky", this);
    const unknownValue = hasIndexProp ? void 0 : callCheckUnknownProperties(this, comp, children, true, !this.isPartOfUnion(), allChildren);
    const parentCode = `
            const ${unknownVar} = ${unknownValue};
            if (${unknownVar}) {for (const ${keyVar} of ${unknownVar}) {${comp.callJitErrWithPath("never", keyVar)}}}
        `;
    const childrenCode = super.emitUnknownKeyErrors(comp).code;
    return { code: [unknownValue ? parentCode : "", childrenCode].filter(Boolean).join("\n"), type: "S" };
  }
  emitStripUnknownKeys(comp) {
    const children = this.getJitChildren(comp);
    const unknownVar = comp.getLocalVarName("unk", this);
    const keyVar = comp.getLocalVarName("ky", this);
    const hasIndexProp = children.some(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const unknownValue = hasIndexProp ? void 0 : callCheckUnknownProperties(this, comp, children, true, !this.isPartOfUnion());
    const parentCode = `
            const ${unknownVar} = ${unknownValue};
            if (${unknownVar}) {for (const ${keyVar} of ${unknownVar}){delete ${comp.vλl}[${keyVar}]}}
        `;
    const childrenCode = super.emitStripUnknownKeys(comp).code;
    return { code: [unknownValue ? parentCode : "", childrenCode].filter(Boolean).join("\n"), type: "S" };
  }
  emitUnknownKeysToUndefined(comp) {
    const children = this.getJitChildren(comp);
    const unknownVar = comp.getLocalVarName("unk", this);
    const keyVar = comp.getLocalVarName("ky", this);
    const hasIndexProp = children.some(__assignType$4((prop) => isIndexSignatureRunType(prop), ["prop", "", 'P"2!"/"']));
    const unknownValue = hasIndexProp ? void 0 : callCheckUnknownProperties(this, comp, children, true, !this.isPartOfUnion());
    const parentCode = `
            const ${unknownVar} = ${unknownValue};
            if (${unknownVar}) {for (const ${keyVar} of ${unknownVar}){${comp.vλl}[${keyVar}] = undefined}}
        `;
    const childrenCode = super.emitUnknownKeysToUndefined(comp).code;
    return { code: [unknownValue ? parentCode : "", childrenCode].filter(Boolean).join("\n"), type: "S" };
  }
  // In order to json stringify to work properly optional properties must come first
  getJsonStringifySortedChildren(comp) {
    return this.getJitChildren(comp).toSorted(__assignType$4((a, b) => {
      const aOptional = a instanceof MemberRunType && a.isOptional();
      const bOptional = b instanceof MemberRunType && b.isOptional();
      if (aOptional && !bOptional)
        return -1;
      if (!aOptional && bOptional)
        return 1;
      return 0;
    }, ["a", "b", "", 'P"2!"2""/#']));
  }
  // extra check to prevent empty array passing as object where all properties are optional
  // when this check is disabled empty array will pass as object but fail when checking for properties
  allOptionalCode(comp) {
    const children = this.getJitChildren(comp);
    if (children.length !== 0 && !this.areAllChildrenOptional(children))
      return "";
    const isNotArray = `!Array.isArray(${comp.vλl})`;
    const ifNoNative = `Object.prototype.toString.call(${comp.vλl}) === '[object Object]'`;
    return `(${isNotArray} && ${ifNoNative})`;
  }
  addObjectPropsToContext(comp, jitChildrenRunTypes, allChildrenRuntypes) {
    const children = jitChildrenRunTypes || this.getJitChildren(comp);
    const allChildren = allChildrenRuntypes || this.getChildRunTypes();
    return addObjectPropsToContext(this, comp, children, allChildren);
  }
}
__publicField(InterfaceRunType, "__type", [() => type.__ΩTypeObjectLiteral, "T", () => CollectionRunType, "JitFnCompiler", "comp", () => __ΩInterfaceMember, "getNamedChildren", "isCallable", "getCallSignature", function() {
  return memorize(__assignType$4(() => {
    return this.getChildRunTypes().find(__assignType$4((prop) => prop.src.kind === type.ReflectionKind.callSignature, ["prop", "", 'P"2!"/"']));
  }, [() => CallSignatureRunType, "", 'PPP7!-J/"']));
}, () => __ΩInterfaceMember, "getJitChildren", () => PropertyRunType, "required", () => PropertyRunType, "optional", () => IndexSignatureRunType, "indexSignatures", "splitJitSplitChildren", "isPartOfUnion", "hasIndexSignature", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "emitHasUnknownKeys", "emitUnknownKeyErrors", "emitStripUnknownKeys", "emitUnknownKeysToUndefined", () => MemberRunType, "getJsonStringifySortedChildren", "allOptionalCode", () => BaseRunType, "jitChildrenRunTypes", () => BaseRunType, "allChildrenRuntypes", "addObjectPropsToContext", "InterfaceRunType", `n!c"Pe"!7#P"w$2%n&F0'P)0(!3)>*P"w$2%n+F0,P"w$2%PP7-F4.P7/F40P71F42M03P)04P"w$2%)05P"w$2%"w607P"w82%"w609P"w$2%"w60:P"w$2%"w60;P"w$2%"w60<P"w82%"w60=P"w$2%"w60>P"w$2%"w60?P"w$2%P"7@F0AP"w$2%&0BP"w$2%P7CF2D8P7EF2F8"0G5e!!6"wH`]);
const __ΩObjectPropsContextResult = ["keysName", "allKeysName", "hasNonJitChildren", "jitChildrenNames", "allChildrenNames", "ObjectPropsContextResult", 'P&4!&4")4#&F4$&F4%Mw&y'];
function addObjectPropsToContext(rt, comp, jitChildrenRunTypes, allChildrenRuntypes) {
  const jitArrNames = jitChildrenRunTypes.filter(__assignType$4((prop) => !!prop.src.name, ["prop", "", 'P"2!"/"'])).map(__assignType$4((prop) => prop.src.name, ["prop", "", 'P"2!"/"']));
  const AllArrNames = allChildrenRuntypes == null ? void 0 : allChildrenRuntypes.filter(__assignType$4((prop) => !!prop.src.name, ["prop", "", 'P"2!"/"'])).map(__assignType$4((prop) => prop.src.name, ["prop", "", 'P"2!"/"']));
  const jitChildrenNames = Array.from(new Set(jitArrNames));
  const allChildrenNames = Array.from(new Set(AllArrNames));
  const isSameLength = jitChildrenNames.length === allChildrenNames.length;
  const isSameSet = isSameLength && jitChildrenNames.every(__assignType$4((v) => allChildrenNames.includes(v), ["v", "", 'P"2!"/"']));
  const hasNonJitChildren = !(isSameLength && isSameSet);
  const keysName = `k_${rt.getJitHash(comp.opts)}`;
  const allKeysName = `kA_${rt.getJitHash(comp.opts)}`;
  comp.setContextItem(keysName, `const ${keysName} = ${arrayToLiteral(jitChildrenNames)}`);
  if (hasNonJitChildren)
    comp.setContextItem(allKeysName, `const ${allKeysName} = ${arrayToLiteral(allChildrenNames)}`);
  return {
    keysName,
    allKeysName,
    hasNonJitChildren,
    jitChildrenNames,
    allChildrenNames
  };
}
addObjectPropsToContext.__type = [() => InterfaceRunType, "rt", "JitFnCompiler", "comp", () => BaseRunType, "jitChildrenRunTypes", () => BaseRunType, "allChildrenRuntypes", () => __ΩObjectPropsContextResult, "addObjectPropsToContext", `PP"7!2""w#2$P7%F2&P7'F2(8n)/*`];
function callCheckUnknownProperties(rt, comp, jitChildrenRunTypes, returnKeys, checkObject = true, allChildrenRuntypes) {
  const result = addObjectPropsToContext(rt, comp, jitChildrenRunTypes, allChildrenRuntypes);
  if (result.jitChildrenNames.length === 0 && result.allChildrenNames.length === 0)
    return "";
  const objectCheckCode = checkObject ? [`typeof ${comp.vλl} === 'object'`, `${comp.vλl} !== null`] : [];
  const checkPropName = JitFunctions$1.hasUnknownKeys.runTimeOptions.checkNonJitProps.keyName;
  const optsVarName = getJitFnArgCallVarName(comp, rt, JitFunctions$1.hasUnknownKeys.id, "θpts");
  const conditional = (allChildrenRuntypes == null ? void 0 : allChildrenRuntypes.length) && result.hasNonJitChildren ? `${optsVarName}.${checkPropName} ? ${result.allKeysName} : ${result.keysName}` : result.keysName;
  const getUnknownKeysFn = comp.addPureFunction(cpf_getUnknownKeysFromArray);
  const hasUnknownKeysFn = comp.addPureFunction(cpf_hasUnknownKeysFromArray);
  if (returnKeys)
    return `${getUnknownKeysFn}(${comp.vλl}, ${conditional})`;
  objectCheckCode.push(`${hasUnknownKeysFn}(${comp.vλl}, ${conditional})`);
  const filtered = objectCheckCode.filter(Boolean);
  if (filtered.length > 1)
    return `(${filtered.join(" && ")})`;
  return filtered[0];
}
callCheckUnknownProperties.__type = [() => InterfaceRunType, "rt", "JitFnCompiler", "comp", () => BaseRunType, "jitChildrenRunTypes", "returnKeys", "checkObject", () => BaseRunType, "allChildrenRuntypes", "callCheckUnknownProperties", `PP"7!2""w#2$P7%F2&)2'"2(P7)F2*8&/+`];
class PromiseRunType extends MemberRunType {
  skipJit(comp) {
    return (comp == null ? void 0 : comp.fnID) !== JitFunctions$1.toJSCode.id;
  }
  emitIsType() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitTypeErrors() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitPrepareForJson() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitRestoreFromJson() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  isOptional() {
    return false;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildVarName(comp) {
    return comp.getLocalVarName("p", this);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildLiteral(comp) {
    return this.getChildVarName(comp);
  }
  useArrayAccessor() {
    return false;
  }
}
__publicField(PromiseRunType, "__type", ["TypePromise", () => MemberRunType, "JitFnCompiler", "comp", "skipJit", "JitCode", "emitIsType", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "isOptional", "getChildVarName", "getChildLiteral", "useArrayAccessor", "PromiseRunType", `P"w!7"P"w#2$)0%P"w&0'P"w&0(P"w&0)P"w&0*P)0+P"w#2$P&'J0,P"w#2$P&'J0-P)0.5"w!6"w/`]);
class ObjectRunType extends AtomicRunType {
  emitIsType(comp) {
    return { code: `(typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null)`, type: "E" };
  }
  emitTypeErrors(comp) {
    return { code: `if (!(typeof ${comp.vλl} === 'object' && ${comp.vλl} !== null)) ${comp.callJitErr(this)}`, type: "S" };
  }
}
__publicField(ObjectRunType, "__type", ["TypeAny", "TypeUnknown", () => AtomicRunType, "JitFnCompiler", "comp", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "ObjectRunType", `PP"w!"w"J7#P"w$2%"w&0'P"w(2%"w&0)5P"w!"w"J6"w*`]);
class IntersectionRunType extends InterfaceRunType {
  compileIsType() {
    throw new Error("Intersection validation not supported, should be resolve to other RunTypes");
  }
  compileTypeErrors() {
    throw new Error("Intersection validation not supported, should be resolve to other RunTypes");
  }
  compilePrepareForJson() {
    throw new Error("Intersection serialization not supported, should be resolve to other RunTypes");
  }
  compileRestoreFromJson() {
    throw new Error("Intersection serialization not supported, should be resolve to other RunTypes");
  }
}
__publicField(IntersectionRunType, "__type", [() => type.__ΩTypeIntersection, () => InterfaceRunType, "JitCode", "compileIsType", "compileTypeErrors", "compilePrepareForJson", "compileRestoreFromJson", () => type.__ΩTypeIntersection, "IntersectionRunType", `Pn!7"P"w#0$P"w#0%P"w#0&P"w#0'5n(6"w)`]);
class RestParamsRunType extends ArrayRunType {
  getChildIndex(comp) {
    const parent = this.getParent();
    return parent.getChildIndex(comp);
  }
  startIndex(comp) {
    return this.getChildIndex(comp);
  }
}
__publicField(RestParamsRunType, "__type", ["TypeRest", () => ArrayRunType, "JitFnCompiler", "comp", "getChildIndex", "startIndex", "RestParamsRunType", `P"w!7"P"w#2$'0%P"w#2$'0&5"w!6"w'`]);
function __assignType$3(fn, args) {
  fn.__type = args;
  return fn;
}
class ClassRunType extends InterfaceRunType {
  getClassName() {
    return this.src.classType.name;
  }
  isClassWithEmptyConstructor() {
    const children = this.getChildRunTypes();
    const isEmpty = children.every(__assignType$3((prop) => !isConstructor(prop) || prop.getParameters().getChildRunTypes().length === 0, ["prop", "", 'P"2!"/"']));
    return isEmpty;
  }
  emitRestoreFromJson(comp) {
    const objJit = super.emitRestoreFromJson(comp);
    const desFnVarName = comp.getLocalVarName("desFn", this);
    const classLiteral = toLiteral(this.getClassName());
    const code = `
            ${objJit.code};
            let ${desFnVarName} = utl.${mionRoutes.getJitUtils().getDeserializeFn.name}(${classLiteral});
            if (${desFnVarName}) {${comp.vλl} = ${desFnVarName}(${comp.vλl})}
            else if (${desFnVarName} = utl.${mionRoutes.getJitUtils().getSerializeClass.name}(${classLiteral})) {${comp.vλl} = new ${desFnVarName}(${comp.vλl})}
        `;
    return { code, type: "S" };
  }
}
__publicField(ClassRunType, "__type", [() => type.__ΩTypeClass, () => InterfaceRunType, "getClassName", "isClassWithEmptyConstructor", () => JitFnCompiler, "comp", () => __ΩJitCode, "emitRestoreFromJson", () => type.__ΩTypeClass, "ClassRunType", `Pn!7"P&0#P)0$PP7%2&n'0(5n)6"w*`]);
class GenericMemberRunType extends MemberRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "index", 0);
  }
  getChildIndex() {
    return this.index;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getChildVarName(comp) {
    return this.index;
  }
  getChildLiteral(comp) {
    return this.getChildVarName(comp);
  }
  useArrayAccessor() {
    return true;
  }
  isOptional() {
    return false;
  }
  emitIsType(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileIsType(child, "E");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "E" };
    if (this.isOptional())
      return { code: `${comp.getChildVλl()} === undefined || (${childJit.code})`, type: "E" };
    return childJit;
  }
  emitTypeErrors(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileTypeErrors(child, "S");
    if (!(childJit == null ? void 0 : childJit.code))
      return { code: void 0, type: "S" };
    if (this.isOptional())
      return { code: `if (${comp.getChildVλl()} !== undefined) {${childJit.code}}`, type: "S" };
    return childJit;
  }
  emitPrepareForJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compilePrepareForJson(child, "S");
    if (!(childJit == null ? void 0 : childJit.code) || !child)
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code}` : childJit.code || "";
    if (this.isOptional())
      return { code: `if (${comp.getChildVλl()} !== undefined) {${code}}`, type: "S" };
    return { code, type: "S" };
  }
  emitRestoreFromJson(comp) {
    const child = this.getJitChild(comp);
    const childJit = comp.compileRestoreFromJson(child, "S");
    if (!(childJit == null ? void 0 : childJit.code) || !child)
      return { code: void 0, type: "S" };
    const isExpression = childIsExpression(childJit, child);
    const code = isExpression ? `${comp.getChildVλl()} = ${childJit.code};` : childJit.code || "";
    if (this.isOptional())
      return { code: `if (${comp.getChildVλl()} !== undefined) {${code}}`, type: "S" };
    return { code, type: "S" };
  }
}
__publicField(GenericMemberRunType, "__type", ["T", () => MemberRunType, "index", function() {
  return 0;
}, "getChildIndex", "JitFnCompiler", "comp", "getChildVarName", "getChildLiteral", "useArrayAccessor", "isOptional", "JitCode", "emitIsType", "JitErrorsFnCompiler", "emitTypeErrors", "emitPrepareForJson", "emitRestoreFromJson", "GenericMemberRunType", `b!Pe"!7"'3#>$P"0%P"w&2'P&'J0(P"w&2'"0)P"0*P"0+P"w&2'"w,0-P"w.2'"w,0/P"w&2'"w,00P"w&2'"w,015e!!6"w2`]);
function __assignType$2(fn, args) {
  fn.__type = args;
  return fn;
}
class IterableRunType extends ClassRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "getChildRunTypes", __assignType$2(() => {
      return this.children;
    }, [() => BaseRunType, "", 'PP7!F/"']));
  }
  getIndexVarName(comp) {
    return comp.getLocalVarName("e", this);
  }
  emitIsType(comp) {
    var _a;
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((c) => `if (!(${comp.compileIsType(c, "E").code})) return false`, ["c", "", 'P"2!"/"'])).join(";");
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})) return false;
            for (const ${entry} of ${comp.vλl}) {${childrenCode}} return true;
        `,
      type: "RB"
    };
  }
  emitTypeErrors(comp) {
    var _a;
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((c) => comp.compileTypeErrors(c, "S").code, ["c", "", 'P"2!"/"'])).join(";");
    const index = this.getIndexVarName(comp);
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})){${comp.callJitErr(this)}}
            else {let ${index} = 0;for (const ${entry} of ${comp.vλl}) {${childrenCode}; ${index}++}}
        `,
      type: "S"
    };
  }
  emitPrepareForJson(comp) {
    var _a;
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const resName = comp.getLocalVarName("ml", this);
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((c) => comp.compilePrepareForJson(c, "S").code, ["c", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (!childrenCode)
      return { code: `${comp.vλl} = Array.from(${comp.vλl})`, type: "S" };
    return {
      code: `
            const ${resName} = [];
            for (let ${entry} of ${comp.vλl}) {${childrenCode} ${resName}.push(${entry})}
            ${comp.vλl} = ${resName};
        `,
      type: "S"
    };
  }
  emitRestoreFromJson(comp) {
    var _a;
    const children = this.getJitChildren(comp);
    if (!children.length)
      return { code: `${comp.vλl} = new Map(${comp.vλl})`, type: "S" };
    const index = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const childrenCode = children.map(__assignType$2((c) => comp.compileRestoreFromJson(c, "S").code, ["c", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (!childrenCode)
      return { code: `${comp.vλl} = new ${this.constructorName}(${comp.vλl})`, type: "S" };
    return {
      code: `
            for (let ${index} = 0; ${index} < ${comp.vλl}.length; ${index}++) {${childrenCode}}
            ${comp.vλl} = new ${this.constructorName}(${comp.vλl})
        `,
      type: "S"
    };
  }
  // TODO: Implement the following methods, should just call same compile method for children, look into to array run type
  emitHasUnknownKeys(comp) {
    var _a;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((child) => {
      const itemJit = comp.compileHasUnknownKeys(child, "E");
      return (itemJit == null ? void 0 : itemJit.code) ? `if (${itemJit.code}) return true;` : "";
    }, ["child", "", 'P"2!"/"'])).filter(Boolean).join("");
    if (!childrenCode)
      return { code: "return false", type: "RB" };
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})) return false;
            for (const ${entry} of ${comp.vλl}) {${childrenCode}} return false;
        `,
      type: "RB"
    };
  }
  emitUnknownKeyErrors(comp) {
    var _a;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((child) => comp.compileUnknownKeyErrors(child, "S").code, ["child", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (!childrenCode)
      return { code: void 0, type: "S" };
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    const index = this.getIndexVarName(comp);
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})) return;
            let ${index} = 0; for (const ${entry} of ${comp.vλl}) {${childrenCode}; ${index}++}
        `,
      type: "S"
    };
  }
  emitStripUnknownKeys(comp) {
    var _a;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((child) => comp.compileStripUnknownKeys(child, "S").code, ["child", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (!childrenCode)
      return { code: void 0, type: "S" };
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})) return;
            for (const ${entry} of ${comp.vλl}) {${childrenCode}}
        `,
      type: "S"
    };
  }
  emitUnknownKeysToUndefined(comp) {
    var _a;
    const childrenCode = this.getJitChildren(comp).map(__assignType$2((child) => comp.compileUnknownKeysToUndefined(child, "S").code, ["child", "", 'P"2!"/"'])).filter(Boolean).join(";");
    if (!childrenCode)
      return { code: void 0, type: "S" };
    const entry = ((_a = this.getCustomVλl(comp)) == null ? void 0 : _a.vλl) || comp.vλl;
    return {
      code: `
            if (!(${comp.vλl} instanceof ${this.constructorName})) return;
            for (const ${entry} of ${comp.vλl}) {${childrenCode}}
        `,
      type: "S"
    };
  }
}
__publicField(IterableRunType, "__type", [() => ClassRunType, () => BaseRunType, "children", "constructorName", () => JitFnCompiler, "comp", "getIndexVarName", "getChildRunTypes", function() {
  return __assignType$2(() => {
    return this.children;
  }, [() => BaseRunType, "", 'PP7!F/"']);
}, () => JitFnCompiler, "JitCode", "emitIsType", () => JitErrorsFnCompiler, "emitTypeErrors", () => JitFnCompiler, "emitPrepareForJson", () => JitFnCompiler, "emitRestoreFromJson", () => JitFnCompiler, "emitHasUnknownKeys", () => JitErrorsFnCompiler, "emitUnknownKeyErrors", () => JitFnCompiler, "emitStripUnknownKeys", () => JitFnCompiler, "emitUnknownKeysToUndefined", "IterableRunType", `P7!P7"F3#=&3$=PP7%2&&0'!3(>)PP7*2&"w+0,PP7-2&"w+0.PP7/2&"w+00PP712&"w+02PP732&"w+04PP752&"w+06PP772&"w+08PP792&"w+0:5w;`]);
class MapRunType extends IterableRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "keyRT", new MapKeyRunType());
    __publicField(this, "valueRT", new MapValueRunType());
    __publicField(this, "children", [this.keyRT, this.valueRT]);
    __publicField(this, "constructorName", "Map");
  }
  onCreated(src) {
    const types = src.arguments;
    if (!types || types.length !== 2)
      throw new Error(`Map expects 2 type arguments: ie: Map<string, number>`);
    super.onCreated(src);
    this.keyRT.onCreated({
      kind: type.ReflectionKind.parameter,
      parent: src,
      type: types[0],
      subKind: ReflectionSubKind$1.mapKey
    });
    this.valueRT.onCreated({
      kind: type.ReflectionKind.parameter,
      parent: src,
      type: types[1],
      subKind: ReflectionSubKind$1.mapValue
    });
  }
  getCustomVλl(comp) {
    if (comp.fnID === JitFunctions$1.restoreFromJson.id)
      return { vλl: comp.getLocalVarName("it", this), isStandalone: false, useArrayAccessor: true };
    return { vλl: comp.getLocalVarName("it", this), isStandalone: true };
  }
  getMapKeyVλl(comp) {
    return comp.getLocalVarName("mpk", this);
  }
  getMapValueVλl(comp) {
    return comp.getLocalVarName("mpV", this);
  }
}
__publicField(MapRunType, "__type", [() => IterableRunType, "keyRT", function() {
  return new MapKeyRunType();
}, "valueRT", function() {
  return new MapValueRunType();
}, "children", function() {
  return [this.keyRT, this.valueRT];
}, "constructorName", function() {
  return "Map";
}, "SrcType", "src", "onCreated", "JitFnCompiler", "comp", "getCustomVλl", "getMapKeyVλl", "getMapValueVλl", "MapRunType", `P7!!3">#!3$>%!3&>'&3(>)P"w*2+$0,P"w-2."0/P"w-2."00P"w-2."015w2`]);
class MapKeyRunType extends GenericMemberRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "index", 0);
  }
  getStaticPathLiteral(comp) {
    const parent = this.getParent();
    const custom = parent.getCustomVλl(comp);
    const safeKeyFn = comp.addPureFunction(cpf_safeIterableKey);
    return `{key:${safeKeyFn}(${custom.vλl}[0]),index:${parent.getIndexVarName(comp)},failed:'mapKey'}`;
  }
  getCustomVλl(comp) {
    if (comp.fnID === JitFunctions$1.fromBinary.id)
      return {
        vλl: this.getParent().getMapKeyVλl(comp),
        isStandalone: true,
        useArrayAccessor: false
      };
    return void 0;
  }
}
__publicField(MapKeyRunType, "__type", [() => GenericMemberRunType, "index", function() {
  return 0;
}, "JitFnCompiler", "comp", "getStaticPathLiteral", "getCustomVλl", "MapKeyRunType", `P"7!'3">#P"w$2%P&'J0&P"w$2%"0'5"6"w(`]);
class MapValueRunType extends GenericMemberRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "index", 1);
  }
  getStaticPathLiteral(comp) {
    const parent = this.getParent();
    const custom = parent.getCustomVλl(comp);
    const safeKeyFn = comp.addPureFunction(cpf_safeIterableKey);
    return `{key:${safeKeyFn}(${custom.vλl}[0]),index:${parent.getIndexVarName(comp)},failed:'mapVal'}`;
  }
  getCustomVλl(comp) {
    if (comp.fnID === JitFunctions$1.fromBinary.id)
      return {
        vλl: this.getParent().getMapValueVλl(comp),
        isStandalone: true,
        useArrayAccessor: false
      };
    return void 0;
  }
}
__publicField(MapValueRunType, "__type", [() => GenericMemberRunType, "index", function() {
  return 1;
}, "JitFnCompiler", "comp", "getStaticPathLiteral", "getCustomVλl", "MapValueRunType", `P"7!'3">#P"w$2%P&'J0&P"w$2%"0'5"6"w(`]);
class SetRunType extends IterableRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "keyRT", new SetKeyRunType());
    __publicField(this, "children", [this.keyRT]);
    __publicField(this, "constructorName", "Set");
  }
  onCreated(src) {
    const types = src.arguments;
    if (!types || types.length !== 1)
      throw new Error(`Set expects 1 type argument: ie: Set<number>`);
    super.onCreated(src);
    this.keyRT.onCreated({
      kind: type.ReflectionKind.parameter,
      parent: src,
      type: types[0],
      subKind: ReflectionSubKind$1.setItem
    });
  }
  getCustomVλl(comp) {
    if (comp.fnID === JitFunctions$1.restoreFromJson.id)
      return { vλl: comp.getLocalVarName("it", this), isStandalone: false, useArrayAccessor: true };
    return { vλl: comp.getLocalVarName("it", this), isStandalone: true };
  }
}
__publicField(SetRunType, "__type", [() => IterableRunType, "keyRT", function() {
  return new SetKeyRunType();
}, "children", function() {
  return [this.keyRT];
}, "constructorName", function() {
  return "Set";
}, "SrcType", "src", "onCreated", "JitFnCompiler", "comp", "getCustomVλl", "SetRunType", `P7!!3">#!3$>%&3&>'P"w(2)$0*P"w+2,"0-5w.`]);
class SetKeyRunType extends GenericMemberRunType {
  constructor() {
    super(...arguments);
    __publicField(this, "index", 0);
  }
  skipSettingAccessor() {
    return true;
  }
  getStaticPathLiteral(comp) {
    const parent = this.getParent();
    const custom = parent.getCustomVλl(comp);
    const safeKeyFn = comp.addPureFunction(cpf_safeIterableKey);
    return `{key:${safeKeyFn}(${custom.vλl}),index:${parent.getIndexVarName(comp)}}`;
  }
  getCustomVλl(comp) {
    if (comp.fnID === JitFunctions$1.fromBinary.id)
      return { vλl: comp.getLocalVarName("sK", this), isStandalone: true, useArrayAccessor: false };
    return void 0;
  }
}
__publicField(SetKeyRunType, "__type", [() => GenericMemberRunType, "index", function() {
  return 0;
}, "skipSettingAccessor", "JitFnCompiler", "comp", "getStaticPathLiteral", "getCustomVλl", "SetKeyRunType", `P"7!'3">#P"0$P"w%2&&0'P"w%2&"0(5"6"w)`]);
class NonSerializableRunType extends InterfaceRunType {
  skipJit() {
    return false;
  }
  emitIsType() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitTypeErrors() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitPrepareForJson() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitRestoreFromJson() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitHasUnknownKeys() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitUnknownKeyErrors() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitStripUnknownKeys() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
  emitUnknownKeysToUndefined() {
    throw new Error(`Jit compilation disabled for Non Serializable types.`);
  }
}
__publicField(NonSerializableRunType, "__type", ["TypeObjectLiteral", "TypeClass", () => InterfaceRunType, "skipJit", () => __ΩJitCode, "emitIsType", () => __ΩJitCode, "emitTypeErrors", () => __ΩJitCode, "emitPrepareForJson", () => __ΩJitCode, "emitRestoreFromJson", () => __ΩJitCode, "emitHasUnknownKeys", () => __ΩJitCode, "emitUnknownKeyErrors", () => __ΩJitCode, "emitStripUnknownKeys", () => __ΩJitCode, "emitUnknownKeysToUndefined", "NonSerializableRunType", `PP"w!"w"J7#P"0$Pn%0&Pn'0(Pn)0*Pn+0,Pn-0.Pn/00Pn102Pn3045P"w!"w"J6"w5`]);
function __assignType$1(fn, args) {
  fn.__type = args;
  return fn;
}
function runType(type$1 = ((_a) => (_a = runType.Ω) == null ? void 0 : _a[0])()) {
  runType.Ω = void 0;
  const start = Date.now();
  const src = type.resolveReceiveType(type$1);
  const took0 = Date.now() - start;
  createRunTypes(src);
  const took1 = Date.now() - start;
  const diff = took1 - took0;
  if (diff > 60)
    console.warn(`RunType overhead is very long: ${diff}ms for ${type.stringifyType(src)}`);
  return src._rt;
}
runType.__type = [() => type.__ΩReceiveType, "type", "RunType", "runType", 'P"o!"2"8"w#/$'];
function reflectFunction(fn) {
  const src = type.reflect(fn);
  runType(src);
  return src._rt;
}
reflectFunction.__type = ["fn", () => FunctionRunType, "reflectFunction", 'P"2!P7"/#'];
function createRunTypes(src) {
  var _a, _b, _c, _d, _e, _f;
  mionRoutes.registerErrorDeserializers();
  const stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current || current._rt)
      continue;
    try {
      createRunType(current);
    } catch (error) {
      const typesStackMessage = "\nTypes Stack: " + stack.map(__assignType$1((t) => t.typeName || t.kind, ["t", "", 'P"2!"/"'])).join(", ");
      error.message += typesStackMessage;
      throw error;
    }
    if (hasType(current))
      stack.push(current.type);
    if (hasReturn(current))
      stack.push(current.return);
    if (hasIndexType(current))
      stack.push(current.indexType);
    if (current.origin)
      stack.push(current.origin);
    if ((_a = current.indexAccessOrigin) == null ? void 0 : _a.index)
      stack.push((_b = current.indexAccessOrigin) == null ? void 0 : _b.index);
    if ((_c = current.indexAccessOrigin) == null ? void 0 : _c.container)
      stack.push((_d = current.indexAccessOrigin) == null ? void 0 : _d.container);
    if (hasTypes(current))
      pushToStack(current.types, stack);
    if (hasParameters(current))
      pushToStack(current.parameters, stack);
    if (hasArguments(current))
      pushToStack(current.arguments, stack);
    if (hasExtendsArguments(current))
      pushToStack(current.extendsArguments, stack);
    if (hasImplements(current))
      pushToStack(current.implements, stack);
    if (current.typeArguments)
      pushToStack(current.typeArguments, stack);
    if (current.decorators)
      pushToStack(current.decorators, stack);
    if (current.scheduleDecorators)
      pushToStack(current.scheduleDecorators, stack);
    if (current.annotations) {
      const annotations = type.typeAnnotation.getAnnotations(current);
      for (const annotation of annotations)
        stack.push(annotation.options);
    }
    (_e = current.originTypes) == null ? void 0 : _e.forEach(__assignType$1((ot) => {
      if (ot.typeArguments)
        pushToStack(ot.typeArguments, stack);
    }, ["ot", "", 'P"2!"/"']));
    if (current.parent && !((_f = current.parent) == null ? void 0 : _f._rt))
      stack.push(current.parent);
  }
}
createRunTypes.__type = ["SrcType", "src", "createRunTypes", 'P"w!2"$/#'];
function pushToStack(subTypes, stack) {
  if (Array.isArray(subTypes))
    stack.push(...subTypes);
}
pushToStack.__type = ["Type", "subTypes", "stack", "pushToStack", 'P"w!F2""w!F2#"/$'];
function createRunType(deepkitType) {
  const existingType = deepkitType._rt;
  if (existingType)
    return existingType;
  let rt;
  switch (deepkitType.kind) {
    // ###################### ATOMIC RUNTYPES ######################
    // Primitive types and other atomic types that don't contain other types
    case type.ReflectionKind.any:
      rt = new AnyRunType();
      break;
    case type.ReflectionKind.bigint:
      rt = new BigIntRunType();
      break;
    case type.ReflectionKind.boolean:
      rt = new BooleanRunType();
      break;
    case type.ReflectionKind.enum:
      rt = new EnumRunType();
      break;
    case type.ReflectionKind.enumMember:
      rt = new EnumMemberRunType();
      break;
    case type.ReflectionKind.literal:
      rt = new LiteralRunType();
      break;
    case type.ReflectionKind.never:
      rt = isNativeUtilityStringTypes(deepkitType) ? new StringRunType() : new NeverRunType();
      break;
    case type.ReflectionKind.null:
      rt = new NullRunType();
      break;
    case type.ReflectionKind.number:
      rt = new NumberRunType();
      break;
    case type.ReflectionKind.object:
      rt = new ObjectRunType();
      break;
    case type.ReflectionKind.regexp:
      rt = new RegexpRunType();
      break;
    case type.ReflectionKind.string:
      rt = new StringRunType();
      break;
    case type.ReflectionKind.symbol:
      rt = new SymbolRunType();
      break;
    case type.ReflectionKind.templateLiteral:
      throw new Error("Template Literals are resolved by the compiler to Literals ie: const tl = `${string}World`. Template literal types are not supported. ie type TL = `${string}World`");
    case type.ReflectionKind.undefined:
      rt = new UndefinedRunType();
      break;
    case type.ReflectionKind.unknown:
      rt = new UnknownRunType();
      break;
    case type.ReflectionKind.void:
      rt = new VoidRunType();
      break;
    // ###################### MEMBER RUNTYPES ######################
    // Types that represent members of collections or other structures
    case type.ReflectionKind.array:
      rt = new ArrayRunType();
      break;
    case type.ReflectionKind.callSignature:
      rt = new CallSignatureRunType();
      break;
    case type.ReflectionKind.function:
      if (deepkitType.subKind === ReflectionSubKind$1.params) {
        rt = new FunctionParamsRunType();
      } else {
        const frt = new FunctionRunType();
        frt.parameterRunTypes.src = deepkitType;
        rt = frt;
      }
      break;
    case type.ReflectionKind.indexSignature:
      rt = new IndexSignatureRunType();
      break;
    case type.ReflectionKind.method:
      rt = new MethodRunType();
      break;
    case type.ReflectionKind.methodSignature:
      rt = new MethodSignatureRunType();
      break;
    case type.ReflectionKind.parameter:
      rt = new ParameterRunType();
      break;
    case type.ReflectionKind.property:
    case type.ReflectionKind.propertySignature:
      rt = new PropertyRunType();
      break;
    case type.ReflectionKind.rest:
      rt = new RestParamsRunType();
      break;
    case type.ReflectionKind.tupleMember:
      rt = new TupleMemberRunType();
      break;
    case type.ReflectionKind.promise:
      rt = new PromiseRunType();
      break;
    // ###################### COLLECTION RUNTYPES ######################
    case type.ReflectionKind.objectLiteral:
      if (isNonSerializableObject(deepkitType)) {
        rt = new NonSerializableRunType();
      } else {
        rt = new InterfaceRunType();
      }
      break;
    case type.ReflectionKind.class:
      rt = initClassRunType(deepkitType);
      break;
    // Types that contain other types as members
    case type.ReflectionKind.infer:
      throw new Error("Infer type not supported, ie: type MyType =Type<T> = T extends (...args: any[]) => infer R ? R : any; https://www.typescriptlang.org/docs/handbook/2/conditional-types.html");
    case type.ReflectionKind.intersection:
      rt = new IntersectionRunType();
      break;
    case type.ReflectionKind.tuple:
      rt = new TupleRunType();
      break;
    case type.ReflectionKind.typeParameter:
      throw new Error('TypeParameter not implemented. Type parameters are the generic placeholders in type definitions (e.g., T in Array<T>, ErrType in TypedError<ErrType>). Type parameters are typically resolved during type instantiation and should not appear in runtime type checking.This error is typically caused by a generic type missing type arguments, e.g.: TypedError instead of TypedError<"my-error">.');
    // rType = resolveTypeParameter(deepkitType, opts, mapper);
    case type.ReflectionKind.union:
      rt = new UnionRunType();
      break;
    default:
      rt = new AnyRunType();
      break;
  }
  rt.onCreated(deepkitType);
  return rt;
}
createRunType.__type = ["Mutable", "deepkitType", "RunType", "createRunType", 'P"w!2""w#/$'];
function initClassRunType(src) {
  switch (src.classType) {
    case Date:
      src.subKind = ReflectionSubKind$1.date;
      return new DateRunType();
    case Map:
      src.subKind = ReflectionSubKind$1.map;
      return new MapRunType();
    case Set:
      src.subKind = ReflectionSubKind$1.set;
      return new SetRunType();
    default:
      if (isNonSerializableClass(src)) {
        src.subKind = ReflectionSubKind$1.nonSerializable;
        return new NonSerializableRunType();
      }
      return new ClassRunType();
  }
}
initClassRunType.__type = ["TypeClass", "subKind", "src", "BaseRunType", "initClassRunType", `PP"w!P'4"8MK2#"w$/%`];
const __ΩPartial = ["T", "Partial", 'l+e#!e"!fRb!Pde"!gN#"w"y'];
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
async function createIsTypeFn(opts, type2 = ((_b) => (_b = createIsTypeFn.Ω) == null ? void 0 : _b[0])()) {
  createIsTypeFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.isType, opts);
}
createIsTypeFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩIsTypeFn, "createIsTypeFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createTypeErrorsFn(opts, type2 = ((_c) => (_c = createTypeErrorsFn.Ω) == null ? void 0 : _c[0])()) {
  createTypeErrorsFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.typeErrors, opts);
}
createTypeErrorsFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩTypeErrorsFn, "createTypeErrorsFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createPrepareForJsonFn(opts, type2 = ((_d) => (_d = createPrepareForJsonFn.Ω) == null ? void 0 : _d[0])()) {
  createPrepareForJsonFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.prepareForJson, opts);
}
createPrepareForJsonFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩPrepareForJsonFn, "createPrepareForJsonFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createRestoreFromJsonFn(opts, type2 = ((_e) => (_e = createRestoreFromJsonFn.Ω) == null ? void 0 : _e[0])()) {
  createRestoreFromJsonFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.restoreFromJson, opts);
}
createRestoreFromJsonFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩRestoreFromJsonFn, "createRestoreFromJsonFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createStringifyJsonFn(opts, type2 = ((_f) => (_f = createStringifyJsonFn.Ω) == null ? void 0 : _f[0])()) {
  createStringifyJsonFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.stringifyJson, opts);
}
createStringifyJsonFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩJsonStringifyFn, "createStringifyJsonFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createToBinaryFn(opts, type2 = ((_g) => (_g = createToBinaryFn.Ω) == null ? void 0 : _g[0])()) {
  createToBinaryFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.toBinary, opts);
}
createToBinaryFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩToBinaryFn, "createToBinaryFn", 'Pn!2"8"o#"2$8n%`/&'];
async function createFromBinaryFn(opts, type2 = ((_h) => (_h = createFromBinaryFn.Ω) == null ? void 0 : _h[0])()) {
  createFromBinaryFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.fromBinary, opts);
}
createFromBinaryFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩFromBinaryFn, "createFromBinaryFn", 'Pn!2"8"o#"2$8n%`/&'];
function createToJavascriptFn(opts, type2 = ((_i) => (_i = createToJavascriptFn.Ω) == null ? void 0 : _i[0])()) {
  createToJavascriptFn.Ω = void 0;
  const rt = runType(type2);
  return rt.createJitFunction(JitFunctions$1.toJSCode, opts);
}
createToJavascriptFn.__type = [() => __ΩRunTypeOptions, "opts", () => type.__ΩReceiveType, "type", () => mionRoutes.__ΩToCodeFn, "createToJavascriptFn", 'Pn!2"8"o#"2$8n%/&'];
async function createMockTypeFn(type2 = ((_j) => (_j = createMockTypeFn.Ω) == null ? void 0 : _j[0])()) {
  createMockTypeFn.Ω = void 0;
  const rt = runType(type2);
  await registerJitFunctionCompiler(JitFunctions$1.mock);
  return __assignType((opts) => rt.mockType(opts), [() => __ΩPartial, () => __ΩRunTypeOptions, "opts", "", 'Pn"o!"2#8"/$']);
}
createMockTypeFn.__type = [() => type.__ΩReceiveType, "type", () => __ΩPartial, () => __ΩRunTypeOptions, "opts", "", "createMockTypeFn", 'P"o!"2"8Pn$o#"2%8"/&`/\''];
exports.AtomicRunType = AtomicRunType;
exports.BaseFnCompiler = BaseFnCompiler;
exports.BaseRunType = BaseRunType;
exports.ClassRunType = ClassRunType;
exports.CodeTypes = CodeTypes;
exports.CollectionRunType = CollectionRunType;
exports.IndexSignatureRunType = IndexSignatureRunType;
exports.JIT_STACK_TRACE_MESSAGE = JIT_STACK_TRACE_MESSAGE;
exports.JitErrorsFnCompiler = JitErrorsFnCompiler;
exports.JitFnCompiler = JitFnCompiler;
exports.JitFunctions = JitFunctions$1;
exports.MAX_UNION_ITEMS = MAX_UNION_ITEMS;
exports.MemberRunType = MemberRunType;
exports.MockJitCompiler = MockJitCompiler;
exports.NonSerializableRunType = NonSerializableRunType;
exports.ReflectionKindName = ReflectionKindName;
exports.ReflectionSubKind = ReflectionSubKind$1;
exports.ReflectionSubNames = ReflectionSubNames;
exports.__ΩAnyClass = __ΩAnyClass;
exports.__ΩAnyFunction = __ΩAnyFunction;
exports.__ΩAnyKindName = __ΩAnyKindName;
exports.__ΩAnyParameterListRunType = __ΩAnyParameterListRunType;
exports.__ΩCodeType = __ΩCodeType;
exports.__ΩCustomVλl = __ΩCustomVλl;
exports.__ΩDKAnnotation = __ΩDKAnnotation;
exports.__ΩDeepPartial = __ΩDeepPartial;
exports.__ΩDeepRequired = __ΩDeepRequired;
exports.__ΩFormatAnnotation = __ΩFormatAnnotation;
exports.__ΩJitCode = __ΩJitCode;
exports.__ΩJitCompilerOpts = __ΩJitCompilerOpts;
exports.__ΩJitFn = __ΩJitFn;
exports.__ΩJitFnID = __ΩJitFnID;
exports.__ΩJitFnSettings = __ΩJitFnSettings;
exports.__ΩMockOperation = __ΩMockOperation;
exports.__ΩMockOptions = __ΩMockOptions;
exports.__ΩMutable = __ΩMutable;
exports.__ΩPartialRunTypeOptions = __ΩPartialRunTypeOptions;
exports.__ΩRunType = __ΩRunType;
exports.__ΩRunTypeAnnotation = __ΩRunTypeAnnotation;
exports.__ΩRunTypeChildAccessor = __ΩRunTypeChildAccessor;
exports.__ΩRunTypeFamily = __ΩRunTypeFamily;
exports.__ΩRunTypeOptions = __ΩRunTypeOptions;
exports.__ΩRunTypeVisitor = __ΩRunTypeVisitor;
exports.__ΩSrcCollection = __ΩSrcCollection;
exports.__ΩSrcMember = __ΩSrcMember;
exports.__ΩSrcType = __ΩSrcType;
exports.__ΩStrNumber = __ΩStrNumber;
exports.__ΩSubKind = __ΩSubKind;
exports.anyValuesList = anyValuesList;
exports.computeDeepkitFormatID = computeDeepkitFormatID;
exports.cpf_asJSONString = cpf_asJSONString;
exports.cpf_formatErr = cpf_formatErr;
exports.cpf_getUnknownKeysFromArray = cpf_getUnknownKeysFromArray;
exports.cpf_hasUnknownKeysFromArray = cpf_hasUnknownKeysFromArray;
exports.cpf_newRunTypeErr = cpf_newRunTypeErr;
exports.cpf_safeIterableKey = cpf_safeIterableKey;
exports.cpf_sanitizeCompiledFn = cpf_sanitizeCompiledFn;
exports.createFromBinaryFn = createFromBinaryFn;
exports.createIsTypeFn = createIsTypeFn;
exports.createJitCompiler = createJitCompiler;
exports.createMockTypeFn = createMockTypeFn;
exports.createPrepareForJsonFn = createPrepareForJsonFn;
exports.createRestoreFromJsonFn = createRestoreFromJsonFn;
exports.createStringifyJsonFn = createStringifyJsonFn;
exports.createToBinaryFn = createToBinaryFn;
exports.createToJavascriptFn = createToJavascriptFn;
exports.createTypeErrorsFn = createTypeErrorsFn;
exports.createTypeId = createTypeId;
exports.defaultIgnoreFormatProps = defaultIgnoreFormatProps;
exports.defaultMockOptions = defaultMockOptions;
exports.dependenciesToLiteral = dependenciesToLiteral;
exports.emailLocalPartSymbols = emailLocalPartSymbols;
exports.getFormatAnnotation = getFormatAnnotation;
exports.getFormatterFromCache = getFormatterFromCache;
exports.getFormatterHash = getFormatterHash;
exports.getFormatterKey = getFormatterKey;
exports.getFormatterParams = getFormatterParams;
exports.getJITFnName = getJITFnName;
exports.getJitFnSettings = getJitFnSettings;
exports.getJitFunctionCompiler = getJitFunctionCompiler;
exports.getReflectionName = getReflectionName;
exports.getRunTypeFormat = getRunTypeFormat;
exports.getRunTypeTransformer = getRunTypeTransformer;
exports.getToLiteralFn = getToLiteralFn;
exports.hasArguments = hasArguments;
exports.hasExtends = hasExtends;
exports.hasExtendsArguments = hasExtendsArguments;
exports.hasImplements = hasImplements;
exports.hasIndexType = hasIndexType;
exports.hasMembers = hasMembers;
exports.hasParameters = hasParameters;
exports.hasReturn = hasReturn;
exports.hasType = hasType;
exports.hasTypeArguments = hasTypeArguments;
exports.hasTypeParameters = hasTypeParameters;
exports.hasTypes = hasTypes;
exports.initFormatAnnotations = initFormatAnnotations;
exports.isAnyFunctionRunType = isAnyFunctionRunType;
exports.isAnyRunType = isAnyRunType;
exports.isArrayRunType = isArrayRunType;
exports.isAtomicRunType = isAtomicRunType;
exports.isBigIntRunType = isBigIntRunType;
exports.isBooleanRunType = isBooleanRunType;
exports.isCallSignatureRunType = isCallSignatureRunType;
exports.isChildAccessorType = isChildAccessorType;
exports.isClassRunType = isClassRunType;
exports.isCollectionRunType = isCollectionRunType;
exports.isConstructor = isConstructor;
exports.isDateRunType = isDateRunType;
exports.isEnumMemberRunType = isEnumMemberRunType;
exports.isEnumRunType = isEnumRunType;
exports.isFormatParamMeta = isFormatParamMeta;
exports.isFunctionParamsRunType = isFunctionParamsRunType;
exports.isFunctionRunType = isFunctionRunType;
exports.isIndexSignatureRunType = isIndexSignatureRunType;
exports.isInterfaceRunType = isInterfaceRunType;
exports.isIntersectionRunType = isIntersectionRunType;
exports.isJitErrorsCompiler = isJitErrorsCompiler;
exports.isLiteralRunType = isLiteralRunType;
exports.isMemberRunType = isMemberRunType;
exports.isMethodSignatureRunType = isMethodSignatureRunType;
exports.isNativeUtilityStringTypes = isNativeUtilityStringTypes;
exports.isNeverRunType = isNeverRunType;
exports.isNonSerializableClass = isNonSerializableClass;
exports.isNonSerializableObject = isNonSerializableObject;
exports.isNullRunType = isNullRunType;
exports.isNumberRunType = isNumberRunType;
exports.isObjectLiteralRunType = isObjectLiteralRunType;
exports.isObjectRunType = isObjectRunType;
exports.isParameterRunType = isParameterRunType;
exports.isPromiseRunType = isPromiseRunType;
exports.isPropertyRunType = isPropertyRunType;
exports.isPropertySignatureRunType = isPropertySignatureRunType;
exports.isRegexpRunType = isRegexpRunType;
exports.isRunType = isRunType;
exports.isStringRunType = isStringRunType;
exports.isSymbolRunType = isSymbolRunType;
exports.isTupleMemberRunType = isTupleMemberRunType;
exports.isTupleRunType = isTupleRunType;
exports.isUndefinedRunType = isUndefinedRunType;
exports.isUnionRunType = isUnionRunType;
exports.isUnknownRunType = isUnknownRunType;
exports.isVoidRunType = isVoidRunType;
exports.jitArgs = jitArgs;
exports.jitArgsWithOptions = jitArgsWithOptions;
exports.jitBinaryDeserializerArgs = jitBinaryDeserializerArgs;
exports.jitBinarySerializerArgs = jitBinarySerializerArgs;
exports.jitDefaultArgs = jitDefaultArgs;
exports.jitDefaultArgsWithOptions = jitDefaultArgsWithOptions;
exports.jitDefaultBinaryDeserializerArgs = jitDefaultBinaryDeserializerArgs;
exports.jitDefaultBinarySerializerArgs = jitDefaultBinarySerializerArgs;
exports.jitDefaultErrorArgs = jitDefaultErrorArgs;
exports.jitErrorArgs = jitErrorArgs;
exports.jitFunctionList = jitFunctionList;
exports.jitFunctionsById = jitFunctionsById;
exports.jitSerializationFunctions = jitSerializationFunctions;
exports.jitValidationFunctions = jitValidationFunctions;
exports.maxStackErrorMessage = maxStackErrorMessage;
exports.mockObjectList = mockObjectList;
exports.mockRegExpsList = mockRegExpsList;
exports.nativeUtilityStringTypes = nativeUtilityStringTypes;
exports.nonSerializableClasses = nonSerializableClasses;
exports.nonSerializableGlobals = nonSerializableGlobals;
exports.paramsToLiteral = paramsToLiteral;
exports.printClosure = printClosure;
exports.reflectFunction = reflectFunction;
exports.registerFormatter = registerFormatter;
exports.registerJitFunctionCompiler = registerJitFunctionCompiler;
exports.runType = runType;
exports.stringCharSet = stringCharSet;
exports.validPropertyNameRegExp = validPropertyNameRegExp;
//# sourceMappingURL=createRunTypeFunctions-CA6dDdr7.js.map
