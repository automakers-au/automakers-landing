import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  TYPEFORM_URL: string;
  scrollToSection: (id: string) => void;
  scrollY: number;
};

const HeroSection: React.FC<Props> = ({ TYPEFORM_URL, scrollToSection, scrollY }) => {
  return (
    <section id="home" className="relative min-h-[68vh] sm:min-h-screen pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div
          style={{
            transform: `translateY(${scrollY * (typeof window !== 'undefined' && window.innerWidth < 640 ? 0.15 : 0.5)}px)`,
          }}
          className="w-full h-full"
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/assets/landing-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 animate-fade-in leading-tight">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
            AUTOMAKERS
          </span>
        </h1>

        <div className="mb-3 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
          AI Process Automation for Small Businesses
        </div>
        <p className="text-foreground text-xl sm:text-3xl lg:text-4xl mb-4">for SMEs that Save Hours and Money</p>

        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-3 max-w-3xl mx-auto animate-fade-in px-2 leading-relaxed">
          Save hours, fewer manual tasks, local support for small businesses.
        </p>

        <p className="text-sm sm:text-base text-golden font-medium mb-6 max-w-2xl mx-auto animate-fade-in px-2">
          ✨ Free service in the initial phase. If you are satisfied with the result, then we charge you.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 animate-fade-in px-2">
          <Button asChild size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-8 sm:py-6 animate-glow bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
            <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
              Start Your Automation Journey
            </a>
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 sm:px-6 sm:py-6 text-primary hover:text-primary/80 transition-colors hover:bg-transparent"
            variant="ghost"
            onClick={() => scrollToSection("calculator")}
          >
            Calculate Your Savings
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in px-2">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 17.5 5.7z" /></svg>
            <span>Save 5-10+ hours monthly</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 17.5 5.7z" /></svg>
            <span>Reduce operational costs 20-40%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
