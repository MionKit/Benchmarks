"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = exports.registerRoutes = exports.initHttp = exports.routes = exports.updateUser = exports.mionSayHelloRoute = exports.__ΩShared = exports.shared = void 0;
const __ΩPartial = ['T', 'Partial', 'l+e#!e"!fRb!Pde"!gN#"w"y'];
const { __ΩUser } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const http_1 = require("@mionkit/http");
const router_1 = require("@mionkit/router");
exports.shared = {};
const __ΩShared = [() => SharedArrayBuffer, 'Shared', 'i!w"y'];
exports.__ΩShared = __ΩShared;
exports.mionSayHelloRoute = (0, router_1.route)(__assignType(() => "world", ['', 'P&/!']));
exports.updateUser = (0, router_1.route)(__assignType((context, user) => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
}, ['context', () => __ΩUser, 'user', () => __ΩUser, '', 'P"2!n"2#n$/%']));
exports.routes = {
    hello: exports.mionSayHelloRoute,
    updateUser: exports.updateUser,
};
exports.initHttp = __assignType((options) => {
    return (0, http_1.startNodeServer)(options);
}, [() => __ΩPartial, 'NodeHttpOptions', 'options', '', 'P"w"o!"2#8"/$']);
var router_2 = require("@mionkit/router");
Object.defineProperty(exports, "registerRoutes", { enumerable: true, get: function () { return router_2.registerRoutes; } });
Object.defineProperty(exports, "initRouter", { enumerable: true, get: function () { return router_2.initRouter; } });
//# sourceMappingURL=mionAppNode.js.map