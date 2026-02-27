/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { BunHttpOptions, startBunServer } from "@mionkit/bun";
import { initMionRouter, RouterOptions } from "@mionkit/router";
import { routes } from "./mionRoutes";

export { routes };

export const initHttpBun = async (
  routerOpts?: Partial<RouterOptions>,
  options?: Partial<BunHttpOptions>,
) => {
  await initMionRouter(routes, routerOpts);
  return startBunServer(options);
};
