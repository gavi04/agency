import Logo from "../Logo";
import { GitHub, LinkedIn } from "../Icons";
import { navLinks, site } from "@/content/site";

export default function Footer() {
  return (
    <footer data-nav="dark" className="glass-hero relative overflow-hidden text-white">
      {/* Same coral glow + fluted glass as the hero */}
      <div aria-hidden="true" className="aurora">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
        <span className="a4" />
      </div>
      <div aria-hidden="true" className="flutes" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#14213D]/70 to-transparent" />

      <div className="container-x relative z-10 grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo onDark={true} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {site.tagline} We automate repetitive daily chores for accounting firms, agencies, e-commerce stores and small businesses, and connect them to your accounting software and CRM.
          </p>
          {(site.linkedin || site.github) && (
          <div className="mt-6 flex gap-3">
            {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-coral hover:text-white hover:border-coral"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            )}
            {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-coral hover:text-white hover:border-coral"
            >
              <GitHub className="h-4 w-4" />
            </a>
            )}
          </div>
          )}
        </div>

        <nav aria-label="Footer Navigation">
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-coral">Contact Us</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="break-all text-white/70 transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/15 bg-[#14213D]/30 backdrop-blur-sm">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={site.privacyUrl} className="hover:text-white transition-colors">
              Privacy policy
            </a>
            <span>·</span>
            <span>Zero-Spam Confidentiality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
