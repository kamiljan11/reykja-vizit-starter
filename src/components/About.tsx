import { useState, useEffect } from "react";
import interiorImage from "@/assets/interior.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import { useLanguage } from "@/i18n/useLang";
import ScrollReveal from "./ScrollReveal";
import { KnotDivider } from "./Decorations";
import { TopoBackground } from "./Decorations";

const images = [interiorImage, interior2, interior3];

const About = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="um-okkur" className="py-16 md:py-24 px-6 relative overflow-hidden">
      <TopoBackground className="text-foreground" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <ScrollReveal>
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold">{t("about.label")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <KnotDivider className="text-accent mb-3" />
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
            <div className="rounded-lg shadow-xl w-full aspect-square overflow-hidden relative">
              {images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Eldhúsið restaurant interior ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: i === current ? 1 : 0 }}
                  loading={i === 0 ? undefined : "lazy"}
                  width={1024}
                  height={1024}
                />
              ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-white/60"
                  }`}
                  aria-label={`Show photo ${i + 1}`}
                />
              ))}
            </div>
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
