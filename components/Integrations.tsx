const tools = [
  "QuickBooks", "Xero", "Sage", "Exact", "DATEV", "FreshBooks", "Stripe", "Shopify", "HubSpot", "Salesforce",
  "Google Sheets", "Excel", "Slack", "Microsoft Teams", "Gmail", "Outlook", "Zapier", "Make", "n8n", "OpenAI", "Claude",
];

// Infinite scrolling strip of tools we connect. Duplicated list = seamless loop.
export default function Integrations() {
  return (
    <section aria-label="Tools we integrate with" className="bg-cream py-7 border-b border-line">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
        Connects with the tools you already use
      </p>
      <div className="marquee mt-4">
        <ul className="marquee-track">
          {[...tools, ...tools].map((t, i) => (
            <li
              key={i}
              aria-hidden={i >= tools.length}
              className="whitespace-nowrap rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-sm font-semibold text-navy shadow-soft"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
