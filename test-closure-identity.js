const path = require('path');

// Load the modules
const core = require('@mionkit/core');
const router = require('@mionkit/router');

// Get the client.routes module
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

// Get the lazy reference
const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('=== Testing closure identity ===');
console.log('lazyRef.toString():', lazyRef.toString());
console.log('lazyRef():', lazyRef());

// Let's try to extract the core object from the closure
// We can do this by modifying the lazy reference temporarily
console.log('\n=== Extracting core from closure ===');

// Create a test function that will capture the same core
const testFn = new Function('core', 'return () => core.__ΩSerializableMethodsData');
const testLazyRef = testFn(core);
console.log('testLazyRef():', testLazyRef());

// Check if the issue is with the specific property name
console.log('\n=== Testing property access ===');
console.log('core["__ΩSerializableMethodsData"]:', core["__ΩSerializableMethodsData"]);
console.log('core.__ΩSerializableMethodsData:', core.__ΩSerializableMethodsData);

// Check if there's something special about the Unicode character
const propName = '__ΩSerializableMethodsData';
console.log('Property name:', propName);
console.log('Property name length:', propName.length);
console.log('Property exists in core:', propName in core);
console.log('core[propName]:', core[propName]);
