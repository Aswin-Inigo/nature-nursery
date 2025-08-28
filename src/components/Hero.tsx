import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful indoor plants in modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-nature opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Floating Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-4 plant-float">
              <Leaf className="h-12 w-12 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 plant-grow">
            Bring Nature
            <span className="block gradient-hero bg-clip-text text-transparent">
              Into Your Home
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-background/80 mb-8 max-w-2xl mx-auto text-balance">
            Discover our curated collection of beautiful indoor and outdoor plants 
            that will transform your space into a green oasis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Explore Plants
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/90 backdrop-blur-sm border-background/30 text-foreground hover:bg-background">
              Plant Care Guide
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 hover-lift">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Plant Varieties</div>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 hover-lift">
              <div className="text-2xl font-bold text-primary">10k+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 hover-lift col-span-2 md:col-span-1">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Plant Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-background/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;