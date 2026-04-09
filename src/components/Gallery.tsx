import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import dishFish from "@/assets/dish-fish.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import interiorImage from "@/assets/interior.jpg";
import heroImage from "@/assets/hero-food.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const images = [
    { src: heroImage, alt: t("gallery.alt1"), span: "md:col-span-2 md:row-span-2" },
    { src: interiorImage, alt: t("gallery.alt2"), span: "" },
    { src: dishFish, alt: t("gallery.alt3"), span: "" },
    { src: dishLamb, alt: t("gallery.alt4"), span: "" },
    { src: dishDessert, alt: t("gallery.alt5"), span: "" },
  ];

  return (
    <section id="myndir" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">
              {t("gallery.label")}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("gallery.title")}
            </h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
              {t("gallery.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={img.span}>
              <div
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
