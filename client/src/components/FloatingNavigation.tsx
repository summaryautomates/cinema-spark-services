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
      isVisible ? "opacity-60" : "opacity-0"
    )}>
      {/* Circular Navigation around Cerebreum */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        {/* Center Text - Cerebreum */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Cerebreum
          </h1>
        </div>
        
        {/* Circular Navigation Icons */}
        {navigationItems.map((item, index) => {
          const angle = (index * 360) / navigationItems.length;
          const radius = 120; // Distance from center
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * radius;
          const y = Math.sin(radian) * radius;
          
          return (
            <CircularNavIcon
              key={item.id}
              item={item}
              onClick={() => handleNavClick(item)}
              x={x}
              y={y}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

interface CircularNavIconProps {
  item: NavigationItem;
  onClick: () => void;
  x: number;
  y: number;
  index: number;
}

const CircularNavIcon = ({ item, onClick, x, y, index }: CircularNavIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <button
      className="absolute transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        animationDelay: `${index * 150}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-nav-id={item.id}
      aria-label={`Navigate to ${item.title}`}
    >
      {/* Outer Glow Ring */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full blur-lg transition-all duration-500",
          isHovered ? "scale-150 opacity-40" : "scale-100 opacity-15"
        )}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.3) 0%, transparent 70%)`,
          boxShadow: `0 0 30px rgba(${item.glowColor}, 0.2)`
        }}
      />
      
      {/* Icon Container */}
      <div 
        className={cn(
          "relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
          "bg-black/40 backdrop-blur-sm border border-white/10",
          isHovered ? "scale-125 rotate-12" : "scale-100 rotate-0"
        )}
        style={{
          borderColor: `rgba(${item.glowColor}, 0.3)`,
          boxShadow: `0 0 15px rgba(${item.glowColor}, 0.2), inset 0 0 10px rgba(${item.glowColor}, 0.05)`
        }}
      >
        {/* Inner Icon Glow */}
        <div 
          className="absolute inset-1 rounded-full blur-sm opacity-20"
          style={{
            background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`
          }}
        />
        
        <Icon 
          className={cn(
            "w-5 h-5 z-10 transition-all duration-300",
            isHovered ? "scale-110" : "scale-100"
          )} 
          style={{ color: item.color }}
        />
      </div>

      {/* Hover Label */}
      <div className={cn(
        "absolute top-full mt-2 left-1/2 -translate-x-1/2 transition-all duration-300",
        "bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white whitespace-nowrap",
        isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      )}>
        {item.title}
      </div>
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