"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDeepkitApp = exports.setRoutes = exports.deepKitSayHelloRoute = void 0;
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
const __ΩmionUpdate = [() => __ΩUser, '/updateUser', 'Pn!4"M'];
const __ΩmionSayHelloResponse = [() => __ΩSayHello, '/', 'Pn!4"M'];
let app;
exports.deepKitSayHelloRoute = __assignType(() => {
    return { "/": { hello: "world" } };
}, [() => __ΩmionSayHelloResponse, '', 'Pn!/"']);
const setRoutes = () => {
    const router = app.get(http_2.HttpRouterRegistry);
    router.any("/", exports.deepKitSayHelloRoute);
    router.post("/updateUser", __assignType((body) => {
        const user = body["/updateUser"];
        return {
            "/updateUser": Object.assign(Object.assign({}, user), { lastUpdate: new Date() }),
        };
    }, [() => __ΩHttpBody, () => __ΩmionUpdate, 'body', () => __ΩmionUpdate, '', 'Pn"o!"2#n$/%']));
};
exports.setRoutes = setRoutes;
const initDeepkitApp = () => {
    app = new app_1.App({
        imports: [new framework_1.FrameworkModule()],
    });
    const httpKernel = app.get(http_2.HttpKernel);
    const router = app.get(http_2.HttpRouterRegistry);
    const server = new http_1.Server({ IncomingMessage: http_2.HttpRequest, ServerResponse: http_2.HttpResponse }, __assignType((req, res) => {
        httpKernel.handleRequest(req, res);
    }, ['req', 'res', '', 'P"2!"2""/#']));
    return { deepKitApp: app, deepkitServer: server, deepKitRouter: router };
};
exports.initDeepkitApp = initDeepkitApp;
//# sourceMappingURL=deepkitApp.js.map