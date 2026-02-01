#!/usr/bin/env node
"use strict";

/**
 * Test script to diagnose memory leak in mion.bun
 * Runs the server and sends requests while monitoring JIT cache growth
 */

const { spawn } = require("child_process");
const path = require("path");

const serverFile = path.join(__dirname, "..", "benchmarks", "mion.bun.js");

console.log("Starting mion.bun server with diagnostic logging...\n");

// Start the server with bun, inheriting stdio to see the diagnostic logs
const server = spawn("bun", [serverFile], {
  stdio: "inherit",
  cwd: path.join(__dirname, ".."),
});

server.on("error", (err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

// Wait for server to start, then send requests
setTimeout(async () => {
  console.log("\n--- Sending test requests ---\n");

  const sendRequest = async (i) => {
    const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const body = JSON.stringify([
      {
        id,
        name: "john",
        surname: "smith",
        lastUpdate: "2020-12-17T02:24:00.000Z",
      },
    ]);

    try {
      const response = await fetch("http://127.0.0.1:3000/updateUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        console.error(`Request ${i} failed:`, response.status);
      }
    } catch (err) {
      console.error(`Request ${i} error:`, err.message);
    }
  };

  // Send 100 requests in batches
  const batchSize = 10;
  const totalRequests = 100;

  for (let batch = 0; batch < totalRequests / batchSize; batch++) {
    const promises = [];
    for (let i = 0; i < batchSize; i++) {
      promises.push(sendRequest(batch * batchSize + i));
    }
    await Promise.all(promises);
    console.log(`Completed batch ${batch + 1}/${totalRequests / batchSize}`);
  }

  console.log("\n--- All requests completed ---");
  console.log("Waiting 3 seconds to observe final cache state...\n");

  setTimeout(() => {
    console.log("\n--- Shutting down server ---");
    server.kill("SIGINT");
    process.exit(0);
  }, 3000);
}, 2000);

// Handle Ctrl+C
process.on("SIGINT", () => {
  console.log("\nInterrupted, shutting down...");
  server.kill("SIGINT");
  process.exit(0);
});
