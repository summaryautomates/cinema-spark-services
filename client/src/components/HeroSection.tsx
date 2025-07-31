
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Brain, Cpu, PenTool, Share2, BarChart3, Target } from "lucide-react";
import heroImage from "@assets/ChatGPT Image Jul 15, 2025, 11_18_23 PM_1752602257547.png";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onExploreServices?: () => void;
  onContactUs?: () => void;
}

const navigationTitles = [
  { id: "strategic", title: "STRATEGIC", icon: Brain, color: "#ff0080", section: "services" },
  { id: "development", title: "DEVELOPMENT", icon: Cpu, color: "#00ff88", section: "services" },
  { id: "content", title: "CONTENT", icon: PenTool, color: "#ff6600", section: "services" },
  { id: "marketing", title: "MARKETING", icon: Share2, color: "#8800ff", section: "services" },
  { id: "analytics", title: "ANALYTICS", icon: BarChart3, color: "#ffff00", section: "services" },
  { id: "sales", title: "SALES", icon: Target, color: "#ff4444", section: "services" }
];

export const HeroSection = ({
  onExploreServices,
  onContactUs
}: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavClick = (item: typeof navigationTitles[0]) => {
    if (item.section === "services") {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Gradient Orb */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, rgba(255, 0, 128, 0.3) 50%, transparent 100%)`,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Hero Image with Cinematic Effects */}
      <div 
        className="absolute inset-0 w-full h-full flex items-center justify-center opacity-40"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7) contrast(1.2) saturate(1.3)'
        }} 
      />
      
      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Main Content Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6">
        
        {/* Hero Badge */}
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge 
            variant="secondary" 
            className="mb-8 px-8 py-4 bg-black/30 text-cyan-400 border-cyan-400/30 backdrop-blur-xl shadow-premium animate-pulse-premium text-lg font-medium"
          >
            <Sparkles className="w-5 h-5 mr-3 animate-spin-slow" />
            Premium AI Excellence
            <Zap className="w-5 h-5 ml-3 animate-pulse" />
          </Badge>
        </div>

        {/* Main Title */}
        <div className={`text-center mb-12 transform transition-all duration-1200 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 luxury-gradient-text leading-none tracking-tight">
            AI
            <span className="block text-cyan-400 animate-glow-pulse">EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with cutting-edge AI solutions and strategic excellence
          </p>
        </div>

        {/* Luxury Navigation Grid */}
        <div className={`mb-16 transform transition-all duration-1500 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {navigationTitles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105"
                  onClick={() => handleNavClick(item)}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500"
                    style={{
                      background: `linear-gradient(45deg, ${item.color}40, transparent)`
                    }}
                  />
                  
                  {/* Main Button */}
                  <div 
                    className="relative px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500 text-center"
                  >
                    <Icon 
                      className="w-6 h-6 mx-auto mb-2 transition-all duration-500 group-hover:scale-125"
                      style={{ color: item.color }}
                    />
                    <div 
                      className="text-sm font-bold tracking-wider transition-all duration-500 group-hover:text-white"
                      style={{ 
                        color: item.color,
                        textShadow: `0 0 20px ${item.color}80`
                      }}
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* Particle Trail Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, particleIndex) => (
                      <div
                        key={particleIndex}
                        className="absolute w-1 h-1 rounded-full animate-particle-trail"
                        style={{
                          backgroundColor: item.color,
                          left: `${30 + particleIndex * 20}%`,
                          top: `${40 + particleIndex * 10}%`,
                          animationDelay: `${particleIndex * 200}ms`
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1800 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Button 
            size="lg" 
            onClick={onExploreServices}
            className="group relative px-10 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border-0 text-white font-bold text-lg shadow-luxury hover:shadow-premium transition-all duration-500 hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
            Explore Services
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-500" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onContactUs}
            className="group px-10 py-6 border-2 border-white/30 bg-black/20 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/50 font-bold text-lg shadow-luxury hover:shadow-premium transition-all duration-500 hover:scale-105"
          >
            Get Consultation
            <Zap className="w-5 h-5 ml-3 group-hover:animate-pulse" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-2000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Corner Accent Lines */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-400/30 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-cyan-400/30 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-400/30 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-cyan-400/30 opacity-50"></div>
    </section>
  );
};
