import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "How quickly can we see results from AI automation?",
      answer: "Basic automations deliver immediate time savings within 1-2 weeks of implementation. Complex integrations take 4-6 weeks but show measurable ROI from day one with reduced manual work and fewer errors.",
    },
    {
      question: "What platforms and tools do you integrate with?",
      answer: "We specialize in business tools: Xero, MYOB, Google Workspace, Microsoft 365, ServiceM8, Calendly, Stripe, Square, and most CRMs and ERPs. If you use it, we can probably automate it.",
    },
    {
      question: "Do we need technical staff to maintain the automations?",
      answer: "No technical knowledge required. We handle all setup, configuration, and technical maintenance. You'll receive simple training on using the automations, and our ongoing support keeps everything running smoothly.",
    },
    {
      question: "How secure is our business data during automation?",
      answer: "We follow Australian data security standards with encrypted connections, secure API integrations, and compliance with privacy regulations. Your data never leaves your existing platforms - we just connect them intelligently.",
    },
    {
      question: "What happens if an automation stops working?",
      answer: "Our ongoing support package includes monitoring and rapid response. Most issues are resolved within hours. We also provide backup procedures and fallback options to ensure business continuity.",
    },
    {
      question: "Can we start small and expand automations later?",
      answer: "Absolutely! We recommend starting with high-impact, simple automations. As you see results and build confidence, we expand to more complex workflows. Our packages scale with your business growth.",
    },
    {
      question: "How do you measure the success of automation projects?",
      answer: "We track concrete metrics: hours saved per week, reduction in manual errors, faster response times, improved customer satisfaction, and cost savings. Every project includes a 30-60-90 day results review.",
    },
    {
      question: "Do you offer training for our team?",
      answer: "Yes. Each package includes hands-on training sessions for your team. We create simple guides and provide video tutorials. Our support team is always available for questions as your team adapts to new workflows.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">AI Automation FAQ</h2>
          <p className="text-base sm:text-xl text-muted-foreground">Common questions about workflow automation, implementation, and business process optimization</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 sm:px-6">
              <AccordionTrigger className="text-sm sm:text-lg font-semibold hover:text-primary text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
