import { useState, useMemo } from "react";
import heroImage from "@/assets/hero-food.jpg";
import { CalendarIcon, Users, ChevronLeft, ChevronRight, CheckCircle, Share2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

type Step = "when" | "guests" | "book";

const Reservation = () => {
  const { t, lang } = useLanguage();
  const [step, setStep] = useState<Step>("when");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const monthName = currentMonth.toLocaleDateString(lang === "is" ? "is-IS" : lang === "pl" ? "pl-PL" : "en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = lang === "is"
    ? ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"]
    : lang === "pl"
    ? ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"]
    : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const timeSlots = ["11:30", "12:00", "12:30", "13:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    if (isDateDisabled(day)) return;
    setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
  };

  const handleBook = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setStep("when");
      setSelectedDate(null);
      setSelectedTime(null);
      setGuests(2);
    }, 5000);
  };

  const prevMonthDays = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0);
    const days: number[] = [];
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push(prev.getDate() - i);
    }
    return days;
  };

  return (
    <section id="boka" className="py-16 md:py-24 px-4 md:px-6 bg-primary relative">
      {/* DEMO banner */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-block px-6 py-1.5 bg-accent text-accent-foreground font-body text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg">
          Demo — Sýnidæmi
        </span>
      </div>
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <p className="font-body text-xs md:text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-2 md:mb-3">
              {t("reservation.label")}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
              {t("reservation.title")}
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          {/* DineOut-style dark widget */}
          <div className="rounded-xl overflow-hidden shadow-2xl" style={{ background: "#0F1B2D" }}>
            {/* Header with restaurant info */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={heroImage}
                alt="Eldhúsið restaurant"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1B2D]" />
              <div className="absolute bottom-4 left-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-white/20 flex items-center justify-center">
                  <span className="font-heading text-foreground text-lg font-bold">E</span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Eldhúsið</h3>
                  <p className="text-white/60 text-sm font-body">
                    Open until 21:00 &nbsp;·&nbsp; $$
                    &nbsp;·&nbsp; <span className="text-accent text-xs">✓ Accepts Dineout Gift Cards</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-5">
              {/* Left: info */}
              <div className="md:col-span-2 p-6 border-r border-white/10 hidden md:block">
                <div className="mb-6">
                  <h4 className="text-white/40 text-xs font-body uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-white/80 text-sm font-body">Laugavegur 42, Reykjavík</p>
                </div>
                <div className="mb-6">
                  <h4 className="text-white/40 text-xs font-body uppercase tracking-wider mb-2">About</h4>
                  <p className="text-white/60 text-sm font-body leading-relaxed">
                    {t("footer.desc")}
                  </p>
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-body uppercase tracking-wider mb-2">Information</h4>
                  <p className="text-white/60 text-sm font-body">{t("hours.h1")}</p>
                  <p className="text-white/60 text-sm font-body">{t("hours.h2")}</p>
                  <p className="text-white/60 text-sm font-body">{t("hours.h3")}</p>
                </div>
              </div>

              {/* Right: booking widget */}
              <div className="md:col-span-3 p-6">
                {submitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">{t("reservation.success")}</h3>
                    <p className="text-white/60 font-body">{t("reservation.successDesc")}</p>
                  </div>
                ) : (
                  <>
                    {/* Steps header */}
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-white font-heading font-semibold">Make a reservation</h4>
                      <button className="flex items-center gap-1 text-accent text-sm font-body hover:underline">
                        <Share2 className="w-3.5 h-3.5" /> Share with a friend
                      </button>
                    </div>

                    {/* Step tabs */}
                    <div className="flex rounded-full overflow-hidden mb-6" style={{ background: "#172742" }}>
                      <button
                        onClick={() => setStep("when")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-body font-medium transition-all ${
                          step === "when" ? "bg-accent/20 text-accent" : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        <CalendarIcon className="w-4 h-4" /> When
                      </button>
                      <button
                        onClick={() => selectedDate && setStep("guests")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-body font-medium transition-all ${
                          step === "guests" ? "bg-accent/20 text-accent" : "text-white/50 hover:text-white/80"
                        }`}
                      >
                        <Users className="w-4 h-4" /> Guests
                      </button>
                      <button
                        onClick={() => selectedDate && selectedTime && setStep("book")}
                        className={`flex-1 py-2.5 text-sm font-body font-medium transition-all ${
                          step === "book" ? "bg-accent/20 text-accent" : "text-white/50"
                        }`}
                      >
                        Book
                      </button>
                    </div>

                    {step === "when" && (
                      <div>
                        <div className="flex items-center gap-2 mb-4 text-white/50 text-sm font-body">
                          <CalendarIcon className="w-4 h-4" /> Select your date
                        </div>

                        {/* Calendar */}
                        <div className="rounded-lg p-4" style={{ background: "#172742" }}>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-white font-body text-sm font-semibold capitalize">{monthName}</span>
                            <div className="flex gap-2">
                              <button onClick={prevMonth} className="text-white/50 hover:text-white"><ChevronLeft className="w-4 h-4" /></button>
                              <button onClick={nextMonth} className="text-white/50 hover:text-white"><ChevronRight className="w-4 h-4" /></button>
                            </div>
                          </div>

                          <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {weekDays.map((d) => (
                              <span key={d} className="text-white/30 text-xs font-body py-1">{d}</span>
                            ))}
                          </div>

                          <div className="grid grid-cols-7 gap-1 text-center">
                            {prevMonthDays().map((d, i) => (
                              <span key={`prev-${i}`} className="text-white/15 text-sm font-body py-2">{d}</span>
                            ))}
                            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                              const disabled = isDateDisabled(day);
                              const selected = isSelected(day);
                              const todayMark = isToday(day);
                              return (
                                <button
                                  key={day}
                                  disabled={disabled}
                                  onClick={() => handleDateClick(day)}
                                  className={`text-sm font-body py-2 rounded-md transition-all ${
                                    selected
                                      ? "bg-accent text-white font-bold"
                                      : todayMark
                                      ? "ring-1 ring-accent text-accent font-semibold hover:bg-accent/20"
                                      : disabled
                                      ? "text-white/15 cursor-not-allowed"
                                      : "text-white/70 hover:bg-white/10 hover:text-white"
                                  }`}
                                >
                                  {day}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {selectedDate && (
                          <div className="mt-4">
                            <p className="text-white/50 text-sm font-body mb-3">Select time</p>
                            <div className="flex flex-wrap gap-2">
                              {timeSlots.map((ts) => (
                                <button
                                  key={ts}
                                  onClick={() => { setSelectedTime(ts); setStep("guests"); }}
                                  className={`px-4 py-2 rounded-md text-sm font-body transition-all ${
                                    selectedTime === ts
                                      ? "bg-accent text-white font-semibold"
                                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                                  }`}
                                >
                                  {ts}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {step === "guests" && (
                      <div>
                        <p className="text-white/50 text-sm font-body mb-4 flex items-center gap-2">
                          <Users className="w-4 h-4" /> How many guests?
                        </p>
                        <div className="grid grid-cols-4 gap-3 mb-6">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <button
                              key={n}
                              onClick={() => setGuests(n)}
                              className={`py-3 rounded-lg text-sm font-body font-medium transition-all ${
                                guests === n
                                  ? "bg-accent text-white"
                                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                              }`}
                            >
                              {n} {n === 1 ? t("reservation.guest") : t("reservation.guestsLabel")}
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => setStep("book")}
                          className="w-full py-3 bg-accent text-white font-body font-bold rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Continue →
                        </button>
                      </div>
                    )}

                    {step === "book" && (
                      <div>
                        <div className="rounded-lg p-5 mb-6 space-y-3" style={{ background: "#172742" }}>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-white/50">{t("reservation.date")}</span>
                            <span className="text-white font-medium">
                              {selectedDate?.toLocaleDateString(lang === "is" ? "is-IS" : lang === "pl" ? "pl-PL" : "en-US", { weekday: "short", month: "short", day: "numeric" })}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-white/50">{t("reservation.time")}</span>
                            <span className="text-white font-medium">{selectedTime}</span>
                          </div>
                          <div className="flex justify-between text-sm font-body">
                            <span className="text-white/50">{t("reservation.guests")}</span>
                            <span className="text-white font-medium">{guests} {guests === 1 ? t("reservation.guest") : t("reservation.guestsLabel")}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <label className="block text-white/50 text-sm font-body mb-2">{t("reservation.name")}</label>
                          <input
                            type="text"
                            placeholder={t("reservation.namePlaceholder")}
                            className="w-full px-4 py-3 rounded-lg text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent border border-white/10"
                            style={{ background: "#172742" }}
                          />
                        </div>

                        <button
                          onClick={handleBook}
                          className="w-full py-4 bg-accent text-white font-body font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
                        >
                          {t("reservation.submit")}
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/10 px-6 py-4 flex items-center justify-between">
              <span className="text-white/30 text-xs font-body">Powered by <span className="text-accent font-semibold">dineout.is</span></span>
              <a
                href="tel:5551234"
                className="text-accent text-xs font-body hover:underline"
              >
                {t("reservation.phoneAlt")}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Reservation;
