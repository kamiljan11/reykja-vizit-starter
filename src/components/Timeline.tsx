import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Timeline = () => {
  const { t } = useLanguage();

  const events = [
    { year: "2018", title: t("timeline.e1.title"), desc: t("timeline.e1.desc") },
    { year: "2019", title: t("timeline.e2.title"), desc: t("timeline.e2.desc") },
    { year: "2021", title: t("timeline.e3.title"), desc: t("timeline.e3.desc") },
    { year: "2023", title: t("timeline.e4.title"), desc: t("timeline.e4.desc") },
    { year: "2025", title: t("timeline.e5.title"), desc: t("timeline.e5.desc") },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("timeline.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("timeline.title")}</h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {events.map((e, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`relative flex items-start mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-accent -translate-x-1.5 mt-2 z-10" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                  <span className="font-heading text-accent font-bold text-lg">{e.year}</span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-2">{e.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
