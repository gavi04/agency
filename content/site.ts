/**
 * ============================================================================
 *  MINUS ZERO — SITE CONTENT
 * ============================================================================
 *  Exact content mirrored from Envesty Automation Landing Page:
 *  - Hub (all businesses: CA firms, service providers, traders, manufacturers)
 *  - CA firms as flagship segment
 *  - Brand: Minus Zero
 *  - Colors: 50% Navy (#14213D), 30% Cream (#F4EDE0), 10% Coral (#FF6B5B)
 * ============================================================================
 */

export const site = {
  name: "Minus Zero",
  tagline: "Stop doing the same work every single day.",
  url: "https://minuszero.in",
  email: "gavisohal87@gmail.com",
  phoneDisplay: "+91-7717334545",
  phoneHref: "tel:+917717334545",
  whatsappNumber: "917717334545",
  whatsappMessage: "Hi, I'd like to get my free 3-day trial with Minus Zero.",
  linkedin: "https://www.linkedin.com/in/",
  github: "https://github.com/",
  privacyUrl: "/privacy",
  bookingUrl: "#contact",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
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
  eyebrow: "Free basic version · Ready for a 3-day trial",
  headline: "Stop doing the same work every single day.",
  subheading:
    "Whether you run a CA firm, a service business, a shop or a factory, we automate your repetitive daily chores and connect them to your accounting software. Enter data once. Never twice.",
  primaryCta: "Get my free 3-day trial",
  secondaryCta: "See what we automate",
  trustPoints: [
    "No technical knowledge needed",
    "Syncs with your accounting software",
    "Built around how you already work",
  ],
};

// Real-time automation chore tracker inside hero
export const heroChores = [
  {
    title: "Sales invoice created",
    detail: "Sent to customer on WhatsApp",
    badge: "Instant",
    icon: "fileText",
  },
  {
    title: "Stock updated",
    detail: "Reorder alert raised for 2 items",
    badge: "Auto Sync",
    icon: "database",
  },
  {
    title: "Synced to accounting",
    detail: "No manual entry needed in Tally or Zoho",
    badge: "Zero Entry",
    icon: "plug",
  },
  {
    title: "Payment reminder",
    detail: "Scheduled for 3 overdue clients · 6:00 PM",
    badge: "Scheduled",
    icon: "bell",
  },
];

// Pick your business categories
export const businessSegments = [
  {
    id: "ca-firms",
    title: "CA firms",
    subtitle: "Tax practitioners & accounting practices",
    featured: true,
    points: [
      "Client document collection on WhatsApp",
      "GST, TDS & ITR due-date alerts",
      "Staff work tracking & article allocation",
      "Statements to accounting entries (Tally ready)",
    ],
    cta: "See automations for CA firms",
  },
  {
    id: "services",
    title: "Service providers",
    subtitle: "Agencies, consultants, clinics, coaching",
    featured: false,
    points: [
      "Recurring invoices raised automatically",
      "Automated payment follow-ups & reminders",
      "Client task boards & automated weekly reports",
      "Client onboarding & contract signatures",
    ],
    cta: "See automations for service providers",
  },
  {
    id: "traders",
    title: "Traders & retailers",
    subtitle: "Shops, wholesalers & distributors",
    featured: false,
    points: [
      "Billing that auto-updates stock in real time",
      "Low-stock reorder alerts sent to managers",
      "Credit customer ledger & WhatsApp reminders",
      "Daily sales & collection summary on phone",
    ],
    cta: "See automations for traders & retailers",
  },
  {
    id: "manufacturers",
    title: "Manufacturers",
    subtitle: "Factories & production units",
    featured: false,
    points: [
      "Raw material & finished goods stock logs",
      "Biometric attendance linked directly to payroll",
      "Production batches & dispatch registers",
      "Vendor purchase order & GRN tracking",
    ],
    cta: "See automations for manufacturers",
  },
];

// List of all automated repetitive chores
export const choresList = [
  "Office management",
  "Task management",
  "Stock management",
  "Payroll",
  "Attendance",
  "Invoicing & billing",
  "Payment reminders",
  "Client onboarding",
  "Document collection",
  "Daily reports",
  "Approvals",
  "Data entry",
  "+ Anything else you repeat",
];

// Two core promises
export const promises = [
  {
    number: "01",
    title: "So easy, anyone in your team can use it.",
    body: "If you can use WhatsApp, you can use what we build. Simple screens, plain language, no training sessions, no manuals. Ease of use comes first in every decision we make.",
  },
  {
    number: "02",
    title: "Try a working version free for 3 days.",
    body: "No long proposals, no paying upfront. We build a basic version for your actual chore and hand it to you to use for 3 days, free. Like it? We take it live.",
  },
];

// How it works steps
export const steps = [
  {
    step: "1",
    title: "Tell us the chore",
    body: "A short call. Show us how you do it today: the register, the Excel sheet, the WhatsApp messages.",
  },
  {
    step: "2",
    title: "We build a basic version",
    body: "Made for your business, not a generic template, and free for you to try.",
  },
  {
    step: "3",
    title: "Use it free for 3 days",
    body: "Run your real work on it. See the hours you get back before you spend a rupee.",
  },
  {
    step: "4",
    title: "Go live & connect",
    body: "We finish it, link it to your accounting software if you need, and keep improving it with you.",
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
    body: "Wherever possible, files stay in your own Drive or software, not ours.",
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
    a: "Yes. That is the whole point. We design for the person who will use it every day, whether that's you, your accountant or your shop staff.",
  },
  {
    q: "Do I have to change my accounting software?",
    a: "No. We connect to what you already use (Tally, Zoho Books, Busy, Excel, etc.), so your accounts get updated without anyone typing the same entry twice.",
  },
  {
    q: "What happens after the 3-day trial?",
    a: "If it's saving you time, we take it live at an affordable, clear price. If it isn't, you walk away and owe nothing.",
  },
  {
    q: "My process is unusual. Can you still automate it?",
    a: "Most likely. We build around how you work, not the other way round. Tell us about it on a call and we'll be honest about what's possible.",
  },
];

export const finalCta = {
  headline: "Tell us one chore.",
  headlineAccent: "Get it automated, free for 3 days.",
  body: "Fill this in and our team will call you to understand the task. No commitment, no payment details.",
};

export const founder = {
  name: "Imanpreet Singh Sohal",
  role: "Founder, Minus Zero",
  initials: "IS",
  photo: "",
  bio: [
    "I am a software engineer specializing in business automation, API integrations, and accounting workflows.",
    "I started Minus Zero to eliminate repetitive daily chores for CA firms and businesses, so teams can focus on high-value work.",
  ],
};

export const pricing = {
  note: "Prices are transparent and agreed upon after your free 3-day trial.",
  tiers: [
    {
      name: "Starter",
      forWho: "One chore to start with",
      setup: "₹15,000",
      monthly: "₹3,000",
      featured: false,
      features: ["1 core automated chore", "WhatsApp integration", "Accounting sync", "Free 3-day trial"],
      cta: "Start free trial",
    },
    {
      name: "Growth",
      forWho: "Most popular for CA firms & businesses",
      setup: "₹35,000",
      monthly: "₹6,000",
      featured: true,
      features: ["Up to 3 automated chores", "Full client/stock tracker", "Priority support", "Free 3-day trial"],
      cta: "Start free trial",
    },
  ],
};

export const caseStudy = {
  isPlaceholder: false,
  firm: "Apex Tax Advisors",
  summary: "Automated GST document collection and invoice entry.",
  metrics: [
    { value: "30+", label: "Hours saved weekly" },
    { value: "0", label: "Manual entries" },
  ],
};

export const testimonials = [
  {
    isPlaceholder: false,
    quote: "We don't chase clients for documents on WhatsApp anymore. Everything syncs on its own.",
    name: "Rajesh Singhania",
    role: "Partner, CA Firm",
  },
];

