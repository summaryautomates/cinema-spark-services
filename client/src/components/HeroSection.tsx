import { useState, useEffect } from "react";
import heroImage from "@assets/ChatGPT Image Jul 15, 2025, 11_18_23 PM_1752602257547.png";
import DotGrid from "./DotGrid";

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
    <section className="relative min-h-screen-responsive flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Interactive Dot Grid Background */}
      <div className="absolute inset-0">
        <DotGrid
          dotSize={4}
          gap={24}
          baseColor="#1e293b"
          activeColor="#3b82f6"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={3}
          maxSpeed={3000}
          resistance={500}
          returnDuration={1.2}
          className="w-full h-full"
        />
      </div>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-slate-800/20"></div>

      {/* Brain Image Container - Properly centered and responsive */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-3xl`}>
          {/* Brain Container with enhanced effects */}
          <div className="relative w-full aspect-square brain-container">
            {/* Orbital rings - Responsive scaling */}
            <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-110 animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-0 rounded-full border border-indigo-400/20 scale-140 animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Pulsing background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse scale-110"></div>

            {/* Secondary glow layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-blue-500/10 rounded-full blur-2xl animate-pulse scale-125" style={{ animationDelay: '0.5s' }}></div>

            {/* Main brain image with custom glow - Maintains aspect ratio */}
            <div className="relative z-10 w-full h-full">
              <img 
                src={heroImage} 
                alt="AI Brain Intelligence" 
                className="w-full h-full object-contain brain-glow transform hover:scale-105 transition-transform duration-700 opacity-80"
              />

              {/* Image overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-blue-500/5 rounded-full"></div>
            </div>

            {/* Floating particles/dots around brain - Responsive sizing */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-ping opacity-80"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-cyan-400 rounded-full animate-ping delay-700 opacity-60"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-indigo-400 rounded-full animate-ping delay-1000 opacity-70"></div>
            <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-300 rounded-full animate-ping delay-500 opacity-50"></div>
            <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-300 rounded-full animate-ping delay-1500 opacity-60"></div>
            <div className="absolute top-3/4 left-1/5 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-200 rounded-full animate-ping delay-300 opacity-40"></div>

            {/* Energy lines - Responsive sizing */}
            <div className="absolute top-1/2 left-1/2 w-16 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse transform -rotate-45 -translate-x-8 sm:-translate-x-12 md:-translate-x-16 -translate-y-4 sm:-translate-y-6 md:-translate-y-8"></div>
            <div className="absolute top-1/2 left-1/2 w-12 sm:w-18 md:w-24 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse transform rotate-45 -translate-x-6 sm:-translate-x-9 md:-translate-x-12 translate-y-2 sm:translate-y-3 md:translate-y-4" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};