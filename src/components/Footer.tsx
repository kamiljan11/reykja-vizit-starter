const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-background/80">
        <div>
          <h3 className="font-heading text-2xl font-bold text-background mb-3">Eldhúsið</h3>
          <p className="font-body text-sm leading-relaxed">
            Fjölskylduveitingastaður í Reykjavík sem leggur áherslu á heiðarlegan mat úr íslensku hráefni.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-3">Tengiliðir</h4>
          <div className="font-body text-sm space-y-1">
            <p>Laugavegur 42, 101 Reykjavík</p>
            <p>Sími: 555-1234</p>
            <p>eldhusid@eldhusid.is</p>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-background mb-3">Opnunartímar</h4>
          <div className="font-body text-sm space-y-1">
            <p>Mán – Fim: 11:30 – 21:00</p>
            <p>Fös – Lau: 11:30 – 22:00</p>
            <p>Sun: 12:00 – 20:00</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-background/20">
        <p className="font-body text-xs text-background/50 text-center">
          © 2025 Eldhúsið. Öll réttindi áskilin. — Vefsíða hönnuð af{" "}
          <span className="text-accent font-semibold">YourStudio</span> · frá 19.900 kr.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
