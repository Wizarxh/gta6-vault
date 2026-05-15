export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles = "font-mono text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vc-cyan disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-vc-pink text-black hover:bg-pink-600 active:scale-95",
    secondary: "border border-vc-cyan text-vc-cyan hover:bg-vc-cyan hover:text-black active:scale-95",
    tertiary: "bg-transparent text-vc-muted hover:text-vc-cyan border border-vc-border",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
