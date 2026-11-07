import ContactForm from "../ContactForm";
import { Check, Mail, Phone, WhatsApp } from "../Icons";
import { finalCta, site, whatsappUrl } from "@/content/site";

export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section bg-soft">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl bg-[#14213D] shadow-2xl border border-white/10 text-white">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14 items-center">
            <div data-reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-coral/15 border border-coral/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-coral mb-4">
                <span>Free 20-Min Workflow Audit</span>
              </div>
              <h2 id="contact-heading" className="h2 text-white">
                {finalCta.headline}
                <span className="block text-coral">{finalCta.headlineAccent}</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                {finalCta.body}
              </p>

              <ul className="mt-8 space-y-3.5">
                {finalCta.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] text-white/90">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral/20 text-coral">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-sm text-white/70">Prefer a direct chat right now?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-[15px] font-semibold text-white shadow-md transition-transform hover:scale-[1.02]"
                >
                  <WhatsApp className="h-5 w-5" />
                  Chat on WhatsApp Directly
                </a>
                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  <li>
                    <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-coral transition-colors">
                      <Phone className="h-4 w-4 text-coral" /> {site.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 break-all hover:text-coral transition-colors">
                      <Mail className="h-4 w-4 shrink-0 text-coral" /> {site.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              data-reveal
              style={{ "--d": "100ms" } as React.CSSProperties}
              className="rounded-2xl bg-white p-6 sm:p-8 text-fg shadow-xl"
            >
              <h3 className="text-xl font-bold text-navy">Schedule Your Consultation</h3>
              <p className="mb-6 mt-1 text-sm text-muted">
                Takes less than a minute. We will review your requirements before we talk.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
