/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionkit/http";
import { type Routes, type Route, route } from "@mionkit/router";
import { SayHello, User } from "./models";

export const shared = {};
export type Shared = typeof SharedArrayBuffer;

export const mionSayHelloRoute = route((): string => "world");

export const updateUser = route((context, user: User): User => {
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
}) satisfies Route;

export const routes = {
  hello: mionSayHelloRoute,
  updateUser,
} satisfies Routes;

export const initHttp = (options?: Partial<NodeHttpOptions>) => {
  return startNodeServer(options);
};

export { registerRoutes, initRouter } from "@mionkit/router";
