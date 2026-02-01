const core = require('@mionkit/core');
const router = require('@mionkit/router');
console.log('Core module path:', require.resolve('@mionkit/core'));
console.log('Router module path:', require.resolve('@mionkit/router'));
console.log('__ΩSerializableMethodsData exists in core:', !!core.__ΩSerializableMethodsData);
