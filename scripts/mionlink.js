#!/usr/bin/env node
'use strict'

// SECURITY:
//   - This script NEVER deletes pnpm-lock.yaml. It runs
//     `pnpm install --no-frozen-lockfile`, which updates the lockfile in
//     place — only the @mionjs/* entries we just rewrote change; the
//     integrity hashes for every other registry dep stay locked.
//   - ensurePnpmConfig() guarantees the pnpm-workspace.yaml exemptions
//     required for the install to succeed are present before we shell out.
//   - --config.minimum-release-age=0 is passed belt-and-suspenders: even if
//     the managed config block is later removed, the install still works.

const fs = require('fs')
const path = require('path')
const {
  REPO_ROOT,
  readPkgJson,
  writePkgJson,
  getMionEntries,
  toTarballRef,
  isFileRef,
  run,
  ensurePnpmConfig,
  reportLockfileState
} = require('./mion-utils')

const MION_REPO = path.resolve(REPO_ROOT, '..', 'mion')
const PACK_SCRIPT = path.join(MION_REPO, 'scripts', 'pack-packages.sh')
const SOURCE_DIR = path.join(MION_REPO, 'test-publish', 'tarballs')
const DEST_DIR = path.join(REPO_ROOT, 'mion-tarballs')

// 0. Self-manage pnpm config + assert lockfile safety
ensurePnpmConfig()
reportLockfileState()

// 1. Verify mion repo exists
if (!fs.existsSync(PACK_SCRIPT)) {
  console.error(`Error: Cannot find ${PACK_SCRIPT}`)
  console.error(`Expected mion repo at: ${MION_REPO}`)
  console.error('Make sure the mion repository is cloned as a sibling directory.')
  process.exit(1)
}

// 2. Update package.json to file: refs if needed
const pkg = readPkgJson()
const entries = getMionEntries(pkg)
let changed = false

for (const entry of entries) {
  if (!isFileRef(entry.currentVersion)) {
    const tarballRef = toTarballRef(entry.name)
    pkg[entry.field][entry.name] = tarballRef
    console.log(`  ${entry.name}: ${entry.currentVersion} → ${tarballRef}`)
    changed = true
  }
}

if (changed) {
  writePkgJson(pkg)
  console.log('Updated package.json to use file: references.\n')
} else {
  console.log('package.json already uses file: references.\n')
}

// 3. Pack mion packages
console.log('Packing mion packages...')
run(`bash "${PACK_SCRIPT}"`)
console.log('')

// 4. Copy tarballs
console.log('Copying tarballs to ./mion-tarballs...')
fs.mkdirSync(DEST_DIR, { recursive: true })

// Clear existing tarballs (these are a per-machine cache; not the lockfile)
for (const file of fs.readdirSync(DEST_DIR)) {
  if (file.endsWith('.tgz')) {
    fs.unlinkSync(path.join(DEST_DIR, file))
  }
}

// Copy new tarballs
const tarballs = fs.readdirSync(SOURCE_DIR).filter(f => f.endsWith('.tgz'))
for (const file of tarballs) {
  fs.copyFileSync(path.join(SOURCE_DIR, file), path.join(DEST_DIR, file))
  console.log(`  ${file}`)
}
console.log(`Copied ${tarballs.length} tarballs.\n`)

// 5. Install dependencies
// --no-frozen-lockfile: we just mutated package.json; pnpm needs to refresh
//   only the @mionjs/* entries in the lockfile. Other entries stay locked.
// --config.minimum-release-age=0: bypass the 30-day quarantine for this
//   invocation; safe because @mionjs is the explicit local-build target.
console.log('Running pnpm install...')
run('pnpm install --no-frozen-lockfile --config.minimum-release-age=0', { cwd: REPO_ROOT })

console.log('\nDone! mion packages linked from local tarballs.')
