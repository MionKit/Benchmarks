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
import { getJitFnCaches } from "@mionkit/core";
import { User } from "./models";

// Diagnostic: track request count and memory
let requestCount = 0;

// Helper to get cache size (works with both Map and plain objects)
const getCacheSize = (cache: any): number => {
  if (cache instanceof Map) return cache.size;
  if (typeof cache === "object" && cache !== null)
    return Object.keys(cache).length;
  return 0;
};

export const routes = {
  hello: route((): string => {
    requestCount++;
    if (requestCount % 1000 === 0) {
      const { jitFnsCache, pureFnsCache } = getJitFnCaches();
      const mem = process.memoryUsage();
      console.log(
        `[mion.node] Request #${requestCount} - JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)} - Memory: heapUsed=${(mem.heapUsed / 1024 / 1024).toFixed(1)}MB, rss=${(mem.rss / 1024 / 1024).toFixed(1)}MB`,
      );
    }
    return "world";
  }),
  updateUser: route((ctx, user: User): User => {
    requestCount++;
    if (requestCount % 1000 === 0) {
      const { jitFnsCache, pureFnsCache } = getJitFnCaches();
      const mem = process.memoryUsage();
      console.log(
        `[mion.node] Request #${requestCount} - JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)} - Memory: heapUsed=${(mem.heapUsed / 1024 / 1024).toFixed(1)}MB, rss=${(mem.rss / 1024 / 1024).toFixed(1)}MB`,
      );
    }

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

  // Log initial JIT cache state
  const { jitFnsCache, pureFnsCache } = getJitFnCaches();
  console.log(
    `[mion.node] Initial JIT Cache: jitFns=${getCacheSize(jitFnsCache)}, pureFns=${getCacheSize(pureFnsCache)}`,
  );

  return startNodeServer(httpOpts);
};
