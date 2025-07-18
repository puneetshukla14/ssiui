import { ShoppingBag, HeadphonesIcon, User } from "lucide-react";

const SupportSection = () => {
  const supportItems = [
    {
      id: 1,
      title: "Where to Buy",
      description: "Find authorized retailers and online stores",
      icon: <ShoppingBag className="h-10 w-10" />,
      link: "#",
    },
    {
      id: 2,
      title: "Support",
      description: "Get help with your DJI products",
      icon: <HeadphonesIcon className="h-10 w-10" />,
      link: "#",
    },
    {
      id: 3,
      title: "Fly Safe",
      description: "Learn about safe and responsible drone operation",
      icon: <User className="h-10 w-10" />,
      link: "#",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {supportItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center">
              <div className="mb-4 text-gray-700">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a href={item.link} className="text-blue-600 hover:underline">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;