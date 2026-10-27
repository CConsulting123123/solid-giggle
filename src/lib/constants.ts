export const BRAND = {
  name: "Government Contracting Information",
  shortName: "GCI",
  fullName: "Government Contracting Information",
  tagline: "Learn. Get Certified. Win Contracts.",
  phone: "(813) 665-0308",
  email: "Info@GovConInformation.com",
  location: "Tampa, FL",
  founder: "Sean Conway",
  domain: "govconinformation.com",
};

export const LINKS = {
  booking: "https://calendar.app.google/EA6JzEhbNTH6AM6S8", // replace with your Google Appointment Schedule / meeting link
  linkedin: "#",
};

export const DEFAULT_RSS_URL =
  "https://www.govconinformation.com/rss.xml";

/* ───────────────────────────────────────────── */
/*  NAVIGATION STRUCTURE                         */
/* ───────────────────────────────────────────── */

export const INFORMATION_PAGES = [
  {
    label: "SAM.gov Guide",
    to: "/information/sam-dsbs-fema",
    desc: "Register your business with the federal government",
    icon: "database",
  },
  {
    label: "Certifications",
    to: "/information/certification-data",
    desc: "8(a), HUBZone, SDVOSB, WOSB explained",
    icon: "award",
  },
  {
    label: "Finding Bids",
    to: "/information/finding-bids",
    marketplace: true,
    desc: "Where RFPs and RFQs are posted",
    icon: "search",
  },
  {
    label: "Writing Proposals",
    to: "/information/writing-proposals",
    desc: "Color teams and proposal structure",
    icon: "file",
  },
  {
    label: "Contract Vehicles",
    to: "/information/contract-vehicles",
    desc: "GSA MAS, OASIS+, SEWP and more",
    icon: "truck",
  },
  {
    label: "Search Awards",
    to: "/information/search-contracts",
    desc: "Search past federal awards",
    icon: "book",
  },
];

export const SERVICES = [
  {
    slug: "certifications",
    label: "Expedited Certifications",
    to: "/services/certifications",
    headline: "Certifications within 14 days",
    desc: "Full eligibility analysis, documentation prep, application submission and follow-through for 8(a), WOSB, SDVOSB, HUBZone and more — completed within 14 days.",
    icon: "badge",
    timeline: "14 days",
    price: "from $1,500",
    features: [
      "Eligibility analysis for every SBA program",
      "Full documentation preparation",
      "Application submission and SBA follow-up",
      "Rejection recovery at no extra cost",
    ],
  },
  {
    slug: "gsa-schedules",
    label: "GSA Schedule Services",
    to: "/services/gsa-schedules",
    headline: "GSA Schedule submitted in 30 days",
    desc: "Complete GSA Multiple Award Schedule (MAS) application — from SIN selection to eOffer submission — guaranteed within 30 days.",
    icon: "shield",
    timeline: "30 days submitted",
    price: "from $5,500",
    features: [
      "SIN selection and market pricing research",
      "Full MAS application and eOffer submission",
      "30-day submission guarantee",
      "87% historical approval rate",
    ],
  },
  {
    slug: "proposal-writing",
    label: "Proposal Writing",
    to: "/services/proposal-writing",
    headline: "Proposal Writing That Wins",
    desc: "Full proposal development using Shipley-method color team reviews — compliance matrix, win themes, technical volumes, pricing support.",
    icon: "pen",
    timeline: "2-4 weeks",
    price: "from $5,000",
    features: [
      "RFP analysis and compliance matrix",
      "Win theme development",
      "Full color-team review cycle",
      "87% historical win rate",
    ],
  },
  {
    slug: "capture-management",
    label: "Capture Management",
    to: "/services/capture-management",
    headline: "Capture Management & Pipeline Building",
    desc: "Dedicated capture manager identifying and qualifying opportunities 6-18 months before RFP release — so you bid on contracts you can actually win.",
    icon: "target",
    timeline: "Ongoing",
    price: "from $6,500",
    features: [
      "Sources Sought monitoring",
      "Opportunity qualification and win-probability scoring",
      "Agency relationship building",
      "Teaming and subcontract strategy",
    ],
  },
];

export const SERVICE_BUNDLES = [
  {
    id: "fedstart",
    name: "FedStart",
    tagline: "Get registered, certified and market-ready",
    duration: "3 months",
    price: 3200,
    popular: false,
    highlights: [
      "SAM.gov registration in 5 business days",
      "All SBA certifications submitted within 14 days",
      "DSBS and FEMA vendor portal profiles",
      "Professional capabilities statement",
      "1,000 curated federal contacts",
      "Monthly strategy calls for 3 months",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Build your pipeline and start winning bids",
    duration: "6 months",
    price: 6500,
    popular: true,
    highlights: [
      "Everything in FedStart",
      "Federal bid portal access (2,200 portals)",
      "2 targeted marketing campaigns (2,000 contacts)",
      "Unlimited RFP reviews with gold-team analysis",
      "Opportunity qualification",
      "Prime contractor targeting",
    ],
  },
  {
    id: "prime",
    name: "Prime",
    tagline: "Full-service federal partnership",
    duration: "12 months",
    price: 15500,
    popular: false,
    highlights: [
      "Everything in Growth",
      "Dedicated capture manager",
      "5 full proposal developments",
      "4 marketing campaigns",
      "Teaming agreement support",
      "Priority response — same business day",
    ],
  },
];

export const MARKET_STATS = [
  { value: "$765B+", label: "Total federal contract spending (FY2024)" },
  { value: "23%", label: "Small business set-aside goal" },
  { value: "$178B+", label: "Awarded to small businesses annually" },
  { value: "500+", label: "New contracts posted daily on SAM.gov" },
];

export const TRUST_STATS = [
  { value: "7,000+", label: "Registrations completed", icon: "clipboard" },
  { value: "$640M", label: "Largest win supported", icon: "trending" },
  { value: "87%", label: "GSA & proposal approval rate", icon: "award" },
  { value: "100%", label: "On-time submission guarantee", icon: "zap" },
];
