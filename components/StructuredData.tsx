const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Caventia",
  legalName: "Caventia Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/api/og?title=Caventia`,
  description:
    "The vertical TRiSM platform for regulated AI agents. SR 11-7 model risk artifacts for banks, FDA 510(k)-ready governance artifacts for health systems.",
  founder: {
    "@type": "Person",
    name: "Ashish K. Saxena",
    jobTitle: "Founder & CEO",
    description:
      "Amazon FinTech alum, author of The Ethics of Artificial Intelligence, IJSR reviewer, 42 peer-reviewed papers.",
  },
  foundingDate: "2026",
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
    "The audit-trail spine for regulated AI agents. SR 11-7 for banks, FDA 510(k) for health systems.",
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
