import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <FeaturedDishes />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;