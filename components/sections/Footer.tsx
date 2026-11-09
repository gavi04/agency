import Logo from "../Logo";
import { GitHub, LinkedIn } from "../Icons";
import { navLinks, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 fluted-mesh-navy text-white">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo onDark={true} />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {site.tagline} We automate repetitive daily chores for CA firms, service businesses, traders, and factories, and connect them directly to your accounting software.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-coral hover:text-white hover:border-coral"
            >
              <LinkedIn className="h-4 w-4" />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-coral hover:text-white hover:border-coral"
            >
              <GitHub className="h-4 w-4" />
            </a>
          </div>
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
            <li>
              <a href={site.phoneHref} className="text-white/70 transition-colors hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/25">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Minus Zero. All rights reserved.</p>
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
