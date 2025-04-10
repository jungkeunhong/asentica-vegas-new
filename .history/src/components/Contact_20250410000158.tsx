import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactInfo = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
  <div className="flex gap-3 items-start">
    <div className="p-3 rounded-full bg-asentica-gold/10 text-asentica-gold">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg text-asentica-brown mb-1">{title}</h3>
      <div className="text-foreground/70">{children}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-asentica-brown">Get in Touch</h2>
          <p className="paragraph max-w-2xl mx-auto">
            Ready to elevate your medspa's experience? Fill out the form below and our experts will get back to you within 24 hours.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="border-asentica-beige/30 shadow-lg">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-asentica-beige-light p-8 rounded-xl">
              <h3 className="text-2xl font-cormorant text-asentica-brown mb-6">Contact Information</h3>
              
              <div className="space-y-8">
                <ContactInfo icon={<Phone className="h-5 w-5" />} title="Phone">
                  <a href="tel:+1234567890" className="hover:text-asentica-gold transition-colors">
                    +1 (234) 567-890
                  </a>
                </ContactInfo>
                
                <ContactInfo icon={<Mail className="h-5 w-5" />} title="Email">
                  <a href="mailto:info@asentica.com" className="hover:text-asentica-gold transition-colors">
                    info@asentica.com
                  </a>
                </ContactInfo>
                
                <ContactInfo icon={<MapPin className="h-5 w-5" />} title="Office">
                  <address className="not-italic">
                    123 Luxury Lane, Suite 500<br />
                    Las Vegas, NV 89101
                  </address>
                </ContactInfo>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium text-lg text-asentica-brown mb-3">Business Hours</h4>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;