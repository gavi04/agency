import { icons } from "../Icons";
import { pains } from "@/content/site";

export default function Pain() {
  return (
    <section aria-labelledby="pain-heading" className="border-y border-line bg-soft py-16 sm:py-20">
      <div className="container-x">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Bottlenecks</p>
          <h2 id="pain-heading" className="mt-3 text-2xl font-bold text-fg sm:text-3xl lg:text-4xl">
            Where your firm loses 30+ hours every single week
          </h2>
          <p className="lead">
            Whether you&apos;re managing 400 CA clients or running a high-growth finance desk, manual chasing steals your most valuable advisory time.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((p, i) => {
            const Icon = icons[p.icon];
            return (
              <li
                key={p.text}
                data-reveal
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                className="card group flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-lift hover:-translate-y-1"
              >
                <div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-coral transition-colors group-hover:bg-coral group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-[15px] font-semibold leading-snug text-fg">
                    {p.text}
                  </p>
                </div>
                <div className="mt-6 h-1 w-6 rounded-full bg-coral/30 group-hover:w-10 group-hover:bg-coral transition-all duration-200" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
