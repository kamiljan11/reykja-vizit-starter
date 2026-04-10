import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#um-okkur", label: t("nav.about") },
    { href: "#matseðill", label: t("nav.menu") },
    { href: "#myndir", label: t("nav.gallery") },
    { href: "#vidburdir", label: t("nav.events") },
    { href: "#umsagnir", label: t("nav.reviews") },
    { href: "#borda", label: t("nav.hours") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className={`font-heading text-2xl font-bold transition-colors duration-300 ${
          scrolled ? "text-foreground" : "text-primary-foreground"
        }`}>Eldhúsið</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`font-body text-sm font-medium transition-colors ${
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
            }`}>
              {l.label}
            </a>
          ))}
          <a href="#boka" className="px-5 py-2 bg-accent text-accent-foreground font-body font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity">
            {t("nav.book")}
          </a>
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button onClick={() => setOpen(!open)} className={`transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block font-body text-foreground py-2">
              {l.label}
            </a>
          ))}
          <a href="#boka" onClick={() => setOpen(false)} className="block text-center px-5 py-2 bg-accent text-accent-foreground font-body font-semibold rounded-sm">
            {t("nav.book")}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
