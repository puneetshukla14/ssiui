import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ShotOnSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "DJI RS 4 Mini",
      image: "https://picsum.photos/id/10/1200/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 2,
      title: "Osmo Mobile 7 Series",
      image: "https://picsum.photos/id/11/1200/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 3,
      title: "DJI Flip",
      image: "https://picsum.photos/id/12/1200/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 4,
      title: "DJI FlyCart 30",
      subtitle: "Delivery on Everest",
      image: "https://picsum.photos/id/13/1200/600",
      learnMoreLink: "#",
    },
    {
      id: 5,
      title: "DJI Air 3S",
      image: "https://picsum.photos/id/14/1200/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <section className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Slider container */}
          <div className="relative overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${slides.length * 100}%` }}
            >
              {slides.map((slide) => (
                <div 
                  key={slide.id} 
                  className="relative w-full"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className="relative h-[500px] mx-4 overflow-hidden rounded-lg">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-6">
                      <p className="text-lg mb-2">Shot on</p>
                      <h3 className="text-3xl font-bold mb-6">{slide.title}</h3>
                      {slide.subtitle && (
                        <p className="text-xl mb-6">{slide.subtitle}</p>
                      )}
                      <div className="flex space-x-4">
                        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                          <a href={slide.learnMoreLink}>Learn More</a>
                        </Button>
                        {slide.buyNowLink && (
                          <Button asChild className="bg-white text-black hover:bg-gray-200">
                            <a href={slide.buyNowLink}>Buy Now</a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
            onClick={goToPrevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white z-10"
            onClick={goToNextSlide}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-black" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShotOnSection;