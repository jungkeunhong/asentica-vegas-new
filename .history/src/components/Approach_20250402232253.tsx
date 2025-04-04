
import React from "react";
import { ChartLine, TrendingUp, Monitor } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Approach = () => {
  return (
    <section id="approach" className="py-20 bg-white relative">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-asentica-beige-light/50 to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-fluid-shape bg-no-repeat bg-contain opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-asentica-brown">Why <span className="font-cormorant tracking-tighter">Asentica</span> is Different</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedSection animationType="slide-in-left" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-asentica-gold/10 to-white/0 rounded-xl transform rotate-3"></div>
              <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-asentica-gold/30 to-asentica-beige/20 mx-auto mb-6 shadow-inner">
                  <ChartLine className="h-8 w-8 text-asentica-brown" />
                </div>
                <h3 className="text-xl font-semibold text-asentica-brown mb-4">Deliver the Right Clients to Your Door</h3>
                <p className="text-foreground/80">
                  We help you match with clients who are actively looking for what you offer—based on skincare needs, demographics, and spending behavior.
                </p>
                <div className="mt-6 pt-6 border-t border-asentica-beige">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-asentica-gold/10 to-white/0 rounded-xl transform rotate-3"></div>
              <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-asentica-gold/30 to-asentica-beige/20 mx-auto mb-6 shadow-inner">
                  <TrendingUp className="h-8 w-8 text-asentica-brown" />
                </div>
                <h3 className="text-xl font-semibold text-asentica-brown mb-4">Retain More Through Smart Engagement</h3>
                <p className="text-foreground/80">
                  Our AI tools and client community monitor signals and re-engage clients with personalized offers and post-treatment content.
                </p>
                <div className="mt-6 pt-6 border-t border-asentica-beige">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slide-in-right" delay={0.2}>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-asentica-gold/10 to-white/0 rounded-xl transform rotate-3"></div>
              <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-asentica-gold/30 to-asentica-beige/20 mx-auto mb-6 shadow-inner">
                  <Monitor className="h-8 w-8 text-asentica-brown" />
                </div>
                <h3 className="text-xl font-semibold text-asentica-brown mb-4">Select. We Source. You Scale.</h3>
                <p className="text-foreground/80">
                  We handle sourcing and validation through our advisor network across Korea and the U.S.   All products meet regulatory standards and are aligned with your positioning.
                </p>
                <div className="mt-6 pt-6 border-t border-asentica-beige">
                  <div className="flex items-center justify-center space-x-1">
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                    <div className="h-1 w-1 rounded-full bg-asentica-gold"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Approach;
