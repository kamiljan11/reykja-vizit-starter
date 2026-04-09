import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Reservation = () => {
  const { t } = useLanguage();

  return (
    <section id="boka" className="py-24 px-6 bg-primary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              {t("reservation.label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t("reservation.title")}
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto mb-2">
              {t("reservation.subtitle")}
            </p>
            <p className="font-body text-primary-foreground/50 text-sm">
              {t("reservation.dineoutNote")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
            {/* DineOut Embed placeholder — in production, replace with actual DineOut widget */}
            <div className="p-8 md:p-12">
              <iframe
                src="https://www.dineout.is/eldhusid?isolation=true&lng=en"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: "0.5rem" }}
                title="DineOut - Book a table"
                loading="lazy"
              />
            </div>

            <div className="border-t border-border p-6 bg-secondary/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <p className="font-body text-muted-foreground text-sm">
                  {t("reservation.phoneAlt")}
                </p>
                <a
                  href="tel:5551234"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-accent-foreground font-body font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  {t("reservation.callNow")}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reservation;
