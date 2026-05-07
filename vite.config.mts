import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { mionVitePlugin } from "@mionjs/devtools/vite-plugin";

// Only mion apps are built with vite (other frameworks use their own build)
const entry: Record<string, string> = {
  "apps/src/mionAppNode": resolve(
    import.meta.dirname!,
    "apps/src/mionAppNode.ts",
  ),
  "apps/src/mionAppBun": resolve(
    import.meta.dirname!,
    "apps/src/mionAppBun.ts",
  ),
};

export default defineConfig({
  esbuild: {
    legalComments: "none",
    minifyIdentifiers: false,
    minifyWhitespace: false,
    minifySyntax: false,
  },
  plugins: [
    mionVitePlugin({
      runTypes: {
        tsConfig: resolve(import.meta.dirname!, "tsconfig.json"),
        compilerOptions: { sourceMap: true },
      },
      aotCaches: true,
      server: {
        startScript: resolve(import.meta.dirname!, "apps/src/mionAotStart.ts"),
        viteConfig: resolve(import.meta.dirname!, "vite.config.mts"),
        runMode: "buildOnly",
      },
    }) as any,
    dts({
      outDir: "_compiled-apps",
      include: ["apps/src/mion*.ts", "apps/src/models.ts"],
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
      },
    },
  },
});
