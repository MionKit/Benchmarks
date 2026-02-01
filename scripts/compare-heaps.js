#!/usr/bin/env node
/**
 * Compare two Bun heap snapshots to identify memory growth
 * Usage: node scripts/compare-heaps.js heap-snapshot-0.json heap-snapshot-1.json
 */

const fs = require("fs");
const path = require("path");

const file1 = process.argv[2] || "heap-snapshot-0.json";
const file2 = process.argv[3] || "heap-snapshot-1.json";

console.log(`Comparing heap snapshots:`);
console.log(`  Before: ${file1}`);
console.log(`  After:  ${file2}`);
console.log("");

// Stream-parse the JSON to avoid memory issues
function parseHeapSnapshot(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(content);

  const classNames = data.nodeClassNames || [];
  const nodes = data.nodes || [];

  // Bun heap snapshot format: 5 fields per node
  // [classNameIndex, labelIndex, ?, ?, size]
  const classCounts = {};
  const classSizes = {};

  for (let i = 0; i < nodes.length; i += 5) {
    const classIndex = nodes[i];
    const size = nodes[i + 4];
    const className = classNames[classIndex] || `class_${classIndex}`;

    classCounts[className] = (classCounts[className] || 0) + 1;
    classSizes[className] = (classSizes[className] || 0) + size;
  }

  return { classCounts, classSizes, totalNodes: nodes.length / 5 };
}

console.log("Parsing first snapshot...");
const snap1 = parseHeapSnapshot(file1);
console.log(`  Total nodes: ${snap1.totalNodes}`);

console.log("Parsing second snapshot...");
const snap2 = parseHeapSnapshot(file2);
console.log(`  Total nodes: ${snap2.totalNodes}`);

console.log("");
console.log("=== Memory Growth Analysis ===");
console.log("");

// Calculate differences
const diffs = [];
const allClasses = new Set([
  ...Object.keys(snap1.classCounts),
  ...Object.keys(snap2.classCounts),
]);

for (const className of allClasses) {
  const count1 = snap1.classCounts[className] || 0;
  const count2 = snap2.classCounts[className] || 0;
  const size1 = snap1.classSizes[className] || 0;
  const size2 = snap2.classSizes[className] || 0;

  const countDiff = count2 - count1;
  const sizeDiff = size2 - size1;

  if (countDiff !== 0 || sizeDiff !== 0) {
    diffs.push({
      className,
      count1,
      count2,
      countDiff,
      size1,
      size2,
      sizeDiff,
      sizeDiffMB: sizeDiff / (1024 * 1024),
    });
  }
}

// Sort by size difference (descending)
diffs.sort((a, b) => b.sizeDiff - a.sizeDiff);

console.log("Top 30 classes by memory growth:");
console.log("");
console.log(
  "Class Name                          | Count Before | Count After | Count Δ | Size Before | Size After | Size Δ (MB)",
);
console.log("-".repeat(120));

for (const diff of diffs.slice(0, 30)) {
  const name = diff.className.padEnd(35);
  const c1 = String(diff.count1).padStart(12);
  const c2 = String(diff.count2).padStart(11);
  const cd =
    (diff.countDiff >= 0 ? "+" : "") + String(diff.countDiff).padStart(6);
  const s1 = (diff.size1 / (1024 * 1024)).toFixed(2).padStart(10) + " MB";
  const s2 = (diff.size2 / (1024 * 1024)).toFixed(2).padStart(9) + " MB";
  const sd =
    (diff.sizeDiffMB >= 0 ? "+" : "") + diff.sizeDiffMB.toFixed(2).padStart(9);

  console.log(`${name} | ${c1} | ${c2} | ${cd} | ${s1} | ${s2} | ${sd}`);
}

console.log("");
console.log("=== Mion-specific classes ===");
console.log("");

const mionClasses = diffs.filter(
  (d) =>
    d.className.includes("RunType") ||
    d.className.includes("Jit") ||
    d.className.includes("Compiler") ||
    d.className.includes("Serializer") ||
    d.className.includes("Entity") ||
    d.className.includes("Annotation"),
);

if (mionClasses.length > 0) {
  console.log(
    "Class Name                          | Count Before | Count After | Count Δ | Size Δ (MB)",
  );
  console.log("-".repeat(90));

  for (const diff of mionClasses) {
    const name = diff.className.padEnd(35);
    const c1 = String(diff.count1).padStart(12);
    const c2 = String(diff.count2).padStart(11);
    const cd =
      (diff.countDiff >= 0 ? "+" : "") + String(diff.countDiff).padStart(6);
    const sd =
      (diff.sizeDiffMB >= 0 ? "+" : "") +
      diff.sizeDiffMB.toFixed(2).padStart(9);

    console.log(`${name} | ${c1} | ${c2} | ${cd} | ${sd}`);
  }
} else {
  console.log("No mion-specific classes found with changes.");
}

console.log("");
console.log("=== Summary ===");
console.log("");

const totalSizeBefore = Object.values(snap1.classSizes).reduce(
  (a, b) => a + b,
  0,
);
const totalSizeAfter = Object.values(snap2.classSizes).reduce(
  (a, b) => a + b,
  0,
);
const totalGrowth = totalSizeAfter - totalSizeBefore;

console.log(
  `Total tracked size before: ${(totalSizeBefore / (1024 * 1024)).toFixed(2)} MB`,
);
console.log(
  `Total tracked size after:  ${(totalSizeAfter / (1024 * 1024)).toFixed(2)} MB`,
);
console.log(
  `Total growth:              ${(totalGrowth / (1024 * 1024)).toFixed(2)} MB`,
);
console.log(`Node count before:         ${snap1.totalNodes}`);
console.log(`Node count after:          ${snap2.totalNodes}`);
console.log(
  `Node count growth:         ${snap2.totalNodes - snap1.totalNodes}`,
);
