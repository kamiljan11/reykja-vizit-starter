import { useState, useCallback, type ReactNode } from "react";
import translations, { type Lang, type TranslationKey } from "./translations";
import { LanguageContext } from "./useLang";

const STORAGE_KEY = "eldhusid-lang";

function getSavedLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "is" || saved === "en" || saved === "pl") return saved;
  } catch {
    /* localStorage niedostepny */
  }
  return "en";
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getSavedLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* localStorage niedostepny */
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      return translations[key]?.[lang] ?? key;
    },
    [lang],
  );

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};
