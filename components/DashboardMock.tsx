import { Check, WhatsApp, FileText, ArrowRight } from "./Icons";

type Status = "Filed" | "Received" | "Pending";

const rows: { name: string; type: string; status: Status; note: string }[] = [
  { name: "Sharma & Partners (CA)", type: "GSTR-3B & 1", status: "Filed", note: "Filing completed on 08 Oct" },
  { name: "Mehta Textiles Ltd", type: "Bank & Invoices", status: "Received", note: "24 invoices OCR extracted" },
  { name: "Apex Healthcare Clinic", type: "TDS 26Q", status: "Pending", note: "Auto-reminder sent 2h ago" },
  { name: "Gupta Industrial Works", type: "GSTR-3B", status: "Received", note: "Bank stmt uploaded to Drive" },
  { name: "Kapoor Exports & Logistics", type: "Advance Tax", status: "Filed", note: "Challan verified & filed" },
  { name: "Reddy Infrastructure", type: "Monthly Audit", status: "Pending", note: "WhatsApp reminder in 24h" },
];

const badge: Record<Status, string> = {
  Filed: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25",
  Received: "bg-sky-500/15 text-sky-200 border border-sky-500/25",
  Pending: "bg-coral/20 text-coral border border-coral/30",
};

const dot: Record<Status, string> = {
  Filed: "bg-emerald-400",
  Received: "bg-sky-400",
  Pending: "bg-coral",
};

export default function DashboardMock() {
  return (
    <figure className="relative mx-auto w-full max-w-[580px]">
      <figcaption className="sr-only">
        Minus Labs live workflow dashboard showing real-time client submission statuses and compliance tracking.
      </figcaption>

      {/* Main card with frosted glass & navy shadow */}
      <div className="relative rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-2xl overflow-hidden text-white">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-2 rounded-full bg-white/10 px-3 py-0.5 text-[11px] font-mono text-white/70">
              minuslabs.in/portal
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/20 px-2.5 py-0.5 text-[11px] font-semibold text-coral border border-coral/30">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Live Sync
          </span>
        </div>

        <div className="p-5 sm:p-6">
          {/* Card Title & Due Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-display text-base font-bold text-white">Firm Compliance Command</p>
              <p className="text-xs text-white/60">September Filings & Document Pipeline</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-right">
              <span className="block text-[10px] uppercase tracking-wider text-white/50">Next Major Due Date</span>
              <span className="text-xs font-semibold text-coral">GST & TDS · 20 Oct</span>
            </div>
          </div>

          {/* Quick Metrics (Tidewell inspired cards) */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="font-display text-2xl font-bold text-emerald-300">128</p>
              <p className="mt-0.5 text-[11px] text-white/70">Filed & Done</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="font-display text-2xl font-bold text-sky-300">46</p>
              <p className="mt-0.5 text-[11px] text-white/70">Docs Received</p>
            </div>
            <div className="rounded-2xl border border-coral/30 bg-coral/10 p-3">
              <p className="font-display text-2xl font-bold text-coral">19</p>
              <p className="mt-0.5 text-[11px] text-coral/90">Pending Action</p>
            </div>
          </div>

          {/* Multi-segment progress bar */}
          <div className="mt-3.5 flex h-2 overflow-hidden rounded-full bg-white/10">
            <span className="h-full bg-emerald-400 transition-all" style={{ width: "66%" }} />
            <span className="h-full bg-sky-400 transition-all" style={{ width: "24%" }} />
            <span className="h-full bg-coral transition-all" style={{ width: "10%" }} />
          </div>

          {/* Client List */}
          <ul className="mt-4 divide-y divide-white/10 rounded-2xl border border-white/10 bg-black/15 overflow-hidden">
            {rows.map((r) => (
              <li key={r.name} className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-white/5 transition-colors">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[11px] font-bold text-white/80">
                  {r.name
                    .split(" ")
                    .filter((w) => /^[A-Z]/.test(w))
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-semibold text-white/95">{r.name}</p>
                  <p className="truncate text-[11px] text-white/55">
                    {r.type} · {r.note}
                  </p>
                </div>
                <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${badge[r.status]}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${dot[r.status]}`} />
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating notification badge (Tidewell style) */}
      <div
        aria-hidden="true"
        className="toast-in absolute -bottom-6 -left-3 sm:-left-6 flex max-w-[280px] items-center gap-3 rounded-2xl border border-white/20 bg-[#14213D]/95 p-3.5 shadow-2xl backdrop-blur-md text-white"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
          <WhatsApp className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[12px] font-bold text-white">
            Auto-Reminders Dispatched <Check className="h-3.5 w-3.5 text-coral" strokeWidth={3} />
          </p>
          <p className="text-[11px] text-white/65">19 clients notified with 1-click upload link</p>
        </div>
      </div>
    </figure>
  );
}
