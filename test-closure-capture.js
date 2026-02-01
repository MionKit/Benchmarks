const path = require('path');

// Get the core module that client.routes.js captured
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');

// Load client.routes first to see what core it captured
const clientRoutes = require(clientRoutesPath);

// Now load core directly
const coreDirectly = require('@mionkit/core');

// Get the lazy reference
const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('=== Comparing core objects ===');
console.log('coreDirectly.__ΩSerializableMethodsData exists:', !!coreDirectly.__ΩSerializableMethodsData);
console.log('lazyRef():', lazyRef());

// Let's extract the core object from the closure
// We can do this by looking at what the closure references
console.log('\n=== Checking closure ===');
console.log('lazyRef.toString():', lazyRef.toString());

// Let's check if the issue is with how Bun handles the module
console.log('\n=== Module identity check ===');

// Check the actual module cache
const coreModulePath = require.resolve('@mionkit/core');
console.log('Core module path:', coreModulePath);

// Check what's in the cache
const cachedCore = require.cache[coreModulePath];
console.log('Cached core exports keys:', cachedCore ? Object.keys(cachedCore.exports).filter(k => k.includes('Serializable')) : 'not cached');
