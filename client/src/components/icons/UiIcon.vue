<script
    lang="ts"
    setup
>
interface IProps {
    iconName: string;
    size?: number | string;
    height?: number;
    svgAttrs?: Record<string, string>;
}

withDefaults(defineProps<IProps>(), {
    size: 24,
    svgAttrs: () => ({}),
    height: 0,
});
</script>

<template>
    <svg
        :class="`ui-icon ui-icon-${iconName}`"
        :style="`--width: ${size}px; --height: ${height || size}px;`"
        v-bind="svgAttrs"
    >
        <use :href="`#${iconName}`" />
    </svg>
</template>

<style>
.ui-icon {
    display: inline-block;
    width: var(--width);
    height: var(--height);
}

.ui-icon > * {
    fill: currentColor;
}
</style>
