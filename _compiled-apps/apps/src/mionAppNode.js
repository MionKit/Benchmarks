"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = exports.registerRoutes = exports.initHttp = exports.routes = void 0;
const __ΩPartial = ['T', 'Partial', 'l+e#!e"!fRb!Pde"!gN#"w"y'];
const { __ΩUser } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const http_1 = require("@mionkit/http");
const router_1 = require("@mionkit/router");
exports.routes = {
    hello: (0, router_1.route)(__assignType(() => "world", ['', 'P&/!'])),
    updateUser: (0, router_1.route)(__assignType((ctx, user) => {
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        return user;
    }, ['ctx', () => __ΩUser, 'user', () => __ΩUser, '', 'P"2!n"2#n$/%'])),
};
exports.initHttp = __assignType((options) => {
    return (0, http_1.startNodeServer)(options);
}, [() => __ΩPartial, 'NodeHttpOptions', 'options', '', 'P"w"o!"2#8"/$']);
var router_2 = require("@mionkit/router");
Object.defineProperty(exports, "registerRoutes", { enumerable: true, get: function () { return router_2.registerRoutes; } });
Object.defineProperty(exports, "initRouter", { enumerable: true, get: function () { return router_2.initRouter; } });
//# sourceMappingURL=mionAppNode.js.map