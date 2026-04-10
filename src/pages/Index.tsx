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
import Team from "@/components/Team";
import Timeline from "@/components/Timeline";
import Faq from "@/components/Faq";
import Instagram from "@/components/Instagram";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Menu />
      <Reviews />
      <Gallery />
      <Events />
      <Extras />
      <Reservation />
      <Timeline />
      <Faq />
      <Instagram />
      <Hours />
      <Promo />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
