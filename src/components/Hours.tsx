import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Hours = () => {
  const { t } = useLanguage();

  return (
    <section id="borda" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("hours.label")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">{t("hours.title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.hours.title")}</h3>
            <div className="space-y-2 font-body text-muted-foreground">
              <p>{t("hours.h1")}</p>
              <p>{t("hours.h2")}</p>
              <p>{t("hours.h3")}</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.location.title")}</h3>
            <div className="font-body text-muted-foreground">
              <p>Laugavegur 42</p>
              <p>101 Reykjavík</p>
              <p className="mt-3">
                <a href="#" className="text-accent hover:underline font-semibold">{t("hours.map")}</a>
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{t("hours.book.title")}</h3>
            <div className="font-body text-muted-foreground">
              <p>{t("hours.phone")}</p>
              <p>eldhusid@eldhusid.is</p>
              <p className="mt-3">
                <a href="tel:5551234" className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity">
                  {t("hours.callNow")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
