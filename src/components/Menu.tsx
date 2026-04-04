import dishFish from "@/assets/dish-fish.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Menu = () => {
  const { t } = useLanguage();

  const menuItems = [
    { image: dishFish, name: t("menu.item1.name"), description: t("menu.item1.desc"), price: "3.490 kr." },
    { image: dishLamb, name: t("menu.item2.name"), description: t("menu.item2.desc"), price: "2.290 kr." },
    { image: dishDessert, name: t("menu.item3.name"), description: t("menu.item3.desc"), price: "1.790 kr." },
  ];

  return (
    <section id="matseðill" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("menu.label")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">{t("menu.title")}</h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">{t("menu.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="overflow-hidden aspect-square">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={800} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="font-body text-accent font-bold text-lg whitespace-nowrap ml-3">{item.price}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 border-2 border-primary text-primary font-body font-semibold rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors">
            {t("menu.seeAll")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
