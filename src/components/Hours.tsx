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
          <div className="rounded-xl overflow-hidden shadow-lg border border-border">
            {/* Info strip */}
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border bg-card">
              <div className="p-6 flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="font-body text-sm text-muted-foreground space-y-1">
                  <p className="font-heading font-semibold text-foreground text-base mb-2">{t("hours.hours.title")}</p>
                  <p>{t("hours.h1")}</p>
                  <p>{t("hours.h2")}</p>
                  <p>{t("hours.h3")}</p>
                </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p className="font-heading font-semibold text-foreground text-base mb-2">{t("hours.location.title")}</p>
                  <p>Laugavegur 42</p>
                  <p>101 Reykjavík</p>
                </div>
              </div>
              <div className="p-6 flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="font-body text-sm text-muted-foreground">
                  <p className="font-heading font-semibold text-foreground text-base mb-2">{t("hours.book.title")}</p>
                  <p>{t("hours.phone")}</p>
                  <p>eldhusid@eldhusid.is</p>
                  <button onClick={() => openDemo()} className="mt-2 text-accent font-semibold hover:underline text-sm">
                    {t("hours.callNow")} →
                  </button>
                </div>
              </div>
            </div>
            {/* Map */}
            <div style={{ height: 280 }}>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hours;
