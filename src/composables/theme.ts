import { ThemeValue, themeStorageKey, defaultTheme } from "@/const";
import { listOfAvailableTheme, ThemeIcon } from "@/const/theme";
import { computed, ComputedRef } from "vue";
import { useTheme } from "vuetify";
import { VIcon } from "vuetify/lib/components/index.mjs";

interface IThemeHook {
  currentTheme: ComputedRef<ThemeValue>;
  currentIcon: ComputedRef<VIcon["icon"] | undefined>;
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

  const currentTheme = computed<ThemeValue>(() =>
    theme.global.current.value.dark ? ThemeValue.DARK : ThemeValue.LIGHT
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
