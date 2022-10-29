import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

export default defineNuxtPlugin((app) => {
  app.vueApp.use(Antd);
});
