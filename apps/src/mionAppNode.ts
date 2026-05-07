/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { NodeHttpOptions, startNodeServer } from "@mionjs/platform-node";
import { initMionRouter, RouterOptions } from "@mionjs/router";
import { aotCaches } from "virtual:mion-aot/caches";
import { routes } from "./mionRoutes";

export { routes };

export const initHttp = async (
  routerOpts?: Partial<RouterOptions>,
  httpOpts?: Partial<NodeHttpOptions>,
) => {
  await initMionRouter(routes, { aotCaches, ...routerOpts });
  return startNodeServer(httpOpts);
};
