/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { initHttpApp } from "@mionkit/http";
import { registerRoutes } from "@mionkit/router";
import type { RouterOptions, Routes, Route } from "@mionkit/router";
import { SayHello, User } from "./models";

export const app = {};
export const shared = {};
export type App = typeof app;
export type Shared = typeof SharedArrayBuffer;

export const mionSayHelloRoute: Route = (): SayHello => ({ hello: "world" });

export const routes: Routes = {
  "/": mionSayHelloRoute,
  updateUser: (app, context, user: User): User => {
    return {
      ...user,
      lastUpdate: new Date(),
    };
  },
};

export const initHttp = (options?: Partial<RouterOptions>) => {
  return initHttpApp<App, Shared>(app, undefined, options);
};

export { registerRoutes as addRoutes };
