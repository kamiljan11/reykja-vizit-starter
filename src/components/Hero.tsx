import heroImage from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Islenski lamb chops with roasted vegetables and soup"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4 animate-fade-up">
          Reykjavík · Frá 2018
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Eldhúsið
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Heiðarleg matargerð með íslensku hráefni — einfalt, gott og gert af hjarta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <a href="#matseðill" className="px-8 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-sm hover:opacity-90 transition-opacity">
            Sjá matseðil
          </a>
          <a href="#borda" className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body font-semibold rounded-sm hover:bg-primary-foreground/10 transition-colors">
            Bóka borð
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground/60">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
