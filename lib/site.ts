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
  { href: "/design-partners", label: "Design Partners" },
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
    "Fifteen years shipping AI inside large institutions. Two Amazon-bestselling books on AI ethics. IEEE Senior Member. BCS Fellow. h-index 8 with 226 Google Scholar citations.",
  scholarUrl:
    "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
  credentials: [
    "Amazon FinTech alum: led Project Vault ($250B payment platform), Project Orion (billions of events/day) and the Intercompany Engine (1,450 global entities). Earlier: Morgan Stanley IT/Risk",
    'Author, "Society and the Machine" (first place, London Book Festival) and "The Ethics of Artificial Intelligence" - Amazon bestsellers in the US and UK',
    "IEEE Senior Member (top 10% of 400,000 members) and Fellow of the British Computer Society",
    "h-index 8 on Google Scholar; 226 citations across fraud detection, healthcare AI, AI policy and machine learning",
    "Published in Q2 and Q3 SCOPUS-indexed journals, including Intellectual Economics (Q2); IEEE TEMSCON ASPAC and ISTAS contributor",
    "Editorial review board for an international CS journal; peer reviewer with 42 papers reviewed",
    "Best Technical Researcher of AI, Marquis Who's Who",
    "Judge: ASJA Writing Awards, Stratus Cloud Computing Awards, Sustainability Awards",
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
