import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-4xl mx-auto">
          <Card className={`shadow-card border-border/50 transition-all duration-700 ${
            isVisible ? 'animate-scale-in opacity-100' : 'opacity-0'
          }`}>
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 transition-all duration-700 ${
                  isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '0.2s' }}>
                  About Sri Balaji Estates
                </h2>
                
                <div className={`w-24 h-1 bg-gradient-primary mx-auto mb-8 transition-all duration-700 ${
                  isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
                }`} style={{ animationDelay: '0.4s' }}></div>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                 Sri Balaji Estates emerged as a trusted name in real estate with a strong focus on residential,
                commercial, and open plot developments. Since its inception, the company has been driven by a commitment
                 to quality, transparency, and customer satisfaction. Under the visionary leadership of Mr. Vathsavai Ravi, 
                 who brings decades of hands-on expertise in the real estate sector, Sri Balaji Estates has successfully
                 delivered numerous high-value projects. His deep understanding of market dynamics and dedication to
                 excellence have enabled the company to offer premium housing solutions with world-class infrastructure
                 at competitive prices. With a reputation built on trust and integrity, Sri Balaji Estates continues to 
                 shape vibrant communities and deliver lasting value to its customers.
                </p>
                
                <Button className="bg-gradient-primary shadow-hover transition-all duration-300 group">
                  More Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;