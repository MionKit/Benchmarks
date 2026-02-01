#!/usr/bin/env node

/**
 * Script to copy mion packages from the linked mion repository to node_modules.
 *
 * ## Why This Script Exists (Bun Bug Workaround)
 *
 * There is a bug in Bun's CJS module resolution when using npm-linked (symlinked) packages.
 * When a symlinked package (e.g., @mionkit/router) requires another symlinked package
 * (e.g., @mionkit/core), Bun creates a SEPARATE empty module instance instead of sharing
 * the same module object.
 *
 * ### The Problem
 *
 * In `@mionkit/router/.dist/cjs/src/routes/client.routes.js`, line 3:
 *   const core = require("@mionkit/core");
 *
 * The `core` object captured in this closure has 0 keys in Bun (but 205 keys in Node.js).
 * This causes lazy type references like `() => core.__ΩSerializableMethodsData` to return
 * `undefined`, which deepkit interprets as `unknown`.
 *
 * ### Evidence
 *
 * | Runtime   | core === _internalCore | core keys | _internalCore keys |
 * |-----------|------------------------|-----------|-------------------|
 * | Node.js   | true (same object)     | 205       | 205               |
 * | Bun       | false (different!)     | 205       | 0                 |
 *
 * ### The Error
 *
 * When running `bun benchmarks/mion.bun.js` with symlinked packages:
 *
 *   Error: Can not get Jit Functions for Return of route/linkedFn "mion@methodsMetadataById."
 *   Error: Union can not have 'any' or 'unknown' types.
 *   Type: unknown | RpcError<'rpc-metadata-not-found'>
 *
 * The `SerializableMethodsData` type is resolved as `unknown` because the lazy reference
 * `() => core.__ΩSerializableMethodsData` returns `undefined`.
 *
 * ### The Solution
 *
 * This script copies the packages instead of symlinking them, which avoids the Bun bug.
 * It also removes TypeScript source files (index.ts, src/) to prevent Bun from preferring
 * them over the compiled JavaScript in .dist/.
 *
 * ## Usage
 *
 *   npm run mionlink && npm run mionCopy
 *
 * Or to restore symlinks for development:
 *
 *   npm run mionlink
 */

const fs = require("fs");
const path = require("path");

const MION_PACKAGES = [
  "aot-caches",
  "aws",
  "bun",
  "client",
  "codegen",
  "core",
  "eslint-plugin",
  "gcloud",
  "http",
  "quick-start",
  "router",
  "run-types",
  "type-formats",
];

// Files/folders to remove after copying (TypeScript sources that Bun might pick up)
const FILES_TO_REMOVE = ["index.ts", "src"];
const NODE_MODULES_MIONKIT = path.join(
  __dirname,
  "..",
  "node_modules",
  "@mionkit",
);

function isSymlink(filePath) {
  try {
    const stats = fs.lstatSync(filePath);
    return stats.isSymbolicLink();
  } catch (e) {
    return false;
  }
}

function getSymlinkTarget(filePath) {
  try {
    return fs.readlinkSync(filePath);
  } catch (e) {
    return null;
  }
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    return;
  }

  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyDirRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function removeIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      fs.rmSync(filePath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(filePath);
    }
    return true;
  }
  return false;
}

function main() {
  console.log("=== Mion Packages Copy Script ===");
  console.log("(Workaround for Bun CJS symlink module resolution bug)\n");

  // Check if @mionkit directory exists
  if (!fs.existsSync(NODE_MODULES_MIONKIT)) {
    console.error("Error: @mionkit directory not found in node_modules");
    console.error('Please run "npm install" first, then "npm run mionlink"');
    process.exit(1);
  }

  // Check which packages are symlinked
  const symlinkedPackages = [];
  const nonSymlinkedPackages = [];

  for (const pkg of MION_PACKAGES) {
    const pkgPath = path.join(NODE_MODULES_MIONKIT, pkg);
    if (!fs.existsSync(pkgPath)) {
      console.log(`  Skipping ${pkg} (not installed)`);
      continue;
    }

    if (isSymlink(pkgPath)) {
      const target = getSymlinkTarget(pkgPath);
      symlinkedPackages.push({ name: pkg, path: pkgPath, target });
    } else {
      nonSymlinkedPackages.push({ name: pkg, path: pkgPath });
    }
  }

  console.log(`Found ${symlinkedPackages.length} symlinked packages:`);
  symlinkedPackages.forEach((p) => console.log(`  - ${p.name} -> ${p.target}`));

  if (nonSymlinkedPackages.length > 0) {
    console.log(
      `\nFound ${nonSymlinkedPackages.length} non-symlinked packages:`,
    );
    nonSymlinkedPackages.forEach((p) => console.log(`  - ${p.name}`));
  }

  if (symlinkedPackages.length === 0) {
    console.log("\nNo symlinked packages found. Nothing to copy.");
    console.log("If you want to link packages first, run: npm run mionlink");
    process.exit(0);
  }

  console.log("\n--- Starting copy process ---\n");

  for (const pkg of symlinkedPackages) {
    console.log(`Processing ${pkg.name}...`);

    // Resolve the symlink target to get the actual source path
    const sourcePath = path.resolve(path.dirname(pkg.path), pkg.target);

    if (!fs.existsSync(sourcePath)) {
      console.error(`  Error: Source path not found: ${sourcePath}`);
      continue;
    }

    // Check that either .dist or build folder exists in source
    const sourceDistPath = path.join(sourcePath, ".dist");
    const sourceBuildPath = path.join(sourcePath, "build");
    const hasDistFolder = fs.existsSync(sourceDistPath);
    const hasBuildFolder = fs.existsSync(sourceBuildPath);

    if (!hasDistFolder && !hasBuildFolder) {
      console.error(
        `  Error: Neither .dist nor build folder found in ${sourcePath}`,
      );
      console.error(
        `  Please build the mion packages first (npm run build in mion repo)`,
      );
      continue;
    }

    // Remove the symlink
    console.log(`  Removing symlink...`);
    fs.unlinkSync(pkg.path);

    // Copy the entire package directory
    console.log(`  Copying package...`);
    copyDirRecursive(sourcePath, pkg.path);

    // Remove TypeScript source files to prevent Bun from using them
    let removedCount = 0;
    for (const fileToRemove of FILES_TO_REMOVE) {
      const filePath = path.join(pkg.path, fileToRemove);
      if (removeIfExists(filePath)) {
        removedCount++;
      }
    }

    if (removedCount > 0) {
      console.log(
        `  Removed ${removedCount} TypeScript source file(s)/folder(s)`,
      );
    }

    // Verify the copy
    const destDistPath = path.join(pkg.path, ".dist");
    const destBuildPath = path.join(pkg.path, "build");
    if (fs.existsSync(destDistPath) || fs.existsSync(destBuildPath)) {
      console.log(`  ✓ Successfully copied ${pkg.name}`);
    } else {
      console.error(`  ✗ Failed to copy ${pkg.name}`);
    }
  }

  console.log("\n=== Copy complete ===");
  console.log("\nNote: To restore symlinks, run: npm run mionlink");
}

main();
