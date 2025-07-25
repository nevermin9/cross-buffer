<script setup lang="ts">
import { ref } from "vue";

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
        <div>
            <textarea
                v-model="entry"
                class="resize-vertical"
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
                Copy
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