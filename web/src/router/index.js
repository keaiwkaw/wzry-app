import Vue from "vue";
import VueRouter from "vue-router";
import Main from "views/Main.vue";
import Home from "views/Home";
import ArtDetil from "views/ArticleDetail";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      { path: "/", name: "home", component: Home },
      { path: "/articles/:id", name: "artDetil", component: ArtDetil, props: true }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
