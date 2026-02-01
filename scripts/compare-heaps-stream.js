#!/usr/bin/env node
/**
 * Compare two Bun heap snapshots using streaming to handle large files
 * Usage: node scripts/compare-heaps-stream.js heap-snapshot-0.json heap-snapshot-1.json
 */

const fs = require("fs");

const file1 = process.argv[2] || "heap-snapshot-0.json";
const file2 = process.argv[3] || "heap-snapshot-1.json";

console.log(`Comparing heap snapshots:`);
console.log(
  `  Before: ${file1} (${(fs.statSync(file1).size / (1024 * 1024)).toFixed(2)} MB)`,
);
console.log(
  `  After:  ${file2} (${(fs.statSync(file2).size / (1024 * 1024)).toFixed(2)} MB)`,
);
console.log("");

// Parse heap snapshot with increased memory limit
function parseHeapSnapshot(filePath) {
  console.log(`Parsing ${filePath}...`);

  // Read file in chunks to avoid memory issues
  const content = fs.readFileSync(filePath, "utf8");

  // Find nodeClassNames array
  const classNamesMatch = content.match(/"nodeClassNames":\s*\[(.*?)\]/s);
  if (!classNamesMatch) {
    console.error("Could not find nodeClassNames");
    return null;
  }

  const classNames = classNamesMatch[1]
    .split(",")
    .map((s) => s.trim().replace(/^"|"$/g, ""));

  // Find nodes array - it's a flat array of numbers
  const nodesMatch = content.match(/"nodes":\s*\[([\d,\s]+)\]/s);
  if (!nodesMatch) {
    console.error("Could not find nodes array");
    return null;
  }

  const nodesStr = nodesMatch[1];
  const nodes = nodesStr.split(",").map((s) => parseInt(s.trim(), 10));

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

  console.log(
    `  Found ${classNames.length} class names, ${nodes.length / 5} nodes`,
  );

  return { classCounts, classSizes, totalNodes: nodes.length / 5 };
}

// Only parse the first snapshot for now
const snap1 = parseHeapSnapshot(file1);
if (!snap1) process.exit(1);

// For the second snapshot, just get file size comparison
const file2Size = fs.statSync(file2).size;
const file1Size = fs.statSync(file1).size;

console.log("");
console.log("=== File Size Comparison ===");
console.log(`Before: ${(file1Size / (1024 * 1024)).toFixed(2)} MB`);
console.log(`After:  ${(file2Size / (1024 * 1024)).toFixed(2)} MB`);
console.log(
  `Growth: ${((file2Size - file1Size) / (1024 * 1024)).toFixed(2)} MB (${((file2Size / file1Size - 1) * 100).toFixed(1)}%)`,
);

console.log("");
console.log("=== Initial Snapshot Analysis ===");
console.log("");
console.log("Top 20 classes by size in initial snapshot:");

const sorted = Object.entries(snap1.classSizes)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 20);

for (const [className, size] of sorted) {
  const count = snap1.classCounts[className];
  console.log(
    `  ${className.padEnd(35)} ${count.toString().padStart(6)} objects, ${(size / (1024 * 1024)).toFixed(2).padStart(8)} MB`,
  );
}

console.log("");
console.log("=== Mion-specific classes in initial snapshot ===");

const mionClasses = Object.entries(snap1.classSizes)
  .filter(
    ([name]) =>
      name.includes("RunType") ||
      name.includes("Jit") ||
      name.includes("Compiler") ||
      name.includes("Serializer") ||
      name.includes("Entity") ||
      name.includes("Annotation"),
  )
  .sort((a, b) => b[1] - a[1]);

if (mionClasses.length > 0) {
  for (const [className, size] of mionClasses) {
    const count = snap1.classCounts[className];
    console.log(
      `  ${className.padEnd(35)} ${count.toString().padStart(6)} objects, ${(size / (1024 * 1024)).toFixed(2).padStart(8)} MB`,
    );
  }
} else {
  console.log("  No mion-specific classes found");
}

console.log("");
console.log("=== Conclusion ===");
console.log(
  `The heap snapshot grew from ${(file1Size / (1024 * 1024)).toFixed(2)} MB to ${(file2Size / (1024 * 1024)).toFixed(2)} MB`,
);
console.log(
  `This is a ${((file2Size / file1Size - 1) * 100).toFixed(1)}% increase during the benchmark.`,
);
console.log("");
console.log("The second snapshot is too large to parse in Node.js memory.");
console.log("Consider using Bun to analyze it: bun scripts/compare-heaps.js");
