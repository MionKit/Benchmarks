// Check the dependency chain between core and router

const path = require('path');

// Check what core/index.js imports
const corePath = require.resolve('@mionkit/core');
const coreDir = path.dirname(corePath);
console.log('Core path:', corePath);

// Read the core index.js to see what it exports
const fs = require('fs');
const coreIndex = fs.readFileSync(corePath, 'utf8');
console.log('\n=== Core index.js (first 50 lines) ===');
console.log(coreIndex.split('\n').slice(0, 50).join('\n'));

// Check where __ΩSerializableMethodsData is defined
console.log('\n=== Searching for __ΩSerializableMethodsData definition ===');
const coreFiles = fs.readdirSync(path.join(coreDir, 'src'), { recursive: true });
for (const file of coreFiles) {
    if (file.endsWith('.js')) {
        const filePath = path.join(coreDir, 'src', file);
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('__ΩSerializableMethodsData')) {
            console.log(`Found in: ${file}`);
            // Show the line
            const lines = content.split('\n');
            lines.forEach((line, i) => {
                if (line.includes('__ΩSerializableMethodsData')) {
                    console.log(`  Line ${i + 1}: ${line.substring(0, 100)}...`);
                }
            });
        }
    }
}
