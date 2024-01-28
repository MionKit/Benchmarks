"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDeepkitApp = exports.MyTransport = void 0;
const { __ΩLogMessage } = require("@deepkit/logger");
const { __ΩLoggerTransport } = require("@deepkit/logger");
const { __ΩSayHello } = require("./models");
const { __ΩHttpBody } = require("@deepkit/http");
const { __ΩUser } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const app_1 = require("@deepkit/app");
const framework_1 = require("@deepkit/framework");
const http_1 = require("@deepkit/http");
const logger_1 = require("@deepkit/logger");
class MyTransport {
    constructor() {
        console.log("MyTransport constructor");
    }
    write(message) {
    }
    supportsColor() {
        return false;
    }
}
exports.MyTransport = MyTransport;
MyTransport.__type = ['constructor', () => __ΩLogMessage, 'message', 'write', 'supportsColor', () => __ΩLoggerTransport, 'MyTransport', 'P"0!Pn"2#"0$P"0%5n&x"w\''];
const initDeepkitApp = () => {
    const app = new app_1.App({
        imports: [new framework_1.FrameworkModule()],
    }).setup(__assignType((module, config) => {
        module
            .setupGlobalProvider(undefined, logger_1.Logger)
            .setTransport([new MyTransport()]);
    }, ['module', 'config', '', 'P"2!"2""/#']));
    const router = app.get(http_1.HttpRouterRegistry);
    router.any("/hello", __assignType(() => {
        return { hello: "world" };
    }, [() => __ΩSayHello, '', 'Pn!/"']));
    router.post("/updateUser", __assignType((body) => {
        const user = body;
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        return user;
    }, [() => __ΩHttpBody, () => __ΩUser, 'body', () => __ΩUser, '', 'Pn"o!"2#n$/%']));
    return { deepKitApp: app, deepKitRouter: router };
};
exports.initDeepkitApp = initDeepkitApp;
//# sourceMappingURL=deepkitApp.js.map