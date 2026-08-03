import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";

export const Route = createFileRoute("/privacy")({
  component: () => (
    <>
      <SEO
        title="Privacy Policy — Volaly"
        description="Read Volaly's Privacy Policy. Learn what data we collect, how we use it, your rights under CCPA, and how to contact us about your personal information."
        canonical="https://volaly.com/privacy"
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Effective date: August 1, 2025 · Last updated: August 1, 2025" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-muted-foreground">

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Who We Are</h2>
            <p>
              Volaly ("Volaly," "we," "us," or "our") is a software-as-a-service platform that helps
              local businesses improve their online visibility, automate guest communication, and grow
              revenue. Our registered contact address is hello@thaisolutions.ai.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
            <p>We may collect the following categories of personal information:</p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li><strong>Contact and identity data</strong> — name, email address, phone number, and company name you provide when submitting a form, booking a consultation, or contacting us.</li>
              <li><strong>Usage and log data</strong> — IP address, browser type, pages visited, time on site, and referring URL, collected automatically when you visit our website.</li>
              <li><strong>Cookie and tracking data</strong> — information collected through cookies and similar technologies (see Section 5).</li>
              <li><strong>Communications</strong> — messages you send us via email, chat, or contact forms.</li>
            </ul>
            <p>We do not collect sensitive personal information such as Social Security numbers, financial account numbers, or health data through this website.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li>Respond to your enquiries and provide our services.</li>
              <li>Send you product updates, promotional communications, and offers (you may opt out at any time).</li>
              <li>Improve and personalise the website experience.</li>
              <li>Analyse usage patterns and optimise our marketing.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information to third parties. We may share your information
              with trusted service providers who assist us in operating our website and delivering our
              services (for example, email platforms, analytics providers, and customer relationship
              management tools). These providers are contractually required to keep your information
              confidential and use it only to provide services to us.
            </p>
            <p>
              We may also disclose your information when required by law, court order, or government
              authority, or to protect the rights, property, or safety of Volaly, our users, or the
              public.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to improve functionality and
              analyse site traffic. Cookies are small text files stored on your device. We use:
            </p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li><strong>Essential cookies</strong> — necessary for the website to function correctly.</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our site (e.g. Google Analytics).</li>
            </ul>
            <p>
              You can control cookies through your browser settings. Please see our{" "}
              <a href="/cookie-policy" className="text-foreground underline underline-offset-2">Cookie Policy</a>{" "}
              for full details.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to fulfil the purposes described
              in this policy or as required by law. Contact enquiry data is typically retained for up
              to 36 months. Usage and log data may be retained for up to 24 months for analytics
              purposes. You may request deletion at any time (see Section 7).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal information:</p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li><strong>Right to know</strong> — request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
              <li><strong>Right to delete</strong> — request that we delete personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to opt out</strong> — we do not sell personal information. If this changes, we will provide an opt-out mechanism.</li>
              <li><strong>Right to non-discrimination</strong> — we will not discriminate against you for exercising any of these rights.</li>
              <li><strong>Right to correct</strong> — request correction of inaccurate personal information.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:hello@thaisolutions.ai" className="text-foreground underline underline-offset-2">hello@thaisolutions.ai</a>.
              We will respond within 45 days as required by applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">8. California Residents — CCPA Notice</h2>
            <p>
              If you are a California resident, the California Consumer Privacy Act (CCPA) provides you
              with specific rights regarding your personal information. In addition to the rights listed
              in Section 7, California residents may also submit a verifiable consumer request through
              an authorised agent by providing written proof of authorisation.
            </p>
            <p>
              In the preceding 12 months, we have collected the following CCPA categories of personal
              information: Identifiers (name, email, IP address); Internet or other electronic network
              activity (usage data, cookies); and Commercial information (services requested). We
              collect this information for the business purposes described in Section 3. We do not sell
              or share (as defined under CCPA) personal information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">9. Security</h2>
            <p>
              We implement industry-standard technical and organisational measures to protect your
              personal information against unauthorised access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet or electronic storage is 100% secure,
              and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 16. We do not knowingly
              collect personal information from children under 16. If you believe we have inadvertently
              collected such information, please contact us and we will delete it promptly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "Last updated" date at the top of this page. Continued use of our website after any
              changes constitutes your acceptance of the updated policy. We encourage you to review
              this page periodically.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">12. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices,
              please contact us at:{" "}
              <a href="mailto:hello@thaisolutions.ai" className="text-foreground underline underline-offset-2">hello@thaisolutions.ai</a>
            </p>
          </div>

        </div>
      </section>
    </>
  ),
});
