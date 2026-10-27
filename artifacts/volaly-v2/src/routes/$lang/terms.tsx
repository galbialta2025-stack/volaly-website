import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalList, LegalSection } from "@/components/legal/LegalLayout";
import { LEGAL_EFFECTIVE_DATE, LEGAL_ENTITY } from "@/lib/legal";

export const Route = createFileRoute("/$lang/terms")({
  component: TermsPage,
});

function TermsPage() {
  const { lang } = Route.useParams();
  const linkClass = "text-foreground underline underline-offset-2";
  const mail = (
    <a href={`mailto:${LEGAL_ENTITY.email}`} className={linkClass}>
      {LEGAL_ENTITY.email}
    </a>
  );

  return (
    <LegalLayout
      slug="terms"
      title="Terms of Service"
      description="Volaly Terms of Service for business customers: scope, credits and fees, acceptable use, AI features, liability, governing law (Wyoming) and arbitration."
      subtitle={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <LegalSection title="1. Who we are and scope">
        <p>
          These Terms of Service (the "Terms") govern access to and use of the Volaly website,
          platform, messaging bots, automations and related services (together, the "Services").
          The Services are provided by {LEGAL_ENTITY.name}, a limited liability company organized
          under the laws of the State of Wyoming, USA, {LEGAL_ENTITY.street}, {LEGAL_ENTITY.city},{" "}
          {LEGAL_ENTITY.country} ("Volaly", "we", "us"). Volaly is a brand of {LEGAL_ENTITY.name}.
        </p>
        <p>
          These Terms form a binding agreement between Volaly and the business that registers for
          or orders the Services (the "Customer", "you"). Any order form, quote or plan description
          we agree with you (an "Order") forms part of these Terms. If an Order conflicts with these
          Terms, the Order prevails for that Order only.
        </p>
      </LegalSection>

      <LegalSection title="2. Business customers only">
        <p>
          The Services are offered exclusively to businesses, entrepreneurs and organizations acting
          in their trade, business or profession. They are not offered to consumers. By registering
          or ordering, you confirm that you act on behalf of a business and that you are authorized
          to bind that business to these Terms. We may request evidence of business status (for
          example, company name and registration or tax number) and may refuse or terminate an
          account where this cannot be provided.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts">
        <p>
          You must provide accurate registration information and keep it up to date. You are
          responsible for keeping your login credentials confidential and for all activity under
          your account, including activity by your staff and anyone you give access to. Notify us
          without delay at {mail} if you suspect unauthorized use.
        </p>
      </LegalSection>

      <LegalSection title="4. The Services">
        <p>
          The Services help businesses create and publish content, automate customer communication
          and manage leads and bookings, including through AI-powered tools. The current scope of
          each tool and plan is described on our website, in the platform or in your Order. Some
          features are only available under a separate written agreement, which then forms part of
          these Terms for the Customer concerned.
        </p>
        <p>
          We may improve, change or discontinue features. If we remove a feature that is a material
          part of a paid plan you have already paid for, we will give you reasonable notice and you
          may terminate the affected plan and receive a pro-rata refund of prepaid fees for the
          period after termination.
        </p>
        <p>
          The Services are provided on a commercially reasonable availability basis. Unless an
          Order includes a service level commitment, we do not guarantee uninterrupted or
          error-free operation. We will use reasonable efforts to announce planned maintenance in
          advance.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-party platforms">
        <p>
          Many features connect to platforms operated by third parties, such as Meta (Facebook,
          Instagram, Messenger, WhatsApp), LINE, social media publishing services, payment
          providers and AI model providers. Your use of those platforms is governed by their own
          terms and policies, which you are responsible for complying with. We are not responsible
          for the availability, policy changes, account restrictions or actions of third-party
          platforms, and we may need to change or suspend a feature if a platform changes or
          withdraws its interface.
        </p>
      </LegalSection>

      <LegalSection title="6. Fees, credits and payment">
        <LegalList>
          <li>
            Fees, plans, included credits and top-ups are as stated in your Order or in the plan
            description shown at the time of purchase. Credits are deducted per use of a tool as
            shown in the platform. The validity period of credits and whether unused credits roll
            over are as stated in the applicable Order or plan description.
          </li>
          <li>
            Recurring plans are billed in advance for each billing period and renew automatically
            until cancelled. Payments are processed by our payment provider.
          </li>
          <li>
            Fees are exclusive of taxes. You are responsible for any VAT, sales, withholding or
            similar taxes, unless we are required by law to collect them.
          </li>
          <li>
            If a payment fails or is overdue, we may suspend the Services after giving you at least
            7 days' notice by email.
          </li>
          <li>
            We may change fees for future billing periods by giving at least 30 days' notice. If you
            do not agree, you may cancel before the change takes effect.
          </li>
          <li>
            Fees already paid are non-refundable, except where these Terms provide for a refund or
            where a refund is required by mandatory law.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="7. Term, cancellation and termination">
        <LegalList>
          <li>
            You may cancel a recurring plan at any time in your account or by emailing {mail}.
            Cancellation takes effect at the end of the current billing period, and you keep access
            until then.
          </li>
          <li>
            Either party may terminate these Terms for cause if the other party materially breaches
            them and does not cure the breach within 14 days after written notice.
          </li>
          <li>
            We may suspend or terminate access immediately, without a cure period, if your use
            breaches Section 8, creates a security risk, exposes us or third parties to liability or
            is required to comply with law or a platform's requirements. Where reasonable, we will
            tell you the reason and give you an opportunity to remedy it.
          </li>
          <li>
            If we terminate for convenience or because we discontinue the Services, we will refund
            prepaid fees for the period after termination.
          </li>
          <li>
            After termination, you can request an export of your Customer Content for 30 days.
            After that period we delete it, unless we must retain it by law.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. Acceptable use and your responsibilities">
        <p>You must not use the Services to:</p>
        <LegalList>
          <li>violate any applicable law, regulation or third-party right;</li>
          <li>
            send marketing or other messages to recipients who have not given any consent required
            by applicable law (for example, anti-spam or telemarketing rules);
          </li>
          <li>
            upload or publish images, video or audio of identifiable persons without the consents
            and rights required by law;
          </li>
          <li>
            create or publish misleading content, including AI-generated or manipulated images,
            video or audio of real persons ("deep fakes") without the disclosures required by law;
          </li>
          <li>
            publish content that is unlawful, defamatory, discriminatory, sexually exploitative,
            infringing or that violates the policies of the platform where it is published;
          </li>
          <li>
            attempt to access systems or data without authorization, interfere with the Services,
            or reverse engineer them except where permitted by law;
          </li>
          <li>resell or sublicense the Services unless agreed in an Order.</li>
        </LegalList>
        <p>
          You are responsible for the content you provide, for reviewing content before it is
          published in your name, and for complying with laws that apply to your business and your
          communication with your own customers.
        </p>
      </LegalSection>

      <LegalSection title="9. AI features">
        <p>
          Some Services use artificial intelligence, including third-party AI models, to generate
          text, images, video, audio, replies to your customers and recommendations ("Output").
          Output is produced automatically and may be inaccurate, incomplete or unsuitable for your
          purpose. You are responsible for checking Output before relying on it or publishing it,
          and for ensuring that its use complies with applicable law, including transparency
          obligations that apply to you as the deployer of AI systems (for example, informing your
          customers that they are chatting with an AI and labelling AI-generated or manipulated
          content where required).
        </p>
        <p>
          Similar Output may be generated for other customers. We do not guarantee that Output is
          unique or protected by intellectual property rights.
        </p>
      </LegalSection>

      <LegalSection title="10. Personal data">
        <p>
          Where we process personal data on your behalf (for example, data of your customers,
          guests or staff), we act as your processor and our{" "}
          <Link to="/$lang/dpa" params={{ lang }} className={linkClass}>
            Data Processing Addendum
          </Link>{" "}
          ("DPA") applies and forms part of these Terms. You remain the controller of that data and
          are responsible for having a lawful basis and for informing the persons concerned. How we
          handle personal data as a controller is described in our{" "}
          <Link to="/$lang/privacy" params={{ lang }} className={linkClass}>
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="11. Customer Content and Output">
        <p>
          You keep all rights in the content and data you or your users provide to the Services
          ("Customer Content"). You grant us a non-exclusive, worldwide licence to host, process,
          reproduce, adapt and transmit Customer Content solely as needed to provide, secure and
          support the Services for you, including publishing it to the channels you select.
        </p>
        <p>
          You confirm that you hold all rights and consents needed for this licence. As between you
          and us, and to the extent permitted by law, you own the Output generated for you.
        </p>
      </LegalSection>

      <LegalSection title="12. Our intellectual property">
        <p>
          The Services, including software, workflows, templates, designs and documentation, are
          owned by Volaly or its licensors. We grant you a non-exclusive, non-transferable right to
          use the Services for your internal business purposes during the term of your plan. All
          rights not expressly granted remain with us. If you send us feedback, we may use it
          without obligation to you.
        </p>
      </LegalSection>

      <LegalSection title="13. Confidentiality">
        <p>
          Each party will keep the other party's non-public business information confidential, use
          it only to perform these Terms, and protect it with at least reasonable care. This does
          not apply to information that is or becomes public without breach, was already known,
          is independently developed or must be disclosed by law (after notice to the other party
          where lawful).
        </p>
      </LegalSection>

      <LegalSection title="14. Warranties and disclaimer">
        <p>
          We will provide the Services with reasonable skill and care. We do not guarantee any
          particular business result, such as increased visibility, rankings, reach, bookings or
          revenue. Statistics shown on our website describe outcomes reported by selected customers
          and are not a promise of future results.
        </p>
        <p>
          Except as expressly stated in these Terms and to the extent permitted by law, the Services
          are provided "as is" and we disclaim all other warranties, express or implied, including
          implied warranties of merchantability, fitness for a particular purpose and
          non-infringement.
        </p>
      </LegalSection>

      <LegalSection title="15. Limitation of liability">
        <LegalList>
          <li>
            Neither party is liable for indirect, incidental, special or consequential damages, or
            for loss of profits, revenue, business or goodwill, arising out of or related to these
            Terms.
          </li>
          <li>
            Each party's total liability arising out of or related to these Terms is limited to the
            fees paid and payable by you for the Services in the 12 months before the event giving
            rise to the claim, or USD 100 if no fees were payable.
          </li>
          <li>
            These limitations do not apply to (a) liability for fraud, gross negligence or wilful
            misconduct, (b) liability for death or personal injury, (c) your payment obligations,
            (d) your obligations under Section 16, or (e) any liability that cannot be limited or
            excluded under applicable law.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="16. Indemnification">
        <p>
          You will defend and indemnify Volaly against third-party claims, and related damages,
          fines and reasonable legal costs, to the extent they arise from your Customer Content,
          your use of the Services in breach of these Terms or applicable law, or messages and
          content published through the Services on your instructions. We will notify you promptly
          of any such claim and allow you to control its defense, provided that you may not settle
          a claim that imposes obligations on us without our consent.
        </p>
      </LegalSection>

      <LegalSection title="17. Changes to these Terms">
        <p>
          We may update these Terms. We will notify you of material changes by email or in the
          platform at least 30 days before they take effect. If you do not agree, you may cancel
          before the effective date without penalty and receive a pro-rata refund of prepaid fees
          for the period after the effective date. If you continue to use the Services after the
          effective date, the updated Terms apply. Changes required by law may take effect sooner.
        </p>
      </LegalSection>

      <LegalSection title="18. Governing law and dispute resolution">
        <p>
          These Terms and any dispute arising out of or in connection with them are governed by the
          laws of the State of Wyoming, USA, without regard to its conflict-of-laws rules. The UN
          Convention on Contracts for the International Sale of Goods does not apply.
        </p>
        <p>
          Before starting proceedings, the parties will try in good faith to resolve the dispute
          for 30 days after one party notifies the other in writing.
        </p>
        <p>
          Any dispute not resolved in that period will be finally resolved by arbitration
          administered by the International Centre for Dispute Resolution (ICDR) in accordance with
          its International Arbitration Rules. The tribunal will consist of one arbitrator. The
          seat of arbitration is Sheridan, Wyoming, USA, and hearings may be held by video
          conference. The language of the arbitration is English. The award is final and binding
          and may be enforced in any court having jurisdiction. Disputes will be resolved on an
          individual basis; class or representative proceedings are not permitted.
        </p>
        <p>
          Either party may seek urgent interim or injunctive relief from any competent court, and
          we may bring claims for unpaid fees in the courts at your place of business.
        </p>
      </LegalSection>

      <LegalSection title="19. General">
        <LegalList>
          <li>
            Neither party is liable for delays or failures caused by events beyond its reasonable
            control, such as outages of third-party platforms or networks, natural disasters or
            government action.
          </li>
          <li>
            You may not assign these Terms without our consent. We may assign them to an affiliate or
            to a successor of our business, with notice to you.
          </li>
          <li>Notices may be given by email to the addresses associated with your account and {mail}.</li>
          <li>
            These Terms, any Orders and the DPA are the entire agreement on their subject matter. If
            a provision is invalid, the remaining provisions remain in force and the invalid
            provision is replaced by a valid one that comes closest to its purpose.
          </li>
          <li>
            These Terms are drafted in English. Translations, if any, are for convenience only and
            the English version prevails.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="20. Contact">
        <p>
          {LEGAL_ENTITY.name}, {LEGAL_ENTITY.street}, {LEGAL_ENTITY.city}, {LEGAL_ENTITY.country}.
          Email: {mail}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
