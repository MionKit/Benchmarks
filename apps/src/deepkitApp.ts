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
import { SayHello, User } from "./models";

type mionUpdate = {
  "/updateUser": User;
};

type mionSayHelloResponse = {
  "/": SayHello;
};

let app: App<any>;

export const deepKitSayHelloRoute = (): mionSayHelloResponse => {
  return { "/": { hello: "world" } };
};

export const setRoutes = () => {
  const router = app.get(HttpRouterRegistry);

  router.any("/", deepKitSayHelloRoute);

  router.post("/updateUser", (body: HttpBody<mionUpdate>): mionUpdate => {
    const user = body["/updateUser"];
    return {
      "/updateUser": {
        ...user,
        lastUpdate: new Date(),
      },
    };
  });
};

export const initDeepkitApp = () => {
  app = new App({
    imports: [new FrameworkModule()],
  });

  const httpKernel = app.get(HttpKernel);
  const router = app.get(HttpRouterRegistry);

  const server = new Server(
    { IncomingMessage: HttpRequest, ServerResponse: HttpResponse as any },
    (req, res) => {
      httpKernel.handleRequest(req, res);
    }
  );

  return { deepKitApp: app, deepkitServer: server, deepKitRouter: router };
};
