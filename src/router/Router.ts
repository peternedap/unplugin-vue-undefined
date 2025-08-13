import { ref } from "vue";
import { createRouter, createWebHistory, NavigationFailure } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const loadingRoute = ref(false);

const Router = createRouter({
    history: createWebHistory("/"),
    routes,
});

Router.beforeEach((async (to, from) => {
    if(to.fullPath !== from.fullPath) {
        // Show spinner while loading the page
        loadingRoute.value = true;
    }
}));
Router.onError(error => {
    loadingRoute.value = false;
    console.error("Router error", error);
});

Router.afterEach(() => {
    loadingRoute.value = false;
});
type Guard<TO, FROM, NEXT extends Function> = (to: TO, from: FROM, next: NEXT) => Promise<void | NavigationFailure>;

export function withErrorHandling<TO, FROM, NEXT extends Function>(hook: Guard<TO, FROM, NEXT>): Guard<TO, FROM, NEXT> {
    return async (to, from, next) => {
        try {
            await hook(to, from, next);
        } catch (error) {
            console.error("Router guard error", error);
        } finally {
            next();
        }
    };
}
export default Router;
