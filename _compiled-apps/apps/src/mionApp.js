"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = exports.startHttpServer = exports.startFsServer = exports.initHttpFastify = exports.initHttp = exports.routes = exports.mionSayHelloRoute = exports.__ΩShared = exports.__ΩApp = exports.shared = exports.app = void 0;
const { __ΩSayHello } = require("./models");
const { __ΩUser } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const __ΩPartial = ['T', 'l+e#!e"!fRb!Pde"!gN#"'];
const fastMion_1 = require("./fastMion");
const http_1 = require("@mionkit/http");
exports.app = {};
exports.shared = {};
const __ΩApp = [() => exports.app, 'i!'];
exports.__ΩApp = __ΩApp;
const __ΩShared = [() => SharedArrayBuffer, 'i!'];
exports.__ΩShared = __ΩShared;
exports.mionSayHelloRoute = __assignType(() => ({ hello: "world" }), [() => __ΩSayHello, '', 'Pn!/"']);
exports.routes = {
    "/": exports.mionSayHelloRoute,
    updateUser: __assignType((app, context, user) => {
        return Object.assign(Object.assign({}, user), { lastUpdate: new Date() });
    }, ['app', 'context', () => __ΩUser, 'user', () => __ΩUser, '', 'P"2!"2"n#2$n%/&']),
};
exports.initHttp = __assignType((options) => {
    return (http_1.initHttpApp.Ω = [[() => __ΩApp, 'n!'], [() => __ΩShared, 'n!']], (0, http_1.initHttpApp)(exports.app, undefined, options));
}, [() => __ΩPartial, 'options', '', 'P"o!"2"8"/#']);
exports.initHttpFastify = __assignType((options) => {
    return (fastMion_1.initFsHttp.Ω = [[() => __ΩApp, 'n!'], [() => __ΩShared, 'n!']], (0, fastMion_1.initFsHttp)(exports.app, undefined, options));
}, [() => __ΩPartial, 'options', '', 'P"o!"2"8"/#']);
var fastMion_2 = require("./fastMion");
Object.defineProperty(exports, "startFsServer", { enumerable: true, get: function () { return fastMion_2.startFsServer; } });
var http_2 = require("@mionkit/http");
Object.defineProperty(exports, "startHttpServer", { enumerable: true, get: function () { return http_2.startHttpServer; } });
var router_1 = require("@mionkit/router");
Object.defineProperty(exports, "addRoutes", { enumerable: true, get: function () { return router_1.registerRoutes; } });
//# sourceMappingURL=mionApp.js.map