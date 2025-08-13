import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const Router = createRouter({
    history: createWebHistory("/"),
    routes,
});

Router.onError(error => {
    console.error("Router error", error);
});

export default Router;