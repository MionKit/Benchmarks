const path = require('path');

// Check what client.routes.js is actually requiring
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');

// Read the client.routes.js file to see what it requires
const fs = require('fs');
const clientRoutesContent = fs.readFileSync(clientRoutesPath, 'utf8');
console.log('=== client.routes.js require statement ===');
const requireLine = clientRoutesContent.split('\n').find(l => l.includes('require("@mionkit/core")'));
console.log(requireLine);

// Now check what Bun resolves @mionkit/core to from within the router package
console.log('\n=== Module resolution from router package ===');

// Check if there's a TypeScript version being loaded
const cacheKeys = Object.keys(require.cache);
const coreKeys = cacheKeys.filter(k => k.includes('mionkit/core'));
console.log('Core modules in cache:');
coreKeys.forEach(k => {
    const mod = require.cache[k];
    const hasSerializable = mod && mod.exports && mod.exports.__ΩSerializableMethodsData;
    console.log(`  ${k}`);
    console.log(`    has __ΩSerializableMethodsData: ${hasSerializable}`);
});

// Check if the TypeScript module has the type
const tsCorePath = '/Users/majerez/Projects/mion/packages/core/index.ts';
if (require.cache[tsCorePath]) {
    console.log('\n=== TypeScript core module ===');
    const tsCore = require.cache[tsCorePath].exports;
    console.log('Keys:', Object.keys(tsCore).filter(k => k.includes('Serializable')));
}
