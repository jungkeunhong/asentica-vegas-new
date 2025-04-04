
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Approach from "../components/Approach";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Add keyboard navigation support
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip to content functionality
      if (e.key === 'Tab' && e.altKey) {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          e.preventDefault();
          mainContent.focus();
          mainContent.scrollIntoView();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Asentica | AI-Powered Marketing & Growth Solutions for Medspas" 
        description="Boost your medspa's revenue with Asentica's AI marketing tools, exclusive treatments, and full-service growth support. Book a free consultation today."
      />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
          <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
