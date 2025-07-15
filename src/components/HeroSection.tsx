import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
const heroBg = "/lovable-uploads/d625cce6-15c7-4085-89d2-2700fbfc4d40.png";
interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}
export const HeroSection = ({
  onExploreServices,
  onContactUs
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium AI Solutions
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Transform Your Business with AI Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            From strategic consulting to cutting-edge development, we deliver comprehensive AI solutions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="luxury" size="lg" onClick={onExploreServices}>
              <Zap className="mr-2" />
              Explore Services
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="hero" size="lg" onClick={onContactUs}>
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};