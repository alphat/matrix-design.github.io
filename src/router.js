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
      meta: {
        title: "首页",
      },
      component: Home,
    },
    {
      path: "/design",
      meta: {
        title: "设计语言",
      },
      component: Document,
      redirect: "/design/base",
      children: [
        {
          path: "/design",
          meta: {
            title: "视觉设计",
          },
          component: Document,
          redirect: "/design/base",
          children: [
            {
              path: "/design/base",
              meta: {
                title: "基本规范",
              },
              component: Document,
            },
            {
              path: "/design/icon",
              meta: {
                title: "图标",
              },
              component: Document,
            },
            {
              path: "/design/default",
              meta: {
                title: "缺省页",
              },
              component: Document,
            },
          ],
        },
        {
          path: "/design",
          meta: {
            title: "交互设计",
          },
          component: Document,
          redirect: "/design/base",
          children: [
            {
              path: "/design/navigation",
              meta: {
                title: "导航",
              },
              component: Document,
            },
            {
              path: "/design/input",
              meta: {
                title: "信息输入",
              },
              component: Document,
            },
            {
              path: "/design/display",
              meta: {
                title: "信息展示",
              },
              component: Document,
            },
            {
              path: "/design/feedback",
              meta: {
                title: "提示反馈",
              },
              component: Document,
            },
          ],
        },
      ],
    },
    {
      path: "/develop",
      meta: {
        title: "开发文档",
      },
      component: Document,
      redirect: "/develop/code",
      children: [
        {
          path: "/develop",
          meta: {
            title: "开发规范",
          },
          component: Document,
          redirect: "/develop/code",
          children: [
            {
              path: "/develop/code",
              meta: {
                title: "代码规范",
              },
              component: Document,
            },
            {
              path: "/develop/prettier",
              meta: {
                title: "Prettier 配置",
              },
              component: Document,
            },
            {
              path: "/develop/commit",
              meta: {
                title: "Git Commit 规范",
              },
              component: Document,
            },
          ],
        },
        {
          path: "/develop",
          meta: {
            title: "开发指南",
          },
          component: Document,
          redirect: "/develop/code",
          children: [
            {
              path: "/develop/changelog",
              meta: {
                title: "更新日志",
              },
              component: Document,
            },
          ],
        },
      ],
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
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
