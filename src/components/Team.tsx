import teamOwners from "@/assets/team-owners.jpg";
import teamChef from "@/assets/team-chef.jpg";
import teamServer from "@/assets/team-server.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const Team = () => {
  const { t } = useLanguage();

  const members = [
    { image: teamOwners, name: t("team.m1.name"), role: t("team.m1.role"), desc: t("team.m1.desc") },
    { image: teamChef, name: t("team.m2.name"), role: t("team.m2.role"), desc: t("team.m2.desc") },
    { image: teamServer, name: t("team.m3.name"), role: t("team.m3.role"), desc: t("team.m3.desc") },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">{t("team.label")}</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">{t("team.title")}</h2>
            <p className="font-body text-muted-foreground text-lg max-w-lg mx-auto">{t("team.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {members.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.15} className="h-full">
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group h-full flex flex-col">
                <div className="overflow-hidden aspect-[3/4]">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={1024} />
                </div>
                <div className="p-6 text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{m.name}</h3>
                  <p className="font-body text-accent text-sm font-semibold mb-2">{m.role}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
