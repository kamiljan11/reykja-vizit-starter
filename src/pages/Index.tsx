import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";
import Extras from "@/components/Extras";
import Reservation from "@/components/Reservation";

import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { DemoProvider } from "@/components/DemoModal";

const Index = () => {
  return (
    <DemoProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <Gallery />
        <Events />
      <Extras />
      <Reservation />
        <Hours />
        
        <Promo />
        <Footer />
        <CookieBanner />
      </div>
    </DemoProvider>
  );
};

export default Index;
