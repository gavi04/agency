# Minus Zero: international go-to-market plan

## 1. Who we sell to

Target English-speaking small businesses in high-income markets. There, an hour of an admin's time costs $25–60. That makes a $750–2,000 automation an easy yes.

| Priority | Market | Why |
|---|---|---|
| 1 | **US** | Biggest pool. QuickBooks dominates. Strong habit of buying from freelancers and agencies |
| 2 | **UK, Australia** | Xero heartland. Making Tax Digital (UK) pushes firms to digitise |
| 3 | **Canada, UAE** | Easy to reach on time zones. UAE is close to you and has a growing SMB scene |

### Europe: yes, but phased

| Phase | Countries | Language | Notes |
|---|---|---|---|
| Now | **Ireland, Netherlands, Nordics (SE/DK/NO/FI)** | English works | Very high English use, high wages, open to remote vendors. NL accounting runs on Exact Online, Twinfield and Xero |
| Later | **Germany, Austria, Switzerland (DACH)** | German expected | Biggest SMB market, but buyers want German, and accounting runs on DATEV/lexoffice. Enter once you have case studies and a German landing page |
| Skip for now | France, Spain, Italy | Local language required | Hard to sell into in English |

What changes for Europe:
- **GDPR is the first question.** Have a Data Processing Agreement (DPA) template ready, host data in the EU (self-hosted n8n on a Hetzner or AWS Frankfurt server) and list your sub-processors. You can sell this as a feature ("your data never leaves the EU").
- **Pricing in EUR:** €700 setup + €140/mo (Starter), €1,850 + €370/mo (Growth).
- **EU VAT:** B2B services to EU businesses are reverse-charge. Put the client's VAT ID on the invoice and charge no VAT.
- **Time zone is an advantage:** IST is 3.5–4.5 hours ahead of Europe, so your afternoon overlaps their whole morning. That's easier than the US.
- **Lead sources:** cold email works, but GDPR limits apply (B2B only, legitimate-interest basis, unsubscribe link in every email). LinkedIn works well in NL and the Nordics.
- **SEO:** add `/eu` or country pages later (e.g. `/exact-online-automation`, a German `/de/` site for DACH), with `hreflang` tags.

**Beachhead niche: accounting & bookkeeping firms (5–50 staff).** You already know this workflow from the CA-firm work. The pain is the same everywhere (chasing documents, entering receipts, deadline tracking). These firms also refer you to their own clients, which turns one firm into many.

Second niche: **marketing agencies & e-commerce (Shopify) brands**. They're used to buying automation and they make decisions fast.

## 2. What we sell (productised, not "custom anything")

| Offer | Price | Delivery |
|---|---|---|
| Free 3-day trial build | $0 | 1 workflow, basic version |
| Starter | $750 setup + $150/mo | 1 workflow, maintained |
| Growth | $2,000 setup + $400/mo | Up to 3 workflows, AI document processing |
| Automation audit (lead-in) | $0 or $199 | 30-min call + map of 5 automations with estimated hours saved |

The monthly retainer is the real business. 20 Growth clients ≈ **$8k/mo recurring**.

### Ready-made "productised" automations to build first (reuse across clients)

1. **Client document collector**: portal/email intake → AI reads it → files it into the right folder → reminders for missing items.
2. **Receipt & bill → QuickBooks/Xero**: email inbox → OCR/AI extraction → draft bill in accounting software.
3. **Invoice + payment chaser**: recurring invoices, Stripe link, polite reminders at 3/7/14 days.
4. **Lead → CRM → follow-up**: website form → HubSpot → instant email/SMS → task for sales.
5. **Shopify → accounting reconciliation**: daily sales, fees and refunds posted to Xero/QBO.
6. **Weekly client report**: pulls data from sheets/ads/CRM → branded PDF/email.

Stack: n8n (self-hosted, cheap, you keep the IP) + Make/Zapier when the client already has them + Claude API for document reading.

## 3. How we get clients

1. **Cold email (main channel).** Use Apollo/Instantly. Target US/UK bookkeeping firms with 5–50 staff. Send 30–50 emails a day from 2–3 warm-up domains. Make the offer the *free 3-day trial build*.
2. **LinkedIn.** Post 3x/week with "I automated X for a firm, here's the before/after" (screen recordings). DM firm owners.
3. **Upwork / Contra.** Bid on Zapier/Make/n8n/QuickBooks-integration jobs to get the first 3–5 international reviews and case studies quickly.
4. **Partner programs.** List as a Xero/QuickBooks partner (app partner or advisor directory), on the Make partner directory and on the Zapier Experts directory.
5. **SEO (slow, compounding).** See below.

Goal: **3 paying international clients in 60 days**, then turn them into case studies.

## 4. SEO: what's done and what's next

Done in this repo:
- Title, description and keywords retargeted to "business process automation agency", QuickBooks/Xero/Zapier/n8n/AI terms
- `en_US` locale plus en-GB/CA/AU alternates, `lang="en"`
- Schema.org `areaServed` set to US/GB/CA/AU/AE/IN, plus `serviceType` and `knowsAbout`
- `sitemap.xml` and `robots.txt`
- All India-only copy (CA, GST, TDS, Tally, rupee) replaced with international equivalents

Still to do (needs you):
- [ ] **Buy a .com domain** (e.g. minuszero.co / getminuszero.com). `.in` tells Google you target India. This is the single biggest SEO blocker. Then update `site.url`.
- [ ] Get a domain email (hello@yourdomain) instead of Gmail, for trust and for cold email.
- [ ] Get a US/UK virtual number (e.g. OpenPhone, ~$15/mo). Many Western buyers won't call or WhatsApp a +91 number.
- [ ] Wire up Formspree (`formEndpoint`) and a Calendly link (`bookingUrl`).
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools.
- [ ] Add landing pages per niche/intent, one keyword each:
  - `/bookkeeping-automation`, `/quickbooks-automation`, `/xero-automation`
  - `/n8n-agency`, `/zapier-expert`, `/ai-document-processing`
  - `/shopify-accounting-automation`
- [ ] Blog: 2 posts/month answering buyer questions ("how to automate receipt entry into QuickBooks", "n8n vs Zapier for accounting firms").
- [ ] Real case studies and testimonials. They're set to `isPlaceholder: true` until you have them.
- [ ] Rewrite the privacy policy to cover GDPR (UK/EU clients will ask).

## 5. Ops basics before taking money abroad

- Payments: Stripe (via Stripe Atlas or an Indian entity), Wise, or Payoneer. Invoice in USD/GBP.
- Contracts: a simple MSA + NDA template, plus a GDPR data-processing addendum for UK/EU clients.
- Export of services from India: LUT filing so you can invoice abroad without IGST. Check this with your CA.
