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
    <div class="flex flex-col rounded-xl bg-white dark:bg-black">
        <div class="flex-1">
            <textarea
                v-model="entry"
                class="w-full text-slate-950 disabled:text-slate-600 resize-vertical disabled:resize-none"
                :disabled="!isEditing"
            ></textarea>
        </div>

        <div class="text-slate-800">
            <button
                class="cursor-pointer"
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