// Simulate what happens during module loading
// First, let's see what core exports at different points

console.log('=== Testing module loading order ===\n');

// Clear require cache to simulate fresh load
delete require.cache[require.resolve('@mionkit/core')];
delete require.cache[require.resolve('@mionkit/router')];

// Now let's trace what happens
const originalRequire = require;

// Load core first
console.log('1. Loading @mionkit/core...');
const core = require('@mionkit/core');
console.log('   core.__ΩSerializableMethodsData exists:', !!core.__ΩSerializableMethodsData);

// Now load router
console.log('\n2. Loading @mionkit/router...');
const router = require('@mionkit/router');
console.log('   core.__ΩSerializableMethodsData exists:', !!core.__ΩSerializableMethodsData);

// Check the lazy reference again
const path = require('path');
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('\n3. Checking lazy reference:');
console.log('   lazyRef:', lazyRef.toString());
console.log('   lazyRef():', lazyRef());
