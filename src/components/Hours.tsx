import { Clock, MapPin, Phone } from "lucide-react";

const Hours = () => {
  return (
    <section id="borda" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-accent font-semibold mb-3">Heimsóktu okkur</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Opnunartímar & staðsetning
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Opnunartímar</h3>
            <div className="space-y-2 font-body text-muted-foreground">
              <p>Mán – Fim: 11:30 – 21:00</p>
              <p>Fös – Lau: 11:30 – 22:00</p>
              <p>Sunnudagar: 12:00 – 20:00</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Staðsetning</h3>
            <div className="font-body text-muted-foreground">
              <p>Laugavegur 42</p>
              <p>101 Reykjavík</p>
              <p className="mt-3">
                <a href="#" className="text-accent hover:underline font-semibold">Opna í korti →</a>
              </p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 text-center shadow-md border border-border">
            <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Bóka borð</h3>
            <div className="font-body text-muted-foreground">
              <p>Sími: 555-1234</p>
              <p>eldhusid@eldhusid.is</p>
              <p className="mt-3">
                <a href="tel:5551234" className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity">
                  Hringdu núna
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;
