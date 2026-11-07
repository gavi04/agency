import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

// Fonts are self-hosted by next/font at build time
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const title = "Minus Labs | Workflow & Compliance Automation for CA Firms & Growing Businesses";
const description =
  "Done-for-you workflow automation for Chartered Accountants, corporate finance teams, and modern businesses. Automated WhatsApp document collection, statutory compliance alerts, bank/invoice OCR extraction, and real-time client dashboards.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "CA firm automation",
    "accounting workflow automation India",
    "business automation",
    "WhatsApp document collection",
    "GST TDS ITR reminder automation",
    "bank statement extraction Tally",
    "invoice OCR automation",
    "professional services automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14213D",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-bg text-fg min-h-screen antialiased selection:bg-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
