<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

type LinksList = Array<{ title: string, route: string | RouteLocationRaw }>

const props = defineProps<{
    links: LinksList
}>();
</script>

<template>
    <div>
        <slot name="anchor" />
    </div>

    <nav>
        <ul>
            <li v-for="link in props.links">
                <RouterLink :to="link.route">
                    {{ link.title }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>