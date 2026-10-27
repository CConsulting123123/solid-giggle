import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight, Calculator, ClipboardCheck, CheckCircle, Circle,
  Download, Award, Building2, DollarSign, FileText, Percent,
  RefreshCw, Search, Shield, Target, TrendingUp, Users, Zap,
  ExternalLink, Printer,
} from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND } from "../../lib/constants";
import { cn } from "../../components/cn";

/* ───────────────────────────────────────────── */
/*  1. SMALL BUSINESS SIZE STANDARD CALCULATOR    */
/* ───────────────────────────────────────────── */

// Common NAICS codes with their 2026 size standards (revenue-based, $M, or employee-based)
const NAICS_OPTIONS = [
  { code: "541512", label: "541512 — Computer Systems Design Services", standard: 34.0, unit: "$M revenue" },
  { code: "541511", label: "541511 — Custom Computer Programming", standard: 34.0, unit: "$M revenue" },
  { code: "541519", label: "541519 — Other Computer Related Services", standard: 34.0, unit: "$M revenue" },
  { code: "541611", label: "541611 — Management Consulting", standard: 19.0, unit: "$M revenue" },
  { code: "541618", label: "541618 — Other Management Consulting", standard: 19.0, unit: "$M revenue" },
  { code: "541613", label: "541613 — Marketing Consulting", standard: 19.0, unit: "$M revenue" },
  { code: "236220", label: "236220 — Commercial Construction", standard: 45.0, unit: "$M revenue" },
  { code: "238220", label: "238220 — Plumbing/HVAC Contractors", standard: 22.0, unit: "$M revenue" },
  { code: "561720", label: "561720 — Janitorial Services", standard: 24.5, unit: "$M revenue" },
  { code: "488510", label: "488510 — Freight Transportation Arrangement", standard: 40.0, unit: "$M revenue" },
  { code: "531210", label: "531210 — Real Estate Agents/Brokers", standard: 8.0, unit: "$M revenue" },
  { code: "334111", label: "334111 — Electronic Computer Manufacturing", standard: 1250, unit: "employees" },
  { code: "336413", label: "336413 — Other Aircraft Parts & Aux Equipment", standard: 1500, unit: "employees" },
  { code: "811210", label: "811210 — Electronic Equipment Repair", standard: 12.5, unit: "$M revenue" },
  { code: "622310", label: "622310 — Specialty Hospitals", standard: 41.5, unit: "$M revenue" },
  { code: "541715", label: "541715 — R&D in Physical Sciences", standard: 1000, unit: "employees" },
];

function SizeStandardCalculator() {
  const [naics, setNaics] = useState(NAICS_OPTIONS[0]);
  const [revenue, setRevenue] = useState("");
  const [employees, setEmployees] = useState("");

  const isRevenueBased = naics.unit === "$M revenue";
  const parsedRevenue = parseFloat(revenue) || 0;
  const parsedEmployees = parseInt(employees) || 0;

  let qualifies = false;
  let headroom = "";
  if (isRevenueBased) {
    qualifies = parsedRevenue <= naics.standard;
    if (parsedRevenue > 0) {
      const remaining = naics.standard - parsedRevenue;
      headroom = remaining > 0
        ? `$${remaining.toFixed(1)}M of revenue headroom before you exceed the size standard.`
        : `You exceed the standard by $${Math.abs(remaining).toFixed(1)}M.`;
    }
  } else {
    qualifies = parsedEmployees <= naics.standard;
    if (parsedEmployees > 0) {
      const remaining = naics.standard - parsedEmployees;
      headroom = remaining > 0
        ? `${remaining} employee slots before you exceed the size standard.`
        : `You exceed the standard by ${Math.abs(remaining)} employees.`;
    }
  }

  return (
    <Card className="p-6 lg:p-8" hover={false}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
          <Calculator size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gov-navy">Size Standard Calculator</h3>
          <p className="text-xs text-slate-500">Are you "small" for your NAICS code? Find out instantly.</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">NAICS Code</label>
          <select
            value={naics.code}
            onChange={(e) => {
              const found = NAICS_OPTIONS.find((o) => o.code === e.target.value);
              if (found) setNaics(found);
            }}
            className="w-full rounded-xl border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none bg-white"
          >
            {NAICS_OPTIONS.map((o) => (
              <option key={o.code} value={o.code}>{o.label}</option>
            ))}
          </select>
        </div>

        {isRevenueBased ? (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Average Annual Receipts (last 3 years, $M)
            </label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="e.g. 12.5"
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none"
            />
            <p className="text-xs text-slate-400 mt-1.5">
              Size standard for {naics.code}: <strong>${naics.standard}M in average annual receipts</strong>
            </p>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Number of Employees</label>
            <input
              type="number"
              min="0"
              value={employees}
              onChange={(e) => setEmployees(e.target.value)}
              placeholder="e.g. 250"
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none"
            />
            <p className="text-xs text-slate-400 mt-1.5">
              Size standard for {naics.code}: <strong>{naics.standard} employees</strong>
            </p>
          </div>
        )}

        {(revenue || employees) && (
          <div className={cn(
            "rounded-xl p-4 border",
            qualifies ? "bg-gov-green/5 border-gov-green/20" : "bg-gov-crimson/5 border-gov-crimson/20"
          )}>
            <div className="flex items-start gap-3">
              {qualifies ? (
                <CheckCircle className="text-gov-green shrink-0 mt-0.5" size={20} />
              ) : (
                <Shield className="text-gov-crimson shrink-0 mt-0.5" size={20} />
              )}
              <div>
                <div className={cn("font-bold text-sm", qualifies ? "text-gov-green" : "text-gov-crimson")}>
                  {qualifies ? "You qualify as a small business" : "You do NOT qualify as small under this NAICS"}
                </div>
                <p className="text-xs text-slate-600 mt-1">{headroom}</p>
                {qualifies && (
                  <p className="text-xs text-slate-500 mt-1.5">
                    You can self-certify as small for set-aside contracts issued under this NAICS code.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

/* ───────────────────────────────────────────── */
/*  2. READINESS CHECKLIST                        */
/* ───────────────────────────────────────────── */

const CHECKLIST_GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Registration",
    items: [
      "SAM.gov registration is active and expires more than 60 days from now",
      "Entity validation passed (legal name matches IRS records exactly)",
      "CAGE code assigned and recorded",
      "EFT/bank information entered for payment",
      "Primary NAICS code reflects your core revenue activity",
      "Additional NAICS codes cover your secondary services",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Reviewed eligibility for 8(a) program",
      "Reviewed eligibility for HUBZone (office location + 35% employee residency)",
      "Reviewed eligibility for SDVOSB (service-disabled veteran ownership)",
      "Reviewed eligibility for WOSB/EDWOSB (51% women ownership)",
      "SBA size standards checked against your revenue",
    ],
  },
  {
    title: "Marketing Assets",
    items: [
      "One-page capability statement (UEI, CAGE, past performance included)",
      "DSBS profile complete with keywords optimized",
      "Past performance documented with contract numbers and values",
      "Target agency list built with forecasts reviewed",
    ],
  },
  {
    title: "Opportunity Pipeline",
    items: [
      "SAM.gov saved searches configured with email alerts",
      "Agency forecasts reviewed for the next 12 months",
      "Sources Sought responses submitted in your NAICS",
      "Teaming or subcontract relationships established with at least one prime",
    ],
  },
];

function ReadinessChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const total = CHECKLIST_GROUPS.reduce((n, g) => n + g.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((done / total) * 100);

  return (
    <Card className="p-6 lg:p-8" hover={false}>
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-crimson/10 text-gov-crimson">
          <ClipboardCheck size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gov-navy">Federal Readiness Checklist</h3>
          <p className="text-xs text-slate-500">19 items every small business needs before bidding.</p>
        </div>
      </div>

      {/* Progress */}
      <div className="my-6">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
          <span>{done} of {total} complete</span>
          <span>{pct}%</span>
        </div>
        <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-500", pct === 100 ? "bg-gov-green" : "bg-gov-blue")}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {CHECKLIST_GROUPS.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-bold uppercase tracking-wider text-gov-blue mb-3">{group.title}</p>
            <div className="space-y-1">
              {group.items.map((item) => (
                <button
                  key={item}
                  onClick={() => setChecked((c) => ({ ...c, [item]: !c[item] }))}
                  className="flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left hover:bg-slate-50 transition"
                >
                  {checked[item] ? (
                    <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
                  ) : (
                    <Circle size={18} className="text-slate-300 shrink-0 mt-0.5" />
                  )}
                  <span className={cn("text-sm", checked[item] ? "text-slate-400 line-through" : "text-slate-700")}>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {pct === 100 && (
        <div className="mt-6 rounded-xl bg-gov-green/5 border border-gov-green/20 p-4 flex items-center gap-3">
          <CheckCircle className="text-gov-green shrink-0" size={20} />
          <p className="text-sm text-slate-700">
            <strong>Ready to bid.</strong> Every foundation item is complete — you can compete for set-aside contracts today.
          </p>
        </div>
      )}
    </Card>
  );
}

/* ───────────────────────────────────────────── */
/*  3. FEE & PROFIT CALCULATOR                    */
/* ───────────────────────────────────────────── */

function FeeCalculator() {
  const [contractValue, setContractValue] = useState("1000000");
  const [feePercent, setFeePercent] = useState(8);
  const [feeType, setFeeType] = useState<"fixed" | "costplus" | "t&m">("costplus");

  const value = parseFloat(contractValue) || 0;
  const fee = value * (feePercent / 100);
  const cost = value - fee;

  // Simplified IFF estimate (GSA Industrial Funding Fee)
  const iff = fee * 0.0075;

  const notes: Record<string, string> = {
    fixed: "Firm Fixed Price: you keep all savings below cost — but absorb all overruns.",
    costplus: "Cost-Plus: your fee is capped at the negotiated ceiling; cost overruns are covered but profit doesn't grow.",
    "t&m": "Time & Materials: you bill hours at fixed labor rates; materials marked up per contract terms.",
  };

  return (
    <Card className="p-6 lg:p-8" hover={false}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-green/10 text-gov-green">
          <DollarSign size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gov-navy">Fee &amp; Profit Estimator</h3>
          <p className="text-xs text-slate-500">Estimate fee on fixed-price, cost-plus or T&amp;M contracts.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Contract Value ($)</label>
          <input
            type="number"
            min="0"
            step="1000"
            value={contractValue}
            onChange={(e) => setContractValue(e.target.value)}
            className="w-full rounded-xl border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Negotiated Fee (%)</label>
          <input
            type="number"
            min="0"
            max="30"
            step="0.5"
            value={feePercent}
            onChange={(e) => setFeePercent(parseFloat(e.target.value) || 0)}
            className="w-full rounded-xl border-2 border-slate-200 px-4 py-2.5 text-sm focus:border-gov-blue focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-slate-700 mb-2">Contract Type</label>
        <div className="grid grid-cols-3 gap-2">
          {([
            { id: "fixed", label: "Fixed Price" },
            { id: "costplus", label: "Cost-Plus" },
            { id: "t&m", label: "T&M" },
          ] as const).map((t) => (
            <button
              key={t.id}
              onClick={() => setFeeType(t.id)}
              className={cn(
                "rounded-xl border-2 px-3 py-2 text-xs font-bold transition",
                feeType === t.id
                  ? "border-gov-blue bg-gov-blue/5 text-gov-blue"
                  : "border-slate-200 text-slate-500 hover:border-slate-300"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div className="text-xs text-slate-500 font-semibold">Estimated Fee</div>
          <div className="font-display text-2xl font-bold text-gov-green mt-1">
            ${fee.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div className="text-xs text-slate-500 font-semibold">Allowable Cost</div>
          <div className="font-display text-2xl font-bold text-gov-navy mt-1">
            ${cost.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </div>
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <div className="text-xs text-slate-500 font-semibold">GSA IFF (if scheduled)</div>
          <div className="font-display text-2xl font-bold text-gov-gold mt-1">
            ${iff.toLocaleString("en-US", { maximumFractionDigits: 0 })}
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500 leading-relaxed">{notes[feeType]}</p>
    </Card>
  );
}

/* ───────────────────────────────────────────── */
/*  4. SET-ASIDE ELIGIBILITY QUIZ                 */
/* ───────────────────────────────────────────── */

const CERT_RECOMMENDATIONS = [
  {
    key: "8a",
    name: "8(a) Business Development",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program",
    desc: "Sole-source awards up to $4.5M and a 9-year developmental program.",
  },
  {
    key: "hubzone",
    name: "HUBZone",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/hubzone-program",
    desc: "Hard 3% agency goal and thin competition among certified firms.",
  },
  {
    key: "sdvosb",
    name: "SDVOSB",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/service-disabled-veteran-owned-small-businesses-sdvosbs",
    desc: "3% government-wide goal; VA mandates Vets First set-asides.",
  },
  {
    key: "wosb",
    name: "WOSB / EDWOSB",
    url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/women-owned-small-business-federal-contracting-program",
    desc: "5% goal with set-asides and sole-source authority in underrepresented NAICS.",
  },
];

function EligibilityQuiz() {
  const [answers, setAnswers] = useState({
    disadvantaged: false,
    lowIncome: false,
    hubzoneLocation: false,
    employeeResidency: false,
    veteran: false,
    womenOwned: false,
  });

  const recommended = [
    answers.disadvantaged && answers.lowIncome && { ...CERT_RECOMMENDATIONS[0] },
    answers.hubzoneLocation && answers.employeeResidency && { ...CERT_RECOMMENDATIONS[1] },
    answers.veteran && { ...CERT_RECOMMENDATIONS[2] },
    answers.womenOwned && { ...CERT_RECOMMENDATIONS[3] },
  ].filter(Boolean) as typeof CERT_RECOMMENDATIONS;

  const QUESTIONS: { key: keyof typeof answers; label: string }[] = [
    { key: "disadvantaged", label: "Owner(s) are members of a group SBA presumes socially disadvantaged (or can document individual disadvantage)" },
    { key: "lowIncome", label: "Personal net worth under $850K, AGI under $400K avg 3 yrs, assets under $6.5M (excl. qualified retirement accounts)" },
    { key: "hubzoneLocation", label: "Principal office is located in a designated HUBZone" },
    { key: "employeeResidency", label: "At least 35% of employees live in a HUBZone" },
    { key: "veteran", label: "A service-disabled veteran owns 51% and controls daily operations" },
    { key: "womenOwned", label: "One or more women own 51% and control daily operations" },
  ];

  return (
    <Card className="p-6 lg:p-8" hover={false}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gov-gold/10 text-gov-gold">
          <Award size={20} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-gov-navy">Certification Eligibility Quiz</h3>
          <p className="text-xs text-slate-500">Check every box that applies — get matched instantly.</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {QUESTIONS.map((q) => (
          <button
            key={q.key}
            onClick={() => setAnswers((a) => ({ ...a, [q.key]: !a[q.key] }))}
            className={cn(
              "flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left transition",
              answers[q.key] ? "border-gov-green bg-gov-green/5" : "border-slate-200 hover:border-slate-300"
            )}
          >
            {answers[q.key] ? (
              <CheckCircle size={18} className="text-gov-green shrink-0 mt-0.5" />
            ) : (
              <Circle size={18} className="text-slate-300 shrink-0 mt-0.5" />
            )}
            <span className="text-sm text-slate-700">{q.label}</span>
          </button>
        ))}
      </div>

      {recommended.length > 0 ? (
        <div className="mt-6 space-y-3">
          <p className="text-sm font-bold text-gov-navy">
            Based on your answers, you should pursue {recommended.length} certification{recommended.length > 1 ? "s" : ""}:
          </p>
          {recommended.map((r) => (
            <a
              key={r.key}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-3 rounded-xl border border-gov-blue/20 bg-gov-blue/5 p-4 hover:border-gov-blue/40 transition"
            >
              <div>
                <div className="font-bold text-gov-navy text-sm">{r.name}</div>
                <p className="text-xs text-slate-600 mt-1">{r.desc}</p>
              </div>
              <ExternalLink size={15} className="text-gov-blue shrink-0 mt-1" />
            </a>
          ))}
          <p className="text-xs text-slate-500 pt-1">
            Certifications stack — pursue all you qualify for. We offer expedited certification service completed within 14 days.
          </p>
        </div>
      ) : (
        <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
          Check the boxes that apply to your ownership profile to see which certifications you should pursue.
        </div>
      )}
    </Card>
  );
}

/* ───────────────────────────────────────────── */
/*  PAGE                                          */
/* ───────────────────────────────────────────── */

const TOOLS_INDEX = [
  { id: "size-standard", label: "Size Standard Calculator", icon: Calculator, desc: "Check if you qualify as small" },
  { id: "checklist", label: "Readiness Checklist", icon: ClipboardCheck, desc: "19 pre-bid foundation items" },
  { id: "eligibility", label: "Certification Quiz", icon: Award, desc: "Match your profile to SBA programs" },
  { id: "fee", label: "Fee & Profit Estimator", icon: DollarSign, desc: "Model contract economics" },
];

const RESOURCE_LINKS = [
  { name: "SAM.gov", url: "https://sam.gov", desc: "Registration & opportunities portal" },
  { name: "SBA Learning Center", url: "https://www.sba.gov/learning", desc: "Free federal contracting courses" },
  { name: "USASpending.gov", url: "https://www.usaspending.gov", desc: "Every federal award, searchable" },
  { name: "APEX Accelerators", url: "https://www.apexaccelerators.us", desc: "Free local contracting counseling" },
  { name: "GSA eBuy", url: "https://www.gsaelibrary.gov", desc: "Scheduled contractor RFQ portal" },
  { name: "SBA Size Standards Tool", url: "https://www.sba.gov/document/support--table-size-standards", desc: "Official size standard lookup" },
  { name: "Agency Forecasts", url: "https://acquisition.gov/agency-procurement-forecasts", desc: "Upcoming contract opportunities" },
  { name: "Dynamic Small Business Search", url: "https://dsbs.sba.gov", desc: "How agencies find small vendors" },
];

export default function Tools() {
  const [activeTool, setActiveTool] = useState("size-standard");

  return (
    <>
      <Helmet>
        <title>Free Tools &amp; Resources — Government Contracting Information</title>
        <meta name="description" content="Free government contracting tools: size standard calculator, readiness checklist, certification eligibility quiz, and fee estimator. Plus the official resource library every contractor needs." />
        <link rel="canonical" href={`https://${BRAND.domain}/tools`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-semibold text-slate-300 mb-5">
              <Zap size={13} className="text-gov-gold" />
              100% free — no signup, no strings
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Free Tools for Government Contractors
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              The calculators, checklists and reference links that cut through government
              contracting nonsense — built for small businesses, free forever.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          {/* Tool selector */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {TOOLS_INDEX.map((t) => {
              const Icon = t.icon;
              const active = activeTool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTool(t.id)}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl border p-4 text-left transition-all",
                    active
                      ? "border-gov-navy bg-gov-navy text-white shadow-lg"
                      : "border-slate-200 bg-white hover:border-gov-blue/30 hover:shadow-md"
                  )}
                >
                  <div className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl shrink-0",
                    active ? "bg-white/10 text-gov-gold" : "bg-gov-blue/10 text-gov-blue"
                  )}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={cn("font-bold text-sm", active ? "text-white" : "text-gov-navy")}>{t.label}</div>
                    <div className={cn("text-xs mt-0.5", active ? "text-slate-300" : "text-slate-500")}>{t.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active tool */}
          <div className="max-w-4xl mx-auto">
            {activeTool === "size-standard" && <SizeStandardCalculator />}
            {activeTool === "checklist" && <ReadinessChecklist />}
            {activeTool === "eligibility" && <EligibilityQuiz />}
            {activeTool === "fee" && <FeeCalculator />}
          </div>
        </div>
      </section>

      {/* Resource library */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Bookmark This</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-gov-navy">The Official Resource Library</h2>
            <p className="mt-3 text-slate-600 max-w-xl mx-auto">
              Every free government resource a contractor needs — all in one place. These are the
              official sites, not paywalled middlemen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RESOURCE_LINKS.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="group">
                <Card className="h-full p-5 group-hover:border-gov-blue/30 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-bold text-gov-navy text-sm">{r.name}</div>
                    <ExternalLink size={14} className="text-slate-300 group-hover:text-gov-blue shrink-0 transition" />
                  </div>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">{r.desc}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section
        title="Want these done for you?"
        kicker="Expedited Services"
        subtitle="Certifications completed within 14 days. GSA Schedules submitted within 30. Proposal writing and capture management that wins."
        center
        dark
      >
        <div className="flex flex-wrap justify-center gap-4">
          <LinkButton href="/services" size="lg" variant="secondary">
            View Services <ArrowRight size={16} className="ml-2" />
          </LinkButton>
          <LinkButton href="/contact" size="lg" variant="ghost" className="!text-white !border-white/20 border">
            Ask a Free Question
          </LinkButton>
        </div>
      </Section>
    </>
  );
}