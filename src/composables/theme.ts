import {
  ThemeValue,
  themeStorageKey,
  defaultTheme,
  ThemeIcon,
  ThemeName,
  listOfAvailableTheme,
} from "@/const";
import { computed, ComputedRef } from "vue";
import { useTheme } from "vuetify";
import { VIcon } from "vuetify/lib/components/index.mjs";

interface IThemeHook {
  currentTheme: ComputedRef<ThemeName>;
  currentIcon: ComputedRef<VIcon["icon"]>;
  toggleTheme(): void;
  initTheme(): void;
}

export default function (): IThemeHook {
  const theme = useTheme();

  const __setTheme = (value: ThemeValue): void => {
    theme.global.name.value = value;
    localStorage.setItem(themeStorageKey, value);
  };

  const __generateThemeByString = (value: string | null): ThemeValue =>
    !!value && listOfAvailableTheme.includes(value as ThemeValue)
      ? (value as ThemeValue)
      : defaultTheme;

  const toggleTheme = (): void => {
    theme.global.current.value.dark
      ? __setTheme(ThemeValue.LIGHT)
      : __setTheme(ThemeValue.DARK);
  };

  const initTheme = (): void => {
    const themeInfoFromStorage = localStorage.getItem(themeStorageKey);
    const generatedTheme = __generateThemeByString(themeInfoFromStorage);
    __setTheme(generatedTheme);
  };

  const currentTheme = computed<ThemeName>(() =>
    theme.global.current.value.dark ? ThemeName.DARK : ThemeName.LIGHT
  );

  const currentIcon = computed<VIcon["icon"]>(() =>
    theme.global.current.value.dark ? ThemeIcon.LIGHT : ThemeIcon.DARK
  );

  return {
    currentTheme,
    currentIcon,
    toggleTheme,
    initTheme,
  };
}
