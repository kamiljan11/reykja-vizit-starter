import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/useLang";

const CookieBanner = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState({ necessary: true, analytics: false, marketing: false });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setVisible(false);
  };

  const savePrefs = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setVisible(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl shadow-2xl p-5 md:p-6">
            {!showSettings ? (
              <>
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">🍪</span>
                  <div>
                    <h3 className="font-heading text-base font-bold text-foreground mb-1">
                      {t("cookies.title")}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {t("cookies.desc")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={accept}
                    className="px-5 py-2 bg-accent text-accent-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                  >
                    {t("cookies.accept")}
                  </button>
                  <button
                    onClick={reject}
                    className="px-5 py-2 border border-border text-muted-foreground font-body text-sm font-semibold rounded-md hover:text-foreground transition-colors"
                  >
                    {t("cookies.reject")}
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-5 py-2 text-muted-foreground font-body text-sm hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    {t("cookies.settings")}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-heading text-base font-bold text-foreground mb-4">
                  {t("cookies.settingsTitle")}
                </h3>
                <div className="space-y-3 mb-5">
                  {[
                    { key: "necessary" as const, label: t("cookies.necessary"), locked: true },
                    { key: "analytics" as const, label: t("cookies.analytics") },
                    { key: "marketing" as const, label: t("cookies.marketing") },
                  ].map((item) => (
                    <label key={item.key} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                      <span className="font-body text-sm text-foreground">{item.label}</span>
                      <button
                        onClick={() => !item.locked && setPrefs((p) => ({ ...p, [item.key]: !p[item.key] }))}
                        className={`w-10 h-6 rounded-full transition-colors relative ${
                          prefs[item.key] ? "bg-accent" : "bg-muted"
                        } ${item.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        <span
                          className={`absolute top-1 w-4 h-4 rounded-full bg-card shadow transition-transform ${
                            prefs[item.key] ? "translate-x-5" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </label>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={savePrefs}
                    className="px-5 py-2 bg-accent text-accent-foreground font-body text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                  >
                    {t("cookies.save")}
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="px-5 py-2 border border-border text-muted-foreground font-body text-sm font-semibold rounded-md hover:text-foreground transition-colors"
                  >
                    {t("cookies.back")}
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
