import { Check, ArrowRight } from "../Icons";
import { businessSegments, site } from "@/content/site";

export default function Pain() {
  return (
    <section id="businesses" aria-labelledby="business-heading" className="section border-b border-line fluted-mesh-cream">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow">Pick your business</p>
          <h2 id="business-heading" className="h2 mt-2 text-navy">
            Every business has chores that eat the day.
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
              className={`flex flex-col justify-between rounded-2xl p-5 bg-white border border-[#eae0d0] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                b.featured ? "ring-1.5 ring-coral/60" : ""
              }`}
            >
              <div>
                {b.featured && (
                  <span className="inline-block rounded-full bg-coral/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-coral mb-2">
                    Flagship Specialty
                  </span>
                )}
                <h3 className="text-base font-bold text-navy">{b.title}</h3>
                <p className="mt-0.5 text-[11px] text-muted">{b.subtitle}</p>

                <ul className="mt-4 space-y-2 border-t border-line/60 pt-3.5">
                  {b.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-fg/85 leading-snug">
                      <Check className="h-3.5 w-3.5 shrink-0 text-coral mt-0.5" strokeWidth={2.8} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-line/60">
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
