import React, { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { ContactForm } from "./contact/ContactForm";
import { ContactSuccessMessage } from "./contact/ContactSuccessMessage";
import { ContactFormSkeleton } from "./contact/ContactFormSkeleton";
const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate form loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleSubmitSuccess = () => {
    setIsSuccess(true);
  };
  const handleReset = () => {
    setIsSuccess(false);
  };
  return <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      {/* Luxury background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-asentica-beige-light z-0"></div>
      <div className="absolute inset-0 bg-spa-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 id="contact-heading" className="heading-lg mb-4 text-asentica-brown">Ready to Grow Your Medspa?</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Schedule a free consultation with our team of medspa growth specialists.
            </p>
          </AnimatedSection>

          {isSuccess ? <ContactSuccessMessage onReset={handleReset} /> : isLoading ? <ContactFormSkeleton /> : <AnimatedSection className="backdrop-blur-sm bg-white/70 border border-asentica-beige p-8 rounded-lg shadow-lg">
                <ContactForm onSubmitSuccess={handleSubmitSuccess} />
              </AnimatedSection>}
          
          {/* Contact visual element */}
          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-asentica-brown/10 flex items-center justify-center mb-2">
                  <img src="/email-icon.svg" alt="Email" className="w-8 h-8 opacity-60" />
                </div>
                <span className="text-sm text-asentica-brown/80">support@asentica.com</span>
              </div>
              
              <div className="hidden sm:block w-px h-16 bg-asentica-beige"></div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-asentica-brown/10 flex items-center justify-center mb-2">
                  <img src="/phone-icon.svg" alt="Phone" className="w-8 h-8 opacity-60" />
                </div>
                <span className="text-sm text-asentica-brown/80">+1 (510) 812-7597</span>
              </div>
              
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default Contact;