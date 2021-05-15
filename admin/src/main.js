import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import http from "./request/http.js";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import "../public/css/style.css";
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.use(ElementUI);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
