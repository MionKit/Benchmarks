import * as core from '@mionkit/core';
import * as router from '@mionkit/router';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);

// Get the core module that client.routes.js captured
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');

// Load client.routes
const clientRoutes = require(clientRoutesPath);

// Get the lazy reference
const methodsMetadataById = clientRoutes.mionClientRoutes['mion@methodsMetadataById'];
const typeArr = methodsMetadataById.handler.__type;
const lazyRef = typeArr[3];

console.log('Runtime:', typeof Bun !== 'undefined' ? 'Bun' : 'Node.js');
console.log('core.__ΩSerializableMethodsData exists:', !!core.__ΩSerializableMethodsData);
console.log('lazyRef():', lazyRef());
console.log('lazyRef() === undefined:', lazyRef() === undefined);
