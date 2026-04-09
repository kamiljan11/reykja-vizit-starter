import { useState } from "react";
import { CalendarIcon, Clock, Users, Phone, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Reservation = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "18:00",
    guests: "2",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const timeSlots = [
    "11:30", "12:00", "12:30", "13:00", "13:30",
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
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-2xl">
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
                <div className="grid md:grid-cols-2 gap-6">
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
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      {t("reservation.email")}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder={t("reservation.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
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

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    {t("reservation.message")}
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder={t("reservation.messagePlaceholder")}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 px-8 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {t("reservation.submit")}
                  </button>
                  <a
                    href="tel:5551234"
                    className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground font-body font-semibold rounded-sm hover:bg-secondary transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {t("reservation.callInstead")}
                  </a>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reservation;
