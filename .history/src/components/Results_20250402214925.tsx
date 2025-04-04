
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const Results = () => {
  return (
    <section id="results" className="py-20 bg-asentica-brown text-white relative">
      <div className="absolute inset-0 bg-spa-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection animationType="slide-in-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">We Know Clients. And You.</h2>
            <p className="text-lg text-white/90 mb-8">
              Built by Korean and U.S. aesthetic professionals, our team blends global beauty innovation with proven medspa operations.   We help you differentiate through superior product sourcing and client acquisition—so you can focus on delivering great outcomes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedSection delay={0.2}>
                <Card className="bg-white/10 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-gold mb-2">94%</div>
                    <p className="text-sm text-white/80">Client retention rate</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <Card className="bg-white/10 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-gold mb-2">48%</div>
                    <p className="text-sm text-white/80">Average revenue increase</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <Card className="bg-white/10 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-gold mb-2">3.2x</div>
                    <p className="text-sm text-white/80">Client acquisition</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.5}>
                <Card className="bg-white/10 border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-asentica-gold mb-2">40%</div>
                    <p className="text-sm text-white/80">Lower Product Cost</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animationType="slide-in-right" className="relative">
            <div className="relative p-8 rounded-xl overflow-hidden">
              {/* Before-After comparison */}
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-xl">
                <div className="grid grid-cols-2 gap-1">
                  <div className="relative">
                    <div className="absolute top-2 left-2 px-2 py-1 bg-asentica-brown/80 text-white text-xs rounded">Before</div>
                    <img 
                      src="https://source.unsplash.com/random/400x300/?tired+skin" 
                      alt="Before treatment" 
                      className="w-full filter blur-[1px]"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 left-2 px-2 py-1 bg-asentica-gold/80 text-white text-xs rounded">After</div>
                    <img 
                      src="https://source.unsplash.com/random/400x300/?glowing+skin" 
                      alt="After treatment" 
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="bg-white text-asentica-brown p-8 rounded-xl shadow-xl">
                <div className="mb-4 text-asentica-gold">★★★★★</div>
                <p className="text-lg italic mb-6">
                  "Asentica's Korean treatments have been a game-changer. Our clients love the unique offerings, and we've seen a 40% reduction in product costs while maintaining premium quality. Their AI-driven marketing has transformed how we attract and retain clients."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://source.unsplash.com/random/100x100/?professional+woman+portrait" 
                      alt="Dr. Sarah Kim" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Dr. Sarah Kim</div>
                    <div className="text-sm text-asentica-brown/70">Radiance Aesthetics, New York</div>
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

export default Results;
