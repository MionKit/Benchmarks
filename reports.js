#!/usr/bin/env node
"use strict";

/**
 * Unified benchmark runner for mion-benchmarks
 *
 * Usage:
 *   node reports.js [type] [options]
 *
 * Types:
 *   user        - Run updateUser benchmark (POST /updateUser)
 *   hello-world - Run hello world benchmark (GET /hello)
 *   all         - Run both benchmarks
 *
 * Options:
 *   --quick, -q     Run quick benchmarks (4 seconds instead of 30)
 *   --servers, -s   Comma-separated list of servers to benchmark
 *
 * Environment Variables:
 *   BENCH_TYPE      Benchmark type (user, hello-world, all)
 *   BENCH_SERVERS   Comma-separated list of servers to benchmark
 *   BENCH_QUICK     Set to 'true' for quick benchmarks
 *
 * Examples:
 *   node reports.js user
 *   node reports.js hello-world --quick
 *   node reports.js all -q
 *   node reports.js user --servers=mion.bun,hono.bun
 *   BENCH_TYPE=user BENCH_QUICK=true node reports.js
 */

const bench = require("./lib/bench");
const serverBenchmarks = require("./lib/packages");
const { generateReport } = require("./benchmark-compare");

// Benchmark type configuration
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

// Default benchmark parameters
const DEFAULT_CONNECTIONS = 100;
const DEFAULT_PIPELINING = 10;
const DEFAULT_DURATION = 30;
const QUICK_DURATION = 4;

/**
 * Parse command line arguments and environment variables
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    type: null,
    quick: false,
    servers: null,
  };

  // Parse positional and flag arguments
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--quick" || arg === "-q") {
      options.quick = true;
    } else if (arg.startsWith("--servers=") || arg.startsWith("-s=")) {
      options.servers = arg.split("=")[1];
    } else if ((arg === "--servers" || arg === "-s") && args[i + 1]) {
      options.servers = args[++i];
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else if (!arg.startsWith("-") && !options.type) {
      options.type = arg;
    }
  }

  // Override with environment variables if not set via CLI
  if (!options.type && process.env.BENCH_TYPE) {
    options.type = process.env.BENCH_TYPE;
  }
  if (!options.quick && process.env.BENCH_QUICK === "true") {
    options.quick = true;
  }
  if (!options.servers && process.env.BENCH_SERVERS) {
    options.servers = process.env.BENCH_SERVERS;
  }

  return options;
}

/**
 * Print help message
 */
function printHelp() {
  console.log(`
Mion Benchmarks Runner

Usage:
  node reports.js [type] [options]

Types:
  user        - Run updateUser benchmark (POST /updateUser)
  hello-world - Run hello world benchmark (GET /hello)
  simple-user - Run simple user benchmark (POST /updateSimpleUser)
  all         - Run all benchmarks

Options:
  --quick, -q           Run quick benchmarks (4 seconds instead of 30)
  --servers, -s <list>  Comma-separated list of servers to benchmark
  --help, -h            Show this help message

Environment Variables:
  BENCH_TYPE      Benchmark type (user, hello-world, simple-user, all)
  BENCH_SERVERS   Comma-separated list of servers to benchmark
  BENCH_QUICK     Set to 'true' for quick benchmarks

Examples:
  node reports.js user
  node reports.js hello-world --quick
  node reports.js simple-user --quick
  node reports.js all -q
  node reports.js user --servers=mion.bun,hono.bun
  BENCH_TYPE=user BENCH_QUICK=true node reports.js
`);
}

/**
 * Get modules to benchmark based on options
 */
function getModules(options, benchmarkName) {
  const { choices, info: getBenchmarkInfo } = serverBenchmarks;

  let modules;
  if (options.servers) {
    modules = options.servers
      .split(",")
      .map((s) => s.trim())
      .filter((s) => choices.includes(s));
    console.log(`Running benchmarks for: ${modules.join(", ")}`);
  } else {
    modules = [...choices];
  }

  // Filter out Bun servers from hello world benchmarks
  // Reason: autocannon (Node.js-based) is not fast enough to accurately benchmark Bun servers
  if (benchmarkName === "servers-hello") {
    const excludedModules = modules.filter(
      (m) => getBenchmarkInfo(m).excludeFromHelloWorld,
    );
    if (excludedModules.length > 0) {
      console.log(
        `Excluding Bun servers from hello world benchmark (autocannon limitation): ${excludedModules.join(", ")}`,
      );
    }
    modules = modules.filter((m) => !getBenchmarkInfo(m).excludeFromHelloWorld);
  }

  return modules;
}

/**
 * Run benchmark for a specific type
 */
async function runBenchmark(type, options) {
  const config = BENCHMARK_TYPES[type];
  if (!config) {
    throw new Error(`Unknown benchmark type: ${type}`);
  }

  const duration = options.quick ? QUICK_DURATION : DEFAULT_DURATION;

  console.log(`\n${"=".repeat(60)}`);
  console.log(`Running: ${config.description}`);
  console.log(
    `Duration: ${duration} seconds${options.quick ? " (quick mode)" : ""}`,
  );
  if (options.servers) {
    console.log(`Servers: ${options.servers}`);
  }
  console.log(`${"=".repeat(60)}\n`);

  // Get modules to benchmark
  const modules = getModules(options, config.name);

  // Build benchmark options
  const benchOptions = {
    all: true,
    connections: DEFAULT_CONNECTIONS,
    pipelining: DEFAULT_PIPELINING,
    duration: duration,
    benchmark: config.name,
  };

  // Run the benchmark
  await bench(benchOptions, modules, serverBenchmarks.info);

  // Generate the report
  console.log(`\nGenerating report for ${type}...`);
  await generateReport(config.name);

  console.log(`\n✓ ${config.description} completed`);
}

/**
 * Main entry point
 */
async function main() {
  const options = parseArgs();

  // Validate type
  if (!options.type) {
    console.error("Error: Benchmark type is required");
    console.error("Use --help for usage information");
    process.exit(1);
  }

  const validTypes = ["user", "hello-world", "simple-user", "all"];
  if (!validTypes.includes(options.type)) {
    console.error(`Error: Invalid benchmark type '${options.type}'`);
    console.error(`Valid types: ${validTypes.join(", ")}`);
    process.exit(1);
  }

  console.log("\n🚀 Mion Benchmarks Runner");
  console.log(`Type: ${options.type}`);
  console.log(`Quick mode: ${options.quick ? "yes" : "no"}`);
  if (options.servers) {
    console.log(`Servers filter: ${options.servers}`);
  }

  try {
    if (options.type === "all") {
      // Run all benchmarks
      await runBenchmark("user", options);
      await runBenchmark("hello-world", options);
      await runBenchmark("simple-user", options);
    } else {
      // Run single benchmark
      await runBenchmark(options.type, options);
    }

    console.log("\n" + "=".repeat(60));
    console.log("✅ All benchmarks completed successfully!");
    console.log("=".repeat(60) + "\n");
  } catch (error) {
    console.error("\n❌ Benchmark failed:", error.message);
    process.exit(1);
  }
}

main();
