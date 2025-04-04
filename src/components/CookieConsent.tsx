
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookie-consent");
    if (!consentGiven) {
      // Wait a bit before showing the notice
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white shadow-lg border-t border-asentica-beige animate-fade-in">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-foreground/80">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="text-xs sm:text-sm border-asentica-brown text-asentica-brown"
            onClick={() => setVisible(false)}
          >
            Decline
          </Button>
          <Button 
            className="text-xs sm:text-sm bg-asentica-brown text-white hover:bg-asentica-brown/90"
            onClick={acceptCookies}
          >
            Accept
          </Button>
          <button 
            onClick={() => setVisible(false)} 
            className="text-gray-400 hover:text-gray-600" 
            aria-label="Close cookie notice"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
