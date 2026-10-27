import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Database, Filter, TrendingUp, Building2, Users, Info, ExternalLink, Search } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import ContractDataExplorer from "../../components/ContractDataExplorer";
import { BRAND, MARKET_STATS } from "../../lib/constants";

const howToUse = [
  {
    icon: Filter,
    title: "1. Filter by your NAICS code",
    desc: "Enter your 6-digit NAICS code to see only the contracts in your industry. Find yours with our free size standard calculator on the Tools page.",
  },
  {
    icon: TrendingUp,
    title: "2. Read the trends",
    desc: "The monthly spending chart shows whether agencies are buying more or less of what you sell — and how much goes to small businesses.",
  },
  {
    icon: Building2,
    title: "3. Study the agencies",
    desc: "Top agency and contractor tables reveal who buys your services, who currently holds the work, and who your future teaming partners (or competitors) are.",
  },
  {
    icon: Users,
    title: "4. Check your set-aside share",
    desc: "The set-aside distribution shows where 8(a), HUBZone, SDVOSB, and WOSB awards concentrate — and where your certification gives you an edge.",
  },
];

const officialSources = [
  { name: "USAspending.gov", url: "https://www.usaspending.gov", desc: "The official source for all federal award data" },
  { name: "SAM.gov Award Data", url: "https://sam.gov", desc: "Contract opportunities and award notices" },
  { name: "SBA Small Business Goaling Report", url: "https://www.sba.gov", desc: "Official small business achievement statistics" },
];

export default function SearchContracts() {
  return (
    <>
      <Helmet>
        <title>Contract Award Data — Government Contracting Information</title>
        <meta name="description" content="Search and analyze federal contract awards by NAICS code, state, and set-aside type. Free market intelligence for small business federal contractors." />
        <link rel="canonical" href={`https://${BRAND.domain}/information/search-contracts`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-navy-gradient">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-gold">Market Intelligence</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Federal Contract Award Data
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Real spending data, searchable by industry and location. See who is buying what you sell,
            how much goes to small businesses, and where set-aside dollars concentrate — before you
            spend a dollar on marketing.
          </p>

          {/* Market stats bar */}
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKET_STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="font-display text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Explorer */}
      <Section
        title="Search the Award Data"
        kicker="Free Tool — No Signup"
        subtitle="Filter by NAICS code, state, set-aside type, or keyword. One year of data loads fast; five years shows the full trend."
      >
        <div className="space-y-8">
          <ContractDataExplorer />

          {/* Data source note */}
          <Card className="p-5 bg-slate-50 border-slate-200" hover={false}>
            <div className="flex items-start gap-3">
              <Info size={18} className="text-gov-blue shrink-0 mt-0.5" />
              <div className="text-sm text-slate-600 leading-relaxed">
                <span className="font-semibold text-gov-navy">About this data:</span> Figures are drawn
                from federal award reporting (USASpending/SAM.gov style data). Award data changes as
                agencies submit modifications, so treat figures as directional market intelligence —
                not an exact snapshot. Small business percentages reflect set-aside utilization and
                self-reported business size.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* How to use */}
      <Section
        title="How to Use This Data"
        kicker="Playbook"
        subtitle="Award data is only useful if you know what to look for. Here's how experienced contractors read it."
        className="bg-slate-50"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {howToUse.map((h) => {
            const Icon = h.icon;
            return (
              <Card key={h.title} className="p-6" hover={true}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gov-navy">{h.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Official sources + cross-links */}
      <Section
        title="Go Deeper"
        kicker="Official Sources & Next Steps"
        subtitle="This tool answers 'where is the money?' — these resources answer 'how do I get positioned to win it?'"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Official sources */}
          <Card className="p-6" hover={false}>
            <div className="flex items-center gap-2 mb-4">
              <Database size={18} className="text-gov-blue" />
              <h3 className="font-display text-lg font-bold text-gov-navy">Official Data Sources</h3>
            </div>
            <div className="space-y-3">
              {officialSources.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-200 p-4 hover:border-gov-blue/30 hover:bg-slate-50 transition group"
                >
                  <div>
                    <div className="font-semibold text-gov-navy text-sm">{s.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{s.desc}</div>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-gov-blue transition" />
                </a>
              ))}
            </div>
          </Card>

          {/* Next steps */}
          <Card className="p-6 bg-gov-navy text-white" hover={false}>
            <div className="flex items-center gap-2 mb-4">
              <Search size={18} className="text-gov-gold" />
              <h3 className="font-display text-lg font-bold">Turn Data Into Pursuits</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">
              Found agencies buying your services? The next steps depend on where you are in the
              process — and our free guides cover every one of them:
            </p>
            <div className="space-y-3">
              {[
                { label: "Not registered yet? SAM.gov registration guide", to: "/information/sam-dsbs-fema" },
                { label: "Set-aside data caught your eye? Certification guide", to: "/information/certification-data" },
                { label: "Ready to pursue? Finding & qualifying bids", to: "/information/finding-bids" },
                { label: "Need a vehicle? GSA Schedule & contract vehicles", to: "/information/contract-vehicles" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition text-sm font-medium"
                >
                  {l.label}
                  <span className="text-gov-gold">→</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}