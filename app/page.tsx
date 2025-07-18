import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ShotOnSection from "@/components/ShotOnSection";
import InnovationSection from "@/components/InnovationSection";
import NewsSection from "@/components/NewsSection";
import ExploreProductsSection from "@/components/ExploreProductsSection";
import SupportSection from "@/components/SupportSection";
import CookieBanner from "@/components/CookieBanner";

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    // Show cookie banner after a short delay
    const timer = setTimeout(() => {
      setShowCookieBanner(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductShowcase />
        <ShotOnSection />
        <InnovationSection />
        <NewsSection />
        <ExploreProductsSection />
        <SupportSection />
      </main>
      <Footer />
      {showCookieBanner && <CookieBanner onClose={() => setShowCookieBanner(false)} />}
    </div>
  );
}

export default App;