import { Calendar, Clock, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Events = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t("events.e1.title"),
      desc: t("events.e1.desc"),
      date: t("events.e1.date"),
      time: t("events.e1.time"),
      price: "3.490 kr.",
      badge: t("events.e1.badge"),
      badgeColor: "bg-accent",
    },
    {
      title: t("events.e2.title"),
      desc: t("events.e2.desc"),
      date: t("events.e2.date"),
      time: t("events.e2.time"),
      price: "8.900 kr.",
      badge: t("events.e2.badge"),
      badgeColor: "bg-primary",
    },
    {
      title: t("events.e3.title"),
      desc: t("events.e3.desc"),
      date: t("events.e3.date"),
      time: t("events.e3.time"),
      price: "",
      badge: t("events.e3.badge"),
      badgeColor: "bg-accent",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              {t("events.label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("events.title")}
            </h2>
            <p className="font-body text-muted-foreground text-lg">{t("events.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-card rounded-lg overflow-hidden shadow-md border border-border hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="p-6 flex-1">
                  <span className={`inline-block px-3 py-1 ${event.badgeColor} text-primary-foreground font-body text-xs font-semibold rounded-full mb-4`}>
                    {event.badge}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{event.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{event.desc}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-body text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="font-body text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 flex items-center justify-between">
                  {event.price && (
                    <span className="font-heading text-lg font-bold text-accent">{event.price}</span>
                  )}
                  <a href="#boka" className="ml-auto px-5 py-2 bg-accent text-accent-foreground font-body font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity">
                    {t("events.book")}
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
