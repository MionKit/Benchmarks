/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { BunHttpOptions, startBunServer } from "@mionkit/bun";
import { type Routes, type Route, route } from "@mionkit/router";
import { SayHello, User } from "./models";

export const shared = {};
export type Shared = typeof SharedArrayBuffer;

export const mionSayHelloRoute = route((): string => "world") satisfies Route;

export const updateUser = route((ctx, user: User): User => {
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return user;
}) satisfies Route;

export const routes = {
  hello: mionSayHelloRoute,
  updateUser,
} satisfies Routes;

export const initHttpBun = (options?: Partial<BunHttpOptions>) => {
  return startBunServer(options);
};

export { registerRoutes, initRouter } from "@mionkit/router";
