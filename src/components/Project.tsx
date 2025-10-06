import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import granduerImage from "../assets/Granduer.png";

const Projects = () => {
  const { containerRef, visibleItems } = useStaggeredAnimation(8, 150);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "Grandeur Villas",
      description: "Luxury villa community with premium amenities",
      image: granduerImage,
      link: "/grandeur-villas", 
      isInternal: true
    },
    {
      title: "Project 2",
      description: "Premium residential plots with modern infrastructure",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Project 2",
      description: "DTCP approved plots in prime location",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Project 2",
      description: "Waterfront residential development",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Project 2",
      description: "Scenic plots overlooking the lake",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Project 2",
      description: "Large scale residential community",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Suvarna Sahaja",
      description: "Affordable housing with quality construction",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Suvarna Saketh",
      description: "Commercial and residential mixed development",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Green Valley Plots",
      description: "HMDA approved residential plots",
      image: "",
      link: "#",
      isInternal: false
    },
    {
      title: "Royal Gardens",
      description: "Premium gated community",
      image: "",
      link: "#",
      isInternal: false
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, 
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.isInternal) {
      
      window.location.href = project.link;
    } else {
      // Open external link
      window.open(project.link, '_blank');
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 animate-fade-in-up">
            Our Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Sri Balaji Estates is a leading real estate company based in Khammam, Telangana.
            With a strong reputation for trust, transparency, and quality.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-primary/20 hover:border-primary/40"
            onClick={scrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg border-primary/20 hover:border-primary/40"
            onClick={scrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Scrollable Projects Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12 scroll-smooth"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE and Edge
            }}
          >
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-500 overflow-hidden border-border/50 hover:border-primary/20 hover:scale-105 cursor-pointer flex-shrink-0 w-80"
                onClick={() => handleProjectClick(project)}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="shadow-lg pointer-events-none"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(projects.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary/50 cursor-pointer transition-colors"
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * 960, // 3 cards * 320px
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Show "Swipe to see more" hint */}
        <div className="text-center mt-6 md:hidden">
          <p className="text-sm text-muted-foreground">
            ← Swipe to see more projects →
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;