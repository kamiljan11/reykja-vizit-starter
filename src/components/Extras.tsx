import { ShoppingBag, Gift, Percent } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { useDemo } from "./DemoModal";

const Extras = () => {
  const { t } = useLanguage();
  const { openDemo } = useDemo();

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("extras.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("extras.title")}</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {/* TakeAway card */}
          <ScrollReveal delay={0}>
            <div className="bg-accent rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-foreground/20 rounded-full mb-4 self-start">
                  <Percent className="w-3.5 h-3.5 text-accent-foreground" />
                  <span className="font-body text-xs font-bold text-accent-foreground">{t("takeaway.discount")}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-accent-foreground mb-2">
                  {t("takeaway.title")}
                </h3>
                <p className="font-body text-accent-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                  {t("takeaway.desc")}
                </p>
                <button
                  onClick={() => openDemo()}
                  className="self-start px-6 py-2.5 bg-foreground text-background font-body font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  {t("takeaway.cta")}
                </button>
              </div>
              <div className="bg-foreground/10 flex items-center justify-center py-8">
                <div className="text-center flex items-center gap-3">
                  <ShoppingBag className="w-8 h-8 text-accent-foreground/60" />
                  <p className="font-heading text-4xl font-bold text-accent-foreground">20%</p>
                  <p className="font-body text-accent-foreground/70 text-xs uppercase tracking-wider">{t("takeaway.off")}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* GiftCards card */}
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-xl overflow-hidden shadow-lg border border-border h-full flex flex-col">
              <div className="p-7 md:p-8 flex-1 flex flex-col">
                <Gift className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
                  {t("giftcard.title")}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                  {t("giftcard.desc")}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["5.000", "10.000", "15.000", "25.000"].map((amount) => (
                    <span
                      key={amount}
                      className="px-3 py-1.5 rounded-full border border-border font-body text-xs text-foreground bg-background"
                    >
                      {amount} kr.
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openDemo()}
                  className="self-start px-6 py-2.5 bg-accent text-accent-foreground font-body font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity"
                >
                  {t("giftcard.cta")}
                </button>
              </div>
              <div className="bg-primary flex items-center justify-center py-8">
                <div className="w-48 h-28 bg-foreground/10 rounded-lg border border-primary-foreground/20 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
                  <p className="font-heading text-lg font-bold text-primary-foreground mb-0.5">Eldhúsið</p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">GJAFABRÉF</p>
                  <p className="font-heading text-xl font-bold text-accent">10.000 kr.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Extras;
