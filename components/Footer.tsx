import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const productCategories = [
    { title: "Camera Drones", items: ["Consumer", "Professional", "Enterprise", "Components"] },
    { title: "Where to Buy", items: ["DJI Online Store", "Flagship Stores", "Authorized Retailers", "Store Locator"] },
    { title: "Fly Safe", items: ["Fly Safe", "Fly Safe Geo Zone Map", "Fly Safe Quiz", "Fly Safe Academy"] },
    { title: "Explore", items: ["Media Center", "SkyPixel", "DJI Forum", "DJI Blog"] },
    { title: "Community", items: ["SkyPixel", "DJI Forum", "DJI Blog", "Developer"] },
  ];

  const supportLinks = [
    { title: "Support", items: ["Product Support", "Repair Services", "Help Center", "After-Sales Service Policies"] },
    { title: "Subscribe", items: ["Subscribe to DJI emails to receive the latest news about products, promotions, and more."] },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-gray-400 hover:text-white text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Support section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-800 pt-8 mb-12">
          {supportLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              {section.title === "Subscribe" ? (
                <div>
                  <p className="text-gray-400 text-sm mb-4">{section.items[0]}</p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none w-full"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">
                      Subscribe
                    </button>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="/" className="inline-block">
                <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.9 9C31.9 4.03 27.866 0 22.9 0H9.1C4.134 0 0.1 4.03 0.1 9C0.1 13.97 4.134 18 9.1 18H22.9C27.866 18 31.9 13.97 31.9 9Z" fill="#FFFFFF"/>
                  <path d="M20.5 9C20.5 6.51 18.49 4.5 16 4.5C13.51 4.5 11.5 6.51 11.5 9C11.5 11.49 13.51 13.5 16 13.5C18.49 13.5 20.5 11.49 20.5 9Z" fill="#000000"/>
                </svg>
              </a>
            </div>
            
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DJI All Rights Reserved.
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-500 text-xs">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-400">Terms of Use</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-400">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;