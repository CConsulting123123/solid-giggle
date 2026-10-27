import { Helmet } from "react-helmet-async";
import { ArrowRight, FileText, CheckCircle, AlertTriangle, ListChecks } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS } from "../../lib/constants";

const colorTeams = [
  { name: "Blue Team", phase: "Strategy & Outline", color: "bg-blue-600", desc: "Reviews outline, win themes, and solution strategy before writing starts." },
  { name: "Pink Team", phase: "Storyboards", color: "bg-pink-400", desc: "60% draft. Validates writers are on track and the story makes sense." },
  { name: "Red Team", phase: "Evaluation Sim", color: "bg-red-600", desc: "90% draft. Scored exactly like the government would." },
  { name: "Gold Team", phase: "Final Polish", color: "bg-yellow-500", desc: "100% complete. White glove check for errors before submission." },
];

export default function InformationProposals() {
  return (
    <>
      <Helmet>
        <title>Writing Proposals 101 — Government Contracting Information</title>
        <meta name="description" content="How to write winning government proposals: compliance matrices, Shipley color team reviews, proposal structure, and the mistakes that get proposals disqualified." />
        <link rel="canonical" href={`https://${BRAND.domain}/information/writing-proposals`} />
      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Information</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              Writing Proposals 101
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Winning proposals aren't just well-written — they're compliant and structured. 
              Learn the Shipley method that professional proposal teams use.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Matrix */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Start Here</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
            The Compliance Matrix: Your First (and Most Important) Task
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Before writing a single word, extract every requirement from the RFP into a matrix.
            Proposals are disqualified for missing requirements far more often than for weak writing.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-3">
              {[
                { t: "Section L instructions", d: "Exactly how the proposal must be formatted, organized, and submitted" },
                { t: "Section M evaluation criteria", d: "How the government will score you — write to these weights" },
                { t: "Every 'shall' and 'must'", d: "Each numbered requirement gets its own matrix row and a planned response location" },
                { t: "Page limits & formatting", d: "Font, margins, page counts — violations can void your proposal" },
                { t: "Attachments & forms", d: "Reps & certs, PPQs, acknowledgments of amendments — all of them" },
              ].map((row) => (
                <div key={row.t} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <ListChecks size={18} className="text-gov-blue shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gov-navy text-sm">{row.t}</div>
                    <div className="text-xs text-slate-600 mt-0.5 leading-relaxed">{row.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-gov-navy text-white" hover={false}>
              <h3 className="font-display text-lg font-bold">Why evaluators love compliance</h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Evaluators score against a checklist. When they can find your response to each
                requirement quickly — clearly labeled, in the section they expect — you score
                higher on the same content. Compliance isn't busywork; it's how the game is scored.
              </p>
              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <span className="text-gov-gold font-semibold">Rule of thumb:</span> if the evaluator
                has to hunt for your answer, you've already lost points.
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Teams */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">The Shipley Method</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">Color Team Reviews</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            The Shipley method uses "Color Teams" to review proposals at specific milestones. 
            Each review catches issues before they become rejection-worthy problems.
          </p>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {colorTeams.map((team) => (
              <Card key={team.name} className={`p-6 border-l-4 ${team.color.replace('bg-', 'border-')}`} hover={false}>
                <div className={`inline-block h-3 w-3 rounded-full ${team.color}`} />
                <h3 className="mt-3 font-bold text-gov-navy">{team.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{team.phase}</p>
                <p className="mt-3 text-sm text-slate-600">{team.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Structure */}
      <Section title="Standard Proposal Structure" kicker="Volumes">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Volume I: Technical",
              items: ["Technical Approach", "Management Plan", "Staffing Plan", "Quality Control", "Past Performance"],
            },
            {
              title: "Volume II: Pricing",
              items: ["Price Schedule", "Cost Breakdown", "Labor Categories", "Rate Justification", "Basis of Estimate"],
            },
            {
              title: "Volume III: Administrative",
              items: ["Cover Letter", "Reps & Certs", "Insurance Certs", "Subcontracting Plan", "Required Forms"],
            },
          ].map((vol) => (
            <Card key={vol.title} className="p-6" hover={false}>
              <h3 className="font-bold text-gov-navy">{vol.title}</h3>
              <ul className="mt-4 space-y-2">
                {vol.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle size={14} className="text-gov-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Common Mistakes */}
      <section className="bg-gov-crimson/5 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-gov-crimson" />
            <h2 className="font-display text-2xl font-bold text-gov-navy">Common Mistakes</h2>
          </div>
          
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { mistake: "Non-Compliance", desc: "Missing required sections or exceeding page limits" },
              { mistake: "Generic Content", desc: "Copy-paste from other proposals without customization" },
              { mistake: "Weak Past Performance", desc: "Using irrelevant or poorly documented references" },
              { mistake: "Price Mistakes", desc: "Math errors or unrealistic pricing" },
              { mistake: "Late Submission", desc: "Missing the deadline by even one minute" },
              { mistake: "No Proofreading", desc: "Typos, inconsistent formatting, wrong names" },
            ].map((item) => (
              <Card key={item.mistake} className="p-5 border-gov-crimson/20" hover={false}>
                <h3 className="font-semibold text-gov-crimson">{item.mistake}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <Section title="Past Performance Documentation" kicker="Critical Asset">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-slate-600">
              Many RFPs require Past Performance Questionnaires (PPQs). Even if they don't, 
              you should have these on file. Send them to your top clients before you need them.
            </p>
            
            <div className="mt-6 space-y-3">
              <h3 className="font-semibold text-gov-navy">PPQ Should Include:</h3>
              <ul className="space-y-2">
                {[
                  "Contract number and value",
                  "Period of performance",
                  "Customer point of contact",
                  "Performance ratings (1-5 scale)",
                  "Narrative description",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <FileText size={14} className="text-gov-blue" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Card className="p-6 bg-gov-navy text-white" hover={false}>
            <h3 className="font-bold text-lg">Need a Red Team Review?</h3>
            <p className="mt-3 text-slate-300">
              You can't proofread your own work. Our team provides independent Red Team 
              reviews to score your proposal before you submit.
            </p>
            <a 
              href={LINKS.booking}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gov-navy transition hover:bg-slate-100"
            >
              Book a Review
              <ArrowRight size={16} />
            </a>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Need Professional Proposal Support?" kicker="Our Services" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We write proposals that win
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                From compliance matrices to final production, our team handles every step 
                of the proposal process.
              </p>
            </div>
            <LinkButton 
              href="/services/proposal-writing"
              size="lg"
              className="shrink-0"
            >
              View Proposal Services
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
