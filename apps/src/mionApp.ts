/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { HttpOptions, initHttpRouter } from "@mionkit/http";
import { type Routes, type Route } from "@mionkit/router";
import { SayHello, User } from "./models";

export const shared = {};
export type Shared = typeof SharedArrayBuffer;

export const mionSayHelloRoute: Route = (): SayHello => ({ hello: "world" });
export const updateUser: Route = (context, user: User): User => {
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
};

export const updateUserNoAppOrContext = async (user: User): Promise<User> => {
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
};

export const routes: Routes = {
  "/": mionSayHelloRoute,
  sayHello: mionSayHelloRoute,
  updateUser,
};

export const routesWithAsyncCallContext: Routes = {
  "/": mionSayHelloRoute,
  sayHello: mionSayHelloRoute,
  updateUser: updateUserNoAppOrContext as any,
};

export const initHttp = (options?: Partial<HttpOptions>) => {
  return initHttpRouter(options);
};

export { registerRoutes as addRoutes } from "@mionkit/router";
