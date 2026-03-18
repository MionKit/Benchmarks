#!/usr/bin/env node
/**
 * Test script to verify ALL benchmark servers enforce strict validation.
 * Sends valid data (expect 200) and data with extra properties (expect validation error).
 *
 * Usage: node scripts/test-strict-validation.js
 *        node scripts/test-strict-validation.js --servers=mion,fastify
 */

"use strict";

const { fork, spawn } = require("child_process");
const http = require("http");
const path = require("path");
const {
  generateSampleUser,
  generateSimpleUser,
} = require("../lib/autocannon.js");

// ============ Config ============

const PORT = 3000;
const ALL_SERVERS = [
  {
    name: "mion",
    isBun: false,
    isMion: true,
    file: "benchmarks/mion.js",
  },
  {
    name: "mion.bun",
    isBun: true,
    isMion: true,
    file: "benchmarks/mion.bun.js",
  },
  {
    name: "fastify",
    isBun: false,
    isMion: false,
    file: "benchmarks/fastify.js",
  },
  {
    name: "express",
    isBun: false,
    isMion: false,
    file: "benchmarks/express.js",
  },
  {
    name: "hapi",
    isBun: false,
    isMion: false,
    file: "benchmarks/hapi.js",
  },
  {
    name: "hono",
    isBun: false,
    isMion: false,
    file: "benchmarks/hono.js",
  },
  {
    name: "hono.bun",
    isBun: true,
    isMion: false,
    file: "benchmarks/hono.bun.js",
  },
  {
    name: "elysia.bun",
    isBun: true,
    isMion: false,
    file: "benchmarks/elysia.bun.js",
  },
  {
    name: "http-node",
    isBun: false,
    isMion: false,
    file: "benchmarks/http-node.js",
  },
];

// ============ Colors ============

const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  dim: "\x1b[2m",
  reset: "\x1b[0m",
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// ============ HTTP helpers ============

function makeRequest(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({ statusCode: res.statusCode, body: data });
      });
    });
    req.on("error", reject);
    if (body) req.write(body);
    req.end();
  });
}

async function waitForServer(port, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await makeRequest({
        hostname: "127.0.0.1",
        port,
        path: "/hello",
        method: "GET",
        timeout: 500,
      });
      return true;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
  return false;
}

// ============ Process management ============

function startServer(serverConfig) {
  const filePath = path.join(process.cwd(), serverConfig.file);

  if (serverConfig.isBun) {
    return spawn("bun", [filePath], {
      stdio: ["pipe", "pipe", "pipe"],
      cwd: process.cwd(),
    });
  }
  return fork(filePath, [], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
    cwd: process.cwd(),
  });
}

async function killProcess(proc) {
  if (!proc) return;
  proc.kill("SIGTERM");
  await new Promise((resolve) => setTimeout(resolve, 500));
  try {
    proc.kill("SIGKILL");
  } catch {
    // already dead
  }
}

// ============ Payload helpers ============

/**
 * Inject an extra property into a JSON payload string.
 * For mion (array-wrapped): [{"extraProp":"hack",...rest}]
 * For others: {"extraProp":"hack",...rest}
 */
function injectExtraProperty(jsonStr, isMion) {
  if (isMion) {
    // [{ ... }] → inject after first {
    return jsonStr.replace(/^\[\{/, '[{"extraProp":"hack",');
  }
  // { ... } → inject after first {
  return jsonStr.replace(/^\{/, '{"extraProp":"hack",');
}

// ============ Test runner ============

async function postJSON(path, body) {
  return makeRequest(
    {
      hostname: "127.0.0.1",
      port: PORT,
      path,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
        Accept: "*/*",
      },
    },
    body,
  );
}

/**
 * Run validation tests against a running server.
 * Returns { passed: number, failed: number, details: string[] }
 */
async function runValidationTests(serverConfig) {
  const { isMion } = serverConfig;
  const results = { passed: 0, failed: 0, details: [] };

  const updateUserPath = "/updateUser";
  const simpleUserPath = "/updateSimpleUser";

  // --- Test 1: Valid updateUser → expect 200 ---
  const validUser = generateSampleUser(isMion);
  try {
    const res = await postJSON(updateUserPath, validUser);
    if (res.statusCode === 200) {
      results.passed++;
      results.details.push("  ✓ Valid updateUser → 200");
    } else {
      results.failed++;
      results.details.push(
        `  ✗ Valid updateUser → ${res.statusCode} (expected 200)\n    ${res.body.substring(0, 200)}`,
      );
    }
  } catch (err) {
    results.failed++;
    results.details.push(`  ✗ Valid updateUser → error: ${err.message}`);
  }

  // --- Test 2: Valid updateSimpleUser → expect 200 ---
  const validSimple = generateSimpleUser(isMion);
  try {
    const res = await postJSON(simpleUserPath, validSimple);
    if (res.statusCode === 200) {
      results.passed++;
      results.details.push("  ✓ Valid updateSimpleUser → 200");
    } else {
      results.failed++;
      results.details.push(
        `  ✗ Valid updateSimpleUser → ${res.statusCode} (expected 200)\n    ${res.body.substring(0, 200)}`,
      );
    }
  } catch (err) {
    results.failed++;
    results.details.push(
      `  ✗ Valid updateSimpleUser → error: ${err.message}`,
    );
  }

  // --- Test 3: updateUser with extra property → expect non-200 ---
  const extraUser = injectExtraProperty(generateSampleUser(isMion), isMion);
  try {
    const res = await postJSON(updateUserPath, extraUser);
    if (res.statusCode >= 400) {
      results.passed++;
      results.details.push(
        `  ✓ Extra props updateUser → ${res.statusCode} (rejected)`,
      );
    } else {
      results.failed++;
      results.details.push(
        `  ✗ Extra props updateUser → ${res.statusCode} (expected 4xx, server accepted extra properties!)`,
      );
    }
  } catch (err) {
    results.failed++;
    results.details.push(
      `  ✗ Extra props updateUser → error: ${err.message}`,
    );
  }

  // --- Test 4: updateSimpleUser with extra property → expect non-200 ---
  const extraSimple = injectExtraProperty(
    generateSimpleUser(isMion),
    isMion,
  );
  try {
    const res = await postJSON(simpleUserPath, extraSimple);
    if (res.statusCode >= 400) {
      results.passed++;
      results.details.push(
        `  ✓ Extra props updateSimpleUser → ${res.statusCode} (rejected)`,
      );
    } else {
      results.failed++;
      results.details.push(
        `  ✗ Extra props updateSimpleUser → ${res.statusCode} (expected 4xx, server accepted extra properties!)`,
      );
    }
  } catch (err) {
    results.failed++;
    results.details.push(
      `  ✗ Extra props updateSimpleUser → error: ${err.message}`,
    );
  }

  return results;
}

// ============ Main ============

async function testServer(serverConfig) {
  console.log("");
  log("cyan", `━━━ ${serverConfig.name} ━━━`);

  // Check bun availability
  if (serverConfig.isBun) {
    try {
      const bunCheck = spawn("bun", ["--version"], { stdio: "pipe" });
      const exitCode = await new Promise((resolve) => {
        bunCheck.on("close", resolve);
        bunCheck.on("error", () => resolve(1));
      });
      if (exitCode !== 0) {
        log("yellow", "  ⚠ Bun not installed — skipped");
        return null;
      }
    } catch {
      log("yellow", "  ⚠ Bun not installed — skipped");
      return null;
    }
  }

  let proc = null;
  try {
    proc = startServer(serverConfig);

    // Capture stderr for debugging
    let stderr = "";
    if (proc.stderr) {
      proc.stderr.on("data", (d) => (stderr += d.toString()));
    }
    if (proc.stdout) {
      proc.stdout.on("data", () => {}); // drain stdout
    }

    const ready = await waitForServer(PORT);
    if (!ready) {
      log("red", `  ✗ Server failed to start`);
      if (stderr) log("dim", `    stderr: ${stderr.substring(0, 300)}`);
      return { passed: 0, failed: 4, details: ["  ✗ Server failed to start"] };
    }

    const results = await runValidationTests(serverConfig);
    for (const line of results.details) {
      log(line.includes("✓") ? "green" : "red", line);
    }
    return results;
  } catch (err) {
    log("red", `  ✗ Error: ${err.message}`);
    return { passed: 0, failed: 4, details: [`  ✗ ${err.message}`] };
  } finally {
    await killProcess(proc);
    // Wait for port release
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

async function main() {
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  log("cyan", "  STRICT VALIDATION TEST — All Benchmark Servers");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("Tests that each server rejects requests with extra properties.\n");

  // Parse --servers flag
  const serversArg = process.argv.find((a) => a.startsWith("--servers="));
  let servers = ALL_SERVERS;
  if (serversArg) {
    const names = serversArg.split("=")[1].split(",");
    servers = ALL_SERVERS.filter((s) => names.includes(s.name));
    if (servers.length === 0) {
      log("red", `No matching servers for: ${names.join(", ")}`);
      log("dim", `Available: ${ALL_SERVERS.map((s) => s.name).join(", ")}`);
      process.exitCode = 1;
      return;
    }
  }

  const summary = {};
  let totalPassed = 0;
  let totalFailed = 0;

  for (const server of servers) {
    const result = await testServer(server);
    if (result === null) {
      summary[server.name] = "SKIPPED";
    } else {
      totalPassed += result.passed;
      totalFailed += result.failed;
      summary[server.name] =
        result.failed === 0 ? "PASSED" : `FAILED (${result.failed}/4)`;
    }
  }

  // Print summary
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  log("cyan", "  SUMMARY");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  for (const [name, status] of Object.entries(summary)) {
    const color =
      status === "PASSED" ? "green" : status === "SKIPPED" ? "yellow" : "red";
    const icon =
      status === "PASSED" ? "✓" : status === "SKIPPED" ? "⚠" : "✗";
    log(color, `  ${icon} ${name.padEnd(15)} ${status}`);
  }

  console.log(
    `\n  Total: ${totalPassed} passed, ${totalFailed} failed\n`,
  );

  if (totalFailed > 0) {
    process.exitCode = 1;
  }
}

main();
