<script lang="ts">
import SharedComponent from 'src/SharedComponent.vue';
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';
import logSomething from 'src/otherScript';
import { withErrorHandling } from 'src/router/Router';

export default defineComponent({
    beforeRouteEnter: withErrorHandling(async (route: RouteLocation) => {
        logSomething();
    }),
});
</script>
<script lang="ts" setup>
</script>

<template>
    <h2>Other page</h2>

    <RouterLink v-slot="{ href }" :to="{ name: '/' }" custom>
        <a :href="href">
            Go to other main
        </a>
    </RouterLink>
    <br/>
    <SharedComponent />
</template>
