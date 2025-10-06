import { Card, CardContent } from "../components/ui/card";
import { MapPin, Home, Calculator, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Project Planning",
      description: "International supply chains involves challenging regulations."
    },
    {
      icon: Home,
      title: "Interior Design",
      description: "International supply chains involves challenging regulations."
    },
    {
      icon: Calculator,
      title: "Budget Planning",
      description: "International supply chains involves challenging regulations."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "International supply chains involves challenging regulations."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Have Done for This Years
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that the services, offered by our company, should satisfy the high expectations 
            of our customers. We are dedicated in creating added value for our customers by implementing 
            modern technology in our work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 text-center border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;