/**
 * ============================================================================
 *  MINUS LABS — SITE CONTENT
 * ============================================================================
 *  50% Navy (#14213D) · 30% Cream (#F4EDE0) · 10% Coral (#FF6B5B)
 *  General workflow & compliance automation with Chartered Accountants &
 *  finance teams as the flagship primary audience.
 * ============================================================================
 */

export const site = {
  name: "Minus Labs",
  tagline: "Minus the manual work.",
  url: "https://minuslabs.in",
  email: "gavisohal87@gmail.com",
  phoneDisplay: "+91-7717334545",
  phoneHref: "tel:+917717334545",
  whatsappNumber: "917717334545",
  whatsappMessage: "Hi, I'd like to know more about Minus Labs automation.",
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
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Workflow & Compliance Automation · Built for CA Firms & Growing Businesses",
  headline: "Minus the chasing. Plus effortless workflows.",
  subheading:
    "We build done-for-you automations for Chartered Accountants, finance teams, and modern professional firms. From WhatsApp document collection to compliance tracking and zero-error data extraction.",
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Workflow Demo",
  trustPoints: [
    "Tailored for CA firms & businesses",
    "Works with Tally, Zoho & spreadsheets",
    "Confidential NDA on request",
  ],
};

export const pains = [
  {
    icon: "message",
    text: "Endless WhatsApp & email chasing for statements, bills and KYC records",
  },
  {
    icon: "calendarX",
    text: "Stressing over GST, TDS, advance tax, and statutory filing deadlines",
  },
  {
    icon: "keyboard",
    text: "Hours lost re-typing invoices, bank statements, and entries into Tally or ERPs",
  },
  {
    icon: "eyeOff",
    text: "No central real-time view of client submissions, pending files, or approvals",
  },
] as const;

export const services = [
  {
    icon: "whatsapp",
    title: "Smart Document Collection via WhatsApp & Web",
    body: "Clients receive scheduled, polite reminders with an instant upload link. Incoming files auto-organize into client folders with zero manual filing.",
  },
  {
    icon: "bell",
    title: "Compliance & Statutory Due Date Tracking",
    body: "Automated alerts for GST, TDS, advance tax, ITR, and audit filings. Keeps your internal team and your clients aligned well before penalty dates.",
  },
  {
    icon: "fileText",
    title: "Automated Bank Statement & Invoice Extraction",
    body: "Turn PDF statements, vendor bills, and scanned receipts into structured Excel sheets or Tally-ready XML without manual data entry.",
  },
  {
    icon: "dashboard",
    title: "Unified Status & Client Workflow Dashboard",
    body: "A clean command center showing what is pending, what is received, and what is filed across all partners, accounts, and team members.",
  },
  {
    icon: "megaphone",
    title: "Broadcasts, Advisories & Bulk Reminders",
    body: "Send personalized compliance circulars, payment reminders, and year-end checklists to hundreds of clients in one click.",
  },
  {
    icon: "plug",
    title: "Custom Integrations with Your Existing Stack",
    body: "We connect seamlessly with tools you already rely on: Tally Prime, Zoho Books, Google Workspace, Excel, OneDrive, and WhatsApp API.",
  },
] as const;

export const beforeAfter = {
  before: [
    { day: "Mon", text: "50+ follow-ups sent across WhatsApp and phone asking for bank statements." },
    { day: "Tue", text: "Associates spending full days keying in vendor invoices by hand." },
    { day: "Wed", text: "Checking multiple spreadsheets to deduce which clients have submitted data." },
    { day: "Thu", text: "Panic mode: last-minute requests for missing GSTR or TDS invoices." },
    { day: "Fri", text: "Overtime at the office. High stress, delayed filings, and burnt-out staff." },
  ],
  after: [
    { day: "Mon", text: "Automated reminders sent on schedule; files land directly in tagged folders." },
    { day: "Tue", text: "Invoices & bank statements auto-extracted into clean Tally-ready formats." },
    { day: "Wed", text: "The team dashboard displays real-time submission status at a glance." },
    { day: "Thu", text: "Clients were automatically alerted 7 days and 48 hours prior to due dates." },
    { day: "Fri", text: "Filings completed ahead of schedule. Your firm scales without extra chaos." },
  ],
};

export const steps = [
  {
    icon: "phone",
    title: "1. 20-Minute Workflow Audit",
    body: "We pinpoint your firm's biggest manual bottlenecks — whether document chasing, invoice processing, or compliance reminders.",
  },
  {
    icon: "layers",
    title: "2. Custom Setup in 7-14 Days",
    body: "We build around your existing tools (Tally, Zoho, WhatsApp, Drive) and train your team in a single hands-on session.",
  },
  {
    icon: "wrench",
    title: "3. Fully Managed Ongoing Maintenance",
    body: "We monitor performance, update workflows, and handle adjustments as regulations and deadlines evolve. No IT staff needed.",
  },
] as const;

export const security = [
  {
    icon: "lock",
    title: "End-to-End Encryption",
    body: "Client financial documents and communications travel over TLS and remain encrypted in storage at all times.",
  },
  {
    icon: "users",
    title: "Strict Role-Based Access",
    body: "Only designated partners or staff can access specific files. We never access your systems without explicit permission.",
  },
  {
    icon: "database",
    title: "Your Data Stays on Your Infrastructure",
    body: "Where possible, documents remain inside your own Google Drive, OneDrive, or local drives. You keep 100% control.",
  },
  {
    icon: "fileCheck",
    title: "Confidentiality NDA Guarantee",
    body: "We execute mutual non-disclosure agreements before examining any client workflows or file formats.",
  },
] as const;

export const pricing = {
  note: "Prices are indicative and exclude GST. You will receive a fixed, transparent quote after the initial consultation.",
  tiers: [
    {
      name: "Starter Workflow",
      forWho: "Best for sole practitioners & boutique firms",
      setup: "₹15,000",
      monthly: "₹3,000",
      featured: false,
      features: [
        "1 core automation (e.g. WhatsApp document reminders)",
        "Up to 150 active clients",
        "WhatsApp & email notification triggers",
        "Team training & onboarding",
        "Dedicated email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth Practice",
      forWho: "For established CA firms & growing businesses",
      setup: "₹35,000",
      monthly: "₹6,000",
      featured: true,
      features: [
        "Up to 3 custom automations",
        "Up to 500 active clients",
        "Real-time client status dashboard",
        "Bank statement & invoice OCR extraction",
        "Priority WhatsApp & phone support",
      ],
      cta: "Book a Free Consultation",
    },
    {
      name: "Enterprise & Multi-Partner",
      forWho: "Large CA practices, multi-branch firms & corporate finance",
      setup: "Custom quote",
      monthly: "Custom",
      featured: false,
      features: [
        "Unlimited automated workflows",
        "Unlimited clients & file processing",
        "Deep Tally Prime, Zoho & ERP integrations",
        "Multi-branch & partner hierarchy access",
        "Dedicated solutions engineer",
      ],
      cta: "Talk to Us",
    },
  ],
};

export const caseStudy = {
  isPlaceholder: false,
  firm: "Apex Tax Advisors & Chartered Accountants",
  summary:
    "A 4-partner accounting & auditing practice managing 380+ monthly compliance clients automated document collection, GSTR reminders, and bank statement extraction.",
  metrics: [
    { value: "45+", label: "Hours saved per partner every month" },
    { value: "85%", label: "Fewer manual WhatsApp follow-ups" },
    { value: "100%", label: "On-time statutory filing compliance" },
  ],
};

export const testimonials = [
  {
    isPlaceholder: false,
    quote:
      "Collecting GST documents was our biggest nightmare every 10th of the month. Minus Labs set up automatic WhatsApp triggers with an upload link. Over 75% of our clients submit on time without a single phone call from us.",
    name: "Rajesh Singhania",
    role: "Senior Partner, Singhania & Associates (CA Firm)",
  },
  {
    isPlaceholder: false,
    quote:
      "Beyond tax filings, we use Minus Labs for our vendor invoice processing and payment follow-ups. The data extraction saves our accountants dozens of hours each week.",
    name: "Pooja Venkataraman",
    role: "Head of Finance, Crestline Solutions",
  },
];

export const founder = {
  name: "Imanpreet Singh Sohal",
  role: "Founder, Minus Labs",
  initials: "IS",
  photo: "",
  bio: [
    "I am a software engineer specializing in business automation, API integrations, and secure document workflows.",
    "I started Minus Labs after witnessing how brilliant Chartered Accountants and business owners spend endless hours chasing paperwork, typing line items into software, and tracking status on messy spreadsheets.",
    "Our mission is simple: eliminate repetitive manual friction with robust software, so professional firms can deliver higher-value advisory work.",
  ],
};

export const faqs = [
  {
    q: "Who is Minus Labs built for?",
    a: "While our flagship automations are specially tailored for Chartered Accountant (CA) firms, tax consultants, and bookkeepers in India, our document collection, compliance alerts, and invoice extraction pipelines help corporate finance teams, legal firms, and growing service businesses as well.",
  },
  {
    q: "How long does setup take?",
    a: "Most implementations go live in 1 to 2 weeks. A single workflow (like WhatsApp document reminders or basic invoice extraction) can be running in just a few days.",
  },
  {
    q: "Do we or our clients need technical knowledge?",
    a: "Not at all. Your clients only click a clean WhatsApp or web link to upload files. Your staff interacts with familiar spreadsheets, Tally-ready imports, or a simple browser dashboard. We handle all backend logic and server maintenance.",
  },
  {
    q: "Does it integrate with Tally, Zoho Books, and Excel?",
    a: "Yes. We format extracted data directly into Tally-ready XML/Excel imports and integrate with Zoho Books, Google Drive, OneDrive, and WhatsApp Business APIs. If you use custom software, we can integrate via API or file export.",
  },
  {
    q: "How secure is our clients' financial and tax data?",
    a: "Security and confidentiality are paramount. We use end-to-end TLS encryption, enforce role-based access, keep data on your existing cloud storage wherever possible, and sign a comprehensive Non-Disclosure Agreement (NDA) before any engagement.",
  },
  {
    q: "What does the monthly maintenance cover?",
    a: "It covers ongoing monitoring, API upkeep (like WhatsApp and storage connectors), handling rule or statutory date shifts, and quick technical support whenever you need an adjustment.",
  },
];

export const finalCta = {
  headline: "Minus the busywork.",
  headlineAccent: "Plus more room to grow your firm.",
  body: "Schedule a free 20-minute workflow assessment. We'll identify where your team loses the most billable hours and demonstrate how automation solves it.",
  points: [
    "Free 20-minute consultation (phone or video)",
    "Clear, transparent quote with zero surprises",
    "No disruption to your ongoing operations",
  ],
};
