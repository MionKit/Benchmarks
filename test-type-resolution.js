const core = require('@mionkit/core');

// Check the type metadata directly
console.log('=== Checking __ΩSerializableMethodsData ===');
console.log('Type:', typeof core.__ΩSerializableMethodsData);
console.log('Value:', core.__ΩSerializableMethodsData);

// Check if it's an array with the expected structure
if (Array.isArray(core.__ΩSerializableMethodsData)) {
    console.log('\nArray length:', core.__ΩSerializableMethodsData.length);
    console.log('Elements:');
    core.__ΩSerializableMethodsData.forEach((el, i) => {
        if (typeof el === 'function') {
            console.log(`  [${i}]: function -> `, el());
        } else {
            console.log(`  [${i}]:`, el);
        }
    });
}

// Now let's check the client.routes.js type metadata
console.log('\n=== Checking client.routes type metadata ===');
const clientRoutes = require('@mionkit/router/.dist/cjs/src/routes/client.routes.js');
console.log('mionGetRemoteMethodsDataById.__type:', clientRoutes.mionGetRemoteMethodsDataById.__type);

// Check if the lazy reference resolves correctly
if (clientRoutes.mionGetRemoteMethodsDataById.__type) {
    const typeArr = clientRoutes.mionGetRemoteMethodsDataById.__type;
    console.log('\nResolving lazy references:');
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
