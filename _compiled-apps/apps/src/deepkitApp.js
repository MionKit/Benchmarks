"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDeepkitApp = exports.setRoutes = exports.deepKitSayHelloRoute = exports.MyTransport = void 0;
const { __ΩLogMessage } = require("@deepkit/logger");
const { __ΩHttpBody } = require("@deepkit/http");
const { __ΩUser } = require("./models");
const { __ΩSayHello } = require("./models");
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const http_1 = require("http");
const app_1 = require("@deepkit/app");
const framework_1 = require("@deepkit/framework");
const http_2 = require("@deepkit/http");
const logger_1 = require("@deepkit/logger");
const __ΩmionUpdate = [() => __ΩUser, '/updateUser', 'Pn!4"M'];
const __ΩmionSayHelloResponse = [() => __ΩSayHello, '/', 'Pn!4"M'];
let app;
class MyTransport {
    write(message) {
    }
    supportsColor() {
        return false;
    }
}
exports.MyTransport = MyTransport;
MyTransport.__type = [() => __ΩLogMessage, 'message', 'write', 'supportsColor', 'Pn!2""0#P"0$5'];
exports.deepKitSayHelloRoute = __assignType(() => {
    return { "/": { hello: "world" } };
}, [() => __ΩmionSayHelloResponse, '', 'Pn!/"']);
const setRoutes = () => {
    const router = app.get(http_2.HttpRouterRegistry);
    router.any("/", exports.deepKitSayHelloRoute);
    router.post("/updateUser", __assignType((body) => {
        const user = body["/updateUser"];
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        return {
            "/updateUser": user,
        };
    }, [() => __ΩHttpBody, () => __ΩmionUpdate, 'body', () => __ΩmionUpdate, '', 'Pn"o!"2#n$/%']));
};
exports.setRoutes = setRoutes;
const initDeepkitApp = () => {
    app = new app_1.App({
        imports: [new framework_1.FrameworkModule()],
    }).setup(__assignType((module, config) => {
        module
            .setupGlobalProvider(undefined, logger_1.Logger)
            .setTransport([new MyTransport()]);
    }, ['module', 'config', '', 'P"2!"2""/#']));
    const httpKernel = app.get(http_2.HttpKernel);
    const router = app.get(http_2.HttpRouterRegistry);
    const server = new http_1.Server({ IncomingMessage: http_2.HttpRequest, ServerResponse: http_2.HttpResponse }, __assignType((req, res) => {
        httpKernel.handleRequest(req, res);
    }, ['req', 'res', '', 'P"2!"2""/#']));
    return { deepKitApp: app, deepkitServer: server, deepKitRouter: router };
};
exports.initDeepkitApp = initDeepkitApp;
//# sourceMappingURL=deepkitApp.js.map