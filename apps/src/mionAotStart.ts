/* ########
 * AOT start script for mion benchmarks.
 * Run by vite-node during build to collect AOT caches.
 * Must NOT start an HTTP server and must NOT import virtual:mion-aot/* modules.
 * ######## */

import { initMionRouter } from "@mionjs/router";
import { routes } from "./mionRoutes";

await initMionRouter(routes);
