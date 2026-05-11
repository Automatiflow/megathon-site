import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEGATHON — Europe's Biggest Launchpad",
  description:
    "48 hours to prove Europe builds different. June 19–21, 2026 in Amsterdam. 500+ founders, €100K+ prize pool, main-stage finals.",
  openGraph: {
    title: "MEGATHON — Europe's Biggest Launchpad",
    description:
      "48 hours to prove Europe builds different. June 19–21, 2026 in Amsterdam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
