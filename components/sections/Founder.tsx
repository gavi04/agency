import { GitHub, LinkedIn } from "../Icons";
import { founder, site } from "@/content/site";

export default function Founder() {
  return (
    <section aria-labelledby="founder-heading" className="section bg-soft">
      <div className="container-x">
        <div data-reveal className="card grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[auto_1fr] md:gap-12 bg-white border-line shadow-soft">
          <div className="mx-auto md:mx-0">
            {founder.photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={founder.photo}
                alt={`Photo of ${founder.name}`}
                width={176}
                height={176}
                loading="lazy"
                className="h-36 w-36 rounded-2xl object-cover sm:h-44 sm:w-44 shadow-md"
              />
            ) : (
              <div
                role="img"
                aria-label={`Photo placeholder for ${founder.name}`}
                className="relative flex h-36 w-36 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#14213D] to-[#1e3056] sm:h-44 sm:w-44 shadow-md"
              >
                <span className="font-display text-4xl font-extrabold text-white">{founder.initials}</span>
                <span aria-hidden="true" className="absolute bottom-5 h-1 w-10 rounded-full bg-coral" />
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">Engineering Leadership</p>
            <h2 id="founder-heading" className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-coral">{founder.role}</p>
            <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted sm:text-base">
              {founder.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn (opens in a new tab)`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-navy transition-all hover:bg-coral hover:text-white hover:border-coral"
              >
                <LinkedIn className="h-[18px] w-[18px]" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on GitHub (opens in a new tab)`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-navy transition-all hover:bg-coral hover:text-white hover:border-coral"
              >
                <GitHub className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
