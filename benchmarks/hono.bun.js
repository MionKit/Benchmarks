"use strict";

const { initHttpBun } = require("../apps/src/honoAppBun.ts");

// Hono Bun server - Bun runs TypeScript natively
initHttpBun({ port: 3000 });
