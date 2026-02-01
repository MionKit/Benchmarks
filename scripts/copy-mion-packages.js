#!/usr/bin/env node

/**
 * Script to copy mion packages from the linked mion repository to node_modules.
 * This is a workaround for a Bun bug where symlinked CJS packages don't resolve correctly.
 *
 * The script:
 * 1. Checks that packages are currently symlinked (safety check)
 * 2. Copies the packages from the mion repo
 * 3. Removes TypeScript source files (index.ts, src/) to prevent Bun from using them
 * 4. Keeps only the .dist folder with compiled JS
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
  console.log("=== Mion Packages Copy Script ===\n");

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

    // Check that .dist folder exists in source
    const sourceDistPath = path.join(sourcePath, ".dist");
    if (!fs.existsSync(sourceDistPath)) {
      console.error(`  Error: .dist folder not found in ${sourcePath}`);
      console.error(
        `  Please build the mion packages first (npm run build in mion repo)`,
      );
      continue;
    }

    // Remove the symlink
    console.log(`  Removing symlink...`);
    fs.unlinkSync(pkg.path);

    // Create the package directory
    fs.mkdirSync(pkg.path, { recursive: true });

    // Copy package.json
    const pkgJsonSrc = path.join(sourcePath, "package.json");
    const pkgJsonDest = path.join(pkg.path, "package.json");
    if (fs.existsSync(pkgJsonSrc)) {
      fs.copyFileSync(pkgJsonSrc, pkgJsonDest);
      console.log(`  Copied package.json`);
    }

    // Copy .dist folder
    console.log(`  Copying .dist folder...`);
    copyDirRecursive(sourceDistPath, path.join(pkg.path, ".dist"));

    // Copy README.md if exists
    const readmeSrc = path.join(sourcePath, "README.md");
    if (fs.existsSync(readmeSrc)) {
      fs.copyFileSync(readmeSrc, path.join(pkg.path, "README.md"));
    }

    // Verify the copy
    const destDistPath = path.join(pkg.path, ".dist");
    if (fs.existsSync(destDistPath)) {
      console.log(`  ✓ Successfully copied ${pkg.name}`);
    } else {
      console.error(`  ✗ Failed to copy ${pkg.name}`);
    }
  }

  console.log("\n=== Copy complete ===");
  console.log("\nNote: To restore symlinks, run: npm run mionlink");
}

main();
