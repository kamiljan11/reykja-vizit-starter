import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "Sarah M.",
      location: t("reviews.r1.location"),
      text: t("reviews.r1.text"),
      rating: 5,
    },
    {
      name: "Ólafur H.",
      location: t("reviews.r2.location"),
      text: t("reviews.r2.text"),
      rating: 5,
    },
    {
      name: "Katarzyna W.",
      location: t("reviews.r3.location"),
      text: t("reviews.r3.text"),
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              {t("reviews.label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("reviews.title")}
            </h2>
            <p className="font-body text-muted-foreground text-lg">
              {t("reviews.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-card rounded-lg p-8 shadow-md border border-border relative group hover:shadow-xl transition-shadow duration-300">
                <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div>
                  <p className="font-heading font-semibold text-foreground">{review.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-sm border border-border">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.8/5</span> — {t("reviews.googleBadge")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reviews;
