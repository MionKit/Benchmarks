"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = exports.initHttp = exports.routes = exports.updateUser = exports.mionSayHelloRoute = exports.__ΩShared = exports.shared = void 0;
const { __ΩUser } = require("./models");
const { __ΩHttpOptions } = require("@mionkit/http");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const __ΩPartial = ['T', 'l+e#!e"!fRb!Pde"!gN#"'];
const http_1 = require("@mionkit/http");
exports.shared = {};
const __ΩShared = [() => SharedArrayBuffer, 'i!'];
exports.__ΩShared = __ΩShared;
exports.mionSayHelloRoute = __assignType(() => "world", ['', 'P&/!']);
exports.updateUser = __assignType((context, user) => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
}, ['context', () => __ΩUser, 'user', () => __ΩUser, '', 'P"2!n"2#n$/%']);
exports.routes = {
    hello: exports.mionSayHelloRoute,
    updateUser: exports.updateUser,
};
exports.initHttp = __assignType((options) => {
    return (0, http_1.initHttpRouter)(options);
}, [() => __ΩPartial, () => __ΩHttpOptions, 'options', '', 'Pn"o!"2#8"/$']);
var router_1 = require("@mionkit/router");
Object.defineProperty(exports, "addRoutes", { enumerable: true, get: function () { return router_1.registerRoutes; } });
//# sourceMappingURL=mionApp.js.map