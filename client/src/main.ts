import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { registerGlobalComponents } from "./global-components";

const app = createApp(App);
registerGlobalComponents(app);
app.use(router);

router.isReady().then(() => app.mount("#app"));
