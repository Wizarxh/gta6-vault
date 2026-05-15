export default function Badge({ status = "VERIFIED", className = "" }) {
  const statusStyles = {
    VERIFIED: {
      bg: "bg-emerald-500/15",
      text: "text-emerald-300",
      label: "VERIFIED",
    },
    RUMOR: {
      bg: "bg-yellow-500/15",
      text: "text-vc-yellow",
      label: "RUMOR",
    },
    DEBUNKED: {
      bg: "bg-vc-pink/15",
      text: "text-vc-pink",
      label: "DEBUNKED",
    },
  };

  const style = statusStyles[status] || statusStyles.VERIFIED;

  return (
    <span
      className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${style.bg} ${style.text} px-3 py-1 rounded-md inline-block ${className}`}
    >
      {style.label}
    </span>
  );
}
