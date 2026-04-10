import { useState } from "react";
import { X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import dishFish from "@/assets/dish-fish.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishLambRack from "@/assets/dish-lamb-rack.jpg";
import dishTrout from "@/assets/dish-trout.jpg";
import dishBeetroot from "@/assets/dish-beetroot.jpg";
import dishLavaCake from "@/assets/dish-lava-cake.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";
import interiorImage from "@/assets/interior.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";
import drinkHotchoc from "@/assets/drink-hotchoc.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  const images = [
    { src: dishLambRack, alt: t("gallery.alt1") },
    { src: interiorImage, alt: t("gallery.alt2") },
    { src: dishFish, alt: t("gallery.alt3") },
    { src: interior2, alt: t("gallery.alt2") },
    { src: dishTrout, alt: t("gallery.alt3") },
    { src: dishBeetroot, alt: t("gallery.alt5") },
    { src: interior3, alt: t("gallery.alt2") },
    { src: dishLavaCake, alt: t("gallery.alt5") },
    { src: dishLamb, alt: t("gallery.alt4") },
    { src: drinkCocktail, alt: t("gallery.alt5") },
    { src: dishDessert, alt: t("gallery.alt5") },
    { src: drinkHotchoc, alt: t("gallery.alt5") },
  ];

  return (
    <section id="myndir" className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("gallery.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("gallery.title")}</h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">{t("gallery.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-md"
                onClick={() => setSelected(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram size={28} className="text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/eldhusid_reykjavik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-body font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Instagram size={18} />
              {t("gallery.follow")} @eldhusid_reykjavik
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-background hover:text-accent transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-3xl w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
