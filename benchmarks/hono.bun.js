"use strict";

const { initHttpBun } = require("../_compiled-apps/apps/src/honoAppBun");

// Hono Bun server - uses pre-compiled TypeScript for consistent benchmarking
initHttpBun({ port: 3000 });
