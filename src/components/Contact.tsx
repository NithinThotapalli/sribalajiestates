import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useState } from "react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mldljgdz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitMessage("Thank you for your message! We'll get back to you soon.");
        form.reset();
      } else {
        setSubmitMessage("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Oops! There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const locations = [
    {
      city: "Khammam",
      address: "H.No: 15-11-162, Near ACP Office, V.D.O's Colony, Khammam, Telangana. Pin Code: 507001",
      email: "info@sreebalajiestates.com",
      phone: "+91 82476 65909"
    },
    /*{
      //city: "Vishakapatnam",
      address: "D.No:50-92-4, Flat No.201, 2nd floor, Ekadanta Nilayam, opp Vijaya Rama Apartment, Near Gurudhwara, Santhipuram, Vishakapatnam, Andhra Pradesh. Pin Code: 530016",
      email: "info@suvarnabhoomiinfra.com",
      phone: "040 4857 1889"
    }*/
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-card">
      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            BOOK YOUR PLOTS
          </h2>
          <div className={`w-24 h-1 bg-gradient-primary mx-auto mb-6 transition-all duration-700 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}></div>
          <p className={`text-base md:text-lg text-muted-foreground transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`} style={{ animationDelay: '0.4s' }}>
            Bookings are Open for All Plots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {locations.map((location, index) => (
              <Card 
                key={index} 
                className={`border-border/50 hover:shadow-card transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 flex items-center">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary mr-2" />
                    {location.city}
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {location.address}
                    </p>
                    
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <a 
                        href={`mailto:${location.email}`}
                        className="text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                      >
                        {location.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <a 
                        href={`tel:${location.phone.replace(/\s/g, '')}`}
                        className="text-primary hover:text-primary/80 transition-colors text-sm md:text-base"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card className="border-border/50 shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                Get a FREE Consultation!
              </h3>
              
              {submitMessage && (
                <div className={`mb-4 p-3 rounded-md text-sm ${
                  submitMessage.includes("Thank you") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}>
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    className="bg-background" 
                    required 
                  />
                  <Input 
                    name="email"
                    placeholder="Your Email" 
                    type="email" 
                    className="bg-background" 
                    required 
                  />
                </div>
                
                <Input 
                  name="phone"
                  placeholder="Phone Number" 
                  type="tel" 
                  className="bg-background" 
                  required 
                />
                <Input 
                  name="subject"
                  placeholder="Subject" 
                  className="bg-background" 
                  required 
                />
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4} 
                  className="bg-background resize-none"
                  required 
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary shadow-hover transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="border-border/50 shadow-card">
          <CardContent className="p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Get in Touch With Us and We'll Help You!
            </h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              We believe that the services, offered by our company, should satisfy the high expectations 
              of our customers. We are dedicated in creating added value for our customers by implementing 
              modern technology in our work. That is why the desire of constant improvement is the driving 
              force behind our transportation business.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;