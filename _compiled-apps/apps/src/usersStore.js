"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeUser = exports.isPartialuser = exports.isNewUser = exports.isUserId = exports.hasUnknownKeys = exports.usersStore = void 0;
const { __ΩUserId } = require("./models");
const { __ΩUser } = require("./models");
const { __ΩNewUser } = require("./models");
const { __ΩPartialUser } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const getId = __assignType((entOrId) => {
    if (typeof entOrId === "number")
        return entOrId;
    return entOrId.id;
}, [() => __ΩUserId, 'entOrId', '', 'Pn!2"\'/#']);
const store = (Map.Ω = [['\''], [() => __ΩUser, 'n!']], new Map());
exports.usersStore = {
    create: __assignType((user) => {
        const id = store.size + 1;
        const newUser = {
            id,
            ...user,
            lastUpdate: new Date(),
        };
        store.set(id, newUser);
        return newUser;
    }, [() => __ΩNewUser, 'user', () => __ΩUser, '', 'Pn!2"n#/$']),
    get: __assignType((userId) => {
        return store.get(getId(userId));
    }, [() => __ΩUserId, 'userId', () => __ΩUser, '', 'Pn!2"Pn#-J/$']),
    update: __assignType((user) => {
        const existing = store.get(user.id);
        if (!existing)
            return undefined;
        const updated = {
            ...existing,
            ...user,
            lastUpdate: new Date(),
        };
        store.set(user.id, updated);
        return updated;
    }, [() => __ΩPartialUser, 'user', () => __ΩUser, '', 'Pn!2"Pn#-J/$']),
    delete: __assignType((userId) => {
        const id = getId(userId);
        const user = store.get(id);
        if (!user)
            return undefined;
        store.delete(getId(id));
        return user;
    }, [() => __ΩUserId, 'userId', () => __ΩUser, '', 'Pn!2"Pn#-J/$']),
};
exports.hasUnknownKeys = __assignType((knownKeys, input) => {
    if (typeof input !== "object")
        return true;
    const unknownKeys = Object.keys(input);
    return unknownKeys.some(__assignType((ukn) => !knownKeys.includes(ukn), ['ukn', '', 'P"2!"/"']));
}, ['knownKeys', 'input', '', 'P&F2!"2")/#']);
exports.isUserId = __assignType((input) => {
    if (typeof input === "number")
        return true;
    if (typeof input !== "object")
        return false;
    if ((0, exports.hasUnknownKeys)(["id", "name", "surname", "lastUpdate"], input))
        return false;
    return (typeof input?.id === "number" &&
        typeof input?.name === "string" &&
        typeof input?.string === "string" &&
        input?.lastUpdate instanceof Date);
}, ['input', '', 'P"2!!/"']);
exports.isNewUser = __assignType((input) => {
    if (typeof input !== "object")
        return false;
    if ((0, exports.hasUnknownKeys)(["id", "name", "surname", "lastUpdate"], input))
        return false;
    return (!input?.id &&
        typeof input?.name === "string" &&
        typeof input?.string === "string" &&
        !input?.lastUpdate);
}, ['input', '', 'P"2!!/"']);
exports.isPartialuser = __assignType((input) => {
    if (typeof input !== "object")
        return false;
    if ((0, exports.hasUnknownKeys)(["id", "name", "surname", "lastUpdate"], input))
        return false;
    return typeof input?.id === "number";
}, ['input', '', 'P"2!!/"']);
exports.deserializeUser = __assignType((jsonParseResult) => {
    if (typeof jsonParseResult?.lastUpdate === "string")
        return {
            ...jsonParseResult,
            lastUpdate: new Date(jsonParseResult.lastUpdate),
        };
    return jsonParseResult;
}, ['jsonParseResult', '', 'P"2!"/"']);
//# sourceMappingURL=usersStore.js.map