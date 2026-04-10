import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";
import TakeAway from "@/components/TakeAway";
import GiftCards from "@/components/GiftCards";
import Reservation from "@/components/Reservation";
import Cta from "@/components/Cta";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Events />
      <TakeAway />
      <Reviews />
      <Hours />
      <Reservation />
      <GiftCards />
      <Cta />
      <Promo />
      <Footer />
    </div>
  );
};

export default Index;
