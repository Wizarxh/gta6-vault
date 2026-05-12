import { STATUS } from "@/lib/articles";

const STYLES = {
  [STATUS.VERIFIED]: {
    text: "text-emerald-300",
    border: "border-emerald-400/40",
    bg: "bg-emerald-400/10",
    dot: "bg-emerald-400",
  },
  [STATUS.RUMOR]: {
    text: "text-vc-yellow",
    border: "border-vc-yellow/40",
    bg: "bg-vc-yellow/10",
    dot: "bg-vc-yellow",
  },
  [STATUS.DEBUNKED]: {
    text: "text-vc-pink",
    border: "border-vc-pink/40",
    bg: "bg-vc-pink/10",
    dot: "bg-vc-pink",
  },
};

export default function StatusBadge({ status, size = "sm" }) {
  const s = STYLES[status] ?? STYLES[STATUS.RUMOR];
  const pad =
    size === "lg"
      ? "px-3 py-1.5 text-xs"
      : "px-2.5 py-1 text-[10px]";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${s.border} ${s.bg} ${s.text} ${pad} font-mono uppercase tracking-[0.2em]`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}
