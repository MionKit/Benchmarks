const { importModule } = require('@mionkit/core');

console.log('=== Testing importModule in Bun ===');
console.log('Runtime:', typeof Bun !== 'undefined' ? 'Bun' : 'Node.js');

// Check if require and module are defined
console.log('typeof require:', typeof require);
console.log('typeof module:', typeof module);

// Check the isCJS detection
const isCJS = typeof require !== "undefined" && typeof module !== "undefined" && typeof require === "function";
console.log('isCJS:', isCJS);

// Test importing @mionkit/run-types
async function test() {
    console.log('\n=== Importing @mionkit/run-types ===');
    const runTypes = await importModule('@mionkit/run-types');
    console.log('runTypes loaded:', !!runTypes);
    console.log('runTypes keys:', Object.keys(runTypes).slice(0, 10));
    
    // Check if the module has the expected exports
    console.log('runTypes.reflectFunction:', typeof runTypes.reflectFunction);
    console.log('runTypes.runType:', typeof runTypes.runType);
}

test().catch(console.error);
