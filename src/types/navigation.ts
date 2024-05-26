import { RouterPath } from "@/const";
import { VIcon } from "vuetify/lib/components/index.mjs";

export type TiNavigationListInitial = {
  title: string;
  icon: VIcon["icon"];
  path: RouterPath;
};

export type TiNavigationList = TiNavigationListInitial & {
  active: boolean;
  action(): void;
};
