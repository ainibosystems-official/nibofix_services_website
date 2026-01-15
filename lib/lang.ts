export const LANGS = ["en", "bg", "ua"] as const;
export type Lang = (typeof LANGS)[number];

export function normalizeLang(lang?: string): Lang {
  if (LANGS.includes(lang as Lang)) {
    return lang as Lang;
  }
  return "en";
}
