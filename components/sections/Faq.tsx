import { Minus, Plus } from "../Icons";
import { faqs, site, whatsappUrl } from "@/content/site";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section bg-bg">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">Frequently Asked</p>
          <h2 id="faq-heading" className="h2 mt-4 text-fg">
            Everything you need to know about our automations
          </h2>
          <p className="lead">
            Have a specific workflow or custom software question?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-coral underline-offset-4 hover:underline"
            >
              Ask on WhatsApp
            </a>{" "}
            or email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-coral underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </div>

        <div data-reveal className="space-y-3.5">
          {faqs.map((f) => (
            <details key={f.q} className="group card overflow-hidden bg-white border-line shadow-soft">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-fg sm:px-6 sm:text-[17px]">
                {f.q}
                <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-coral transition-all duration-200 group-open:bg-coral group-open:text-white">
                  <Minus className="absolute h-4 w-4" strokeWidth={2.4} />
                  <Plus className="faq-plus absolute h-4 w-4 transition-all duration-200" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="px-5 pb-6 text-[15px] leading-relaxed text-muted sm:px-6">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
