/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { App } from "@deepkit/app";
import { FrameworkModule } from "@deepkit/framework";
import { HttpRouterRegistry, HttpBody } from "@deepkit/http";
import { Logger, LogMessage, LoggerTransport } from "@deepkit/logger";
import { SayHello, User } from "./models";

// LoggerTransport to disable console output
export class MyTransport implements LoggerTransport {
  constructor() {
    console.log("MyTransport constructor");
  }
  write(message: LogMessage) {
    // does nothing to disable console output
  }

  supportsColor() {
    return false;
  }
}

export const initDeepkitApp = () => {
  const app = new App({
    imports: [new FrameworkModule()],
  }).setup((module, config) => {
    module
      .setupGlobalProvider(undefined, Logger)
      .setTransport([new MyTransport()]);
  });

  const router = app.get(HttpRouterRegistry);

  router.any("/hello", (): SayHello => {
    return { hello: "world" };
  });

  router.post("/updateUser", (body: HttpBody<User>): User => {
    const user = body;
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  });

  return { deepKitApp: app, deepKitRouter: router };
};
