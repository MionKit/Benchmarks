import Fastify, { FastifyInstance, FastifyReply } from "fastify";
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

type Logger = typeof console | undefined;

let fastify: FastifyInstance;
let httpOptions: HttpOptions;

export const initFsHttp = <App extends Obj, SharedData extends Obj>(
  app: App,
  handlersDataFactory?: SharedDataFactory<SharedData>,
  routerOptions?: Partial<RouterOptions<any>>
) => {
  fastify = Fastify({
    logger: false,
  });
  initRouter(app, handlersDataFactory, routerOptions);
  // Declare a route
  fastify.get("*", async function handler(fsRequest, fsResponse) {
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
