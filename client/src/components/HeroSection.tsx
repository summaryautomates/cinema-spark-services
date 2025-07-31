
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
    color: "#3b82f6",
    glowColor: "59, 130, 246"
  },
  {
    id: "development",
    title: "Development & Technical",
    icon: Cpu,
    color: "#06b6d4",
    glowColor: "6, 182, 212"
  },
  {
    id: "content",
    title: "Content & Creative",
    icon: PenTool,
    color: "#8b5cf6",
    glowColor: "139, 92, 246"
  },
  {
    id: "marketing",
    title: "Marketing & Community",
    icon: Share2,
    color: "#10b981",
    glowColor: "16, 185, 129"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    icon: BarChart3,
    color: "#f59e0b",
    glowColor: "245, 158, 11"
  },
  {
    id: "sales",
    title: "Marketing & Sales Strategy",
    icon: Target,
    color: "#ef4444",
    glowColor: "239, 68, 68"
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
      className={`absolute top-1/2 z-40 cursor-pointer transition-all duration-700 ease-out group ${
        side === "left" 
          ? "left-[15%] hover:left-[12%]" 
          : "right-[15%] hover:right-[12%]"
      }`}
      style={{
        transform: `translateY(${(index - 2.5) * 90}px)`,
        animationDelay: `${index * 200}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Connection Line to Hero Image */}
      <div 
        className={`absolute top-1/2 w-16 h-0.5 transition-all duration-500 ${
          side === "left" ? "right-full" : "left-full"
        }`}
        style={{
          background: `linear-gradient(${side === "left" ? "90deg" : "270deg"}, rgba(${item.glowColor}, 0.8), transparent)`,
          opacity: isHovered ? 1 : 0.3,
          boxShadow: isHovered ? `0 0 10px rgba(${item.glowColor}, 0.6)` : "none"
        }}
      />

      {/* Outer Glow Ring */}
      <div
        className={`absolute inset-0 rounded-2xl blur-md transition-all duration-500 animate-pulse ${
          isHovered ? "scale-150 opacity-80" : "scale-110 opacity-30"
        }`}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.6) 0%, rgba(${item.glowColor}, 0.2) 50%, transparent 70%)`,
          boxShadow: isHovered ? `0 0 60px rgba(${item.glowColor}, 0.4)` : `0 0 30px rgba(${item.glowColor}, 0.2)`
        }}
      />

      {/* Main Button Container */}
      <div
        className={`relative bg-black/80 backdrop-blur-xl border-2 rounded-2xl p-5 min-w-[140px] transition-all duration-500 ${
          isHovered ? "scale-110 bg-black/90" : "scale-100"
        }`}
        style={{
          borderColor: isHovered ? item.color : `rgba(${item.glowColor.split(', ').join(', ')}, 0.4)`,
          boxShadow: isHovered 
            ? `0 0 30px rgba(${item.glowColor}, 0.6), inset 0 0 20px rgba(${item.glowColor}, 0.1), 0 10px 40px rgba(0, 0, 0, 0.3)`
            : `0 0 15px rgba(${item.glowColor}, 0.3), 0 5px 20px rgba(0, 0, 0, 0.2)`
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-5"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${item.color} 0%, transparent 50%)`
          }}
        />

        {/* Icon */}
        <div className="flex items-center justify-center mb-3 relative z-10">
          <div
            className={`p-2 rounded-full transition-all duration-300 ${
              isHovered ? "scale-125" : "scale-100"
            }`}
            style={{
              background: isHovered ? `rgba(${item.glowColor}, 0.2)` : "transparent",
              boxShadow: isHovered ? `0 0 20px rgba(${item.glowColor}, 0.4)` : "none"
            }}
          >
            <Icon
              size={28}
              style={{ 
                color: item.color,
                filter: isHovered ? `drop-shadow(0 0 8px ${item.color})` : "none"
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div
          className="text-sm font-bold text-center transition-all duration-300 leading-tight relative z-10"
          style={{
            color: isHovered ? item.color : "#f1f5f9",
            textShadow: isHovered ? `0 0 10px rgba(${item.glowColor}, 0.6), 0 0 20px rgba(${item.glowColor}, 0.3)` : "0 2px 4px rgba(0, 0, 0, 0.5)"
          }}
        >
          {item.title}
        </div>

        {/* Animated Border Ring */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `conic-gradient(from 0deg, transparent, ${item.color}, transparent, ${item.color}, transparent)`,
            animation: isHovered ? "spin 3s linear infinite" : "none",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            padding: "2px"
          }}
        />

        {/* Inner Pulse Effect */}
        <div
          className={`absolute inset-2 rounded-xl transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle, rgba(${item.glowColor}, 0.1) 0%, transparent 70%)`,
            animation: isHovered ? "pulse 2s ease-in-out infinite" : "none"
          }}
        />
      </div>

      {/* Floating Particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-pulse"
              style={{
                backgroundColor: item.color,
                left: `${20 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 200}ms`,
                boxShadow: `0 0 10px ${item.color}`,
                animation: "float-particles 3s ease-in-out infinite"
              }}
            />
          ))}
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
