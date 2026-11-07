import { Quote } from "../Icons";
import { caseStudy, testimonials } from "@/content/site";

export default function Proof() {
  return (
    <section aria-labelledby="proof-heading" className="section bg-[#14213D] text-white">
      <div className="container-x">
        <div data-reveal className="max-w-2xl">
          <p className="eyebrow text-coral before:bg-coral">Proven Impact</p>
          <h2 id="proof-heading" className="h2 mt-4 text-white">
            Measurable hours recovered across busy seasons
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Real outcomes from automating client document collection, GST schedules, and bank statement processing.
          </p>
        </div>

        {/* Case Study Card */}
        <article data-reveal className="mt-12 overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-2xl">
          <div className="grid lg:grid-cols-[1.25fr_1fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-coral/20 border border-coral/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral">
                  Case Study
                </span>
                <span className="text-xs text-white/50">Chartered Accounting Practice</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white">{caseStudy.firm}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/75">{caseStudy.summary}</p>
            </div>

            <dl className="grid grid-cols-3 border-t border-white/10 bg-black/20 lg:grid-cols-1 lg:border-l lg:border-t-0">
              {caseStudy.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col justify-center border-white/10 p-5 [&:not(:last-child)]:border-r sm:p-6 lg:[&:not(:last-child)]:border-b lg:[&:not(:last-child)]:border-r-0"
                >
                  <dt className="order-2 mt-1 text-xs leading-snug text-white/60 sm:text-sm">{m.label}</dt>
                  <dd className="order-1 font-display text-2xl font-extrabold text-coral sm:text-3xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>

        {/* Testimonials */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li
              key={i}
              data-reveal
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-coral/60" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">Verified Partner</span>
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-coral/20 text-xs font-bold text-coral">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
