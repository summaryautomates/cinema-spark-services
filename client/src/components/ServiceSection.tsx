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
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: categoryColor }}
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              category={title}
              onCTAClick={() => onServiceClick?.(service)}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};