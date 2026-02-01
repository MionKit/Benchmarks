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

console.log('=== Handler info ===');
console.log('handler:', handler);
console.log('handler.__type:', handler.__type);

// Check the lazy references
console.log('\n=== Lazy references ===');
const typeArr = handler.__type;
typeArr.forEach((el, i) => {
    if (typeof el === 'function') {
        console.log(`[${i}]: ${el.toString().substring(0, 50)}... -> ${el()}`);
    }
});

// Now let's try to reflect the function
console.log('\n=== Reflecting function ===');
const runTypes = require('@mionkit/run-types');
try {
    const rt = runTypes.reflectFunction(handler);
    console.log('Reflection successful!');
    console.log('Return type:', rt.getReturnType());
} catch (error) {
    console.log('Reflection failed:', error.message);
}
