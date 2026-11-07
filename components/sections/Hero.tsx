import DashboardMock from "../DashboardMock";
import { ArrowRight, Check, WhatsApp, ShieldCheck, Zap, Database, Clock } from "../Icons";
import { hero, site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#14213D] text-white pt-8 pb-16 sm:pb-24 lg:pt-14 lg:pb-24">
      {/* Tidewell-style warm coral fluted glow behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-[10%] -z-0 h-[480px] w-[480px] rounded-full bg-coral/25 blur-[120px] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-[5%] -z-0 h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-[90px]"
      />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="min-w-0">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-coral">
              <span className="h-2 w-2 rounded-full bg-coral animate-ping" />
              <span>For CA Firms, Finance Teams & Growing Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
              Workflows that feel like{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-[#ff8d7e] to-[#f4ede0]">
                autopilot.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {hero.subheading}
            </p>

            {/* Call to Actions (Coral Button + Secondary Glass Button) */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <a
                href={site.bookingUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-coral px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/20 transition-all duration-200 hover:bg-coral-hover hover:scale-[1.02]"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/15 hover:border-white/30"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust points */}
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-white/70">
              {hero.trustPoints.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-coral" strokeWidth={2.6} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 lg:mt-0">
            <DashboardMock />
          </div>
        </div>

        {/* Tidewell Reference Signature Feature Strip */}
        <div className="mt-16 sm:mt-24 border-t border-white/10 pt-8 sm:pt-10">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <div className="relative pl-1">
              <span className="absolute -top-[33px] sm:-top-[41px] left-0 h-[3px] w-12 bg-coral rounded-full" />
              <div className="flex items-center gap-2 text-coral">
                <Zap className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Done-for-you</span>
              </div>
              <p className="mt-1 text-xs text-white/60">Built & deployed in 7–14 days</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-coral">
                <WhatsApp className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">WhatsApp Driven</span>
              </div>
              <p className="mt-1 text-xs text-white/60">Automated 1-click client uploads</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-coral">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Compliance Alerts</span>
              </div>
              <p className="mt-1 text-xs text-white/60">GST, TDS, ITR & advance tax</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-coral">
                <Database className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Tally & Zoho Ready</span>
              </div>
              <p className="mt-1 text-xs text-white/60">Zero manual re-typing into ERPs</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-coral">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Strict Privacy</span>
              </div>
              <p className="mt-1 text-xs text-white/60">Signed mutual NDA protection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
