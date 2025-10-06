import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61577604975741", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/sribalajiestates", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/sribalajiestates_official", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/sribalajiestates", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "HMDA Plots",
    "DTCP Plots", 
    "Farm Land",
    "Residential Plots",
    "Commercial Plots"
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Sri Balaji Estates Logo" 
              className="h-12 w-auto object-contain filter brightness-0 invert"
            />
            <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
              Building tomorrow's communities with premium residential and commercial plots in Hyderabad's prime locations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/90 hover:text-white transition-colors duration-300 text-sm md:text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/90 text-sm md:text-base">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                  H.No: 15-11-162, Near ACP Office, V.D.O's Colony, Khammam, Telangana. Pin Code: 507001
                </p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@sribalajiestates.com"
                  className="text-primary-foreground/90 hover:text-white transition-colors text-sm md:text-base"
                >
                  info@sribalajiestates.com
                </a>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a 
                  href="tel:+918448448558"
                  className="text-primary-foreground/90 hover:text-white transition-colors text-sm md:text-base"
                >
                  +91 82476 65909
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/90 text-sm text-center md:text-left mb-4 md:mb-0">
              © 2025 Sri Balaji Estates & Constructions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/90 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;