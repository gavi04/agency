import { Minus, Plus } from "../Icons";
import { faqs, site, whatsappUrl } from "@/content/site";

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section fluted-mesh-cream border-t border-line">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div data-reveal>
          <p className="eyebrow">Common Questions</p>
          <h2 id="faq-heading" className="h2 mt-2 text-navy">
            Questions owners usually ask
          </h2>
          <p className="lead">
            Have a question about your specific workflow?{" "}
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

        <div data-reveal className="space-y-2.5">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-[#eae0d0] bg-white overflow-hidden shadow-xs">
              <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-semibold text-navy sm:px-5">
                <span>{f.q}</span>
                <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral transition-all duration-200 group-open:bg-coral group-open:text-white">
                  <Minus className="absolute h-3.5 w-3.5" strokeWidth={2.4} />
                  <Plus className="faq-plus absolute h-3.5 w-3.5 transition-all duration-200" strokeWidth={2.4} />
                </span>
              </summary>
              <p className="px-4 pb-4 pt-1 text-xs leading-relaxed text-muted sm:px-5">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
