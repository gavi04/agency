"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Menu, X, ArrowRight } from "./Icons";
import { navLinks, site } from "@/content/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
          ? "bg-[#14213D]/95 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-[#14213D] border-b border-white/5"
      }`}
    >
      <nav
        className="container-x flex h-[72px] items-center justify-between gap-4"
        aria-label="Main"
      >
        <a
          href="#top"
          className="rounded-lg focus:outline-none focus:ring-2 focus:ring-coral/40"
          aria-label="Minus Labs, back to top"
        >
          <Logo onDark={true} />
        </a>

        {/* Desktop pill navigation (Tidewell inspired) */}
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.07] border border-white/10 px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-[14px] font-medium text-white/80 transition-colors hover:text-white hover:bg-white/10"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.bookingUrl}
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-coral-hover hover:shadow-md"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/15 md:hidden"
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
        className="border-t border-white/10 bg-[#14213D] px-4 py-4 md:hidden"
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
              <span>Book a Free Call</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
