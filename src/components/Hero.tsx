import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-ewaste.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="E-waste management and recycling technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            E Reboot
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground">
            Smart E-Waste Management Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your electronic waste into sustainable resources through our 
            comprehensive collection, segregation, and recycling services.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Recycle className="h-5 w-5 text-eco-green" />
              <span className="text-sm font-medium">100% Recycling</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Shield className="h-5 w-5 text-tech-blue" />
              <span className="text-sm font-medium">Secure Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
              <Zap className="h-5 w-5 text-warning-orange" />
              <span className="text-sm font-medium">Fast Collection</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-green transition-all duration-300 transform hover:scale-105"
            >
              Schedule Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;