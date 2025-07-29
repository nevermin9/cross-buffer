<script
    setup
    lang="ts"
>
import { computed } from "vue";
import { RouterLink, type RouteLocationRaw } from "vue-router";

type IProps = {
    iconName?: string;
    iconSize?: number | string;
    iconHeight?: number;
    // fluid?: boolean;
    variant?: "main" | "secondary";
    colors?: "default" | "green" | "red";
    // large?: boolean;
    // small?: boolean;
    // xLarge?: boolean;
    // xSmall?: boolean;
    loading?: boolean;
    to?: RouteLocationRaw;
    // fillSpace?: boolean;
    // rounded?: boolean;
};

// style - default, green, red, 
// type - main | secondary
const props = withDefaults(defineProps<IProps>(), {
    iconName: "",
    // bgColor: "bg-neutral-200 dark:bg-neutral-800",
    variant: "main",
    colors: "default",
    to: "",
    iconSize: 24,
    iconHeight: 0,
    fluid: false,
    rounded: false,
    loading: false,
});

const BUTTON_COLORS = {
    main: {
        default: "bg-violet-500 hover:bg-violet-600 text-white focus:outline-2 focus:outline-violet-500 focus:outline-offset-2 active:bg-violet-700",
        green: "bg-green-200 dark:bg-green-800",
        red: "bg-red-200 dark:bg-red-800",
    },
    secondary: {
        default: "border-violet-500 text-violet-500 hover:border-violet-600 hover:text-white active:border-violet-700",
        green: "border-green-200 dark:border-green-800",
        red: "border-red-200 dark:border-red-800",
    }
} as const;

const Component = computed(() => {
    return props.to ? RouterLink : "button";
});
</script>

<template>
    <component
        :is="Component"
        :to="props.to || null"
        :class="{
            'relative inline-flex items-center justify-center grow-0 shrink-0 basis-auto cursor-pointer': true,
            'px-4 py-2 rounded-sm uppercase font-bold': Boolean($slots.default),
            [`${BUTTON_COLORS[props.variant][props.colors]}`]: Boolean($slots.default),
            'border-2': props.variant === 'secondary',
        }"
    >
        <span class="inline-flex items-center gap-1">
            <UiIcon
                v-if="iconName"
                class="align-middle"
                :icon-name="iconName"
                :size="iconSize"
                :height="iconHeight"
            />

            <span
                v-if="$slots.default"
                class="ui-button__text"
            >
                <slot />
            </span>
        </span>
    </component>
</template>
