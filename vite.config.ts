import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import { defineConfig } from "vite";

export default defineConfig({
    mode: "production",
    plugins: [
        VueRouter({ }),
        vue(),
    ],
});
