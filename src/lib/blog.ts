import type { BlogPost } from "./types";

/* ─────────────────────────────────────────────────────────────
   BLOG POSTS
   To publish a new post: add an entry to this array. It will
   automatically appear on the /blog page, the /rss.xml feed,
   and be picked up by the site RSS reader.
   ───────────────────────────────────────────────────────────── */

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sam-registration-2026-guide",
    title: "SAM.gov Registration in 2026: The Complete Small Business Guide",
    excerpt:
      "Entity validation, UEI numbers, CAGE codes and annual renewals — everything a small business needs to register on SAM.gov the right way the first time.",
    date: "2026-10-20",
    category: "Getting Started",
    tags: ["SAM.gov", "Registration", "UEI"],
    readTime: "8 min read",
    featured: true,
    body: [
      "SAM.gov registration is the single non-negotiable first step for every federal contractor. Without an active registration, you cannot bid on contracts, receive payments, or even be found by contracting officers. And yet thousands of small businesses have incomplete or stale registrations that quietly disqualify them every day.",
      "**What you actually need before you start**\n\nBefore touching SAM.gov, have these ready: your legal business name exactly as it appears on your formation documents, your Tax Identification Number (TIN) / EIN, your bank account and routing number for Electronic Funds Transfer (EFT), and the address of every business location. Mismatches between SAM.gov and IRS records are the #1 cause of entity validation failures.",
      "**Entity validation and your UEI**\n\nThe Unique Entity Identifier (UEI) replaced the old DUNS number in 2022. It is assigned automatically during entity validation — the process where SAM.gov confirms you are who you say you are. Validation is done through documentation matches against IRS records, and for US-based entities typically takes 24-48 hours. If your documentation does not match IRS records exactly — a comma out of place in your legal name, a DBA listed where a legal name belongs — validation will bounce repeatedly.",
      "**The CAGE code**\n\nOnce your entity validates, the Defense Logistics Agency assigns your Commercial and Government Entity (CAGE) code. This five-character identifier is used across federal systems, particularly DoD contracts. You do not apply for a CAGE code separately — it flows automatically from a completed SAM registration.",
      "**NAICS codes matter more than you think**\n\nYour primary NAICS code determines your size standard — whether you qualify as a small business for a given contract. Registering with the wrong NAICS codes means you will never see the set-aside opportunities you actually qualify for. Pick one primary NAICS that genuinely reflects your core revenue-generating activity, plus additional codes for secondary work. You can look up size standards on the SBA size standards tool by NAICS code.",
      "**Annual renewal — the silent killer**\n\nSAM registrations expire every 365 days. When yours lapses, you become invisible: you are removed from search results, you cannot be awarded contracts, and pending payments can be frozen. Renewal takes the same effort as initial registration, so calendar it 60 days early. There is no fee to register or renew — SAM.gov is always free. Anyone who charges you a mandatory registration fee is selling you something the government gives away.",
      "**Common mistakes that stall registrations**\n\nUsing a business name that does not exactly match IRS records. Listing a personal address where the registered business address should be. Failing to complete the representations and certifications section, which leaves your entity technically incomplete. Choosing NAICS codes based on what sounds lucrative instead of what you actually do. Skipping the SBA profile and DSBS integration, which makes you invisible to small business set-aside searches.",
      "**Where to get free help**\n\nEvery US state has a free Procurement Technical Assistance Center (PTAC) — now called APEX Accelerators — staffed by people whose entire job is helping you register correctly. The SBA also maintains free resources, and FSD (Federal Service Desk) handles technical SAM.gov issues. Registration is a paperwork exercise, not a mystery — but doing it right the first time saves weeks of back-and-forth.",
    ],
  },
  {
    slug: "8a-vs-hubzone-vs-sdvosb",
    title: "8(a) vs HUBZone vs SDVOSB vs WOSB: Which Certification Should Your Small Business Pursue?",
    excerpt:
      "Each SBA certification unlocks a different slice of set-aside spending. Here is how to match your ownership profile and location to the highest-value certification.",
    date: "2026-10-13",
    category: "Certifications",
    tags: ["8(a)", "HUBZone", "SDVOSB", "WOSB"],
    readTime: "10 min read",
    featured: true,
    body: [
      "SBA certifications are not trophies — they are market access. Each certification unlocks a specific category of set-aside contracts, and federal agencies are graded on meeting those set-aside goals. The right certification for you depends on ownership, geography, and economics. Here is the honest breakdown.",
      "**8(a) Business Development Program**\n\nThe 8(a) program targets socially and economically disadvantaged business owners. Beyond set-asides, it offers a nine-year developmental term, sole-source contract awards up to $4.5M (services) or $7M (manufacturing), and a structured mentoring program (MPP) that lets you joint-venture with large primes. Eligibility requires demonstrating social disadvantage and economic disadvantage — a personal net worth under $850K (excluding home and business equity), adjusted gross income under $400K averaged over three years, and total assets under $4M. This is the most administratively demanding certification, but sole-source awards make it the most valuable for companies that qualify.",
      "**HUBZone**\n\nHUBZone requires your principal office to be in a historically underutilized business zone and at least 35% of your employees to live in a HUBZone. The benefit is enormous: agencies have a hard 3% HUBZone goal — they are graded on it — so contracting officers actively seek HUBZone firms. HUBZone set-asides often have thinner competition than 8(a) because fewer firms maintain the 35% employee residency requirement. If your business is physically located in a qualifying census tract, this can be the fastest route to awards.",
      "**SDVOSB (Service-Disabled Veteran-Owned Small Business)**\n\nRequires that a service-disabled veteran own 51% and control the company. The government has a 3% SDVOSB goal, and the VA in particular runs the Vets First program, which mandates SDVOSB set-asides for VA contracts. Certification is now handled through the SBA Veteran Small Business Certification program (formerly the VA's VIP program) — one certification covers all agencies.",
      "**WOSB / EDWOSB (Women-Owned Small Business)**\n\nRequires 51% ownership and control by one or more women (EDWOSB adds the same economic disadvantage thresholds as 8(a)). The government-wide goal is 5%, and agencies run both set-asides and sole-source awards in NAICS codes where women are underrepresented. Certification is free through SBA directly — you do not need a third-party certifier.",
      "**Which one should you pursue first?**\n\nPursue every certification you are eligible for — they stack. A veteran-owned woman-run firm in a HUBZone with qualifying economics should hold three or four certifications simultaneously. But if you must sequence, rank by market value for your profile: 8(a) if you meet the economics, HUBZone if you meet the geography, SDVOSB if you are a veteran, WOSB if you have the ownership. The certification you can hold and maintain — not the most prestigious one — is the one worth pursuing.",
      "**The certification timeline reality**\n\nSBA certification review takes 3-6 weeks after submission of a complete application. The bottleneck is rarely SBA processing — it is assembling documentation: tax returns, personal financial statements, narrative statements, ownership proof. A complete, well-organized application submitted the first time is the single biggest factor in how fast you get certified.",
    ],
  },
  {
    slug: "gsa-schedule-worth-it",
    title: "Is a GSA Schedule Worth It for a Small Business? An Honest Analysis",
    excerpt:
      "A GSA Schedule is a $50B+ buying channel — but it is also a multi-month commitment with real costs. Here's the math on when it pays off and when it doesn't.",
    date: "2026-10-06",
    category: "GSA Schedules",
    tags: ["GSA", "MAS", "Contract Vehicles"],
    readTime: "9 min read",
    featured: true,
    body: [
      "The GSA Multiple Award Schedule (MAS) is the federal government's largest commercial buying program — over $50B flows through it annually. But a GSA Schedule is not a contract with guaranteed revenue. It is a pre-negotiated price list that makes it easy for agencies to buy from you. Whether that is worth the investment depends entirely on whether your buyers are already shopping there.",
      "**What a Schedule actually gets you**\n\nOnce awarded, you appear in GSA eBuy — where contracting officers send RFQs to scheduled contractors — and in GSA Advantage, the catalog agencies browse. Agencies can buy up to the micro-purchase threshold ($10K) with a credit card and no competition, and the simpler RFQ process often means agencies can order in days instead of months. A Schedule also signals pre-vetted credibility; you have already survived a federal review of your pricing and business practices.",
      "**The real costs**\n\nThe application itself demands: two years of corporate tax returns or audited financials, commercial price lists or invoices, past performance narratives, and a pricing proposal with your Most Favored Customer discount disclosed. Expect 80-120 hours of document preparation for a first application. If you hire help, budget $5,500-$9,000. Then there is the ongoing obligation: you must report sales quarterly, pay the Industrial Funding Fee (0.75% of sales — 1% after October 2026), maintain your catalog, and keep pricing competitive for 20 years.",
      "**When a Schedule clearly pays off**\n\nYour product or service is commonly bought via GSA (IT, office supplies, professional services, security, medical). Your target agencies buy through MAS heavily — check their forecast on the GSA Interact site. You have commercial sales history to support pricing. You are willing to work the channel: GSA eBuy RFQs, GSA Global Supply, and agency buyers do not come to you — you have to monitor and respond.",
      "**When it does not**\n\nYour buyers are program offices that run full and open competition anyway. Your services are highly customized — not catalog-priced. You cannot offer commercially-sensible GSA pricing (the MFC disclosure makes aggressive discounting visible to every agency). You are not prepared to maintain the contract administratively for two decades.",
      "**The honest math**\n\nIf your addressable GSA market is $2M+ per year and your buyers shop the Schedule, the investment pays back within the first award or two. If you are pursuing it because a consultant said \"every contractor needs one,\" slow down. Do the market research first: search GSA eBuy and the GSA MAS requirements overview for your SIN, and check what agencies bought from your competitors on USASpending.gov last year.",
      "**Time and process**\n\nA complete, well-prepared MAS offer takes 30 days to assemble and submit; GSA review then takes 4-9 months including clarifications and negotiations. The 30-day clock only starts when you submit a compliant offer — which is why professional preparation focuses on getting it right the first time rather than getting it in fast and bouncing it.",
    ],
  },
  {
    slug: "sources-sought-respond",
    title: "Sources Sought Responses: How to Shape a Contract Before It Exists",
    excerpt:
      "The Sources Sought notice is your earliest — and cheapest — chance to influence a solicitation. Most small businesses ignore it. Here's how to write a response that moves the needle.",
    date: "2026-09-29",
    category: "Capture Management",
    tags: ["Sources Sought", "RFP", "Market Research"],
    readTime: "7 min read",
    body: [
      "A Sources Sought (SS) notice is the government's market research. Before writing a solicitation, the contracting officer publishes a request for information asking vendors what they can do, at what scale, and for what price. Your response does two things: it can influence the requirements toward your capabilities, and — critically for small businesses — your response is how a contract gets set aside. If a contracting officer receives no small business responses, they document that small businesses cannot do the work, and the contract goes full and open.",
      "**What a good SS response contains**\n\nCage code and UEI. Your size status relative to the NAICS code. Capability narratives that directly mirror the requirements in the notice — the same words, the same scope, the same technical domains. Past performance examples with contract numbers, dollar values, and agency clients. A short, honest statement of your capacity — not a sales pitch.",
      "**The strategic move most vendors miss**\n\nSS responses are your input window. If a requirement calls for capabilities you have but describes them in a way that would exclude you, say so. If the scope would only be performable by a large business, propose how it could be structured for a small business set-aside — a phased approach, a partial scope, a teaming arrangement. Contracting officers want to set work aside — it is easier for them — but they need documented evidence that small businesses can perform it.",
      "**Length and format**\n\nTwo pages. Follow the notice's instructions exactly — if they ask for a specific format, use it. Respond to the specific questions asked. Do not attach marketing collateral. The government uses your response to write requirements; make it easy to lift your language into the solicitation.",
      "**After you respond**\n\nThe contracting officer may follow up with an RFI, a draft RFP, or an industry day. Watch SAM.gov for the follow-on notice. SS responses also signal you to the agency's small business specialist — a person whose job is to find firms like yours for this contract and future ones. Responding well to SS notices is the highest-ROI capture activity a small business can do, and it costs only staff time.",
    ],
  },
  {
    slug: "proposal-compliance-matrix",
    title: "The Proposal Compliance Matrix: The Document That Prevents Auto-Elimination",
    excerpt:
      "Before you write a word of your proposal, build a compliance matrix. This one document is the difference between a scored proposal and a rejected one.",
    date: "2026-09-22",
    category: "Proposals",
    tags: ["Proposals", "Compliance", "RFP"],
    readTime: "6 min read",
    body: [
      "Government proposals are not scored on writing quality first. They are screened for compliance first. A proposal that misses a mandatory submission format, omits a required form, or fails to address a stated requirement can be eliminated before an evaluator ever reads your technical approach. The compliance matrix is how you guarantee that never happens.",
      "**How to build one**\n\nCreate a spreadsheet. Column one: every requirement in the RFP — every \"shall\", \"must\", \"will\" — with its section reference. Column two: where in your proposal you address it (section, page). Column three: who owns writing it. Column four: status. Read the RFP front-to-back, then read it again against the matrix. Sections L and M of the RFP are your ground truth: Section L tells you what to submit and in what format; Section M tells you how you will be evaluated.",
      "**Section L is not optional reading**\n\nSection L contains your submission instructions: page limits, font sizes, volume structure, file formats, deadline, submission portal. Proposals get rejected for 12-point font in a 10-point requirement, for exceeding page counts, for submitting PDF where the portal requires a different format. Build a pre-submission checklist directly from Section L and verify every line before you submit.",
      "**Section M tells you where the points are**\n\nSection M lists the evaluation criteria and their weights. Your proposal should spend effort where points are concentrated. If technical approach is 40% and past performance 25%, do not spend 60% of your pages on corporate history. Mirror the evaluation language — if the criterion says \"demonstrated experience with migration programs,\" your section headings should use those exact words.",
      "**The matrix during reviews**\n\nUse the compliance matrix as your color team review artifact. Pink team checks that every requirement is addressed in draft. Red team verifies responsiveness — that each response actually answers the requirement, not just gestures at it. Gold team does final verification against the matrix before production. A proposal that passes a matrix check is compliant; one that passes a matrix check and tells a persuasive story wins.",
    ],
  },
  {
    slug: "naics-code-selection",
    title: "NAICS Code Selection: The Quiet Decision That Determines Your Entire Federal Market",
    excerpt:
      "Your NAICS codes decide which size standard applies to you, which set-asides you qualify for, and which opportunities you ever see. Here's how to choose well.",
    date: "2026-09-15",
    category: "Getting Started",
    tags: ["NAICS", "Size Standards", "Set-Asides"],
    readTime: "6 min read",
    body: [
      "Every federal solicitation is issued under one or more NAICS codes. The NAICS code determines the size standard — the revenue or employee threshold that decides whether your company counts as \"small\" for that contract. Register with the wrong NAICS and you will never appear in the searches contracting officers run to find small business sources.",
      "**Primary vs secondary codes**\n\nYour SAM registration has a primary NAICS code — your principal line of business — and additional codes for secondary activities. Contracting officers search by NAICS when looking for set-aside candidates. If you do IT services but registered your primary as management consulting, you miss IT set-asides and appear in the wrong searches. Your primary NAICS should reflect where your revenue actually comes from, and your secondary codes should cover the full range of what you sell.",
      "**Size standards are per-NAICS, not per-company**\n\nYou are not \"a small business\" in general — you are small relative to a specific NAICS code. A 150-person IT firm is small under the 541512 size standard but large under most manufacturing codes. When you self-certify on a bid, you certify against the NAICS in the solicitation, not your primary code. This is why having multiple relevant codes registered expands your addressable market.",
      "**How to find your codes**\n\nSearch the Census NAICS directory by keyword for what you actually do — not what you aspire to do. Then check the SBA size standards table for each candidate code. If your primary code has a size standard you exceed, consider whether an adjacent code that genuinely describes your work has a more favorable standard. Do not pick codes dishonestly — misrepresentation has real penalties — but do pick the code that most accurately describes your dominant revenue activity.",
      "**Six months in, re-check**\n\nAs your revenue mix shifts, your optimal NAICS registration shifts. Make NAICS review part of your annual SAM renewal. Also watch for solicitation NAICS codes that describe your work but are not in your registration — agencies sometimes use unexpected codes, and you can self-represent size status for a code not in your SAM profile as long as you genuinely qualify under it.",
    ],
  },
  {
    slug: "capability-statement-that-works",
    title: "The Capability Statement That Actually Gets Responses",
    excerpt:
      "Most capability statements are brochures. Contracting officers need a one-page decision document. Here is the structure that gets you on their vendor lists.",
    date: "2026-09-08",
    category: "Marketing",
    tags: ["Capability Statement", "Marketing", "Small Business"],
    readTime: "5 min read",
    body: [
      "A capability statement is not marketing collateral — it is the document a contracting officer uses to decide whether to add you to their vendor source list. They spend 30 seconds on it. Structure yours for that 30 seconds.",
      "**The required blocks**\n\nHeader with your legal name, UEI, CAGE code, phone, email, and website. Core competencies — 3-5 bullet phrases of what you do, in the same language the government uses to describe the work. Past performance — 3-5 contracts with agency, scope, dollar value, and contact. Certifications — every set-aside you hold, prominently displayed. Company data — size status, NAICS codes, locations, bond rating if applicable.",
      "**What kills capability statements**\n\nMission statements. Stock photography. \"We are a premier provider of...\" — no evaluator has ever awarded a contract to a premier provider of anything. Anything over one page. Missing UEI and CAGE — the officer cannot add you to a source list without them.",
      "**The language rule**\n\nIf a solicitation says \"logistics support services\" and your statement says \"supply chain optimization,\" you will not come up in their search. Mirror the vocabulary of your target agencies. Check how requirements are phrased in recent solicitations in your NAICS and use those exact phrases in your competencies.",
      "**Distribution**\n\nBring printed copies to outreach events and reverse industry days. Attach it to every Sources Sought response. Email it to small business specialists at your target agencies — that is literally their job. Post a current PDF on your website. Update it every time you win a contract — past performance blocks grow stale the moment you land new work.",
    ],
  },
  {
    slug: "teaming-agreements-primer",
    title: "Teaming Agreements for Small Businesses: How to Bid on Contracts You Can't Win Alone",
    excerpt:
      "Teaming lets a small business combine capabilities with a larger partner to bid work neither could win alone. Here's how the structures work and what to watch for.",
    date: "2026-09-01",
    category: "Capture Management",
    tags: ["Teaming", "Subcontracting", "Partnerships"],
    readTime: "8 min read",
    body: [
      "Many federal contracts are simply too large for one small business to perform alone. Teaming agreements let you combine capabilities with partners to bid work you could not win independently — while preserving the small business set-aside protections the government intends you to have.",
      "**The three structures**\n\nPrime-subcontracting: the large partner primes and you subcontract. Simplest arrangement, but the prime holds the contract and the customer relationship. Joint venture: you and a partner form a new legal entity that bids as prime. Under the SBA's joint venture rules, a small business can joint-venture with a large business on set-aside contracts and the venture itself qualifies as small — if the small business manages it and performs a defined share of the work. Mentor-protégé joint venture: an SBA-approved mentor-protégé relationship allows a joint venture that qualifies for small business set-asides with a large mentor, with relaxed affiliation rules.",
      "**What the agreement must cover**\n\nScope of the teaming — which solicitations it covers. Work split — who performs what, with percentages. The exclusion clause — whether either party can pursue the contract outside the team, and under what conditions. Proposal responsibilities — who writes what volumes and who pays proposal costs. Profit split and payment terms. Teaming agreements are typically non-binding on the obligation to bid but binding on the terms if you do bid — so negotiate the exclusion clause carefully before you share your pricing and capabilities.",
      "**Mentor-protégé programs**\n\nThe SBA's All Small Mentor-Protégé Program lets a large business mentor your small business, and the relationship allows you to joint venture for set-aside contracts the venture could not otherwise qualify for. It requires a written agreement, SBA approval, and genuine developmental assistance from the mentor. Do not treat it as a loophole — SBA reviews these for real mentorship, and sham arrangements get voided with penalties.",
      "**Practical advice for first-time teamers**\n\nGet the teaming agreement signed before you exchange pricing or win themes. Define the work split in percentages tied to labor categories, not vague promises. Agree who is the contract administrator. Clarify how past performance of the venture is reported in CPARS — you want your firm named on the evaluation. Teaming expands your addressable market overnight, but only with agreements that would survive a disagreement.",
    ],
  },
  {
    slug: "federal-budget-cycle-bidding",
    title: "The Federal Budget Cycle: When Contracts Actually Get Awarded",
    excerpt:
      "Federal buying has a rhythm driven by the fiscal year. Knowing when money gets appropriated, obligated and expires tells you when to be ready.",
    date: "2026-08-25",
    category: "Getting Started",
    tags: ["Budget", "Fiscal Year", "Forecasting"],
    readTime: "7 min read",
    body: [
      "Federal contracting follows the fiscal year, not the calendar year. The government's fiscal year (FY) runs October 1 to September 30. Money is appropriated by Congress, allocated to agencies, and agencies must obligate most of it before September 30 — or lose it. This creates a predictable annual rhythm you can plan capture around.",
      "**Q1 (Oct-Dec): The slow ramp**\n\nAppropriations often arrive late — continuing resolutions frequently fund the government at flat prior-year levels into November or December. New programs ramp slowly. Use this quarter for market research, agency relationship building, and proposal infrastructure — not active bidding.",
      "**Q2 (Jan-Mar): Steady state**\n\nFull-year budgets (when passed) reach agencies. Requirements defined in Q1 become RFPs. This is the core proposal season for the following year's work.",
      "**Q3 (Apr-Jun): Full speed**\n\nPeak competition season. The largest share of RFPs for major programs drop here. Bid pipeline should be full and proposal capacity committed.",
      "**Q4 (Jul-Sep): The sprint**\n\nAgencies rush to obligate remaining funds before September 30. This is when you see a flood of RFQs, modifications, and task orders — and when responsiveness matters more than perfection. If you can turn quotes around in 24-48 hours, Q4 is your best hunting ground.",
      "**What this means for your strategy**\n\nBuild your pipeline 6-18 months out using agency forecasts (every major agency publishes one), SAM.gov Saved Search alerts, and the SBA's Dynamic Small Business Search. Track expiring contracts in your NAICS — every contract that expires is a re-compete opportunity two quarters out. Align your certifications, registrations and pricing so that you are ready to bid when the wave arrives — not scrambling when it does.",
    ],
  },
  {
    slug: "set-aside-types-explained",
    title: "Set-Asides, Simplified: How Small Businesses Get a Head Start on Federal Contracts",
    excerpt:
      "Total small business set-asides, partial set-asides, 8(a) sole-source, HUBZone, SDVOSB, WOSB — what each means and how to know which ones you qualify for.",
    date: "2026-08-18",
    category: "Certifications",
    tags: ["Set-Asides", "Small Business", "SBA"],
    readTime: "7 min read",
    body: [
      "The federal government has a statutory goal of awarding 23% of prime contract dollars to small businesses. To hit it, agencies can restrict competition on specific contracts to small businesses — that restriction is a set-aside. Set-asides are why a small company can win federal work without competing against Fortune 500 primes. Understanding the categories tells you which ones you can bid.",
      "**Total small business set-aside**\n\nThe most common category. When the contracting officer believes two or more small businesses can perform the work at fair market pricing, they set the entire contract aside for small businesses only. You self-certify size status against the solicitation's NAICS code when you bid.",
      "**Partial set-aside**\n\nOnly part of the contract is reserved for small businesses; the rest is full and open. You can bid on the set-aside portion or the full and open portion (if you are willing to compete against everyone).",
      "**8(a) set-aside and sole-source**\n\nReserved for 8(a)-certified firms. Contracting officers can award sole-source to an 8(a) firm up to $4.5M for services or $7M for manufacturing — no competition at all, as long as the firm is capable and the price is fair. This is why 8(a) is the most valuable certification for firms that qualify.",
      "**HUBZone set-aside**\n\nAgencies have a hard 3% HUBZone goal. If a contracting officer expects only one HUBZone firm to respond, they can award to a single HUBZone firm directly. Competition within HUBZone set-asides is typically thinner than total small business set-asides because there are fewer HUBZone-certified firms.",
      "**SDVOSB and WOSB set-asides**\n\nBoth carry goals (3% and 5% respectively) and can be awarded as set-asides or sole-source in qualifying circumstances. The VA has additional Vets First authority that mandates SDVOSB set-asides for VA contracts where possible.",
      "**Which ones can you bid on?**\n\nEvery set-aside requires: active SAM registration, size status under the solicitation's NAICS, and (for category-specific set-asides) the matching certification. You can hold multiple certifications simultaneously. If you are eligible for any category set-aside, get certified — your competition pool in that category is a fraction of full and open.",
    ],
  },
];

export const BLOG_CATEGORIES = [
  "Getting Started",
  "Certifications",
  "GSA Schedules",
  "Proposals",
  "Capture Management",
  "Marketing",
];

export function postsByCategory(category?: string): BlogPost[] {
  if (!category) return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}