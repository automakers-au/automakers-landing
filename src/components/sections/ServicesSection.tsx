import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Workflow, Mail, MessageSquare } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Initial Diagnostic",
      description: "Comprehensive evaluation of your current processes, identification of automation opportunities, and actionable roadmap with clear deliverables.",
    },
    {
      icon: Workflow,
      title: "Basic Automation",
      description: "Implementation of simple automations and AI assistants for repetitive tasks. Quick wins that save time immediately with Google Workspace, Microsoft 365, and CRM integrations.",
    },
    {
      icon: Mail,
      title: "Advanced AI Integration",
      description: "Complex workflow automation, advanced tools integration, custom dashboards, and continuous optimization tailored to your business processes.",
    },
    {
      icon: MessageSquare,
      title: "Ongoing Support",
      description: "Monthly support for improvements, adjustments, and expansion of automations. Keep your systems running smoothly and evolve with your business.",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">AI Automation Services for SMEs</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Packaged solutions designed for measurable results. No hourly rates - just clear deliverables and transparent pricing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <CardDescription className="text-sm sm:text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
