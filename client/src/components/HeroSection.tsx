
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
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);



  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
      <div className="relative z-10 w-full h-full flex flex-col">
        
      </div>
    </section>
  );
};
