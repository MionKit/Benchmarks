/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { BunHttpOptions, startBunServer } from "@mionjs/platform-bun";
import { initMionRouter, RouterOptions } from "@mionjs/router";
import { aotCaches } from "virtual:mion-aot/caches";
import { routes } from "./mionRoutes";

export { routes };

export const initHttpBun = async (
  routerOpts?: Partial<RouterOptions>,
  options?: Partial<BunHttpOptions>,
) => {
  await initMionRouter(routes, { aotCaches, ...routerOpts });
  return startBunServer(options);
};
