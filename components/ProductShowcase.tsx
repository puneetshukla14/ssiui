import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "DJI FLIP",
      subtitle: "Open New Possibilities",
      image: "https://www-cdn.djiits.com/cms/uploads/590b2d29ad143c7d60afc8987df9811e.svg",
      backgroundImage: "https://www-cdn.djiits.com/cms/uploads/d4e8e295ca6f4e4146b744943ea6a9fd.jpg",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 2,
      title: "OSMO ACTION 5 PRO",
      subtitle: "Be All In",
      image: "https://www-cdn.djiits.com/cms/uploads/1d1d238de8e03f204d6319e3b3f772fa.svg",
      backgroundImage: "https://picsum.photos/id/1/800/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 3,
      title: "OSMO MOBILE 7 SERIES",
      subtitle: "7 Days Of Steady Shots",
      image: "https://www-cdn.djiits.com/cms/uploads/f96569e53307cad64f824f940a968c6c.svg",
      backgroundImage: "https://picsum.photos/id/2/800/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
    {
      id: 4,
      title: "Compare Camera Drones",
      subtitle: "Get personalized recommendations and compare specs easily",
      backgroundImage: "https://picsum.photos/id/3/800/600",
      learnMoreLink: "#",
      buyNowLink: "#",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative h-[400px] overflow-hidden rounded-lg"
              style={{
                backgroundImage: `url(${product.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-8 mb-2"
                  />
                ) : (
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                )}
                <p className="text-lg mb-4">{product.subtitle}</p>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <a href={product.learnMoreLink}>Learn More</a>
                  </Button>
                  {product.buyNowLink && (
                    <Button asChild className="bg-white text-black hover:bg-gray-200">
                      <a href={product.buyNowLink}>Buy Now</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;