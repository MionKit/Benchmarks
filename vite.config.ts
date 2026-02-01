import { defineConfig } from "vite";
import { resolve } from "path";
import { readdirSync, statSync } from "fs";
import dts from "vite-plugin-dts";
import { deepkitType } from "@deepkit/vite";

// Get all TypeScript files from a directory (excluding spec/test files)
function getSourceFiles(dir: string, base = ""): Record<string, string> {
  const entries: Record<string, string> = {};
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = resolve(dir, file);
    const relativePath = base ? `${base}/${file}` : file;

    if (statSync(fullPath).isDirectory()) {
      Object.assign(entries, getSourceFiles(fullPath, relativePath));
    } else if (
      file.endsWith(".ts") &&
      !file.endsWith(".spec.ts") &&
      !file.endsWith(".test.ts")
    ) {
      const name = relativePath.replace(/\.ts$/, "");
      entries[name] = fullPath;
    }
  }

  return entries;
}

// Build entry points from apps/src
const srcEntries = getSourceFiles(resolve(__dirname, "apps/src"));
const entry: Record<string, string> = Object.fromEntries(
  Object.entries(srcEntries).map(([name, path]) => [`apps/src/${name}`, path]),
);

export default defineConfig({
  esbuild: {
    legalComments: "none",
    minifyIdentifiers: false,
    minifyWhitespace: false,
    minifySyntax: false,
  },
  plugins: [
    deepkitType({
      tsConfig: resolve(__dirname, "tsconfig.json"),
      compilerOptions: {
        sourceMap: true,
      },
    }),
    dts({
      outDir: "_compiled-apps",
      include: ["apps/src/**/*.ts"],
      exclude: ["**/*.spec.ts", "**/*.test.ts"],
      pathsToAliases: false,
    }),
  ],
  build: {
    lib: {
      entry,
      formats: ["cjs"],
    },
    outDir: "_compiled-apps",
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    rollupOptions: {
      output: {
        format: "cjs",
        dir: "_compiled-apps",
        entryFileNames: "[name].js",
        preserveModules: true,
        preserveModulesRoot: ".",
      },
      external: [/^[^./]/],
    },
  },
});
