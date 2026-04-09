import { useState } from "react";
import { CalendarIcon, Clock, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Reservation = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "18:00", guests: "2" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const timeSlots = [
    "11:30", "12:00", "12:30", "13:00",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00",
  ];

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
            <p className="font-body text-primary-foreground/70 text-lg max-w-xl mx-auto">
              {t("reservation.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="bg-card rounded-lg overflow-hidden shadow-2xl">
            {/* DineOut-style booking widget */}
            <div className="border-b border-border px-6 py-4 flex items-center justify-between bg-background/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                  <span className="font-heading text-accent-foreground text-sm font-bold">D</span>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground">{t("reservation.dineoutNote")}</p>
                  <p className="font-heading text-sm font-semibold text-foreground">Eldhúsið — Laugavegur 42</p>
                </div>
              </div>
              <span className="hidden sm:inline-block font-body text-xs text-muted-foreground px-2 py-1 rounded bg-secondary border border-border">dineout.is</span>
            </div>

            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {t("reservation.success")}
                  </h3>
                  <p className="font-body text-muted-foreground">{t("reservation.successDesc")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      {t("reservation.name")}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder={t("reservation.namePlaceholder")}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                        <CalendarIcon className="w-4 h-4 text-accent" />
                        {t("reservation.date")}
                      </label>
                      <input
                        type="date"
                        required
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                        <Clock className="w-4 h-4 text-accent" />
                        {t("reservation.time")}
                      </label>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {timeSlots.map((ts) => (
                          <option key={ts} value={ts}>{ts}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 font-body text-sm font-medium text-foreground mb-2">
                        <Users className="w-4 h-4 text-accent" />
                        {t("reservation.guests")}
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? t("reservation.guest") : t("reservation.guestsLabel")}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {t("reservation.submit")}
                  </button>
                </form>
              )}
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
