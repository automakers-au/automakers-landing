import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { TYPEFORM_URL: string };

const PricingSection: React.FC<Props> = ({ TYPEFORM_URL }) => {
  const pricingPlans = [
    {
      name: "Custom Solution",
      price: "Custom Quote",
      period: "quote",
      description: "Full personalization for unique workflows and enterprise needs",
      features: [
        "Full personalization and architecture design",
        "Workflows: Variable — defined by client budget and scope",
        "Pricing: Custom quote based on assessment",
        "Support: High / Dedicated",
        "Includes discovery, implementation and SLA options",
      ],
      ctaLabel: "Get started",
      popular: true,
    },
    {
      name: "Quick Start",
      price: "$500",
      period: "per month",
      description: "Immediate efficiency with easy-to-deploy automations",
      features: [
        "Workflows: 2-3 predefined simple workflows",
        "Pricing: $500/month",
        "Setup: $0 Setup Fee",
        "Support: Standard Email support",
        "Fast onboarding and 30-day check-in",
      ],
    },
    {
      name: "Smart Growth",
      price: "$1,000",
      period: "per month",
      description: "Scale mid-complexity processes with priority support",
      features: [
        "Workflows: 4-5 mid-complexity workflows",
        "Pricing: $1,000/month",
        "Setup Fee: $1,000 (AUD)",
        "Support: Enhanced / Priority (guaranteed response times & multiple channels)",
        "Includes monitoring and quarterly optimizations",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">Clear Packages, Measurable Results</h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            No hourly rates. Straightforward packages with defined deliverables and transparent pricing for businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 sm:scale-105"
                  : "border-border"
              } bg-card/50 backdrop-blur-sm`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-accent text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl sm:text-4xl font-bold text-primary">{plan.price}</span>
                  {plan.period !== "quote" && <span className="text-muted-foreground text-sm sm:text-base"> / {plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 px-4 sm:px-6 pb-4 sm:pb-6 flex-grow flex flex-col">
                <ul className="space-y-2 sm:space-y-3 flex-grow">
                  {plan.features.map((feature: string, fIndex: number) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full mt-4 ${plan.popular ? "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white" : "border-primary/50 hover:bg-primary/10"}`}
                  size="lg"
                >
                  <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
                    {plan.ctaLabel ? plan.ctaLabel : (plan.period === "quote" ? "Contact Sales" : "Get Started")}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
