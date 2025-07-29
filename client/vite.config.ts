import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import injectHTML from "vite-plugin-html-inject";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), tailwindcss(), injectHTML()],
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
