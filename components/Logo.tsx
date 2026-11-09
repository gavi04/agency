// "Minus Zero" wordmark — the accent bar is the minus sign in coral (#FF6B5B)
export default function Logo({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-display text-[1.25rem] font-extrabold leading-none tracking-tight ${
        onDark ? "text-white" : "text-navy"
      } ${className}`}
    >
      <span aria-hidden="true" className="block h-[4px] w-[18px] rounded-full bg-coral" />
      <span>
        Minus<span className={`font-semibold ${onDark ? "text-white/70" : "text-muted"}`}> Zero</span>
      </span>
    </span>
  );
}
