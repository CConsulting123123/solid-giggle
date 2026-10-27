import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, Award, CheckCircle, Clock, Shield, Zap,
  FileCheck, Users, AlertTriangle, Phone, Mail, Calendar,
  TrendingUp, BadgeCheck, ClipboardCheck,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS } from "../../lib/constants";

const CERTS = [
  {
    name: "8(a) Business Development",
    tagline: "The highest-value certification for qualifying firms",
    benefits: [
      "Sole-source awards up to $4.5M (services) / $7M (manufacturing)",
      "Set-aside competitions restricted to 8(a) firms only",
      "9-year developmental program with SBA mentoring",
      "Mentor-protégé joint ventures with large primes",
    ],
    eligibility: "Socially + economically disadvantaged ownership; net worth under $850K, AGI under $400K, assets under $4M",
    difficulty: "Demanding",
  },
  {
    name: "HUBZone",
    tagline: "Thin competition, hard agency quota",
    benefits: [
      "Agencies held to a hard 3% HUBZone goal — they actively seek you out",
      "Set-asides with typically fewer competing firms",
      "Single-firm direct awards possible when competition is thin",
      "Price evaluation preference in full-and-open bids",
    ],
    eligibility: "Principal office in a designated HUBZone + 35% of employees residing in a HUBZone",
    difficulty: "Moderate",
  },
  {
    name: "SDVOSB",
    tagline: "Mandatory VA set-asides under Vets First",
    benefits: [
      "3% government-wide SDVOSB prime goal",
      "VA contracts mandated to SDVOSB set-asides where possible",
      "Sole-source awards up to threshold in qualifying cases",
      "One certification valid across all federal agencies",
    ],
    eligibility: "Service-disabled veteran owns 51% and controls daily operations",
    difficulty: "Straightforward",
  },
  {
    name: "WOSB / EDWOSB",
    tagline: "Free to certify directly through SBA",
    benefits: [
      "5% government-wide prime goal",
      "Set-asides and sole-source awards in underrepresented NAICS",
      "EDWOSB adds economic-disadvantage preference",
      "No third-party certifier needed — SBA certifies directly",
    ],
    eligibility: "One or more women own 51% and control daily operations (EDWOSB adds economic thresholds)",
    difficulty: "Straightforward",
  },
];

const TIMELINE = [
  { day: "Day 1", task: "Eligibility Analysis", desc: "We assess every SBA program you qualify for and rank by market value." },
  { day: "Days 2-4", task: "Document Assembly", desc: "Tax returns, personal financials, narratives, ownership evidence — we build the complete package." },
  { day: "Days 5-8", task: "Application Preparation", desc: "Forms, certifications and supporting statements prepared and cross-verified." },
  { day: "Days 9-11", task: "Internal Review", desc: "Compliance check against SBA rejection patterns before anything is filed." },
  { day: "Days 12-14", task: "Submission", desc: "Application filed with SBA; confirmation and tracking number delivered to you." },
  { day: "Ongoing", task: "SBA Follow-Up", desc: "We handle SBA clarification requests and respond on your behalf until decision." },
];

const PRICING = [
  { name: "Single Certification", price: "$1,500", desc: "One SBA certification — full documentation, submission and follow-up.", popular: false },
  { name: "Certification Stack", price: "$2,500", desc: "All certifications you're eligible for — most firms qualify for 2-3.", popular: true },
  { name: "Rejection Recovery", price: "$950", desc: "Previously rejected? We diagnose the failure, fix gaps and resubmit.", popular: false },
];

export default function ServicesCertifications() {
  return (
    <>
      <Helmet>
        <title>Expedited SBA Certifications — Completed Within 14 Days | Government Contracting Information</title>
        <meta name="description" content="8(a), HUBZone, SDVOSB and WOSB certifications completed within 14 days. Full eligibility analysis, documentation, submission and SBA follow-through. From $1,500." />
        <link rel="canonical" href={`https://${BRAND.domain}/services/certifications`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gov-gold/10 border border-gov-gold/30 px-4 py-1.5 text-xs font-bold text-gov-gold mb-5">
              <Zap size={13} />
              14-DAY GUARANTEE
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              SBA Certifications, Completed Within 14 Days
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              The certification application is where most firms stall for months. We complete the
              entire package — eligibility analysis, documentation, submission and SBA follow-up —
              in 14 days, guaranteed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100">
                Check My Eligibility — Free <ArrowRight size={16} className="ml-2" />
              </LinkButton>
              <LinkButton href="/tools" size="lg" variant="ghost" className="!text-white !border !border-white/20">
                Take the Free Quiz
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* Why certifications */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="accent-line mb-6" />
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Why Certifications Matter</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">
                Set-Asides Are Your Unfair Advantage
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                The government has a statutory goal of awarding 23% of prime contract dollars to
                small businesses. Certifications are how you access the restricted competitions:
                a 50-firm competition instead of a 500-firm one. A sole-source award instead of
                none at all.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="font-display text-2xl font-bold text-gov-navy">23%</div>
                  <div className="text-xs text-slate-500 mt-1">Small business prime goal</div>
                </div>
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <div className="font-display text-2xl font-bold text-gov-navy">$178B+</div>
                  <div className="text-xs text-slate-500 mt-1">Awarded to small businesses annually</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gov-navy p-6 lg:p-8 text-white">
              <h3 className="font-display text-xl font-bold">Why firms fail on their own</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="flex gap-3">
                  <AlertTriangle size={17} className="text-gov-gold shrink-0 mt-0.5" />
                  <span><strong className="text-white">Incomplete documentation.</strong> SBA returns applications for missing items — restarting the review clock each time.</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle size={17} className="text-gov-gold shrink-0 mt-0.5" />
                  <span><strong className="text-white">Misreading eligibility.</strong> Firms apply for programs they don't qualify for and burn months on rejections.</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle size={17} className="text-gov-gold shrink-0 mt-0.5" />
                  <span><strong className="text-white">Missing the stack.</strong> Most firms qualify for 2-3 certifications. Pursuing only one leaves set-aside access on the table.</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle size={17} className="text-gov-gold shrink-0 mt-0.5" />
                  <span><strong className="text-white">No follow-up cadence.</strong> SBA clarification requests sit unanswered until the application lapses.</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-300">
                  Our 98% first-submission approval rate comes from pre-vetting every application
                  against SBA rejection patterns before it is ever filed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications covered */}
      <Section title="Certifications We Expedite" kicker="Full Coverage" subtitle="We assess your eligibility for every program and pursue all you qualify for — they stack.">
        <div className="grid gap-6 md:grid-cols-2">
          {CERTS.map((c) => (
            <Card key={c.name} className="p-6 lg:p-7 flex flex-col" hover={false}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-green/10 text-gov-green shrink-0">
                  <Award size={20} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-1 rounded">
                  {c.difficulty}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-gov-navy">{c.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{c.tagline}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {c.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-600">
                <strong className="text-gov-navy">Eligibility:</strong> {c.eligibility}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-5xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">The 14-Day Process</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">What Happens Each Day</h2>
          </div>
          <div className="space-y-4">
            {TIMELINE.map((t, i) => (
              <div key={t.day} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gov-navy text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  {i < TIMELINE.length - 1 && <div className="w-px h-full bg-slate-200 mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-gov-gold uppercase tracking-wider">{t.day}</span>
                    <span className="font-bold text-gov-navy">{t.task}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Section title="Fixed Pricing" kicker="No Hourly Billing" subtitle="One price, guaranteed timeline, rejection recovery included.">
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl bg-white border p-6 ${
                p.popular ? "border-gov-crimson/40 ring-2 ring-gov-crimson/10 shadow-lg" : "border-slate-200 shadow-sm"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold text-white bg-gov-crimson px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-gov-navy">{p.name}</h3>
              <div className="mt-3 font-display text-3xl font-bold text-gov-navy">{p.price}</div>
              <p className="mt-3 text-sm text-slate-600 flex-1">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-gov-navy p-6 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-start gap-3">
            <CheckCircle className="text-gov-gold shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-slate-300">
              <strong className="text-white">100% on-time guarantee.</strong> If we don't submit within 14 days, you don't pay until we do.
            </p>
          </div>
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="md" className="bg-white text-gov-navy hover:bg-slate-100 shrink-0">
            Start My Certification <ArrowRight size={15} className="ml-2" />
          </LinkButton>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Not sure which certifications you qualify for?"
        kicker="Free Assessment"
        subtitle="Take the free eligibility quiz, or book a call and we'll map every program you qualify for in 15 minutes."
        center
        dark
      >
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/tools" size="lg" variant="secondary">
            Take the Free Quiz <ArrowRight size={16} className="ml-2" />
          </LinkButton>
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" variant="ghost" className="!text-white !border !border-white/20">
            Book a Call
          </LinkButton>
        </div>
      </Section>
    </>
  );
}