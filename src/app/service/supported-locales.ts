export const supportedLocales = [
  'en',
  'fa',
] as const;

export type Locale = typeof supportedLocales[number];
