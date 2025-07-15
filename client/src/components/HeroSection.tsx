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
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
      
      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <Badge variant="secondary" className="mb-8 px-6 py-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2" />
          Premium AI Solutions
        </Badge>
        
        <div className="flex justify-center animate-fade-in">
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
    </section>;
};