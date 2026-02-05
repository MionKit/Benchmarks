# Mion Benchmarks Repository

Fork/adaptation of the [fastify benchmarks](https://github.com/fastify/benchmarks) to compare mion against other Node.js HTTP frameworks.

## Project Structure

Entry points:

- `benchmark-bench.js` - runs benchmarks
- `benchmark-compare.js` - generates reports

Core libraries:

- `lib/bench.js` - orchestrates benchmark execution
- `lib/autocannon.js` - HTTP load testing
- `lib/packages.js` - framework definitions and metadata
- `lib/chart-screenshot.js` - chart generation with Puppeteer

Benchmark servers in `benchmarks/*.js`

TypeScript sources in `apps/src/*.ts` (compiled to `_compiled-apps/`)

Output files:

- `results/*.json` and `results-hello/*.json` - raw benchmark results
- `benchmark-results-*.json` - aggregated results
- `assets/public/charts-*/*.png` - generated charts
- `UPDATE-USER.md`, `HELLO-WORLD.md`, `COLD-STARTS.md` - updated with results

## NPM Scripts

Main benchmarks:

- `npm run servers` - full updateUser benchmark + report (updates UPDATE-USER.md)
- `npm run servers-hello` - hello world benchmark + report (updates HELLO-WORLD.md)
- `npm run report` - runs both benchmarks + cold-start metrics

Metrics:

- `npm run metrics` - measures cold-start times (updates COLD-STARTS.md)

Build:

- `npm run build` - compiles TypeScript apps (required for runtime type metadata)
- `npm run mionlink` - links local mion packages for development

## Running Benchmarks

```bash
# Arguments: all connections pipelining duration benchmark
node benchmark-bench.js y 100 10 40 servers
```

Run specific servers using BENCH_SERVERS environment variable:

```bash
BENCH_SERVERS=hono.bun node benchmark-bench.js y 100 10 4 servers
BENCH_SERVERS=mion.bun,hono.bun,elysia.bun node benchmark-bench.js y 100 10 4 servers
```

Available servers: http-node, mion, mion.bun, hono, hono.bun, elysia.bun, fastify, hapi, express

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

## Quick Start

```bash
npm ci
npm run mionlink    # if developing mion locally
npm run build       # required - generates runtime type metadata
npm run report      # full benchmark suite
```

## Linking Local Mion Packages

Two-step process when developing mion locally:

Step 1 - In the mion repository:

```bash
cd ~/Projects/mion
npm link --workspaces
```

Step 2 - In this benchmarks repository:

```bash
npm run mionlink
```

## Metrics Collected

- requests.average - requests per second
- latency.average - average response latency (ms)
- throughput.average - data throughput (bytes/sec)
- maxMem - peak memory usage (bytes)
- maxCpu - peak CPU usage (%)
- memSeries - memory usage over time (sampled every 1s)
