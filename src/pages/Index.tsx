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
  MapPin,
} from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    {
      icon: Workflow,
      title: "Business Process Automation",
      description: "Streamline workflows, eliminate manual data entry, and automate document processing to boost productivity.",
    },
    {
      icon: Sparkles,
      title: "Custom AI Solutions",
      description: "Tailored AI integrations designed specifically for your business needs and existing systems.",
    },
    {
      icon: Mail,
      title: "Marketing Automation",
      description: "Automate email campaigns, social media posting, and content creation to maximize your reach.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Support",
      description: "Deploy intelligent chatbots for 24/7 customer service and automated lead generation.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechFlow Inc",
      content: "Automakers transformed our operations. We've reduced manual tasks by 75% and our team can focus on strategic work.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Operations Director, GrowthCo",
      content: "The AI chatbot they built handles 80% of our customer inquiries. Our response time went from hours to seconds.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Lead, Innovate Labs",
      content: "Their marketing automation system boosted our campaign efficiency by 60%. Simply outstanding results.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most automation projects take 2-6 weeks from consultation to deployment, depending on complexity. We provide detailed timelines during the initial consultation.",
    },
    {
      question: "What systems do you integrate with?",
      answer: "We integrate with all major platforms including CRMs (Salesforce, HubSpot), email tools (Gmail, Outlook), project management software (Asana, Monday), and most APIs. If you have a specific system, we can work with it.",
    },
    {
      question: "Do I need technical knowledge to use the automations?",
      answer: "No technical knowledge required! We design all automations with user-friendly interfaces and provide comprehensive training. Your team will be able to manage and monitor everything easily.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We implement enterprise-grade security measures including encryption, secure API connections, and compliance with data protection regulations like GDPR and CCPA.",
    },
    {
      question: "What happens if something breaks?",
      answer: "All our solutions include monitoring and maintenance. We proactively detect issues before they impact your business, and our support team is available to resolve any problems quickly.",
    },
    {
      question: "Can automations be customized later?",
      answer: "Yes! Our solutions are built to scale and evolve with your business. We can add features, modify workflows, and adjust automations as your needs change.",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,499",
      period: "one-time",
      description: "Perfect for small businesses getting started with automation",
      features: [
        "Up to 3 automated workflows",
        "Basic email automation",
        "Customer support chatbot",
        "Integration with 2 platforms",
        "30 days of support",
      ],
    },
    {
      name: "Professional",
      price: "$6,999",
      period: "one-time",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 10 automated workflows",
        "Advanced marketing automation",
        "Custom AI chatbot with training",
        "Integration with 5+ platforms",
        "90 days of support",
        "Monthly optimization calls",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Full-scale automation for large organizations",
      features: [
        "Unlimited automated workflows",
        "Custom AI model development",
        "Advanced integrations",
        "Dedicated account manager",
        "Priority 24/7 support",
        "Ongoing optimization",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 px-4 pt-4">
        <div
          className={`container mx-auto rounded-2xl transition-all duration-300 ${
            scrolled ? "bg-background/70 backdrop-blur-lg border border-border shadow-lg" : "bg-background/30 backdrop-blur-md"
          }`}
        >
          <div className="px-6 py-4 flex items-center justify-between">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Automakers
            </button>

            <div className="hidden md:flex items-center gap-6">
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

              <Button asChild className="animate-glow">
                <a href="https://tally.so/r/wzparq" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            <Button asChild className="md:hidden">
              <a href="https://tally.so/r/wzparq" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-foreground">with AI Automation</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Save time, reduce costs, and scale effortlessly with custom AI solutions tailored to your business needs.
          </p>

          <Button asChild size="lg" className="text-lg px-8 py-6 animate-glow animate-fade-in">
            <a href="https://tally.so/r/wzparq" target="_blank" rel="noopener noreferrer">
              Book Your Free Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See Automakers in Action</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how we help businesses like yours automate processes and achieve remarkable results.
            </p>
            <div className="aspect-video bg-card rounded-lg border border-border flex items-center justify-center">
              <div className="text-center">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">Video demo coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI automation solutions for every aspect of your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Real results from real businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Calculate Your Savings</h2>
            <p className="text-xl text-muted-foreground">See how much AI automation could save your business</p>
          </div>

          <ROICalculator />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our automation solutions</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20 scale-105"
                    : "border-border"
                } bg-card/50 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period !== "quote" && <span className="text-muted-foreground"> / {plan.period}</span>}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    <a href="https://tally.so/r/wzparq" target="_blank" rel="noopener noreferrer">
                      {plan.period === "quote" ? "Contact Sales" : "Get Started"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Automakers
              </h3>
              <p className="text-muted-foreground">Transforming businesses with intelligent AI automation solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
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
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@automakers.com.au</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+61 (08) 9XXX XXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Perth, WA</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Automakers. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full animate-glow"
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
