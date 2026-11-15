/**
 * ============================================================================
 *  SITE CONTENT (international edition)
 * ============================================================================
 *  Target markets: US, UK, Canada, Australia, UAE (English-speaking SMBs).
 *  Flagship segment: accounting & bookkeeping firms (CPAs, accountants).
 *  Brand: set BRAND_NAME below. It is the only place the name is written.
 *  Colors: 50% Navy (#14213D), 30% Cream (#F4EDE0), 10% Coral (#FF6B5B)
 * ============================================================================
 */

// The business name, used everywhere on the site (logo, titles, SEO, footer,
// form subject...). Change it here only. The first word is shown bold in the logo.
export const BRAND_NAME = "Accobiz Automation";

export const site = {
  name: BRAND_NAME,
  tagline: "Stop doing the same work every single day.",
  url: "https://accobiz.com",
  email: "info@accobiz.com",
  whatsappNumber: "917717334545",
  whatsappMessage: `Hi, I'd like to book my free 3-day automation trial with ${BRAND_NAME}.`,
  // Leave empty to hide the LinkedIn button; paste your profile URL to show it
  linkedin: "",
  github: "https://github.com/",
  privacyUrl: "/privacy",
  bookingUrl: "#contact",
  formEndpoint: "https://formspree.io/f/xppdpany",
};

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Your business", href: "#businesses" },
  { label: "What we automate", href: "#what-we-automate" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Business process automation · Free 3-day trial",
  headline: "Stop doing the same work every single day.",
  subheading:
    "We build custom workflow automations for accounting firms, agencies, e-commerce stores and small businesses, connected to your accounting software, CRM and the tools you already use. Enter data once. Never twice.",
  primaryCta: "Get my free 3-day trial",
  secondaryCta: "See what we automate",
  trustPoints: [
    "No technical knowledge needed",
    "Syncs with your accounting software & CRM",
    "Built around how you already work",
  ],
};

// Real-time automation chore tracker inside hero
export const heroChores = [
  {
    title: "Invoice created & sent",
    detail: "Emailed to customer with a payment link",
    badge: "Instant",
    icon: "fileText",
  },
  {
    title: "Inventory updated",
    detail: "Reorder alert raised for 2 SKUs",
    badge: "Auto Sync",
    icon: "database",
  },
  {
    title: "Synced to accounting",
    detail: "Posted to your books, no manual entry",
    badge: "Zero Entry",
    icon: "plug",
  },
  {
    title: "Payment reminder",
    detail: "Scheduled for 3 overdue clients · 9:00 AM",
    badge: "Scheduled",
    icon: "bell",
  },
];

// Pick your business categories
export const businessSegments = [
  {
    id: "accounting-firms",
    title: "Accounting & bookkeeping firms",
    subtitle: "CPAs, accountants, bookkeepers & tax practices",
    featured: true,
    points: [
      "Client document collection via secure portal or email",
      "Tax deadline & filing reminders for every client",
      "Bank statements & receipts turned into accounting entries",
      "Staff workload tracking & month-end close checklists",
    ],
    cta: "See automations for accounting firms",
  },
  {
    id: "services",
    title: "Agencies & service businesses",
    subtitle: "Marketing agencies, consultants, clinics, coaches",
    featured: false,
    points: [
      "Recurring invoices raised automatically",
      "Automated payment follow-ups & reminders",
      "Client onboarding, contracts & e-signatures",
      "Automated weekly client reports",
    ],
    cta: "See automations for service businesses",
  },
  {
    id: "ecommerce",
    title: "E-commerce & retail",
    subtitle: "Online stores & multi-channel sellers",
    featured: false,
    points: [
      "Orders, inventory & stock synced across channels",
      "Low-stock reorder alerts and purchase orders",
      "Sales & fees reconciled into your accounting software",
      "Daily sales and cash summary on your phone",
    ],
    cta: "See automations for e-commerce",
  },
  {
    id: "operations",
    title: "Small businesses & operations",
    subtitle: "Trades, logistics, property & light manufacturing",
    featured: false,
    points: [
      "Timesheets & attendance linked to payroll",
      "Job, dispatch & delivery tracking",
      "Vendor purchase orders & approvals",
      "Lead capture from your website straight into your CRM",
    ],
    cta: "See automations for your operations",
  },
];

// List of all automated repetitive chores
export const choresList = [
  "Data entry",
  "Invoicing & billing",
  "Payment reminders",
  "Bookkeeping sync",
  "Client onboarding",
  "Document collection",
  "Lead follow-up & CRM",
  "Inventory management",
  "Payroll & timesheets",
  "Reporting & dashboards",
  "Approvals",
  "AI email & document processing",
  "+ Anything else you repeat",
];

// Two core promises
export const promises = [
  {
    number: "01",
    title: "So easy, anyone on your team can use it.",
    body: "If you can use email or a chat app, you can use what we build. Simple screens, plain language, no training sessions, no manuals. Ease of use comes first in every decision we make.",
  },
  {
    number: "02",
    title: "Try a working version free for 3 days.",
    body: "No long proposals, no paying upfront. We build a basic version for your actual workflow and hand it to you to use for 3 days, free. Like it? We take it live.",
  },
];

// How it works steps
export const steps = [
  {
    step: "1",
    title: "Tell us the chore",
    body: "A short video call. Show us how you do it today: the spreadsheet, the inbox, the copy-paste.",
  },
  {
    step: "2",
    title: "We build a basic version",
    body: "Made for your business, not a generic template, and free for you to try.",
  },
  {
    step: "3",
    title: "Use it free for 3 days",
    body: "Run your real work on it. See the hours you get back before you spend a cent.",
  },
  {
    step: "4",
    title: "Go live & connect",
    body: "We finish it, connect it to your accounting software and CRM, and keep improving it with you.",
  },
];

// Data security & privacy
export const security = [
  {
    icon: "fileCheck",
    title: "NDA before we start",
    body: "We sign a confidentiality agreement before looking at your files or processes.",
  },
  {
    icon: "users",
    title: "You control access",
    body: "Only the people you choose can see each part of your data.",
  },
  {
    icon: "database",
    title: "Stays in your systems",
    body: "Wherever possible, data stays in your own cloud storage or software, not ours. GDPR-compliant by design, with EU data hosting available.",
  },
  {
    icon: "lock",
    title: "No surprise changes",
    body: "Nothing in your books changes without the rules you approved.",
  },
] as const;

// FAQs
export const faqs = [
  {
    q: "I'm not technical. Will I be able to use it?",
    a: "Yes. That is the whole point. We design for the person who will use it every day, whether that's you, your bookkeeper or your operations staff.",
  },
  {
    q: "Do I have to change my software?",
    a: "No. We connect to what you already use (your accounting software, CRM, online store, spreadsheets and more), so nobody types the same entry twice.",
  },
  {
    q: "Which countries do you work with?",
    a: "We are based in India and work with businesses across India, plus remote clients in the US, UK, Europe, Canada, Australia and the Middle East. Indian clients get GST-ready workflows and support in IST. European clients get calls during your working day, GDPR-compliant data handling and a data processing agreement on request.",
  },
  {
    q: "What happens after the 3-day trial?",
    a: "If it's saving you time, we take it live at a clear, fixed price. If it isn't, you walk away and owe nothing.",
  },
  {
    q: "Do you use AI and no-code tools?",
    a: "We use whatever fits: proven automation platforms, custom code and AI for reading documents and emails. You get the result, not a tool you have to manage.",
  },
  {
    q: "My process is unusual. Can you still automate it?",
    a: "Most likely. We build around how you work, not the other way round. Tell us about it on a call and we'll be honest about what's possible.",
  },
];

export const finalCta = {
  headline: "Tell us one chore.",
  headlineAccent: "Get it automated, free for 3 days.",
  body: "Fill this in and we'll schedule a short call in your time zone to understand the task. No commitment, no payment details.",
};

export const founder = {
  name: "Imanpreet Singh Sohal",
  role: `Founder, ${BRAND_NAME}`,
  initials: "IS",
  photo: "",
  bio: [
    "I am a software engineer specializing in business automation, API integrations, and accounting workflows.",
    `I started ${BRAND_NAME} to eliminate repetitive daily chores for accounting firms and small businesses, so teams can focus on high-value work.`,
  ],
};

export const pricing = {
  note: "Prices are fixed and agreed upon after your free 3-day trial.",
  tiers: [
    {
      name: "Starter",
      forWho: "One workflow to start with",
      setup: "$750",
      monthly: "$150",
      featured: false,
      features: ["1 automated workflow", "Accounting / CRM sync", "Email support", "Free 3-day trial"],
      cta: "Start free trial",
    },
    {
      name: "Growth",
      forWho: "Most popular for firms & growing businesses",
      setup: "$2,000",
      monthly: "$400",
      featured: true,
      features: ["Up to 3 automated workflows", "AI document processing", "Priority support", "Free 3-day trial"],
      cta: "Start free trial",
    },
  ],
};

// EDIT: replace with a real client once you have one (set isPlaceholder: true until then)
export const caseStudy = {
  isPlaceholder: true,
  firm: "Bookkeeping firm (example)",
  summary: "Automated client document collection and receipt entry into their accounting software.",
  metrics: [
    { value: "30+", label: "Hours saved weekly" },
    { value: "0", label: "Manual entries" },
  ],
};

export const testimonials = [
  {
    isPlaceholder: true,
    quote: "We don't chase clients for documents anymore. Everything syncs on its own.",
    name: "Client name",
    role: "Partner, accounting firm",
  },
];
