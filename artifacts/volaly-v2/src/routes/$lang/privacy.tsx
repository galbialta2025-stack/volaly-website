import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalList, LegalSection, LegalTable } from "@/components/legal/LegalLayout";
import { LEGAL_EFFECTIVE_DATE, LEGAL_ENTITY } from "@/lib/legal";

export const Route = createFileRoute("/$lang/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { lang } = Route.useParams();
  const linkClass = "text-foreground underline underline-offset-2";
  const mail = (
    <a href={`mailto:${LEGAL_ENTITY.email}`} className={linkClass}>
      {LEGAL_ENTITY.email}
    </a>
  );

  return (
    <LegalLayout
      slug="privacy"
      title="Privacy Policy"
      description="How Volaly (SmartAI Platforms LLC) processes personal data: purposes, legal bases, service providers, international transfers and your rights under the GDPR, Thailand's PDPA and the Swiss FADP."
      subtitle={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <LegalSection title="1. Controller">
        <p>
          The controller for the processing described in this policy is {LEGAL_ENTITY.name},{" "}
          {LEGAL_ENTITY.street}, {LEGAL_ENTITY.city}, {LEGAL_ENTITY.country} ("Volaly", "we",
          "us"). Volaly is a brand of {LEGAL_ENTITY.name}. For any privacy question or request,
          contact us at {mail}.
        </p>
        <p>
          This policy applies to our website, our platform and our own business communication. It
          is designed to meet the requirements of the EU General Data Protection Regulation (GDPR),
          Thailand's Personal Data Protection Act B.E. 2562 (PDPA) and the Swiss Federal Act on Data
          Protection (FADP), to the extent these laws apply.
        </p>
      </LegalSection>

      <LegalSection title="2. Data we process on behalf of our customers">
        <p>
          Our customers are businesses. When they use Volaly to communicate with their own
          customers, guests or staff, publish content or manage leads and bookings, we process that
          personal data on their behalf as a processor. In that case, the customer is the
          controller and its own privacy notice applies. Our obligations are set out in our{" "}
          <Link to="/$lang/dpa" params={{ lang }} className={linkClass}>
            Data Processing Addendum
          </Link>
          . If you are a customer, guest or employee of a business that uses Volaly, please contact
          that business first; we will support it in handling your request.
        </p>
      </LegalSection>

      <LegalSection title="3. Data we process as controller, purposes and legal bases">
        <LegalTable
          head={["Situation", "Data", "Purpose", "Legal basis"]}
          rows={[
            [
              "Visiting our website",
              "IP address, date and time, requested page, browser and device information, referrer (server logs of our hosting provider)",
              "Delivering the website, security, preventing abuse, troubleshooting",
              "Legitimate interest in a secure, functioning website (GDPR Art. 6(1)(f); PDPA s. 24(5))",
            ],
            [
              "Contact form",
              "Name, email, subject, message",
              "Answering your enquiry",
              "Pre-contractual steps or legitimate interest in answering enquiries (GDPR Art. 6(1)(b), (f); PDPA s. 24(3), (5))",
            ],
            [
              "Website chat (AI assistant)",
              "Your messages, the conversation history of the session, a random session ID",
              "Answering your questions about Volaly with an AI assistant",
              "Pre-contractual steps or legitimate interest (GDPR Art. 6(1)(b), (f); PDPA s. 24(3), (5))",
            ],
            [
              "Creating and using an account",
              "Company name, email, password (stored as a hash), confirmation of business status, date and version of accepted Terms, language, usage and credit data",
              "Providing the platform, managing your account, support",
              "Performance of a contract (GDPR Art. 6(1)(b); PDPA s. 24(3))",
            ],
            [
              "Purchases and billing",
              "Company and billing details, plan, invoices, payment status (card data is handled by our payment provider, not by us)",
              "Billing, accounting, tax compliance",
              "Contract and legal obligations (GDPR Art. 6(1)(b), (c); PDPA s. 24(3), (6))",
            ],
            [
              "Business development",
              "Business contact details of venues and their representatives (name, role, business, publicly available contact channels), communication history",
              "Contacting businesses that may be interested in our services and following up on enquiries",
              "Legitimate interest in B2B marketing (GDPR Art. 6(1)(f); PDPA s. 24(5)); you can object at any time",
            ],
            [
              "Newsletters and product news",
              "Email, name, company",
              "Sending information about our services",
              "Your consent (GDPR Art. 6(1)(a); PDPA s. 19) or, for existing customers, our legitimate interest where permitted by law; you can unsubscribe at any time",
            ],
            [
              "Legal claims",
              "Data relevant to the dispute",
              "Establishing, exercising or defending legal claims",
              "Legitimate interest (GDPR Art. 6(1)(f); PDPA s. 24(5))",
            ],
          ]}
        />
        <p>
          Where we rely on legitimate interest, you have the right to object (see Section 8). We do
          not sell personal data and do not use it for advertising profiles. We do not use your chat
          messages to train AI models.
        </p>
      </LegalSection>

      <LegalSection title="4. AI processing">
        <p>
          Our website chat and several platform features use AI models provided by third parties.
          Text you enter in the chat is sent, together with the conversation history of the
          session, through our automation server to an AI model provider to generate a reply.
          Please do not enter sensitive personal data in the chat. We do not make decisions based
          solely on automated processing that produce legal or similarly significant effects for
          you.
        </p>
      </LegalSection>

      <LegalSection title="5. Service providers and recipients">
        <p>
          We use the following service providers, who process personal data on our behalf under
          data processing terms and only as instructed by us:
        </p>
        <LegalTable
          head={["Provider", "Purpose", "Processing location"]}
          rows={[
            ["Cloudflare, Inc.", "Website hosting and content delivery", "USA and global edge network"],
            ["Supabase, Inc.", "Database and user authentication", "India (AWS, Mumbai)"],
            ["Hostinger", "Server for our automation workflows (website chat, contact form, platform automations)", "Malaysia (Kuala Lumpur)"],
            ["OpenRouter, Inc.", "Routing of requests to AI models", "USA"],
            ["Google LLC", "AI models (Gemini) and spreadsheets", "USA"],
            ["Stripe, Inc.", "Payment processing", "USA"],
            ["Cloudinary Ltd.", "Storage and processing of images and videos", "USA"],
            ["Creatomate", "Video rendering", "Netherlands"],
            ["Cartesia", "Text-to-speech", "USA"],
          ]}
        />
        <p>
          When you or our customers connect messaging or social media channels, data is exchanged
          with the operators of those channels (for example Meta Platforms for Facebook, Instagram,
          Messenger and WhatsApp, or LY Corporation for LINE). These operators act under their own
          privacy policies. We also disclose data to authorities, courts or advisers where required
          by law or necessary to protect our rights.
        </p>
      </LegalSection>

      <LegalSection title="6. International transfers">
        <p>
          We are a US company and our providers process data in the USA, India, Malaysia and other
          countries listed above. These countries may not offer a level of data protection
          equivalent to your home country. Where the GDPR or the FADP applies, we protect transfers
          with the European Commission's Standard Contractual Clauses (with the Swiss amendments
          where relevant) or rely on an adequacy decision, such as the EU-US Data Privacy Framework
          for certified US recipients. Where the PDPA applies, we use appropriate safeguards under
          Sections 28 and 29 PDPA, such as standard contractual clauses. You can request a copy of
          the relevant safeguards at {mail}.
        </p>
      </LegalSection>

      <LegalSection title="7. Retention">
        <LegalList>
          <li>Server logs: according to our hosting provider's standard log retention, used for security only.</li>
          <li>Contact form and chat messages: up to 24 months after our last contact, unless they lead to a contract.</li>
          <li>Account data: for the duration of the contract and up to 30 days after termination to allow data export; then deleted.</li>
          <li>Billing records: as long as required by applicable tax and commercial law.</li>
          <li>Business development data: until you object, or 24 months after the last interaction.</li>
          <li>Newsletter data: until you unsubscribe or withdraw consent.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. Your rights">
        <p>Depending on the law that applies to you, you have the right to:</p>
        <LegalList>
          <li>access the personal data we hold about you and receive a copy;</li>
          <li>have inaccurate data corrected and incomplete data completed;</li>
          <li>have your data deleted or anonymized;</li>
          <li>restrict or suspend processing;</li>
          <li>receive your data in a structured, machine-readable format and have it transmitted to another controller (data portability);</li>
          <li>
            <strong className="text-foreground">object</strong> to processing based on legitimate
            interest, and to direct marketing at any time;
          </li>
          <li>withdraw consent at any time, without affecting processing carried out before withdrawal;</li>
          <li>
            lodge a complaint with a supervisory authority, in particular the data protection
            authority of the EU or EEA country where you live or work, Thailand's Personal Data
            Protection Committee, or the Swiss Federal Data Protection and Information Commissioner
            (FDPIC).
          </li>
        </LegalList>
        <p>
          To exercise your rights, email {mail}. We may ask you to verify your identity. We respond
          within one month (GDPR) or within the time limit required by the applicable law.
        </p>
      </LegalSection>

      <LegalSection title="9. Cookies and local storage">
        <p>
          We do not use analytics, advertising or tracking cookies. We only store information on
          your device that is strictly necessary for features you use, such as your language choice,
          your chat session and your login. Videos are loaded from YouTube only after you click
          play. Details are in our{" "}
          <Link to="/$lang/cookie-policy" params={{ lang }} className={linkClass}>
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="10. Security">
        <p>
          We use technical and organizational measures appropriate to the risk, including encrypted
          connections (TLS), encryption at rest by our hosting providers, access restricted to
          authorized persons, and authentication for administrative access. No method of
          transmission or storage is completely secure, but we work to protect your data and will
          notify you and the authorities of personal data breaches where required by law.
        </p>
      </LegalSection>

      <LegalSection title="11. Children">
        <p>
          Our services are intended for businesses and are not directed at persons under 18. We do
          not knowingly collect personal data from children.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>
          We update this policy when our processing or the law changes. The effective date at the
          top shows the current version. We will inform customers of material changes by email or
          in the platform.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>
          {LEGAL_ENTITY.name}, {LEGAL_ENTITY.street}, {LEGAL_ENTITY.city}, {LEGAL_ENTITY.country}.
          Email: {mail}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
