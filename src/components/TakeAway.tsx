import { ShoppingBag, Clock, Percent } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const TakeAway = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="bg-accent rounded-lg overflow-hidden shadow-xl grid md:grid-cols-5">
            <div className="md:col-span-3 p-10 md:p-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-foreground/20 rounded-full mb-6">
                <Percent className="w-4 h-4 text-accent-foreground" />
                <span className="font-body text-sm font-bold text-accent-foreground">{t("takeaway.discount")}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
                {t("takeaway.title")}
              </h2>
              <p className="font-body text-accent-foreground/80 leading-relaxed mb-6">
                {t("takeaway.desc")}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-accent-foreground/80">
                  <Clock className="w-4 h-4" />
                  <span className="font-body text-sm">{t("takeaway.time")}</span>
                </div>
                <div className="flex items-center gap-2 text-accent-foreground/80">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="font-body text-sm">{t("takeaway.pickup")}</span>
                </div>
              </div>
              <a
                href="tel:5551234"
                className="inline-block px-8 py-3 bg-foreground text-background font-body font-bold rounded-sm hover:opacity-90 transition-opacity"
              >
                {t("takeaway.cta")}
              </a>
            </div>
            <div className="md:col-span-2 bg-foreground/10 flex items-center justify-center p-10">
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 text-accent-foreground/60 mx-auto mb-4" />
                <p className="font-heading text-5xl font-bold text-accent-foreground mb-2">20%</p>
                <p className="font-body text-accent-foreground/70 text-sm uppercase tracking-wider">{t("takeaway.off")}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TakeAway;
