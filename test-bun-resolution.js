const path = require('path');

// Check what Bun resolves @mionkit/core to
console.log('=== Module resolution ===');
console.log('Core resolved to:', require.resolve('@mionkit/core'));
console.log('Router resolved to:', require.resolve('@mionkit/router'));

// Load the modules
const core = require('@mionkit/core');
const router = require('@mionkit/router');

// Check the module's internal state
console.log('\n=== Core module ===');
console.log('typeof core:', typeof core);
console.log('core keys count:', Object.keys(core).length);
console.log('core.__ΩSerializableMethodsData:', core.__ΩSerializableMethodsData);

// Now let's trace what happens when client.routes.js loads
console.log('\n=== Tracing client.routes.js ===');

// Get the client.routes module
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');

// Read the file and check what core it's using
const fs = require('fs');
const clientRoutesContent = fs.readFileSync(clientRoutesPath, 'utf8');

// Find the line that defines the lazy reference
const lines = clientRoutesContent.split('\n');
const lazyRefLine = lines.find(l => l.includes('__ΩSerializableMethodsData'));
console.log('Lazy ref line:', lazyRefLine);

// Now let's check if the issue is with how Bun handles the closure
// by creating a test that mimics what client.routes.js does
console.log('\n=== Mimicking client.routes.js behavior ===');

// This is what client.routes.js does:
const coreFromClientRoutes = require('@mionkit/core');
const lazyRefMimic = () => coreFromClientRoutes.__ΩSerializableMethodsData;

console.log('coreFromClientRoutes === core:', coreFromClientRoutes === core);
console.log('lazyRefMimic():', lazyRefMimic());
