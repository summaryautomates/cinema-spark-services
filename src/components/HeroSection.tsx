import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}

export const HeroSection = ({ onExploreServices, onContactUs }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <div className="w-4 h-4 bg-primary rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-accent rounded-full opacity-40" />
      </div>
      <div className="absolute bottom-20 left-20 floating-animation" style={{ animationDelay: '4s' }}>
        <div className="w-3 h-3 bg-primary-glow rounded-full opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20 fade-in-up"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Premium AI Services & Solutions
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up stagger-1">
            Transform Your Business with{" "}
            <span className="gradient-text">
              Luxury AI Solutions
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up stagger-2">
            Elevate your enterprise with our comprehensive suite of AI consulting, 
            development, and creative services. Experience the pinnacle of technological excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up stagger-3">
            <Button 
              variant="luxury" 
              size="lg" 
              className="min-w-48"
              onClick={onExploreServices}
            >
              <Zap className="mr-2" />
              Explore Services
            </Button>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="min-w-48"
              onClick={onContactUs}
            >
              Get Consultation
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border fade-in-up stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Premium Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};