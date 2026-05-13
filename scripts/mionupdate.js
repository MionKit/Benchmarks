#!/usr/bin/env node
'use strict'

const https = require('https')
const {
  REPO_ROOT,
  readPkgJson,
  writePkgJson,
  getMionEntries,
  run
} = require('./mion-utils')

function fetchLatestVersion () {
  return new Promise((resolve, reject) => {
    https.get('https://registry.npmjs.org/@mionjs/core/latest', (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Registry returned status ${res.statusCode}`))
        return
      }
      let data = ''
      res.on('data', chunk => { data += chunk })
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).version)
        } catch (e) {
          reject(new Error('Failed to parse registry response'))
        }
      })
    }).on('error', reject)
  })
}

async function main () {
  // 1. Resolve target version
  let version = process.argv[2] || null

  if (!version) {
    console.log('Fetching latest @mionjs version from npm...')
    try {
      version = await fetchLatestVersion()
    } catch (err) {
      console.error(`Error: Could not fetch latest version from npm registry: ${err.message}`)
      console.error('You can specify a version manually: node scripts/mionupdate.js <version>')
      process.exit(1)
    }
  }

  console.log(`Target version: ${version}\n`)

  // 2. Validate version format
  if (!/^\d+\.\d+\.\d+/.test(version)) {
    console.error(`Error: Invalid version format '${version}'. Expected semver (e.g., 0.8.4).`)
    process.exit(1)
  }

  // 3. Update package.json to npm versions
  const pkg = readPkgJson()
  const entries = getMionEntries(pkg)
  let changed = false

  for (const entry of entries) {
    if (entry.currentVersion !== version) {
      console.log(`  ${entry.name}: ${entry.currentVersion} → ${version}`)
      pkg[entry.field][entry.name] = version
      changed = true
    }
  }

  if (changed) {
    writePkgJson(pkg)
    console.log('\nUpdated package.json to npm versions.\n')
  } else {
    console.log(`package.json already at version ${version}.\n`)
  }

  // 4. Install dependencies
  console.log('Running pnpm install...')
  run('pnpm install', { cwd: REPO_ROOT })

  console.log(`\nDone! mion packages updated to ${version}.`)
}

main()
