import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { useAnalytics } from "@/hooks/use-analytics";

interface ContactSuccessMessageProps {
  onReset: () => void;
}

export const ContactSuccessMessage: React.FC<ContactSuccessMessageProps> = ({ onReset }) => {
  const { trackCTAClick } = useAnalytics();
  
  const handleClick = () => {
    trackCTAClick("Submit Another Inquiry", "Contact Success");
    onReset();
  };
  
  return (
    <AnimatedSection className="bg-white/80 border border-asentica-beige rounded-lg p-8 text-center shadow-md">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="h-8 w-8 text-green-600" strokeWidth={3} />
      </div>
      
      <h3 className="text-2xl font-medium text-asentica-brown mb-4">Thank You!</h3>
      
      <p className="paragraph mb-6 max-w-md mx-auto">
        Your inquiry has been received. Our team will be in touch with you shortly to discuss how we can help grow your medspa business.
      </p>
      
      <Button onClick={handleClick} variant="outline" className="btn-secondary">
        Submit Another Inquiry
      </Button>
    </AnimatedSection>
  );
};
