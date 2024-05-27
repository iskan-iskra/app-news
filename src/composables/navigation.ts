import router from "@/router";
import { RouterPath, routesList } from "@/const";
import { computed, ComputedRef } from "vue";
import { TiNavigationList } from "@/types";

interface INavigationHook {
  currentRoutePath: ComputedRef<string>;
  routerArray: ComputedRef<TiNavigationList[]>;
}

export default function (): INavigationHook {
  const __currentRoutePathCompare = (path: RouterPath): boolean =>
    currentRoutePath.value === path;

  const __routerClick = (value: RouterPath): void => {
    router.push({ path: value });
  };

  const currentRoutePath = computed<string>(
    () => router.currentRoute.value.path
  );

  const routerArray = computed<TiNavigationList[]>(() =>
    routesList.map((el) => ({
      ...el,
      active: __currentRoutePathCompare(el.path),
      action() {
        __routerClick(el.path);
      },
    }))
  );

  return {
    currentRoutePath,
    routerArray,
  };
}
