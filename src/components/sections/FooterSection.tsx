import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { scrollToTop: () => void };

const FooterSection: React.FC<Props> = ({ scrollToTop }) => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-10 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center text-center">
            <img src="/favicon-color.png" alt="Automakers logo" className="w-12 h-12 sm:w-14 sm:h-14 rounded mb-2" />
            <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-wider uppercase bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AUTOMAKERS
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">Transforming businesses with intelligent AI automation solutions.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:contact@automakers.com.au" className="break-all text-muted-foreground hover:text-primary">contact@automakers.com.au</a>
              </li>

            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/automakers-au" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://x.com/automakersAU" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">X</a>
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
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 15l7-7 7 7" /></svg>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
