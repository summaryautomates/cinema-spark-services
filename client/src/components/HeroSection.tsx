
import { useState, useEffect } from "react";
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
    <section className="relative min-h-screen min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-indigo-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
      
      {/* Brain Image Container - Centered and Responsive */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8 sm:py-16 md:py-20">
        <div className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Brain Container with enhanced effects */}
          <div className="relative w-full brain-container">
            {/* Subtle orbital rings */}
            <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/8 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 rounded-full border border-indigo-400/6 scale-140 animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Subtle pulsing background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 to-cyan-600/8 rounded-full blur-3xl animate-pulse scale-110"></div>
            
            {/* Soft secondary glow layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-blue-500/5 rounded-full blur-2xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }}></div>
            
            {/* Main brain image with custom glow */}
            <div className="relative z-10 aspect-square w-full">
              <img 
                src={heroImage} 
                alt="AI Brain Intelligence" 
                className="w-full h-full object-contain brain-glow transform hover:scale-105 transition-transform duration-700 opacity-90"
                style={{ filter: 'blur(0px)' }}
              />
              
              {/* Subtle image overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/3"></div>
            </div>
            
            {/* Subtle floating particles/dots around brain - Responsive */}
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-ping opacity-30"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-ping delay-700 opacity-25"></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-indigo-400 rounded-full animate-ping delay-1000 opacity-35"></div>
            <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-20"></div>
            <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-300 rounded-full animate-ping delay-1500 opacity-25"></div>
            <div className="absolute top-3/4 left-1/5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-200 rounded-full animate-ping delay-300 opacity-20"></div>
            
            {/* Subtle energy lines - Responsive */}
            <div className="absolute top-1/2 left-1/2 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse transform -rotate-45 -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-4 sm:-translate-y-6 md:-translate-y-8"></div>
            <div className="absolute top-1/2 left-1/2 w-12 sm:w-18 md:w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse transform rotate-45 -translate-x-6 sm:-translate-x-9 md:-translate-x-12 translate-y-2 sm:translate-y-3 md:translate-y-4" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
