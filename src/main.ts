import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/style.css";

import { vuetify } from "./plugins";

createApp(App).use(vuetify).use(store).use(router).mount("#app");
