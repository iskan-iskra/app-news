import { RouterName, RouterPath } from "@/const";
import { ErrorPage, AboutPage, MainPage, NewsListPage } from "@/views";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: RouterName.MAIN,
    path: RouterPath.MAIN,
    meta: {
      title: "News - today",
    },
    component: MainPage,
  },
  {
    name: RouterName.NEWS_LIST,
    path: RouterPath.NEWS_LIST,
    meta: {
      title: "News - list",
    },
    component: NewsListPage,
  },
  {
    name: RouterName.ABOUT,
    path: RouterPath.ABOUT,
    meta: {
      title: "News - about us",
    },
    component: AboutPage,
  },
  {
    name: RouterName.ERROR,
    path: RouterPath.ERROR,
    meta: {
      title: "News - not found",
    },
    component: ErrorPage,
  },

  {
    path: "/:catchAll(.*)",
    redirect: (to) => ({ name: RouterName.ERROR }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
