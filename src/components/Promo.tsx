import { Globe, Camera, BarChart3, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CrossHatchBackground } from "./Decorations";

const Promo = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Globe, label: t("promo.f1") },
    { icon: Camera, label: t("promo.f2") },
    { icon: BarChart3, label: t("promo.f3") },
    { icon: Zap, label: t("promo.f4") },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-foreground relative overflow-hidden">
      <CrossHatchBackground className="text-background" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-accent mb-6">
          {t("promo.tag")}
        </p>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-background mb-2 md:mb-3">
          {t("promo.title1")}
        </h2>
        <h2 className="font-heading text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold italic text-accent mb-6 md:mb-8">
          {t("promo.title2")}
        </h2>
        <p className="font-body text-background/60 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("promo.desc")}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-14">
          {features.map((f) => (
            <div key={f.label} className="flex items-center gap-2 text-background/70">
              <f.icon size={18} className="text-accent/80" />
              <span className="font-body text-sm">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-accent text-accent-foreground font-body font-bold text-sm tracking-[0.15em] uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            {t("promo.cta")}
            <ArrowRight size={18} />
          </a>
          <span className="font-body text-background/50 text-sm">
            {t("promo.price")}
          </span>
        </div>

        <p className="font-body text-xs text-background/30 mt-8">
          ⚡ {t("promo.perks")}
        </p>
      </div>
    </section>
  );
};

export default Promo;
