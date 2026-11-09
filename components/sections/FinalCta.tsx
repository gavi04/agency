import ContactForm from "../ContactForm";
import { Check, Mail, Phone, WhatsApp } from "../Icons";
import { finalCta, site, whatsappUrl } from "@/content/site";

export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section fluted-mesh-cream border-t border-line">
      <div className="container-x">
        <div className="overflow-hidden rounded-2xl fluted-mesh-navy shadow-xl border border-white/15 text-white">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:p-10 items-center">
            <div data-reveal>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-coral/20 border border-coral/30 px-3 py-0.5 text-[11px] font-semibold tracking-wider text-coral mb-3">
                <span>Free 3-Day Working Trial</span>
              </div>
              <h2 id="contact-heading" className="h2 text-white">
                {finalCta.headline}
                <span className="block text-coral">{finalCta.headlineAccent}</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/75">
                {finalCta.body}
              </p>

              <ul className="mt-5 space-y-2 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  <span>No payment details & zero commitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  <span>Custom build for your actual chore in 3 days</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={3} />
                  <span>Works with your existing accounting tools</span>
                </li>
              </ul>

              <div className="mt-6 border-t border-white/10 pt-5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1fa851] transition-all"
                >
                  <WhatsApp className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                  <a href={site.phoneHref} className="hover:text-coral transition-colors flex items-center gap-1">
                    <Phone className="h-3 w-3 text-coral" /> {site.phoneDisplay}
                  </a>
                  <a href={`mailto:${site.email}`} className="hover:text-coral transition-colors flex items-center gap-1">
                    <Mail className="h-3 w-3 text-coral" /> {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div
              data-reveal
              style={{ "--d": "100ms" } as React.CSSProperties}
              className="rounded-xl bg-white p-5 sm:p-6 text-fg shadow-md"
            >
              <h3 className="text-base font-bold text-navy">Get your free 3-day trial</h3>
              <p className="mb-4 mt-0.5 text-xs text-muted">
                Tell us the chore. We&apos;ll call to set up your working automation.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
