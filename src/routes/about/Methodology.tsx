import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Globe2, Target, Trophy, Repeat, RefreshCw } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS } from "../../lib/constants";
import { cn } from "../../components/cn";

const fiveCs = [
  {
    id: "compliance",
    label: "Compliance",
    icon: Shield,
    color: "bg-emerald-600",
    description: "The foundation. Get registered, certified, and set-aside-ready — legally and completely.",
    detail:
      "Before you can compete, the government has to be able to buy from you. We build the foundation first: a clean SAM.gov registration, DSBS and FEMA vendor profiles, and the SBA certifications that unlock set-asides.",
    tasks: [
      { name: "SAM.gov Registration (UEI + CAGE)", type: "Registration" },
      { name: "DSBS & FEMA Vendor Profiles", type: "Registration" },
      { name: "8(a), HUBZone, SDVOSB, WOSB Applications", type: "Certification" },
      { name: "Rejection Recovery & Renewals", type: "Certification" },
    ],
  },
  {
    id: "context",
    label: "Context",
    icon: Globe2,
    color: "bg-gov-blue",
    description: "Know the landscape. Understand who buys what you sell, where the money goes, and who you're up against.",
    detail:
      "Blind bidding burns budget. We use real award data — agency spending patterns, incumbent contracts, set-aside utilization — to identify where your company can actually win.",
    tasks: [
      { name: "Capabilities Statement Design", type: "Marketing" },
      { name: "Agency & Spend Analysis", type: "Data" },
      { name: "Contract Award Research", type: "Data" },
      { name: "Competitor & Incumbent Analysis", type: "Data" },
    ],
  },
  {
    id: "capture",
    label: "Capture",
    icon: Target,
    color: "bg-gov-crimson",
    description: "The hunt. Identify and shape opportunities 6–18 months before the RFP hits the street.",
    detail:
      "By the time an RFP is public, the winning contractor is often already known. Capture means finding opportunities early, meeting the right program managers, and positioning through Sources Sought and industry days.",
    tasks: [
      { name: "Pipeline Construction & Qualification", type: "Strategy" },
      { name: "Sources Sought Monitoring & Response", type: "Strategy" },
      { name: "Agency Relationship Building", type: "Outreach" },
      { name: "Teaming & Subcontract Strategy", type: "Strategy" },
    ],
  },
  {
    id: "compete",
    label: "Compete",
    icon: Trophy,
    color: "bg-amber-600",
    description: "Win the work. Proposals engineered for evaluation — not just written.",
    detail:
      "Every proposal is built around a compliance matrix and win themes, then pressure-tested through color team reviews — the same method used by the top federal proposal shops.",
    tasks: [
      { name: "Compliance Matrix & Win Themes", type: "Proposal" },
      { name: "Blue / Pink / Red / Gold Team Reviews", type: "Proposal" },
      { name: "Technical, Management & Pricing Volumes", type: "Proposal" },
      { name: "Past Performance & PPQ Formatting", type: "Proposal" },
    ],
  },
  {
    id: "continuity",
    label: "Continuity",
    icon: Repeat,
    color: "bg-indigo-600",
    description: "Scale and repeat. Perform, stay compliant, renew vehicles, and compound your wins.",
    detail:
      "Winning once is a start. We keep registrations and certifications current, manage your GSA Schedule, and expand across vehicles so year two is bigger than year one.",
    tasks: [
      { name: "GSA Schedule & Contract Management", type: "Admin" },
      { name: "Registration & Certification Renewals", type: "Admin" },
      { name: "Win/Loss Debrief Analysis", type: "Strategy" },
      { name: "Growth Planning & Vehicle Expansion", type: "Strategy" },
    ],
  },
];

const pdca = [
  { key: "plan", label: "Plan", desc: "Define strategy, scope, and success criteria. Build the blueprint." },
  { key: "do", label: "Do", desc: "Execute the work with tight process control and documentation." },
  { key: "check", label: "Check", desc: "Review metrics, quality, and outcomes. Diagnose root causes." },
  { key: "act", label: "Act", desc: "Standardize what worked and fix what didn't. Scale the wins." },
];

export default function AboutMethodology() {
  const [activeC, setActiveC] = useState("compliance");
  const [activePDCA, setActivePDCA] = useState("plan");

  const currentC = fiveCs.find((c) => c.id === activeC);
  const currentPDCA = pdca.find((p) => p.key === activePDCA);

  return (
    <>
            <Helmet>
        <title>Our Methodology — The 5 C's Framework | {BRAND.fullName}</title>
        <meta name="description" content="The 5 C's methodology: Compliance, Context, Capture, Compete, Continuity — how small businesses win federal contracts. Free guides plus expedited certification, GSA, proposal and capture services." />
        <link rel="canonical" href={`https://${BRAND.domain}/about/methodology`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">About Us</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Our Methodology
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We don't do "consulting theater." The 5 C's framework is built from real outcomes across
              thousands of engagements — and it's the same process behind every free guide, tool, and
              expedited service we offer.
            </p>
          </div>
        </div>
      </section>

      {/* 5 C's Framework */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Framework</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">The 5 C's of Federal Contracting</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Most businesses jump straight to bidding. Winners start at the foundation. Our 5 C's framework
            covers every phase of government contracting — in the order that actually produces wins.
          </p>

          <div className="mt-10">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 overflow-x-auto">
              {fiveCs.map((c) => {
                const isActive = activeC === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveC(c.id)}
                    className={cn(
                      "flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-all relative",
                      isActive ? "text-gov-navy" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center transition-colors",
                      isActive ? `${c.color} text-white` : "bg-slate-200 text-slate-400"
                    )}>
                      <c.icon size={16} />
                    </div>
                    {c.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className={cn("absolute bottom-0 left-0 w-full h-0.5", c.color)}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeC}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-8"
              >
                <Card className="p-8" hover={false}>
                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-gov-navy">{currentC?.label}</h3>
                      <p className="mt-3 text-lg text-slate-600">{currentC?.description}</p>
                      <p className="mt-3 text-sm text-slate-500 leading-relaxed">{currentC?.detail}</p>
                      <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                        <span className={cn("h-2 w-2 rounded-full", currentC?.color)} />
                        Phase Priority: High
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-6">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Core Deliverables
                      </h4>
                      <div className="space-y-3">
                        {currentC?.tasks.map((task) => (
                          <div key={task.name} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200">
                            <span className="font-medium text-slate-800 text-sm">{task.name}</span>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-500">
                              {task.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PDCA */}
      <Section title="PDCA Operating Rhythm" kicker="Continuous Improvement">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-slate-600">
              Not "consulting theater." This is a simple loop that keeps your registrations 
              clean, your pipeline focused, and your proposal output improving month over month.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {pdca.map((p) => {
                const isActive = activePDCA === p.key;
                return (
                  <button
                    key={p.key}
                    onClick={() => setActivePDCA(p.key)}
                    className={cn(
                      "rounded-xl border p-4 text-left transition-all",
                      isActive ? "border-gov-crimson bg-red-50/50" : "border-slate-200 bg-white hover:bg-slate-50"
                    )}
                  >
                    <p className="text-xs font-semibold tracking-wide text-slate-500">Phase</p>
                    <p className="mt-1 text-lg font-bold text-gov-navy">{p.label}</p>
                  </button>
                );
              })}
            </div>

            <Card className="mt-6 p-6" hover={false}>
              <p className="text-xs font-semibold tracking-wide text-slate-500">What happens here</p>
              <p className="mt-2 text-lg font-bold text-gov-navy">{currentPDCA?.label}</p>
              <p className="mt-2 text-slate-600">{currentPDCA?.desc}</p>
            </Card>
          </div>

          <Card className="p-6" hover={false}>
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="h-5 w-5 text-gov-blue" />
              <p className="text-sm font-bold tracking-wide text-gov-blue">"The Loop"</p>
            </div>
            <p className="text-sm text-slate-600 mb-6">
              Research → Diagnose → Improve → Repeat. This operating rhythm drives everything we do.
            </p>

            <div className="space-y-3">
              {[
                { t: "Research", d: "Market signals, agency trends, spend, and opportunity patterns." },
                { t: "Diagnose", d: "Root issues with your SME + outside perspective." },
                { t: "Improve", d: "Leverage metrics to reduce costs and increase output." },
                { t: "Results", d: "Clear outcomes that justify retention." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300">
                  <p className="font-semibold text-gov-navy">{x.t}</p>
                  <p className="mt-1 text-sm text-slate-600">{x.d}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section title="See the Methodology in Action" kicker="Get Started" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Let's apply this to your business
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                Book a call and we'll walk through where you sit in the 5 C's — and
                build a plan to move you forward, whether you do it yourself with our free
                guides or have us execute for you.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Book Strategy Call
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
