"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const createRunTypeFunctions = require("./createRunTypeFunctions-CYxYNttS.js");
const type = require("@deepkit/type");
const mionRoutes = require("./mionRoutes-CtbFi3fe.js");
const mockType = require("./mockType-DZ6Y0CXz.js");
function getRunTypeAnnotations(rt) {
  const annotations = type.typeAnnotation.getAnnotations(rt.src);
  return annotations.map((a) => {
    const annotation = {
      name: a.name,
      options: a.options._rt
    };
    return annotation;
  });
}
function getParsedAnnotationOptions(rt) {
  return getRunTypeAnnotations(rt).map((a) => type.typeAnnotation.getOption(rt.src, a.name));
}
function getTypeToObject(rt) {
  return type.typeToObject(rt.src);
}
class BaseRunTypeFormat {
  /**
   * The parentPath is the path to the params in the parent's params Formatter.
   * ie: if dateTime is the parent of the current formatter and params are {date: {format: 'ISO'}} then the child path will be ['date']
   */
  constructor(parentPath) {
    /** The namespace for pure functions used by this formatter. Defaults to 'mionFormats'. */
    __publicField(this, "namespace", "mionFormats");
    __publicField(this, "rootFormatName", "");
    /** Params from parent formatter */
    __publicField(this, "paramsFromParent");
    /**
     * When set this in the path to the params in the parent's params object.
     * ie: if dateTime is the parent of the current formatter and params are {date: {format: 'ISO'}} then the child path will be ['date']
     */
    __publicField(this, "parentPath");
    /** List of params that will be excluded from jit code */
    __publicField(this, "extraPathLiteral");
    this.parentPath = parentPath;
  }
  /**
   * The jit code for the formatter can be embedded together with the jit code for the type itself.
   * but sometimes is better to create a separate function for code to be reused.
   * This method is used to determine if the formatter code can be embedded or not.
   */
  canEmbedFormatterCode(_fnId, rt, _params) {
    if (rt.src.kind === type.ReflectionKind.number) return true;
    const paramsToString = rt.getFormatTypeID() || "";
    return paramsToString.length < 300;
  }
  pushContext(paramsFromParent) {
    this.paramsFromParent = paramsFromParent;
  }
  popContext() {
    this.paramsFromParent = void 0;
  }
  isRootFormat() {
    var _a;
    return !((_a = this.parentPath) == null ? void 0 : _a.length);
  }
  getFormatNestLevel() {
    var _a;
    return ((_a = this.parentPath) == null ? void 0 : _a.length) || 0;
  }
  getParams(rt) {
    if (this.paramsFromParent) return this.paramsFromParent;
    const params = createRunTypeFunctions.getFormatterParams(rt, this.name);
    return params;
  }
  getFormatName() {
    return this.rootFormatName || this.name;
  }
  /** Returns the path to the params in the parent's params object */
  getFormatPath(paramName) {
    if (!paramName && this.parentPath) return [...this.parentPath];
    if (!paramName) return [];
    return this.parentPath ? [...this.parentPath, paramName] : [paramName];
  }
  getFormatExtraPathLiteral() {
    return this.extraPathLiteral;
  }
  getIgnoredProps() {
    return void 0;
  }
  mock(opts, rt, params) {
    if (this.validateParams) this.validateParams(rt, params || this.getParams(rt));
    this.pushContext(params);
    const result = this._mock(opts, rt);
    this.popContext();
    const formatter = this.createJitCompiledFormatter(createRunTypeFunctions.JitFunctions.format.id, rt, void 0, params);
    if (formatter.isNoop) return result;
    return formatter.fn(result);
  }
  createJitCompiledFormatter(fnID, rt, comp, params, vλl, formatName, opts = {}) {
    const hash = createRunTypeFunctions.getFormatterHash(rt);
    const jitFnHash = `${createRunTypeFunctions.JitFunctions.aux.id}_${fnID}_${hash}`;
    const jitCompiled = mionRoutes.getJitUtils().getJIT(jitFnHash);
    if (jitCompiled) {
      if (mionRoutes.getENV("DEBUG_JIT") === "VERBOSE")
        console.log(`\x1B[32m Using cached function: ${jitCompiled.jitFnHash} \x1B[0m`);
      comp == null ? void 0 : comp.updateDependencies(jitCompiled);
      return jitCompiled;
    }
    const newJitCompiler = createRunTypeFunctions.createJitCompiler(rt, fnID, void 0, jitFnHash, hash, opts);
    try {
      const formatterCode = this.compileFormat(fnID, newJitCompiler, rt, params, vλl, formatName);
      const withReturn = this.handleReturnValues(rt, newJitCompiler, formatterCode);
      newJitCompiler.createJitFunction(withReturn);
      comp == null ? void 0 : comp.updateDependencies(newJitCompiler);
    } catch (e) {
      newJitCompiler.removeFromJitCache();
      throw e;
    }
    return newJitCompiler;
  }
  compileFormat(fnID, comp, rt, params, vλl, formatName, extraPathLiteral) {
    if (this.validateParams) this.validateParams(rt, params || this.getParams(rt));
    this.extraPathLiteral = extraPathLiteral;
    const v = comp.vλl;
    comp.vλl = vλl || v;
    this.rootFormatName = formatName || this.name;
    this.pushContext(params);
    let result;
    switch (fnID) {
      case createRunTypeFunctions.JitFunctions.isType.id:
        result = this.emitIsType(comp, rt);
        break;
      case createRunTypeFunctions.JitFunctions.typeErrors.id:
        result = this.emitIsTypeErrors(comp, rt);
        break;
      case createRunTypeFunctions.JitFunctions.format.id:
        result = this.emitFormat ? this.emitFormat(comp, rt) : { code: void 0, type: "S" };
        break;
      case createRunTypeFunctions.JitFunctions.toBinary.id:
        result = this.emitToBinary ? this.emitToBinary(comp, rt) : { code: void 0, type: "S" };
        break;
      case createRunTypeFunctions.JitFunctions.fromBinary.id:
        result = this.emitFromBinary ? this.emitFromBinary(comp, rt) : { code: void 0, type: "S" };
        break;
      // JSON serialization functions - formats don't need special handling for JSON
      // Just return the value as-is (expression type 'E' with empty code means use vλl)
      case createRunTypeFunctions.JitFunctions.prepareForJson.id:
      case createRunTypeFunctions.JitFunctions.restoreFromJson.id:
      case createRunTypeFunctions.JitFunctions.stringifyJson.id:
      case createRunTypeFunctions.JitFunctions.toJSCode.id:
        result = { code: "", type: "E" };
        break;
      default:
        throw new Error(`Method not implemented: ${fnID}`);
    }
    this.popContext();
    this.rootFormatName = this.name;
    this.extraPathLiteral = void 0;
    comp.vλl = v;
    return result;
  }
  /**
   * Adds return statements if needed
   * Unlike handleReturnValues in BaseRunType this one is only called in the root of the formatter
   */
  handleReturnValues(rt, comp, jitC) {
    if (!(jitC == null ? void 0 : jitC.code)) return "";
    const codeType = jitC.type;
    switch (codeType) {
      case "E":
        return `return ${jitC.code}`;
      case "RB":
        return jitC.code;
      case "S": {
        const lastChar = jitC.code.length - 1;
        const hasFullStop = jitC.code.lastIndexOf(";") === lastChar || jitC.code.lastIndexOf("}") === lastChar;
        const stopChar = hasFullStop ? "" : ";";
        return `${jitC.code}${stopChar} return ${comp.returnName}`;
      }
    }
  }
  compilePureFunctionCall(comp, rt, compiledPureFn, params, dependenciesParams) {
    const val = comp.vλl;
    const paramsName = createRunTypeFunctions.paramsToLiteral(comp, params || this.getParams(rt), this.getIgnoredProps());
    const dependenciesName = createRunTypeFunctions.dependenciesToLiteral(comp, dependenciesParams || {});
    const callParams = [val, paramsName, dependenciesName];
    const fnName = comp.addPureFunction(compiledPureFn);
    const callCode = `${fnName}(${callParams.join(",")})`;
    return { callCode, fnName, paramsName, dependenciesName };
  }
  compileErrorsPureFunctionCall(comp, rt, compiledPureFn, params, dependenciesParams, extraPathLiteral) {
    const val = comp.vλl;
    const path = comp.args.pλth;
    const err = comp.args.εrr;
    const expected = createRunTypeFunctions.paramsToLiteral(comp, rt.getKindName());
    const formatName = createRunTypeFunctions.paramsToLiteral(comp, this.getFormatName());
    const formatParams = createRunTypeFunctions.paramsToLiteral(comp, params, this.getIgnoredProps());
    const formatPath = createRunTypeFunctions.paramsToLiteral(comp, this.getFormatPath());
    const deps = createRunTypeFunctions.dependenciesToLiteral(comp, dependenciesParams || {});
    const accessPath = comp.getAccessPathLiteral(extraPathLiteral);
    const callParams = [val, path, err, expected, formatName, formatParams, formatPath, deps];
    if (accessPath) callParams.push(accessPath);
    const fnName = comp.addPureFunction(compiledPureFn);
    const callCode = `${fnName}(${callParams.join(",")})`;
    return { callCode, fnName, paramsName: formatParams, dependenciesName: deps };
  }
  getCallJitFormatErr(comp, expected, formatter, shouldReturn = false, extraPathLiteral) {
    return (paramName, paramValue) => {
      const callCode = comp.callJitFormatErr(expected, formatter, paramName, paramValue, extraPathLiteral);
      if (shouldReturn) return `return ${callCode}, ${comp.args.εrr}`;
      return callCode;
    };
  }
  printPath(rt, paramName) {
    return [rt.getTypeName(), ...this.getFormatPath(paramName)].join(".");
  }
}
const mockCompCache = /* @__PURE__ */ new Map();
function getMockCompiler(fnHash) {
  return mockCompCache.get(fnHash);
}
function setMockCompiler(fnHash, comp) {
  mockCompCache.set(fnHash, comp);
}
exports.AtomicRunType = createRunTypeFunctions.AtomicRunType;
exports.BaseFnCompiler = createRunTypeFunctions.BaseFnCompiler;
exports.BaseRunType = createRunTypeFunctions.BaseRunType;
exports.CodeTypes = createRunTypeFunctions.CodeTypes;
exports.CollectionRunType = createRunTypeFunctions.CollectionRunType;
exports.JIT_STACK_TRACE_MESSAGE = createRunTypeFunctions.JIT_STACK_TRACE_MESSAGE;
exports.JitErrorsFnCompiler = createRunTypeFunctions.JitErrorsFnCompiler;
exports.JitFnCompiler = createRunTypeFunctions.JitFnCompiler;
exports.JitFunctions = createRunTypeFunctions.JitFunctions;
exports.MAX_UNION_ITEMS = createRunTypeFunctions.MAX_UNION_ITEMS;
exports.MemberRunType = createRunTypeFunctions.MemberRunType;
exports.MockJitCompiler = createRunTypeFunctions.MockJitCompiler;
exports.ReflectionKindName = createRunTypeFunctions.ReflectionKindName;
exports.ReflectionSubKind = createRunTypeFunctions.ReflectionSubKind;
exports.ReflectionSubNames = createRunTypeFunctions.ReflectionSubNames;
exports.__ΩAnyClass = createRunTypeFunctions.__ΩAnyClass;
exports.__ΩAnyFunction = createRunTypeFunctions.__ΩAnyFunction;
exports.__ΩAnyKindName = createRunTypeFunctions.__ΩAnyKindName;
exports.__ΩAnyParameterListRunType = createRunTypeFunctions.__ΩAnyParameterListRunType;
exports.__ΩCodeType = createRunTypeFunctions.__ΩCodeType;
exports.__ΩCustomVλl = createRunTypeFunctions.__ΩCustomVλl;
exports.__ΩDKAnnotation = createRunTypeFunctions.__ΩDKAnnotation;
exports.__ΩDeepPartial = createRunTypeFunctions.__ΩDeepPartial;
exports.__ΩDeepRequired = createRunTypeFunctions.__ΩDeepRequired;
exports.__ΩFormatAnnotation = createRunTypeFunctions.__ΩFormatAnnotation;
exports.__ΩJitCode = createRunTypeFunctions.__ΩJitCode;
exports.__ΩJitCompilerOpts = createRunTypeFunctions.__ΩJitCompilerOpts;
exports.__ΩJitFn = createRunTypeFunctions.__ΩJitFn;
exports.__ΩJitFnID = createRunTypeFunctions.__ΩJitFnID;
exports.__ΩJitFnSettings = createRunTypeFunctions.__ΩJitFnSettings;
exports.__ΩMockOperation = createRunTypeFunctions.__ΩMockOperation;
exports.__ΩMockOptions = createRunTypeFunctions.__ΩMockOptions;
exports.__ΩMutable = createRunTypeFunctions.__ΩMutable;
exports.__ΩPartialRunTypeOptions = createRunTypeFunctions.__ΩPartialRunTypeOptions;
exports.__ΩRunType = createRunTypeFunctions.__ΩRunType;
exports.__ΩRunTypeAnnotation = createRunTypeFunctions.__ΩRunTypeAnnotation;
exports.__ΩRunTypeChildAccessor = createRunTypeFunctions.__ΩRunTypeChildAccessor;
exports.__ΩRunTypeFamily = createRunTypeFunctions.__ΩRunTypeFamily;
exports.__ΩRunTypeOptions = createRunTypeFunctions.__ΩRunTypeOptions;
exports.__ΩRunTypeVisitor = createRunTypeFunctions.__ΩRunTypeVisitor;
exports.__ΩSrcCollection = createRunTypeFunctions.__ΩSrcCollection;
exports.__ΩSrcMember = createRunTypeFunctions.__ΩSrcMember;
exports.__ΩSrcType = createRunTypeFunctions.__ΩSrcType;
exports.__ΩStrNumber = createRunTypeFunctions.__ΩStrNumber;
exports.__ΩSubKind = createRunTypeFunctions.__ΩSubKind;
exports.anyValuesList = createRunTypeFunctions.anyValuesList;
exports.computeDeepkitFormatID = createRunTypeFunctions.computeDeepkitFormatID;
exports.createFromBinaryFn = createRunTypeFunctions.createFromBinaryFn;
exports.createIsTypeFn = createRunTypeFunctions.createIsTypeFn;
exports.createJitCompiler = createRunTypeFunctions.createJitCompiler;
exports.createMockTypeFn = createRunTypeFunctions.createMockTypeFn;
exports.createPrepareForJsonFn = createRunTypeFunctions.createPrepareForJsonFn;
exports.createRestoreFromJsonFn = createRunTypeFunctions.createRestoreFromJsonFn;
exports.createStringifyJsonFn = createRunTypeFunctions.createStringifyJsonFn;
exports.createToBinaryFn = createRunTypeFunctions.createToBinaryFn;
exports.createToJavascriptFn = createRunTypeFunctions.createToJavascriptFn;
exports.createTypeErrorsFn = createRunTypeFunctions.createTypeErrorsFn;
exports.createTypeId = createRunTypeFunctions.createTypeId;
exports.defaultIgnoreFormatProps = createRunTypeFunctions.defaultIgnoreFormatProps;
exports.defaultMockOptions = createRunTypeFunctions.defaultMockOptions;
exports.dependenciesToLiteral = createRunTypeFunctions.dependenciesToLiteral;
exports.emailLocalPartSymbols = createRunTypeFunctions.emailLocalPartSymbols;
exports.getFormatAnnotation = createRunTypeFunctions.getFormatAnnotation;
exports.getFormatterFromCache = createRunTypeFunctions.getFormatterFromCache;
exports.getFormatterKey = createRunTypeFunctions.getFormatterKey;
exports.getFormatterParams = createRunTypeFunctions.getFormatterParams;
exports.getJITFnName = createRunTypeFunctions.getJITFnName;
exports.getJitFnSettings = createRunTypeFunctions.getJitFnSettings;
exports.getJitFunctionCompiler = createRunTypeFunctions.getJitFunctionCompiler;
exports.getReflectionName = createRunTypeFunctions.getReflectionName;
exports.getRunTypeFormat = createRunTypeFunctions.getRunTypeFormat;
exports.getRunTypeTransformer = createRunTypeFunctions.getRunTypeTransformer;
exports.getToLiteralFn = createRunTypeFunctions.getToLiteralFn;
exports.hasArguments = createRunTypeFunctions.hasArguments;
exports.hasExtends = createRunTypeFunctions.hasExtends;
exports.hasExtendsArguments = createRunTypeFunctions.hasExtendsArguments;
exports.hasImplements = createRunTypeFunctions.hasImplements;
exports.hasIndexType = createRunTypeFunctions.hasIndexType;
exports.hasMembers = createRunTypeFunctions.hasMembers;
exports.hasParameters = createRunTypeFunctions.hasParameters;
exports.hasReturn = createRunTypeFunctions.hasReturn;
exports.hasType = createRunTypeFunctions.hasType;
exports.hasTypeArguments = createRunTypeFunctions.hasTypeArguments;
exports.hasTypeParameters = createRunTypeFunctions.hasTypeParameters;
exports.hasTypes = createRunTypeFunctions.hasTypes;
exports.initFormatAnnotations = createRunTypeFunctions.initFormatAnnotations;
exports.isAnyFunctionRunType = createRunTypeFunctions.isAnyFunctionRunType;
exports.isAnyRunType = createRunTypeFunctions.isAnyRunType;
exports.isArrayRunType = createRunTypeFunctions.isArrayRunType;
exports.isAtomicRunType = createRunTypeFunctions.isAtomicRunType;
exports.isBigIntRunType = createRunTypeFunctions.isBigIntRunType;
exports.isBooleanRunType = createRunTypeFunctions.isBooleanRunType;
exports.isCallSignatureRunType = createRunTypeFunctions.isCallSignatureRunType;
exports.isChildAccessorType = createRunTypeFunctions.isChildAccessorType;
exports.isClassRunType = createRunTypeFunctions.isClassRunType;
exports.isCollectionRunType = createRunTypeFunctions.isCollectionRunType;
exports.isConstructor = createRunTypeFunctions.isConstructor;
exports.isDateRunType = createRunTypeFunctions.isDateRunType;
exports.isEnumMemberRunType = createRunTypeFunctions.isEnumMemberRunType;
exports.isEnumRunType = createRunTypeFunctions.isEnumRunType;
exports.isFormatParamMeta = createRunTypeFunctions.isFormatParamMeta;
exports.isFunctionParamsRunType = createRunTypeFunctions.isFunctionParamsRunType;
exports.isFunctionRunType = createRunTypeFunctions.isFunctionRunType;
exports.isIndexSignatureRunType = createRunTypeFunctions.isIndexSignatureRunType;
exports.isInterfaceRunType = createRunTypeFunctions.isInterfaceRunType;
exports.isIntersectionRunType = createRunTypeFunctions.isIntersectionRunType;
exports.isJitErrorsCompiler = createRunTypeFunctions.isJitErrorsCompiler;
exports.isLiteralRunType = createRunTypeFunctions.isLiteralRunType;
exports.isMemberRunType = createRunTypeFunctions.isMemberRunType;
exports.isMethodSignatureRunType = createRunTypeFunctions.isMethodSignatureRunType;
exports.isNativeUtilityStringTypes = createRunTypeFunctions.isNativeUtilityStringTypes;
exports.isNeverRunType = createRunTypeFunctions.isNeverRunType;
exports.isNonSerializableClass = createRunTypeFunctions.isNonSerializableClass;
exports.isNonSerializableObject = createRunTypeFunctions.isNonSerializableObject;
exports.isNullRunType = createRunTypeFunctions.isNullRunType;
exports.isNumberRunType = createRunTypeFunctions.isNumberRunType;
exports.isObjectLiteralRunType = createRunTypeFunctions.isObjectLiteralRunType;
exports.isObjectRunType = createRunTypeFunctions.isObjectRunType;
exports.isParameterRunType = createRunTypeFunctions.isParameterRunType;
exports.isPromiseRunType = createRunTypeFunctions.isPromiseRunType;
exports.isPropertyRunType = createRunTypeFunctions.isPropertyRunType;
exports.isPropertySignatureRunType = createRunTypeFunctions.isPropertySignatureRunType;
exports.isRegexpRunType = createRunTypeFunctions.isRegexpRunType;
exports.isRunType = createRunTypeFunctions.isRunType;
exports.isStringRunType = createRunTypeFunctions.isStringRunType;
exports.isSymbolRunType = createRunTypeFunctions.isSymbolRunType;
exports.isTupleMemberRunType = createRunTypeFunctions.isTupleMemberRunType;
exports.isTupleRunType = createRunTypeFunctions.isTupleRunType;
exports.isUndefinedRunType = createRunTypeFunctions.isUndefinedRunType;
exports.isUnionRunType = createRunTypeFunctions.isUnionRunType;
exports.isUnknownRunType = createRunTypeFunctions.isUnknownRunType;
exports.isVoidRunType = createRunTypeFunctions.isVoidRunType;
exports.jitArgs = createRunTypeFunctions.jitArgs;
exports.jitArgsWithOptions = createRunTypeFunctions.jitArgsWithOptions;
exports.jitBinaryDeserializerArgs = createRunTypeFunctions.jitBinaryDeserializerArgs;
exports.jitBinarySerializerArgs = createRunTypeFunctions.jitBinarySerializerArgs;
exports.jitDefaultArgs = createRunTypeFunctions.jitDefaultArgs;
exports.jitDefaultArgsWithOptions = createRunTypeFunctions.jitDefaultArgsWithOptions;
exports.jitDefaultBinaryDeserializerArgs = createRunTypeFunctions.jitDefaultBinaryDeserializerArgs;
exports.jitDefaultBinarySerializerArgs = createRunTypeFunctions.jitDefaultBinarySerializerArgs;
exports.jitDefaultErrorArgs = createRunTypeFunctions.jitDefaultErrorArgs;
exports.jitErrorArgs = createRunTypeFunctions.jitErrorArgs;
exports.jitFunctionList = createRunTypeFunctions.jitFunctionList;
exports.jitFunctionsById = createRunTypeFunctions.jitFunctionsById;
exports.jitSerializationFunctions = createRunTypeFunctions.jitSerializationFunctions;
exports.jitValidationFunctions = createRunTypeFunctions.jitValidationFunctions;
exports.maxStackErrorMessage = createRunTypeFunctions.maxStackErrorMessage;
exports.mockObjectList = createRunTypeFunctions.mockObjectList;
exports.mockRegExpsList = createRunTypeFunctions.mockRegExpsList;
exports.nativeUtilityStringTypes = createRunTypeFunctions.nativeUtilityStringTypes;
exports.nonSerializableClasses = createRunTypeFunctions.nonSerializableClasses;
exports.nonSerializableGlobals = createRunTypeFunctions.nonSerializableGlobals;
exports.paramsToLiteral = createRunTypeFunctions.paramsToLiteral;
exports.printClosure = createRunTypeFunctions.printClosure;
exports.reflectFunction = createRunTypeFunctions.reflectFunction;
exports.registerFormatter = createRunTypeFunctions.registerFormatter;
exports.registerJitFunctionCompiler = createRunTypeFunctions.registerJitFunctionCompiler;
exports.runType = createRunTypeFunctions.runType;
exports.stringCharSet = createRunTypeFunctions.stringCharSet;
exports.validPropertyNameRegExp = createRunTypeFunctions.validPropertyNameRegExp;
exports.mockAny = mockType.mockAny;
exports.mockBigInt = mockType.mockBigInt;
exports.mockBoolean = mockType.mockBoolean;
exports.mockDate = mockType.mockDate;
exports.mockNumber = mockType.mockNumber;
exports.mockRecursiveEmptyArray = mockType.mockRecursiveEmptyArray;
exports.mockRegExp = mockType.mockRegExp;
exports.mockString = mockType.mockString;
exports.mockSymbol = mockType.mockSymbol;
exports.mockType = mockType.mockType;
exports.random = mockType.random;
exports.randomItem = mockType.randomItem;
exports.BaseRunTypeFormat = BaseRunTypeFormat;
exports.getMockCompiler = getMockCompiler;
exports.getParsedAnnotationOptions = getParsedAnnotationOptions;
exports.getRunTypeAnnotations = getRunTypeAnnotations;
exports.getTypeToObject = getTypeToObject;
exports.setMockCompiler = setMockCompiler;
//# sourceMappingURL=index-DWGFWJk5.js.map
