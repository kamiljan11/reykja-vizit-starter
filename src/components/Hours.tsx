import { Clock, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Hours = () => {
  const { t } = useLanguage();

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
                  <a href="tel:5551234" className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity">
                    {t("hours.callNow")}
                  </a>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-md border border-border bg-card relative" style={{ height: 350 }}>
            {/* Fake styled map background */}
            <div className="absolute inset-0 bg-secondary">
              {/* Street grid lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal streets */}
                <line x1="0" y1="30%" x2="100%" y2="30%" stroke="hsl(var(--border))" strokeWidth="12" />
                <line x1="0" y1="55%" x2="100%" y2="52%" stroke="hsl(var(--border))" strokeWidth="18" opacity="0.8" />
                <line x1="0" y1="75%" x2="100%" y2="78%" stroke="hsl(var(--border))" strokeWidth="10" />
                {/* Vertical streets */}
                <line x1="25%" y1="0" x2="22%" y2="100%" stroke="hsl(var(--border))" strokeWidth="10" />
                <line x1="55%" y1="0" x2="58%" y2="100%" stroke="hsl(var(--border))" strokeWidth="14" opacity="0.8" />
                <line x1="80%" y1="0" x2="82%" y2="100%" stroke="hsl(var(--border))" strokeWidth="8" />
                {/* Diagonal */}
                <line x1="0" y1="10%" x2="40%" y2="100%" stroke="hsl(var(--border))" strokeWidth="6" opacity="0.5" />
              </svg>
              {/* Street label */}
              <div className="absolute top-[48%] left-[20%] -rotate-2">
                <span className="font-body text-[10px] md:text-xs text-muted-foreground/60 tracking-wider uppercase">Laugavegur</span>
              </div>
              <div className="absolute top-[25%] left-[50%]">
                <span className="font-body text-[9px] text-muted-foreground/40 tracking-wider uppercase">Skólavörðustígur</span>
              </div>
            </div>

            {/* Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 flex flex-col items-center animate-bounce" style={{ animationDuration: "2s", animationIterationCount: 3 }}>
              <div className="bg-accent rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-accent -mt-1" />
            </div>

            {/* Label card */}
            <div className="absolute top-1/2 left-1/2 translate-x-2 -translate-y-[120%] z-20 bg-card rounded-lg shadow-xl px-4 py-2.5 border border-border">
              <p className="font-heading text-sm font-bold text-foreground whitespace-nowrap">Eldhúsið</p>
              <p className="font-body text-xs text-muted-foreground whitespace-nowrap">Laugavegur 42, 101 Reykjavík</p>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 right-4 flex flex-col gap-1 z-10">
              <div className="bg-card border border-border rounded w-8 h-8 flex items-center justify-center text-foreground font-body text-lg cursor-default shadow">+</div>
              <div className="bg-card border border-border rounded w-8 h-8 flex items-center justify-center text-foreground font-body text-lg cursor-default shadow">−</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hours;
