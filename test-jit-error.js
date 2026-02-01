const path = require('path');

// Load the modules
const core = require('@mionkit/core');
const router = require('@mionkit/router');

// Get the client.routes module
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

// Get the handler
const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const handler = methodsMetadataById.handler;

// Reflect the function
const runTypes = require('@mionkit/run-types');
const rt = runTypes.reflectFunction(handler);

console.log('=== Return type info ===');
const returnType = rt.getReturnType();
console.log('Return type kind:', returnType.src.kind);
console.log('Return type name:', returnType.getKindName());

// Check the union children
console.log('\n=== Union children ===');
const children = returnType.getChildRunTypes();
children.forEach((child, i) => {
    console.log(`Child ${i}: kind=${child.src.kind}, name=${child.getKindName()}`);
});

// Try to check allowed children (this is where the error occurs)
console.log('\n=== Checking allowed children ===');
try {
    returnType.checkAllowedChildren();
    console.log('Check passed!');
} catch (error) {
    console.log('Check failed:', error.message);
}
