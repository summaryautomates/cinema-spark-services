import { ServiceCard } from "./ServiceCard";
import { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  services: Service[];
  categoryColor: string;
  onServiceClick?: (service: Service) => void;
}

export const ServiceSection = ({
  title,
  description,
  services,
  categoryColor,
  onServiceClick
}: ServiceSectionProps) => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text leading-tight">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
          <div
            className="w-24 h-1 mx-auto mt-8 rounded-full shadow-glow"
            style={{ backgroundColor: categoryColor }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid-responsive-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              category={categoryColor}
              onCTAClick={() => onServiceClick?.(service)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};