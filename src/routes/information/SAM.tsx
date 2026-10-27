import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ExternalLink, CheckCircle, AlertCircle, ArrowRight, Clock, FileCheck, Building2, UserCheck } from "lucide-react";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { LinkButton } from "../../components/Button";
import { BRAND, LINKS } from "../../lib/constants";

const samResources = [
  { title: "SAM.gov Main Portal", url: "https://sam.gov", desc: "Official federal contractor registration" },
  { title: "CAGE Code Information", url: "https://www.sam.gov/content/pages/CAGE-CodeFAQs", desc: "Understanding CAGE codes" },
  { title: "Exclusions Database", url: "https://www.sam.gov/content/pages/Exclusions", desc: "Check debarment status" },
];

const dsbsResources = [
  { title: "Dynamic Small Business Search", url: "https://dsbs.sba.gov", desc: "SBA small business portal" },
  { title: "SBA Size Standards", url: "https://www.sba.gov/document/support--table-size-standards", desc: "Check qualification" },
  { title: "8(a) Program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program", desc: "Disadvantaged business program" },
];

export default function InformationSAM() {
  return (
    <>
      <Helmet>
        <title>SAM, DSBS & FEMA Registration — Government Contracting Information</title>        <meta name="description" content="Step-by-step SAM.gov registration guide for small businesses: UEI, CAGE code, DSBS profile, FEMA vendor registration — plus the mistakes that get registrations rejected." />
        <link rel="canonical" href={`https://${BRAND.domain}/information/sam-dsbs-fema`} />      </Helmet>

      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Information</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-gov-navy sm:text-5xl">
              SAM, DSBS & FEMA Guide
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Your complete resource for federal contractor registration. Get registered, 
              certified, and ready to win government contracts.
            </p>
          </div>
        </div>
      </section>

      {/* SAM Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-gov-navy">
                System for Award Management (SAM)
              </h2>
              <p className="mt-4 text-slate-600">
                SAM.gov is the single government-wide system for federal contract management. 
                If you're a government contractor, SAM registration is non-negotiable.
              </p>

              <div className="mt-8 space-y-4">
                <Card className="p-6" hover={false}>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-gov-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gov-navy">Why SAM Matters</h3>
                      <ul className="mt-2 space-y-1 text-sm text-slate-600">
                        <li>• Required to compete for federal contracts</li>
                        <li>• Displays your business certifications</li>
                        <li>• Enables payment processing</li>
                        <li>• 100% free to register</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-gov-gold bg-amber-50" hover={false}>
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-gov-gold shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gov-navy">Key Reminders</h3>
                      <ul className="mt-2 space-y-1 text-sm text-slate-700">
                        <li>• Renew registration annually</li>
                        <li>• Update info within 30 days of changes</li>
                        <li>• Keep UEI number accessible</li>
                        <li>• Processing takes 24-48 hours</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gov-navy mb-4">SAM Resources</h3>
              <div className="space-y-3">
                {samResources.map((r) => (
                  <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="block">
                    <Card className="p-4 hover:border-gov-blue">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gov-navy text-sm">{r.title}</div>
                          <div className="text-xs text-slate-500">{r.desc}</div>
                        </div>
                        <ExternalLink size={16} className="text-slate-400" />
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Walkthrough */}
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-blue">Step by Step</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
            The Registration Process, In Order
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Most rejections come from doing these steps out of order. Follow the sequence.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {[
              {
                step: "1",
                icon: Building2,
                title: "Entity First",
                time: "Week 1",
                desc: "Form your legal entity (LLC/Corp) and get your EIN from the IRS. SAM matches your legal business name exactly — no DBAs, no variations.",
              },
              {
                step: "2",
                icon: UserCheck,
                title: "UEI & Login.gov",
                time: "Day 1",
                desc: "Create a Login.gov account, then request your Unique Entity ID (UEI — it replaced DUNS). Validation against IRS records takes 1-2 business days.",
              },
              {
                step: "3",
                icon: FileCheck,
                title: "Complete the Record",
                time: "1-2 hours",
                desc: "Enter core data: entity info, business size & NAICS codes, banking (for payment), and point of contact. Small business assertions feed DSBS.",
              },
              {
                step: "4",
                icon: Clock,
                title: "CAGE Assignment",
                time: "2-5 days",
                desc: "The Defense Logistics Agency issues your CAGE code after review. This is where most delays and rejections happen — watch for the follow-up email.",
              },
              {
                step: "5",
                icon: CheckCircle,
                title: "Assertions & Renewal",
                time: "Ongoing",
                desc: "Add set-aside eligibility (8(a), HUBZone, etc.), keep the record updated within 30 days of changes, and renew annually — expiration kills eligibility instantly.",
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.step} className="p-5" hover={true}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gov-blue/10 text-gov-blue font-bold text-sm">
                      {s.step}
                    </div>
                    <Icon size={18} className="text-slate-300" />
                  </div>
                  <h3 className="mt-3 font-semibold text-gov-navy text-sm">{s.title}</h3>
                  <p className="mt-1 text-xs text-gov-blue font-semibold">{s.time}</p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* Common mistakes callout */}
          <Card className="mt-8 p-6 border-l-4 border-l-gov-crimson" hover={false}>
            <h3 className="font-semibold text-gov-navy flex items-center gap-2">
              <AlertCircle size={18} className="text-gov-crimson" />
              The 4 mistakes that get registrations rejected
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Legal name doesn't match IRS records exactly",
                "Using a virtual/PO box address instead of a physical one",
                "NAICS codes listed as primary that don't match your actual business",
                "Letting registration lapse — even 1 day expired blocks all bidding",
              ].map((m) => (
                <div key={m} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-gov-crimson font-bold shrink-0">✗</span>
                  {m}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* DSBS Section */}
      <Section title="DSBS & SBA Certifications" kicker="Small Business Programs">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-slate-600">
              While SAM gets you in the door, DSBS is your marketing catalog. Contracting 
              officers use DSBS to find small businesses for set-aside contracts worth 
              23%+ of federal spend.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["8(a)", "HUBZone", "SDVOSB", "WOSB"].map((cert) => (
                <div key={cert} className="rounded-lg bg-gov-blue/5 p-4 text-center">
                  <div className="font-bold text-gov-blue">{cert}</div>
                  <div className="text-xs text-slate-600">Certification</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {dsbsResources.map((r) => (
              <a key={r.url} href={r.url} target="_blank" rel="noreferrer" className="block">
                <Card className="p-4 hover:border-gov-blue">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gov-navy text-sm">{r.title}</div>
                      <div className="text-xs text-slate-500">{r.desc}</div>
                    </div>
                    <ExternalLink size={16} className="text-slate-400" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FEMA Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-gov-crimson">Emergency Contracting</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-gov-navy">
            FEMA & Disaster Contracting
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Disaster recovery moves fast. To win FEMA work (debris removal, emergency services, 
            construction), you must be registered before the disaster strikes.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { step: "1", title: "Active SAM", desc: "Ensure SAM registration is current" },
              { step: "2", title: "DHS Event Registration", desc: "Register at DHS Vendor Portal" },
              { step: "3", title: "Monitor Opportunities", desc: "Speed of response is critical" },
            ].map((item) => (
              <Card key={item.step} className="p-6" hover={false}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gov-crimson text-white font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 font-semibold text-gov-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <Section title="Want This Done Right?" kicker="Our Services" dark>
        <Card className="p-8 bg-white/5 border-white/10" hover={false}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                We handle the registration headache
              </h3>
              <p className="mt-3 text-slate-300 max-w-xl">
                One mistake can cost you a contract. Our team ensures your registrations 
                are perfect, compliant, and optimized.
              </p>
            </div>
            <LinkButton 
              href={LINKS.booking} 
              target="_blank" 
              rel="noreferrer" 
              size="lg"
              className="shrink-0"
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </Card>
      </Section>
    </>
  );
}
