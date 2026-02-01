const core = require('@mionkit/core');
console.log('Core module path:', require.resolve('@mionkit/core'));
console.log('__ΩSerializableMethodsData exists:', !!core.__ΩSerializableMethodsData);
console.log('__ΩSerializableMethodsData value:', core.__ΩSerializableMethodsData);
