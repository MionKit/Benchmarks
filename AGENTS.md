# Mion Benchmarks Repository

Fork/adaptation of the [fastify benchmarks](https://github.com/fastify/benchmarks) to compare mion against other Node.js HTTP frameworks.

## Project Structure

Entry points:

- `reports.js` - unified benchmark runner (recommended)
- `benchmark-bench.js` - runs benchmarks (low-level)
- `benchmark-compare.js` - generates reports (low-level)

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
BENCH_SERVERS=mion.bun,hono.bun node reports.js user

# Environment variables
BENCH_TYPE=user BENCH_QUICK=true node reports.js
```

Available servers: http-node, mion, mion.bun, hono, hono.bun, elysia.bun, fastify, hapi, express

## NPM Scripts

- `npm run report` - run all benchmarks
- `npm run report-user` - run updateUser benchmark
- `npm run report-hello` - run hello-world benchmark
- `npm run build` - compiles TypeScript apps (required for runtime type metadata)
- `npm run mionlink` - links local mion packages for development

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

## Using Local Mion Packages

When developing mion locally, you can use the local packages instead of the published ones:

```bash
npm run mionlink
```

This script will:
1. Run the `pack-packages.sh` script in the mion repository to create tarballs.
2. Copy the tarballs to the `mion-tarballs` directory in this repository.
3. Run `npm install` to install the local tarballs.

## Metrics Collected

- requests.average - requests per second
- latency.average - average response latency (ms)
- throughput.average - data throughput (bytes/sec)
- maxMem - peak memory usage (bytes)
- maxCpu - peak CPU usage (%)
- memSeries - memory usage over time (sampled every 1s)
