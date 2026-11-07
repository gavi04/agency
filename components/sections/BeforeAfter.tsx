import Logo from "../Logo";
import { Check, X } from "../Icons";
import { beforeAfter } from "@/content/site";

export default function BeforeAfter() {
  return (
    <section aria-labelledby="ba-heading" className="section bg-[#14213D] text-white">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-coral before:bg-coral">Before &amp; After</p>
          <h2 id="ba-heading" className="h2 mt-4 text-white">
            The same filing week. Minus the chaos.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            See how an accounting or compliance week transforms once document collection and data extraction run on autopilot.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* BEFORE CARD */}
          <div
            data-reveal
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white/70">Before Minus Labs</h3>
                <p className="mt-0.5 text-xs text-white/50">The high-friction manual cycle</p>
              </div>
              <span className="rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-xs font-semibold text-red-300">
                Manual Chasing
              </span>
            </div>

            <ol className="mt-6 space-y-4">
              {beforeAfter.before.map((r) => (
                <li key={r.day} className="flex items-start gap-4">
                  <span className="w-10 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-white/40">
                    {r.day}
                  </span>
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                    <X className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] leading-snug text-white/70">{r.text}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* AFTER CARD */}
          <div
            data-reveal
            style={{ "--d": "100ms" } as React.CSSProperties}
            className="relative rounded-3xl border-2 border-coral/60 bg-white/[0.08] p-6 sm:p-8 shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">With Minus Labs</h3>
                <p className="mt-0.5 text-xs text-coral">Structured automated workflows</p>
              </div>
              <Logo onDark={true} className="!text-sm" />
            </div>

            <ol className="mt-6 space-y-4">
              {beforeAfter.after.map((r) => (
                <li key={r.day} className="flex items-start gap-4">
                  <span className="w-10 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-wider text-coral">
                    {r.day}
                  </span>
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/20 text-coral">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14px] font-medium leading-snug text-white/95">{r.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
