import { Card, CardContent } from "../components/ui/card";
import { Building, Home, Tractor, MapPin, Users } from "lucide-react";
import hmdaPlots from "../assets/hmda-plots.jpg";
import dtcpPlots from "../assets/dtcp-plots.jpeg";
import farmLand from "../assets/farm-land.jpg";
import villas from "../assets/villas.jpg";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";

const Services = () => {
  const { containerRef, visibleItems } = useStaggeredAnimation(5, 200);
  
  const services = [
    {
      icon: Home,
      title: "HMDA Plots",
      image: hmdaPlots,
      description: "HMDA approved residential plots in prime locations"
    },
    {
      icon: Building,
      title: "DTCP Plots",
      image: dtcpPlots,
      description: "DTCP approved commercial and residential plots"
    },
    {
      icon: Tractor,
      title: "Farm land",
      image: farmLand,
      description: "Premium agricultural land for investment"
    },
    {
      icon: Building,
      title: "Villas",
      image: villas,
      description: "Newly Added Villas"
    },
  
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-hover transition-all duration-500 overflow-hidden border-border/50 hover:border-primary/20 hover:scale-105 ${
                visibleItems[index] ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <service.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-primary rounded-lg mr-3 group-hover:animate-pulse-glow transition-all duration-300">
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;