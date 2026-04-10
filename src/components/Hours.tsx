import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import { useDemo } from "./DemoModal";

const Hours = () => {
  const { t } = useLanguage();
  const { openDemo } = useDemo();

  return (
    <section id="borda" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("hours.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("hours.title")}</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ScrollReveal delay={0}>
            <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border h-full">
              <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.hours.title")}</h3>
              <div className="space-y-2 font-body text-muted-foreground">
                <p>{t("hours.h1")}</p>
                <p>{t("hours.h2")}</p>
                <p>{t("hours.h3")}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border h-full">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.location.title")}</h3>
              <div className="font-body text-muted-foreground">
                <p>Laugavegur 42</p>
                <p>101 Reykjavík</p>
                <p className="mt-3">
                  <a href="https://maps.google.com/?q=Laugavegur+42+101+Reykjavik" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">{t("hours.map")}</a>
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border h-full">
              <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.book.title")}</h3>
              <div className="font-body text-muted-foreground">
                <p>{t("hours.phone")}</p>
                <p>eldhusid@eldhusid.is</p>
                <p className="mt-3">
                  <button onClick={() => openDemo()} className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity">
                    {t("hours.callNow")}
                  </button>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-md border border-border bg-card" style={{ height: 350 }}>
            <iframe
              title="Eldhúsið location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1740.5!2d-21.9!3d64.145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLaugavegur+42%2C+101+Reykjav%C3%ADk!5e0!3m2!1sen!2sis!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hours;
