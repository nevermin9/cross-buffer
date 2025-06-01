import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            formats: ["es"],
        },
    },
    resolve: {
        alias: {
            src: resolve(__dirname, "src"),
        },
    },
    plugins: [dts()],
});
