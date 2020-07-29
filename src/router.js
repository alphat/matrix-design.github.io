import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Component from "./views/Component.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/uni",
      component: Component,
    },
  ],
});

export default router;
