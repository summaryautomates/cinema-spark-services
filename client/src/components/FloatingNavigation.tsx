import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  TrendingUp,
  User,
  Cpu,
  Settings,
  Globe,
  Palette,
  Bot,
  MessageSquare,
  PenTool,
  FileText,
  Camera,
  Video,
  Briefcase,
  Share2,
  Users,
  MessageCircle,
  BarChart3,
  Zap,
  Target,
  Calendar,
  Handshake,
  Mail,
  Search,
  DollarSign,
  Eye,
  Phone,
  Home,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  color: string;
  section?: string;
}

const navigationItems: NavigationItem[] = [
  // Home & Contact
  { id: "home", label: "Home", icon: Home, color: "#8b5cf6" },
  { id: "contact", label: "Contact", icon: Phone, color: "#f59e0b" },
  
  // Strategic Services
  { id: "ai-consulting", label: "AI Consulting", icon: Brain, color: "#3b82f6", section: "services" },
  { id: "ai-marketing", label: "AI Marketing", icon: TrendingUp, color: "#22c55e", section: "services" },
  { id: "personal-branding", label: "Personal Brand", icon: User, color: "#f97316", section: "services" },
  
  // Technical Services
  { id: "ai-models", label: "AI Models", icon: Cpu, color: "#ec4899", section: "services" },
  { id: "system-integration", label: "Integration", icon: Settings, color: "#0ea5e9", section: "services" },
  { id: "web-development", label: "Web Dev", icon: Globe, color: "#a855f7", section: "services" },
  { id: "ui-development", label: "UI Design", icon: Palette, color: "#f56565", section: "services" },
  { id: "ai-agents", label: "AI Agents", icon: Bot, color: "#10b981", section: "services" },
  { id: "chatbots", label: "Chatbots", icon: MessageSquare, color: "#fbbf24", section: "services" },
  
  // Content Services
  { id: "content-generation", label: "Content", icon: PenTool, color: "#8b5cf6", section: "services" },
  { id: "case-studies", label: "Case Studies", icon: FileText, color: "#3b82f6", section: "services" },
  { id: "photography", label: "Photography", icon: Camera, color: "#22c55e", section: "services" },
  { id: "videography", label: "Video", icon: Video, color: "#f97316", section: "services" },
  { id: "press-kit", label: "Press Kit", icon: Briefcase, color: "#ec4899", section: "services" },
  
  // Marketing Services
  { id: "social-media", label: "Social Media", icon: Share2, color: "#0ea5e9", section: "services" },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "#a855f7", section: "services" },
  { id: "community", label: "Community", icon: Users, color: "#f56565", section: "services" },
  
  // Data & Analytics
  { id: "data-analysis", label: "Data Analysis", icon: BarChart3, color: "#10b981", section: "services" },
  { id: "automation", label: "Automation", icon: Zap, color: "#fbbf24", section: "services" },
  
  // Sales & Performance
  { id: "content-marketing", label: "Marketing", icon: Target, color: "#8b5cf6", section: "services" },
  { id: "events", label: "Events", icon: Calendar, color: "#3b82f6", section: "services" },
  { id: "partnerships", label: "Partnerships", icon: Handshake, color: "#22c55e", section: "services" },
  { id: "email-marketing", label: "Email", icon: Mail, color: "#f97316", section: "services" },
  { id: "performance", label: "Performance", icon: Search, color: "#ec4899", section: "services" },
  { id: "sponsorships", label: "Sponsorships", icon: DollarSign, color: "#0ea5e9", section: "services" },
  { id: "visitor-mgmt", label: "Visitors", icon: Eye, color: "#a855f7", section: "services" }
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
  const midpoint = Math.floor(navigationItems.length / 2);
  const leftItems = navigationItems.slice(0, midpoint);
  const rightItems = navigationItems.slice(midpoint);

  if (!isVisible) return null;

  return (
    <>
      {/* Left Side Navigation */}
      <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {leftItems.map((item, index) => (
          <FloatingNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            index={index}
            side="left"
          />
        ))}
      </div>

      {/* Right Side Navigation */}
      <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {rightItems.map((item, index) => (
          <FloatingNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            index={index}
            side="right"
          />
        ))}
      </div>
    </>
  );
};

interface FloatingNavButtonProps {
  item: NavigationItem;
  onClick: () => void;
  index: number;
  side: "left" | "right";
}

const FloatingNavButton = ({ item, onClick, index, side }: FloatingNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div 
      className="relative group"
      style={{
        animationDelay: `${index * 50}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon Glow Background */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full transition-all duration-300 blur-md",
          isHovered ? "opacity-70 scale-125" : "opacity-40 scale-100"
        )}
        style={{
          backgroundColor: item.color,
          boxShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}60`
        }}
      />
      
      {/* Main Button */}
      <Button
        onClick={onClick}
        size="sm"
        className={cn(
          "relative w-10 h-10 rounded-full p-0 border-2 transition-all duration-300",
          "bg-black/90 backdrop-blur-sm hover:bg-black/95",
          "hover:scale-110 shadow-lg hover:shadow-2xl",
          "animate-pulse-slow"
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 8px ${item.color}50`
        }}
      >
        <Icon 
          className="w-4 h-4 transition-all duration-300" 
          style={{ 
            color: item.color,
            filter: `drop-shadow(0 0 2px ${item.color})`
          }}
        />
      </Button>

      {/* Tooltip */}
      <div 
        className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300",
          "px-2 py-1 rounded text-xs font-medium whitespace-nowrap",
          "bg-black/95 backdrop-blur-sm border text-white shadow-lg",
          "hidden md:block",
          side === "left" ? "left-12" : "right-12",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 10px ${item.color}40`
        }}
      >
        {item.label}
        
        {/* Tooltip Arrow */}
        <div 
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-black/95 border",
            side === "left" ? "-left-0.5" : "-right-0.5"
          )}
          style={{ borderColor: item.color }}
        />
      </div>
    </div>
  );
};