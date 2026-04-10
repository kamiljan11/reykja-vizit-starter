import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const DemoContext = createContext<{ openDemo: () => void }>({ openDemo: () => {} });

export const useDemo = () => useContext(DemoContext);

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <DemoContext.Provider value={{ openDemo: () => setOpen(true) }}>
      {children}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/80 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl shadow-2xl max-w-md w-full p-8 text-center relative border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                {t("demo.title")}
              </h3>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                {t("demo.desc")}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://lovable.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-md hover:opacity-90 transition-opacity"
                >
                  {t("demo.cta")}
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 text-muted-foreground font-body text-sm hover:text-foreground transition-colors"
                >
                  {t("demo.close")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DemoContext.Provider>
  );
};
