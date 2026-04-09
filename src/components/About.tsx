import interiorImage from "@/assets/interior.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="um-okkur" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold">{t("about.label")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t("about.title")}</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">{t("about.p1")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">{t("about.p2")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex gap-8 md:gap-12 pt-4">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">7+</p>
                <p className="font-body text-sm text-muted-foreground">{t("about.stat.years")}</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">100%</p>
                <p className="font-body text-sm text-muted-foreground">{t("about.stat.local")}</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">4.8</p>
                <p className="font-body text-sm text-muted-foreground">{t("about.stat.rating")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal direction="right" delay={0.15}>
          <div className="relative">
            <img
              src={interiorImage}
              alt="Cosy interior of Eldhúsið restaurant"
              className="rounded-lg shadow-xl w-full object-cover aspect-square"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-sm flex items-center justify-center">
              <span className="font-heading text-accent-foreground text-lg font-bold leading-tight text-center">Est.<br/>2018</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
