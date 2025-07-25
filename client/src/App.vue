<script setup lang="ts">
import { RouterView } from "vue-router";
import { useDarkTheme } from "@/composition/use-dark-theme";

const { init, toggleTheme } = useDarkTheme();
init();
</script>

<template>
    <header 
        class="flex justify-between items-center"
    >
        <nav>
            <ul class="flex gap-4">
                <li class="text-2xl font-bold">
                    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                </li>
            </ul>
        </nav>


            <button
                type="button"
                @click="() => toggleTheme()"
            >
                Toggle theme
            </button>
    </header>

    <main class="flex-auto">
        <RouterView />
    </main>
</template>