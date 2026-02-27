"use strict";

const { initHttpBun } = require("../apps/src/elysiaAppBun.ts");

// Elysia Bun server - Bun runs TypeScript natively
initHttpBun({ port: 3000 });
