import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Component from "./views/Component.vue";
import Document from "./views/Document.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/design/base",
      component: Document,
    },
    {
      path: "/component/uni",
      component: Component,
    },
    {
      path: "/component/rn",
      component: Component,
    },
    {
      path: "/component/pc",
      component: Component,
    },
    {
      path: "/develop/changelog",
      component: Document,
    },
  ],
});

export default router;
