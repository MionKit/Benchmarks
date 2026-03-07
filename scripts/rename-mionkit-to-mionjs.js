#!/usr/bin/env node

/**
 * Renames all @mionjs/ references to @mionjs/ across the repo.
 *
 * Usage:
 *   node scripts/rename-mionkit-to-mionjs.js          # dry-run (report only)
 *   node scripts/rename-mionkit-to-mionjs.js --apply   # apply changes
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OLD = "@mionjs/";
const NEW = "@mionjs/";

// Directories to skip
const SKIP_DIRS = new Set([
  "node_modules",
  ".git",
  "_compiled-apps",
  ".claude",
]);

// File extensions to process
const EXTENSIONS = new Set([
  ".js",
  ".ts",
  ".mts",
  ".json",
  ".md",
  ".yaml",
  ".yml",
]);

const applyMode = process.argv.includes("--apply");

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walk(fullPath));
    } else if (EXTENSIONS.has(path.extname(entry.name))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walk(ROOT);
const matches = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf-8");
  if (!content.includes(OLD)) continue;

  const relPath = path.relative(ROOT, file);
  const lines = content.split("\n");
  const matchingLines = [];

  lines.forEach((line, i) => {
    if (line.includes(OLD)) {
      matchingLines.push({ num: i + 1, text: line.trimStart() });
    }
  });

  matches.push({ file: relPath, lines: matchingLines, content });

  if (applyMode) {
    const updated = content.replaceAll(OLD, NEW);
    fs.writeFileSync(file, updated, "utf-8");
  }
}

// Report
if (matches.length === 0) {
  console.log("No @mionjs/ references found.");
  process.exit(0);
}

console.log(
  applyMode ? "\n=== Changes Applied ===" : "\n=== Dry Run (use --apply to rename) ==="
);
console.log(`\nFound ${matches.length} files with @mionjs/ references:\n`);

for (const m of matches) {
  console.log(`  ${m.file}`);
  for (const l of m.lines) {
    console.log(`    L${l.num}: ${l.text}`);
  }
  console.log();
}

if (applyMode) {
  console.log(`✓ Replaced "@mionjs/" → "@mionjs/" in ${matches.length} files.`);
  console.log(
    "\nRemember to also:\n" +
    "  1. Rebuild: npm run build\n" +
    "  2. Update mionlink script if package names changed\n" +
    "  3. Re-link packages: npm run mionlink\n"
  );
} else {
  console.log(`Run with --apply to rename all occurrences.`);
}
