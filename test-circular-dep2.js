// Check if there's a circular dependency between core and router

const path = require('path');

// Trace module loading
const originalLoad = require('extensions')['.js'];
const loadOrder = [];

require.extensions['.js'] = function(module, filename) {
    if (filename.includes('@mionkit')) {
        const shortName = filename.replace(/.*@mionkit\//, '@mionkit/');
        loadOrder.push(shortName);
    }
    return originalLoad(module, filename);
};

// Now load router
console.log('Loading @mionkit/router...\n');
const router = require('@mionkit/router');

console.log('=== Module load order ===');
loadOrder.forEach((m, i) => console.log(`${i + 1}. ${m}`));

// Check the lazy reference
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');
const clientRoutes = require(clientRoutesPath);

const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('\n=== Lazy reference check ===');
console.log('lazyRef():', lazyRef());
