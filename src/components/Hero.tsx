import heroImage from "@/assets/hero-food.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Icelandic restaurant table with lamb, fish and candles"
        className="absolute inset-0 w-full h-full object-cover object-center"
        width={1080}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-3 md:mb-4 animate-fade-up">
          {t("hero.tagline")}
        </p>
        <h1 className="font-heading text-4xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 md:mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          {t("hero.title")}
        </h1>
        <p className="font-body text-base md:text-xl text-primary-foreground/90 mb-8 md:mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a href="#matseðill" className="px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-sm hover:opacity-90 transition-opacity">
            {t("hero.cta.menu")}
          </a>
          <a href="#borda" className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors">
            {t("hero.cta.book")}
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground/60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
