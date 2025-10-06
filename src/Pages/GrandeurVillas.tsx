import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, MapPin, Bed, Bath, Car, Trees, Shield, Wifi, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GrandeurVillas = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const villaFeatures = [
    {
      icon: Bed,
      title: "3-4 BHK Villas",
      description: "Spacious bedrooms with premium fittings and modern interiors"
    },
    {
      icon: Bath,
      title: "Premium Bathrooms",
      description: "Luxury bathroom fixtures with designer fittings"
    },
    {
      icon: Car,
      title: "2-Car Parking",
      description: "Covered parking space for each villa"
    },
    {
      icon: Trees,
      title: "Private Garden",
      description: "Beautiful landscaped garden area for each villa"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Gated community with round-the-clock security"
    },
    {
      icon: Wifi,
      title: "Smart Home Ready",
      description: "Pre-wired for smart home automation systems"
    }
  ];

  const amenities = [
    "Swimming Pool",
    "Clubhouse", 
    "Gymnasium",
    "Children's Play Area",
    "Jogging Track",
    "Landscaped Gardens",
    "Power Backup",
    "Water Treatment Plant",
    "Community Hall",
    "Tennis Court",
    "Basketball Court",
    "Yoga Deck"
  ];

  const handleGoBack = () => {
    window.history.back();
  };

  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

return (
  <>
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />

    {/* Hero Section - Matching main page theme */}
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-primary to-primary-glow">
      {/* Background Pattern - Same as main page */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-white/5 rounded-full animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${-20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + (i * 0.3)}s`
            }}
          />
        ))}
      </div>
      {}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={handleGoBack}
            className="text-white hover:bg-white/20 flex items-center gap-2 mb-8 transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Grandeur <span className="text-primary" style={{ WebkitTextStroke: '2px white' }}>Villas</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay max-w-3xl mx-auto">
          Experience luxury living in our premium villa community designed for modern families
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2">
          <Button 
            size="sm" 
            onClick={handleBookNow}
            className="bg-primary hover:bg-primary/90 sm:size-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            Book Your Villa Now
          </Button>
          <Button 
            size="sm" 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black sm:size-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
          >
            Download Brochure
          </Button>
        </div>
      </div>
    </section>

    {/* Villa Features Section - Black background theme */}
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            Premium Villa Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every villa is designed with premium features and modern amenities for comfortable living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {villaFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-gray-900 border-gray-800 hover:border-primary/20 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

      {/* Project Highlights - Dark theme */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-white/5 rounded-full animate-float"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${-10 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + (i * 0.4)}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Premium Villa Community
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Grandeur Villas offers an exclusive collection of luxury villas designed for those who 
                appreciate the finer things in life. Each villa is thoughtfully crafted with modern 
                architecture, premium materials, and attention to detail that sets new standards for 
                luxury living in Khammam.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-white">Prime location in Khammam with excellent connectivity</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-white">RERA approved project with clear documentation</span>
                </div>
                <div className="flex items-center">
                  <Trees className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-white">60% green spaces and landscaped gardens</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="text-white">Premium construction with high-quality materials</span>
                </div>
              </div>
              <Button 
                onClick={handleBookNow}
                className="bg-white text-primary hover:bg-white/90 shadow-xl transition-all duration-300"
              >
                Schedule Site Visit
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                  <p className="text-white/80">Premium Villas</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">15+</h4>
                  <p className="text-white/80">World-class Amenities</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">24/7</h4>
                  <p className="text-white/80">Security & Safety</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 backdrop-blur-md">
                <CardContent className="p-6 text-center">
                  <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
                  <p className="text-white/80">Power Backup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section - Black theme */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              World-Class Amenities
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Enjoy a lifestyle of luxury with our comprehensive range of amenities designed for your comfort and convenience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity, index) => (
              <Card 
                key={index}
                className="bg-gray-900 border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:scale-105"
              >
                <CardContent className="p-4 text-center">
                  <p className="text-white font-medium text-sm md:text-base">
                    {amenity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* CTA Section - Same as footer theme */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-glow text-white relative overflow-hidden">
        {/* Background Pattern - Same as footer */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 bg-white/5 rounded-full animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${-20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + (i * 0.3)}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Luxury Living?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss this opportunity to own a premium villa in one of Khammam's most sought-after locations. 
            Book your site visit today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="sm" 
              onClick={handleBookNow}
              className="bg-white text-primary hover:bg-white/90 sm:size-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Book Site Visit Now
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary sm:size-lg text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            >
              Download Complete Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};

export default GrandeurVillas;