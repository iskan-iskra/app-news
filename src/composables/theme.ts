import { ThemeValue, themeStorageKey } from "@/const";
import { ThemeIcon } from "@/const/theme";
import { computed } from "vue";
import { useTheme } from "vuetify";
import { VIcon } from "vuetify/lib/components/index.mjs";

export default function () {
  const theme = useTheme();

  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark
      ? ThemeValue.LIGHT
      : ThemeValue.DARK;
    localStorage.setItem(themeStorageKey, theme.global.name.value);
  };

  const currentTheme = computed<ThemeValue>(() =>
    theme.global.current.value.dark ? ThemeValue.DARK : ThemeValue.LIGHT
  );

  const currentIcon = computed<VIcon["icon"]>(() =>
    theme.global.current.value.dark ? ThemeIcon.LIGHT : ThemeIcon.DARK
  );

  const initTheme = () => {
    theme.global.name.value =
      localStorage.getItem(themeStorageKey) || ThemeValue.LIGHT;
  };

  return {
    toggleTheme,
    currentTheme,
    currentIcon,
    initTheme,
  };
}
