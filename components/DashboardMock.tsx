import { Check, Mail } from "./Icons";

type Status = "Filed" | "Received" | "Pending";

const items: { name: string; task: string; status: Status }[] = [
  { name: "Harper & Co. CPAs", task: "Q3 receipts · 32 entries posted to books", status: "Received" },
  { name: "Bright Dental", task: "Sales tax return · reminder sent today", status: "Pending" },
  { name: "Northside Logistics", task: "Estimated tax · filed & verified", status: "Filed" },
];

const badgeStyles: Record<Status, string> = {
  Filed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  Received: "bg-sky-500/15 text-sky-200 border-sky-500/20",
  Pending: "bg-coral/20 text-coral border-coral/30",
};

export default function DashboardMock() {
  return (
    <figure className="relative ml-auto w-full max-w-[440px]">
      <figcaption className="sr-only">
        Minus Zero automated live chore monitor showing client filing status.
      </figcaption>

      {/* Main minimal frosted glass card (Tidewell inspired with cream tint) */}
      <div className="relative rounded-2xl glass-card-dark p-5 sm:p-6 text-cream shadow-xl">
        <div className="flex items-center justify-between pb-3.5 border-b border-cream/15">
          <div>
            <p className="text-xs font-semibold text-cream/95">Today&apos;s activity</p>
            <p className="text-[11px] text-cream/55">Running automatically</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-coral/15 px-2.5 py-0.5 text-[10px] font-semibold text-coral border border-coral/25">
            <span className="h-1.5 w-1.5 rounded-full bg-coral animate-pulse" />
            Live Sync
          </span>
        </div>

        <div className="mt-4 space-y-2.5">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center justify-between rounded-xl border border-cream/15 bg-cream/[0.05] px-3.5 py-2.5 hover:bg-cream/[0.09] transition-colors"
            >
              <div>
                <p className="text-xs font-semibold text-cream">{it.name}</p>
                <p className="text-[11px] text-cream/60">{it.task}</p>
              </div>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${badgeStyles[it.status]}`}>
                {it.status}
              </span>
            </div>
          ))}
        </div>

        {/* Small Tidewell-inspired pill note */}
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-cream/15 text-[11px]">
          <span className="text-cream/65">Enter data once. Never twice.</span>
          <span className="rounded-full bg-coral/20 border border-coral/30 px-2 py-0.5 font-semibold text-coral text-[10px]">
            100% automated
          </span>
        </div>
      </div>

      {/* Floating reminder toast */}
      <div
        aria-hidden="true"
        className="toast-in absolute -bottom-3 -left-3 flex items-center gap-2.5 rounded-xl glass-card-dark px-3 py-2 text-cream shadow-lg"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral text-white">
          <Mail className="h-3.5 w-3.5" />
        </span>
        <p className="text-[11px] font-medium text-cream/95">
          Payment reminders sent <Check className="inline h-3 w-3 text-coral" strokeWidth={3} />
        </p>
      </div>
    </figure>
  );
}
