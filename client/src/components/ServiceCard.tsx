import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  category: string;
  ctaText?: string;
  onCTAClick?: () => void;
  className?: string;
  delay?: number;
}

export const ServiceCard = ({
  title,
  description,
  features,
  icon: Icon,
  category,
  ctaText = "Get Started",
  onCTAClick,
  className = "",
  delay = 0
}: ServiceCardProps) => {
  return (
    <Card 
      className={`premium-card fade-in-up hover:border-primary/50 relative overflow-hidden group ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative">
        <div className="flex items-center gap-4 mb-2">
          <div className="p-3 rounded-lg bg-gradient-luxury">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          variant="hero" 
          className="w-full mt-6" 
          onClick={onCTAClick}
        >
          {ctaText}
        </Button>
      </CardContent>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
};