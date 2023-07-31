"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = exports.initHttp = exports.routesWithAsyncCallContext = exports.routes = exports.updateUserNoAppOrContext = exports.updateUser = exports.mionSayHelloRoute = exports.__ΩShared = exports.shared = void 0;
const { __ΩSayHello } = require("./models");
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
exports.mionSayHelloRoute = __assignType(() => ({ hello: "world" }), [() => __ΩSayHello, '', 'Pn!/"']);
exports.updateUser = __assignType((context, user) => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
}, ['context', () => __ΩUser, 'user', () => __ΩUser, '', 'P"2!n"2#n$/%']);
exports.updateUserNoAppOrContext = __assignType((user) => __awaiter(void 0, void 0, void 0, function* () {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
}), [() => __ΩUser, 'user', () => __ΩUser, '', 'Pn!2"n#`/$']);
exports.routes = {
    "/": exports.mionSayHelloRoute,
    sayHello: exports.mionSayHelloRoute,
    updateUser: exports.updateUser,
};
exports.routesWithAsyncCallContext = {
    "/": exports.mionSayHelloRoute,
    sayHello: exports.mionSayHelloRoute,
    updateUser: exports.updateUserNoAppOrContext,
};
exports.initHttp = __assignType((options) => {
    return (0, http_1.initHttpRouter)(options);
}, [() => __ΩPartial, () => __ΩHttpOptions, 'options', '', 'Pn"o!"2#8"/$']);
var router_1 = require("@mionkit/router");
Object.defineProperty(exports, "addRoutes", { enumerable: true, get: function () { return router_1.registerRoutes; } });
//# sourceMappingURL=mionApp.js.map