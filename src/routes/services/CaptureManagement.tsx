import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle, Target, Radar, TrendingUp, Users,
  Handshake, Search, FileSearch, Calendar, BarChart3, Zap, Clock,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS } from "../../lib/constants";

const CAPTURE_ACTIVITIES = [
  {
    icon: Radar,
    title: "Opportunity Identification",
    desc: "We monitor SAM.gov, agency forecasts, and budget documents 6-18 months ahead of RFP release to build your pipeline before competitors see it.",
    bullets: [
      "SAM.gov saved searches across your NAICS codes",
      "Agency procurement forecast tracking",
      "Sources Sought and RFI monitoring",
      "Expiring contract (re-compete) identification",
    ],
  },
  {
    icon: FileSearch,
    title: "Qualification & Win Scoring",
    desc: "Not every opportunity deserves a bid. We score each on win probability, alignment with your past performance, and incumbent strength.",
    bullets: [
      "Win-probability scoring model",
      "Incumbent analysis and contract history",
      "Budget and funding verification",
      "Bid / no-bid recommendation memo",
    ],
  },
  {
    icon: Users,
    title: "Agency Relationship Building",
    desc: "Contracts go to firms the agency knows. We get you in front of contracting officers, small business specialists and program managers early.",
    bullets: [
      "Small business specialist introductions",
      "Industry day and outreach event scheduling",
      "Capability briefings to target programs",
      "Pre-RFP meeting coordination",
    ],
  },
  {
    icon: Handshake,
    title: "Teaming & Partnerships",
    desc: "We identify prime contractors who need your capabilities for their bids, and negotiate teaming agreements that protect your interests.",
    bullets: [
      "Prime and partner identification",
      "Teaming agreement negotiation",
      "Mentor-protégé program setup",
      "Subcontract opportunity matching",
    ],
  },
];

const PIPELINE_METRICS = [
  { value: "6-18 mo", label: "Pipeline visibility ahead of RFP release" },
  { value: "3x", label: "Typical increase in qualified opportunities" },
  { value: "24 hrs", label: "Opportunity qualification turnaround" },
  { value: "6-18 mo", label: "Head start on competitors bidding cold" },
];

const PROCESS = [
  { phase: "Week 1-2", title: "Foundation", items: ["Target agency selection", "NAICS and market analysis", "Pipeline tooling setup", "Saved searches configured"] },
  { phase: "Month 1", title: "Pipeline Build", items: ["Opportunity long-list generated", "Win-probability scoring", "Bid/no-bid criteria agreed", "First agency outreach"] },
  { phase: "Month 2-3", title: "Active Capture", items: ["Sources Sought responses filed", "Agency meetings scheduled", "Teaming targets engaged", "Capture plans for top opportunities"] },
  { phase: "Ongoing", title: "Sustained Pursuit", items: ["Weekly pipeline reviews", "Opportunity qualification", "Proposal kickoff for won captures", "Pipeline refresh and reporting"] },
];

export default function ServicesCapture() {
  return (
    <>
      <Helmet>
        <title>Capture Management &amp; Pipeline Building | Government Contracting Information</title>
        <meta name="description" content="Dedicated capture management for small businesses — identify opportunities 6-18 months before RFP release, qualify with win-probability scoring, build agency relationships, and team with primes." />
        <link rel="canonical" href={`https://${BRAND.domain}/services/capture-management`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 mb-5">
              <Target size={13} className="text-gov-gold" />
              Win the contract before the RFP drops
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Capture Management That Starts 18 Months Early
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Most small businesses find opportunities when the RFP is posted — 30 days before
              it's due, against an incumbent who's been working it for a year. Capture management
              flips that: we get you positioned before the requirement is public.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" className="bg-white text-gov-navy hover:bg-slate-100">
                Book Free Consultation <ArrowRight size={16} className="ml-2" />
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="accent-line mb-6" />
              <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">The Timing Problem</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">
                Proposals Don't Win. Positioning Does.
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                By the time an RFP hits SAM.gov, the winning bidder has usually already shaped the
                requirements, briefed the program office, and lined up a team. If your first contact
                with an opportunity is the RFP itself, you're competing for second place.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Capture management is the disciplined work of finding opportunities while they're
                still budgets and forecasts — then shaping them, qualifying them, and positioning
                your firm so the eventual proposal is a formality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PIPELINE_METRICS.map((m) => (
                <div key={m.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="font-display text-2xl font-bold text-gov-navy">{m.value}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <Section title="What Capture Management Includes" kicker="Four Disciplines" subtitle="A dedicated capture manager executing all four disciplines on your behalf, every week.">
        <div className="grid gap-6 md:grid-cols-2">
          {CAPTURE_ACTIVITIES.map((a) => {
            const Icon = a.icon;
            return (
              <Card key={a.title} className="p-6 lg:p-7" hover={false}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-gov-navy">{a.title}</h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{a.desc}</p>
                <ul className="mt-4 space-y-2">
                  {a.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">How It Works</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">Your First 90 Days</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <div key={p.phase} className="relative rounded-2xl bg-white border border-slate-200 p-6">
                <div className="text-xs font-bold text-gov-gold uppercase tracking-wider">{p.phase}</div>
                <h3 className="mt-2 font-display text-lg font-bold text-gov-navy">{p.title}</h3>
                <ul className="mt-4 space-y-2">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-gov-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing options */}
      <Section title="How to Engage" kicker="Flexible Models" subtitle="Capture management is available standalone or bundled with proposal writing in our Growth and Prime programs.">
        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          <Card className="p-6 lg:p-8" hover={false}>
            <Zap className="text-gov-crimson" size={24} />
            <h3 className="mt-3 font-display text-xl font-bold text-gov-navy">Standalone Capture Support</h3>
            <div className="mt-3 font-display text-3xl font-bold text-gov-navy">from $6,500</div>
            <p className="text-xs text-slate-500">6-month engagement</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Dedicated capture manager</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Weekly pipeline reviews</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Opportunity qualification memos</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Agency outreach coordination</li>
            </ul>
          </Card>
          <Card className="p-6 lg:p-8 border-gov-crimson/30 ring-2 ring-gov-crimson/10" hover={false}>
            <TrendingUp className="text-gov-crimson" size={24} />
            <h3 className="mt-3 font-display text-xl font-bold text-gov-navy">Bundled in Programs</h3>
            <div className="mt-3 font-display text-3xl font-bold text-gov-navy">$6,500 / $15,500</div>
            <p className="text-xs text-slate-500">Growth / Prime programs</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Capture + proposal writing combined</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Growth: unlimited RFP reviews</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Prime: 5 full proposal developments</li>
              <li className="flex gap-2"><CheckCircle size={15} className="text-gov-green shrink-0 mt-0.5" /> Full 5 C's methodology coverage</li>
            </ul>
            <Link to="/services/programs" className="mt-6 inline-flex items-center gap-2 text-gov-blue font-semibold text-sm hover:gap-3 transition-all">
              Compare programs <ArrowRight size={15} />
            </Link>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Start building your pipeline this quarter"
        kicker="Next Step"
        subtitle="Book a free pipeline review. We'll look at your NAICS codes, tell you what opportunities exist in the next 12 months, and how to reach them first."
        center
        dark
      >
        <div className="flex justify-center">
          <LinkButton href={LINKS.booking} target="_blank" rel="noreferrer" size="lg" variant="secondary">
            Book Free Pipeline Review <ArrowRight size={16} className="ml-2" />
          </LinkButton>
        </div>
      </Section>
    </>
  );
}