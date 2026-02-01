// Minimal reproduction of the Bun CJS closure bug

// Create a simple module that exports a value
const fs = require('fs');
const path = require('path');
const os = require('os');

const tmpDir = os.tmpdir();
const testDir = path.join(tmpDir, 'bun-cjs-test-' + Date.now());
fs.mkdirSync(testDir, { recursive: true });

// Module A - exports a value
const moduleACode = `
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const __ΩTestType = ["TestType", "test-value"];
exports.__ΩTestType = __ΩTestType;
`;

// Module B - requires A and creates a closure referencing A's export
const moduleBCode = `
"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const moduleA = require("./moduleA.js");
const lazyRef = () => moduleA.__ΩTestType;
exports.lazyRef = lazyRef;
`;

fs.writeFileSync(path.join(testDir, 'moduleA.js'), moduleACode);
fs.writeFileSync(path.join(testDir, 'moduleB.js'), moduleBCode);

// Now test
const moduleB = require(path.join(testDir, 'moduleB.js'));
const moduleA = require(path.join(testDir, 'moduleA.js'));

console.log('Runtime:', typeof Bun !== 'undefined' ? 'Bun' : 'Node.js');
console.log('moduleA.__ΩTestType:', moduleA.__ΩTestType);
console.log('moduleB.lazyRef():', moduleB.lazyRef());
console.log('Are they equal?:', moduleA.__ΩTestType === moduleB.lazyRef());

// Cleanup
fs.rmSync(testDir, { recursive: true });
