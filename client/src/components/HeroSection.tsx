
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
import heroImage from "@assets/ChatGPT Image Jul 15, 2025, 11_18_23 PM_1752602257547.png";

interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}

export const HeroSection = ({
  onExploreServices,
  onContactUs
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        
        {/* Left Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="space-y-6">
            <Badge variant="secondary" className="px-4 py-2 bg-blue-500/10 text-blue-400 border-blue-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Innovation
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Summary
              </span>
              <br />
              <span className="text-white">
                Automates
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Transform your business with cutting-edge AI solutions. From intelligent automation to strategic consulting, we deliver the future of technology today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={onExploreServices}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 text-lg font-medium shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onContactUs}
              className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg font-medium backdrop-blur-sm"
            >
              <Zap className="mr-2 w-5 h-5" />
              Get Started
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-slate-400">AI Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Brain Image */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          {/* Brain Container with enhanced effects */}
          <div className="relative w-full max-w-lg brain-container">
            {/* Orbital rings */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 rounded-full border border-indigo-400/20 scale-140 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Pulsing background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse scale-110"></div>
            
            {/* Secondary glow layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-blue-500/10 rounded-full blur-2xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main brain image with custom glow */}
            <div className="relative z-10 aspect-square w-full">
              <img 
                src={heroImage} 
                alt="AI Brain Intelligence" 
                className="w-full h-full object-contain brain-glow transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Image overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/5 rounded-full"></div>
            </div>
            
            {/* Floating particles/dots around brain */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-80"></div>
            <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping delay-700 opacity-60"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-ping delay-1000 opacity-70"></div>
            <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
            <div className="absolute top-1/2 right-1/6 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-1500 opacity-60"></div>
            <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-blue-200 rounded-full animate-ping delay-300 opacity-40"></div>
            
            {/* Energy lines */}
            <div className="absolute top-1/2 left-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse transform -rotate-45 -translate-x-16 -translate-y-8"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse transform rotate-45 -translate-x-12 translate-y-4" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
