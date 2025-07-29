<script setup lang="ts">
import { ref } from "vue";
import UiIcon from "../icons/UiIcon.vue";

const props = defineProps<{
    content: string
}>();

const entry = ref(props.content);
const isNew = ref(props.content === "");
const isEditing = ref(!isNew);

const copyToClipboard = () => {
    console.log("copy to clipboard");
};
const deleteEntry = () => {
    console.log("delete entry");
};
</script>

<template>
    <div class="flex flex-col">
        <div class="flex-1">
            <textarea
                v-model="entry"
                class="w-full bg-white dark:bg-black text-slate-950 disabled:text-slate-600 resize-vertical disabled:resize-none"
                :disabled="!isEditing"
            ></textarea>
        </div>

        <div>
            <button
                type="button"
                @click="isEditing = !isEditing"
            >
                {{ isEditing ? "Save" : "Edit" }}
            </button>

            <button
                type="button"
                @click="() => copyToClipboard()"
            >
                <UiIcon icon-name="content-copy" />
            </button>

            <button
                type="button"
                @click="() => deleteEntry()"
            >
                Delete
            </button>
        </div>
    </div>
</template>