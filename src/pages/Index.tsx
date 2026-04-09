import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Hours from "@/components/Hours";
import Reservation from "@/components/Reservation";
import Cta from "@/components/Cta";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Hours />
      <Reservation />
      <Cta />
      <Promo />
      <Footer />
    </div>
  );
};

export default Index;
