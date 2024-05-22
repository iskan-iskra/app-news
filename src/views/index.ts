export { default as ErrorPage } from "./ErrorPage.vue";
export { default as MainPage } from "./MainPage.vue";
export const AboutPage = () =>
  import(/* webpackChunkName: "ABOUT_CHANK" */ "./AboutPage.vue");
export const NewsListPage = () =>
  import(/* webpackChunkName: "LIST_CHANK" */ "./NewsListPage.vue");
