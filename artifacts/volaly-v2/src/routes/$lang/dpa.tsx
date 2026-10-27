import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout, LegalList, LegalSection, LegalTable } from "@/components/legal/LegalLayout";
import { LEGAL_EFFECTIVE_DATE, LEGAL_ENTITY } from "@/lib/legal";

export const Route = createFileRoute("/$lang/dpa")({
  component: DpaPage,
});

function DpaPage() {
  const { lang } = Route.useParams();
  const linkClass = "text-foreground underline underline-offset-2";
  const mail = (
    <a href={`mailto:${LEGAL_ENTITY.email}`} className={linkClass}>
      {LEGAL_ENTITY.email}
    </a>
  );

  return (
    <LegalLayout
      slug="dpa"
      title="Data Processing Addendum"
      description="Volaly's Data Processing Addendum for business customers under GDPR Art. 28, Thailand's PDPA and the Swiss FADP, including Standard Contractual Clauses and the list of sub-processors."
      subtitle={`Effective date: ${LEGAL_EFFECTIVE_DATE}`}
    >
      <LegalSection title="1. Parties and scope">
        <p>
          This Data Processing Addendum ("DPA") forms part of the{" "}
          <Link to="/$lang/terms" params={{ lang }} className={linkClass}>
            Terms of Service
          </Link>{" "}
          between {LEGAL_ENTITY.name}, {LEGAL_ENTITY.street}, {LEGAL_ENTITY.city},{" "}
          {LEGAL_ENTITY.country} ("Volaly", "Processor") and the customer ("Customer",
          "Controller"). It applies whenever Volaly processes personal data on behalf of the
          Customer in providing the Services ("Customer Personal Data"). It is intended to satisfy
          Article 28 of the EU GDPR (and the UK GDPR where applicable), Section 40 of Thailand's
          PDPA and Article 9 of the Swiss FADP. Terms such as "personal data", "processing",
          "controller", "processor" and "personal data breach" have the meaning given in the
          applicable data protection law.
        </p>
        <p>
          The Customer accepts this DPA by accepting the Terms. A countersigned copy is available
          on request at {mail}.
        </p>
      </LegalSection>

      <LegalSection title="2. Roles and instructions">
        <LegalList>
          <li>
            The Customer is the controller and Volaly is the processor of Customer Personal Data.
            The Customer is responsible for the lawfulness of the processing, including having a
            legal basis, obtaining any required consents and informing the persons concerned.
          </li>
          <li>
            Volaly processes Customer Personal Data only on the Customer's documented instructions.
            The Terms, this DPA, the Customer's configuration of the Services and the Customer's
            use of the platform constitute those instructions. Volaly will inform the Customer if it
            believes an instruction infringes data protection law.
          </li>
          <li>
            Volaly processes Customer Personal Data in other ways only where required by law, and
            will inform the Customer of that requirement before processing unless the law prohibits
            this.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Confidentiality">
        <p>
          Volaly ensures that every person authorized to process Customer Personal Data is bound by
          an obligation of confidentiality.
        </p>
      </LegalSection>

      <LegalSection title="4. Security">
        <p>
          Volaly implements the technical and organizational measures described in Annex 2, taking
          into account the state of the art, the costs of implementation and the nature, scope,
          context and purposes of processing. Volaly may update these measures, provided the overall
          level of protection is not reduced.
        </p>
      </LegalSection>

      <LegalSection title="5. Sub-processors">
        <LegalList>
          <li>
            The Customer gives Volaly general authorization to engage the sub-processors listed in
            Annex 3.
          </li>
          <li>
            Volaly will inform the Customer by email or in the platform at least 30 days before
            adding or replacing a sub-processor. The Customer may object on reasonable data
            protection grounds within that period. If the parties cannot resolve the objection, the
            Customer may terminate the affected Services and receive a pro-rata refund of prepaid
            fees.
          </li>
          <li>
            Volaly imposes data protection obligations on each sub-processor that are no less
            protective than this DPA and remains responsible for its sub-processors.
          </li>
          <li>
            Messaging and social media platforms that the Customer connects (such as Meta or LINE)
            are not sub-processors of Volaly. The Customer uses them under its own agreements with
            those platforms.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Assistance">
        <p>
          Taking into account the nature of the processing, Volaly assists the Customer, by
          appropriate technical and organizational measures, in responding to requests from data
          subjects, and in ensuring compliance with obligations relating to security, breach
          notification, data protection impact assessments and prior consultation. Volaly forwards
          to the Customer without undue delay any data subject request it receives that relates to
          Customer Personal Data and does not respond to it directly unless instructed.
        </p>
      </LegalSection>

      <LegalSection title="7. Personal data breaches">
        <p>
          Volaly notifies the Customer without undue delay, and in any event within 48 hours, after
          becoming aware of a personal data breach affecting Customer Personal Data. The
          notification will include, as far as available, the nature of the breach, the categories
          and approximate number of data subjects and records concerned, the likely consequences
          and the measures taken or proposed. Volaly will take reasonable steps to contain the
          breach and mitigate its effects.
        </p>
      </LegalSection>

      <LegalSection title="8. Deletion and return">
        <p>
          At the end of the Services, Volaly will, at the Customer's choice, return Customer
          Personal Data by making an export available for 30 days, and then delete it, including
          copies, unless storage is required by law. Backups are deleted in the ordinary backup
          rotation cycle.
        </p>
      </LegalSection>

      <LegalSection title="9. Audits and information">
        <p>
          Volaly makes available to the Customer the information necessary to demonstrate
          compliance with this DPA, in particular this DPA, Annex 2 and the documentation of its
          sub-processors. The Customer may audit Volaly's compliance, by itself or through an
          independent auditor bound by confidentiality, once per year (or after a personal data
          breach) on at least 30 days' written notice, during normal business hours and without
          unreasonably disrupting Volaly's operations. Each party bears its own costs.
        </p>
      </LegalSection>

      <LegalSection title="10. International transfers">
        <LegalList>
          <li>
            Customer Personal Data is processed in the countries listed in Annex 3, including the
            USA, India and Malaysia.
          </li>
          <li>
            Where the GDPR applies to the Customer and Customer Personal Data is transferred to a
            country without an adequacy decision, the Standard Contractual Clauses adopted by the
            European Commission in Implementing Decision (EU) 2021/914 ("SCCs") are incorporated
            into this DPA by reference: Module Two (controller to processor) and, where the Customer
            is itself a processor, Module Three (processor to processor). The following options
            apply: Clause 7 (docking clause) is included; Clause 9 option 2 (general authorization
            with 30 days' notice); the optional wording in Clause 11 is not included; Clause 13:
            the supervisory authority competent for the Customer; Clause 17: the law of Ireland;
            Clause 18: the courts of Ireland. Annexes I to III of the SCCs are completed by Annexes
            1 to 3 of this DPA.
          </li>
          <li>
            Where the Swiss FADP applies, the SCCs apply with the adaptations required by the Swiss
            Federal Data Protection and Information Commissioner: references to the GDPR are read
            as references to the FADP, the FDPIC is the competent supervisory authority, and the
            term "member state" includes Switzerland so that data subjects can bring claims at
            their place of habitual residence.
          </li>
          <li>
            Where Thailand's PDPA applies, the parties agree that the SCCs serve as the appropriate
            safeguards for transfers under Section 29 PDPA, with references to the GDPR read as
            references to the PDPA.
          </li>
          <li>In case of conflict, the SCCs prevail over this DPA and the Terms.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="11. Liability and precedence">
        <p>
          Each party's liability under this DPA is subject to the limitations in the Terms, except
          where applicable law or the SCCs do not permit such limitation. In case of conflict
          between this DPA and the Terms regarding the processing of Customer Personal Data, this
          DPA prevails.
        </p>
      </LegalSection>

      <LegalSection title="Annex 1 — Description of processing">
        <LegalTable
          head={["Item", "Description"]}
          rows={[
            ["Data exporter / importer", `Customer (controller, data exporter); ${LEGAL_ENTITY.name} (processor, data importer), contact ${LEGAL_ENTITY.email}`],
            ["Data subjects", "Customer's customers, guests, leads and prospects; Customer's staff and representatives; persons depicted in content provided by the Customer"],
            ["Categories of personal data", "Names, contact details, messaging identifiers (e.g. LINE, Messenger, WhatsApp IDs), message content, booking and enquiry details, social media handles, photos, videos and voice recordings provided by the Customer, usage data"],
            ["Special categories", "None, unless agreed in a separate written agreement with the Customer."],
            ["Nature and purpose", "Hosting and storage; automated replies and lead handling via AI models; generation, editing and scheduling of content; publishing to channels selected by the Customer; support"],
            ["Frequency", "Continuous for the duration of the Services"],
            ["Duration and retention", "For the term of the Services, followed by the return and deletion process in Section 8"],
            ["Transfers to sub-processors", "As listed in Annex 3, for the purposes stated there"],
          ]}
        />
      </LegalSection>

      <LegalSection title="Annex 2 — Technical and organizational measures">
        <LegalList>
          <li>Encryption in transit: all connections to the platform, database and automation server use TLS.</li>
          <li>Encryption at rest: the database and file storage are encrypted at rest by the respective hosting providers.</li>
          <li>Access control: administrative access is limited to authorized Volaly personnel with individual credentials; customer accounts are protected by authentication.</li>
          <li>Separation: Customer data is logically separated by customer identifiers.</li>
          <li>Availability: the database provider performs regular backups; infrastructure runs in professional data centers with physical security controls.</li>
          <li>Data minimization: only data required for the features selected by the Customer is processed.</li>
          <li>Incident handling: errors and incidents are logged and monitored, and breaches are handled under Section 7.</li>
          <li>Sub-processor management: sub-processors are selected for their security and data protection commitments and bound by written terms.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="Annex 3 — Sub-processors">
        <LegalTable
          head={["Sub-processor", "Purpose", "Processing location"]}
          rows={[
            ["Supabase, Inc.", "Database, authentication, storage of Customer data", "India (AWS, Mumbai)"],
            ["Hostinger", "Automation server (workflows, AI orchestration)", "Malaysia (Kuala Lumpur)"],
            ["Cloudflare, Inc.", "Hosting and delivery of the web application", "USA and global edge network"],
            ["OpenRouter, Inc.", "Routing of requests to AI models", "USA"],
            ["Google LLC", "AI models (Gemini)", "USA"],
            ["Cloudinary Ltd.", "Storage and processing of images and videos", "USA"],
            ["Creatomate", "Video rendering", "Netherlands"],
            ["Cartesia", "Text-to-speech", "USA"],
          ]}
        />
      </LegalSection>
    </LegalLayout>
  );
}
