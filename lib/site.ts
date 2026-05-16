export const SITE = {
  name: "Caventia",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com",
  tagline: "The audit-trail spine for regulated AI agents.",
  description:
    "Caventia is the vertical TRiSM platform that ships SR 11-7 model risk artifacts for banks and FDA 510(k)-ready governance artifacts for health systems.",
  contactEmail: "ashish@caventia.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? "",
} as const;

export const NAV_LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/blog", label: "Notes" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
] as const;

export const FOUR_PRODUCTS = [
  {
    name: "AgentGuard",
    hook: "Pre-deployment validation",
    description:
      "Validate every AI agent against SR 11-7, ECOA and HIPAA constraints before it reaches production.",
  },
  {
    name: "Audit Trail",
    hook: "The spine",
    description:
      "Immutable, examiner-ready log of every model decision, input and outcome. The single source of truth.",
  },
  {
    name: "Compliance Passport",
    hook: "Continuous attestation",
    description:
      "Every agent ships with a portable, signed compliance record. Pass audits in days, not quarters.",
  },
  {
    name: "Auditor Bridge",
    hook: "Examiner workflow",
    description:
      "Direct read-only access for OCC, FDA and internal auditors. No screenshots, no email chains.",
  },
] as const;

export const FOUNDER = {
  name: "Ashish K. Saxena",
  shortBio:
    "Amazon FinTech alum · Bestselling AI ethics author · IJSR peer reviewer · 226 citations on Google Scholar",
  scholarUrl:
    "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
  credentials: [
    "Amazon FinTech alum (earlier: Morgan Stanley, IT/Risk)",
    'Author, "Society and the Machine" (2024 London Book Festival first place) and "The Ethics of Artificial Intelligence" - Amazon bestsellers',
    "h-index 8 on Google Scholar; 226 citations across the literature",
    "IJSR peer reviewer (42 papers reviewed); IEEE TEMSCON ASPAC and ISTAS 2024 contributor",
    'Best Technical Researcher of AI 2024, Business Innovation Awards · Marquis Who\'s Who',
    "Fifty-plus AI professionals mentored",
  ],
} as const;

export const FEATURED_PAPERS = [
  {
    title:
      "An LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems",
    venue: "International Journal of Applied Health Care Analytics",
    year: 2022,
    citations: 29,
    href: "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
  },
  {
    title:
      "The Influence of AI: The Revolutionary Effects of Artificial Intelligence in Healthcare",
    venue: "Journal of Engineering Research and Reports",
    year: 2024,
    citations: 27,
    href: "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
  },
  {
    title:
      "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry",
    venue: "Emerging Trends in Machine Intelligence and Big Data",
    year: 2019,
    citations: 19,
    href: "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
  },
] as const;
