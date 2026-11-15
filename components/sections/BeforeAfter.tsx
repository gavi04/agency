import { promises, site } from "@/content/site";
import { ArrowRight, Check } from "../Icons";

export default function BeforeAfter() {
  return (
    <section aria-labelledby="promises-heading" className="section fluted-mesh-navy blend-from-cream blend-navy-bottom text-cream">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow text-coral before:bg-coral">Why Minus Zero</p>
          <h2 id="promises-heading" className="h2 mt-2 text-cream">
            Two promises we build everything around.
          </h2>
          <p className="lead !text-cream/75">
            No friction, no long software contracts, and no complicated tools your team will abandon.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {promises.map((p, i) => (
            <div
              key={p.number}
              data-reveal
              style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
              className="glow-border glow-border-hover relative flex flex-col justify-between rounded-2xl glass-card-dark p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <span className="text-shimmer font-display text-4xl sm:text-5xl font-extrabold">
                  {p.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-cream">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-cream/80">
                  {p.body}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream/15 flex items-center justify-between text-[11px] text-coral font-semibold">
                <span>Guaranteed on every build</span>
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 text-center">
          <a href={site.bookingUrl} className="btn-primary">
            <span>Get my free 3-day trial</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
