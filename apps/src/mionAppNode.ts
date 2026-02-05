/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionkit/node";
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
    // Update timestamps
    user.updatedAt = new Date();
    user.lastLoginAt = new Date();

    // Update profile modification
    user.profile.displayName = `${user.profile.firstName} ${user.profile.lastName.charAt(0)}.`;

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
