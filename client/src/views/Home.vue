<script setup lang="ts">
import { ref } from "vue";
import ClipboardEntry from "@/components/clipboard/ClipboardEntry.vue";
import UiButton from "@/components/buttons/UiButton.vue";

const userName = ref("John Doe");
const lastClipboardEntries = ref([
    {
        content: "Hello world!",
    },
    {
        content: "Chao, chao!",
    }
]);
</script>

<template>
    <section>
        <h2>
            Welcome {{ userName }}!
        </h2>

        <div class="flex flex-col items-center gap-2">
            <UiButton>
                Submit
            </UiButton>


            <UiButton
                class="text-red-500"
                icon-name="delete-empty-outline"
             />

            <UiButton
                icon-name="delete-empty-outline"
                variant="secondary"
            >
                Delete
            </UiButton>
        </div>

        <article>
            <h3>
                Last clipboard entries:
            </h3>

            <ul>
                <li
                    v-for="(entry, i) in lastClipboardEntries"
                    :key="Symbol(i)"
                >
                    <ClipboardEntry :content="entry.content" />
                </li>
            </ul>
        </article>
    </section>
</template>