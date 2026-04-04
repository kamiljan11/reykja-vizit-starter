import dishFish from "@/assets/dish-fish.jpg";
import dishLamb from "@/assets/dish-lamb.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const menuItems = [
  {
    image: dishFish,
    name: "Steiktur bleikja",
    description: "Ferskur bleikjuflaki steiktur á smjöri með kryddjurtum, sítrónu og kartöflumús.",
    price: "3.490 kr.",
  },
  {
    image: dishLamb,
    name: "Lambakjötsúpa",
    description: "Hefðbundin íslensk lambakjötsúpa með rótargrænmeti og ferskum jurtum.",
    price: "2.290 kr.",
  },
  {
    image: dishDessert,
    name: "Skyrterta með berjum",
    description: "Kremað skyr á mysingarbotni með fersku íslensku berjasoði og möndlum.",
    price: "1.790 kr.",
  },
];

const Menu = () => {
  return (
    <section id="matseðill" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">Matseðillinn</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Okkar uppáhald
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">
            Smakkaðu besta sem íslenskt hráefni hefur upp á að bjóða.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={800}
                />
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
            Sjá allan matseðilinn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
