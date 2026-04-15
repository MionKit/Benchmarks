# Mion Benchmarks Repository

Fork/adaptation of the [fastify benchmarks](https://github.com/fastify/benchmarks) to compare mion against other Node.js HTTP frameworks.

## Project Structure

Entry points:

- `reports.js` - unified benchmark runner (recommended)
- `benchmark-bench.js` - runs benchmarks (low-level)
- `benchmark-compare.js` - generates reports (low-level)

Core libraries:

- `lib/bench.js` - orchestrates benchmark execution; selects loader (autocannon or wrk)
- `lib/autocannon.js` - HTTP load testing via autocannon (default loader)
- `lib/wrk.js` - HTTP load testing via wrk (C-based, needed for fast Bun servers)
- `lib/payloads.js` - shared payload generators used by the autocannon loader
- `scripts/wrk/benchmark.lua` - wrk Lua script (generates payloads, emits result JSON)
- `lib/packages.js` - framework definitions and metadata
- `lib/chart-screenshot.js` - chart generation with Puppeteer

Benchmark servers in `benchmarks/*.js`

TypeScript sources in `apps/src/*.ts` (compiled to `_compiled-apps/`)

Output files:

- `results/*.json` and `results-hello/*.json` - raw benchmark results
- `benchmark-results-*.json` - aggregated results
- `assets/public/charts-*/*.png` - generated charts
- `UPDATE-USER.md`, `HELLO-WORLD.md` - updated with results

## Running Benchmarks

Use `reports.js` for running benchmarks (recommended):

```bash
# Run updateUser benchmark (full 30s duration)
node reports.js user

# Run hello-world benchmark (full 30s duration)
node reports.js hello-world

# Run all benchmarks
node reports.js all

# Quick mode (4s duration for faster iteration)
node reports.js user --quick
node reports.js all -q

# Run specific servers only
node reports.js user --servers=mion.bun,hono.bun

# Select the load testing tool (default: autocannon)
node reports.js user --loader=wrk
node reports.js hello-world --loader=wrk     # wrk can benchmark Bun servers; autocannon is filtered
BENCH_LOADER=wrk node reports.js all
BENCH_SERVERS=mion.bun,hono.bun node reports.js user

# Environment variables
BENCH_TYPE=user BENCH_QUICK=true node reports.js
```

Available servers: http-node, mion, mion.bun, hono, hono.bun, elysia.bun, fastify, hapi, express

## NPM Scripts

- `npm run report` - run all benchmarks
- `npm run report-user` - run updateUser benchmark
- `npm run report-hello` - run hello-world benchmark
- `npm run report-wrk` / `report-user-wrk` / `report-hello-wrk` / `report-simple-wrk` - same benchmarks but with the wrk loader
- `npm run install-wrk` - install wrk (brew on macOS, build from source on Linux); idempotent
- `npm run build` - compiles TypeScript apps (required for runtime type metadata)
- `npm run mionlink` - switches to local mion packages (tarballs from sibling `../mion` repo)
- `npm run mionupdate` - switches to published npm mion packages (latest or specific version)

## Requirements

- Node.js (for all runners and Node-based servers)
- Bun (for `mion.bun`, `hono.bun`, `elysia.bun` servers)
- wrk (optional, required only when using `--loader=wrk`): install with `npm run install-wrk`

## How Benchmarking Works

For each framework, `lib/bench.js`:

1. Forks the server (Node.js) or spawns via bun (Bun servers)
2. Runs warm-up phase (half duration) - results discarded
3. Runs measurement phase (full duration) - results saved
4. Collects memory/CPU metrics via pidusage every second
5. Kills server and waits 2s before next framework

Two test types:

- `servers` - POST /updateUser - tests validation + serialization + business logic
- `servers-hello` - GET /hello - simple throughput test

Note: mion wraps request body in array for RPC-style API.

## Load Testing Tools (Loaders)

Two loaders are supported, selectable via `--loader=<name>` or `BENCH_LOADER=<name>`:

- `autocannon` (default) - Node.js-based; cannot saturate fast Bun servers, so Bun servers are filtered from the hello-world benchmark when this loader is used.
- `wrk` - C-based, multi-threaded; required to accurately benchmark Bun servers. Requires `wrk` on PATH (`npm run install-wrk`). The `pipelining` option is ignored (wrk does not pipeline by default).

Both loaders write to the same result files (e.g. `results-hello/express.json`). The JSON contains a `testingTool: "autocannon" | "wrk"` field identifying which tool produced it. Running the same benchmark with a different loader overwrites the file.

## Quick Start

```bash
npm ci
npm run mionupdate  # use published mion packages (latest)
npm run build       # required - generates runtime type metadata
npm run report      # full benchmark suite
```

## Switching Between Local and Published Mion Packages

- `npm run mionupdate` - switches all `@mionjs/*` deps to the latest published npm version and runs `npm install`
- `npm run mionupdate -- 0.8.4` - same but pins to a specific version
- `npm run mionlink` - switches all `@mionjs/*` deps to `file:` tarballs built from the sibling `../mion` repo and runs `npm install`

## Metrics Collected

- requests.average - requests per second
- latency.average - average response latency (ms)
- throughput.average - data throughput (bytes/sec)
- maxMem - peak memory usage (bytes)
- maxCpu - peak CPU usage (%)
- memSeries - memory usage over time (sampled every 1s)
