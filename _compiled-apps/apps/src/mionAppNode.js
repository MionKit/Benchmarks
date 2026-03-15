"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const mionRoutes = require("../../mionRoutes-wDZ_9Gb6.js");
const http = require("http");
const https = require("https");
class MionHeadersImpl {
  constructor(headers) {
    this.headers = headers;
  }
  append(name, value) {
    const nl = name.toLowerCase();
    const existing = this.headers[nl];
    const headerValue = toSingleHeader$1(value);
    if (existing) {
      this.headers[nl] = `${existing}, ${headerValue}`;
    } else {
      this.headers[nl] = headerValue;
    }
  }
  delete(name) {
    const nl = name.toLowerCase();
    delete this.headers[nl];
  }
  get(name) {
    const nl = name.toLowerCase();
    return this.headers[nl];
  }
  set(name, value) {
    const ln = name.toLowerCase();
    this.headers[ln] = value;
  }
  has(name) {
    const nl = name.toLowerCase();
    return !!this.headers[nl];
  }
  entries() {
    return new Map(Object.entries(this.headers)).entries();
  }
  keys() {
    return new Map(Object.entries(this.headers)).keys();
  }
  values() {
    return new Map(Object.entries(this.headers)).values();
  }
}
function headersFromRecord(headersObj, skipToLower = false) {
  const headers = parseHeaders(headersObj, skipToLower);
  return new MionHeadersImpl(headers);
}
function toSingleHeader$1(value) {
  if (Array.isArray(value)) return value.join(", ");
  return value;
}
function parseHeaders(headersObj, skipToLower = false) {
  if (skipToLower) return headersObj;
  const entries = Object.entries(headersObj);
  const headers = {};
  for (let i = 0; i < entries.length; i++) {
    const [name, value] = entries[i];
    if (!value) continue;
    const ln = name.toLowerCase();
    headers[ln] = toSingleHeader$1(value);
  }
  return headers;
}
const DEFAULT_HTTP_OPTIONS = {
  protocol: "http",
  port: 80,
  options: {
    /** @default 8KB same as default value in new node versions */
    maxHeaderSize: 8192
  },
  defaultResponseHeaders: {},
  /**
   * 256KB by default, same as lambda payload
   * @link https://docs.aws.amazon.com/lambda/latest/operatorguide/payload.html
   * */
  maxBodySize: 256e3
  // 256KB
};
function headersFromIncomingMessage(rawRequest) {
  return headersFromRecord(rawRequest.headers, true);
}
class ServerResponseHeadersImpl {
  constructor(resp) {
    this.resp = resp;
  }
  append(name, value) {
    this.resp.appendHeader(name, value);
  }
  delete(name) {
    this.resp.removeHeader(name);
  }
  get(name) {
    return toSingleHeader(this.resp.getHeader(name));
  }
  has(name) {
    return this.resp.hasHeader(name);
  }
  set(name, value) {
    this.resp.setHeader(name, value);
  }
  entries() {
    return getSingleHeadersObj(this.resp).entries();
  }
  keys() {
    return getSingleHeadersObj(this.resp).values();
  }
  values() {
    return getSingleHeadersObj(this.resp).values();
  }
}
function headersFromServerResponse(resp, initialHeaders) {
  if (initialHeaders) Object.entries(initialHeaders).forEach(([name, value]) => resp.setHeader(name, value));
  return new ServerResponseHeadersImpl(resp);
}
function toSingleHeader(value) {
  if (!value) return void 0;
  if (Array.isArray(value)) return value.join(", ");
  return value;
}
function getSingleHeadersObj(resp) {
  const entries = Object.entries(resp.getHeaders()).map(([name, value]) => [name, toSingleHeader(value)]);
  return Object.fromEntries(entries);
}
let httpOptions = { ...DEFAULT_HTTP_OPTIONS };
function setNodeHttpOpts(options) {
  httpOptions = {
    ...httpOptions,
    ...options
  };
  return httpOptions;
}
async function startNodeServer(options) {
  const isTest = mionRoutes.getENV("NODE_ENV") === "test";
  const isCompiling = mionRoutes.isMionCompileMode();
  if (options) setNodeHttpOpts(options);
  const port = httpOptions.port !== 80 ? `:${httpOptions.port}` : "";
  const url = `${httpOptions.protocol}://localhost${port}`;
  if (!isTest && !isCompiling)
    console.log(`mion node server running on ${url}`, {
      port: httpOptions.port,
      httpOptions
    });
  return new Promise((resolve, reject) => {
    const server = httpOptions.protocol === "https" ? https.createServer(httpOptions.options, httpRequestHandler) : http.createServer(httpOptions.options, httpRequestHandler);
    if (isCompiling) {
      console.log("Compiling routes metadata and skipping mion server initialization...");
      return resolve(server);
    }
    server.on("error", (e) => {
      reject(e);
    });
    server.listen(httpOptions.port, () => {
      resolve(server);
    });
    const shutdownHandler = function() {
      if (!isTest) console.log(`Shutting down mion server on ${url}`);
      server.close(() => {
        process.exit(0);
      });
    };
    process.on("SIGINT", shutdownHandler);
    process.on("SIGTERM", shutdownHandler);
  });
}
function httpRequestHandler(httpReq, httpResponse) {
  let replied = false;
  const nodeUrl = httpReq.url || "/";
  const queryIndex = nodeUrl.indexOf("?");
  const path = queryIndex === -1 ? nodeUrl : nodeUrl.substring(0, queryIndex);
  const urlQuery = queryIndex === -1 ? void 0 : nodeUrl.substring(queryIndex + 1);
  let size = 0;
  const bodyChunks = [];
  httpResponse.setHeader("server", "@mionjs");
  const reqHeaders = headersFromIncomingMessage(httpReq);
  const respHeaders = headersFromServerResponse(httpResponse, httpOptions.defaultResponseHeaders);
  httpReq.on("data", (data) => {
    bodyChunks.push(data);
    const chunkLength = bodyChunks[bodyChunks.length - 1].length;
    size += chunkLength;
    if (size > httpOptions.maxBodySize && !replied) {
      replied = true;
      const error = new mionRoutes.RpcError({
        publicMessage: "Payload Too Large",
        type: "request-payload-too-large"
      });
      fatalFail(httpResponse, respHeaders, error);
    }
  });
  httpReq.on("error", (e) => {
    if (replied) return;
    replied = true;
    const error = new mionRoutes.RpcError({
      publicMessage: "Connection Error",
      type: "request-connection-error",
      originalError: e
    });
    fatalFail(httpResponse, respHeaders, error);
  });
  httpReq.on("end", async () => {
    if (replied) return;
    const buffer = Buffer.concat(bodyChunks);
    const contentType = httpReq.headers["content-type"] || "";
    const isBinary = contentType.startsWith("application/octet-stream");
    let reqRawBody = isBinary ? buffer : buffer.toString();
    let reqBodyType = isBinary ? mionRoutes.SerializerModes.binary : mionRoutes.SerializerModes.stringifyJson;
    const queryBody = mionRoutes.decodeQueryBody(urlQuery, reqRawBody || void 0);
    if (queryBody) {
      reqRawBody = queryBody.rawBody;
      reqBodyType = queryBody.bodyType;
    }
    try {
      const mionResponse = await mionRoutes.dispatchRoute(
        path,
        reqRawBody,
        reqHeaders,
        respHeaders,
        httpReq,
        httpResponse,
        reqBodyType,
        urlQuery
      );
      if (replied || httpResponse.writableEnded) return;
      replied = true;
      reply(httpResponse, mionResponse);
    } catch (e) {
      if (replied) return;
      replied = true;
      const error = new mionRoutes.RpcError({
        publicMessage: "Unknown Error",
        type: "unknown-error",
        originalError: e
      });
      fatalFail(httpResponse, respHeaders, error);
    }
  });
  httpResponse.on("error", (e) => {
    if (replied) return;
    replied = true;
    const error = new mionRoutes.RpcError({
      publicMessage: "Connection Error",
      type: "response-connection-error",
      originalError: e
    });
    fatalFail(httpResponse, respHeaders, error);
  });
}
function fatalFail(httpResponse, respHeaders, error) {
  if (httpResponse.writableEnded) return;
  const routeResponse = mionRoutes.getRouterFatalErrorResponse(error, respHeaders);
  reply(httpResponse, routeResponse);
}
function reply(httpResp, mionResp) {
  httpResp.statusCode = mionResp.statusCode;
  const bodyType = mionResp.serializer;
  switch (bodyType) {
    case mionRoutes.SerializerModes.stringifyJson: {
      const buffer = Buffer.from(mionResp.rawBody, "utf8");
      httpResp.setHeader("content-length", buffer.byteLength);
      httpResp.end(buffer);
      break;
    }
    case mionRoutes.SerializerModes.json: {
      const jsonString = JSON.stringify(mionResp.body);
      const buffer = Buffer.from(jsonString, "utf8");
      httpResp.setHeader("content-length", buffer.byteLength);
      httpResp.end(buffer);
      break;
    }
    case mionRoutes.SerializerModes.binary: {
      const serializer = mionResp.binSerializer;
      httpResp.setHeader("content-length", serializer.getLength());
      httpResp.end(serializer.getBufferView());
      const onFinish = () => serializer.markAsEnded();
      httpResp.on("finish", onFinish);
      httpResp.on("close", onFinish);
      break;
    }
    default: {
      const error = new mionRoutes.RpcError({
        publicMessage: "unknown-mion-response-format",
        type: "unknown-error",
        errorData: { bodyType }
      });
      fatalFail(httpResp, mionResp.headers, error);
    }
  }
}
function __assignType(fn, args) {
  fn.__type = args;
  return fn;
}
const initHttp = __assignType(async (routerOpts, httpOpts) => {
  await mionRoutes.initMionRouter(mionRoutes.routes, routerOpts);
  return startNodeServer(httpOpts);
}, ["routerOpts", "httpOpts", "", 'P!2!8!2"8"/#']);
exports.routes = mionRoutes.routes;
exports.initHttp = initHttp;
//# sourceMappingURL=mionAppNode.js.map
