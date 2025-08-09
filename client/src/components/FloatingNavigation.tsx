import { useState, useEffect } from "react";
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
  X,
} from "lucide-react";

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
    glowColor: "0, 212, 255",
  },
  {
    id: "strategic",
    title: "STRATEGIC",
    subtitle: "AI Consulting & Strategy",
    icon: Brain,
    color: "#ff0080",
    glowColor: "255, 0, 128",
    section: "services",
  },
  {
    id: "development",
    title: "DEVELOPMENT",
    subtitle: "Technical Solutions",
    icon: Cpu,
    color: "#00ff88",
    glowColor: "0, 255, 136",
    section: "services",
  },
  {
    id: "content",
    title: "CONTENT",
    subtitle: "Creative Services",
    icon: PenTool,
    color: "#ff6600",
    glowColor: "255, 102, 0",
    section: "services",
  },
  {
    id: "marketing",
    title: "MARKETING",
    subtitle: "Community & Social",
    icon: Share2,
    color: "#8800ff",
    glowColor: "136, 0, 255",
    section: "services",
  },
  {
    id: "analytics",
    title: "ANALYTICS",
    subtitle: "Data & Insights",
    icon: BarChart3,
    color: "#ffff00",
    glowColor: "255, 255, 0",
    section: "services",
  },
  {
    id: "sales",
    title: "SALES",
    subtitle: "Performance & Growth",
    icon: Target,
    color: "#ff4444",
    glowColor: "255, 68, 68",
    section: "services",
  },
  {
    id: "contact",
    title: "CONTACT",
    subtitle: "Get In Touch",
    icon: Phone,
    color: "#44ff44",
    glowColor: "68, 255, 68",
  },
];

const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isHomePage =
        window.location.pathname === "/" ||
        window.location.pathname === "/home";

      if (!isHomePage) {
        setIsVisible(false);
        return;
      }

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("popstate", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (item: NavigationItem) => {
    setIsMobileMenuOpen(false);

    const button = document.querySelector(`[data-nav-id="${item.id}"]`);
    if (button) {
      button.classList.add("animate-pulse");
      setTimeout(() => button.classList.remove("animate-pulse"), 500);
    }

    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else if (item.section === "services") {
      const servicesElement = document.getElementById("services");
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
      }
    }
  };

  // Adjusted responsive values to keep buttons within screen bounds
  const getResponsiveValues = () => {
    const vw =
      windowSize.width ||
      (typeof window !== "undefined" ? window.innerWidth : 1024);
    const vh =
      windowSize.height ||
      (typeof window !== "undefined" ? window.innerHeight : 768);

    if (vw < 640) {
      // Mobile - much smaller radius
      return {
        radius: Math.min(vw * 0.25, vh * 0.25, 120),
        containerSize: Math.min(vw * 0.8, vh * 0.8, 300),
        top: "50%",
        left: "50%",
      };
    } else if (vw < 1024) {
      // Tablet - moderate radius
      return {
        radius: Math.min(vw * 0.22, vh * 0.22, 160),
        containerSize: Math.min(vw * 0.7, vh * 0.7, 400),
        top: "50%",
        left: "50%",
      };
    } else if (vw < 1440) {
      // Desktop - careful not to exceed screen bounds
      return {
        radius: Math.min(vw * 0.18, vh * 0.18, 200),
        containerSize: Math.min(vw * 0.6, vh * 0.6, 500),
        top: "50%",
        left: "50%",
      };
    } else {
      // Large desktop - still conservative
      return {
        radius: Math.min(vw * 0.15, vh * 0.15, 220),
        containerSize: Math.min(vw * 0.5, vh * 0.5, 550),
        top: "50%",
        left: "50%",
      };
    }
  };

  const { radius, containerSize, top, left } = getResponsiveValues();

  // Show mobile menu for small screens
  if (isMobile && windowSize.width > 0) {
    return (
      <div
        className={cn(
          "fixed inset-0 pointer-events-none z-50 transition-all duration-700 ease-out",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        {/* Mobile Menu Toggle */}
        <div className="absolute top-6 right-6 pointer-events-auto">
          <button
            className="p-2 rounded-md bg-black/80 border border-cyan-400/50 hover:bg-cyan-400/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4 text-cyan-400" />
            ) : (
              <Menu className="h-4 w-4 text-cyan-400" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-500 pointer-events-auto",
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col items-center justify-center h-full p-6">
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              {navigationItems.map((item, index) => (
                <MobileNavButton
                  key={item.id}
                  item={item}
                  onClick={() => handleNavClick(item)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-50 transition-all duration-700 ease-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      {/* Circular Navigation around Hero Center */}
      <div
        className="absolute pointer-events-auto"
        style={{
          width: `${containerSize}px`,
          height: `${containerSize}px`,
          top: top,
          left: left,
          transform: "translate(-50%, -50%)",
        }}
      >
        {navigationItems.map((item, index) => {
          // Calculate circular position starting from top and going clockwise
          const angle =
            index * (360 / navigationItems.length) * (Math.PI / 180) -
            Math.PI / 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <CircularNavButton
              key={item.id}
              item={item}
              onClick={() => handleNavClick(item)}
              index={index}
              x={x}
              y={y}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </div>
  );
}

interface CircularNavButtonProps {
  item: NavigationItem;
  onClick: () => void;
  index: number;
  x: number;
  y: number;
  isMobile?: boolean;
}

const CircularNavButton = ({
  item,
  onClick,
  index,
  x,
  y,
  isMobile = false,
}: CircularNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <button
      className="absolute group cursor-pointer transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        animationDelay: `${index * 100}ms`,
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
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isHovered ? "scale-150 opacity-80" : "scale-100 opacity-40",
        )}
        style={{
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.6) 0%, rgba(${item.glowColor}, 0.2) 40%, transparent 70%)`,
          boxShadow: `0 0 30px rgba(${item.glowColor}, 0.4), 0 0 60px rgba(${item.glowColor}, 0.2)`,
        }}
      />

      {/* Icon Container */}
      <div
        className={cn(
          "relative rounded-full flex items-center justify-center transition-all duration-500",
          "bg-black bg-opacity-90 backdrop-blur-sm border-2 shadow-2xl",
          isHovered ? "scale-125" : "scale-100",
          isMobile ? "w-12 h-12" : "w-14 h-14", // Slightly smaller buttons
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 25px rgba(${item.glowColor}, 0.4), inset 0 0 15px rgba(${item.glowColor}, 0.1)`,
        }}
      >
        {/* Inner Icon Glow */}
        <div
          className="absolute inset-1 rounded-full blur-sm opacity-40"
          style={{
            background: `radial-gradient(circle, ${item.color}40 0%, transparent 70%)`,
          }}
        />

        <Icon
          className={cn(
            "z-10 transition-all duration-500",
            isHovered ? "scale-110" : "scale-100",
            isMobile ? "w-5 h-5" : "w-6 h-6", // Slightly smaller icons
          )}
          style={{
            color: item.color,
            filter: `drop-shadow(0 0 8px ${item.color})`,
          }}
        />

        {/* Pulse Ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{
            borderColor: item.color,
            border: "2px solid",
          }}
        />
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
        "relative group p-4 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400",
        "bg-gradient-to-br from-gray-800 from-opacity-80 to-gray-900 to-opacity-80 backdrop-blur-sm border border-gray-700 border-opacity-50",
        "hover:from-gray-700 hover:from-opacity-80 hover:to-gray-800 hover:to-opacity-80 hover:border-gray-600 hover:border-opacity-50",
        "active:scale-95 transform",
        isPressed ? "scale-95" : "scale-100",
      )}
      style={{
        animationDelay: `${index * 50}ms`,
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
          background: `radial-gradient(circle, rgba(${item.glowColor}, 0.6) 0%, transparent 70%)`,
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
            boxShadow: `0 0 20px rgba(${item.glowColor}, 0.3)`,
          }}
        >
          <Icon
            className="w-5 h-5"
            style={{
              color: item.color,
              filter: `drop-shadow(0 0 4px ${item.color})`,
            }}
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <div
            className="text-sm font-bold tracking-wide"
            style={{
              color: item.color,
              textShadow: `0 0 10px ${item.color}60`,
            }}
          >
            {item.title}
          </div>
          <div className="text-xs text-gray-400 mt-1">{item.subtitle}</div>
        </div>
      </div>

      {/* Border Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          border: `1px solid rgba(${item.glowColor}, 0.5)`,
          boxShadow: `0 0 20px rgba(${item.glowColor}, 0.3), inset 0 0 20px rgba(${item.glowColor}, 0.1)`,
        }}
      />
    </button>
  );
};
