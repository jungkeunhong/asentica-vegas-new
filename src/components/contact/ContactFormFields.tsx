
import React from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./ContactForm";
import { Check } from "lucide-react";

interface ContactFormFieldsProps {
  control: Control<FormValues>;
}

export const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ control }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input 
                    id="name" 
                    placeholder="Jane Smith" 
                    {...field} 
                    aria-required="true" 
                    className={`focus:ring-2 focus:ring-asentica-gold/30 transition-shadow pr-10 ${
                      fieldState.invalid 
                        ? "border-[#ea384c] focus:border-[#ea384c]" 
                        : fieldState.isDirty 
                          ? "border-green-500 focus:border-green-500 bg-[#F2FCE2]/30" 
                          : ""
                    }`}
                  />
                </FormControl>
                {fieldState.isDirty && !fieldState.invalid && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="clinicName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="clinicName">Clinic Name</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input 
                    id="clinicName" 
                    placeholder="Glow Aesthetics" 
                    {...field} 
                    aria-required="true" 
                    className={`focus:ring-2 focus:ring-asentica-gold/30 transition-shadow pr-10 ${
                      fieldState.invalid 
                        ? "border-[#ea384c] focus:border-[#ea384c]" 
                        : fieldState.isDirty 
                          ? "border-green-500 focus:border-green-500 bg-[#F2FCE2]/30" 
                          : ""
                    }`}
                  />
                </FormControl>
                {fieldState.isDirty && !fieldState.invalid && (
                  <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                )}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor="email">Email</FormLabel>
            <div className="relative">
              <FormControl>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="jane@glowmedical.com" 
                  {...field} 
                  aria-required="true" 
                  className={`focus:ring-2 focus:ring-asentica-gold/30 transition-shadow pr-10 ${
                    fieldState.invalid 
                      ? "border-[#ea384c] focus:border-[#ea384c]" 
                      : fieldState.isDirty 
                        ? "border-green-500 focus:border-green-500 bg-[#F2FCE2]/30" 
                        : ""
                  }`}
                />
              </FormControl>
              {fieldState.isDirty && !fieldState.invalid && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="interests"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor="interests">Areas of Interest</FormLabel>
            <div className="relative">
              <FormControl>
                <Input 
                  id="interests"
                  placeholder="Marketing, Products, Training, etc." 
                  {...field} 
                  className={`focus:ring-2 focus:ring-asentica-gold/30 transition-shadow pr-10 ${
                    fieldState.invalid 
                      ? "border-[#ea384c] focus:border-[#ea384c]" 
                      : fieldState.isDirty 
                        ? "border-green-500 focus:border-green-500 bg-[#F2FCE2]/30" 
                        : ""
                  }`}
                />
              </FormControl>
              {fieldState.isDirty && !fieldState.invalid && (
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="message"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel htmlFor="message">Message</FormLabel>
            <div className="relative">
              <FormControl>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your medspa and what you're looking to achieve..." 
                  className={`min-h-[120px] focus:ring-2 focus:ring-asentica-gold/30 transition-shadow pr-10 ${
                    fieldState.invalid 
                      ? "border-[#ea384c] focus:border-[#ea384c]" 
                      : fieldState.isDirty 
                        ? "border-green-500 focus:border-green-500 bg-[#F2FCE2]/30" 
                        : ""
                  }`}
                  {...field} 
                  aria-required="true"
                />
              </FormControl>
              {fieldState.isDirty && !fieldState.invalid && (
                <Check className="absolute right-3 top-[1.25rem] h-4 w-4 text-green-500" />
              )}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
