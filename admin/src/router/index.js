import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import CategoryEdit from "../views/Category/CategoryEdit.vue";
import CategoryList from "../views/Category/CategoryList.vue";

import ItemEdit from "../views/Item/ItemEdit.vue";
import ItemList from "../views/Item/ItemList.vue";

import HeroEdit from "../views/Hero/HeroEdit.vue";
import HeroList from "../views/Hero/HeroList.vue";

import ArticleEdit from "../views/Article/ArticleEdit.vue";
import ArticleList from "../views/Article/ArticleList.vue";

import AdEdit from "../views/Ad/AdEdit.vue";
import AdList from "../views/Ad/AdList.vue";

import AdminUserEdit from "../views/AdminUser/AdminUserEdit.vue";
import AdminUserList from "../views/AdminUser/AdminUserList.vue";

import Login from "../views/Login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {path: "/categories/create", component: CategoryEdit},
      {path: "/categories/list", component: CategoryList},
      {path: "/categories/edit/:id", component: CategoryEdit, props: true},

      {path: "/items/create", component: ItemEdit},
      {path: "/items/list", component: ItemList},
      {path: "/items/edit/:id", component: ItemEdit, props: true},

      {path: "/heroes/create", component: HeroEdit},
      {path: "/heroes/list", component: HeroList},
      {path: "/heroes/edit/:id", component: HeroEdit, props: true},

      {path: "/articles/create", component: ArticleEdit},
      {path: "/articles/list", component: ArticleList},
      {path: "/articles/edit/:id", component: ArticleEdit, props: true},

      {path: "/ads/create", component: AdEdit},
      {path: "/ads/list", component: AdList},
      {path: "/ads/edit/:id", component: AdEdit, props: true},

      {path: "/admin_users/create", component: AdminUserEdit},
      {path: "/admin_users/list", component: AdminUserList},
      {path: "/admin_users/edit/:id", component: AdminUserEdit, props: true},
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {isPubilc: true},
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPubilc && !localStorage.token) {
    return next("/login");
  }
  next();
});
export default router;
