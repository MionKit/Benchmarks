const path = require('path');

// First load the router to populate the cache
const router = require('@mionkit/router');
const core = require('@mionkit/core');

// Now check the cache
const cacheKeys = Object.keys(require.cache);
const coreKeys = cacheKeys.filter(k => k.includes('mionkit/core'));
console.log('=== Core modules in cache ===');
coreKeys.forEach(k => {
    const mod = require.cache[k];
    const hasSerializable = mod && mod.exports && mod.exports.__ΩSerializableMethodsData;
    console.log(`${k}`);
    console.log(`  has __ΩSerializableMethodsData: ${hasSerializable}`);
});

// Check the lazy reference
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('\n=== Lazy reference ===');
console.log('lazyRef.toString():', lazyRef.toString());
console.log('lazyRef():', lazyRef());

// Check if there are multiple core modules
console.log('\n=== Checking for duplicate core modules ===');
const jsCore = coreKeys.find(k => k.endsWith('.js') && k.includes('index'));
const tsCore = coreKeys.find(k => k.endsWith('.ts') && k.includes('index'));
console.log('JS core:', jsCore);
console.log('TS core:', tsCore);

if (jsCore && tsCore) {
    console.log('\n=== Comparing JS and TS core modules ===');
    const jsMod = require.cache[jsCore].exports;
    const tsMod = require.cache[tsCore].exports;
    console.log('JS has __ΩSerializableMethodsData:', !!jsMod.__ΩSerializableMethodsData);
    console.log('TS has __ΩSerializableMethodsData:', !!tsMod.__ΩSerializableMethodsData);
    console.log('Same object?:', jsMod === tsMod);
}
