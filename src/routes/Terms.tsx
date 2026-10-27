import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FileCheck, ClipboardList, AlertTriangle, RefreshCw, Scale, Mail } from "lucide-react";
import { BRAND, LINKS } from "../lib/constants";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";

const sections = [
  {
    icon: FileCheck,
    title: "The Service We Provide",
    body: [
      "We provide information, guides, data, tools, and educational content about federal contracting free of charge. Accuracy matters to us, but government rules, size standards, thresholds, and platform requirements change — always verify current requirements on SAM.gov, SBA.gov, and GSa.gov before acting.",
      "Our paid services (certifications, GSA Schedule applications, proposal writing, capture management, and contractor programs) are described on their respective pages with fixed prices and timelines for deliverables we control. We cannot guarantee government outcomes — no honest firm can. We guarantee our deliverables: submission within the stated timeline or you get your money back for that deliverable.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Your Responsibilities",
    body: [
      "Provide accurate business information. Certifications and GSA applications depend on facts about ownership, income, and operations that only you can attest to.",
      "Respond to our document and information requests within the engagement window so we can meet the guaranteed timelines.",
      "Review and approve deliverables before submission. You sign your submissions — false certifications to the government carry serious legal consequences.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Refunds & Guarantees",
    body: [
      "Certifications: if SBA rejects an application we prepared, we re-prepare and resubmit at no additional cost.",
      "GSA Schedules: if we do not submit your complete eOffer within 30 business days of receiving all required documentation from you, you receive a full refund of the application fee.",
      "Programs (FedStart, Growth, Prime): monthly deliverables are due per the published timeline; engagement fees are earned as services are performed.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "No Legal Advice",
    body: [
      "We are consultants, not attorneys or accountants. Content on this site is informational and does not constitute legal, accounting, or tax advice. For matters with legal consequences — entity structure, joint ventures, size-standard protests, claims — consult a licensed professional.",
    ],
  },
  {
    icon: Scale,
    title: "Intellectual Property",
    body: [
      "Our guides, tools, methodologies, and templates are our intellectual property, provided for your use. Upon full payment of an engagement, deliverables created specifically for you (capabilities statements, proposals, marketing materials) become your property; we retain the right to reuse generic templates and processes.",
    ],
  },
  {
    icon: Mail,
    title: "Disputes & Contact",
    body: [
      `If something goes wrong, tell us first — email ${BRAND.email} or call ${BRAND.phone}. Most issues are resolved in one conversation. These terms are governed by the laws of the State of Florida.`,
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — {BRAND.fullName}</title>
        <meta name="description" content="Terms of service for Government Contracting Information — what we guarantee, what we don't, and how engagements work." />
        <link rel="canonical" href={`https://${BRAND.domain}/terms`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-gold">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Plain-language terms for using this site and engaging our services — including exactly
            what we guarantee (and what no one honestly can).
          </p>
        </div>
      </section>

      <Section className="py-14 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="p-6 lg:p-8" hover={false} variant="default">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-gov-navy">{s.title}</h2>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                      {s.body.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}

          <div className="pt-2">
            <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" variant="primary" size="lg">
              Book a Free Consultation
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}