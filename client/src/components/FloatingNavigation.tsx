import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cpu,
  PenTool,
  Share2,
  BarChart3,
  Target,
  Home,
  Phone,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  glowColor: string;
  section?: string;
}

const navigationItems: NavigationItem[] = [
  { 
    id: "home", 
    title: "HOME", 
    subtitle: "Back to Top",
    icon: Home, 
    color: "#00d4ff", 
    glowColor: "0, 212, 255"
  },
  { 
    id: "strategic", 
    title: "STRATEGIC", 
    subtitle: "AI Consulting & Strategy",
    icon: Brain, 
    color: "#ff0080", 
    glowColor: "255, 0, 128",
    section: "services" 
  },
  { 
    id: "development", 
    title: "DEVELOPMENT", 
    subtitle: "Technical Solutions",
    icon: Cpu, 
    color: "#00ff88", 
    glowColor: "0, 255, 136",
    section: "services" 
  },
  { 
    id: "content", 
    title: "CONTENT", 
    subtitle: "Creative Services",
    icon: PenTool, 
    color: "#ff6600", 
    glowColor: "255, 102, 0",
    section: "services" 
  },
  { 
    id: "marketing", 
    title: "MARKETING", 
    subtitle: "Community & Social",
    icon: Share2, 
    color: "#8800ff", 
    glowColor: "136, 0, 255",
    section: "services" 
  },
  { 
    id: "analytics", 
    title: "ANALYTICS", 
    subtitle: "Data & Insights",
    icon: BarChart3, 
    color: "#ffff00", 
    glowColor: "255, 255, 0",
    section: "services" 
  },
  { 
    id: "sales", 
    title: "SALES", 
    subtitle: "Performance & Growth",
    icon: Target, 
    color: "#ff4444", 
    glowColor: "255, 68, 68",
    section: "services" 
  },
  { 
    id: "contact", 
    title: "CONTACT", 
    subtitle: "Get In Touch",
    icon: Phone, 
    color: "#44ff44", 
    glowColor: "68, 255, 68"
  }
];

export const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: NavigationItem) => {
    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (item.section === "services") {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Split navigation items exactly in half
  const midpoint = Math.ceil(navigationItems.length / 2);
  const leftItems = navigationItems.slice(0, midpoint);
  const rightItems = navigationItems.slice(midpoint);

  return (
    <div className={cn(
      "fixed inset-0 pointer-events-none z-50 transition-all duration-700 ease-out",
      isVisible ? "opacity-100" : "opacity-0"
    )}>
      {/* Left Side Navigation */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
        {leftItems.map((item, index) => (
          <LuxuryNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            index={index}
            side="left"
          />
        ))}
      </div>

      {/* Right Side Navigation */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto">
        {rightItems.map((item, index) => (
          <LuxuryNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            index={index}
            side="right"
          />
        ))}
      </div>

      {/* Connecting Light Beam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-pulse-beam" />
    </div>
  );
};

interface LuxuryNavButtonProps {
  item: NavigationItem;
  onClick: () => void;
  index: number;
  side: "left" | "right";
}

const LuxuryNavButton = ({ item, onClick, index, side }: LuxuryNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div 
      className={cn(
        "relative group cursor-pointer transition-all duration-500",
        side === "left" ? "transform -translate-x-full hover:translate-x-0" : "transform translate-x-full hover:translate-x-0"
      )}
      style={{
        animationDelay: `${index * 200}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Outer Glow Ring */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500 animate-pulse-glow",
          isHovered ? "scale-150 opacity-80" : "scale-100 opacity-40"
        )}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.8) 0%, rgba(${item.glowColor}, 0.3) 40%, transparent 70%)`,
          boxShadow: `0 0 60px rgba(${item.glowColor}, 0.6), 0 0 120px rgba(${item.glowColor}, 0.3)`
        }}
      />

      {/* Main Button Container */}
      <div className={cn(
        "relative flex items-center gap-4 px-6 py-4 transition-all duration-500",
        side === "left" ? "flex-row" : "flex-row-reverse",
        isHovered ? "scale-110" : "scale-100"
      )}>
        {/* Icon Container */}
        <div 
          className={cn(
            "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
            "bg-black/90 backdrop-blur-sm border-2 shadow-2xl",
            isHovered ? "rotate-12 shadow-luxury-glow" : "rotate-0"
          )}
          style={{
            borderColor: item.color,
            boxShadow: `0 0 30px rgba(${item.glowColor}, 0.5), inset 0 0 20px rgba(${item.glowColor}, 0.1)`
          }}
        >
          {/* Inner Icon Glow */}
          <div 
            className="absolute inset-2 rounded-full blur-sm opacity-60"
            style={{
              background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`
            }}
          />
          
          <Icon 
            className={cn(
              "w-8 h-8 relative z-10 transition-all duration-500",
              isHovered ? "scale-125" : "scale-100"
            )}
            style={{ 
              color: item.color,
              filter: `drop-shadow(0 0 8px ${item.color}) drop-shadow(0 0 16px ${item.color}60)`
            }}
          />

          {/* Rotating Border */}
          <div 
            className={cn(
              "absolute inset-0 rounded-full border-2 opacity-0 transition-all duration-500 animate-spin-slow",
              isHovered ? "opacity-100" : "opacity-0"
            )}
            style={{
              borderColor: item.color,
              borderStyle: "dashed"
            }}
          />
        </div>

        {/* Text Container */}
        <div 
          className={cn(
            "transition-all duration-500 transform",
            side === "left" ? "text-left" : "text-right",
            isHovered ? "opacity-100 translate-x-0" : "opacity-0",
            side === "left" ? "translate-x-4" : "-translate-x-4"
          )}
        >
          <div 
            className="text-lg font-bold tracking-wider luxury-text"
            style={{
              color: item.color,
              textShadow: `0 0 20px ${item.color}80, 0 0 40px ${item.color}40`,
              fontFamily: "'Orbitron', 'Rajdhani', monospace"
            }}
          >
            {item.title}
          </div>
          <div 
            className="text-xs font-medium tracking-wide opacity-80"
            style={{
              color: item.color,
              textShadow: `0 0 10px ${item.color}60`
            }}
          >
            {item.subtitle}
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-particle-float"
              style={{
                backgroundColor: item.color,
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 100}ms`,
                boxShadow: `0 0 10px ${item.color}`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};