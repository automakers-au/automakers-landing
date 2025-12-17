import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Terms = () => {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-primary">Terms of Service</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using this website and services provided by Automakers ("we," "us," "our," or "Company"), you accept and agree to be bound by the terms and conditions of this Terms of Service agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Use License</h2>
              <p className="text-muted-foreground mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer, disassemble, or hack any services</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Disclaimer</h2>
              <p className="text-muted-foreground">
                The materials on our website are provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the Internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Limitations</h2>
              <p className="text-muted-foreground">
                In no event shall Automakers or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Automakers' website, even if we have been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground">
                The materials appearing on our website could include technical, typographical, or photographic errors. Automakers does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Materials and Links</h2>
              <p className="text-muted-foreground mb-3">The materials on our website may include links to third-party websites. We are not responsible for the content, accuracy, or practices of external websites. Your use of third-party websites is at your own risk and subject to their terms of service. We do not endorse any third-party website or product.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Modifications</h2>
              <p className="text-muted-foreground">
                We may revise these Terms of Service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service and any separate agreements we provide to use the website are governed by and construed in accordance with the laws of Australia, and you irrevocably submit to the exclusive jurisdiction of the courts located in Australia.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. User Accounts and Registration</h2>
              <p className="text-muted-foreground mb-3">If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account. We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">10. User Content</h2>
              <p className="text-muted-foreground mb-3">By submitting content to our website, you grant Automakers a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content. You warrant that you own or have the necessary rights to the content you submit and that it does not violate any third-party rights.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">11. Prohibited Conduct</h2>
              <p className="text-muted-foreground mb-3">You agree not to engage in any conduct that:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Is illegal or violates any applicable law or regulation</li>
                <li>Infringes on the intellectual property rights of others</li>
                <li>Is defamatory, obscene, offensive, or harassing</li>
                <li>Attempts to gain unauthorized access to our systems or networks</li>
                <li>Introduces viruses, malware, or other harmful code</li>
                <li>Impersonates another person or misrepresents your identity</li>
                <li>Spam or engaging in phishing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">12. Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                All materials on our website, including but not limited to text, graphics, logos, images, audio, and video content, are the property of Automakers or its content suppliers and are protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">13. Payment and Billing</h2>
              <p className="text-muted-foreground mb-3">If you purchase services through our website:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You agree to pay all fees and charges in accordance with the pricing and terms presented</li>
                <li>You authorize us to charge your payment method for services rendered</li>
                <li>All sales are final unless otherwise stated</li>
                <li>We reserve the right to modify prices with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">14. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, Automakers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, in connection with your use of our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">15. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless Automakers, its officers, directors, employees, and agents from any and all claims, damages, losses, liabilities, and expenses (including attorneys' fees) arising from your use of the website, violation of these Terms of Service, or violation of any rights of a third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">16. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms of Service is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">17. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Automakers</p>
                <p className="text-muted-foreground">Email: <a href="mailto:contact@automakers.com.au" className="text-primary underline">contact@automakers.com.au</a></p>
                <p className="text-muted-foreground"><span className="hidden" aria-hidden="true">Phone: 449956932</span>{/* TODO: show phone when available */}</p>
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
            <p className="text-muted-foreground text-sm"><span className="hidden" aria-hidden="true">Phone: 449956932</span>{/* TODO: show phone when available */}</p>
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

export default Terms;
