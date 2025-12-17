import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Privacy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-0 bg-background/70 backdrop-blur-lg border-b border-border shadow-lg">
        <div className="px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => (window.location.href = "/")}
            className="text-xl sm:text-2xl font-bold tracking-wider uppercase bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            AUTOMAKERS
          </button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
            className="text-sm border-primary/50 hover:bg-primary/10"
          >
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-primary">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="text-muted-foreground">
                Automakers ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, business name, and other contact details you provide when contacting us or using our services.</li>
                <li><strong>Automatically Collected Information:</strong> When you visit our website, we automatically collect certain information about your device and how you interact with our site, including IP address, browser type, operating system, pages visited, and the time and duration of your visits.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze site usage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing your requests and responding to inquiries</li>
                <li>Sending marketing communications, promotional materials, and updates (with your consent)</li>
                <li>Analyzing website usage and trends to improve user experience</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground mb-3">We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>With service providers who assist us in operating our website and providing services (under confidentiality agreements)</li>
                <li>When required by law or in response to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-3">Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-muted-foreground mt-3">To exercise any of these rights, please contact us at <a href="mailto:contact@automakers.com.au" className="text-primary underline">contact@automakers.com.au</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Cookies</h2>
              <p className="text-muted-foreground">
                Our website uses cookies to enhance your experience. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information and terminate the child's use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Automakers</p>
                <p className="text-muted-foreground">Email: <a href="mailto:contact@automakers.com.au" className="text-primary underline">contact@automakers.com.au</a></p>
                {/* <p className="text-muted-foreground"><span className="hidden" aria-hidden="true">Phone: 449956932</span>TODO: show phone when available</p> */}
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">Last Updated: December 2025</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8 px-4">
        <div className="container mx-auto text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-muted-foreground text-sm">Email: <a href="mailto:contact@automakers.com.au" className="text-primary underline">contact@automakers.com.au</a></p>
               </div>

          <div className="flex items-center justify-center gap-4 mt-2">
            <a href="https://www.linkedin.com/company/automakers-au" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">LinkedIn</a>
            <a href="https://x.com/automakersAU" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">X</a>
            {/* TODO: Add Instagram and Facebook links when available */}
          </div>

          <p className="text-muted-foreground text-sm">© 2025 Automakers. All rights reserved.</p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full border-primary/50 hover:bg-primary/10"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
