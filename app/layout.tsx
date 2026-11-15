import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

const title = "Minus Zero | Business Process Automation Agency for Small Businesses";
const description =
  "Custom workflow automation for accounting firms, agencies, e-commerce and small businesses in the US, UK, Europe, Canada & Australia. QuickBooks, Xero, HubSpot & AI integrations. Free 3-day trial.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "business process automation agency",
    "workflow automation services",
    "automation agency for small business",
    "bookkeeping automation",
    "accounting firm automation",
    "QuickBooks automation",
    "Xero integration services",
    "Zapier expert",
    "Make.com automation agency",
    "n8n automation",
    "AI automation agency",
    "CRM automation",
    "automation agency Europe",
    "GDPR compliant automation",
    "Exact Online automation",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_US",
    alternateLocale: ["en_GB", "en_IE", "en_CA", "en_AU"],
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="bg-bg text-fg min-h-screen antialiased selection:bg-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
