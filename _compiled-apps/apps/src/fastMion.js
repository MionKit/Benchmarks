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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startFsServer = exports.initFsHttp = void 0;
function __assignType(fn, args) {
    fn.__type = args;
    return fn;
}
const __ΩPartial = ['T', 'l+e#!e"!fRb!Pde"!gN#"'];
const fastify_1 = __importDefault(require("fastify"));
const router_1 = require("@mionkit/router");
const http_1 = require("@mionkit/http");
const __ΩLogger = [() => console, 'Pi!-J'];
let fastify;
let httpOptions;
const allMethods = ["GET", "POST", "PUT", "OPTIONS"];
exports.initFsHttp = __assignType((app, handlersDataFactory, routerOptions) => {
    fastify = (0, fastify_1.default)({
        logger: false,
    });
    (0, router_1.initRouter)(app, handlersDataFactory, routerOptions);
    fastify.route({
        method: ["GET", "POST"],
        url: "*",
        handler: __assignType(function handler(fsRequest, fsResponse) {
            return __awaiter(this, void 0, void 0, function* () {
                return (0, router_1.dispatchRoute)(fsRequest.url, {
                    rawRequest: fsRequest,
                    rawResponse: fsResponse,
                })
                    .then(__assignType((routeResponse) => {
                    addResponseHeaders(fsResponse, routeResponse.headers);
                    reply(fsResponse, routeResponse.json, routeResponse.statusCode);
                }, ['routeResponse', '', 'P"2!"/"']))
                    .catch(__assignType((e) => {
                    const error = new router_1.RouteError({
                        statusCode: router_1.StatusCodes.INTERNAL_SERVER_ERROR,
                        publicMessage: "Internal Error",
                        originalError: e,
                    });
                    replyError(fsResponse, console, error);
                }, ['e', '', 'P"2!"/"']));
            });
        }, ['fsRequest', 'fsResponse', 'handler', 'P"2!"2""/#']),
    });
}, ['app', 'handlersDataFactory', () => __ΩPartial, 'routerOptions', '', 'P"2!"2"8"o#"2$8"/%']);
exports.startFsServer = __assignType((httpOptions_ = {}) => __awaiter(void 0, void 0, void 0, function* () {
    httpOptions = Object.assign(Object.assign({}, http_1.DEFAULT_HTTP_OPTIONS), httpOptions_);
    try {
        yield fastify.listen(httpOptions_);
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}), [() => __ΩPartial, 'httpOptions_', () => ({}), '', 'P"o!"2">#"/$']);
const reply = __assignType((httpResponse, json, statusCode, statusMessage) => {
    httpResponse.header("server", "@mionkit/http");
    httpResponse.header("content-type", (0, router_1.getRouterOptions)().responseContentType);
    httpResponse.status(statusCode);
    httpResponse.send(json);
}, ['httpResponse', 'json', 'statusCode', 'statusMessage', '', 'P"2!&2"\'2#&2$8"/%']);
const replyError = __assignType((httpResponse, logger, routeError) => {
    const publicError = (0, router_1.getPublicErrorFromRouteError)(routeError);
    if (httpResponse.log)
        httpResponse.log.error(routeError);
    const jsonBody = (0, router_1.getRouterOptions)().bodyParser.stringify({
        errors: [publicError],
    });
    reply(httpResponse, jsonBody, publicError.statusCode);
}, ['httpResponse', () => __ΩLogger, 'logger', () => router_1.RouteError, 'routeError', '', 'P"2!n"2#P7$2%"/&']);
const addResponseHeaders = __assignType((httpResponse, headers) => {
    Object.entries(headers).forEach(__assignType(([key, value]) => httpResponse.header(key, `${value}`), ['param0', '', 'P"2!"/"']));
}, ['httpResponse', 'headers', '', 'P"2!"2""/#']);
//# sourceMappingURL=fastMion.js.map