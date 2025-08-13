<script setup lang="ts">
import SharedComponent from 'src/SharedComponent.vue';

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
