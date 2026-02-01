const path = require('path');

// Load core directly from the symlinked path
const coreFromSymlink = require('@mionkit/core');
console.log('Core from symlink - __ΩSerializableMethodsData exists:', !!coreFromSymlink.__ΩSerializableMethodsData);

// Load core from the actual path
const actualCorePath = '/Users/majerez/Projects/mion/packages/core/.dist/cjs/index.js';
const coreFromActual = require(actualCorePath);
console.log('Core from actual path - __ΩSerializableMethodsData exists:', !!coreFromActual.__ΩSerializableMethodsData);

// Check if they're the same object
console.log('Same object?:', coreFromSymlink === coreFromActual);

// Now check the client.routes lazy reference
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('\nLazy reference result:', lazyRef());

// Check what module path client.routes.js used to require core
console.log('\n=== Module cache analysis ===');
const cacheKeys = Object.keys(require.cache).filter(k => k.includes('core'));
console.log('Core-related cache keys:');
cacheKeys.forEach(k => console.log('  ', k));
