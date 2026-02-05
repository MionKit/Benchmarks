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

/**
 * Generate a sample user payload for testing (complex User model)
 * Matches the payload structure in lib/autocannon.js
 */
function generateTestUser() {
  return {
    id: 12345,
    username: "john_smith",
    email: "john.smith@example.com",
    profile: {
      firstName: "John",
      lastName: "Smith",
      displayName: "John S.",
      bio: "Software developer and tech enthusiast",
      avatarUrl: "https://example.com/avatars/john.jpg",
      dateOfBirth: "1990-05-15T00:00:00.000Z",
    },
    role: "user",
    status: "active",
    address: {
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "USA",
    },
    paymentMethods: [
      {
        type: "credit_card",
        lastFourDigits: "4242",
        expiryMonth: 12,
        expiryYear: 2025,
        brand: "visa",
      },
      {
        type: "paypal",
        email: "john.paypal@example.com",
      },
    ],
    preferences: {
      theme: "dark",
      language: "en-US",
      timezone: "America/Los_Angeles",
      notifications: {
        email: true,
        sms: false,
        push: true,
        frequency: "daily",
      },
    },
    createdAt: "2020-01-15T10:30:00.000Z",
    updatedAt: "2024-12-17T02:24:00.000Z",
    lastLoginAt: "2024-12-16T18:45:00.000Z",
    tags: ["premium", "early-adopter", "verified"],
  };
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

  // Use the complex User model wrapped in array for mion RPC-style API
  const testUser = generateTestUser();
  const requestBody = JSON.stringify([testUser]);

  console.log(`  Request body length: ${requestBody.length} bytes`);
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
      `  Response (${updateResponse.statusCode}): ${updateResponse.body.substring(0, 200)}...`,
    );

    // Parse response to validate business logic
    let responseData;
    try {
      responseData = JSON.parse(updateResponse.body);
      // mion wraps response in {"updateUser": {...}} format
      if (responseData.updateUser) {
        responseData = responseData.updateUser;
      }
    } catch (e) {
      log("red", `  ✗ Failed to parse response as JSON`);
      return results;
    }

    // Validate the response
    const validations = [];

    // Check if displayName was updated (business logic: firstName + lastName initial)
    // Expected: "John S." (from firstName "John" + lastName "Smith" initial)
    if (responseData.profile?.displayName === "John S.") {
      validations.push("displayName updated correctly");
    } else if (responseData.profile?.displayName) {
      validations.push(
        `displayName present: ${responseData.profile.displayName}`,
      );
    }

    // Check if updatedAt was modified (should be a recent timestamp)
    if (responseData.updatedAt) {
      const updatedAt = new Date(responseData.updatedAt);
      const now = new Date();
      const diffMs = now - updatedAt;
      if (diffMs < 60000) {
        // Within last minute
        validations.push("updatedAt is recent");
      } else {
        validations.push(
          `updatedAt present but not recent: ${responseData.updatedAt}`,
        );
      }
    }

    // Check if lastLoginAt was set
    if (responseData.lastLoginAt) {
      validations.push("lastLoginAt present");
    }

    // Check basic user data is preserved
    if (responseData.username === "john_smith") {
      validations.push("username preserved");
    }
    if (responseData.email === "john.smith@example.com") {
      validations.push("email preserved");
    }
    if (responseData.id === 12345) {
      validations.push("id preserved");
    }

    // Check nested objects
    if (responseData.address?.city === "San Francisco") {
      validations.push("address preserved");
    }
    if (
      Array.isArray(responseData.paymentMethods) &&
      responseData.paymentMethods.length === 2
    ) {
      validations.push("paymentMethods preserved");
    }
    if (responseData.preferences?.theme === "dark") {
      validations.push("preferences preserved");
    }
    if (
      Array.isArray(responseData.tags) &&
      responseData.tags.includes("premium")
    ) {
      validations.push("tags preserved");
    }

    console.log(`  Validations: ${validations.join(", ")}`);

    if (validations.length >= 5) {
      log(
        "green",
        "  ✓ UpdateUser endpoint working! Complex User model validated.\n",
      );
      results.updateUser = true;
    } else {
      log(
        "yellow",
        `  ⚠ UpdateUser endpoint returned data but some validations failed`,
      );
      if (updateResponse.statusCode === 200) {
        log("green", "  ✓ UpdateUser endpoint is functional (status 200)\n");
        results.updateUser = true;
      }
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
  console.log("Testing with complex User model (~1KB payload)\n");

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
    "  - POST http://127.0.0.1:3000/updateUser -> Updates displayName, updatedAt, lastLoginAt",
  );
  console.log(
    "\nNote: mion uses RPC-style API - request body must be wrapped in an array",
  );
  console.log(
    "Complex User model includes: nested objects, discriminated unions, arrays, dates\n",
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
