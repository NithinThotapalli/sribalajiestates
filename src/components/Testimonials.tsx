import { Card, CardContent } from "../components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Divya Siri",
      text: "It's perfect decision for me to choose Suvarnabhoomi Infra Developers they have very nice and affordable approved residential plots at good location in Hyderabad. Their project have beautiful green space and connectivity to the most of the business hubs. Excellent transparency and faith is maintained by the team while dealing with their customers.",
      rating: 5
    },
    {
      name: "Vijayendra Sunku",
      text: "Hi, I have visited the project Vahini Suvarna Sampada - I am very much happy with the development and amenities. Good surrounding area with greenery and a good budget so as per my experience it is the best gated community plots project and I'm going to book the plot in Vahini Suvarna Sampada.",
      rating: 5
    },
    {
      name: "Akshitha Akki",
      text: "I have a lot of experience dealing with suvarnabhoomi infra in real estate transactions. They were courteous and professional, and the documents and processing were handled in an open and transparent manner.",
      rating: 5
    },
    {
      name: "Sujatha Lakshmi",
      text: "I purchased a plot in suvarna kuteer #162. Thanks for quick response when i needed information on plot and area wise. I really had a good customer experience from Suvarnabhoomi infra.",
      rating: 5
    },
    {
      name: "Madhukar Reddy",
      text: "Thanks for providing valuable information on your venture, explaining me everything in detail and helped me with complete process of documentation. I am happy to share this experience.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 border-border/50 hover:border-primary/20 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary mr-3 flex-shrink-0" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-accent fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed flex-grow mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm md:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;