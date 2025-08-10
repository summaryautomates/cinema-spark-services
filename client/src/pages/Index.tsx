import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSection } from "@/components/ServiceSection";
import { FloatingNavigation } from "@/components/FloatingNavigation";
import RotatingText from "@/components/RotatingText";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
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
  ArrowUp,
  Phone,
  Sparkles,
  Lightbulb,
  Hammer,
  MessageSquare as Feedback,
  RotateCcw,
  Rocket,
  Trophy
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    toast({
      title: "Service Selected",
      description: `Learn more about ${service.title}. Contact us for a detailed consultation.`,
    });
  };

  const handleExploreServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    toast({
      title: "Contact Request",
      description: "Thank you for your interest! Our team will reach out to you within 24 hours.",
    });
  };

  // Service Data
  const strategicServices = [
    {
      title: "AI Consulting and Strategy",
      description: "Transform your business with strategic AI implementation roadmaps and expert guidance.",
      features: ["AI Readiness Assessment", "Strategic Planning", "ROI Analysis", "Implementation Roadmap"],
      icon: Brain
    },
    {
      title: "AI Sales and Marketing Strategy",
      description: "Leverage AI to supercharge your sales and marketing performance with data-driven insights.",
      features: ["Customer Segmentation", "Predictive Analytics", "Automated Campaigns", "Performance Optimization"],
      icon: TrendingUp
    },
    {
      title: "Personal Branding",
      description: "Build a commanding personal brand that establishes you as an industry thought leader.",
      features: ["Brand Strategy", "Content Planning", "Social Media Presence", "Thought Leadership"],
      icon: User
    }
  ];

  const developmentServices = [
    {
      title: "Custom AI Model Development",
      description: "Bespoke AI models tailored to your specific business requirements and use cases.",
      features: ["Machine Learning Models", "Deep Learning Solutions", "Model Training", "Performance Optimization"],
      icon: Cpu
    },
    {
      title: "AI System Integration",
      description: "Seamlessly integrate AI capabilities with your existing business infrastructure.",
      features: ["API Development", "System Architecture", "Data Pipeline Setup", "Legacy System Integration"],
      icon: Settings
    },
    {
      title: "Website, App & SaaS Development",
      description: "Full-stack development of modern web applications, mobile apps, and SaaS platforms.",
      features: ["Modern Web Apps", "Mobile Applications", "SaaS Platforms", "Cloud Deployment"],
      icon: Globe
    },
    {
      title: "Custom Astonishing UI Development",
      description: "Stunning user interfaces that captivate users and drive engagement.",
      features: ["Premium Design Systems", "Interactive Animations", "Responsive Design", "User Experience Optimization"],
      icon: Palette
    },
    {
      title: "AI Agent Integrations",
      description: "Intelligent automation agents that streamline your business processes.",
      features: ["Process Automation", "Intelligent Workflows", "Custom AI Agents", "Integration Solutions"],
      icon: Bot
    },
    {
      title: "AI Chatbot Integrations",
      description: "Advanced conversational AI solutions for customer service and engagement.",
      features: ["Natural Language Processing", "Multi-platform Support", "Analytics Dashboard", "Custom Training"],
      icon: MessageSquare
    }
  ];

  const contentServices = [
    {
      title: "Content Generation",
      description: "AI-powered content creation for newsletters, blogs, articles, and marketing materials.",
      features: ["SEO-Optimized Content", "Multi-format Creation", "Brand Voice Consistency", "Content Strategy"],
      icon: PenTool
    },
    {
      title: "Case Studies & Testimonials",
      description: "Compelling case studies and testimonials that showcase your success stories.",
      features: ["Success Story Documentation", "Impact Measurement", "Client Interviews", "Professional Presentation"],
      icon: FileText
    },
    {
      title: "Studio Grade Photography",
      description: "Professional photography and advanced photo editing services.",
      features: ["Studio Photography", "Product Photography", "Professional Editing", "Brand Photography"],
      icon: Camera
    },
    {
      title: "Videography & Video Editing",
      description: "High-quality video production and post-production services.",
      features: ["Professional Videography", "Post-Production Editing", "Motion Graphics", "Brand Videos"],
      icon: Video
    },
    {
      title: "Press Kit Development",
      description: "Comprehensive press kits that effectively communicate your brand story.",
      features: ["Brand Assets", "Press Releases", "Media Guidelines", "Digital Press Kit"],
      icon: Briefcase
    },
    {
      title: "CV Development",
      description: "Professional CV and resume creation that gets you noticed by top employers.",
      features: ["ATS-Optimized Format", "Industry-Specific Templates", "Career Consultation", "Personal Branding"],
      icon: FileText
    }
  ];

  const marketingServices = [
    {
      title: "Social Media Management",
      description: "Comprehensive social media management across all major platforms.",
      features: ["Content Creation", "Community Management", "Analytics & Reporting", "Paid Advertising"],
      icon: Share2
    },
    {
      title: "WhatsApp Group & Channel Creation",
      description: "Strategic WhatsApp marketing with organic and inorganic member boosting.",
      features: ["Group Setup", "Member Acquisition", "Content Strategy", "Engagement Optimization"],
      icon: MessageCircle
    },
    {
      title: "Community Building",
      description: "Build thriving communities that boost brand visibility and engagement.",
      features: ["Community Strategy", "Engagement Programs", "Brand Advocacy", "Growth Tactics"],
      icon: Users
    }
  ];

  const dataServices = [
    {
      title: "AI Data Analysis & Insights",
      description: "Advanced data analytics powered by AI to unlock actionable business insights.",
      features: ["Predictive Analytics", "Data Visualization", "Business Intelligence", "Automated Reporting"],
      icon: BarChart3
    },
    {
      title: "AI Automation Solutions",
      description: "Intelligent automation for ongoing support and repetitive task management.",
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Performance Monitoring"],
      icon: Zap
    }
  ];

  const salesServices = [
    {
      title: "Content Marketing",
      description: "Strategic content marketing that drives engagement and conversions.",
      features: ["Content Strategy", "SEO Optimization", "Lead Generation", "Performance Tracking"],
      icon: Target
    },
    {
      title: "Industry Events & Conferences",
      description: "Professional representation at industry events and conference showcasing.",
      features: ["Event Planning", "Booth Management", "Networking Strategy", "Lead Capture"],
      icon: Calendar
    },
    {
      title: "Partnerships & Collaborations",
      description: "Strategic partnerships that expand your reach and create new opportunities.",
      features: ["Partner Identification", "Collaboration Strategy", "Partnership Management", "Joint Ventures"],
      icon: Handshake
    },
    {
      title: "Email & WhatsApp Marketing",
      description: "Direct marketing campaigns that convert prospects into customers.",
      features: ["Campaign Design", "Segmentation", "Automation", "Performance Analytics"],
      icon: Mail
    },
    {
      title: "Performance Marketing",
      description: "Data-driven advertising campaigns across Meta, LinkedIn, and Google platforms.",
      features: ["Campaign Management", "Ad Creative Development", "Targeting Optimization", "ROI Tracking"],
      icon: Search
    },
    {
      title: "Sponsorships",
      description: "Strategic sponsorship opportunities that increase brand visibility and credibility.",
      features: ["Sponsorship Strategy", "Event Partnerships", "Brand Exposure", "ROI Measurement"],
      icon: DollarSign
    },
    {
      title: "Visitor Management System",
      description: "Advanced website visitor tracking and management for lead generation.",
      features: ["Visitor Analytics", "Lead Scoring", "Behavior Tracking", "Conversion Optimization"],
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <FloatingNavigation />
      {/* Hero Section */}
      <HeroSection 
        onExploreServices={handleExploreServices}
        onContactUs={handleContactUs}
      />
      {/* Services Introduction */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <Badge variant="secondary" className="mb-8 px-6 py-3 bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
            AI Deployment for{" "}
            <RotatingText
              texts={[
                "E-commerce",
                "Edtech",
                "Recruitment", 
                "Healthcare",
                "Fintech",
                "Real Estate",
                "Hospitality"
              ]}
              rotationInterval={3000}
            />
          </h2>
          {/* 6-Week Process */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-blue-500">6-Week Process</span>
              </h3>
            </div>
            
            {/* 6-Week Process Grid - 3 above, 3 below with 3D Glass Icons */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-3 gap-12 md:gap-16">
                {/* Top Row */}
                {/* Week 1 - Ideate */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <Lightbulb className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">IDEATE</h4>
                  <p className="text-sm text-gray-300">Conceptualize & Plan</p>
                </div>

                {/* Week 2 - Build */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <Hammer className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">BUILD</h4>
                  <p className="text-sm text-gray-300">Develop & Create</p>
                </div>

                {/* Week 3 - Feedback */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <MessageSquare className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">FEEDBACK</h4>
                  <p className="text-sm text-gray-300">Review & Refine</p>
                </div>

                {/* Bottom Row */}
                {/* Week 4 - Iterate */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <RotateCcw className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">ITERATE</h4>
                  <p className="text-sm text-gray-300">Improve & Polish</p>
                </div>

                {/* Week 5 - Launch */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <Rocket className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">LAUNCH</h4>
                  <p className="text-sm text-gray-300">Deploy & Release</p>
                </div>

                {/* Week 6 - Showcase */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative bg-transparent outline-none w-[4.5em] h-[4.5em] mb-6 group" style={{perspective: '24em', transformStyle: 'preserve-3d'}}>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
                      style={{
                        background: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))',
                        boxShadow: '0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)'
                      }}
                    ></span>
                    <span 
                      className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-white/15 transition-all duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.75em] group-hover:translate-z-[2em]"
                      style={{boxShadow: '0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset'}}
                    >
                      <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center">
                        <Trophy className="text-xl text-white" />
                      </span>
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-white mb-1">SHOWCASE</h4>
                  <p className="text-sm text-gray-300">Present & Celebrate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Sections */}
      <div id="services" className="relative">
        {/* Strategic Services */}
        <div data-section="strategic">
          <ServiceSection
            title="Strategic Services"
            description="Transform your business with strategic AI consulting and personal branding solutions that drive growth and establish market leadership."
            services={strategicServices}
            categoryColor="hsl(var(--primary))"
            onServiceClick={handleServiceClick}
          />
        </div>

        {/* Development & Technical Services */}
        <div data-section="development">
          <ServiceSection
            title="Development & Technical Services"
            description="Cutting-edge AI development and technical solutions that integrate seamlessly with your existing infrastructure."
            services={developmentServices}
            categoryColor="hsl(var(--accent))"
            onServiceClick={handleServiceClick}
          />
        </div>

        {/* Content & Creative Services */}
        <div data-section="content">
          <ServiceSection
            title="Content & Creative Services"
            description="Professional content creation and creative services that tell your story and captivate your audience."
            services={contentServices}
            categoryColor="hsl(220 100% 65%)"
            onServiceClick={handleServiceClick}
          />
        </div>

        {/* Marketing & Community Management */}
        <div data-section="marketing">
          <ServiceSection
            title="Marketing & Community Management"
            description="Comprehensive marketing and community building services that amplify your brand presence across all channels."
            services={marketingServices}
            categoryColor="hsl(270 70% 65%)"
            onServiceClick={handleServiceClick}
          />
        </div>

        {/* Data & Analytics Services */}
        <div data-section="analytics">
          <ServiceSection
            title="Data & Analytics Services"
            description="Unlock the power of your data with AI-driven analytics and automation solutions that drive informed decision-making."
            services={dataServices}
            categoryColor="hsl(200 70% 65%)"
            onServiceClick={handleServiceClick}
          />
        </div>

        {/* Marketing & Sales Strategy */}
        <div data-section="sales">
          <ServiceSection
            title="Marketing & Sales Strategy"
            description="Comprehensive marketing and sales strategies that convert prospects into customers and drive sustainable growth."
            services={salesServices}
            categoryColor="hsl(120 70% 65%)"
            onServiceClick={handleServiceClick}
          />
        </div>
      </div>
      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              <Target className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              The AI Excellence Advantage
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-First Approach</h3>
              <p className="text-muted-foreground">
                Every solution is built with AI at its core, ensuring future-ready implementations 
                that scale with your business needs.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of AI specialists, developers, and strategists bring years of experience 
                across diverse industries and cutting-edge technologies.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-scale bg-card/50 backdrop-blur-sm border-border/50">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Implementation</h3>
              <p className="text-muted-foreground">
                Fast-track your AI transformation with our proven methodologies and 
                accelerated development processes that deliver results quickly.
              </p>
            </Card>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/10 text-white border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Ready to Transform Your Business?
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Extraordinary Together
            </h2>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our premium AI solutions and creative services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" onClick={handleContactUs} className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Portfolio
                <ArrowUp className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold gradient-text">AI Excellence</h3>
              <p className="text-muted-foreground">
                Transforming businesses through innovative AI solutions and strategic excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Consulting</li>
                <li>Custom Development</li>
                <li>Content Creation</li>
                <li>Marketing Strategy</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Case Studies</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 AI Excellence. All rights reserved. Crafted with innovation and precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
