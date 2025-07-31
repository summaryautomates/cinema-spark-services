
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Brain, Cpu, PenTool, Share2, BarChart3, Target } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@assets/ChatGPT Image Jul 15, 2025, 11_18_23 PM_1752602257547.png";

interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}

interface ServiceNavItem {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  glowColor: string;
}

const serviceNavItems: ServiceNavItem[] = [
  {
    id: "strategic",
    title: "Strategic Services",
    icon: Brain,
    color: "#ff0080",
    glowColor: "255, 0, 128"
  },
  {
    id: "development",
    title: "Development & Technical",
    icon: Cpu,
    color: "#00ff88",
    glowColor: "0, 255, 136"
  },
  {
    id: "content",
    title: "Content & Creative",
    icon: PenTool,
    color: "#ff6600",
    glowColor: "255, 102, 0"
  },
  {
    id: "marketing",
    title: "Marketing & Community",
    icon: Share2,
    color: "#8800ff",
    glowColor: "136, 0, 255"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    icon: BarChart3,
    color: "#ffff00",
    glowColor: "255, 255, 0"
  },
  {
    id: "sales",
    title: "Marketing & Sales Strategy",
    icon: Target,
    color: "#ff4444",
    glowColor: "255, 68, 68"
  }
];

interface FloatingNavButtonProps {
  item: ServiceNavItem;
  side: "left" | "right";
  index: number;
}

const FloatingNavButton = ({ item, side, index }: FloatingNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const handleClick = () => {
    const sectionElement = document.querySelector(`[data-section="${item.id}"]`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed top-1/2 z-50 cursor-pointer transition-all duration-700 ease-out ${
        side === "left" 
          ? "left-0 -translate-x-3/4 hover:translate-x-0" 
          : "right-0 translate-x-3/4 hover:translate-x-0"
      }`}
      style={{
        transform: `translateY(${(index - 2.5) * 80}px) ${
          side === "left" 
            ? "translateX(-75%)" 
            : "translateX(75%)"
        }`,
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Outer Glow Ring */}
      <div
        className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
          isHovered ? "scale-150 opacity-80" : "scale-100 opacity-40"
        }`}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.8) 0%, rgba(${item.glowColor}, 0.3) 40%, transparent 70%)`,
          boxShadow: `0 0 60px rgba(${item.glowColor}, 0.6), 0 0 120px rgba(${item.glowColor}, 0.3)`
        }}
      />

      {/* Main Button Container */}
      <div
        className={`relative bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transition-all duration-500 ${
          isHovered ? "scale-110 bg-black/90" : "scale-100"
        }`}
        style={{
          borderColor: item.color,
          boxShadow: isHovered 
            ? `0 0 40px rgba(${item.glowColor}, 0.8), inset 0 0 20px rgba(${item.glowColor}, 0.2)`
            : `0 0 20px rgba(${item.glowColor}, 0.4)`
        }}
      >
        {/* Icon */}
        <div className="flex items-center justify-center mb-2">
          <Icon
            size={24}
            style={{ color: item.color }}
            className={`transition-all duration-300 ${
              isHovered ? "scale-125" : "scale-100"
            }`}
          />
        </div>

        {/* Title */}
        <div
          className={`text-xs font-bold text-center whitespace-nowrap transition-all duration-300 ${
            side === "left" ? "text-left" : "text-right"
          }`}
          style={{
            color: isHovered ? item.color : "#ffffff",
            textShadow: isHovered ? `0 0 10px rgba(${item.glowColor}, 0.8)` : "none"
          }}
        >
          {item.title}
        </div>

        {/* Animated Border */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `linear-gradient(45deg, transparent, rgba(${item.glowColor}, 0.3), transparent)`,
            animation: isHovered ? "border-glow 2s linear infinite" : "none"
          }}
        />
      </div>

      {/* Hover Text Expansion */}
      {isHovered && (
        <div
          className={`absolute top-1/2 -translate-y-1/2 ${
            side === "left" ? "left-full ml-4" : "right-full mr-4"
          } bg-black/90 backdrop-blur-lg border rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300`}
          style={{
            borderColor: item.color,
            color: item.color,
            boxShadow: `0 0 20px rgba(${item.glowColor}, 0.6)`
          }}
        >
          Click to explore {item.title.toLowerCase()}
        </div>
      )}
    </div>
  );
};

export const HeroSection = ({
  onExploreServices,
  onContactUs
}: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Split items for left and right sides
  const midpoint = Math.ceil(serviceNavItems.length / 2);
  const leftItems = serviceNavItems.slice(0, midpoint);
  const rightItems = serviceNavItems.slice(midpoint);

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

      {/* Floating Service Navigation - Left Side */}
      {isVisible && leftItems.map((item, index) => (
        <FloatingNavButton
          key={item.id}
          item={item}
          side="left"
          index={index}
        />
      ))}

      {/* Floating Service Navigation - Right Side */}
      {isVisible && rightItems.map((item, index) => (
        <FloatingNavButton
          key={item.id}
          item={item}
          side="right"
          index={index}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
      </div>
    </section>
  );
};
