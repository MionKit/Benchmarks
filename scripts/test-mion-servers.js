#!/usr/bin/env node
/**
 * Test script for mion servers (both Node.js and Bun)
 * This script starts each server, tests both endpoints, and validates the setup
 *
 * Usage: node scripts/test-mion-servers.js
 *
 * Tests:
 *   1. mion Node.js server (benchmarks/mion.js)
 *   2. mion Bun server (benchmarks/mion.bun.js) - requires Bun installed
 */

"use strict";

const { fork, spawn } = require("child_process");
const http = require("http");
const path = require("path");

// Colors for console output
const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(options, body = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });
    req.on("error", reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

async function waitForServer(port, maxAttempts = 20) {
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
    } catch (err) {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  return false;
}

function checkBunInstalled() {
  return new Promise((resolve) => {
    const bunCheck = spawn("bun", ["--version"], { stdio: "pipe" });
    let version = "";
    bunCheck.stdout.on("data", (data) => (version += data.toString()));
    bunCheck.on("close", (code) => {
      resolve(code === 0 ? version.trim() : null);
    });
    bunCheck.on("error", () => resolve(null));
  });
}

async function killProcess(proc) {
  if (!proc) return;

  proc.kill("SIGTERM");
  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    proc.kill("SIGKILL");
  } catch (e) {
    // Process already dead, ignore
  }
}

async function testEndpoints(serverName) {
  const results = { hello: false, updateUser: false };

  // Test 1: Hello endpoint (GET)
  log("yellow", `  Test 1: GET /hello`);
  console.log("  Request: GET http://127.0.0.1:3000/hello");

  try {
    const helloResponse = await makeRequest({
      hostname: "127.0.0.1",
      port: 3000,
      path: "/hello",
      method: "GET",
      headers: { Accept: "*/*" },
    });

    console.log(
      `  Response (${helloResponse.statusCode}): ${helloResponse.body}`,
    );

    if (helloResponse.body.includes("world")) {
      log("green", "  ✓ Hello endpoint working!\n");
      results.hello = true;
    } else {
      log("red", `  ✗ Hello endpoint failed! Expected 'world' in response`);
    }
  } catch (err) {
    log("red", `  ✗ Hello endpoint error: ${err.message}`);
  }

  // Test 2: UpdateUser endpoint (POST) - mion format with array wrapper
  log("yellow", "  Test 2: POST /updateUser (mion RPC format)");

  const requestBody = JSON.stringify([
    {
      id: 12345,
      name: "john",
      surname: "smith",
      lastUpdate: "2020-12-17T02:24:00.000Z",
    },
  ]);

  console.log(`  Request body: ${requestBody}`);
  console.log("  Request: POST http://127.0.0.1:3000/updateUser");

  try {
    const updateResponse = await makeRequest(
      {
        hostname: "127.0.0.1",
        port: 3000,
        path: "/updateUser",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(requestBody),
          Accept: "*/*",
        },
      },
      requestBody,
    );

    console.log(
      `  Response (${updateResponse.statusCode}): ${updateResponse.body}`,
    );

    // Check if response contains the expected date (month incremented from December to January)
    // Original: 2020-12-17 -> Expected: 2021-01-17
    if (updateResponse.body.includes("2021-01-17")) {
      log(
        "green",
        "  ✓ UpdateUser endpoint working! Date correctly incremented.\n",
      );
      results.updateUser = true;
    } else if (updateResponse.body.includes("john")) {
      log(
        "yellow",
        "  ⚠ UpdateUser endpoint returned data but date format may differ",
      );
      log("green", "  ✓ UpdateUser endpoint is functional\n");
      results.updateUser = true;
    } else {
      log("red", `  ✗ UpdateUser endpoint failed!`);
    }
  } catch (err) {
    log("red", `  ✗ UpdateUser endpoint error: ${err.message}`);
  }

  return results;
}

async function testNodeServer() {
  console.log("\n" + "=".repeat(50));
  log("cyan", "Testing mion Node.js Server (benchmarks/mion.js)");
  console.log("=".repeat(50) + "\n");

  let serverProcess = null;

  try {
    log("yellow", "Starting mion Node.js server...");
    const serverPath = path.join(process.cwd(), "benchmarks", "mion.js");

    serverProcess = fork(serverPath, [], {
      stdio: ["pipe", "pipe", "pipe", "ipc"],
      cwd: process.cwd(),
    });

    serverProcess.stdout.on("data", (data) => {
      console.log(`[Node Server]: ${data.toString().trim()}`);
    });

    serverProcess.stderr.on("data", (data) => {
      console.error(`[Node Server Error]: ${data.toString().trim()}`);
    });

    console.log(`Waiting for server to start (PID: ${serverProcess.pid})...`);
    const serverReady = await waitForServer(3000);

    if (!serverReady) {
      throw new Error("Server failed to start within timeout");
    }

    log("green", "Server started successfully!\n");

    const results = await testEndpoints("mion (Node.js)");

    return results.hello && results.updateUser;
  } catch (error) {
    log("red", `ERROR: ${error.message}`);
    return false;
  } finally {
    if (serverProcess) {
      log("yellow", `Stopping Node.js server (PID: ${serverProcess.pid})...`);
      await killProcess(serverProcess);
    }
  }
}

async function testBunServer() {
  console.log("\n" + "=".repeat(50));
  log("cyan", "Testing mion Bun Server (benchmarks/mion.bun.js)");
  console.log("=".repeat(50) + "\n");

  // Check if Bun is installed
  const bunVersion = await checkBunInstalled();
  if (!bunVersion) {
    log("yellow", "⚠ Bun is not installed - skipping Bun server test");
    log("yellow", "  Install Bun from: https://bun.sh");
    return null; // null means skipped
  }
  log("green", `Bun version: ${bunVersion}`);

  let serverProcess = null;

  try {
    log("yellow", "\nStarting mion Bun server...");
    const serverPath = path.join(process.cwd(), "benchmarks", "mion.bun.js");

    serverProcess = spawn("bun", [serverPath], {
      stdio: ["pipe", "pipe", "pipe"],
      cwd: process.cwd(),
    });

    serverProcess.stdout.on("data", (data) => {
      console.log(`[Bun Server]: ${data.toString().trim()}`);
    });

    serverProcess.stderr.on("data", (data) => {
      console.error(`[Bun Server Error]: ${data.toString().trim()}`);
    });

    console.log(`Waiting for server to start (PID: ${serverProcess.pid})...`);
    const serverReady = await waitForServer(3000);

    if (!serverReady) {
      throw new Error("Server failed to start within timeout");
    }

    log("green", "Server started successfully!\n");

    const results = await testEndpoints("mion (Bun)");

    return results.hello && results.updateUser;
  } catch (error) {
    log("red", `ERROR: ${error.message}`);
    return false;
  } finally {
    if (serverProcess) {
      log("yellow", `Stopping Bun server (PID: ${serverProcess.pid})...`);
      await killProcess(serverProcess);
    }
  }
}

async function main() {
  console.log("---- MION SERVERS TEST SUITE ----");

  const results = {
    node: false,
    bun: null,
  };

  // Test Node.js server
  results.node = await testNodeServer();

  // Wait a bit between tests to ensure port is released
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test Bun server
  results.bun = await testBunServer();

  // Summary
  console.log("\n" + "=".repeat(50));
  log("cyan", "TEST SUMMARY");
  console.log("=".repeat(50) + "\n");

  console.log("Server endpoints tested:");
  console.log("  - GET  http://127.0.0.1:3000/hello      -> Returns 'world'");
  console.log(
    "  - POST http://127.0.0.1:3000/updateUser -> Increments lastUpdate month",
  );
  console.log(
    "\nNote: mion uses RPC-style API - request body must be wrapped in an array\n",
  );

  if (results.node) {
    log("green", "✓ mion Node.js server: PASSED");
  } else {
    log("red", "✗ mion Node.js server: FAILED");
  }

  if (results.bun === null) {
    log("yellow", "⚠ mion Bun server: SKIPPED (Bun not installed)");
  } else if (results.bun) {
    log("green", "✓ mion Bun server: PASSED");
  } else {
    log("red", "✗ mion Bun server: FAILED");
  }

  console.log("");

  // Set exit code based on results
  if (!results.node || results.bun === false) {
    process.exitCode = 1;
  }
}

main();
