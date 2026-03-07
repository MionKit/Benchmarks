/* ########
 * 2022 mion
 * Author: Ma-jerez
 * License: MIT
 * The software is provided "as is", without warranty of any kind.
 * ######## */

import { BunHttpOptions, startBunServer } from "@mionjs/platform-bun";
import {
  type Routes,
  route,
  initMionRouter,
  RouterOptions,
} from "@mionjs/router";
import { getJitFnCaches } from "@mionjs/core";
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

// Diagnostic logging for memory leak investigation
let lastJitCacheSize = 0;
let lastPureCacheSize = 0;
let snapshotCount = 0;

const takeHeapSnapshot = async () => {
  const Bun = (globalThis as any).Bun;
  if (!Bun?.generateHeapSnapshot) {
    console.log("[HEAP] Bun.generateHeapSnapshot not available");
    return;
  }

  // Force GC before snapshot
  Bun.gc(true);

  const filename = `heap-snapshot-${snapshotCount++}.json`;
  const snapshot = Bun.generateHeapSnapshot();
  await Bun.write(filename, JSON.stringify(snapshot));
  console.log(`[HEAP] Snapshot saved to ${filename}`);
};

const logCacheGrowth = async () => {
  const { jitFnsCache, pureFnsCache } = getJitFnCaches();
  const jitSize = Object.keys(jitFnsCache).length;
  const pureSize = Object.keys(pureFnsCache).length;

  // Force GC before measuring
  if ((globalThis as any).Bun?.gc) {
    (globalThis as any).Bun.gc(true);
  }

  const memUsage =
    (globalThis as any).Bun?.memoryUsage?.() || process.memoryUsage?.();
  const heapMB = (memUsage?.heapUsed || 0) / 1024 / 1024;
  const rssMB = (memUsage?.rss || 0) / 1024 / 1024;

  // Log if cache size changed
  if (jitSize !== lastJitCacheSize || pureSize !== lastPureCacheSize) {
    console.log(
      `[CACHE CHANGE] JIT: ${lastJitCacheSize} -> ${jitSize}, Pure: ${lastPureCacheSize} -> ${pureSize}`,
    );

    // Log new JIT cache keys if growing
    if (jitSize > lastJitCacheSize) {
      const keys = Object.keys(jitFnsCache);
      console.log(`[NEW JIT KEYS] Last 5: ${keys.slice(-5).join(", ")}`);
    }

    lastJitCacheSize = jitSize;
    lastPureCacheSize = pureSize;
  }

  console.log(
    `[MEMORY] JIT: ${jitSize}, Pure: ${pureSize}, Heap: ${heapMB.toFixed(2)}MB, RSS: ${rssMB.toFixed(2)}MB`,
  );

  // Take heap snapshot every 3 seconds (first 3 snapshots)
  if (snapshotCount < 3) {
    await takeHeapSnapshot();
  }
};

export const initHttpBun = async (
  routerOpts?: Partial<RouterOptions>,
  options?: Partial<BunHttpOptions>,
) => {
  await initMionRouter(routes, routerOpts);

  // Start diagnostic logging
  console.log(
    "[DIAGNOSTIC] Starting JIT cache monitoring with heap snapshots...",
  );
  const { jitFnsCache, pureFnsCache } = getJitFnCaches();
  lastJitCacheSize = Object.keys(jitFnsCache).length;
  lastPureCacheSize = Object.keys(pureFnsCache).length;
  console.log(
    `[INITIAL] JIT Cache: ${lastJitCacheSize}, Pure Cache: ${lastPureCacheSize}`,
  );

  // Take initial heap snapshot
  await takeHeapSnapshot();

  // Log every 3 seconds
  setInterval(logCacheGrowth, 3000);

  return startBunServer(options);
};
