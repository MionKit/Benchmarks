#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const {
  REPO_ROOT,
  readPkgJson,
  writePkgJson,
  getMionEntries,
  toTarballRef,
  isFileRef,
  run
} = require('./mion-utils')

const MION_REPO = path.resolve(REPO_ROOT, '..', 'mion')
const PACK_SCRIPT = path.join(MION_REPO, 'scripts', 'pack-packages.sh')
const SOURCE_DIR = path.join(MION_REPO, 'test-publish', 'tarballs')
const DEST_DIR = path.join(REPO_ROOT, 'mion-tarballs')

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

// Clear existing tarballs
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
// --no-frozen-lockfile because we just mutated package.json; pnpm needs
// to refresh the @mionjs/* entries in the lockfile. Registry-dep integrity
// (the rest of the lockfile) stays locked.
console.log('Running pnpm install...')
run('pnpm install --no-frozen-lockfile', { cwd: REPO_ROOT })

console.log('\nDone! mion packages linked from local tarballs.')
