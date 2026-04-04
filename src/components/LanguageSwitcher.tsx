import { useLanguage } from "@/i18n/LanguageContext";
import { Lang, langLabels } from "@/i18n/translations";

const langs: Lang[] = ["en", "is", "pl"];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-body text-xs">
      {langs.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="text-muted-foreground/40 mx-1">|</span>}
          <button
            onClick={() => setLang(l)}
            className={`px-1 py-0.5 rounded transition-colors ${
              lang === l
                ? "text-accent font-bold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {langLabels[l]}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
