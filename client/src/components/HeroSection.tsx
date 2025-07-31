
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

const leftSideServices: ServiceNavItem[] = [
  {
    id: "development",
    title: "Development & Technical",
    icon: Cpu,
    color: "#06b6d4",
    glowColor: "6, 182, 212"
  },
  {
    id: "strategic",
    title: "Strategic Services",
    icon: Brain,
    color: "#3b82f6",
    glowColor: "59, 130, 246"
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    icon: BarChart3,
    color: "#f59e0b",
    glowColor: "245, 158, 11"
  }
];

const rightSideServices: ServiceNavItem[] = [
  {
    id: "sales",
    title: "Marketing & Sales Strategy",
    icon: Target,
    color: "#ef4444",
    glowColor: "239, 68, 68"
  },
  {
    id: "marketing",
    title: "Marketing & Community",
    icon: Share2,
    color: "#10b981",
    glowColor: "16, 185, 129"
  },
  {
    id: "content",
    title: "Content & Creative",
    icon: PenTool,
    color: "#8b5cf6",
    glowColor: "139, 92, 246"
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
          ? "left-2 hover:left-4" 
          : "right-2 hover:right-4"
      }`}
      style={{
        transform: `translateY(${(index - 2.5) * 80}px)`,
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Outer Glow Ring */}
      <div
        className={`absolute inset-0 rounded-2xl blur-lg transition-all duration-500 ${
          isHovered ? "scale-125 opacity-60" : "scale-100 opacity-20"
        }`}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.4) 0%, rgba(${item.glowColor}, 0.1) 50%, transparent 70%)`,
          boxShadow: isHovered ? `0 0 40px rgba(${item.glowColor}, 0.3)` : "none"
        }}
      />

      {/* Main Button Container */}
      <div
        className={`relative bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-xl p-4 min-w-[130px] transition-all duration-500 ${
          isHovered ? "scale-105 bg-slate-800/95" : "scale-100"
        }`}
        style={{
          borderColor: isHovered ? item.color : "rgba(148, 163, 184, 0.3)",
          boxShadow: isHovered 
            ? `0 0 20px rgba(${item.glowColor}, 0.4), inset 0 0 10px rgba(${item.glowColor}, 0.1)`
            : `0 4px 15px rgba(0, 0, 0, 0.3)`
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
          className="text-xs font-semibold text-center transition-all duration-300 leading-tight"
          style={{
            color: isHovered ? item.color : "#e2e8f0",
            textShadow: isHovered ? `0 0 8px rgba(${item.glowColor}, 0.5)` : "none"
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

  // Use predefined left and right service arrays
  const leftItems = leftSideServices;
  const rightItems = rightSideServices;

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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Badge variant="secondary" className="px-6 py-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Transformation Experts
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
            Transform Your Business with AI Solutions
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how AI can revolutionize your operations, boost efficiency, and drive growth with our comprehensive suite of services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
              onClick={() => {
                const leadMagnetElement = document.querySelector('[data-trigger="lead-magnet"]') as HTMLElement;
                if (leadMagnetElement) {
                  leadMagnetElement.click();
                }
              }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Get Your Free AI Readiness Report
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              onClick={onExploreServices}
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4" />
              <span>AI Strategy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cpu className="w-4 h-4" />
              <span>Custom Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
