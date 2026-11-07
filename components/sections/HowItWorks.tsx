import { ArrowRight, icons } from "../Icons";
import { site, steps } from "@/content/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-heading" className="section bg-soft">
      <div className="container-x">
        <div data-reveal className="max-w-2xl">
          <p className="eyebrow">Implementation</p>
          <h2 id="how-heading" className="h2 mt-4 text-fg">
            Three steps. Zero technical headache for your team.
          </h2>
          <p className="lead">
            We handle 100% of the engineering, integration, and training. You continue working in your familiar tools.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {/* Connector line (desktop) */}
          <span
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-[48px] hidden h-0.5 bg-line lg:block"
          />
          {steps.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
                className="card relative p-6 sm:p-8 bg-white border-line shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="icon-chip bg-accent-soft text-coral ring-8 ring-white">
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <span className="font-display text-4xl font-extrabold text-coral/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-fg">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            );
          })}
        </ol>

        <div data-reveal className="mt-12 flex justify-center">
          <a
            href={site.bookingUrl}
            className="inline-flex items-center gap-2 rounded-xl bg-coral px-8 py-3.5 text-[15px] font-semibold text-white shadow-soft transition-all duration-200 hover:bg-coral-hover hover:scale-[1.02]"
          >
            <span>Book a Free Call</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
