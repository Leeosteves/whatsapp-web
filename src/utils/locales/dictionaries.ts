import { TDictionary } from "~/@types/dictionary";

const dictionaries: Record<
  "en" | "pt" | "es" | "ar",
  () => Promise<TDictionary>
> = {
  en: () => import("./lang/en.json").then((m) => m.default),
  pt: () => import("./lang/pt.json").then((m) => m.default),
  es: () => import("./lang/es.json").then((m) => m.default),
  ar: () => import("./lang/ar.json").then((m) => m.default),
};

export const getDictionary = async (
  locale: keyof typeof dictionaries
): Promise<TDictionary> => {
  return dictionaries[locale]();
};
