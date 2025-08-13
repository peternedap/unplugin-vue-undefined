<script setup lang="ts">
</script>

<template>
    <h2>Main page</h2>

    <RouterLink v-slot="{ href }" :to="{ name: '/other' }" custom>
        <a :href="href">
            Go to other page
        </a>
    </RouterLink>
</template>
