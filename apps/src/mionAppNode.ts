/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionkit/node";
import { initMionRouter, RouterOptions } from "@mionkit/router";
import { routes } from "./mionRoutes";

export { routes };

export const initHttp = async (
  routerOpts?: Partial<RouterOptions>,
  httpOpts?: Partial<NodeHttpOptions>,
) => {
  await initMionRouter(routes, routerOpts);
  return startNodeServer(httpOpts);
};
