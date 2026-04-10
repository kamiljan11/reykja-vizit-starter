import { useState } from "react";
import { X, Heart, MessageCircle, Send, Bookmark, Grid3X3, Camera } from "lucide-react";
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
import drinkHotchoc from "@/assets/drink-hotchoc.jpg";
import interiorImage from "@/assets/interior.jpg";
import interior2 from "@/assets/interior-2.jpg";
import interior3 from "@/assets/interior-3.jpg";

const Gallery = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const images = [
    { src: dishLambRack, alt: t("gallery.alt1"), likes: 142 },
    { src: interiorImage, alt: t("gallery.alt2"), likes: 98 },
    { src: dishFish, alt: t("gallery.alt3"), likes: 187 },
    { src: interior2, alt: t("gallery.alt2"), likes: 76 },
    { src: dishTrout, alt: t("gallery.alt3"), likes: 124 },
    { src: dishBeetroot, alt: t("gallery.alt5"), likes: 93 },
    { src: interior3, alt: t("gallery.alt2"), likes: 112 },
    { src: dishLavaCake, alt: t("gallery.alt5"), likes: 203 },
    { src: dishLamb, alt: t("gallery.alt4"), likes: 156 },
    { src: drinkCocktail, alt: t("gallery.alt5"), likes: 88 },
    { src: dishDessert, alt: t("gallery.alt5"), likes: 171 },
    { src: drinkHotchoc, alt: t("gallery.alt5"), likes: 64 },
  ];

  const toggleLike = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section id="myndir" className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-2xl mx-auto">
        {/* Instagram-style profile header */}
        <ScrollReveal>
          <div className="bg-card rounded-t-xl border border-border p-6 mb-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent to-orange-400 p-[3px]">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <span className="font-heading text-xl md:text-2xl font-bold text-foreground">E</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-body font-bold text-foreground text-base">eldhusid_reykjavik</h3>
                  <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                </div>
                <p className="font-body text-sm text-muted-foreground">{t("gallery.subtitle")}</p>
              </div>
            </div>
            <div className="flex justify-around text-center border-t border-border pt-4">
              <div>
                <p className="font-body font-bold text-foreground text-sm">{images.length}</p>
                <p className="font-body text-xs text-muted-foreground">posts</p>
              </div>
              <div>
                <p className="font-body font-bold text-foreground text-sm">2.4k</p>
                <p className="font-body text-xs text-muted-foreground">followers</p>
              </div>
              <div>
                <p className="font-body font-bold text-foreground text-sm">186</p>
                <p className="font-body text-xs text-muted-foreground">following</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Tab bar */}
        <ScrollReveal delay={0.05}>
          <div className="bg-card border-x border-border flex justify-center">
            <button className="flex items-center gap-1.5 px-6 py-3 border-t-2 border-foreground font-body text-xs font-semibold text-foreground tracking-wider uppercase">
              <Grid3X3 size={14} /> Posts
            </button>
          </div>
        </ScrollReveal>

        {/* Instagram grid */}
        <ScrollReveal delay={0.1}>
          <div className="bg-card border border-border rounded-b-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-[2px]">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square cursor-pointer group overflow-hidden"
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center gap-1 text-white">
                      <Heart size={16} fill="white" />
                      <span className="font-body text-sm font-semibold">{img.likes + (liked.has(i) ? 1 : 0)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox with Instagram post style */}
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-lg overflow-hidden max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 p-3 border-b border-border">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-orange-400 p-[2px]">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="font-heading text-xs font-bold text-foreground">E</span>
                  </div>
                </div>
                <span className="font-body text-sm font-semibold text-foreground">eldhusid_reykjavik</span>
              </div>
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="w-full aspect-square object-cover"
              />
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <button onClick={(e) => toggleLike(selected, e)}>
                      <Heart
                        size={24}
                        className={`transition-colors ${liked.has(selected) ? "text-red-500 fill-red-500" : "text-foreground"}`}
                      />
                    </button>
                    <MessageCircle size={24} className="text-foreground" />
                    <Send size={24} className="text-foreground" />
                  </div>
                  <Bookmark size={24} className="text-foreground" />
                </div>
                <p className="font-body text-sm font-semibold text-foreground">
                  {images[selected].likes + (liked.has(selected) ? 1 : 0)} likes
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
