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

console.log('Runtime:', typeof Bun !== 'undefined' ? 'Bun' : 'Node.js');
console.log('coreDirectly.__ΩSerializableMethodsData exists:', !!coreDirectly.__ΩSerializableMethodsData);
console.log('lazyRef():', lazyRef());
console.log('lazyRef() === undefined:', lazyRef() === undefined);
