import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const title = "Minus Zero | Stop Doing the Same Work Every Single Day";
const description =
  "Whether you run a CA firm, a service business, a shop or a factory, Minus Zero automates your repetitive daily chores and connects them to your accounting software. Enter data once. Never twice.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  keywords: [
    "Minus Zero automation",
    "CA firm automation",
    "business automation India",
    "repetitive chores automation",
    "Tally accounting sync",
    "WhatsApp document collection",
    "billing stock automation",
    "service business workflow",
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
