import Vue from "vue";
import VueRouter from "vue-router";
import Main from "views/Main.vue";
import Home from "views/Home.vue";
import Competition from "views/Competition";
import Strategy from "views/Strategy";
import IPgame from "views/IPgame";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/", name: "competition", component: Competition },
      { path: "/", name: "strategy", component: Strategy },
      { path: "/", name: "IPgame", component: IPgame }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
