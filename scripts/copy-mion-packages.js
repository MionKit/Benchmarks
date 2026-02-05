#!/usr/bin/env node

/**
 * Script to copy mion packages from the local mion repository to node_modules.
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
 * ## Behavior
 *
 * - Source packages are expected at ../mion/packages/<pkg-name>
 * - Always copies packages (whether currently symlinked or already copied)
 * - Removes TS source files (index.ts, src/) only from the COPIED files, never from originals
 *
 * ## Usage
 *
 *   npm run mionCopy
 *
 *   # To restore symlinks for development:
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
  "node",
  "quick-start",
  "router",
  "run-types",
  "type-formats",
];

// Files/folders to remove after copying (TypeScript sources that Bun might pick up)
const FILES_TO_REMOVE = ["index.ts", "src"];

// Paths
const PROJECT_ROOT = path.join(__dirname, "..");
const MION_ROOT = path.join(PROJECT_ROOT, "..", "mion");
const MION_PACKAGES_DIR = path.join(MION_ROOT, "packages");
const NODE_MODULES_MIONKIT = path.join(
  PROJECT_ROOT,
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

function removeDirOrSymlink(targetPath) {
  if (!fs.existsSync(targetPath) && !isSymlink(targetPath)) {
    return;
  }

  if (isSymlink(targetPath)) {
    fs.unlinkSync(targetPath);
  } else {
    fs.rmSync(targetPath, { recursive: true, force: true });
  }
}

function main() {
  console.log("=== Mion Packages Copy Script ===");
  console.log("(Workaround for Bun CJS symlink module resolution bug)\n");

  // Check if mion source directory exists
  if (!fs.existsSync(MION_PACKAGES_DIR)) {
    console.error(
      `Error: Mion packages directory not found at ${MION_PACKAGES_DIR}`,
    );
    console.error(
      "Expected mion repository at ../mion relative to this project",
    );
    process.exit(1);
  }

  console.log(`Mion source: ${MION_PACKAGES_DIR}`);
  console.log(`Destination: ${NODE_MODULES_MIONKIT}`);

  // Ensure @mionkit directory exists
  if (!fs.existsSync(NODE_MODULES_MIONKIT)) {
    fs.mkdirSync(NODE_MODULES_MIONKIT, { recursive: true });
  }

  console.log("\n--- Starting copy process ---\n");

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const pkg of MION_PACKAGES) {
    console.log(`Processing ${pkg}...`);

    const sourcePath = path.join(MION_PACKAGES_DIR, pkg);
    const destPath = path.join(NODE_MODULES_MIONKIT, pkg);

    // Check source exists
    if (!fs.existsSync(sourcePath)) {
      console.log(`  Skipping (source not found at ${sourcePath})`);
      skipCount++;
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
      errorCount++;
      continue;
    }

    // Check current state
    const currentIsSymlink = isSymlink(destPath);
    const currentExists = fs.existsSync(destPath);
    const status = currentIsSymlink
      ? "symlinked"
      : currentExists
        ? "copied"
        : "not present";
    console.log(`  Current state: ${status}`);

    // Remove existing (symlink or directory)
    console.log(`  Removing existing...`);
    removeDirOrSymlink(destPath);

    // Copy the entire package directory
    console.log(`  Copying from source...`);
    copyDirRecursive(sourcePath, destPath);

    // Remove TypeScript source files to prevent Bun from using them
    // Safe to remove since we just copied them (not original files)
    let removedCount = 0;
    for (const fileToRemove of FILES_TO_REMOVE) {
      const filePath = path.join(destPath, fileToRemove);
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
    const destDistPath = path.join(destPath, ".dist");
    const destBuildPath = path.join(destPath, "build");
    if (fs.existsSync(destDistPath) || fs.existsSync(destBuildPath)) {
      console.log(`  ✓ Successfully copied ${pkg}`);
      successCount++;
    } else {
      console.error(`  ✗ Failed to copy ${pkg}`);
      errorCount++;
    }
  }

  console.log("\n=== Copy complete ===");
  console.log(`  Success: ${successCount}`);
  console.log(`  Skipped: ${skipCount}`);
  console.log(`  Errors:  ${errorCount}`);
  console.log("\nNote: To restore symlinks, run: npm run mionlink");
}

main();
