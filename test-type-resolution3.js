const core = require('@mionkit/core');
const path = require('path');

// Get the actual path to the router module
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);

// Load client.routes from the correct path
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

console.log('=== Exports from client.routes.js ===');
console.log('Keys:', Object.keys(clientRoutes));

// Check mionClientRoutes
console.log('\n=== mionClientRoutes ===');
console.log('mionClientRoutes:', clientRoutes.mionClientRoutes);

// Check if the function is inside mionClientRoutes
if (clientRoutes.mionClientRoutes) {
    const mion = clientRoutes.mionClientRoutes.mion;
    console.log('\nmion:', mion);
    if (mion) {
        console.log('\nmion keys:', Object.keys(mion));
        const methodsMetadataById = mion.methodsMetadataById;
        console.log('\nmethodsMetadataById:', methodsMetadataById);
        if (methodsMetadataById && methodsMetadataById.handler) {
            console.log('\nhandler:', methodsMetadataById.handler);
            console.log('handler.__type:', methodsMetadataById.handler.__type);
        }
    }
}
