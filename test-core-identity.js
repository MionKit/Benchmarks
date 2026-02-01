const path = require('path');
const fs = require('fs');

// Read the client.routes.js file
const routerPath = require.resolve('@mionkit/router');
const routerDir = path.dirname(routerPath);
const clientRoutesPath = path.join(routerDir, 'src/routes/client.routes.js');

// Patch the file to expose the core object
const originalContent = fs.readFileSync(clientRoutesPath, 'utf8');

// Add a line to export the core object
const patchedContent = originalContent.replace(
    'exports.mionClientRoutes = mionClientRoutes;',
    'exports.mionClientRoutes = mionClientRoutes;\nexports._internalCore = core;'
);

// Write the patched file
fs.writeFileSync(clientRoutesPath, patchedContent);

try {
    // Clear require cache
    delete require.cache[clientRoutesPath];
    
    // Load the patched module
    const clientRoutes = require(clientRoutesPath);
    const core = require('@mionkit/core');
    
    console.log('=== Comparing core objects ===');
    console.log('core === clientRoutes._internalCore:', core === clientRoutes._internalCore);
    console.log('core.__ΩSerializableMethodsData:', !!core.__ΩSerializableMethodsData);
    console.log('clientRoutes._internalCore.__ΩSerializableMethodsData:', !!clientRoutes._internalCore.__ΩSerializableMethodsData);
    
    // Check all keys
    console.log('\n=== Keys comparison ===');
    const coreKeys = Object.keys(core);
    const internalCoreKeys = Object.keys(clientRoutes._internalCore);
    console.log('core keys count:', coreKeys.length);
    console.log('_internalCore keys count:', internalCoreKeys.length);
    
    // Find keys that are in core but not in _internalCore
    const missingKeys = coreKeys.filter(k => !internalCoreKeys.includes(k));
    console.log('\nKeys in core but not in _internalCore:', missingKeys.slice(0, 20));
    
} finally {
    // Restore the original file
    fs.writeFileSync(clientRoutesPath, originalContent);
}
