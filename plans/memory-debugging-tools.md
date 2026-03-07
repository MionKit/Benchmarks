# Memory Debugging Tools & Methods

## Tools Created

### 1. Runtime Memory Monitoring

Added diagnostic logging to both [`apps/src/mionAppNode.ts`](../apps/src/mionAppNode.ts) and [`apps/src/mionAppBun.ts`](../apps/src/mionAppBun.ts):

- Logs JIT cache size every 1000 requests
- Reports heap and RSS memory usage
- Tracks request count

**Usage:**

```bash
# Run with verbose output
BENCH_VERBOSE=true BENCH_SERVERS=mion npm run quick-bench-servers      # Node
BENCH_VERBOSE=true BENCH_SERVERS=mion.bun npm run quick-bench-servers  # Bun
```

### 2. Heap Snapshot Analysis

**Bun:** Uses `Bun.generateHeapSnapshot()` to create JSON snapshots.

**Node:** Can use `v8.writeHeapSnapshot()` or Chrome DevTools.

**Analysis Scripts:**

- [`scripts/analyze-heap.js`](../scripts/analyze-heap.js) - Analyzes a single Bun heap snapshot
- [`scripts/compare-heaps.js`](../scripts/compare-heaps.js) - Compares two snapshots (use with Bun for large files)

---

## Heap Snapshot Format

### Bun Format

Bun heap snapshots are JSON with a flat `nodes` array (5 fields per node):

```
[classNameIndex, labelIndex, ?, ?, size]
```

### Node Format

Node/V8 heap snapshots use Chrome DevTools format with separate `nodes`, `edges`, and `strings` arrays.

---

## Next Steps

### 1. Generate Comparable Heap Snapshots

**For Node:**

```typescript
// Add to mionAppNode.ts
import v8 from "v8";
v8.writeHeapSnapshot("node-heap-before.heapsnapshot");
// ... after requests ...
v8.writeHeapSnapshot("node-heap-after.heapsnapshot");
```

**For Bun:** Already implemented in mionAppBun.ts.

### 2. Compare Object Counts

Run both servers under identical load and compare:

- Total object count
- Object count by class name
- Memory per class

**Key classes to compare:**

- `NumberRunType`, `StringRunType`, `InterfaceRunType` (run-types)
- `JitFnCompiler`, `JitErrorsFnCompiler` (JIT compilation)
- `Function`, `Array`, `Object` (general allocations)

### 3. Identify Bun-Specific Allocations

Look for classes that appear in Bun but not Node, or have significantly higher counts:

- Bun internal classes
- JavaScriptCore-specific objects
- `@mionjs/bun` related objects

### 4. Profile GC Behavior

**Node:**

```bash
node --expose-gc --trace-gc benchmarks/mion.js
```

**Bun:**

```bash
bun --smol benchmarks/mion.bun.js  # Uses less memory
```

### 5. Investigate `@mionjs/bun` Package

Compare the HTTP server implementations:

- [`@mionjs/node`](../node_modules/@mionjs/node) (Node)
- [`@mionjs/bun`](../node_modules/@mionjs/bun) (Bun)

Look for:

- Request/response object retention
- Event listener accumulation
- Closure captures

---

## Quick Commands

```bash
# Build apps
npm run build

# Run Node benchmark with logging
BENCH_VERBOSE=true BENCH_SERVERS=mion npm run quick-bench-servers

# Run Bun benchmark with logging
BENCH_VERBOSE=true BENCH_SERVERS=mion.bun npm run quick-bench-servers

# Analyze Bun heap snapshot
node scripts/analyze-heap.js heap-snapshot-0.json

# Compare heap snapshots (use Bun for large files)
bun scripts/compare-heaps.js heap-before.json heap-after.json
```
