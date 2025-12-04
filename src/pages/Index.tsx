import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ROICalculator } from "@/components/ROICalculator";
import {
  ArrowUp,
  Workflow,
  MessageSquare,
  Mail,
  Sparkles,
  Check,
  Star,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
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

  const testimonials = [
    {
      name: "David Mitchell",
      role: "Owner, Mitchell Plumbing Services",
      content: "Cut no-shows by 35% with automated booking reminders. The SMS and email automation saves me 8 hours a week on admin work.",
      rating: 5,
    },
    {
      name: "Sophie Chen",
      role: "Managing Director, Digital Marketing Co",
      content: "The workflow automation transformed our quote follow-ups. Response rates increased 45% and we closed more deals without hiring extra staff.",
      rating: 5,
    },
    {
      name: "Tom Harrison",
      role: "Senior Partner, Northbridge Legal Group",
      content: "Document processing that used to take days now takes minutes. The AI integration with our practice management system was seamless.",
      rating: 5,
    },
  ];

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

  const pricingPlans = [
    {
      name: "Discovery",
      price: "$495",
      period: "one-time",
      description: "Understand your automation potential with expert analysis",
      features: [
        "2-hour process evaluation",
        "Automation opportunity assessment",
        "Detailed action roadmap",
        "ROI projections",
        "Priority recommendations",
        "30-day implementation plan",
      ],
    },
    {
      name: "Automation Starter",
      price: "$1,950",
      period: "per month",
      description: "Quick wins for Perth SMEs ready to save time immediately",
      features: [
        "3-5 workflow automations",
        "Email & SMS automation",
        "Booking reminder system",
        "Quote follow-up automation",
        "Google Workspace/M365 integration",
        "2 hours monthly support",
        "Monthly performance review",
      ],
      popular: true,
    },
    {
      name: "Growth Package",
      price: "$4,500",
      period: "per month",
      description: "Complete automation solution for scaling businesses",
      features: [
        "10+ advanced workflows",
        "AI chatbot & lead capture",
        "Custom integrations (Xero, MYOB, CRM)",
        "Real-time dashboards",
        "Document processing automation",
        "5 hours monthly optimization",
        "Weekly reporting & analytics",
        "Priority Perth-based support",
      ],
    },
  ];

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
              className="text-xl sm:text-2xl font-bold tracking-wider uppercase bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              AUTOMAKERS
            </button>            {/* Desktop Nav */}
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
              <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection("calculator")} className="hover:text-primary transition-colors">
                Calculator
              </button>
              <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                Pricing
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
                <button onClick={() => scrollToSection("faq")} className="text-left py-2 hover:text-primary transition-colors">
                  FAQ
                </button>
                <button onClick={() => scrollToSection("calculator")} className="text-left py-2 hover:text-primary transition-colors">
                  Calculator
                </button>
                <button onClick={() => scrollToSection("pricing")} className="text-left py-2 hover:text-primary transition-colors">
                  Pricing
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

      {/* Hero Section with Background Video */}
      <section id="home" className="relative min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden">
        {/* Background Video with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          <div
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
            className="w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/landing-video.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Dark overlay - lighter black */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto text-center">
          <div className="mb-4 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase animate-fade-in">
            AI Process Automation for Small Businesses
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Automakers: AI Automations
            </span>
            <br />
            <span className="text-foreground text-2xl sm:text-4xl lg:text-5xl">for SMEs that Save Hours and Money</span>
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-fade-in px-2">
            Save hours, fewer manual tasks, local support in WA.
          </p>

          <p className="text-sm sm:text-base text-golden font-medium mb-8 max-w-2xl mx-auto animate-fade-in px-2">
            ✨ Free service in the initial phase. If you are satisfied with the result, then we charge you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 animate-fade-in px-2">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 animate-glow bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white">
              <a href={TYPEFORM_URL} target="_blank" rel="noopener noreferrer">
                Start Your Automation Journey
              </a>
            </Button>
            <Button
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 text-primary hover:text-primary/80 transition-colors hover:bg-transparent"
              variant="ghost"
              onClick={() => scrollToSection("calculator")}
            >
              Calculate Your Savings
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground animate-fade-in px-2">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Save 5-10+ hours monthly</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Reduce operational costs 20-40%</span>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-xl text-muted-foreground">Real results from real businesses</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-golden text-golden" />
                    ))}
                  </div>
                  <CardDescription className="text-sm sm:text-base italic">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-base sm:text-xl text-muted-foreground">See how much AI automation could save your business</p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* FAQ Section */}
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

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">Clear Packages, Measurable Results</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              No hourly rates. Straightforward packages with defined deliverables and transparent pricing for Perth businesses.
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
                    {plan.features.map((feature, fIndex) => (
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
                      {plan.period === "quote" ? "Contact Sales" : "Get Started"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-10 sm:py-12 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-wider uppercase bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                AUTOMAKERS
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">Transforming businesses with intelligent AI automation solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <button onClick={() => scrollToSection("services")} className="hover:text-primary transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("pricing")} className="hover:text-primary transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("faq")} className="hover:text-primary transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">contact@automakers.com.au</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+61 (08) 9XXX XXXX</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
              © 2025 Automakers. All rights reserved. | <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a> | <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            </p>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-primary/50 hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;