<script setup lang="ts">
import { ref } from "vue";

const userName = ref("John Doe");
const lastClipboardEntries = ref([
    "Entry 1",
    "Entry 2",
    "Entry 3",
]);
</script>

<template>
    <section>
        <h2>
            Welcome {{ userName }}!
        </h2>

        <article>
            <h3>
                Last clipboard entries:
            </h3>

            <ul>
                <li v-for="entry in lastClipboardEntries">
                    {{ entry }}
                </li>
            </ul>
        </article>
    </section>
</template>