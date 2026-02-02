/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { BunHttpOptions, startBunServer } from "@mionkit/bun";
import {
  type Routes,
  route,
  initMionRouter,
  RouterOptions,
} from "@mionkit/router";
import { User } from "./models";

export const routes = {
  hello: route((): string => "world"),
  updateUser: route((ctx, user: User): User => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  }),
} satisfies Routes;

export const initHttpBun = async (
  routerOpts?: Partial<RouterOptions>,
  options?: Partial<BunHttpOptions>,
) => {
  await initMionRouter(routes, routerOpts);
  return startBunServer(options);
};
