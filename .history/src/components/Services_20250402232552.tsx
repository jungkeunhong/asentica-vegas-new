import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { BrainCircuit, Layers, HeartHandshake, Check } from "lucide-react";

// Creating visual elements for services
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  bulletPoints,
  imageSrc,
  delay = 0
}: { 
  icon: React.ElementType; 
  title: string; 
  bulletPoints: string[];
  imageSrc: string;
  delay?: number;
}) => (
  <AnimatedSection delay={delay}>
    <Card className="bg-white border-asentica-beige hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
      <CardHeader className="pb-2 relative">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-asentica-gold/30 to-asentica-gold/10 flex items-center justify-center mb-4 shadow-inner absolute -top-6 left-4">
          <Icon className="text-asentica-brown h-6 w-6" />
        </div>
        <div className="pt-6">
          <CardTitle className="text-xl text-asentica-brown">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <CardDescription className="flex items-start gap-2 text-foreground/80">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-asentica-gold" />
                <span>{point}</span>
              </CardDescription>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </AnimatedSection>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-asentica-beige-light relative">
      <div className="absolute inset-0 bg-spa-pattern opacity-5"></div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-asentica-brown">What Is <span className="font-cormorant tracking-tighter font-light text-4xl">Asentica</span>?</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={BrainCircuit}
            title="Your Client Booking Engine"
            bulletPoints={[
              "AI-powered intake and matching based on skin profile, income, and treatment intent",
              "Pre-configured messaging and conversion sequences",
              "Optional influencer/content integration for visibility boost"
            ]}
            imageSrc="https://source.unsplash.com/random/800x600/?data+visualization+dashboard"
            delay={0.1}
          />
          
          <ServiceCard 
            icon={Layers}
            title="Best Treatments at Best Prices"
            bulletPoints={[
              "We source 27+ vetted products across categories including skin boosters, exosomes, fat dissolvers, and derma-cosmetics",
              "Clinically proven, dermatologist-endorsed",
              "Delivered within 7–10 days, up to 40% lower than domestic suppliers"
            ]}
            imageSrc="https://source.unsplash.com/random/800x600/?luxury+korean+skincare"
            delay={0.3}
          />
          
          <ServiceCard 
            icon={HeartHandshake}
            title="A-to-Z Operational Support"
            bulletPoints={[
              "Import/export documentation and customs clearance",
              "Product usage education, protocols, and legal reviews",
              "HIPAA-safe client intake tools (optional)"
            ]}
            imageSrc="https://source.unsplash.com/random/800x600/?luxury+consultation"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
