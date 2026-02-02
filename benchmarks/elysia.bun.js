"use strict";

const { initHttpBun } = require("../_compiled-apps/apps/src/elysiaAppBun");

// Elysia Bun server - uses pre-compiled TypeScript for consistent benchmarking
initHttpBun({ port: 3000 });
