import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Database, Mail, Eye, Scale } from "lucide-react";
import { BRAND, LINKS } from "../lib/constants";
import Section from "../components/Section";
import Card from "../components/Card";
import { LinkButton } from "../components/Button";

const sections = [
  {
    icon: Lock,
    title: "Information We Collect",
    body: [
      "When you contact us, book a consultation, or use our free tools, we collect only the information you provide directly: your name, email address, phone number, company details, and any federal identifiers (UEI, CAGE) you choose to share.",
      "Our free tools (size standard calculator, readiness checklist, eligibility quiz) run entirely in your browser. Your inputs are not transmitted to or stored on our servers.",
      "Like most websites, we collect standard technical data (browser type, pages visited, approximate location) through privacy-respecting analytics to understand how the site is used and improve it.",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    body: [
      "To respond to your inquiries and prepare for scheduled consultations.",
      "To deliver services you purchase (registrations, certifications, GSA applications, proposals, capture management).",
      "To send occasional updates about new guides, data, or services — only if you opt in, and you can unsubscribe anytime.",
      "We never sell, rent, or trade your personal information to third parties.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Data Security",
    body: [
      "We apply administrative, technical, and physical safeguards appropriate to the sensitivity of the information we handle.",
      "Documents related to your certifications or proposals are stored with access limited to the team members working on your engagement.",
      "You can request deletion of your data at any time by emailing us.",
    ],
  },
  {
    icon: Eye,
    title: "Cookies & Tracking",
    body: [
      "We use a minimal set of cookies necessary for the site to function (for example, remembering your preferences) and basic analytics to understand aggregate usage.",
      "We do not use third-party advertising trackers or sell behavioral data.",
    ],
  },
  {
    icon: Scale,
    title: "Your Rights",
    body: [
      "You may request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it.",
      "If you are a resident of a state with specific privacy statutes (such as Florida, California, or Virginia), you have the right to know what data we collect and to opt out of its sale — we do not sell your data, so no action is required.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us About Privacy",
    body: [
      `For any privacy question or request, email ${BRAND.email} or call ${BRAND.phone}. We respond to privacy requests within 30 days.`,
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — {BRAND.fullName}</title>
        <meta name="description" content="How Government Contracting Information collects, uses, and protects your information. Free tools run in your browser; your data is never sold." />
        <link rel="canonical" href={`https://${BRAND.domain}/privacy`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-gold">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
            We keep this short and plain. Our business is helping small businesses win federal
            contracts — not harvesting data.
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

          <Card className="p-6 bg-gov-navy text-white" hover={false}>
            <p className="text-sm text-slate-300 leading-relaxed">
              This policy describes our practices as of the date above. If we make material changes,
              we will update this page. Continued use of the site constitutes acceptance of the
              updated policy. Questions? <Link to="/contact" className="text-gov-gold hover:underline">Contact us</Link>.
            </p>
          </Card>

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