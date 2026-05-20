import { SHORT, foundingDate, CONVERSATIONAL } from "@/lib/entity";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: CONVERSATIONAL,
  legalName: SHORT,
  url: SITE_URL,
  logo: `${SITE_URL}/api/og?title=Caventia`,
  description:
    "The vertical AI governance platform banks adopt for the generative and agentic AI agents the 2026 Interagency Model Risk Management Guidance leaves to them. FDA 510(k)-ready governance artifacts for health systems.",
  founder: {
    "@type": "Person",
    name: "Ashish K. Saxena",
    jobTitle: "Founder & CEO",
    description:
      "Fifteen years shipping AI inside large institutions. Two Amazon-bestselling books on AI ethics. IEEE Senior Member and Fellow of the British Computer Society. h-index 8 with 226 citations on Google Scholar. Recognized as Best Technical Researcher of AI.",
    sameAs: [
      "https://scholar.google.com/citations?user=4x5gOa4AAAAJ&hl=en",
      "https://www.linkedin.com/in/ashish-k-saxena/",
    ],
  },
  foundingDate: foundingDate(),
  industry: "Artificial Intelligence Governance",
  sameAs: [
    // TODO: fill in when public profiles exist
    // "https://www.linkedin.com/company/caventia",
    // "https://twitter.com/caventiainc",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Caventia",
  url: SITE_URL,
  description:
    "The audit-trail spine for regulated AI agents. The framework banks adopt for the generative and agentic AI excluded from the 2026 MRM Guidance. FDA 510(k) for health systems.",
  publisher: {
    "@type": "Organization",
    name: "Caventia",
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
