#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const REPO_ROOT = path.resolve(__dirname, '..')
const PKG_JSON_PATH = path.join(REPO_ROOT, 'package.json')

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

module.exports = {
  REPO_ROOT,
  PKG_JSON_PATH,
  readPkgJson,
  writePkgJson,
  getMionEntries,
  toTarballRef,
  isFileRef,
  run
}
