import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";

export const Route = createFileRoute("/cookie-policy")({
  component: () => (
    <>
      <SEO
        title="Cookie Policy — Volaly"
        description="Learn how Volaly uses cookies, which types of cookies are set, and how to manage or opt out through your browser settings."
        canonical="https://volaly.com/cookie-policy"
      />
      <PageHeader eyebrow="Legal" title="Cookie Policy" subtitle="Effective date: August 1, 2025 · Last updated: August 1, 2025" />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl space-y-10 px-6 text-muted-foreground">

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile
              phone) when you visit a website. They help the website remember information about your
              visit — such as your preferred settings — which can make your next visit easier and the
              site more useful to you.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. How We Use Cookies</h2>
            <p>Volaly uses the following types of cookies on this website:</p>

            <div className="space-y-4 rounded-2xl border border-border/60 p-5">
              <div>
                <p className="font-medium text-foreground">Essential Cookies</p>
                <p className="mt-1 text-sm">
                  These cookies are strictly necessary for the website to function. They enable core
                  features such as page navigation and access to secure areas. The website cannot
                  function properly without these cookies, and they cannot be disabled.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4">
                <p className="font-medium text-foreground">Functional Cookies</p>
                <p className="mt-1 text-sm">
                  These cookies allow the website to remember choices you make (such as interface
                  preferences) to provide a more personalised experience. They may be set by us or by
                  third-party providers whose services we use.
                </p>
              </div>
              <div className="border-t border-border/40 pt-4">
                <p className="font-medium text-foreground">Analytics Cookies</p>
                <p className="mt-1 text-sm">
                  These cookies help us understand how visitors interact with our website by collecting
                  and reporting information anonymously. We may use services such as Google Analytics.
                  The data collected does not identify any individual user.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Third-Party Cookies</h2>
            <p>
              We may embed content or use services from third parties on our website — for example,
              YouTube video players or analytics tools. These third parties may set their own cookies
              on your device. We do not control these third-party cookies. Please refer to the
              respective third-party privacy policies for more information:
            </p>
            <ul className="ml-4 list-disc space-y-1.5">
              <li>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2">
                  Google Privacy Policy
                </a>{" "}
                (Analytics, YouTube)
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Managing Your Cookie Preferences</h2>
            <p>
              You can control and manage cookies in several ways. Please note that removing or blocking
              cookies may impact your experience on our website.
            </p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>Browser settings:</strong> Most web browsers allow you to view, manage, block,
                or delete cookies. Instructions for common browsers:
                <ul className="ml-4 mt-1.5 list-disc space-y-1">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Microsoft Edge</a></li>
                </ul>
              </li>
              <li>
                <strong>Google Analytics opt-out:</strong> Install the{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                  Google Analytics Opt-out Browser Add-on
                </a>{" "}
                to prevent your data from being used by Google Analytics.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology,
              legislation, or our data practices. When we make changes, we will update the "Last
              updated" date at the top of this page.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:{" "}
              <a href="mailto:hello@thaisolutions.ai" className="text-foreground underline underline-offset-2">hello@thaisolutions.ai</a>
            </p>
          </div>

        </div>
      </section>
    </>
  ),
});
