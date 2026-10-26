import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";

export const Route = createFileRoute("/$lang/terms")({
  component: TermsPage,
});

function TermsPage() {
  const { lang } = Route.useParams();
  return (
    <>
      <SEO
        title="Terms of Service — Volaly"
        description="Volaly's Terms of Service covering usage terms, limitation of liability, warranty disclaimer, arbitration clause, and governing law for the AI Business Growth Platform."
        canonical={`https://volaly.com/${lang}/terms`}
      />
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Effective date: August 1, 2025 · Last updated: August 1, 2025" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-muted-foreground">

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Volaly website and services (collectively, the "Services"),
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these
              Terms, do not use the Services. These Terms apply to all visitors, users, and subscribers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Description of Services</h2>
            <p>
              Volaly provides a software-as-a-service platform designed to help local businesses
              improve online visibility, automate customer communication, generate reviews, and grow
              revenue. Features, pricing, and availability may change at any time with reasonable notice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Accounts and Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal authority to enter into a binding
              contract to use the Services. If you are using the Services on behalf of a business, you
              represent that you have authority to bind that business to these Terms. You are responsible
              for maintaining the confidentiality of your account credentials and for all activity that
              occurs under your account.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Subscriptions and Payment</h2>
            <p>
              Certain features of the Services are available on a subscription basis. By subscribing,
              you authorise us to charge the applicable fees to your designated payment method on a
              recurring basis. All fees are stated in US dollars and are non-refundable except as
              expressly required by law or stated in these Terms. We reserve the right to change
              pricing with at least 30 days' notice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Cancellation and Termination</h2>
            <p>
              You may cancel your subscription at any time through your account settings or by
              contacting us at hello@thaisolutions.ai. Cancellation takes effect at the end of the
              current billing period; you will retain access until that date. We reserve the right to
              suspend or terminate your access to the Services at any time for violation of these Terms,
              non-payment, or any other reason at our discretion, with or without notice.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Intellectual Property</h2>
            <p>
              All content, software, features, and functionality of the Services — including but not
              limited to text, graphics, logos, and code — are owned by Volaly or its licensors and
              are protected by applicable intellectual property laws. You may not copy, modify,
              distribute, sell, or lease any part of our Services without our prior written permission.
            </p>
            <p>
              You retain ownership of any content you submit to the Services. By submitting content,
              you grant Volaly a worldwide, non-exclusive, royalty-free licence to use, store, and
              display that content solely to provide the Services to you.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">7. Prohibited Uses</h2>
            <p>You agree not to use the Services to:</p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li>Violate any applicable law or regulation.</li>
              <li>Infringe the intellectual property rights of any third party.</li>
              <li>Send unsolicited communications (spam).</li>
              <li>Transmit malicious code, viruses, or harmful data.</li>
              <li>Attempt to gain unauthorised access to any system or network.</li>
              <li>Use the Services in any manner that could damage, disable, or impair the platform.</li>
              <li>Resell or commercially exploit the Services without our express written consent.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED, ERROR-FREE
              OPERATION. VOLALY DOES NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR
              THAT ANY RESULTS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE OR RELIABLE. YOUR USE
              OF THE SERVICES IS AT YOUR SOLE RISK.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">9. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL VOLALY, ITS
              AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES — INCLUDING LOST PROFITS, LOSS OF DATA, OR
              BUSINESS INTERRUPTION — ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE
              THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN ANY CASE, OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR
              RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT
              YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Volaly and its affiliates, officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              losses, and expenses (including reasonable legal fees) arising out of or related to your
              use of the Services, your violation of these Terms, or your violation of any rights of
              a third party.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State
              of Delaware, United States, without regard to its conflict of law provisions. You agree
              to submit to the personal jurisdiction of the state and federal courts located in
              Delaware for the resolution of any disputes not subject to arbitration under Section 12.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">12. Dispute Resolution</h2>
            <p>
              <strong>Informal resolution.</strong> Before filing a formal legal claim, you agree to
              contact us at hello@thaisolutions.ai and attempt to resolve the dispute informally. We
              will try to resolve the issue within 30 days.
            </p>
            <p>
              <strong>Binding arbitration.</strong> If informal resolution fails, any dispute,
              controversy, or claim arising out of or relating to these Terms or the Services shall be
              settled by binding arbitration administered by the American Arbitration Association (AAA)
              under its Consumer Arbitration Rules. The arbitration will be conducted in English and
              the arbitrator's decision will be final and binding. YOU AND VOLALY EACH WAIVE THE RIGHT
              TO A JURY TRIAL AND TO PARTICIPATE IN A CLASS ACTION.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">13. Changes to These Terms</h2>
            <p>
              We may update these Terms at any time. We will notify you of material changes by updating
              the "Last updated" date above and, where appropriate, by email. Continued use of the
              Services after the updated Terms become effective constitutes your acceptance.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">14. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire
              agreement between you and Volaly with respect to the Services and supersede all prior
              agreements and understandings. If any provision of these Terms is held to be invalid or
              unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">15. Contact Us</h2>
            <p>
              Questions about these Terms? Contact us at:{" "}
              <a href="mailto:hello@thaisolutions.ai" className="text-foreground underline underline-offset-2">hello@thaisolutions.ai</a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
