import { Card, CardContent } from "../components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";
import Director from "../assets/Director.png";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 200);

  const faqs = [
    {
      id: "1",
      question: "How much does a business plan cost?",
      answer: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital Nanotech immersion along the information highway will close the loop on focusing solely on the bottom taking seamless key performance indicators offline to maximise the long tail. Keeping your eye."
    },
    {
      id: "2", 
      question: "Do you provide client references?",
      answer: "We are dedicated in creating added value for our customers by implementing modern technology in our work. We believe that the services, offered by our company, should satisfy the high expectations of our customers."
    },
    {
      id: "3",
      question: "Can I contact some of your former clients?",
      answer: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry technologies."
    },
    {
      id: "4",
      question: "What are the payment terms?",
      answer: "Our diverse portfolio represents decades of construction experience backed by a passion for quality, outstanding client service and the latest industry technologies."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={Director}
              alt="Director"
              className="w-full h-64 md:h-96 lg:h-full object-cover rounded-2xl shadow-card animate-fade-in-left hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* FAQ Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in-right">
              Why choose us?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}></div>

            <div ref={containerRef} className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={faq.id} 
                  className={`border-border/50 overflow-hidden hover:shadow-hover transition-all duration-300 hover:scale-105 ${
                    visibleItems[index] ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Collapsible open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                    <CollapsibleTrigger className="w-full">
                      <CardContent className="p-4 md:p-6 flex items-center justify-between hover:bg-muted/50 transition-all duration-300 group">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground text-left group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <ChevronDown 
                          className={`h-5 w-5 text-primary transition-all duration-300 flex-shrink-0 ml-4 group-hover:scale-110 ${
                            openItems.includes(faq.id) ? 'rotate-180' : ''
                          }`}
                        />
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="px-4 md:px-6 pb-4 md:pb-6">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;