import interiorImage from "@/assets/interior.jpg";

const About = () => {
  return (
    <section id="um-okkur" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold">Um okkur</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Einfalt & gott — eins og heima
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Eldhúsið er fjölskylduveitingastaður í hjarta Reykjavíkur. Við trúum á einfalda matargerð
            þar sem hráefnin fá að njóta sín. Íslensku lambalærin okkar, ferskur fiskur og heimilegar
            súpur eru elduð með kærleika og tíma.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Staðurinn er notalegur, hlýr og fullkominn fyrir kvöldverð með fjölskyldunni,
            stefnumót eða bara góðan mat með góðu fólki.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <p className="font-heading text-3xl font-bold text-accent">7+</p>
              <p className="font-body text-sm text-muted-foreground">ára reynsla</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-accent">100%</p>
              <p className="font-body text-sm text-muted-foreground">íslenskt hráefni</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-accent">4.8</p>
              <p className="font-body text-sm text-muted-foreground">stjörnur á Google</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={interiorImage}
            alt="Notalegt innra rými Eldhússins"
            className="rounded-lg shadow-xl w-full object-cover aspect-square"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-heading text-accent-foreground text-lg font-bold leading-tight text-center">Est.<br/>2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
