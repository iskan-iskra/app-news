import { TiNavigationListInitial } from "@/types";
import { RouterPath } from "./routes";

export const routesList: TiNavigationListInitial[] = [
  {
    title: "Main",
    icon: "mdi-home",
    path: RouterPath.MAIN,
  },
  {
    title: "News list",
    icon: "mdi-home",
    path: RouterPath.NEWS_LIST,
  },
  {
    title: "About us",
    icon: "mdi-home",
    path: RouterPath.ABOUT,
  },
];
