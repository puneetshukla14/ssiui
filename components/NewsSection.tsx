import { Button } from "@/components/ui/button";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "DJI Introduces New Mavic 4 Pro with Enhanced Camera System",
      date: "October 15, 2023",
      image: "https://picsum.photos/id/30/800/600",
      link: "#",
    },
    {
      id: 2,
      title: "DJI Expands Enterprise Solutions with New Thermal Imaging Capabilities",
      date: "September 28, 2023",
      image: "https://picsum.photos/id/31/800/600",
      link: "#",
    },
    {
      id: 3,
      title: "DJI Announces Partnership with National Geographic for Conservation Projects",
      date: "August 12, 2023",
      image: "https://picsum.photos/id/32/800/600",
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <Button asChild variant="outline">
            <a href="#">View All News</a>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <Button asChild variant="link" className="p-0">
                  <a href={item.link}>Read More</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;