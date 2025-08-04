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
  Sparkles,
  Menu,
  X
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
  const [isVisible, setIsVisible] = useState(true); // Start visible at top
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we're on the home page by looking at the URL
      const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home';
      
      if (!isHomePage) {
        // Hide navigation completely if not on home page
        setIsVisible(false);
        return;
      }
      
      // Show navigation only when at the top of the home page (less than 100px)
      // Hide navigation when user scrolls down
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Initial check - hide navigation if already at top or not on home page
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen for URL changes (if using client-side routing)
    window.addEventListener('popstate', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (item: NavigationItem) => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    
    // Add loading state feedback
    const button = document.querySelector(`[data-nav-id="${item.id}"]`);
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => button.classList.remove('animate-pulse'), 500);
    }
    
    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item.id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (item.section === "services") {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: scroll to middle of page if services section doesn't exist
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  // Split navigation items exactly in half
  const midpoint = Math.ceil(navigationItems.length / 2);
  const leftItems = navigationItems.slice(0, midpoint);
  const rightItems = navigationItems.slice(midpoint);

  // Hide navigation completely on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className={cn(
      "fixed inset-0 pointer-events-none z-50 transition-all duration-700 ease-out",
      isVisible ? "opacity-40" : "opacity-0"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse-beam" />
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
    <button 
      className={cn(
        "relative group cursor-pointer transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
        side === "left" ? "transform -translate-x-full hover:translate-x-0 focus:translate-x-0" : "transform translate-x-full hover:translate-x-0 focus:translate-x-0"
      )}
      style={{
        animationDelay: `${index * 200}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-nav-id={item.id}
      aria-label={`Navigate to ${item.title}: ${item.subtitle}`}
    >
      {/* Outer Glow Ring */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500 animate-pulse-glow",
          isHovered ? "scale-150 opacity-60" : "scale-100 opacity-20"
        )}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.4) 0%, rgba(${item.glowColor}, 0.15) 40%, transparent 70%)`,
          boxShadow: `0 0 40px rgba(${item.glowColor}, 0.3), 0 0 80px rgba(${item.glowColor}, 0.15)`
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
            "bg-black/60 backdrop-blur-sm border-2 shadow-xl",
            isHovered ? "rotate-12 shadow-luxury-glow" : "rotate-0"
          )}
          style={{
            borderColor: item.color,
            boxShadow: `0 0 20px rgba(${item.glowColor}, 0.3), inset 0 0 15px rgba(${item.glowColor}, 0.05)`
          }}
        >
          {/* Inner Icon Glow */}
          <div 
            className="absolute inset-2 rounded-full blur-sm opacity-30"
            style={{
              background: `radial-gradient(circle, ${item.color}30 0%, transparent 70%)`
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
    </button>
  );
};

interface MobileNavButtonProps {
  item: NavigationItem;
  onClick: () => void;
  index: number;
}

const MobileNavButton = ({ item, onClick, index }: MobileNavButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const Icon = item.icon;

  return (
    <button
      className={cn(
        "relative group p-4 rounded-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
        "bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50",
        "hover:from-gray-700/80 hover:to-gray-800/80 hover:border-gray-600/50",
        "active:scale-95 transform",
        isPressed ? "scale-95" : "scale-100"
      )}
      style={{
        animationDelay: `${index * 50}ms`
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      data-nav-id={item.id}
      aria-label={`Navigate to ${item.title}: ${item.subtitle}`}
    >
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl"
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.6) 0%, transparent 70%)`
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-2 z-10">
        {/* Icon */}
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `rgba(${item.glowColor}, 0.1)`,
            border: `1px solid rgba(${item.glowColor}, 0.3)`,
            boxShadow: `0 0 20px rgba(${item.glowColor}, 0.3)`
          }}
        >
          <Icon 
            className="w-5 h-5"
            style={{ 
              color: item.color,
              filter: `drop-shadow(0 0 4px ${item.color})`
            }}
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <div 
            className="text-sm font-bold tracking-wide"
            style={{
              color: item.color,
              textShadow: `0 0 10px ${item.color}60`
            }}
          >
            {item.title}
          </div>
          <div className="text-xs text-gray-400 mt-1 line-clamp-2">
            {item.subtitle}
          </div>
        </div>
      </div>

      {/* Border Glow */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: `1px solid rgba(${item.glowColor}, 0.5)`,
          boxShadow: `0 0 20px rgba(${item.glowColor}, 0.3), inset 0 0 20px rgba(${item.glowColor}, 0.1)`
        }}
      />
    </button>
  );
};