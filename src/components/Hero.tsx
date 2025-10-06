import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Check if it's a mobile device
      const isMobile = window.innerWidth <= 768;
      
      if (isMobile && video.currentTime >= 3) {
        video.pause();
        video.currentTime = 3;
      }
    };

    const handleEnded = () => {
      // For desktop, keep at last frame
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        video.currentTime = video.duration;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Welcome to <span className="text-[#2aaf83]" >SriBalaji Estates</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay max-w-2xl mx-auto">
          Find Your Dream Home with Us
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2">
          <Button 
            size="sm" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 sm:size-lg text-xs sm:text-lg px-3 sm:px-3 py-1.5 sm:py-1.5"
          >
            Book Now 
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white text-white hover:bg-white hover:text-black sm:size-lg text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-3"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;