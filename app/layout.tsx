import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, JetBrains_Mono, Caveat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://caventia.com";
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "AI Agent Governance for the Models Regulators Excluded - Caventia",
    template: "%s - Caventia",
  },
  description:
    "The audit-trail spine banks adopt for the generative and agentic AI agents the 2026 Interagency Model Risk Management Guidance leaves to them. FDA 510(k)-ready governance for health systems. Examiner-defensible. Cryptographically verifiable.",
  keywords: [
    "AI audit trail",
    "AI agent audit trail",
    "AI agent governance",
    "generative AI governance banks",
    "agentic AI governance banks",
    "2026 model risk management guidance",
    "FDA 510(k) AI audit",
    "AI examiner defensible",
    "regulated AI agents",
    "AI governance",
    "tamper-evident AI logs",
    "model risk management AI",
  ],
  openGraph: {
    title:
      "AI Agent Governance for the Models Regulators Excluded - Caventia",
    description:
      "Federal regulators excluded generative and agentic AI from model risk management. They didn't excuse banks from governing them. Caventia is the framework banks adopt. FDA 510(k)-ready for health systems.",
    siteName: "Caventia",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/api/og?title=AI+Agent+Governance+for+the+Models+Regulators+Excluded&desc=The+audit-trail+spine+banks+adopt+for+generative+and+agentic+AI.+FDA+510(k)+for+health+systems.",
        width: 1200,
        height: 630,
        alt: "Caventia - AI agent governance for the models regulators excluded",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AI Agent Governance for the Models Regulators Excluded - Caventia",
    description:
      "Banks now own AI agent governance. Caventia is the framework they adopt. FDA 510(k)-ready for health systems. Examiner-defensible.",
    images: [
      "/api/og?title=AI+Agent+Governance+for+the+Models+Regulators+Excluded&desc=The+audit-trail+spine+banks+adopt+for+generative+and+agentic+AI.+FDA+510(k)+for+health+systems.",
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4ED" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1116" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <head>
        <StructuredData />
        {PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
