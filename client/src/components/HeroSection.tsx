import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@assets/ChatGPT Image Jul 15, 2025, 11_18_23 PM_1752602257547.png";
interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}
export const HeroSection = ({
  onExploreServices,
  onContactUs
}: HeroSectionProps) => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-8 px-6 py-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium AI Solutions
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text animate-fade-in leading-tight">
            Summarize your Business with Summary Automates
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed">
            From strategic consulting to cutting-edge development, we deliver comprehensive AI solutions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
            <Button 
              variant="luxury" 
              size="lg" 
              onClick={onExploreServices}
              className="px-8 py-4 text-lg font-semibold"
            >
              <Zap className="mr-2 w-5 h-5" />
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onContactUs}
              className="px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>;
};