# Simple User Benchmark Implementation Specification

## Overview

This document outlines the implementation plan for adding a new "simple-user" benchmark to the mion-benchmarks repository. The simple-user benchmark will test a simpler data model compared to the existing complex "update-user" benchmark, providing insights into framework performance with minimal validation overhead.

## SimpleUser Model Definition

```typescript
export interface SimpleUser {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}
```

This model is intentionally minimal with:

- 3 primitive fields: `id` (number), `name` (string), `surname` (string)
- 1 Date field: `lastUpdate` (requires date coercion/serialization)

## Architecture Overview

```mermaid
flowchart TB
    subgraph Entry Points
        R[reports.js]
        BB[benchmark-bench.js]
        BC[benchmark-compare.js]
    end

    subgraph Core Libraries
        B[lib/bench.js]
        A[lib/autocannon.js]
        P[lib/packages.js]
        Z[lib/zod-schemas.ts]
    end

    subgraph Benchmark Servers
        M[mion.js]
        MB[mion.bun.js]
        F[fastify.js]
        E[express.js]
        H[hono.js]
        HB[hono.bun.js]
        EB[elysia.bun.js]
        HP[hapi.js]
        HN[http-node.js]
    end

    subgraph TypeScript Apps
        MA[mionAppNode.ts]
        MAB[mionAppBun.ts]
        HAB[honoAppBun.ts]
        EAB[elysiaAppBun.ts]
        MOD[models.ts]
    end

    subgraph Output
        RSU[results-simple-user/]
        BRSU[benchmark-results-simple-user.json]
        SUM[SIMPLE-USER.md]
        CSU[charts-servers-simple/]
    end

    R --> B
    BB --> B
    B --> A
    A --> Benchmark Servers
    BC --> RSU
    BC --> BRSU
    BC --> SUM
    BC --> CSU

    Benchmark Servers --> TypeScript Apps
    TypeScript Apps --> MOD
    Z --> Benchmark Servers
```

## Files to Create

### 1. Results Directory

- **Path**: `results-simple-user/`
- **Purpose**: Store individual benchmark results for each server
- **Files created during benchmark**: `{server-name}.json` for each server

### 2. Aggregate Results File

- **Path**: `benchmark-results-simple-user.json`
- **Purpose**: Store aggregated benchmark results in JSON format
- **Initial content**: `[]` (empty array)

### 3. Documentation File

- **Path**: `SIMPLE-USER.md`
- **Purpose**: Display benchmark results with charts and tables
- **Structure**: Similar to UPDATE-USER.md with header, description, and results section

### 4. Charts Directory

- **Path**: `assets/public/charts-servers-simple/`
- **Purpose**: Store generated chart images for simple-user benchmark
- **Files generated**: `requests.png`, `latency.png`, `throughput.png`, `maxMem.png`, `memSeries.png`

## Files to Modify

### 1. [`apps/src/models.ts`](apps/src/models.ts)

**Changes**: Add SimpleUser interface

```typescript
// Add after existing User interface
export interface SimpleUser {
  id: number;
  name: string;
  surname: string;
  lastUpdate: Date;
}
```

### 2. [`lib/zod-schemas.ts`](lib/zod-schemas.ts)

**Changes**: Add SimpleUser Zod schema

```typescript
// Simple User schema for simple-user benchmark
export const SimpleUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(),
  })
  .strict();

export type SimpleUser = z.infer<typeof SimpleUserSchema>;
```

### 3. [`lib/autocannon.js`](lib/autocannon.js)

**Changes**:

1. Add new results directory constant
2. Update `setResultsDirectory()` function
3. Add `generateSimpleUser()` function
4. Update `run()` function to handle simple-user benchmark

```javascript
// Add new directory constant
const resultsDirectorySimpleUser = path.join(
  process.cwd(),
  "results-simple-user",
);

// Update setResultsDirectory function
function setResultsDirectory(benchmarkName) {
  switch (benchmarkName) {
    case "servers-hello":
      resultsDirectory = resultsDirectoryServerHello;
      break;
    case "servers-simple":
      resultsDirectory = resultsDirectorySimpleUser;
      break;
    case "servers":
    default:
      resultsDirectory = resultsDirectoryServer;
      break;
  }
}

// Add new payload generator
function generateSimpleUser(isMion = false) {
  const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const userJson = `{"id":${id},"name":"John","surname":"Doe","lastUpdate":"2024-01-15T10:30:00.000Z"}`;
  return isMion ? `[${userJson}]` : userJson;
}

// Update run() function to handle new benchmark type
// Add condition for "servers-simple" benchmark
```

### 4. [`benchmark-compare.js`](benchmark-compare.js)

**Changes**:

1. Update `getBenchmarkOptions()` to include simple-user option
2. Update `setBenchmark()` function with simple-user configuration

```javascript
// In getBenchmarkOptions()
choices: [
  { name: "servers => compare multiple libraries (update User)", value: "servers" },
  { name: "servers => compare multiple libraries (hello world)", value: "servers-hello" },
  { name: "servers => compare multiple libraries (simple user)", value: "servers-simple" },
]

// In setBenchmark()
case "servers-simple":
  resultsMarkdownFilename = "SIMPLE-USER.md";
  resultsPath = join(process.cwd(), "results-simple-user");
  resultsJsonFilename = "benchmark-results-simple-user.json";
  info = benchmarkServers.info;
  chartsDirectory = join(process.cwd(), "assets", "public", "charts-servers-simple");
  break;
```

### 5. [`reports.js`](reports.js)

**Changes**: Add simple-user benchmark type

```javascript
const BENCHMARK_TYPES = {
  user: {
    name: "servers",
    description: "Update User benchmark (POST /updateUser)",
  },
  "hello-world": {
    name: "servers-hello",
    description: "Hello World benchmark (GET /hello)",
  },
  "simple-user": {
    name: "servers-simple",
    description: "Simple User benchmark (POST /updateSimpleUser)",
  },
};

// Update validTypes array
const validTypes = ["user", "hello-world", "simple-user", "all"];
```

### 6. Benchmark Server Files

Each server needs a new `/updateSimpleUser` endpoint:

#### [`benchmarks/fastify.js`](benchmarks/fastify.js)

```javascript
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

fastify.post("/updateSimpleUser", async function (req, reply) {
  const user = SimpleUserSchema.parse(req.body);
  user.lastUpdate = new Date();
  reply.send(user);
});
```

#### [`benchmarks/express.js`](benchmarks/express.js)

```javascript
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

app.post("/updateSimpleUser", function (req, res) {
  const user = SimpleUserSchema.parse(req.body);
  user.lastUpdate = new Date();
  res.json(user);
});
```

#### [`benchmarks/hono.js`](benchmarks/hono.js)

```javascript
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

app.post("/updateSimpleUser", async (c) => {
  const rawUser = await c.req.json();
  const user = SimpleUserSchema.parse(rawUser);
  user.lastUpdate = new Date();
  return c.json(user);
});
```

#### [`benchmarks/hapi.js`](benchmarks/hapi.js)

```javascript
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

server.route({
  method: "POST",
  path: "/updateSimpleUser",
  config: {
    cache: false,
    response: { ranges: false },
    state: { parse: false },
  },
  handler: function (request, h) {
    const user = SimpleUserSchema.parse(request.payload);
    user.lastUpdate = new Date();
    return user;
  },
});
```

#### [`benchmarks/http-node.js`](benchmarks/http-node.js)

```javascript
const { UserSchema, SimpleUserSchema } = require("../lib/zod-schemas");

// Add in request handler
} else if (req.url === "/updateSimpleUser") {
  try {
    const body = JSON.parse(rawBody);
    const user = SimpleUserSchema.parse(body);
    user.lastUpdate = new Date();
    const resBody = JSON.stringify(user);
    reply(res, resBody, 200);
  } catch (err) {
    // error handling
  }
}
```

### 7. TypeScript App Files

#### [`apps/src/mionAppNode.ts`](apps/src/mionAppNode.ts)

```typescript
import { User, SimpleUser } from "./models";

export const routes = {
  hello: route((): string => "world"),
  updateUser: route((ctx, user: User): User => {
    /* existing */
  }),
  updateSimpleUser: route((ctx, user: SimpleUser): SimpleUser => {
    user.lastUpdate = new Date();
    return user;
  }),
} satisfies Routes;
```

#### [`apps/src/mionAppBun.ts`](apps/src/mionAppBun.ts)

```typescript
import { User, SimpleUser } from "./models";

export const routes = {
  hello: route((): string => "world"),
  updateUser: route((ctx, user: User): User => {
    /* existing */
  }),
  updateSimpleUser: route((ctx, user: SimpleUser): SimpleUser => {
    user.lastUpdate = new Date();
    return user;
  }),
} satisfies Routes;
```

#### [`apps/src/honoAppBun.ts`](apps/src/honoAppBun.ts)

```typescript
// Add SimpleUser Zod schema
const SimpleUserSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    surname: z.string(),
    lastUpdate: z.coerce.date(),
  })
  .strict();

// Add route
app.post("/updateSimpleUser", async (c) => {
  const rawUser = await c.req.json();
  const user = SimpleUserSchema.parse(rawUser);
  user.lastUpdate = new Date();
  return c.json(user);
});
```

#### [`apps/src/elysiaAppBun.ts`](apps/src/elysiaAppBun.ts)

```typescript
// Add SimpleUser TypeBox schema
const SimpleUserSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  surname: t.String(),
  lastUpdate: DateString,
});

// Add route
.post(
  "/updateSimpleUser",
  ({ body }) => {
    const user = body as unknown as SimpleUser;
    user.lastUpdate = new Date();
    return user;
  },
  { body: SimpleUserSchema }
)
```

## Implementation Order

1. **Phase 1: Model & Schema Definition**
   - Add SimpleUser interface to [`apps/src/models.ts`](apps/src/models.ts)
   - Add SimpleUserSchema to [`lib/zod-schemas.ts`](lib/zod-schemas.ts)

2. **Phase 2: Core Infrastructure**
   - Update [`lib/autocannon.js`](lib/autocannon.js) with simple-user support
   - Update [`benchmark-compare.js`](benchmark-compare.js) with simple-user configuration
   - Update [`reports.js`](reports.js) with simple-user benchmark type

3. **Phase 3: Benchmark Servers - Node.js**
   - Update [`benchmarks/fastify.js`](benchmarks/fastify.js)
   - Update [`benchmarks/express.js`](benchmarks/express.js)
   - Update [`benchmarks/hono.js`](benchmarks/hono.js)
   - Update [`benchmarks/hapi.js`](benchmarks/hapi.js)
   - Update [`benchmarks/http-node.js`](benchmarks/http-node.js)

4. **Phase 4: Benchmark Servers - TypeScript/Bun**
   - Update [`apps/src/mionAppNode.ts`](apps/src/mionAppNode.ts)
   - Update [`apps/src/mionAppBun.ts`](apps/src/mionAppBun.ts)
   - Update [`apps/src/honoAppBun.ts`](apps/src/honoAppBun.ts)
   - Update [`apps/src/elysiaAppBun.ts`](apps/src/elysiaAppBun.ts)

5. **Phase 5: Output Files & Documentation**
   - Create `results-simple-user/` directory
   - Create `benchmark-results-simple-user.json` file
   - Create `SIMPLE-USER.md` documentation
   - Create `assets/public/charts-servers-simple/` directory

6. **Phase 6: Build & Test**
   - Run `npm run build` to compile TypeScript apps
   - Run `node reports.js simple-user --quick` to test

## Test Payload

The simple-user benchmark will use this payload:

```json
{
  "id": 12345678901234,
  "name": "John",
  "surname": "Doe",
  "lastUpdate": "2024-01-15T10:30:00.000Z"
}
```

For mion servers (RPC-style), wrapped in array:

```json
[
  {
    "id": 12345678901234,
    "name": "John",
    "surname": "Doe",
    "lastUpdate": "2024-01-15T10:30:00.000Z"
  }
]
```

## Expected Behavior

1. **Endpoint**: `POST /updateSimpleUser`
2. **Input**: SimpleUser JSON payload
3. **Processing**:
   - Validate input against SimpleUser schema
   - Deserialize `lastUpdate` from ISO string to Date
   - Update `lastUpdate` to current timestamp
4. **Output**: Updated SimpleUser JSON with serialized Date

## Running the Benchmark

After implementation:

```bash
# Quick test run
node reports.js simple-user --quick

# Full benchmark run
node reports.js simple-user

# Run all benchmarks including simple-user
node reports.js all

# Run specific servers only
node reports.js simple-user --servers=mion.bun,hono.bun,fastify
```

## Summary of Changes

| File                                   | Action | Description                       |
| -------------------------------------- | ------ | --------------------------------- |
| `apps/src/models.ts`                   | Modify | Add SimpleUser interface          |
| `lib/zod-schemas.ts`                   | Modify | Add SimpleUserSchema              |
| `lib/autocannon.js`                    | Modify | Add simple-user benchmark support |
| `benchmark-compare.js`                 | Modify | Add simple-user configuration     |
| `reports.js`                           | Modify | Add simple-user benchmark type    |
| `benchmarks/fastify.js`                | Modify | Add /updateSimpleUser endpoint    |
| `benchmarks/express.js`                | Modify | Add /updateSimpleUser endpoint    |
| `benchmarks/hono.js`                   | Modify | Add /updateSimpleUser endpoint    |
| `benchmarks/hapi.js`                   | Modify | Add /updateSimpleUser endpoint    |
| `benchmarks/http-node.js`              | Modify | Add /updateSimpleUser endpoint    |
| `apps/src/mionAppNode.ts`              | Modify | Add updateSimpleUser route        |
| `apps/src/mionAppBun.ts`               | Modify | Add updateSimpleUser route        |
| `apps/src/honoAppBun.ts`               | Modify | Add /updateSimpleUser endpoint    |
| `apps/src/elysiaAppBun.ts`             | Modify | Add /updateSimpleUser endpoint    |
| `results-simple-user/`                 | Create | Results directory                 |
| `benchmark-results-simple-user.json`   | Create | Aggregate results file            |
| `SIMPLE-USER.md`                       | Create | Documentation file                |
| `assets/public/charts-servers-simple/` | Create | Charts directory                  |
