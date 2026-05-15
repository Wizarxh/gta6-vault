export default function Card({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const baseStyles = "rounded-xl border transition-all duration-300";

  const variants = {
    default: "border-vc-border bg-black/40 backdrop-blur hover:border-vc-pink/40 hover:shadow-[0_8px_24px_rgba(255,107,157,0.1)] hover:-translate-y-0.5",
    elevated: "border-vc-border bg-black/60 backdrop-blur shadow-xl",
    accent: "border-vc-cyan/30 bg-black/40 backdrop-blur hover:border-vc-cyan/60",
    ghost: "border-transparent bg-transparent",
  };

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
