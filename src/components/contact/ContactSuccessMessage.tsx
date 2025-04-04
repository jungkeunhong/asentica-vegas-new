
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

interface ContactSuccessMessageProps {
  onReset: () => void;
}

export const ContactSuccessMessage: React.FC<ContactSuccessMessageProps> = ({ onReset }) => {
  return (
    <AnimatedSection className="text-center p-8 bg-white rounded-lg shadow-sm" role="alert" aria-live="polite">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
        <CheckCircle2 className="h-8 w-8 text-green-600" aria-hidden="true" />
      </div>
      <h3 className="heading-md mb-4">Thank You!</h3>
      <p className="paragraph mb-6">
        We've received your information and will be in touch shortly to discuss how we can help grow your medspa business.
      </p>
      <Button 
        onClick={onReset}
        className="btn-primary hover-glow"
      >
        Submit Another Inquiry
      </Button>
    </AnimatedSection>
  );
};
