import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, BadgeCheck, PenTool, Target, Shield,
  CheckCircle, Clock, ChevronRight, Rocket, BarChart3, Crown,
  Wrench, Calendar, Phone,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS, SERVICE_BUNDLES } from "../../lib/constants";

const CORE_SERVICES = [
  {
    icon: BadgeCheck,
    headline: "Certifications within 14 days",
    title: "Expedited SBA Certifications",
    desc: "Full eligibility analysis, documentation prep, application submission and SBA follow-through for 8(a), WOSB, SDVOSB, HUBZone and more.",
    timeline: "14 days",
    price: "from $1,500",
    to: "/services/certifications",
    color: "gov-green",
    features: [
      "Eligibility analysis for every SBA program",
      "Complete documentation preparation",
      "Application submission and follow-up",
      "Rejection recovery included",
    ],
  },
  {
    icon: Shield,
    headline: "GSA Schedule submitted in 30 days",
    title: "GSA Schedule Services",
    desc: "Complete GSA Multiple Award Schedule (MAS) application — SIN selection, pricing, eOffer build and submission, guaranteed in 30 days.",
    timeline: "30 days submitted",
    price: "from $5,500",
    to: "/services/gsa-schedules",
    color: "gov-blue",
    features: [
      "SIN selection and pricing research",
      "Full MAS application and eOffer",
      "30-day submission guarantee",
      "98% historical approval rate",
    ],
  },
  {
    icon: PenTool,
    headline: "Proposal Writing That Wins",
    title: "Proposal Writing",
    desc: "Full proposal development with Shipley-method color team reviews — compliance matrix, win themes, technical volumes, pricing support.",
    timeline: "2-4 weeks",
    price: "from $5,000",
    to: "/services/proposal-writing",
    color: "gov-crimson",
    features: [
      "RFP analysis and compliance matrix",
      "Win theme development",
      "Full color team review cycle",
      "Shipley-method proposal development",
    ],
  },
  {
    icon: Target,
    headline: "Capture before the RFP drops",
    title: "Capture Management",
    desc: "Dedicated capture manager identifying and qualifying opportunities 6-18 months before RFP release — so you bid on contracts you can win.",
    timeline: "Ongoing",
    price: "from $6,500",
    to: "/services/capture-management",
    color: "gov-gold",
    features: [
      "Sources Sought monitoring",
      "Opportunity qualification and scoring",
      "Agency relationship building",
      "Teaming and subcontract strategy",
    ],
  },
];

export default function ServicesIndex() {
  return (
    <>
      <Helmet>
        <title>Services — Expedited Certifications, GSA Schedules, Proposal Writing &amp; Capture | Government Contracting Information</title>
        <meta name="description" content="Expedited government contracting services for small businesses: SBA certifications within 14 days, GSA Schedules submitted within 30 days, proposal writing and capture management." />
        <link rel="canonical" href={`https://${BRAND.domain}/services`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gov-blue/10 rounded-full blur-[120px]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 mb-5">
              <Clock size={13} className="text-gov-gold" />
              Guaranteed timelines — 14-day certifications, 30-day GSA submissions
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Services That Expedite Government Contracting
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Learn for free, or let us execute for you. Every service has a guaranteed
              timeline, a fixed price, and a single point of contact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100">
                Book Free Consultation <ArrowRight size={16} className="ml-2" />
              </LinkButton>
              <LinkButton href="/tools" size="lg" variant="ghost" className="!text-white !border !border-white/20">
                Free Tools Instead
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Core Services</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">Pick What You Need Done Fast</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {CORE_SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.to} className="flex flex-col overflow-hidden" hover={false}>
                  <div className="p-6 lg:p-8 pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${s.color}/10 text-${s.color}`}>
                        <Icon size={22} />
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Timeline</div>
                        <div className="font-display text-lg font-bold text-gov-navy">{s.timeline}</div>
                      </div>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-gov-navy">{s.headline}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                  <ul className="px-6 lg:px-8 mt-5 space-y-2 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="px-6 lg:px-8 py-6 flex items-center justify-between border-t border-slate-100 mt-6">
                    <div className="font-display text-lg font-bold text-gov-navy">{s.price}</div>
                    <Link
                      to={s.to}
                      className="inline-flex items-center gap-2 rounded-xl bg-gov-navy px-5 py-2.5 text-sm font-bold text-white hover:bg-gov-navy/90 transition"
                    >
                      Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Done-For-You Programs</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">Or Bundle Everything Into a Program</h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Registration, certification, capture and proposals combined into managed programs — 3, 6 or 12 months.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {SERVICE_BUNDLES.map((b) => {
              const Icon = b.id === "fedstart" ? Rocket : b.id === "growth" ? BarChart3 : Crown;
              return (
                <div
                  key={b.id}
                  className={`relative flex flex-col rounded-2xl bg-white border p-6 lg:p-8 ${
                    b.popular ? "border-gov-crimson/40 ring-2 ring-gov-crimson/10 shadow-lg" : "border-slate-200 shadow-sm"
                  }`}
                >
                  {b.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-white bg-gov-crimson px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-navy/10 text-gov-navy">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-gov-navy">{b.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{b.tagline}</p>
                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl font-bold text-gov-navy">${b.price.toLocaleString()}</span>
                    <span className="text-xs text-slate-400">/ {b.duration}</span>
                  </div>
                  <ul className="mt-6 space-y-2.5 flex-1">
                    {b.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/programs#${b.id}`}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition"
                  >
                    View {b.name} <ArrowRight size={15} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Also available */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <Link to="/services/compliance-capture" className="group">
              <Card className="h-full p-5 group-hover:border-gov-blue/30 transition">
                <div className="font-bold text-gov-navy text-sm">Registrations &amp; Compliance</div>
                <p className="text-xs text-slate-500 mt-1.5">SAM, DSBS, FEMA portal management and renewals.</p>
              </Card>
            </Link>
            <Link to="/services/proposal-generator" className="group">
              <Card className="h-full p-5 group-hover:border-gov-blue/30 transition">
                <div className="font-bold text-gov-navy text-sm">Free Proposal Generator</div>
                <p className="text-xs text-slate-500 mt-1.5">Generate a branded capability-based proposal in minutes.</p>
              </Card>
            </Link>
            <Link to="/tools" className="group">
              <Card className="h-full p-5 group-hover:border-gov-blue/30 transition">
                <div className="font-bold text-gov-navy text-sm">Free Tools &amp; Calculators</div>
                <p className="text-xs text-slate-500 mt-1.5">Size standard checker, readiness checklist, and more.</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section
        title="Not sure which service you need?"
        kicker="Free Assessment"
        subtitle="Book a free 30-minute consultation. We'll assess where you are, tell you what you actually need (and what you don't), and give you a clear path — no obligation."
        center
        dark
      >
        <div className="flex justify-center">
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" variant="secondary">
            Book Free Consultation <ArrowRight size={16} className="ml-2" />
          </LinkButton>
        </div>
      </Section>
    </>
  );
}