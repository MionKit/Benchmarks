#!/usr/bin/env node
'use strict'

// Enforces the supply-chain rule that ONLY @mionjs/* dependencies may use
// non-registry protocols (file:, link:, git:, etc). pnpm exposes
// `allowNonRegistryProtocols` as a global boolean and has no per-package
// allowlist, so we keep it on (mionlink needs it) and police the rest here.
// Wired as the package.json `preinstall` script so any `pnpm install`
// fails fast if a foreign dep slips in via a non-registry spec.

const fs = require('fs')
const path = require('path')

const pkg = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
)
const NON_REGISTRY = /^(file:|link:|git:|git\+|github:|http:|https:|workspace:|portal:)/

const violations = []
for (const field of [
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies'
]) {
  const deps = pkg[field]
  if (!deps) continue
  for (const [name, spec] of Object.entries(deps)) {
    if (name.startsWith('@mionjs/')) continue
    if (typeof spec === 'string' && NON_REGISTRY.test(spec)) {
      violations.push(`${field}.${name} = ${spec}`)
    }
  }
}

if (violations.length) {
  console.error(
    'Disallowed non-registry dependency sources. Only @mionjs/* packages may'
  )
  console.error(
    'be installed from file:/link:/git:/etc — every other dependency must'
  )
  console.error('resolve from the npm registry. Offending entries:')
  for (const v of violations) console.error('  ' + v)
  process.exit(1)
}
