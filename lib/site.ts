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
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
] as const;

export const FOUR_PRODUCTS = [
  {
    name: "AgentGuard",
    hook: "Pre-deployment validation",
    description:
      "Validate every AI agent against SR 11-7, ECOA, and HIPAA constraints before it reaches production.",
  },
  {
    name: "Audit Trail",
    hook: "The spine",
    description:
      "Immutable, examiner-ready log of every model decision, input, and outcome. The single source of truth.",
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
      "Direct read-only access for OCC, FDA, and internal auditors. No screenshots, no email chains.",
  },
] as const;

export const FOUNDER = {
  name: "Ashish K. Saxena",
  shortBio:
    "Amazon FinTech alum · Author, The Ethics of Artificial Intelligence · IJSR reviewer · IEEE TEMSCON & ISTAS contributor",
  credentials: [
    "Amazon FinTech alum",
    "42 peer-reviewed papers",
    'Author, "The Ethics of Artificial Intelligence" (2024)',
    "IJSR reviewer",
    "IEEE TEMSCON & ISTAS contributor",
    "Best Technical Researcher of AI 2024",
  ],
} as const;

export const FEATURED_PAPERS = [
  {
    title:
      "Machine Learning and Big Data Analytics for Fraud Detection in the U.S. FinTech Industry",
    venue: "International Journal of Scientific Research",
    year: 2023,
    citations: 37,
    href: "#",
  },
  {
    title:
      "LSTM Neural Network Approach to Resource Allocation in Hospital Management Systems",
    venue: "International Journal of Scientific Research",
    year: 2023,
    citations: 18,
    href: "#",
  },
  {
    title: "Beyond Code: How TRiSM Redefines AI's Promise",
    venue: "Medium",
    year: 2024,
    citations: null,
    href: "#",
  },
] as const;
