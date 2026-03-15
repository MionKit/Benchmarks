"use strict";
const type = require("@deepkit/type");
const createRunTypeFunctions = require("./createRunTypeFunctions-C5JvjKA_.js");
const mionRoutes = require("./mionRoutes-wDZ_9Gb6.js");
function mockBoolean() {
  return Math.random() < 0.5;
}
function mockBigInt(min = 0, max = 1e4) {
  return BigInt(random(min, max));
}
function mockString(length = random(0, 30), allowedChars = createRunTypeFunctions.stringCharSet, disallowedChars = "") {
  if (allowedChars.length === 0) throw new Error("Can not generate random string as allowedChars cannot be empty");
  const allowedCharSet = allowedChars.split("").filter((char) => !disallowedChars.includes(char)).join("");
  if (allowedCharSet.length === 0)
    throw new Error("Can not generate random string as allowedChars and disallowedChars are mutually exclusive");
  return Array.from({ length }, () => allowedCharSet[random(0, allowedCharSet.length - 1)]).join("");
}
function mockSymbol(name, length, charsSet) {
  const symbolName = name ?? mockString(length, charsSet);
  return Symbol(symbolName);
}
function mockRegExp(list = createRunTypeFunctions.mockRegExpsList) {
  return list[random(0, list.length - 1)];
}
function mockNumber(min = 0, max = 1e4) {
  if (min > max) {
    throw new Error("min cannot be greater than max");
  }
  return random(min, max);
}
function mockDate(minDate = /* @__PURE__ */ new Date(0), maxDate = /* @__PURE__ */ new Date()) {
  const min = typeof minDate === "number" ? minDate : minDate.getTime();
  const max = typeof maxDate === "number" ? maxDate : maxDate.getTime();
  if (min > max) {
    throw new Error("minDate cannot be greater than maxDate");
  }
  return new Date(random(min, max));
}
function mockAny(anyList = createRunTypeFunctions.anyValuesList) {
  return anyList[random(0, anyList.length - 1)];
}
function random(min = 0, max = 1e4) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomItem(list) {
  return list[random(0, list.length - 1)];
}
function mockRecursiveEmptyArray(depth, length) {
  if (depth === 0) return [];
  return Array.from({ length }, () => mockRecursiveEmptyArray(depth - 1, length));
}
function mockType(runType, comp, stack = []) {
  stack.push(runType);
  const mockNestLevel = stack.filter((rt) => rt === runType).length;
  const rtOpts = comp.opts;
  const updatedOps = mockNestLevel ? getMockOptionsForNestedElements(rtOpts, mockNestLevel) : comp.opts;
  comp.opts = updatedOps;
  const typeValidator = createRunTypeFunctions.getRunTypeFormat(runType);
  let mocked = typeValidator ? typeValidator.mock(updatedOps, runType) : _mockType(runType, comp, stack);
  comp.opts = rtOpts;
  const typeTransformer = createRunTypeFunctions.getRunTypeTransformer(runType);
  if (typeTransformer) {
    const compiledFormatter = runType.createJitCompiledFunction(createRunTypeFunctions.JitFunctions.format.id);
    mocked = compiledFormatter.isNoop ? mocked : compiledFormatter.fn(mocked);
  }
  stack.pop();
  return mocked;
}
function getMockOptionsForNestedElements(opts, nestLevel) {
  const mOps = opts.mock;
  const maxDepth = mOps.maxMockRecursion;
  const divisor = nestLevel;
  const { optionalProbability, maxRandomItemsLength: maxRandomArrayLength, optionalPropertyProbability, arrayLength } = mOps;
  const newProv = nestLevel >= maxDepth ? 0 : optionalProbability / divisor;
  const newMaxLength = nestLevel >= maxDepth ? 0 : Math.round(maxRandomArrayLength / divisor);
  const ret = {
    mock: {
      ...mOps,
      optionalProbability: newProv,
      maxRandomItemsLength: newMaxLength
    }
  };
  if (optionalPropertyProbability) {
    const entries = Object.entries(optionalPropertyProbability).map(([key, value]) => {
      const newProv2 = nestLevel > maxDepth ? 0 : value / divisor;
      return [key, value / newProv2];
    });
    ret.mock.optionalPropertyProbability = Object.fromEntries(entries);
  }
  if (arrayLength) {
    const newLength = nestLevel >= maxDepth ? 0 : Math.round(arrayLength / divisor);
    ret.mock.arrayLength = newLength;
  }
  if (ret.mock.parentObj) ret.mock.parentObj = {};
  return ret;
}
function _mockType(runType, comp, stack) {
  var _a;
  const mOps = comp.opts.mock;
  const recursionLevel = stack.filter((rt) => rt === runType).length;
  const src = runType.src;
  const kind = src.kind;
  if (recursionLevel > mOps.maxMockRecursion) return void 0;
  switch (kind) {
    case type.ReflectionKind.never:
      throw new Error("Cannot mock never type." + printStackTrace(comp, stack));
    case type.ReflectionKind.any:
    case type.ReflectionKind.unknown:
      return mockAny(mOps.anyValuesList);
    // Atomic types
    case type.ReflectionKind.string:
      return mockString(mOps.stringLength || random(1, mOps.maxRandomStringLength), mOps.stringCharSet || createRunTypeFunctions.stringCharSet);
    case type.ReflectionKind.number:
      return mockNumber(mOps.minNumber, mOps.maxNumber);
    case type.ReflectionKind.boolean:
      return mockBoolean();
    case type.ReflectionKind.bigint:
      return mockBigInt(mOps.minNumber, mOps.maxNumber);
    case type.ReflectionKind.null:
      return null;
    case type.ReflectionKind.undefined:
      return void 0;
    case type.ReflectionKind.void:
      return void 0;
    case type.ReflectionKind.regexp:
      return mockRegExp(mOps.regexpList);
    case type.ReflectionKind.symbol:
      return mockSymbol(mOps.symbolName, mOps.symbolLength, mOps.symbolCharSet);
    case type.ReflectionKind.literal:
      return src.literal;
    case type.ReflectionKind.object:
      return mOps.objectList[random(0, mOps.objectList.length - 1)];
    case type.ReflectionKind.enum: {
      const rt = runType;
      const i = mOps.enumIndex || random(0, rt.src.values.length - 1);
      return rt.src.values[i];
    }
    case type.ReflectionKind.enumMember:
      throw new Error("Mock enum member is not supported." + printStackTrace(comp, stack));
    // Collection types
    case type.ReflectionKind.array: {
      const rt = runType;
      const length = mOps.arrayLength ?? random(0, mOps.maxRandomItemsLength);
      if (length === 0) return [];
      return Array.from({ length }, () => mockType(rt.getMemberType(), comp, stack));
    }
    case type.ReflectionKind.tuple: {
      const rt = runType;
      const options = mOps.tupleOptions;
      const params = rt.getChildRunTypes().map((p, i) => mockType(p, getChildOpts(comp, options == null ? void 0 : options[i]), stack));
      if (rt.hasRestParameter(comp)) {
        return [...params.slice(0, -1), ...params[params.length - 1]];
      }
      return params;
    }
    case type.ReflectionKind.intersection:
    case type.ReflectionKind.objectLiteral: {
      if (runType instanceof createRunTypeFunctions.NonSerializableRunType) {
        throw new Error(`Mock is disabled for Non Serializable types.` + printStackTrace(comp, stack));
      } else {
        const rt = runType;
        if (rt.isCallable()) return mockType(rt.getCallSignature(), comp, stack);
        let obj = mOps.parentObj || {};
        rt.getChildRunTypes().forEach((prop) => {
          if (prop instanceof createRunTypeFunctions.IndexSignatureRunType) {
            obj = { ...obj, ...mockType(prop, comp, stack) };
            return;
          }
          const name = prop.getChildVarName(comp);
          const isMethod = prop.src.kind === type.ReflectionKind.method || prop.src.kind === type.ReflectionKind.methodSignature;
          if (isMethod) return;
          obj[name] = mockType(prop, comp, stack);
        });
        return obj;
      }
    }
    case type.ReflectionKind.class:
      return _mockClass(runType, comp, stack);
    case type.ReflectionKind.union: {
      const rt = runType;
      if (mOps.unionIndex && (mOps.unionIndex < 0 || mOps.unionIndex >= rt.getChildRunTypes().length)) {
        throw new Error(
          "unionIndex must be between 0 and the number of types in the union." + printStackTrace(comp, stack)
        );
      }
      const index = (mOps == null ? void 0 : mOps.unionIndex) ?? random(0, rt.getChildRunTypes().length - 1);
      return mockType(rt.getChildRunTypes()[index], comp, stack);
    }
    case type.ReflectionKind.function:
    case type.ReflectionKind.callSignature:
    case type.ReflectionKind.method:
    case type.ReflectionKind.methodSignature:
      if (runType.src.subKind === createRunTypeFunctions.ReflectionSubKind.params) {
        const rt = runType;
        const options = mOps.tupleOptions;
        const params = rt.getParamRunTypes(comp).map((p, i) => mockType(p, getChildOpts(comp, options == null ? void 0 : options[i]), stack));
        if (rt.hasRestParameter(comp)) {
          return [...params.slice(0, -1), ...params[params.length - 1]];
        }
        return params;
      } else if (runType.src.kind === type.ReflectionKind.method || runType.src.kind === type.ReflectionKind.methodSignature) {
        return void 0;
      } else {
        throw new Error("Mock is not allowed, call mockParams or mockReturn instead." + printStackTrace(comp, stack));
      }
    case type.ReflectionKind.promise: {
      const rt = runType;
      const timeOut = mOps.promiseTimeOut || 1;
      return new Promise((resolve, reject) => {
        if (timeOut > 0) {
          setTimeout(() => {
            if (mOps.promiseReject) reject(mOps.promiseReject);
            else resolve(mockType(rt.getMemberType(), comp, stack));
          }, timeOut);
          return;
        }
        if (mOps.promiseReject) reject(mOps.promiseReject);
        else resolve(mockType(rt.getMemberType(), comp, stack));
      });
    }
    // Member types
    case type.ReflectionKind.tupleMember:
    case type.ReflectionKind.parameter: {
      const rt = runType;
      if (!rt.getJitChild(comp)) return void 0;
      if (rt.isOptional() && !rt.isRest()) {
        const probability = mOps.optionalProbability;
        if (probability < 0 || probability > 1)
          throw new Error("optionalProbability must be between 0 and 1" + printStackTrace(comp, stack));
        if (Math.random() > probability) {
          return void 0;
        }
      }
      return mockType(rt.getMemberType(), comp, stack);
    }
    case type.ReflectionKind.propertySignature:
    case type.ReflectionKind.property: {
      const rt = runType;
      const probability = ((_a = mOps.optionalPropertyProbability) == null ? void 0 : _a[rt.getChildVarName(comp)]) ?? mOps.optionalProbability;
      if (probability < 0 || probability > 1)
        throw new Error("optionalProbability must be between 0 and 1" + printStackTrace(comp, stack));
      if (rt.src.optional && Math.random() > probability) return void 0;
      return mockType(rt.getMemberType(), comp, stack);
    }
    case type.ReflectionKind.rest: {
      const rt = runType;
      const length = random(0, mOps.maxRandomItemsLength);
      const items = [];
      for (let i = 0; i < length; i++) {
        items.push(mockType(rt.getMemberType(), comp, stack));
      }
      return items;
    }
    case type.ReflectionKind.indexSignature: {
      const rt = runType;
      const length = random(0, mOps.maxRandomItemsLength);
      const parentObj = mOps.parentObj || {};
      for (let i = 0; i < length; i++) {
        let propName;
        switch (true) {
          case !!(rt.src.index.kind === type.ReflectionKind.number):
            propName = i;
            break;
          case !!(rt.src.index.kind === type.ReflectionKind.string):
            propName = `key${i}`;
            break;
          case !!(rt.src.index.kind === type.ReflectionKind.symbol):
            propName = /* @__PURE__ */ Symbol.for(`key${i}`);
            break;
          default:
            throw new Error("Invalid index signature type.");
        }
        parentObj[propName] = mockType(rt.getMemberType(), comp, stack);
      }
      return parentObj;
    }
    case type.ReflectionKind.infer:
    case type.ReflectionKind.templateLiteral:
    case type.ReflectionKind.typeParameter:
    default:
      throw new Error(`Cant mock Unsupported RunType: ${runType.getTypeName()}` + printStackTrace(comp, stack));
  }
}
function _mockClass(runType, comp, stack) {
  const mOps = comp.opts.mock;
  switch (runType.src.subKind) {
    case createRunTypeFunctions.ReflectionSubKind.date:
      return mockDate(mOps.minDate, mOps.maxDate);
    case createRunTypeFunctions.ReflectionSubKind.map: {
      const rt = runType;
      const mockMap = /* @__PURE__ */ new Map();
      const length = mOps.arrayLength ?? random(0, mOps.maxRandomItemsLength);
      for (let i = 0; i < length; i++) {
        const keyType = mockType(rt.keyRT, comp, stack);
        const valueType = mockType(rt.valueRT, comp, stack);
        mockMap.set(keyType, valueType);
      }
      return mockMap;
    }
    case createRunTypeFunctions.ReflectionSubKind.set: {
      const rt = runType;
      const mockSet = /* @__PURE__ */ new Set();
      const length = mOps.arrayLength ?? random(0, mOps.maxRandomItemsLength);
      for (let i = 0; i < length; i++) {
        const value = mockType(rt.keyRT, comp, stack);
        mockSet.add(value);
      }
      return mockSet;
    }
    case createRunTypeFunctions.ReflectionSubKind.nonSerializable:
      throw new Error(`Mock is disabled for Non Serializable types.` + printStackTrace(comp, stack));
    default: {
      if (!(runType instanceof createRunTypeFunctions.ClassRunType)) {
        throw new Error(`Cant mock Unsupported RunType: ${runType.getTypeName()}` + printStackTrace(comp, stack));
      }
      const rt = runType;
      const isSerializable = rt.isClassWithEmptyConstructor();
      const deserializeFn = mionRoutes.getJitUtils().getDeserializeFn(rt.getClassName());
      if (!deserializeFn && !isSerializable) {
        throw new Error(
          `Class ${rt.getClassName()} can not be mocked. Be sure to register a deserialize function first with jiUtils.${mionRoutes.getJitUtils().setDeserializeFn.name}` + printStackTrace(comp, stack)
        );
      }
      const instance = deserializeFn ? {} : new rt.src.classType();
      rt.getJitChildren(comp).forEach((prop) => {
        const name = prop.getChildVarName(comp);
        if (prop instanceof createRunTypeFunctions.IndexSignatureRunType) mockType(prop, comp, stack);
        const mocked = mockType(prop, comp, stack);
        if (prop.src.optional && mocked === void 0) return;
        instance[name] = mockType(prop, comp, stack);
      });
      if (deserializeFn) return deserializeFn(instance);
      if (isSerializable) return instance;
      throw new Error(`Class ${rt.getClassName()} can not be mocked.` + printStackTrace(comp, stack));
    }
  }
}
function getChildOpts(comp, mockOpts) {
  if (!mockOpts) return comp;
  const newOpts = { ...comp.opts, mock: mockOpts };
  return new createRunTypeFunctions.MockJitCompiler(comp.rootType, newOpts, comp, comp.jitFnHash, comp.typeID);
}
function printStackTrace(comp, stack) {
  const separator = ".";
  return createRunTypeFunctions.JIT_STACK_TRACE_MESSAGE + stack.map((rt) => comp.getTypeTraceInfo(rt)).join(separator);
}
const mockType$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  mockType
}, Symbol.toStringTag, { value: "Module" }));
exports.mockAny = mockAny;
exports.mockBigInt = mockBigInt;
exports.mockBoolean = mockBoolean;
exports.mockDate = mockDate;
exports.mockNumber = mockNumber;
exports.mockRecursiveEmptyArray = mockRecursiveEmptyArray;
exports.mockRegExp = mockRegExp;
exports.mockString = mockString;
exports.mockSymbol = mockSymbol;
exports.mockType = mockType;
exports.mockType$1 = mockType$1;
exports.random = random;
exports.randomItem = randomItem;
//# sourceMappingURL=mockType-Dbb-8-Uc.js.map
