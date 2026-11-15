import DashboardMock from "../DashboardMock";
import { ArrowRight, WhatsApp, ShieldCheck, Zap, Database, Clock } from "../Icons";
import { hero, site } from "@/content/site";

const strip = [
  { icon: Zap, title: "Free 3-day trial", body: "on your real workflow" },
  { icon: WhatsApp, title: "Works where you work", body: "email, Slack, Teams, WhatsApp" },
  { icon: Database, title: "Synced to your books", body: "QuickBooks, Xero, Sage" },
  { icon: Clock, title: "Enter data once", body: "never twice" },
  { icon: ShieldCheck, title: "NDA & GDPR", body: "signed before we start" },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

// Full-bleed fluted-glass hero: blurred coral glow over navy, ribbed glass
// overlay, oversized light headline bottom-left, glass cards top-right.
export default function Hero() {
  return (
    <section
      id="top"
      className="glass-hero relative -mt-[62px] flex min-h-[100svh] flex-col overflow-hidden text-cream"
    >
      {/* Moving colour light behind the glass */}
      <div aria-hidden="true" className="aurora">
        <span className="a1" />
        <span className="a2" />
        <span className="a3" />
        <span className="a4" />
      </div>
      {/* Vertical ribbed glass + bottom shade for legibility */}
      <div aria-hidden="true" className="flutes" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#14213D]/75 via-[#14213D]/25 to-transparent" />

      <div className="container-x relative z-10 flex flex-1 flex-col lg:!max-w-6xl" style={{ paddingTop: 84 }}>
        {/* Glass cards, top right */}
        <div style={d(250)} className="rise hidden md:flex justify-end">
          <div className="float w-full max-w-[340px]">
            <DashboardMock />
          </div>
        </div>

        {/* Headline block, bottom left */}
        <div className="mt-auto grid gap-8 pb-6 pt-10 md:pt-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0">
            <div style={d(0)} className="rise inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-3 py-1 text-[11px] font-medium tracking-wide text-cream/90 backdrop-blur-md">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-coral" />
              <span>{hero.eyebrow}</span>
            </div>
            <h1
              style={d(120)}
              className="rise mt-4 max-w-[15ch] font-display text-[2.5rem] font-normal leading-[1.02] tracking-[-0.035em] text-cream sm:text-6xl lg:max-w-[24ch] lg:text-[clamp(3.25rem,5vw,4.5rem)]"
            >
              Stop doing the same work every single day.
            </h1>
            <p style={d(240)} className="rise mt-4 max-w-md text-sm leading-relaxed text-cream/80">
              {hero.subheading}
            </p>
          </div>

          <div style={d(360)} className="rise flex flex-wrap items-center gap-4 lg:pb-2">
            <a href={site.bookingUrl} className="btn-primary !rounded-full !px-6">
              <span>{hero.primaryCta}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-cream/90 underline-offset-4 hover:underline">
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Bottom feature strip */}
        <ul style={d(480)} className="rise grid grid-cols-2 border-t border-cream/15 sm:grid-cols-3 lg:grid-cols-5">
          {strip.map(({ icon: Icon, title, body }, i) => (
            <li
              key={title}
              className={`relative py-5 pr-4 text-[12px] leading-snug ${i > 0 ? "lg:border-l lg:border-cream/10 lg:pl-5" : ""}`}
            >
              {i === 0 && <span className="absolute -top-px left-0 h-[2px] w-24 bg-coral" />}
              <Icon className={`h-4 w-4 ${i === 0 ? "text-coral" : "text-cream/70"}`} />
              <p className={`mt-2 ${i === 0 ? "text-coral" : "text-cream/90"}`}>{title}</p>
              <p className="text-cream/55">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
