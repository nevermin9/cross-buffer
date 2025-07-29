<script setup lang="ts">
import { useDarkTheme, DARK_THEME_KEY } from "@/composition/use-dark-theme";

const { init, toggleTheme, currentTheme } = useDarkTheme();
init();
</script>

<template>
    <header 
        class="flex justify-between items-center"
    >
        <nav>
            <ul class="flex gap-4">
                <li class="text-2xl font-bold">
                    <RouterLink :to="{ name: 'home' }">to home</RouterLink>
                </li>
            </ul>
        </nav>

        <div>
            <Transition
                name="jump-up" mode="out-in"
            >
                <UiButton
                    v-if="currentTheme === DARK_THEME_KEY"
                    key="light-theme"
                    icon-name="white-balance-sunny"
                    icon-size="36"
                    @click="() => toggleTheme()"
                />
        
                <UiButton
                    v-else
                    key="dark-theme"
                    icon-name="weather-night"
                    icon-size="36"
                    @click="() => toggleTheme()"
                />
            </Transition>
        </div>
    </header>
</template>