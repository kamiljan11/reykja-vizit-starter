import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-background/80">
        <div>
          <h3 className="font-heading text-2xl font-bold text-background mb-3">Eldhúsið</h3>
          <p className="font-body text-sm leading-relaxed">{t("footer.desc")}</p>
          <a href="https://www.instagram.com/eldhusid_reykjavik" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-background/70 hover:text-accent transition-colors">
            <Instagram size={20} />
            <span className="font-body text-sm">@eldhusid_reykjavik</span>
          </a>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-3">{t("footer.contact")}</h4>
          <div className="font-body text-sm space-y-1">
            <p>Laugavegur 42, 101 Reykjavík</p>
            <p>{t("hours.phone")}</p>
            <p>eldhusid@eldhusid.is</p>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-3">{t("footer.openingHours")}</h4>
          <div className="font-body text-sm space-y-1">
            <p>{t("hours.h1")}</p>
            <p>{t("hours.h2")}</p>
            <p>{t("footer.sun")}</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-background/20">
        <p className="font-body text-xs text-background/50 text-center">
          © 2025 Eldhúsið. {t("footer.rights")} — Vefsíða hönnuð af{" "}
          <span className="text-accent font-semibold">YourStudio</span> · frá 19.900 kr.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
