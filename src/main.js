import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/index.css";
import antd from "./plugins/ant-design";

// import { Button } from "ant-design-vue";
// import "ant-design-vue/dist/antd.css"; //ant-design-vue/dist/antd.less

let app = createApp(App);
app.use(antd);
app.use(store).use(router).mount("#app");
