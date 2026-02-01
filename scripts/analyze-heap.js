#!/usr/bin/env node
"use strict";

/**
 * Analyze Bun heap snapshots to find memory leaks
 * Bun heap snapshot format:
 * - nodes: flat array, 5 fields per node [classNameIndex, labelIndex, ?, size, ?]
 * - nodeClassNames: array of class name strings
 * - edgeNames: array of edge name strings
 */

const fs = require("fs");

const snapshotFile = process.argv[2] || "heap-snapshot-0.json";

console.log(`Analyzing heap snapshot: ${snapshotFile}`);

const data = JSON.parse(fs.readFileSync(snapshotFile, "utf8"));

console.log("\n=== Heap Snapshot Structure ===");
console.log("Version:", data.version);
console.log("Type:", data.type);
console.log("Node class names count:", data.nodeClassNames?.length);
console.log("Edge names count:", data.edgeNames?.length);

// Bun format: nodes is a flat array with 5 fields per node
// [classNameIndex, labelIndex, ?, size, edgeCount]
const FIELDS_PER_NODE = 5;
const nodeCount = data.nodes.length / FIELDS_PER_NODE;

console.log(`\nTotal nodes: ${nodeCount}`);

// Count by class name
const classCounts = {};
const classSizes = {};
const classLabels = {};

for (let i = 0; i < data.nodes.length; i += FIELDS_PER_NODE) {
  const classNameIndex = data.nodes[i];
  const labelIndex = data.nodes[i + 1];
  const size = data.nodes[i + 3];

  const className =
    data.nodeClassNames[classNameIndex] || `class_${classNameIndex}`;
  const label = data.edgeNames?.[labelIndex] || "";

  classCounts[className] = (classCounts[className] || 0) + 1;
  classSizes[className] = (classSizes[className] || 0) + size;

  // Store some labels as examples
  if (!classLabels[className]) {
    classLabels[className] = [];
  }
  if (classLabels[className].length < 5 && label) {
    classLabels[className].push(label.slice(0, 80));
  }
}

// Sort by total size
const sortedClasses = Object.entries(classSizes)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 40);

console.log("\n=== Top 40 Classes by Total Size ===");
let totalSize = 0;
for (const [className, size] of sortedClasses) {
  const count = classCounts[className];
  const avgSize = (size / count).toFixed(0);
  const sizeMB = (size / 1024 / 1024).toFixed(2);
  totalSize += size;
  console.log(
    `${className}: ${count} objects, ${sizeMB}MB total, ${avgSize} bytes avg`,
  );
  if (classLabels[className]?.length > 0) {
    console.log(
      `  Labels: ${classLabels[className].slice(0, 3).join(", ").slice(0, 120)}`,
    );
  }
}
console.log(`\nTotal tracked size: ${(totalSize / 1024 / 1024).toFixed(2)}MB`);

// Sort by count
const sortedByCount = Object.entries(classCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

console.log("\n=== Top 20 Classes by Count ===");
for (const [className, count] of sortedByCount) {
  const size = classSizes[className];
  const sizeMB = (size / 1024 / 1024).toFixed(2);
  console.log(`${className}: ${count} objects, ${sizeMB}MB total`);
}

// Look for specific patterns
console.log("\n=== Potential Leak Indicators ===");

// Classes with high count AND high size
const suspiciousClasses = Object.entries(classCounts)
  .filter(
    ([className, count]) => count > 1000 && classSizes[className] > 1024 * 1024,
  )
  .sort((a, b) => classSizes[b[0]] - classSizes[a[0]]);

if (suspiciousClasses.length > 0) {
  console.log("\nClasses with >1000 objects AND >1MB total:");
  for (const [className, count] of suspiciousClasses) {
    const sizeMB = (classSizes[className] / 1024 / 1024).toFixed(2);
    console.log(`  ${className}: ${count} objects, ${sizeMB}MB`);
  }
}

// Look for mion-related class names
console.log("\n=== All Class Names ===");
console.log(data.nodeClassNames.join(", "));

console.log("\n=== Analysis Complete ===");
