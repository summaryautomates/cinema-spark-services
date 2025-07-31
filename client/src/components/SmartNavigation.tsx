import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Cpu,
  PenTool,
  Share2,
  BarChart3,
  Target,
  Home,
  Phone,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowUp,
  Users,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationSection {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  glowColor: string;
  element?: string;
  isSubsection?: boolean;
  parent?: string;
}

const navigationSections: NavigationSection[] = [
  {
    id: "hero",
    title: "Home",
    subtitle: "Back to Top",
    icon: Home,
    color: "#00d4ff",
    glowColor: "0, 212, 255",
    element: "hero"
  },
  {
    id: "services",
    title: "Services",
    subtitle: "Our Expertise",
    icon: Sparkles,
    color: "#8b5cf6",
    glowColor: "139, 92, 246",
    element: "services"
  },
  {
    id: "strategic",
    title: "Strategic",
    subtitle: "AI Consulting & Strategy",
    icon: Brain,
    color: "#3b82f6",
    glowColor: "59, 130, 246",
    element: "strategic",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "development",
    title: "Development",
    subtitle: "Technical Solutions",
    icon: Cpu,
    color: "#06b6d4",
    glowColor: "6, 182, 212",
    element: "development",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "content",
    title: "Content",
    subtitle: "Creative Services",
    icon: PenTool,
    color: "#f59e0b",
    glowColor: "245, 158, 11",
    element: "content",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "marketing",
    title: "Marketing",
    subtitle: "Community & Social",
    icon: Share2,
    color: "#10b981",
    glowColor: "16, 185, 129",
    element: "marketing",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "analytics",
    title: "Analytics",
    subtitle: "Data & Insights",
    icon: BarChart3,
    color: "#f59e0b",
    glowColor: "245, 158, 11",
    element: "analytics",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "sales",
    title: "Sales",
    subtitle: "Performance & Growth",
    icon: Target,
    color: "#ef4444",
    glowColor: "239, 68, 68",
    element: "sales",
    isSubsection: true,
    parent: "services"
  },
  {
    id: "why-choose",
    title: "Why Choose Us",
    subtitle: "Our Advantage",
    icon: Star,
    color: "#fbbf24",
    glowColor: "251, 191, 36",
    element: "why-choose"
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Get In Touch",
    icon: Phone,
    color: "#44ff44",
    glowColor: "68, 255, 68",
    element: "contact"
  }
];

export const SmartNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSubNavigation, setShowSubNavigation] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll behavior for navigation visibility
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

  // Detect active section based on scroll position
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section') || 
                           entry.target.id || 
                           'hero';
          setActiveSection(sectionId);
          
          // Show sub-navigation when in services area
          setShowSubNavigation(sectionId !== 'hero' && sectionId !== 'contact' && sectionId !== 'why-choose');
        }
      });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('[data-section], section, #services');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
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

  const handleNavClick = useCallback((section: NavigationSection) => {
    setIsMobileMenuOpen(false);
    
    // Add visual feedback
    const button = document.querySelector(`[data-nav-id="${section.id}"]`);
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => button.classList.remove('animate-pulse'), 500);
    }
    
    if (section.id === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section.id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (section.element) {
      const element = document.querySelector(`[data-section="${section.element}"], #${section.element}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  // Get primary navigation items (non-subsections)
  const primaryNavigation = navigationSections.filter(section => !section.isSubsection);
  
  // Get sub-navigation items for services
  const serviceSubNavigation = navigationSections.filter(section => 
    section.isSubsection && section.parent === "services"
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile Navigation Toggle */}
        <div className={cn(
          "fixed top-6 right-6 z-50 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Button
            className={cn(
              "w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
              "bg-gradient-to-r from-primary to-accent text-white",
              "hover:scale-110 active:scale-95"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "fixed inset-0 z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className={cn(
            "absolute inset-x-4 top-24 bottom-4 bg-card/95 backdrop-blur-xl rounded-3xl border border-border/50 p-6 transition-all duration-300",
            isMobileMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}>
            {/* Active Section Indicator */}
            <div className="text-center mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                <Sparkles className="w-4 h-4 mr-2" />
                Current: {navigationSections.find(s => s.id === activeSection)?.title || "Home"}
              </Badge>
            </div>

            {/* Primary Navigation */}
            <div className="space-y-2 mb-6">
              <h3 className="text-sm font-medium text-muted-foreground px-3 mb-3">Navigation</h3>
              {primaryNavigation.map((section, index) => (
                <MobileNavButton
                  key={section.id}
                  section={section}
                  onClick={() => handleNavClick(section)}
                  isActive={activeSection === section.id}
                  index={index}
                />
              ))}
            </div>

            {/* Services Sub-Navigation */}
            {showSubNavigation && (
              <div className="space-y-2 border-t border-border/50 pt-4">
                <h3 className="text-sm font-medium text-muted-foreground px-3 mb-3">Service Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceSubNavigation.map((section, index) => (
                    <MobileNavButton
                      key={section.id}
                      section={section}
                      onClick={() => handleNavClick(section)}
                      isActive={activeSection === section.id}
                      index={index}
                      isCompact
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop Primary Navigation */}
      <div className={cn(
        "fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-700",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      )}>
        <div className="flex flex-col gap-4">
          {primaryNavigation.slice(0, Math.ceil(primaryNavigation.length / 2)).map((section, index) => (
            <DesktopNavButton
              key={section.id}
              section={section}
              onClick={() => handleNavClick(section)}
              isActive={activeSection === section.id}
              side="left"
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Desktop Secondary Navigation */}
      <div className={cn(
        "fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-700",
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      )}>
        <div className="flex flex-col gap-4">
          {primaryNavigation.slice(Math.ceil(primaryNavigation.length / 2)).map((section, index) => (
            <DesktopNavButton
              key={section.id}
              section={section}
              onClick={() => handleNavClick(section)}
              isActive={activeSection === section.id}
              side="right"
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Desktop Services Sub-Navigation */}
      {showSubNavigation && !isMobile && (
        <div className={cn(
          "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
          "bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 p-4 shadow-lg"
        )}>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs">
              Services
            </Badge>
            <div className="flex gap-2">
              {serviceSubNavigation.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleNavClick(section)}
                  className={cn(
                    "transition-all duration-300 text-xs",
                    activeSection === section.id && "shadow-glow"
                  )}
                  style={{
                    backgroundColor: activeSection === section.id ? section.color : undefined,
                    boxShadow: activeSection === section.id ? `0 0 20px ${section.color}40` : undefined
                  }}
                >
                  <section.icon className="w-3 h-3 mr-1" />
                  {section.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <div className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300",
        lastScrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <Button
          className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      </div>

      {/* Connection Beam Effect */}
      <div className={cn(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 z-40 transition-all duration-700",
        "bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse-beam",
        isVisible ? "opacity-100" : "opacity-0"
      )} />
    </>
  );
};

// Desktop Navigation Button Component
interface DesktopNavButtonProps {
  section: NavigationSection;
  onClick: () => void;
  isActive: boolean;
  side: "left" | "right";
  index: number;
}

const DesktopNavButton = ({ section, onClick, isActive, side, index }: DesktopNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = section.icon;

  return (
    <button
      className={cn(
        "relative group transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        side === "left" 
          ? "transform -translate-x-full hover:translate-x-0 focus:translate-x-0" 
          : "transform translate-x-full hover:translate-x-0 focus:translate-x-0"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-nav-id={section.id}
      aria-label={`Navigate to ${section.title}: ${section.subtitle}`}
    >
      {/* Glow Effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-full blur-xl transition-all duration-500",
          isHovered || isActive ? "scale-150 opacity-80" : "scale-100 opacity-40"
        )}
        style={{
          background: `radial-gradient(circle, rgba(${section.glowColor}, 0.8) 0%, rgba(${section.glowColor}, 0.3) 40%, transparent 70%)`,
          boxShadow: `0 0 60px rgba(${section.glowColor}, 0.6)`
        }}
      />

      {/* Button Container */}
      <div className={cn(
        "relative flex items-center gap-4 px-6 py-4 transition-all duration-500",
        side === "left" ? "flex-row" : "flex-row-reverse",
        isHovered || isActive ? "scale-110" : "scale-100"
      )}>
        {/* Icon Container */}
        <div
          className={cn(
            "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500",
            "bg-black/90 backdrop-blur-sm border-2 shadow-2xl",
            isHovered || isActive ? "rotate-12 shadow-luxury-glow" : "rotate-0"
          )}
          style={{
            borderColor: section.color,
            boxShadow: `0 0 30px rgba(${section.glowColor}, ${isActive ? 0.8 : 0.5}), inset 0 0 20px rgba(${section.glowColor}, 0.1)`
          }}
        >
          <Icon
            className={cn(
              "w-8 h-8 relative z-10 transition-all duration-500",
              isHovered || isActive ? "scale-125" : "scale-100"
            )}
            style={{
              color: section.color,
              filter: `drop-shadow(0 0 8px ${section.color}) drop-shadow(0 0 16px ${section.color}60)`
            }}
          />

          {/* Active Indicator */}
          {isActive && (
            <div
              className="absolute inset-0 rounded-full border-2 animate-spin-slow"
              style={{
                borderColor: section.color,
                borderStyle: "dashed"
              }}
            />
          )}
        </div>

        {/* Text Container */}
        <div
          className={cn(
            "transition-all duration-500 transform",
            side === "left" ? "text-left" : "text-right",
            isHovered || isActive ? "opacity-100 translate-x-0" : "opacity-0",
            side === "left" ? "translate-x-4" : "-translate-x-4"
          )}
        >
          <div
            className="text-lg font-bold tracking-wider"
            style={{
              color: section.color,
              textShadow: `0 0 20px ${section.color}80`,
              fontFamily: "'Orbitron', monospace"
            }}
          >
            {section.title}
          </div>
          <div
            className="text-xs font-medium tracking-wide opacity-80"
            style={{
              color: section.color,
              textShadow: `0 0 10px ${section.color}60`
            }}
          >
            {section.subtitle}
          </div>
        </div>
      </div>
    </button>
  );
};

// Mobile Navigation Button Component
interface MobileNavButtonProps {
  section: NavigationSection;
  onClick: () => void;
  isActive: boolean;
  index: number;
  isCompact?: boolean;
}

const MobileNavButton = ({ section, onClick, isActive, index, isCompact = false }: MobileNavButtonProps) => {
  const Icon = section.icon;

  return (
    <button
      className={cn(
        "relative group w-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isCompact ? "p-3 rounded-xl" : "p-4 rounded-2xl",
        "bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border border-border/30",
        "hover:from-card/90 hover:to-card/70 hover:border-border/50",
        isActive && "ring-2 ring-primary/50 bg-primary/10"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={onClick}
      data-nav-id={section.id}
    >
      {/* Content */}
      <div className={cn(
        "flex items-center gap-3",
        isCompact ? "flex-col text-center" : "flex-row"
      )}>
        {/* Icon */}
        <div
          className={cn(
            "flex items-center justify-center rounded-full transition-all duration-300",
            isCompact ? "w-8 h-8" : "w-12 h-12",
            "group-hover:scale-110"
          )}
          style={{
            backgroundColor: `rgba(${section.glowColor}, 0.1)`,
            border: `1px solid rgba(${section.glowColor}, 0.3)`
          }}
        >
          <Icon
            className={cn(
              isCompact ? "w-4 h-4" : "w-6 h-6"
            )}
            style={{ color: section.color }}
          />
        </div>

        {/* Text */}
        <div className={cn(
          "flex-1",
          isCompact ? "text-center" : "text-left"
        )}>
          <div
            className={cn(
              "font-bold tracking-wide",
              isCompact ? "text-xs" : "text-sm"
            )}
            style={{ color: section.color }}
          >
            {section.title}
          </div>
          <div className={cn(
            "text-muted-foreground",
            isCompact ? "text-xs mt-1" : "text-xs"
          )}>
            {section.subtitle}
          </div>
        </div>

        {/* Active Indicator */}
        {isActive && (
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        )}
      </div>
    </button>
  );
};