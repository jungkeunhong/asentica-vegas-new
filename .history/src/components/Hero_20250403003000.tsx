import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useAnalytics } from "@/hooks/use-analytics";
import AnimatedSection from "./AnimatedSection";
import heroImage from "../assets/hero-image.jpg"; // This will be imported during build
import diagram from "../assets/diagram-placeholder.png"; // This will be imported during build
import { motion } from "framer-motion";
import { GradientText } from "@/components/ui/gradient-text";
import videoSrc from "../assets/0214.mp4"; // Import the video directly

const Hero = () => {
  const { trackCTAClick } = useAnalytics();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = [
    "Korean treatments",
    "AI Client Matching",
    "A-to-Z Support"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Book a Free Growth Audit", "Hero Section");
  };

  const handleSecondaryClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    trackCTAClick("Explore Our Services", "Hero Section");
  };

  // Parallax effect styles
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.2}px)`,
  };

  return (
    <section aria-labelledby="hero-heading" className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden">
      {/* Background with luxury gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-asentica-brown to-asentica-brown/80 z-0">
        <div className="absolute inset-0 bg-spa-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-asentica-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-asentica-beige/10 rounded-full blur-2xl animate-float"></div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="container-custom z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="text-white">
            <AnimatedSection>
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight mb-6">
                Unlock Medspa Growth with 
                <span className="relative flex w-full justify-start overflow-hidden text-left md:pb-4 md:pt-1">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute"
                      initial={{ opacity: 0, y: -100 }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={{
                        y: titleNumber === index ? 0 : titleNumber > index ? -150 : 150,
                        opacity: titleNumber === index ? 1 : 0
                      }}
                    >
                      <GradientText className="font-semibold">{title}</GradientText>
                    </motion.span>
                  ))}
                </span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <p className="text-lg sm:text-lg opacity-90 mb-8">
                Advanced client-matching tools meet proven Korean skincare, fillers, exosomes, and injectables — curated for high-performing medspas.

              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-asentica-gold hover:bg-asentica-gold/90 text-asentica-brown font-medium px-6 py-3 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(192,160,128,0.3)] hover:-translate-y-0.5"
                  onClick={scrollToContact}
                  aria-label="Book a Free Growth Audit - scroll to contact form"
                >
                  Book a Free Consultation
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <p className="text-sm text-asentica-beige/70 mt-6">
                Trusted by 50+ Medspas and Clinics in the U.S. and Korea
              </p>
            </AnimatedSection>
          </div>
          
          {/* Right column - Visual */}
          <AnimatedSection delay={0.3} className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              {/* Premium spa video with cinemagraph effect */}
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => {
                    console.error('Video error:', e);
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-tr from-asentica-brown/30 to-transparent transition-all duration-500"></div>
              </div>
              
              {/* Overlay diagram showing the connection */}
              <div className="absolute bottom-0 left-0 w-[400px] ml-6 p-6 bg-gradient-to-t from-asentica-brown to-transparent">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="35" stroke="#2B1608" strokeWidth="2"/>
                        <path d="M50 30 L50 70" stroke="#2B1608" strokeWidth="2"/>
                        <path d="M30 50 L70 50" stroke="#2B1608" strokeWidth="2"/>
                        <circle cx="50" cy="50" r="10" stroke="#2B1608" strokeWidth="2"/>
                        <circle cx="35" cy="35" r="2" fill="#2B1608"/>
                        <circle cx="65" cy="65" r="2" fill="#2B1608"/>
                      </svg>
                    </div>
                    <h2 className="text-asentica-gold/90 text-5xl font-bold">500<span className="text-3xl">+</span></h2>
                  </div>
                  <p className="text-asentica-gold/90 text-xl font-medium">Medspas Helped<br />and Coached</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={0.8} className="absolute left-0 right-0 bottom-8 text-center z-10">
        <a 
          href="#services" 
          className="inline-block text-white hover:text-asentica-gold transition-colors"
          aria-label="Scroll down to services section"
        >
          <span className="block mb-2 text-sm">Discover More</span>
          <ArrowDown className="mx-auto animate-bounce" aria-hidden="true" size={24} />
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
