import { site } from "@/content/site";

// Wordmark built from site.name: first word bold, the rest lighter, with a coral accent bar
export default function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const [first, ...others] = site.name.split(" ");
  const rest = others.join(" ");
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-[1.25rem] font-extrabold leading-none tracking-tight ${
        onDark ? "text-white" : "text-navy"
      } ${className}`}
    >
      <span aria-hidden="true" className="block h-[4px] w-[18px] rounded-full bg-coral" />
      <span>
        {first}
        {rest && <span className={`font-semibold ${onDark ? "text-white/70" : "text-muted"}`}> {rest}</span>}
      </span>
    </span>
  );
}
