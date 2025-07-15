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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Minimal Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Badge at top */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <Badge variant="secondary" className="px-6 py-3 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium AI Solutions
          </Badge>
        </div>
        
        {/* Button at bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onContactUs}
            className="px-8 py-4 text-lg font-semibold bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>;
};