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

const save = () => {
    isEditing.value = false;
    console.log("save");

};


const BUTTONS = [
    { name: "pencil", class: "", onClick: () => isEditing.value = !isEditing.value },
    { name: "content-save-outline", class: "", onClick: () => save() },
    { name: "content-copy", class: "", onClick: () => copyToClipboard() },
] as const;
</script>

<template>
    <div class="flex flex-col rounded-xl bg-gray-200 dark:bg-gray-800">
        <div class="flex-1">
            <textarea
                v-model="entry"
                class="w-full px-4 py-2 text-lg disabled:text-slate-500 resize-vertical disabled:resize-none outline-0"
                :disabled="!isEditing"
            ></textarea>
        </div>

        <div class="flex items-center justify-between px-4 py-4 border-t-2 text-gray-400 dark:text-gray-500 border-gray-600">
            <div class="flex items-center gap-1">
                <UiButton
                    v-for="button in BUTTONS"
                    :key="button.name"
                    :icon-name="button.name"
                    :class="button.class"
                    @click="button.onClick"
                    disabled
                 />
            </div>

            <div>
                <UiButton
                    class="text-red-500"
                    icon-name="delete-empty-outline"
                    @click="() => deleteEntry()"
                />
            </div>
        </div>

    </div>
</template>