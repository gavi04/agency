import { Check, ArrowRight } from "../Icons";
import { businessSegments, site } from "@/content/site";

export default function Pain() {
  return (
    <section id="businesses" aria-labelledby="business-heading" className="section mesh-blush">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Pick your business</p>
          <h2 id="business-heading" className="h2 mt-2 text-navy">
            Every business has chores that <span className="mark">eat the day</span>.
          </h2>
          <p className="lead">
            Choose what you run to see the exact workflows we automate for businesses like yours.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessSegments.map((b, i) => (
            <div
              key={b.id}
              data-reveal
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className={`card flex flex-col justify-between rounded-2xl p-5 ${
                b.featured ? "glow-border glow-fill bg-navy text-cream border-transparent" : "bg-white/85 backdrop-blur-sm"
              }`}
            >
              <div>
                {b.featured && (
                  <span className="inline-block rounded-full bg-coral px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                    Flagship Specialty
                  </span>
                )}
                <h3 className={`text-base font-bold ${b.featured ? "text-cream" : "text-navy"}`}>{b.title}</h3>
                <p className={`mt-0.5 text-[11px] ${b.featured ? "text-cream/65" : "text-muted"}`}>{b.subtitle}</p>

                <ul className={`mt-4 space-y-2 border-t pt-3.5 ${b.featured ? "border-cream/15" : "border-line/60"}`}>
                  {b.points.map((pt) => (
                    <li key={pt} className={`flex items-start gap-2 text-xs leading-snug ${b.featured ? "text-cream/90" : "text-fg/85"}`}>
                      <Check className="h-3.5 w-3.5 shrink-0 text-coral mt-0.5" strokeWidth={2.8} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-6 pt-3 border-t ${b.featured ? "border-cream/15" : "border-line/60"}`}>
                <a
                  href={site.bookingUrl}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-coral hover:text-coral-hover transition-colors"
                >
                  <span>{b.cta}</span>
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
