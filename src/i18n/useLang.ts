// Kontekst i hook jezyka — poza plikiem komponentu (react-refresh).
import { createContext, useContext } from "react";
import { type Lang, type TranslationKey } from "./translations";

export type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
