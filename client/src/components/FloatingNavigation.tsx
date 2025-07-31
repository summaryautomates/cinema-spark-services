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
  // Home
  { id: "home", label: "Home", icon: Home, color: "rgb(139, 92, 246)" },
  
  // Strategic Services
  { id: "ai-consulting", label: "AI Consulting", icon: Brain, color: "rgb(59, 130, 246)", section: "services" },
  { id: "ai-marketing", label: "AI Marketing", icon: TrendingUp, color: "rgb(34, 197, 94)", section: "services" },
  { id: "personal-branding", label: "Personal Brand", icon: User, color: "rgb(249, 115, 22)", section: "services" },
  
  // Technical Services
  { id: "ai-models", label: "AI Models", icon: Cpu, color: "rgb(236, 72, 153)", section: "services" },
  { id: "system-integration", label: "Integration", icon: Settings, color: "rgb(14, 165, 233)", section: "services" },
  { id: "web-development", label: "Web Dev", icon: Globe, color: "rgb(168, 85, 247)", section: "services" },
  { id: "ui-development", label: "UI Design", icon: Palette, color: "rgb(245, 101, 101)", section: "services" },
  { id: "ai-agents", label: "AI Agents", icon: Bot, color: "rgb(34, 197, 94)", section: "services" },
  { id: "chatbots", label: "Chatbots", icon: MessageSquare, color: "rgb(251, 191, 36)", section: "services" },
  
  // Content Services
  { id: "content-generation", label: "Content", icon: PenTool, color: "rgb(139, 92, 246)", section: "services" },
  { id: "case-studies", label: "Case Studies", icon: FileText, color: "rgb(59, 130, 246)", section: "services" },
  { id: "photography", label: "Photography", icon: Camera, color: "rgb(34, 197, 94)", section: "services" },
  { id: "videography", label: "Video", icon: Video, color: "rgb(249, 115, 22)", section: "services" },
  { id: "press-kit", label: "Press Kit", icon: Briefcase, color: "rgb(236, 72, 153)", section: "services" },
  
  // Marketing Services
  { id: "social-media", label: "Social Media", icon: Share2, color: "rgb(14, 165, 233)", section: "services" },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, color: "rgb(168, 85, 247)", section: "services" },
  { id: "community", label: "Community", icon: Users, color: "rgb(245, 101, 101)", section: "services" },
  
  // Data & Analytics
  { id: "data-analysis", label: "Data Analysis", icon: BarChart3, color: "rgb(34, 197, 94)", section: "services" },
  { id: "automation", label: "Automation", icon: Zap, color: "rgb(251, 191, 36)", section: "services" },
  
  // Sales & Performance
  { id: "content-marketing", label: "Marketing", icon: Target, color: "rgb(139, 92, 246)", section: "services" },
  { id: "events", label: "Events", icon: Calendar, color: "rgb(59, 130, 246)", section: "services" },
  { id: "partnerships", label: "Partnerships", icon: Handshake, color: "rgb(34, 197, 94)", section: "services" },
  { id: "email-marketing", label: "Email", icon: Mail, color: "rgb(249, 115, 22)", section: "services" },
  { id: "performance", label: "Performance", icon: Search, color: "rgb(236, 72, 153)", section: "services" },
  { id: "sponsorships", label: "Sponsorships", icon: DollarSign, color: "rgb(14, 165, 233)", section: "services" },
  { id: "visitor-mgmt", label: "Visitors", icon: Eye, color: "rgb(168, 85, 247)", section: "services" },
  
  // Contact
  { id: "contact", label: "Contact", icon: Phone, color: "rgb(245, 101, 101)" },
];

export const FloatingNavigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
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
      // Scroll to bottom or contact section
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else if (item.section === "services") {
      // Scroll to services section
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const leftItems = navigationItems.slice(0, Math.ceil(navigationItems.length / 2));
  const rightItems = navigationItems.slice(Math.ceil(navigationItems.length / 2));

  return (
    <div className={cn(
      "fixed top-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-in-out",
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
    )}>
      {/* Left Side Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {leftItems.map((item, index) => (
          <FloatingNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            delay={index * 100}
            side="left"
          />
        ))}
      </div>

      {/* Right Side Navigation */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {rightItems.map((item, index) => (
          <FloatingNavButton 
            key={item.id} 
            item={item} 
            onClick={() => handleNavClick(item)}
            delay={index * 100}
            side="right"
          />
        ))}
      </div>
    </div>
  );
};

interface FloatingNavButtonProps {
  item: NavigationItem;
  onClick: () => void;
  delay: number;
  side: "left" | "right";
}

const FloatingNavButton = ({ item, onClick, delay, side }: FloatingNavButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="relative group"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neon Glow Background */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full blur-lg transition-all duration-300",
          isHovered ? "opacity-60 scale-110" : "opacity-30 scale-100"
        )}
        style={{
          backgroundColor: item.color,
          boxShadow: `0 0 20px ${item.color}, 0 0 40px ${item.color}40, 0 0 60px ${item.color}20`
        }}
      />
      
      {/* Main Button */}
      <Button
        onClick={onClick}
        className={cn(
          "relative w-12 h-12 rounded-full p-0 border-2 transition-all duration-300",
          "bg-black/80 backdrop-blur-sm hover:bg-black/90",
          "hover:scale-110 hover:rotate-3",
          "shadow-lg hover:shadow-2xl"
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 10px ${item.color}40, inset 0 0 10px ${item.color}20`
        }}
      >
        <Icon 
          className="w-5 h-5 transition-all duration-300" 
          style={{ 
            color: item.color,
            filter: `drop-shadow(0 0 4px ${item.color})`
          }}
        />
      </Button>

      {/* Tooltip Label */}
      {side === "left" && (
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300 left-16",
          "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap",
          "bg-black/90 backdrop-blur-sm border border-white/20",
          "text-white shadow-lg md:block hidden",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 15px ${item.color}30`
        }}>
          {item.label}
          
          {/* Tooltip Arrow */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 -left-1 bg-black/90 border border-white/20"
            style={{ borderColor: item.color }}
          />
        </div>
      )}

      {side === "right" && (
        <div className={cn(
          "absolute top-1/2 -translate-y-1/2 z-10 transition-all duration-300 right-16",
          "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap",
          "bg-black/90 backdrop-blur-sm border border-white/20",
          "text-white shadow-lg md:block hidden",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
        style={{
          borderColor: item.color,
          boxShadow: `0 0 15px ${item.color}30`
        }}>
          {item.label}
          
          {/* Tooltip Arrow */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 -right-1 bg-black/90 border border-white/20"
            style={{ borderColor: item.color }}
          />
        </div>
      )}

      {/* Animated Pulse Ring */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full border-2 animate-pulse",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          borderColor: item.color,
          animation: isHovered ? "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite" : "none"
        }}
      />
    </div>
  );
};