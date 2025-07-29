import { type createApp } from "vue";
import UiIcon from "@/components/icons/UiIcon.vue";
import UiButton from "@/components/buttons/UiButton.vue";

export const registerGlobalComponents = (app: ReturnType<typeof createApp>) => {
    app.component("UiIcon", UiIcon);
    app.component("UiButton", UiButton);
};
