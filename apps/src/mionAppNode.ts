/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionkit/http";
import { type Routes, route } from "@mionkit/router";
import { User } from "./models";

export const routes = {
  hello: route((): string => "world"),
  updateUser: route((ctx, user: User): User => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  }),
} satisfies Routes;

export const initHttp = (options?: Partial<NodeHttpOptions>) => {
  return startNodeServer(options);
};

export { registerRoutes, initRouter } from "@mionkit/router";
