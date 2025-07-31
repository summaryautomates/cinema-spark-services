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
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }} 
      />
      
      {/* Minimal Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        {/* Hero Badge */}
        <Badge 
          variant="outline" 
          className="mb-6 bg-black/20 backdrop-blur-sm border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Solutions
        </Badge>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Transform Your Business
          <br />
          <span className="text-4xl md:text-6xl">with AI Innovation</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
          Comprehensive AI consulting, development, and creative services to accelerate your digital transformation
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold"
            onClick={onExploreServices}
          >
            <Zap className="w-5 h-5 mr-2" />
            Explore Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 px-8 py-3 text-lg font-semibold"
            onClick={onContactUs}
          >
            Get Started
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};