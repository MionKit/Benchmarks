import Fastify, { FastifyInstance, FastifyReply, HTTPMethods } from "fastify";
import {
  StatusCodes,
  initRouter,
  getRouterOptions,
  dispatchRoute,
  RouteError,
  getPublicErrorFromRouteError,
  Obj,
  SharedDataFactory,
  RouterOptions,
  RawRequest,
  Headers,
  PublicError,
} from "@mionkit/router";
import { DEFAULT_HTTP_OPTIONS, HttpOptions } from "@mionkit/http";
import fp from "fastify-plugin";
import { createServer } from "http";

// function fastifyMion(fastify, options, next) {

// }

// module.exports = fp(fastifyMion, {
//   fastify: "4.x",
//   name: "@fastify/mion",
// });
// module.exports.default = fastifyExpress;

type Logger = typeof console | undefined;

let fastify: FastifyInstance;
let httpOptions: HttpOptions;
const allMethods: HTTPMethods[] = ["GET", "POST", "PUT", "OPTIONS"];

export const initFsHttp = <App extends Obj, SharedData extends Obj>(
  app: App,
  handlersDataFactory?: SharedDataFactory<SharedData>,
  routerOptions?: Partial<RouterOptions<any>>
) => {
  const serverFactory = (handler, opts) => {
    const server = createServer((req, res) => {
      req.method = "POST"; // redirects any method to POST fastify request
      handler(req, res);
    });

    return server;
  };

  fastify = Fastify({
    logger: false,
    serverFactory,
  });

  initRouter(app, handlersDataFactory, routerOptions);
  fastify.post("*", (fsRequest, fsResponse) => {
    return dispatchRoute(fsRequest.url, {
      rawRequest: fsRequest as any as RawRequest,
      rawResponse: fsResponse,
    })
      .then((routeResponse) => {
        addResponseHeaders(fsResponse, routeResponse.headers);

        reply(fsResponse, routeResponse.json, routeResponse.statusCode);
      })
      .catch((e) => {
        const error = new RouteError({
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
          publicMessage: "Internal Error",
          originalError: e,
        });
        replyError(fsResponse, console, error);
      });
  });
};

export const startFsServer = async (
  httpOptions_: Partial<HttpOptions> = {}
) => {
  httpOptions = {
    ...DEFAULT_HTTP_OPTIONS,
    ...httpOptions_,
  };
  // Run the server!
  try {
    await fastify.listen(httpOptions_);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

const reply = (
  httpResponse: FastifyReply,
  json: string,
  statusCode: number,
  statusMessage?: string
) => {
  httpResponse.header("server", "@mionkit/http");
  httpResponse.header("content-type", getRouterOptions().responseContentType);
  httpResponse.status(statusCode);
  httpResponse.send(json);

  // TODO: investigate how to set status message
};

const replyError = (
  httpResponse: FastifyReply,
  logger: Logger,
  routeError: RouteError
) => {
  const publicError: PublicError = getPublicErrorFromRouteError(routeError);
  if (httpResponse.log) httpResponse.log.error(routeError);
  const jsonBody = getRouterOptions().bodyParser.stringify({
    errors: [publicError],
  });
  reply(httpResponse, jsonBody, publicError.statusCode);
};

const addResponseHeaders = (httpResponse: FastifyReply, headers: Headers) => {
  Object.entries(headers).forEach(([key, value]) =>
    httpResponse.header(key, `${value}`)
  );
};
