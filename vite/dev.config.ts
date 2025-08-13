import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    mode: "production",
    plugins: [
        tsconfigPaths(),
        VueRouter({ }),
        vue(),
    ],
    build: {
        target: "esnext",
        sourcemap: true,
    },
    server: {
        port: 3000,
        strictPort: true,
    },
});
