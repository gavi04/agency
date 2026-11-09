import { ArrowRight, Check } from "../Icons";
import { choresList, site } from "@/content/site";

export default function Services() {
  return (
    <section id="what-we-automate" aria-labelledby="automate-heading" className="section fluted-mesh-cream border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div data-reveal className="max-w-xl">
          <p className="eyebrow">What we automate</p>
          <h2 id="automate-heading" className="h2 mt-2 text-navy">
            If it repeats, we can automate it.
          </h2>
          <p className="lead">
            These are just the common ones. Tell us about the task that annoys you most, and we&apos;ll take it from there.
          </p>
        </div>

        {/* Compact Chores Tags */}
        <div data-reveal className="mt-6 flex flex-wrap gap-2">
          {choresList.map((chore, i) => (
            <span
              key={chore}
              style={{ "--d": `${(i % 5) * 30}ms` } as React.CSSProperties}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all duration-150 ${
                chore.startsWith("+")
                  ? "bg-coral text-white shadow-xs"
                  : "bg-white border border-[#eae0d0] text-navy hover:border-coral/50"
              }`}
            >
              {!chore.startsWith("+") && <span className="h-1.5 w-1.5 rounded-full bg-coral/80" />}
              {chore}
            </span>
          ))}
        </div>

        {/* Connected to your books feature card (clean, compact) */}
        <div data-reveal className="mt-10 rounded-2xl bg-white border border-[#eae0d0] p-6 sm:p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <span className="inline-block rounded-full bg-coral/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-coral">
                Connected to your books
              </span>
              <h3 className="mt-2 text-xl font-bold text-navy sm:text-2xl">
                Enter it once. It shows up everywhere.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted">
                Most businesses type the same bill, the same stock entry, the same salary twice: once in their register, once in their accounting software. We connect the two, so your books stay updated on their own.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2.5 text-xs font-medium text-fg">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  No double data entry
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium text-fg">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  Fewer typing mistakes in your accounts
                </li>
                <li className="flex items-center gap-2.5 text-xs font-medium text-fg">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  Works with your current tools: Tally, Zoho, Busy, Excel
                </li>
              </ul>

              <div className="mt-6">
                <a href={site.bookingUrl} className="btn-primary">
                  <span>Start my free 3-day trial</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Visual flow: Enter once -> updates everywhere */}
            <div className="rounded-xl border border-line/60 bg-surface-2/60 p-5">
              <div className="text-center">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold">You enter</span>
                <div className="mt-1.5 inline-block rounded-lg border border-coral/30 bg-coral/15 px-3 py-1 font-display text-xs font-bold text-coral">
                  A bill, once
                </div>
              </div>

              <div className="my-2.5 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-0.5 bg-coral/40" />
                  <span className="rounded-full bg-coral px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    Minus Zero Automation
                  </span>
                  <div className="h-4 w-0.5 bg-coral/40" />
                </div>
              </div>

              <div className="text-center">
                <span className="text-[10px] uppercase tracking-wider text-muted font-bold">Updates on its own</span>
                <div className="mt-2 grid grid-cols-2 gap-2 text-left">
                  <div className="rounded-lg border border-line bg-white p-2 text-[11px] font-semibold text-navy">
                    ✓ Stock register
                  </div>
                  <div className="rounded-lg border border-line bg-white p-2 text-[11px] font-semibold text-navy">
                    ✓ Customer ledger
                  </div>
                  <div className="rounded-lg border border-line bg-white p-2 text-[11px] font-semibold text-navy">
                    ✓ Accounting software
                  </div>
                  <div className="rounded-lg border border-line bg-white p-2 text-[11px] font-semibold text-navy">
                    ✓ Daily report
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
