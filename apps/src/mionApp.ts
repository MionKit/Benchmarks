/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { initHttpRouter } from "@mionkit/http";
import {
  type RouterOptions,
  type Routes,
  type Route,
  getCallContext,
} from "@mionkit/router";
import { SayHello, User } from "./models";

export const shared = {};
export type Shared = typeof SharedArrayBuffer;

export const mionSayHelloRoute: Route = (): SayHello => ({ hello: "world" });
export const updateUser: Route = (context, user: User): User => {
  return {
    ...user,
    lastUpdate: new Date(),
  };
};

export const updateUserNoAppOrContext = async (user: User): Promise<User> => {
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
};

// this is just for manual testing, not used in the benchmarks
export const logAsyncCallContext = (name: string): { hello: string } => {
  const callContext = getCallContext();
  console.log(callContext);
  return { hello: name };
};

export const routes: Routes = {
  "/": mionSayHelloRoute,
  updateUser,
};

export const routesWithAsyncCallContext: Routes = {
  "/": mionSayHelloRoute,
  updateUser: updateUserNoAppOrContext as any,
  logAsyncCallContext: logAsyncCallContext as any,
};

export const initHttp = (options?: Partial<RouterOptions>) => {
  return initHttpRouter<Shared>(undefined, options);
};

export { registerRoutes as addRoutes } from "@mionkit/router";
