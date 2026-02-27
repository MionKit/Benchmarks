#!/usr/bin/env node
/**
 * Test script to verify servers don't log per-request
 * Usage: node scripts/test-server-logging.js fastify
 *        node scripts/test-server-logging.js hono
 */

const { spawn } = require("child_process");
const http = require("http");

const serverName = process.argv[2];
if (!serverName || !["fastify", "hono"].includes(serverName)) {
  console.log("Usage: node scripts/test-server-logging.js <fastify|hono>");
  process.exit(1);
}

const serverFile = `benchmarks/${serverName}.js`;
const testPayload = JSON.stringify({
  id: 1,
  username: "john_smith",
  email: "john.smith@example.com",
  profile: {
    firstName: "John",
    lastName: "Smith",
    displayName: "John S.",
    bio: "Software developer",
    avatarUrl: "https://example.com/avatar.jpg",
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
  tags: ["premium"],
});

console.log(`\n=== Testing ${serverName} for per-request logging ===\n`);

// Track all output from the server
let serverOutput = [];
let startupComplete = false;

// Start the server
const server = spawn("node", [serverFile], {
  stdio: ["ignore", "pipe", "pipe"],
});

server.stdout.on("data", (data) => {
  const line = data.toString().trim();
  if (line) {
    if (!startupComplete) {
      console.log(`[STARTUP] ${line}`);
    } else {
      serverOutput.push(`[STDOUT] ${line}`);
    }
  }
});

server.stderr.on("data", (data) => {
  const line = data.toString().trim();
  if (line) {
    if (!startupComplete) {
      console.log(`[STARTUP-ERR] ${line}`);
    } else {
      serverOutput.push(`[STDERR] ${line}`);
    }
  }
});

// Wait for server to start
setTimeout(async () => {
  startupComplete = true;
  console.log("\n--- Server started, now making 5 requests ---\n");

  // Make 5 requests
  for (let i = 1; i <= 5; i++) {
    await makeRequest(i);
  }

  // Wait a bit for any async logging
  setTimeout(() => {
    console.log("\n--- Request phase complete ---\n");

    if (serverOutput.length === 0) {
      console.log("✅ SUCCESS: No per-request logging detected!");
    } else {
      console.log("❌ FAILURE: Server logged during requests:");
      serverOutput.forEach((line) => console.log(`  ${line}`));
    }

    // Kill the server
    server.kill("SIGTERM");
    process.exit(serverOutput.length === 0 ? 0 : 1);
  }, 1000);
}, 2000);

function makeRequest(num) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/updateUser",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(testPayload),
      },
    };

    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode === 200) {
          console.log(`Request ${num}: ✓ (status ${res.statusCode})`);
        } else {
          console.log(
            `Request ${num}: ✗ (status ${res.statusCode}) - ${data.substring(0, 100)}`,
          );
        }
        resolve();
      });
    });

    req.on("error", (e) => {
      console.log(`Request ${num}: ✗ (error: ${e.message})`);
      resolve();
    });

    req.write(testPayload);
    req.end();
  });
}

// Handle cleanup
process.on("SIGINT", () => {
  server.kill("SIGTERM");
  process.exit(1);
});
