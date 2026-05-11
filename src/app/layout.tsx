import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const SITE_URL = "https://megathon-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MEGATHON — Europe's Biggest Launchpad",
    template: "%s · MEGATHON",
  },
  description:
    "48 hours to prove Europe builds different. June 19–21, 2026 in Amsterdam. 500+ founders, €100K+ prize pool, main-stage finals at The Hubb.",
  applicationName: "MEGATHON",
  keywords: [
    "MEGATHON",
    "hackathon",
    "Amsterdam",
    "Europe",
    "founders",
    "AI",
    "startup launchpad",
    "BYOS",
    "Bring Your Own Startup",
    "June 2026",
  ],
  authors: [{ name: "MEGATHON" }],
  creator: "MEGATHON",
  publisher: "MEGATHON",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MEGATHON — Europe's Biggest Launchpad",
    description:
      "48 hours to prove Europe builds different. June 19–21, 2026 · Amsterdam · 500+ founders · €100K+ prize pool.",
    url: SITE_URL,
    siteName: "MEGATHON",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEGATHON — Europe's Biggest Launchpad",
    description:
      "48 hours to prove Europe builds different. June 19–21, 2026 in Amsterdam.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "MEGATHON 2026",
  startDate: "2026-06-19T17:00:00+02:00",
  endDate: "2026-06-21T22:00:00+02:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  description:
    "Europe's biggest Launchpad. 48 hours to prove Europe builds different. 500+ founders, €100K+ prize pool, main-stage finals.",
  image: [`${SITE_URL}/opengraph-image`],
  url: SITE_URL,
  location: {
    "@type": "Place",
    name: "The Hubb",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amsterdam",
      addressCountry: "NL",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "MEGATHON",
    url: SITE_URL,
  },
  offers: {
    "@type": "Offer",
    name: "Pre-vetted builder entry",
    url: SITE_URL + "#join",
    availability: "https://schema.org/InStock",
    priceCurrency: "EUR",
    price: "0",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "500+ European founders",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body className="antialiased font-body">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
      </body>
    </html>
  );
}
