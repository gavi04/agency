import { Check } from "../Icons";
import { pricing, site } from "@/content/site";

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="section bg-bg">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Investment</p>
          <h2 id="pricing-heading" className="h2 mt-4 text-fg">
            Transparent pricing. Predictable ROI.
          </h2>
          <p className="lead">
            A one-time engineering setup fee followed by a monthly upkeep retainer for continuous monitoring, connector updates, and priority support.
          </p>
        </div>

        <ul className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.tiers.map((t, i) => (
            <li
              key={t.name}
              data-reveal
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                t.featured
                  ? "border-2 border-coral bg-white shadow-lift lg:-my-3 lg:py-11"
                  : "border-line bg-white shadow-soft"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-coral px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Recommended for CA Firms
                </span>
              )}
              <h3 className="text-xl font-bold text-fg">{t.name}</h3>
              <p className="mt-1.5 text-sm text-muted">{t.forWho}</p>

              <div className="mt-6 border-t border-line pt-6">
                <p className="font-display text-3xl font-extrabold text-navy">{t.setup}</p>
                <p className="mt-0.5 text-xs font-medium text-muted uppercase tracking-wider">one-time build fee</p>
                <p className="mt-3 text-base font-semibold text-fg">
                  {t.monthly === "Custom" ? "Custom" : `+ ${t.monthly}`}
                  <span className="text-sm font-normal text-muted"> / month maintenance</span>
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[14px] text-fg">
                    <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-coral" strokeWidth={2.6} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={site.bookingUrl}
                className={`mt-8 w-full ${t.featured ? "btn-primary" : "btn-secondary"}`}
                aria-label={`${t.cta}: ${t.name} plan`}
              >
                {t.cta}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-muted">{pricing.note}</p>
      </div>
    </section>
  );
}
