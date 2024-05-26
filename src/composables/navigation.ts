import router from "@/router";
import { RouterPath, routesList } from "@/const";
import { computed } from "vue";
import { TiNavigationList } from "@/types";

export default function () {
  const currentRoutePathCompare = (path: RouterPath): boolean =>
    currentRoutePath.value === path;

  const routerClick = (value: RouterPath) => {
    router.push({ path: value });
  };
  const currentRoutePath = computed<string>(
    () => router.currentRoute.value.path
  );

  const routerArray = computed<TiNavigationList[]>(() =>
    routesList.map((el) => ({
      ...el,
      active: currentRoutePathCompare(el.path),
      action() {
        routerClick(el.path);
      },
    }))
  );

  return {
    currentRoutePath,
    routerArray,
  };
}
