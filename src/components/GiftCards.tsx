import { Gift } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const GiftCards = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-card rounded-lg overflow-hidden shadow-xl border border-border grid md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <Gift className="w-10 h-10 text-accent mb-4" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("giftcard.title")}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t("giftcard.desc")}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["5.000 kr.", "10.000 kr.", "15.000 kr.", "25.000 kr."].map((amount) => (
                  <span
                    key={amount}
                    className="px-4 py-2 rounded-full border border-border font-body text-sm text-foreground bg-background"
                  >
                    {amount}
                  </span>
                ))}
              </div>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-sm hover:opacity-90 transition-opacity text-center"
              >
                {t("giftcard.cta")}
              </a>
            </div>
            <div className="relative bg-primary flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-64 h-40 bg-foreground/10 rounded-lg border border-primary-foreground/20 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
                  <p className="font-heading text-2xl font-bold text-primary-foreground mb-1">Eldhúsið</p>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-3">GJAFABRÉF</p>
                  <p className="font-heading text-3xl font-bold text-accent">10.000 kr.</p>
                </div>
                <p className="font-body text-primary-foreground/50 text-xs mt-4">{t("giftcard.note")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GiftCards;
