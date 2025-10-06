/*import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Farm Land Property",
      excerpt: "Welcome to Suvarnabhoomi Infra Developers, your trusted destination for farm land property for sale in...",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
      date: "June 28, 2023",
      author: "Revanth Naidu",
      category: "Real Estate"
    },
    {
      title: "HMDA Plots",
      excerpt: "Welcome to Suvarnabhoomi Infra Developers, your trusted destination for HMDA (Hyderabad Metropolitan Development Authority) approved...",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      date: "June 28, 2023",
      author: "Revanth Naidu",
      category: "Development"
    },
    {
      title: "DTCP Plots",
      excerpt: "Welcome to Suvarnabhoomi Infra Developers, your trusted destination for DTCP approved commercial and residential plots...",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
      date: "June 28, 2023",
      author: "Revanth Naidu",
      category: "Commercial"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Latest Blogs
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest news and insights from the real estate industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/20"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 transition-colors group"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-primary shadow-hover transition-all duration-300">
            View More Blogs
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;*/