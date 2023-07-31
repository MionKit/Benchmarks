/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { Server } from "http";
import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import {
  HttpRouterRegistry,
  HttpBody,
  HttpRequest,
  HttpResponse,
  HttpKernel,
} from "@deepkit/http";
import {
  Logger,
  LogMessage,
  LoggerTransport,
  LoggerLevel,
} from "@deepkit/logger";
import { SayHello, User } from "./models";

let app: App<any>;

// LoggerTransport to disable console output
export class MyTransport implements LoggerTransport {
  write(message: LogMessage) {
    // does nothing to disable console output
  }

  supportsColor() {
    return false;
  }
}

export const deepKitSayHelloRoute = (): SayHello => {
  return { hello: "world" };
};

export const setRoutes = () => {
  const router = app.get(HttpRouterRegistry);

  router.any("/", deepKitSayHelloRoute);

  router.post("/updateUser", (body: HttpBody<User>): User => {
    const user = body;
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  });
};

export const initDeepkitApp = () => {
  app = new App({
    imports: [new FrameworkModule()],
  }).setup((module, config) => {
    module
      .setupGlobalProvider(undefined, Logger)
      .setTransport([new MyTransport()]);
  });

  const httpKernel = app.get(HttpKernel);
  // console.log("httpKernel", httpKernel);
  const router = app.get(HttpRouterRegistry);

  const server = new Server(
    { IncomingMessage: HttpRequest, ServerResponse: HttpResponse as any },
    (req, res) => {
      httpKernel.handleRequest(req, res);
    }
  );

  return { deepKitApp: app, deepkitServer: server, deepKitRouter: router };
};
