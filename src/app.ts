import { type Component, createApp } from "vue";

import { DataLoaderPlugin } from "vue-router/auto";

import App from "./App.vue";
import router from "./router/Router";

// ! NOTE: vue-tsc can infer types of imported components but tsc cannot, so we need a type cast here
const app = createApp(App as Component);
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use(DataLoaderPlugin, { router });
app.use(router);

// Handle synchronous errors that originate from Vue components
app.config.errorHandler = (e: unknown) => {
    if (e instanceof Error) {
        const stack = e.stack ?? "";
        if(
            stack.includes("Failed to fetch dynamically imported module") || // Chrome
            e.message.includes("error loading dynamically imported module") || // Firefox
            e.message.includes("Importing a module script failed") // Safari
        ) {
            console.error("Dynamic import error", e);
        } else {
            console.error("Vue error", e);
        }
    }
};

// Handle errors that do not originate from Vue components and async errors
document.onerror = (message: unknown, _source?: string, _lineno?: number, _colno?: number, error?: unknown): boolean => {
    console.error("document.onerror", message, error)
    return true;
};
window.onerror = (message: unknown, _source?: string, _lineno?: number, _colno?: number, error?: unknown): boolean => {
    console.error("window.onerror", message, error);
    return true;
};
window.onunhandledrejection = (rejectedPromise: PromiseRejectionEvent) => {
    console.error("window.onunhandledrejection", rejectedPromise.reason);
    return true;
};

// Suppress vite preload errors, these are already handled by the global error handler
window.addEventListener("vite:preloadError", (event) => {
    event.preventDefault(); // ! Loaders error caused by this line
    event.stopImmediatePropagation();

    console.error("vite:preloadError", event);
});


app.mount("body");

export default app;
