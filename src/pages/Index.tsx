import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import TeamSection from "@/components/sections/TeamSection";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import FooterSection from "@/components/sections/FooterSection";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  const TYPEFORM_URL = "https://form.typeform.com/to/Tw2sG6yF";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 px-0">
        <div
          className={`w-full transition-all duration-300 ${
            scrolled ? "bg-background/70 backdrop-blur-lg border-b border-border shadow-lg" : "bg-background/30 backdrop-blur-md"
          }`}
        >
          <div className="px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <button
              onClick={scrollToTop}
              className="flex items-center text-xl sm:text-2xl hover:opacity-80 transition-opacity group"
              aria-label="Automakers Home"
            >
              <img src="/favicon-color.png" alt="Automakers logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded" />
              <span className="ml-3 inline-block max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out opacity-0 group-hover:max-w-[220px] group-hover:opacity-100 text-sm sm:text-base font-semibold tracking-wider uppercase bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                AUTOMAKERS
              </span>
            </button>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("calculator")} className="hover:text-primary transition-colors">
                Calculator
              </button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">
                FAQ
              </button>

              <Button asChild className="animate-glow bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
                <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden px-4 pb-4 border-t border-border/50 animate-fade-in">
              <div className="flex flex-col gap-3 pt-4">
                <button onClick={() => scrollToSection("home")} className="text-left py-2 hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection("services")} className="text-left py-2 hover:text-primary transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection("testimonials")} className="text-left py-2 hover:text-primary transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection("calculator")} className="text-left py-2 hover:text-primary transition-colors">
                  Calculator
                </button>
                <button onClick={() => scrollToSection("pricing")} className="text-left py-2 hover:text-primary transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection("faq")} className="text-left py-2 hover:text-primary transition-colors">
                  FAQ
                </button>
                <Button asChild className="mt-2 bg-gradient-to-r from-primary to-accent text-white">
                  <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <HeroSection TYPEFORM_URL={TYPEFORM_URL} scrollToSection={scrollToSection} scrollY={scrollY} />
      <ServicesSection />
      <TestimonialsSection />
      <TeamSection />
      <CalculatorSection />
      <PricingSection TYPEFORM_URL={TYPEFORM_URL} />
      <CTASection TYPEFORM_URL={TYPEFORM_URL} />
      <FAQSection />


      <FooterSection scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;