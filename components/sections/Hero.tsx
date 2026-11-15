import DashboardMock from "../DashboardMock";
import { ArrowRight, Check, WhatsApp, ShieldCheck, Zap, Database, Clock } from "../Icons";
import { hero, site } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden fluted-mesh-hero blend-to-cream text-white pt-6 pb-12 sm:pb-16 lg:pt-10 lg:pb-16">
      {/* Subtle organic light reflections */}
      <div aria-hidden="true" className="aurora">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="min-w-0">
            {/* Pill Eyebrow */}
            <div style={{ "--d": "0ms" } as React.CSSProperties} className="rise inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/15 px-3 py-0.5 text-[11px] font-semibold tracking-wider text-coral">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-coral" />
              <span>{hero.eyebrow}</span>
            </div>

            {/* Main Headline (Warm cream tone, fully readable) */}
            <h1 style={{ "--d": "120ms" } as React.CSSProperties} className="rise mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-cream sm:text-4xl lg:text-[2.65rem]">
              Stop doing the same work{" "}
              <span className="text-shimmer">
                every single day.
              </span>
            </h1>

            {/* Subheading */}
            <p style={{ "--d": "240ms" } as React.CSSProperties} className="rise mt-3.5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-[15px]">
              {hero.subheading}
            </p>

            {/* Call to Actions */}
            <div style={{ "--d": "360ms" } as React.CSSProperties} className="rise mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={site.bookingUrl} className="btn-primary">
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                {hero.secondaryCta}
              </a>
            </div>

            {/* Trust points */}
            <ul style={{ "--d": "480ms" } as React.CSSProperties} className="rise mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-cream/75">
              {hero.trustPoints.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-coral" strokeWidth={2.8} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ "--d": "300ms" } as React.CSSProperties} className="rise mt-2 lg:mt-0">
            <div className="float">
              <DashboardMock />
            </div>
          </div>
        </div>

        {/* Tidewell Reference Bottom Feature Strip (compact & spacious with cream tint) */}
        <div className="mt-12 sm:mt-16 border-t border-cream/15 pt-6 sm:pt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 text-xs">
            <div className="relative pl-1">
              <span className="absolute -top-[25px] sm:-top-[33px] left-0 h-[2.5px] w-10 bg-coral rounded-full" />
              <div className="flex items-center gap-1.5 text-coral">
                <Zap className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-cream text-[11px]">Free 3-Day Trial</span>
              </div>
              <p className="mt-0.5 text-cream/65 text-[11px]">Try your custom chore free</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-coral">
                <WhatsApp className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-cream text-[11px]">Works Where You Work</span>
              </div>
              <p className="mt-0.5 text-cream/65 text-[11px]">Email, Slack, WhatsApp, Teams</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-coral">
                <Database className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-cream text-[11px]">Accounting Synced</span>
              </div>
              <p className="mt-0.5 text-cream/65 text-[11px]">QuickBooks, Xero & spreadsheets</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-coral">
                <Clock className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-cream text-[11px]">Zero Double Entry</span>
              </div>
              <p className="mt-0.5 text-cream/65 text-[11px]">Enter data once. Never twice.</p>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-coral">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-cream text-[11px]">NDA Protection</span>
              </div>
              <p className="mt-0.5 text-cream/65 text-[11px]">Signed before seeing files</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
