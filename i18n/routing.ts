export const locales = ["en", "ru", "kg"] as const;

export const routing = {
  locales,
  defaultLocale: "en",
} as const;

export type Locale = (typeof locales)[number];
