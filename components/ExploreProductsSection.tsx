import { Button } from "@/components/ui/button";

const ExploreProductsSection = () => {
  const categories = [
    {
      id: 1,
      title: "Video Production",
      subtitle: "Professional Aerial and Ground Filmmaking Tools",
      image: "https://picsum.photos/id/40/800/600",
      link: "#",
    },
    {
      id: 2,
      title: "Enterprise",
      subtitle: "Drone Solutions for a New Generation of Work",
      image: "https://picsum.photos/id/41/800/600",
      link: "#",
    },
    {
      id: 3,
      title: "Agriculture",
      subtitle: "Efficient and Intelligent Agricultural Solutions",
      image: "https://picsum.photos/id/42/800/600",
      link: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Explore DJI Products in Different Fields</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="relative h-[400px] rounded-lg overflow-hidden group"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-sm mb-4">{category.subtitle}</p>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black w-fit">
                  <a href={category.link}>Learn More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProductsSection;