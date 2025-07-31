
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Building2, 
  Bot, 
  Target, 
  Megaphone, 
  Settings, 
  Headphones, 
  BarChart3, 
  Users, 
  Edit3,
  CheckCircle,
  Calendar,
  Mail,
  Download
} from "lucide-react";

interface UserAnswers {
  industry: string;
  aiAdoption: string;
  focusAreas: string[];
  teamSize: string;
  challenge: string;
  consultantExperience: string;
  email: string;
  name: string;
}

interface LeadMagnetProps {
  onClose: () => void;
  isOpen: boolean;
}

const industries = [
  { id: 'tech', label: 'Technology', icon: Bot },
  { id: 'finance', label: 'Finance & Banking', icon: Building2 },
  { id: 'retail', label: 'Retail & E-commerce', icon: Target },
  { id: 'healthcare', label: 'Healthcare', icon: Headphones },
  { id: 'manufacturing', label: 'Manufacturing', icon: Settings },
  { id: 'education', label: 'Education', icon: Users },
  { id: 'other', label: 'Other', icon: Edit3 }
];

const aiAdoptionLevels = [
  { id: 'none', label: 'No AI yet', icon: '🚫', description: 'Just getting started' },
  { id: 'basic', label: 'Basic AI tools', icon: '🟡', description: 'Using some AI tools' },
  { id: 'experiments', label: 'Some Experiments', icon: '🧪', description: 'Testing AI solutions' },
  { id: 'adopted', label: 'Fully Adopted', icon: '🤖', description: 'AI-powered operations' }
];

const focusAreaOptions = [
  { id: 'sales', label: 'Sales', icon: Target },
  { id: 'marketing', label: 'Marketing', icon: Megaphone },
  { id: 'operations', label: 'Operations', icon: Settings },
  { id: 'support', label: 'Customer Support', icon: Headphones },
  { id: 'analytics', label: 'Data/Analytics', icon: BarChart3 },
  { id: 'other', label: 'Other', icon: Edit3 }
];

const teamSizes = [
  { id: 'solo', label: '1 (Solo)', icon: '👤' },
  { id: 'small', label: '2-10', icon: '👥' },
  { id: 'medium', label: '11-50', icon: '👨‍👩‍👧‍👦' },
  { id: 'large', label: '51-200', icon: '🏢' },
  { id: 'enterprise', label: '200+', icon: '🏭' }
];

export const LeadMagnet = ({ onClose, isOpen }: LeadMagnetProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({
    industry: '',
    aiAdoption: '',
    focusAreas: [],
    teamSize: '',
    challenge: '',
    consultantExperience: '',
    email: '',
    name: ''
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [report, setReport] = useState<string>('');
  const [showReport, setShowReport] = useState(false);

  const totalSteps = 9;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFocusAreaToggle = (areaId: string) => {
    setAnswers(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(areaId)
        ? prev.focusAreas.filter(id => id !== areaId)
        : [...prev.focusAreas, areaId]
    }));
  };

  const generateReport = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
      });

      if (response.ok) {
        const data = await response.json();
        setReport(data.report);
        setShowReport(true);
      } else {
        // Fallback report
        setReport(generateFallbackReport());
        setShowReport(true);
      }
    } catch (error) {
      console.error('Error generating report:', error);
      setReport(generateFallbackReport());
      setShowReport(true);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateFallbackReport = () => {
    return `
      <div class="ai-readiness-report">
        <h2>🚀 Your AI Readiness Assessment</h2>
        <div class="score-section">
          <h3>AI Readiness Score: Intermediate</h3>
          <p>Based on your ${answers.industry} industry focus and current AI adoption level, your business is ready to accelerate its AI transformation.</p>
        </div>
        <div class="recommendations">
          <h3>🎯 Personalized Recommendations:</h3>
          <div class="recommendation">
            <h4>🤖 AI-Powered Automation</h4>
            <p>Implement intelligent automation solutions to streamline your ${answers.focusAreas.join(', ')} processes and increase efficiency by 40-60%.</p>
          </div>
          <div class="recommendation">
            <h4>📊 Data-Driven Insights</h4>
            <p>Leverage AI analytics to unlock actionable insights from your business data and make smarter strategic decisions.</p>
          </div>
          <div class="recommendation">
            <h4>🎯 Custom AI Strategy</h4>
            <p>Develop a tailored AI roadmap that aligns with your ${answers.teamSize} team size and specific business objectives.</p>
          </div>
        </div>
        <div class="next-steps">
          <h3>🚀 Ready to Get Started?</h3>
          <p>Book your free 30-minute AI strategy consultation to discuss how these recommendations can transform your business.</p>
        </div>
      </div>
    `;
  };

  const handleSubmit = () => {
    generateReport();
    setCurrentStep(totalSteps - 1);
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold gradient-text">Discover How AI Can Transform Your Business</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Take our 2-minute assessment and get a personalized AI Readiness Report with actionable recommendations for your business.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
              <Badge variant="secondary">✨ Free Assessment</Badge>
              <Badge variant="secondary">⚡ Instant Results</Badge>
              <Badge variant="secondary">🎯 Personalized Report</Badge>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What industry are you in?</h2>
              <p className="text-muted-foreground">This helps us tailor recommendations to your sector</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <button
                    key={industry.id}
                    onClick={() => setAnswers(prev => ({ ...prev, industry: industry.id }))}
                    className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                      answers.industry === industry.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{industry.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What's your current AI adoption level?</h2>
              <p className="text-muted-foreground">Help us understand where you're starting from</p>
            </div>
            <div className="space-y-3">
              {aiAdoptionLevels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setAnswers(prev => ({ ...prev, aiAdoption: level.id }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-[1.02] text-left ${
                    answers.aiAdoption === level.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{level.icon}</span>
                    <div>
                      <div className="font-semibold">{level.label}</div>
                      <div className="text-sm text-muted-foreground">{level.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Which areas are your top focus?</h2>
              <p className="text-muted-foreground">Select all that apply - we'll prioritize recommendations</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {focusAreaOptions.map((area) => {
                const Icon = area.icon;
                const isSelected = answers.focusAreas.includes(area.id);
                return (
                  <button
                    key={area.id}
                    onClick={() => handleFocusAreaToggle(area.id)}
                    className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                      isSelected
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2" />
                    <span className="text-sm font-medium">{area.label}</span>
                    {isSelected && <CheckCircle className="w-4 h-4 mx-auto mt-1" />}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What's your team size?</h2>
              <p className="text-muted-foreground">This helps us recommend solutions that fit your scale</p>
            </div>
            <div className="space-y-3">
              {teamSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setAnswers(prev => ({ ...prev, teamSize: size.id }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-[1.02] ${
                    answers.teamSize === size.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{size.icon}</span>
                    <span className="font-semibold">{size.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">What's your biggest challenge with AI?</h2>
              <p className="text-muted-foreground">Share your main obstacle so we can address it directly</p>
            </div>
            <Textarea
              placeholder="e.g., Don't know where to start, lack of technical team, scaling AI, budget constraints..."
              value={answers.challenge}
              onChange={(e) => setAnswers(prev => ({ ...prev, challenge: e.target.value }))}
              className="min-h-[120px]"
            />
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Have you worked with AI consultants before?</h2>
              <p className="text-muted-foreground">This helps us understand your experience level</p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => setAnswers(prev => ({ ...prev, consultantExperience: 'yes' }))}
                className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-[1.02] ${
                  answers.consultantExperience === 'yes'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🤝</span>
                  <span className="font-semibold">Yes, I have experience with AI consultants</span>
                </div>
              </button>
              <button
                onClick={() => setAnswers(prev => ({ ...prev, consultantExperience: 'no' }))}
                className={`w-full p-4 rounded-lg border-2 transition-all hover:scale-[1.02] ${
                  answers.consultantExperience === 'no'
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">🚫</span>
                  <span className="font-semibold">No, this would be my first time</span>
                </div>
              </button>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Where should we send your report?</h2>
              <p className="text-muted-foreground">Get your personalized AI Readiness Report delivered instantly</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  placeholder="Your full name"
                  value={answers.name}
                  onChange={(e) => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={answers.email}
                  onChange={(e) => setAnswers(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="text-center space-y-6">
            {isGenerating ? (
              <>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-8 h-8 text-primary animate-spin" />
                </div>
                <h2 className="text-2xl font-bold">Generating Your AI Readiness Report...</h2>
                <p className="text-muted-foreground">Our AI is analyzing your responses and creating personalized recommendations.</p>
              </>
            ) : showReport ? (
              <>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Your Report is Ready!</h2>
                <div 
                  className="text-left bg-card border rounded-lg p-6 max-h-96 overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: report }}
                />
                <div className="flex flex-col space-y-3">
                  <Button className="w-full" size="lg">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Free Strategy Call
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Report
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  A copy of this report has been sent to {answers.email}
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold gradient-text">Thank You!</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your responses have been recorded. We're generating your personalized AI Readiness Report and will send it to {answers.email} shortly.
                </p>
                <Button onClick={generateReport} className="w-full" size="lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate My Report Now
                </Button>
              </>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true;
      case 1: return answers.industry !== '';
      case 2: return answers.aiAdoption !== '';
      case 3: return answers.focusAreas.length > 0;
      case 4: return answers.teamSize !== '';
      case 5: return answers.challenge.trim() !== '';
      case 6: return answers.consultantExperience !== '';
      case 7: return answers.email !== '' && answers.name !== '';
      default: return true;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-semibold">AI Readiness Analyzer</span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center"
            >
              ×
            </button>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        <div className="p-6 min-h-[400px] flex items-center justify-center">
          {renderStep()}
        </div>

        <div className="p-6 border-t">
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {currentStep === 7 ? (
              <Button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className="flex items-center space-x-2"
              >
                <span>Generate Report</span>
                <Sparkles className="w-4 h-4" />
              </Button>
            ) : currentStep < totalSteps - 1 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center space-x-2"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={onClose} className="flex items-center space-x-2">
                <span>Close</span>
                <CheckCircle className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
