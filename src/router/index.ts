import { RouterName, RouterPath } from "@/const";
import { ErrorPage, AboutPage, MainPage, NewsListPage } from "@/views";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const mainTitlePart = "News";

const routes: Array<RouteRecordRaw> = [
  {
    name: RouterName.MAIN,
    path: RouterPath.MAIN,
    meta: {
      title: `${mainTitlePart} - today`,
    },
    component: MainPage,
  },
  {
    name: RouterName.NEWS_LIST,
    path: RouterPath.NEWS_LIST,
    meta: {
      title: `${mainTitlePart} - list`,
    },
    component: NewsListPage,
  },
  {
    name: RouterName.ABOUT,
    path: RouterPath.ABOUT,
    meta: {
      title: `${mainTitlePart} - about us`,
    },
    component: AboutPage,
  },
  {
    name: RouterName.ERROR,
    path: RouterPath.ERROR,
    meta: {
      title: `${mainTitlePart} - not found`,
    },
    component: ErrorPage,
  },

  {
    path: "/:catchAll(.*)",
    redirect: () => ({ name: RouterName.ERROR }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const metaTitle = to.meta.title as string;

  document.title =
    typeof metaTitle === "string" && metaTitle
      ? metaTitle
      : `${mainTitlePart} - app`;

  next();
});

export default router;
