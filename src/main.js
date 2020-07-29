import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.scss";
import "normalize.css/normalize.css";

createApp(App).use(router).mount("#app");
