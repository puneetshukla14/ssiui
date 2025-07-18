import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const mainMenuItems = [
    { text: "Camera Drones", url: "#", submenu: "drones" },
    { text: "Handheld", url: "#", submenu: "handheld" },
    { text: "Power", url: "#", submenu: "power" },
    { text: "Enterprise", url: "#", submenu: "enterprise" },
    { text: "Agriculture", url: "#", submenu: "agriculture" },
    { text: "DJI Delivery", url: "#", submenu: "delivery" },
    { text: "Drive System", url: "#", submenu: "drive" },
  ];

  const secondaryMenuItems = [
    { text: "SkyPixel", url: "#" },
    { text: "DJI Forum", url: "#" },
    { text: "Media Center", url: "#" },
    { text: "DJI Trust Center", url: "#" },
    { text: "DJI Blog", url: "#" },
    { text: "Careers", url: "#" },
    { text: "Support", url: "#" },
    { text: "Where to Buy", url: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setActiveSubmenu(null);
    }
  };

  const toggleSubmenu = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Announcement bar */}
      <div className="bg-black text-white text-xs py-1 px-4 text-center">
        Virtual Flight is now available - A must try for beginners! Download the DJI Virtual app today and experience the thrill of flying.
        <a href="#" className="text-blue-400 ml-2 hover:underline">Download »</a>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="mr-8">
            <svg width="32" height="18" viewBox="0 0 32 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.9 9C31.9 4.03 27.866 0 22.9 0H9.1C4.134 0 0.1 4.03 0.1 9C0.1 13.97 4.134 18 9.1 18H22.9C27.866 18 31.9 13.97 31.9 9Z" fill="#000000"/>
              <path d="M20.5 9C20.5 6.51 18.49 4.5 16 4.5C13.51 4.5 11.5 6.51 11.5 9C11.5 11.49 13.51 13.5 16 13.5C18.49 13.5 20.5 11.49 20.5 9Z" fill="#FFFFFF"/>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {mainMenuItems.map((item) => (
              <a
                key={item.text}
                href={item.url}
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                {item.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-gray-700 hover:text-black">
            <Search size={20} />
          </button>
          <button className="hidden md:block text-gray-700 hover:text-black">
            <User size={20} />
          </button>
          <button className="text-gray-700 hover:text-black">
            <ShoppingCart size={20} />
          </button>
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
            Store
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 hover:text-black"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 overflow-y-auto transition-transform duration-300 lg:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-4 space-y-6 pt-20">
          {/* Main menu items */}
          <div className="space-y-2">
            {mainMenuItems.map((item) => (
              <div key={item.text}>
                <div 
                  className="flex justify-between items-center py-2 border-b border-gray-200"
                  onClick={() => toggleSubmenu(item.submenu)}
                >
                  <a href={item.url} className="text-lg font-medium">{item.text}</a>
                  <span>{activeSubmenu === item.submenu ? "−" : "+"}</span>
                </div>
                {activeSubmenu === item.submenu && (
                  <div className="py-2 pl-4 space-y-2">
                    <a href="#" className="block py-1 text-gray-600">All {item.text}</a>
                    <a href="#" className="block py-1 text-gray-600">Featured Products</a>
                    <a href="#" className="block py-1 text-gray-600">New Arrivals</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Secondary menu items */}
          <div className="space-y-2 pt-4">
            {secondaryMenuItems.map((item) => (
              <a 
                key={item.text}
                href={item.url} 
                className="block py-2 text-gray-600 hover:text-black"
              >
                {item.text}
              </a>
            ))}
          </div>

          {/* Mobile actions */}
          <div className="pt-4 space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Store</Button>
            <Button variant="outline" className="w-full">Login / Register</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;