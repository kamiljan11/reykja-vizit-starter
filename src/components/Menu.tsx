import { useState } from "react";
import dishFish from "@/assets/dish-fish.jpg";
import dishChar from "@/assets/dish-char.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishLambRack from "@/assets/dish-lamb-rack.jpg";
import dishTrout from "@/assets/dish-trout.jpg";
import dishBeetroot from "@/assets/dish-beetroot.jpg";
import dishLavaCake from "@/assets/dish-lava-cake.jpg";
import drinkBeer from "@/assets/drink-beer.jpg";
import drinkCocktail from "@/assets/drink-cocktail.jpg";
import drinkHotchoc from "@/assets/drink-hotchoc.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

type TabKey = "starters" | "mains" | "desserts" | "drinks";

const Menu = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("mains");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "starters", label: t("menu.tab.starters") },
    { key: "mains", label: t("menu.tab.mains") },
    { key: "desserts", label: t("menu.tab.desserts") },
    { key: "drinks", label: t("menu.tab.drinks") },
  ];

  const menuData: Record<TabKey, { image?: string; name: string; description: string; price: string }[]> = {
    starters: [
      { image: dishFish, name: t("menu.s1.name"), description: t("menu.s1.desc"), price: "2.290 kr." },
      { image: dishTrout, name: t("menu.s2.name"), description: t("menu.s2.desc"), price: "2.490 kr." },
      { image: dishBeetroot, name: t("menu.s3.name"), description: t("menu.s3.desc"), price: "1.890 kr." },
    ],
    mains: [
      { image: dishChar, name: t("menu.item1.name"), description: t("menu.item1.desc"), price: "3.490 kr." },
      { image: dishLamb, name: t("menu.item2.name"), description: t("menu.item2.desc"), price: "2.290 kr." },
      { image: dishLambRack, name: t("menu.m3.name"), description: t("menu.m3.desc"), price: "4.890 kr." },
    ],
    desserts: [
      { image: dishDessert, name: t("menu.item3.name"), description: t("menu.item3.desc"), price: "1.790 kr." },
      { image: dishLavaCake, name: t("menu.d2.name"), description: t("menu.d2.desc"), price: "1.990 kr." },
    ],
    drinks: [
      { image: drinkBeer, name: t("menu.dr1.name"), description: t("menu.dr1.desc"), price: "1.290 kr." },
      { image: drinkCocktail, name: t("menu.dr2.name"), description: t("menu.dr2.desc"), price: "1.990 kr." },
      { image: drinkHotchoc, name: t("menu.dr3.name"), description: t("menu.dr3.desc"), price: "890 kr." },
    ],
  };
  const items = menuData[activeTab];

  return (
    <section id="matseðill" className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("menu.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("menu.title")}</h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">{t("menu.subtitle")}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 md:px-6 py-2.5 md:py-2.5 rounded-full font-body text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                  activeTab === tab.key
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border active:bg-muted/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={`${activeTab}-${i}`} delay={i * 0.1}>
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                {item.image && (
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                  </div>
                )}
                <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{item.name}</h3>
                    <span className="font-body text-accent font-bold text-lg whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="#boka"
              className="inline-block px-8 py-3 border-2 border-primary text-primary font-body font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t("menu.seeAll")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Menu;
