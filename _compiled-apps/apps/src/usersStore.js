"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const apps_src_models = require("./models.js");
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const getId = __assignType((entOrId) => {
  if (typeof entOrId === "number")
    return entOrId;
  return entOrId.id;
}, [() => apps_src_models.__ΩUserId, "entOrId", "", `Pn!2"'/#`]);
const store = (Map.Ω = [["'"], [() => apps_src_models.__ΩUser, "n!"]], /* @__PURE__ */ new Map());
const usersStore = {
  create: __assignType((user) => {
    const id = store.size + 1;
    const newUser = {
      id,
      ...user,
      lastUpdate: /* @__PURE__ */ new Date()
    };
    store.set(id, newUser);
    return newUser;
  }, [() => apps_src_models.__ΩNewUser, "user", () => apps_src_models.__ΩUser, "", 'Pn!2"n#/$']),
  get: __assignType((userId) => {
    return store.get(getId(userId));
  }, [() => apps_src_models.__ΩUserId, "userId", () => apps_src_models.__ΩUser, "", 'Pn!2"Pn#-J/$']),
  update: __assignType((user) => {
    const existing = store.get(user.id);
    if (!existing)
      return void 0;
    const updated = {
      ...existing,
      ...user,
      lastUpdate: /* @__PURE__ */ new Date()
    };
    store.set(user.id, updated);
    return updated;
  }, [() => apps_src_models.__ΩPartialUser, "user", () => apps_src_models.__ΩUser, "", 'Pn!2"Pn#-J/$']),
  delete: __assignType((userId) => {
    const id = getId(userId);
    const user = store.get(id);
    if (!user)
      return void 0;
    store.delete(getId(id));
    return user;
  }, [() => apps_src_models.__ΩUserId, "userId", () => apps_src_models.__ΩUser, "", 'Pn!2"Pn#-J/$'])
};
const hasUnknownKeys = __assignType((knownKeys, input) => {
  if (typeof input !== "object")
    return true;
  const unknownKeys = Object.keys(input);
  return unknownKeys.some(__assignType((ukn) => !knownKeys.includes(ukn), ["ukn", "", 'P"2!"/"']));
}, ["knownKeys", "input", "", 'P&F2!"2")/#']);
const isUserId = __assignType((input) => {
  if (typeof input === "number")
    return true;
  if (typeof input !== "object")
    return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
  return typeof (input == null ? void 0 : input.id) === "number" && typeof (input == null ? void 0 : input.name) === "string" && typeof (input == null ? void 0 : input.string) === "string" && (input == null ? void 0 : input.lastUpdate) instanceof Date;
}, ["input", "", 'P"2!!/"']);
const isNewUser = __assignType((input) => {
  if (typeof input !== "object")
    return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
  return !(input == null ? void 0 : input.id) && typeof (input == null ? void 0 : input.name) === "string" && typeof (input == null ? void 0 : input.string) === "string" && !(input == null ? void 0 : input.lastUpdate);
}, ["input", "", 'P"2!!/"']);
const isPartialuser = __assignType((input) => {
  if (typeof input !== "object")
    return false;
  if (hasUnknownKeys(["id", "name", "surname", "lastUpdate"], input))
    return false;
  return typeof (input == null ? void 0 : input.id) === "number";
}, ["input", "", 'P"2!!/"']);
const deserializeUser = __assignType((jsonParseResult) => {
  jsonParseResult.lastUpdate = new Date(jsonParseResult.lastUpdate);
  return jsonParseResult;
}, [() => apps_src_models.__ΩRawUser, "jsonParseResult", () => apps_src_models.__ΩUser, "", 'Pn!2"n#/$']);
exports.deserializeUser = deserializeUser;
exports.hasUnknownKeys = hasUnknownKeys;
exports.isNewUser = isNewUser;
exports.isPartialuser = isPartialuser;
exports.isUserId = isUserId;
exports.usersStore = usersStore;
//# sourceMappingURL=usersStore.js.map
