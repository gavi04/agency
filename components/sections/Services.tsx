import { icons } from "../Icons";
import { services } from "@/content/site";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="section bg-bg">
      <div className="container-x">
        <div data-reveal className="max-w-2xl">
          <p className="eyebrow">Our Workflows</p>
          <h2 id="services-heading" className="h2 mt-4 text-fg">
            What we automate and take off your desk
          </h2>
          <p className="lead">
            Done-for-you systems engineered around your current tools. No complex software migrations, no new confusing apps for your team or clients.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 80}ms` } as React.CSSProperties}
                className="card group p-6 sm:p-7 transition-all duration-300 hover:shadow-lift hover:-translate-y-1 bg-white border-line"
              >
                <span className="icon-chip bg-accent-soft text-coral group-hover:bg-coral group-hover:text-white transition-colors duration-200">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-fg">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
