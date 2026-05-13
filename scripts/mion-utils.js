#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const REPO_ROOT = path.resolve(__dirname, '..')
const PKG_JSON_PATH = path.join(REPO_ROOT, 'package.json')
const PNPM_WS_PATH = path.join(REPO_ROOT, 'pnpm-workspace.yaml')
const PNPM_LOCK_PATH = path.join(REPO_ROOT, 'pnpm-lock.yaml')

// Marker comment so ensurePnpmConfig() is idempotent across runs.
const MIONJS_CONFIG_MARKER =
  '# ── @mionjs exemptions (managed by scripts/mion-utils.js) ──'

function readPkgJson () {
  return JSON.parse(fs.readFileSync(PKG_JSON_PATH, 'utf8'))
}

function writePkgJson (pkg) {
  fs.writeFileSync(PKG_JSON_PATH, JSON.stringify(pkg, null, 2) + '\n')
}

/** Returns all @mionjs/* entries from dependencies and devDependencies */
function getMionEntries (pkg) {
  const entries = []
  for (const field of ['dependencies', 'devDependencies']) {
    if (!pkg[field]) continue
    for (const [name, version] of Object.entries(pkg[field])) {
      if (name.startsWith('@mionjs/')) {
        entries.push({ name, field, currentVersion: version })
      }
    }
  }
  return entries
}

/** Converts @mionjs/foo-bar → file:./mion-tarballs/mionjs-foo-bar.tgz */
function toTarballRef (pkgName) {
  const tarballName = pkgName.replace('@mionjs/', 'mionjs-')
  return `file:./mion-tarballs/${tarballName}.tgz`
}

function isFileRef (version) {
  return version.startsWith('file:')
}

function run (cmd, opts) {
  execSync(cmd, { stdio: 'inherit', ...opts })
}

/**
 * Ensure pnpm-workspace.yaml carries the exemptions mionlink/mionupdate need.
 *
 * The persistent settings we DO ship in pnpm-workspace.yaml:
 *   - allowNonRegistryProtocols: [file]  — narrow mion exception for the
 *     file:./mion-tarballs/* refs in package.json. Other non-registry
 *     protocols (git, http, github:, link:) stay blocked.
 *
 * The settings this function APPENDS on first run:
 *   - minimumReleaseAgeExclude includes @mionjs/*  — so mionupdate can
 *     install a freshly-published @mionjs release without waiting for the
 *     30-day quarantine window applied to every other registry dep.
 *
 * Idempotent: looks for MIONJS_CONFIG_MARKER and no-ops if present.
 */
function ensurePnpmConfig () {
  if (!fs.existsSync(PNPM_WS_PATH)) {
    console.error('Error: pnpm-workspace.yaml is missing.')
    console.error('Run `git checkout pnpm-workspace.yaml` to restore it.')
    process.exit(1)
  }

  const content = fs.readFileSync(PNPM_WS_PATH, 'utf8')
  if (content.includes(MIONJS_CONFIG_MARKER)) {
    console.log('pnpm-workspace.yaml already carries the @mionjs exemptions.')
    return
  }

  const block =
    '\n' + MIONJS_CONFIG_MARKER + '\n' +
    '# Required by scripts/mionlink.js and scripts/mionupdate.js.\n' +
    '# Exempts @mionjs/* from the global 30-day minimumReleaseAge quarantine\n' +
    '# so freshly-published mion releases can be benchmarked immediately.\n' +
    '# The lockfile still pins exact versions + integrity hashes.\n' +
    'minimumReleaseAgeExclude:\n' +
    "  - '@mionjs/*'\n"

  fs.writeFileSync(PNPM_WS_PATH, content + block)
  console.log('Appended @mionjs exemptions to pnpm-workspace.yaml.')
}

/**
 * Print + assert lockfile safety expectations.
 *
 * SECURITY: these scripts MUST NEVER delete pnpm-lock.yaml. Deleting it
 * forces fresh resolution of every transitive registry dep without integrity
 * hashes — a wide supply-chain window. Instead we use --no-frozen-lockfile,
 * which mutates only the entries whose package.json reference changed (the
 * @mionjs/* refs the script just rewrote) and keeps every other integrity
 * hash locked.
 *
 * If you ever see code that does `rm` / `unlink` of pnpm-lock.yaml in these
 * scripts, treat it as a bug.
 */
function reportLockfileState () {
  if (fs.existsSync(PNPM_LOCK_PATH)) {
    const stat = fs.statSync(PNPM_LOCK_PATH)
    console.log(
      `pnpm-lock.yaml present (${stat.size} bytes) — will be updated in place, not deleted.`
    )
  } else {
    console.log('pnpm-lock.yaml not yet present — pnpm install will create it.')
  }
}

module.exports = {
  REPO_ROOT,
  PKG_JSON_PATH,
  PNPM_WS_PATH,
  PNPM_LOCK_PATH,
  readPkgJson,
  writePkgJson,
  getMionEntries,
  toTarballRef,
  isFileRef,
  run,
  ensurePnpmConfig,
  reportLockfileState
}
