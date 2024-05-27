export const themeStorageKey = "theme";

export enum ThemeValue {
  DARK = "dark",
  LIGHT = "light",
}

export enum ThemeName {
  DARK = "dark",
  LIGHT = "light",
}

export enum ThemeIcon {
  DARK = "mdi-weather-night",
  LIGHT = "mdi-white-balance-sunny",
}

export const listOfAvailableTheme: ThemeValue[] = [
  ThemeValue.DARK,
  ThemeValue.LIGHT,
];

export const defaultTheme: ThemeValue = ThemeValue.LIGHT;
