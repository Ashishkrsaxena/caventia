import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, JetBrains_Mono, Caveat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
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
    default: "Caventia — The audit-trail spine for regulated AI agents",
    template: "%s · Caventia",
  },
  description:
    "Caventia is the vertical TRiSM platform that ships SR 11-7 model risk artifacts for banks and FDA 510(k)-ready governance artifacts for health systems.",
  openGraph: {
    title: "Caventia — The audit-trail spine for regulated AI agents",
    description:
      "Vertical AI governance for regulated industries. SR 11-7 for banks, FDA 510(k) for health systems.",
    siteName: "Caventia",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/api/og?title=Caventia&desc=The+audit-trail+spine+for+regulated+AI+agents",
        width: 1200,
        height: 630,
        alt: "Caventia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caventia — The audit-trail spine for regulated AI agents",
    description:
      "Vertical AI governance for regulated industries. SR 11-7 for banks, FDA 510(k) for health systems.",
    images: ["/api/og?title=Caventia&desc=The+audit-trail+spine+for+regulated+AI+agents"],
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
      </body>
    </html>
  );
}
