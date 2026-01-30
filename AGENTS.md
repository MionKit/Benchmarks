# Mion Benchmarks Repository Analysis

This repository is a **fork/adaptation of the [fastify benchmarks](https://github.com/fastify/benchmarks)** designed to compare the **mion framework** against other Node.js HTTP frameworks.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Entry Points                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  benchmark.js ──────► benchmark-bench.js (run benchmarks)                   │
│                 └───► benchmark-compare.js (generate reports)               │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Core Libraries                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  lib/bench.js          - Orchestrates benchmark execution                   │
│  lib/autocannon.js     - HTTP load testing with autocannon                  │
│  lib/packages.js       - Framework definitions and metadata                 │
│  lib/chart-screenshot.js - Chart generation with Puppeteer                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Benchmark Servers                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│  benchmarks/*.js       - Node.js server implementations                     │
│    ├── mion.js         - mion framework (uses compiled TypeScript)          │
│    ├── fastify.js      - Fastify with JSON schema validation                │
│    ├── express.js      - Express with manual validation                     │
│    ├── hono.js         - Hono on Node.js                                    │
│    ├── hapi.js         - Hapi framework                                     │
│    ├── restify.js      - Restify framework                                  │
│    └── http-node.js    - Bare Node.js HTTP (baseline)                       │
│                                                                             │
│  apps-bun/src/*.ts     - Bun runtime server implementations                 │
│    ├── hono.bun.ts     - Hono on Bun                                        │
│    └── elysia.bun.ts   - Elysia framework                                   │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Output Files                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  results/*.json              - Raw results for "updateUser" benchmark       │
│  results-hello/*.json        - Raw results for "hello world" benchmark      │
│  benchmark-results-*.json    - Aggregated results                           │
│  assets/public/charts-*/*.png - Generated chart images                      │
│  README.md                   - Updated with "servers" benchmark results     │
│  HELLO-WORLD.md              - Updated with "hello" benchmark results       │
│  COLD-STARTS.md              - Updated with cold-start metrics              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## NPM Scripts Reference

### Main Benchmark Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `servers` | `npm run bench-servers && npm run print-servers` | **Full benchmark suite** - runs benchmarks + generates report |
| `bench-servers` | `node benchmark-bench.js y 100 10 40 servers` | Runs `updateUser` benchmark (100 connections, 10 pipelines, 40s duration) |
| `print-servers` | `node benchmark-compare.js -u -b servers` | Generates charts and updates `README.md` |
| `servers-hello` | `npm run bench-servers-hello && npm run print-servers-hello` | Same but for "hello world" endpoint |
| `report` | Full report | Runs both benchmarks + cold-start metrics |

### Metrics Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `metrics` | `npm run metrics:run && npm run metrics:summary` | Measures cold-start times |
| `metrics:run` | `node metrics/startup.js` | Runs startup measurements for different route counts |
| `metrics:summary` | `node metrics/process-results.js -u` | Processes results and updates `COLD-STARTS.md` |

### Build & Setup

| Script | Command | Description |
|--------|---------|-------------|
| `build` | `rimraf ./_compiled-apps && tsc...` | Compiles mion TypeScript apps (required for runtime type metadata) |
| `mionlink` | `npm link @mionkit/...` | Links local mion packages for development |

## How Benchmarking Works

### 1. `benchmark-bench.js` - Orchestrator

Parses CLI arguments and coordinates benchmark execution:

```bash
# Arguments: all connections pipelining duration benchmark
node benchmark-bench.js y 100 10 40 servers
# Translates to: {all: true, connections: 100, pipelining: 10, duration: 40, benchmark: "servers"}
```

- Loads package list from `lib/packages.js`
- Calls `lib/bench.js` for each framework sequentially

### 2. `lib/bench.js` - Runner

For each framework:
1. **Forks** the benchmark server (Node.js) or **spawns** via `bun` (Bun servers)
2. Runs **warm-up** phase (half duration) - results discarded
3. Runs **measurement** phase (full duration) - results saved
4. Collects memory/CPU metrics via `pidusage` every second
5. Kills the server and waits 2s before next framework

### 3. `lib/autocannon.js` - Load Generator

Uses [autocannon](https://github.com/mcollina/autocannon) for HTTP load testing.

**Two test types:**

| Benchmark | Endpoint | Method | Purpose |
|-----------|----------|--------|---------|
| `servers` | `/updateUser` | POST | Tests validation + serialization + business logic |
| `servers-hello` | `/hello` | GET | Simple throughput test |

**Key difference for mion**: Request body is wrapped in array for mion's RPC-style API:
```javascript
// mion format
`[{"id":${id},"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}]`

// Other frameworks
`{"id":${id},"name":"john","surname":"smith","lastUpdate":"2020-12-17T02:24:00.000Z"}`
```

### 4. `benchmark-compare.js` - Reporter

- Reads results from `results/*.json` or `results-hello/*.json`
- Sorts by requests/second (descending)
- Generates charts using Puppeteer + billboard.js
- Updates markdown files with tables and chart images

## Test Scenarios

### "servers" Benchmark (updateUser)

Tests **validation + deserialization + business logic**:

```typescript
// mion - automatic validation and deserialization
// user.lastUpdate is already a Date object
export const routes = {
  updateUser: route((ctx, user: User): User => {
    user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
    return user;
  }),
};

// Express - manual validation required
app.post("/updateUser", function (req, res) {
  const rawUser = req.body?.updateUser;
  if (!isUser(rawUser)) throw "invalid parameter";
  const user = deserializeUser(rawUser); // Manual date conversion
  user.lastUpdate.setMonth(user.lastUpdate.getMonth() + 1);
  res.json(user);
});
```

### "servers-hello" Benchmark

Simple throughput test - just returns `{hello: "world"}`:

```typescript
// mion
hello: route((): string => "world")

// Express
app.get("/hello", (req, res) => res.json({ hello: "world" }))
```

## Key Differences from Fastify Benchmarks

1. **Memory/CPU tracking**: Added `pidusage` to track `maxMem`, `maxCpu`, and `memSeries` over time
2. **Bun support**: Can run benchmarks with Bun runtime via `isBun` flag in package config
3. **Chart generation**: Uses Puppeteer to generate PNG charts from billboard.js
4. **Cold-start metrics**: Separate measurement for startup time with varying route counts (10, 100, 500, 1000, 2000, 3000, 5000 routes)
5. **mion-specific body format**: Wraps request body in array for mion's RPC-style API

## Framework Configuration

Frameworks are defined in `lib/packages.js`:

```javascript
const packages = {
  mion: {
    hasRouter: true,
    package: "@MionKit/compiled-app",
    validation: "✓",
    version: "0.6.2",
    description: "Automatic validation and serialization out of the box",
  },
  "mion.bun": {
    hasRouter: true,
    isBun: true,                    // Run with Bun instead of Node
    fileExtension: ".js",           // Use compiled JS
    // ...
  },
  "hono.bun": {
    hasRouter: true,
    isBun: true,
    srcDir: "apps-bun/src",         // Different source directory
    // ...
  },
  // ...
};
```

## Running Benchmarks

```bash
# 1. Install dependencies
npm ci

# 2. Link local mion packages (REQUIRED when developing mion locally)
npm run mionlink

# 3. Build mion apps (REQUIRED - generates runtime type metadata)
npm run build

# 4. Run full benchmark suite
npm run report

# Or run individual benchmarks:
npm run servers        # updateUser benchmark → updates README.md
npm run servers-hello  # hello world benchmark → updates HELLO-WORLD.md
npm run metrics        # cold-start metrics → updates COLD-STARTS.md
```

### Linking Local Mion Packages

When developing mion locally, you need to link the mion packages from the main mion repository to this benchmarks repository. This is a **two-step process**:

**Step 1: In the mion repository** (e.g., `~/Projects/mion`), create global links:
```bash
cd ~/Projects/mion
npm link --workspaces
# This creates global symlinks for @mionkit/router, @mionkit/core, @mionkit/bun, @mionkit/http
```

**Step 2: In this benchmarks repository**, consume the links:
```bash
cd ~/Projects/mion-benchmarks
npm run mionlink
# This runs: npm link @mionkit/router @mionkit/core @mionkit/bun @mionkit/http
```

> **Note**: You must run `npm link` in the mion repo first, otherwise `npm run mionlink` will fail because the global links don't exist yet.

### Quick Test Run

For faster iteration during development:

```bash
# Shorter duration (4s instead of 40s)
npm run test-bench-servers
```

## Output Files Summary

| File | Updated By | Content |
|------|------------|---------|
| `results/*.json` | `bench-servers` | Raw autocannon results per framework |
| `results-hello/*.json` | `bench-servers-hello` | Raw autocannon results (hello world) |
| `benchmark-results-servers.json` | `print-servers` | Aggregated results table data |
| `assets/public/charts-servers/*.png` | `print-servers` | Generated chart images |
| `README.md` | `print-servers` | Main benchmark results |
| `HELLO-WORLD.md` | `print-servers-hello` | Hello world benchmark results |
| `COLD-STARTS.md` | `metrics:summary` | Cold-start timing metrics |

## Metrics Collected

For each framework, the following metrics are collected:

| Metric | Description |
|--------|-------------|
| `requests.average` | Requests per second |
| `latency.average` | Average response latency (ms) |
| `throughput.average` | Data throughput (bytes/sec) |
| `maxMem` | Peak memory usage (bytes) |
| `maxCpu` | Peak CPU usage (%) |
| `memSeries` | Memory usage over time (sampled every 1s) |
