import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { useDemo } from "./DemoModal";

const Cta = () => {
  const { t } = useLanguage();
  const { openDemo } = useDemo();

  return (
    <section className="py-14 md:py-20 px-6 bg-primary">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">{t("cta.title")}</h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => openDemo()} className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-sm hover:opacity-90 transition-opacity">
              {t("nav.book")}
            </button>
            <button onClick={() => openDemo()} className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary-foreground/40 text-primary-foreground font-body font-bold text-lg rounded-sm hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              555-1234
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Cta;
