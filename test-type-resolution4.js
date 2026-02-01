const core = require('@mionkit/core');
const path = require('path');

// Get the actual path to the router module
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);

// Load client.routes from the correct path
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

// Check the handler for methodsMetadataById
const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
console.log('=== methodsMetadataById handler ===');
console.log('handler:', methodsMetadataById.handler);
console.log('handler.__type:', methodsMetadataById.handler.__type);

if (methodsMetadataById.handler.__type) {
    const typeArr = methodsMetadataById.handler.__type;
    console.log('\n=== Resolving lazy references ===');
    typeArr.forEach((el, i) => {
        if (typeof el === 'function') {
            try {
                const resolved = el();
                console.log(`  [${i}]: function -> `, resolved);
            } catch (e) {
                console.log(`  [${i}]: function -> ERROR:`, e.message);
            }
        } else {
            console.log(`  [${i}]:`, el);
        }
    });
}

// Also check if core.__ΩSerializableMethodsData is available at this point
console.log('\n=== core.__ΩSerializableMethodsData ===');
console.log('exists:', !!core.__ΩSerializableMethodsData);
console.log('value:', core.__ΩSerializableMethodsData);
