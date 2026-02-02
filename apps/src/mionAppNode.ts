/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionkit/http";
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

export const initHttp = async (
  routerOpts?: Partial<RouterOptions>,
  httpOpts?: Partial<NodeHttpOptions>,
) => {
  await initMionRouter(routes, routerOpts);
  return startNodeServer(httpOpts);
};
