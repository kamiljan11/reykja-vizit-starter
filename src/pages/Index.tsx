import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Hours from "@/components/Hours";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Promo from "@/components/Promo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Hours />
      <Cta />
      <Promo />
      <Footer />
    </div>
  );
};

export default Index;
