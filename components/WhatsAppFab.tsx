import { WhatsApp } from "./Icons";
import { whatsappUrl } from "@/content/site";

// Floating WhatsApp button (bottom-right). Number + message: content/site.ts
export default function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Minus Labs on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF54] text-white shadow-lift transition-transform duration-200 hover:scale-105 hover:bg-[#1a9a49] sm:bottom-6 sm:right-6"
    >
      <WhatsApp className="h-7 w-7" />
    </a>
  );
}
