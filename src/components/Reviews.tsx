import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import MobileCarousel from "./MobileCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const Reviews = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

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

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <div className="bg-card rounded-lg p-6 md:p-8 shadow-md border border-border relative group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent/20 absolute top-4 right-4 md:top-6 md:right-6" />
      <div className="flex gap-1 mb-3 md:mb-4">
        {Array.from({ length: review.rating }).map((_, s) => (
          <Star key={s} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="font-body text-muted-foreground leading-relaxed mb-4 md:mb-6 italic text-sm md:text-base flex-1">
        "{review.text}"
      </p>
      <div>
        <p className="font-heading font-semibold text-foreground text-sm md:text-base">{review.name}</p>
        <p className="font-body text-xs md:text-sm text-muted-foreground">{review.location}</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2 md:mb-3">
              {t("reviews.label")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
              {t("reviews.title")}
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg">
              {t("reviews.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {isMobile ? (
          <ScrollReveal>
            <MobileCarousel>
              {reviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </MobileCarousel>
          </ScrollReveal>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <ReviewCard review={review} />
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-8 md:mt-12">
            <div className="inline-flex items-center gap-2 md:gap-3 bg-card rounded-full px-4 md:px-6 py-2 md:py-3 shadow-sm border border-border">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-body text-xs md:text-sm text-muted-foreground">
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
