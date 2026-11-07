import type { Metadata } from "next";
import Logo from "@/components/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Minus Labs",
  robots: { index: false },
};

// EDIT: PLACEHOLDER — replace with your real privacy policy before launch.
export default function Privacy() {
  return (
    <main className="container-x max-w-3xl py-16">
      <a href="/" aria-label="Minus Labs home">
        <Logo />
      </a>
      <h1 className="mt-10 text-3xl font-bold">Privacy policy</h1>
      <p className="mt-4 inline-block rounded-full border border-dashed border-coral/60 bg-coral/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
        Placeholder
      </p>
      <p className="mt-6 leading-relaxed text-muted">
        This page is a placeholder. Add your privacy policy here, covering what data the contact form collects, how it
        is used and stored, and how people can ask for it to be deleted. Questions in the meantime:{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-accent underline">
          {site.email}
        </a>
        .
      </p>
    </main>
  );
}
