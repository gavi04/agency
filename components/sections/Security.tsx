import { Lock, ShieldCheck, icons } from "../Icons";
import { security } from "@/content/site";

export default function Security() {
  return (
    <section aria-labelledby="security-heading" className="section fluted-mesh-navy text-white border-t border-white/10">
      <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-center">
        <div data-reveal>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-coral/20 text-coral border border-coral/30">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-coral/20 text-coral border border-coral/30">
              <Lock className="h-5 w-5" />
            </span>
          </div>

          <h2 id="security-heading" className="h2 mt-4 text-white">
            Your business data is handled with care.
          </h2>
          <p className="lead !text-white/75">
            Bills, accounts, salaries and client records are sensitive. We treat them that way from the very first call.
          </p>
          <div className="mt-4 rounded-xl glass-card-dark p-4 text-xs leading-relaxed text-white/80">
            <p className="font-semibold text-coral mb-0.5">Signed Non-Disclosure Agreement (NDA)</p>
            We sign a confidentiality agreement before examining your processes, spreadsheets, or files.
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {security.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                className="rounded-xl glass-card-dark p-4 hover:border-coral/40 transition-colors"
              >
                <Icon className="h-5 w-5 text-coral" />
                <h3 className="mt-2.5 text-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
