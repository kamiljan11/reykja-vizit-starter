import { Instagram as InstaIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import dishFish from "@/assets/dish-fish.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import interior from "@/assets/interior.jpg";
import interior2 from "@/assets/interior-2.jpg";
import instaGrid from "@/assets/insta-grid.jpg";

const Instagram = () => {
  const { t } = useLanguage();

  const photos = [
    { src: dishFish, alt: "Fish dish" },
    { src: interior, alt: "Restaurant interior" },
    { src: dishLamb, alt: "Lamb dish" },
    { src: instaGrid, alt: "Food spread" },
    { src: interior2, alt: "Guests dining" },
    { src: dishDessert, alt: "Dessert" },
  ];

  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <InstaIcon className="w-8 h-8 text-accent mx-auto mb-3" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{t("insta.title")}</h2>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-accent font-semibold hover:underline text-sm"
            >
              @eldhusid_rvk
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((p, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg group cursor-pointer relative">
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={400} height={400} />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                  <InstaIcon className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Instagram;
