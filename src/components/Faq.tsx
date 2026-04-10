import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("faq.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("faq.title")}</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-6">
                <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Faq;
