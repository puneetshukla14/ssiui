import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "DJI MAVIC 3 PRO",
      subtitle: "Triple-Camera System",
      backgroundImage: "https://www-cdn.djiits.com/cms/uploads/cb91ecbe131a7120a9bfebf827f6fdb6@origin.jpg",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 2,
      title: "DJI AIR 3S",
      subtitle: "Chase the View",
      backgroundImage: "https://www-cdn.djiits.com/cms/uploads/b976c6de4bb48ffe42cbb0fc75cd91ad@1x.jpg",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 3,
      title: "DJI AGRAS T50/T25",
      subtitle: "Ready, Steady, Go.",
      backgroundImage: "https://www-cdn.djiits.com/cms/uploads/a9b0636a0208b6467b18abcf6f8bb06d.jpg",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
            <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <a href={slide.learnMoreLink}>Learn More</a>
              </Button>
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <a href={slide.buyNowLink}>Buy Now</a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
        onClick={goToPrevSlide}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white"
        onClick={goToNextSlide}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;