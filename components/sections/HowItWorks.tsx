import { steps } from "@/content/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="section fluted-mesh-cream border-b border-line/60">
      <div className="container-x">
        <div data-reveal className="max-w-xl">
          <h2 id="how-heading" className="text-2xl font-bold leading-tight text-navy sm:text-3xl tracking-tight">
            From &ldquo;this takes forever&rdquo; to &ldquo;it just happens&rdquo;.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Four simple steps. You see the time saved in your own office before you spend a single rupee.
          </p>
        </div>

        <ol className="mt-8 sm:mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.step}
              data-reveal
              style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
              className="relative flex flex-col justify-between rounded-2xl bg-white border border-[#eae0d0] p-5 sm:p-5 shadow-xs transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div>
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-coral/15 font-display text-xs font-bold text-coral">
                  {s.step}
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{s.body}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#eae0d0] text-[10px] font-semibold text-muted/70 uppercase tracking-wider">
                STEP 0{s.step} OF 04
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
