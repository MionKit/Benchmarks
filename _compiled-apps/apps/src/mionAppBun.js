"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const mionRoutes = require("../../mionRoutes-CaK3IXAt.js");
require("path");
const DEFAULT_BUN_HTTP_OPTIONS = {
  port: 80,
  options: {},
  defaultResponseHeaders: {},
  /**
   * 256KB by default, same as lambda payload
   * @link https://docs.aws.amazon.com/lambda/latest/operatorguide/payload.html
   * */
  maxBodySize: 256e3
  // 256KB
};
let httpOptions = { ...DEFAULT_BUN_HTTP_OPTIONS };
let defaultHeaders = [["server", "@mionjs"]];
function setBunHttpOpts(options) {
  httpOptions = {
    ...httpOptions,
    ...options
  };
  defaultHeaders = [["server", "@mionjs"], ...Object.entries(httpOptions.defaultResponseHeaders)];
  return httpOptions;
}
async function startBunServer(options) {
  const isTest = mionRoutes.getENV("NODE_ENV") === "test";
  const isCompiling = mionRoutes.getENV("MION_COMPILE") === "true";
  if (options) setBunHttpOpts(options);
  if (isCompiling) {
    console.log("Compiling routes metadata and skipping mion server initialization...", {
      port: httpOptions.port,
      httpOptions
    });
    return void 0;
  }
  const port = httpOptions.port !== 80 ? `:${httpOptions.port}` : "";
  const url = `http://localhost${port}`;
  if (!isTest && !isCompiling) console.log(`mion bun server running on ${url}`);
  const server = Bun.serve({
    maxRequestBodySize: httpOptions.maxBodySize,
    port: httpOptions.port,
    ...httpOptions.options,
    async fetch(req) {
      const reqUrl = req.url;
      const pathStart = reqUrl.indexOf("/", 8);
      const queryStart = reqUrl.indexOf("?", pathStart);
      const path = queryStart === -1 ? reqUrl.slice(pathStart) : reqUrl.slice(pathStart, queryStart);
      const urlQuery = queryStart === -1 ? void 0 : reqUrl.slice(queryStart + 1);
      const contentType = req.headers.get("content-type") || "";
      const isBinary = contentType.startsWith("application/octet-stream");
      const rawBody = req.body ? isBinary ? await req.arrayBuffer() : await req.json() : {};
      const reqBodyType = isBinary ? mionRoutes.SerializerModes.binary : mionRoutes.SerializerModes.json;
      const responseHeaders = new Headers(defaultHeaders);
      try {
        const platformResp = await mionRoutes.dispatchRoute(
          path,
          rawBody,
          req.headers,
          responseHeaders,
          req,
          void 0,
          reqBodyType,
          urlQuery
        );
        return reply(platformResp, responseHeaders);
      } catch (e) {
        const error = e instanceof mionRoutes.RpcError ? e : new mionRoutes.RpcError({
          publicMessage: "Unknown Error",
          type: "unknown-error",
          originalError: e
        });
        return fatalFail(error, responseHeaders);
      }
    },
    error(errReq) {
      const responseHeaders = new Headers({
        server: "@mionjs",
        ...httpOptions.defaultResponseHeaders
      });
      const error = errReq instanceof mionRoutes.RpcError ? errReq : new mionRoutes.RpcError({
        publicMessage: "Connection Error",
        type: "response-connection-error",
        originalError: errReq
      });
      return fatalFail(error, responseHeaders);
    }
  });
  const shutdownHandler = function() {
    if (!isTest) console.log(`Shutting down mion server on ${url}`);
    server.stop(true);
    process.exit(0);
  };
  process.on("SIGINT", shutdownHandler);
  process.on("SIGTERM", shutdownHandler);
  if (typeof Bun !== "undefined" && Bun.gc) {
    Bun.gc(false);
  }
  return server;
}
function fatalFail(err, responseHeaders) {
  const routeResponse = mionRoutes.getRouterFatalErrorResponse(err, responseHeaders);
  return reply(routeResponse, responseHeaders);
}
function reply(mionResp, responseHeaders) {
  const bodyType = mionResp.serializer;
  switch (bodyType) {
    case mionRoutes.SerializerModes.stringifyJson: {
      return new Response(mionResp.rawBody, {
        status: mionResp.statusCode,
        headers: responseHeaders
      });
    }
    case mionRoutes.SerializerModes.json: {
      return Response.json(mionResp.body, {
        status: mionResp.statusCode,
        headers: responseHeaders
      });
    }
    case mionRoutes.SerializerModes.binary: {
      const serializer = mionResp.binSerializer;
      responseHeaders.set("content-length", String(serializer.getLength()));
      const response = new Response(serializer.getBufferView(), {
        status: mionResp.statusCode,
        headers: responseHeaders
      });
      serializer.markAsEnded();
      return response;
    }
    default: {
      const error = new mionRoutes.RpcError({
        publicMessage: "unknown-mion-response-format",
        type: "unknown-error",
        errorData: { bodyType }
      });
      return fatalFail(error, responseHeaders);
    }
  }
}
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const initHttpBun = __assignType(async (routerOpts, options) => {
  await mionRoutes.initMionRouter(mionRoutes.routes, routerOpts);
  return startBunServer(options);
}, ["routerOpts", "options", "", 'P!2!8!2"8"/#']);
exports.routes = mionRoutes.routes;
exports.initHttpBun = initHttpBun;
//# sourceMappingURL=mionAppBun.js.map
