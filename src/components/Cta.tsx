import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Cta = () => {
  const { t } = useLanguage();

  return (
    <section className="py-14 md:py-20 px-6 bg-primary">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">{t("cta.title")}</h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <a href="#boka" className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-sm hover:opacity-90 transition-opacity">
            {t("cta.button")}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Cta;
