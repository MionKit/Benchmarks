# Bun Benchmark Consistency Specification

## Problem Statement

The hello world benchmark results show anomalies that indicate the Bun servers are not being tested fairly:

1. **Node.js outperforming Bun** - Node servers are 2-3x faster than Bun equivalents
2. **Hello world slower than full validation** - Elysia shows 8k req/s for hello vs 25k req/s for updateUser
3. **hono.bun completely broken** - 126,900 errors in servers benchmark, 0 successful requests

## Root Cause Analysis

### Current Architecture Issues

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Current Setup - INCONSISTENT                         │
├─────────────────────────────────────────────────────────────────────────────┤
│  Node Servers (benchmarks/*.js)          Bun Servers (apps-bun/src/*.ts)    │
│  ├── Pre-compiled JavaScript             ├── JIT compiled TypeScript        │
│  ├── Dependencies from root package.json ├── Separate package.json          │
│  ├── Initialized via benchmarks/*.js     ├── Run directly by Bun            │
│  └── Uses @hono/node-server              └── Uses Bun native server         │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Specific Issues

1. **JIT vs AOT Compilation**: Bun servers run TypeScript directly while Node servers use pre-compiled JS
2. **Server Initialization**:
   - [`elysia.bun.ts`](apps-bun/src/elysia.bun.ts:46) has `.listen(3000)` hardcoded in the app definition
   - [`hono.bun.ts`](apps-bun/src/hono.bun.ts:17) exports `app` but doesn't start a server
3. **Dependency Isolation**: [`apps-bun/package.json`](apps-bun/package.json) has its own dependencies separate from root

## Proposed Solution

### Architecture Changes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         New Setup - CONSISTENT                               │
├─────────────────────────────────────────────────────────────────────────────┤
│  All Servers Pre-compiled to _compiled-apps/                                │
│  ├── apps/src/honoAppBun.ts    → _compiled-apps/apps/src/honoAppBun.js     │
│  ├── apps/src/elysiaAppBun.ts  → _compiled-apps/apps/src/elysiaAppBun.js   │
│  └── apps/src/mionAppBun.ts    → _compiled-apps/apps/src/mionAppBun.js     │
│                                                                             │
│  Benchmark Init Files (benchmarks/*.js)                                     │
│  ├── hono.bun.js    → requires compiled honoAppBun.js, calls initHttpBun() │
│  ├── elysia.bun.js  → requires compiled elysiaAppBun.js, calls initHttpBun()│
│  └── mion.bun.js    → requires compiled mionAppBun.js, calls initHttpBun() │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Required Changes

### 1. Move and Refactor Bun App Source Files

#### 1.1 Create `apps/src/honoAppBun.ts`

Move from [`apps-bun/src/hono.bun.ts`](apps-bun/src/hono.bun.ts) and refactor to match mion pattern:

```typescript
import { Hono } from "hono";
import { UserSchema } from "../../lib/zod-schemas";

const app = new Hono();

app.get("/hello", (c) => {
  return c.json({ hello: "world" });
});

app.post("/updateUser", async (c) => {
  const rawUser = await c.req.json();
  const user = UserSchema.parse(rawUser);
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  return c.json(user);
});

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  return Bun.serve({
    port,
    fetch: app.fetch,
  });
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
  console.log("Hono Bun server running on port 3000");
}
```

#### 1.2 Create `apps/src/elysiaAppBun.ts`

Move from [`apps-bun/src/elysia.bun.ts`](apps-bun/src/elysia.bun.ts) and refactor:

```typescript
import { Elysia, t } from "elysia";

export interface User {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}

const DateString = t
  .Transform(t.String({ format: "date-time" }))
  .Decode((value) => new Date(value))
  .Encode((value) => value.toISOString());

const UserSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  surname: t.String(),
  lastUpdate: DateString,
});

// Create app without starting server
const createApp = () => {
  return new Elysia()
    .get("/hello", () => ({ hello: "world" }))
    .post(
      "/updateUser",
      ({ body }) => {
        const user = body as unknown as User;
        user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
        return user;
      },
      { body: UserSchema },
    );
};

export interface BunServerOptions {
  port?: number;
}

export const initHttpBun = (options: BunServerOptions = {}) => {
  const port = options.port ?? 3000;
  const app = createApp().listen(port);
  console.log(`Elysia server running on port ${port}`);
  return app;
};

// For direct execution
if (import.meta.main) {
  initHttpBun({ port: 3000 });
}
```

### 2. Create Benchmark Init Files

#### 2.1 Create `benchmarks/hono.bun.js`

```javascript
"use strict";

const { initHttpBun } = require("../_compiled-apps/apps/src/honoAppBun");

// Hono Bun server - uses pre-compiled TypeScript for consistent benchmarking
initHttpBun({ port: 3000 });
```

#### 2.2 Create `benchmarks/elysia.bun.js`

```javascript
"use strict";

const { initHttpBun } = require("../_compiled-apps/apps/src/elysiaAppBun");

// Elysia Bun server - uses pre-compiled TypeScript for consistent benchmarking
initHttpBun({ port: 3000 });
```

### 3. Update Root package.json Dependencies

Add Bun-specific dependencies to root [`package.json`](package.json):

```json
{
  "dependencies": {
    // ... existing dependencies ...
    "elysia": "^1.0.0",
    "@elysiajs/cors": "^1.0.0"
  },
  "devDependencies": {
    // ... existing devDependencies ...
    "@types/bun": "^1.3.8"
  }
}
```

### 4. Update lib/packages.js Configuration

Update [`lib/packages.js`](lib/packages.js) to use compiled files:

```javascript
"hono.bun": {
  hasRouter: true,
  package: "hono",
  validation: "✓",
  version: "3.12.6",
  description: "hono bun server with Zod validation",
  isBun: true,
  fileExtension: ".js",  // Use compiled JS
  // Remove srcDir - use default benchmarks/
},
"elysia.bun": {
  checked: false,
  hasRouter: true,
  package: "elysia",
  validation: "✓",
  version: "1.0.0",
  description: "Elysia framework with TypeBox validation",
  isBun: true,
  fileExtension: ".js",  // Use compiled JS
  // Remove srcDir - use default benchmarks/
},
```

### 5. Update Vite Build Configuration

Update [`vite.config.ts`](vite.config.ts) to include new Bun app files:

The current config already scans `apps/src` directory, so new files will be automatically included.

### 6. Update tsconfig.json

Ensure [`tsconfig.json`](tsconfig.json) includes the new files:

```json
{
  "include": ["apps", "apps/src/**/*.ts"]
  // ...
}
```

### 7. Clean Up apps-bun Directory

After migration is complete and verified:

- Remove [`apps-bun/src/hono.bun.ts`](apps-bun/src/hono.bun.ts)
- Remove [`apps-bun/src/elysia.bun.ts`](apps-bun/src/elysia.bun.ts)
- Consider removing entire `apps-bun/` directory if no longer needed

## Implementation Checklist

- [ ] Create `apps/src/honoAppBun.ts` with proper export pattern
- [ ] Create `apps/src/elysiaAppBun.ts` with proper export pattern
- [ ] Create `benchmarks/hono.bun.js` init file
- [ ] Create `benchmarks/elysia.bun.js` init file
- [ ] Add elysia and @elysiajs/cors to root package.json dependencies
- [ ] Update `lib/packages.js` to remove srcDir and use fileExtension: ".js"
- [ ] Run `npm run build` to compile new TypeScript files
- [ ] Test each server manually:
  - [ ] `bun benchmarks/hono.bun.js` - verify starts on port 3000
  - [ ] `bun benchmarks/elysia.bun.js` - verify starts on port 3000
  - [ ] Test `/hello` endpoint returns `{"hello":"world"}`
  - [ ] Test `/updateUser` endpoint with valid payload
- [ ] Run quick benchmark to verify results make sense:
  - [ ] `npm run quick-bench-servers`
  - [ ] `npm run bench-servers-hello` (or quick version)
- [ ] Compare results - Bun should now be competitive with or faster than Node
- [ ] Clean up `apps-bun/` directory

## Expected Outcome

After these changes:

- All servers will be pre-compiled JavaScript
- All servers will use the same initialization pattern
- Dependencies will be managed from a single package.json
- Benchmark results should show Bun servers performing at their true potential
- hono.bun should no longer have errors in the servers benchmark

## Verification Criteria

1. **No errors**: All benchmarks complete without errors
2. **Bun competitive**: Bun servers should be at least as fast as Node equivalents
3. **Hello faster than validation**: Hello world should be faster than updateUser for all frameworks
4. **Consistent patterns**: All Bun servers follow the same init pattern as mion.bun
