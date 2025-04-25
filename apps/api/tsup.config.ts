import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"], // Use ESM since Bun thrives on that
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: false, // You can enable this if you want types output
});
