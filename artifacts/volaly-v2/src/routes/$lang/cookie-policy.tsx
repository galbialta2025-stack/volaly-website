import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalSection, LegalTable } from "@/components/legal/LegalLayout";
import { LEGAL_EFFECTIVE_DATE, LEGAL_ENTITY } from "@/lib/legal";

export const Route = createFileRoute("/$lang/cookie-policy")({
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  const { lang } = Route.useParams();
  const linkClass = "text-foreground underline underline-offset-2";

  return (
    <LegalLayout
      slug="cookie-policy"
      title="Cookie Policy"
      description="Volaly uses no tracking, analytics or advertising cookies. This page lists the strictly necessary browser storage we use and how embedded videos are handled."
      subtitle={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <LegalSection title="1. Summary">
        <p>
          Our website does not use analytics, advertising or tracking cookies, and we do not load
          third-party fonts, scripts or images when you open a page. We only store information on
          your device that is strictly necessary for a feature you actively use. For this reason we
          do not ask for cookie consent.
        </p>
      </LegalSection>

      <LegalSection title="2. What we store on your device">
        <p>
          Instead of cookies, our website uses your browser's local storage and session storage:
        </p>
        <LegalTable
          head={["Name", "Type", "Purpose", "Duration"]}
          rows={[
            ["volaly-locale", "Local storage", "Remembers the language you selected", "Until you clear your browser data"],
            ["volaly_chat_session", "Session storage", "Keeps your chat conversation together while the chat is open", "Until you close the browser tab"],
            ["sb-…-auth-token", "Local storage", "Keeps you logged in to your Volaly account (only set after you log in)", "Until you log out or the session expires"],
          ]}
        />
        <p>
          This storage is strictly necessary to provide the services you request and does not
          require consent under applicable ePrivacy rules (for example Section 25(2) of the German
          TDDDG) or Thailand's PDPA.
        </p>
      </LegalSection>

      <LegalSection title="3. Embedded videos">
        <p>
          Demo videos are hosted on YouTube (Google). They are loaded only after you click the play
          button. Before that, no connection to YouTube is made. Once you start a video, Google may
          store information on your device and process your data under its own privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Google Privacy Policy
          </a>
          . We use YouTube's privacy-enhanced mode (youtube-nocookie.com).
        </p>
      </LegalSection>

      <LegalSection title="4. Managing browser storage">
        <p>
          You can delete local and session storage at any time in your browser settings, usually
          under "clear browsing data" or "site data". If you do, the website will forget your
          language choice and you will be logged out.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes">
        <p>
          If we introduce cookies or similar technologies that are not strictly necessary, we will
          update this policy and ask for your consent before setting them.
        </p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>
          Questions? Email{" "}
          <a href={`mailto:${LEGAL_ENTITY.email}`} className={linkClass}>
            {LEGAL_ENTITY.email}
          </a>
          . More information about how we process personal data is in our{" "}
          <Link to="/$lang/privacy" params={{ lang }} className={linkClass}>
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
