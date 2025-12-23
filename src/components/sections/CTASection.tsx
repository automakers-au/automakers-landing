import React from "react";
import { Button } from "@/components/ui/button";

type Props = { TYPEFORM_URL: string };

const CTASection: React.FC<Props> = ({ TYPEFORM_URL }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Automate Your Business?</h2>
        <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Apply for a credit review or savings analysis. Let's discover how much time and money you can save.
        </p>
        <Button asChild size="lg" className="text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 animate-glow text-white">
          <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
            Start Your Automation Journey
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
