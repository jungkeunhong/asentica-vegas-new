
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useAnalytics } from "@/hooks/use-analytics";
import LoadingSpinner from "../LoadingSpinner";
import { ContactFormFields } from "./ContactFormFields";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  clinicName: z.string().min(2, { message: "Clinic name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  interests: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmitSuccess }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { trackFormSubmission, trackCTAClick } = useAnalytics();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      clinicName: "",
      email: "",
      interests: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data submitted:", data);
      
      // Track form submission
      trackFormSubmission("growth-audit");
      
      // Show success state
      toast({
        title: "Success!",
        description: "We've received your inquiry and will be in touch soon.",
      });
      
      // Reset form after submission
      form.reset();
      
      // Update parent component
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitButtonClick = () => {
    trackCTAClick("Book a Free Growth Audit", "Contact Form");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ContactFormFields control={form.control} />
        
        <div>
          <Button 
            type="submit" 
            className="btn-primary w-full hover-glow"
            disabled={isSubmitting}
            onClick={handleSubmitButtonClick}
            aria-label={isSubmitting ? "Submitting form..." : "Book a Free Growth Audit"}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <LoadingSpinner size="sm" color="white" />
                <span className="ml-2">Processing...</span>
              </span>
            ) : "Book a Free Growth Audit"}
          </Button>
          <p className="text-xs text-center mt-3 text-muted-foreground">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </form>
    </Form>
  );
};
