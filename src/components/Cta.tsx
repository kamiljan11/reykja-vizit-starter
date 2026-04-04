const Cta = () => {
  return (
    <section className="py-20 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Komdu og borðaðu með okkur
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Bókaðu borð og njóttu bestu bragðanna sem Ísland hefur upp á að bjóða, í hlýlegu og notalegu umhverfi.
        </p>
        <a
          href="tel:5551234"
          className="inline-block px-10 py-4 bg-accent text-accent-foreground font-body font-bold text-lg rounded-sm hover:opacity-90 transition-opacity"
        >
          Bóka borð — 555-1234
        </a>
      </div>
    </section>
  );
};

export default Cta;
