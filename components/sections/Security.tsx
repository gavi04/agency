import { Lock, ShieldCheck, icons } from "../Icons";
import { security } from "@/content/site";

export default function Security() {
  return (
    <section aria-labelledby="security-heading" className="section bg-[#14213D] text-white">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
        <div data-reveal>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/15 text-coral border border-coral/30">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral/15 text-coral border border-coral/30">
              <Lock className="h-6 w-6" />
            </span>
          </div>

          <h2 id="security-heading" className="h2 mt-6 !text-white">
            Client confidentiality & financial data security first.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            Whether tax returns, audited balance sheets, or payroll statements, client information demands ironclad confidentiality.
          </p>
          <div className="mt-6 rounded-2xl border border-white/15 bg-white/[0.05] p-5 text-sm leading-relaxed text-white/80">
            <p className="font-semibold text-coral mb-1">Standard Non-Disclosure Agreement (NDA)</p>
            We sign formal NDAs prior to accessing any sample workflows or files, ensuring legal protection and professional discretion from day one.
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {security.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] transition-colors"
              >
                <Icon className="h-6 w-6 text-coral" />
                <h3 className="mt-4 text-base font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
