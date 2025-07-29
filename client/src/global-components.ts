import { type createApp } from "vue";
import UiIcon from "@/components/icons/UiIcon.vue";

export const registerGlobalComponents = (app: ReturnType<typeof createApp>) => {
    app.component("UiIcon", UiIcon);
};
