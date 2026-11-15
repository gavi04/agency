"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight } from "./Icons";
import { navLinks, site } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // true when a dark section (hero, proof, footer) sits under the bar
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const probe = 31; // middle of the 62px bar
      const darkUnder = Array.from(document.querySelectorAll<HTMLElement>("[data-nav='dark']")).some((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= probe && r.bottom > probe;
      });
      setDark(darkUnder);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? `glass-nav ${dark ? "border-b border-cream/15" : "border-b border-navy/10"}`
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className="container-x flex h-[62px] items-center justify-between gap-4"
        aria-label="Main"
      >
        <a
          href="#top"
          className="rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/40"
          aria-label={`${site.name}, back to top`}
        >
          <Logo onDark={dark} />
        </a>

        {/* Desktop pill navigation (Tidewell inspired with cream tint) */}
        <div
          className={`hidden md:flex items-center gap-1 rounded-full border px-2.5 py-1 backdrop-blur-sm transition-colors duration-300 ${
            dark ? "bg-cream/[0.08] border-cream/15" : "bg-white/40 border-navy/10"
          }`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                dark ? "text-cream/80 hover:text-cream hover:bg-cream/10" : "text-navy/75 hover:text-navy hover:bg-navy/5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-coral px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-coral-hover hover:scale-[1.01]"
          >
            <span>Start free trial</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl md:hidden ${
              dark ? "bg-white/10 text-white hover:bg-white/15" : "bg-navy/5 text-navy hover:bg-navy/10"
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="glass-nav border-t border-white/10 bg-[#14213D]/85 px-4 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/90 hover:bg-white/10"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={site.bookingUrl}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-coral py-3 text-[15px] font-semibold text-white hover:bg-coral-hover"
            >
              <span>Start free trial</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
