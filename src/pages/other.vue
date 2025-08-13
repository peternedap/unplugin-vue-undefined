<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocation } from 'vue-router';

export default defineComponent({
    beforeRouteEnter: async (route: RouteLocation) => {
        console.log('Entering other page route');
    },
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
</template>
