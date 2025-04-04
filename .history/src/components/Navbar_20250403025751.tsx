
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className={`text-2xl ${scrolled ? 'text-asentica-brown' : 'text-white'} flex items-center font-cormorant tracking-tighter`}>
              Asentica
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <button 
                onClick={() => scrollToSection('services')} 
                className={`${scrolled ? 'text-asentica-brown/90 hover:text-asentica-brown' : 'text-white/90 hover:text-white'} transition-colors`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('approach')} 
                className={`${scrolled ? 'text-asentica-brown/90 hover:text-asentica-brown' : 'text-white/90 hover:text-white'} transition-colors`}
              >
                Our Approach
              </button>
              <button 
                onClick={() => scrollToSection('results')} 
                className={`${scrolled ? 'text-asentica-brown/90 hover:text-asentica-brown' : 'text-white/90 hover:text-white'} transition-colors`}
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`${scrolled ? 'text-asentica-brown/90 hover:text-asentica-brown' : 'text-white/90 hover:text-white'} transition-colors`}
              >
                Contact
              </button>
            </div>
            <Button 
              className="bg-asentica-brown text-white hover:bg-asentica-brown/90 px-6 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${scrolled ? 'text-asentica-brown' : 'text-white'}`} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors text-left"
                onClick={() => scrollToSection('services')}
              >
                Services
              </button>
              <button 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors text-left"
                onClick={() => scrollToSection('approach')}
              >
                Our Approach
              </button>
              <button 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors text-left"
                onClick={() => scrollToSection('results')}
              >
                About Us
              </button>
              <button 
                className="text-asentica-brown/90 hover:text-asentica-brown transition-colors text-left"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
              <Button 
                className="bg-asentica-brown text-white hover:bg-asentica-brown/90 w-full"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
