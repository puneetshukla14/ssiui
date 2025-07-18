import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CookieBannerProps {
  onClose: () => void;
}

const CookieBanner = ({ onClose }: CookieBannerProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <p className="text-sm text-gray-700 mb-2">
              We use cookies and similar technologies to operate and improve our site, services, and marketing. You can manage your preferences by clicking "Cookie Preferences" or accept all cookies by clicking "Accept".
            </p>
            {showDetails && (
              <div className="mt-4 text-sm text-gray-600">
                <h4 className="font-bold mb-2">Cookie Types:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Essential cookies: Required for basic site functionality</li>
                  <li>Analytics cookies: Help us improve our website by collecting information</li>
                  <li>Marketing cookies: Used to deliver relevant advertisements</li>
                  <li>Preference cookies: Allow the website to remember your preferences</li>
                </ul>
              </div>
            )}
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:underline text-sm mt-2"
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                // Logic for cookie preferences
                console.log("Cookie preferences clicked");
              }}
            >
              Cookie Preferences
            </Button>
            <Button 
              size="sm"
              onClick={onClose}
            >
              Accept
            </Button>
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 sm:hidden"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;