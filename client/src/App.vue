<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/navigation/TheHeader.vue";
</script>

<template>
    <TheHeader />

    <main class="flex-auto">
        <RouterView />
    </main>
</template>