import Link from "next/link";

type Variant = "primary" | "secondary" | "gold" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  "aria-label"?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1b6ca8] text-white hover:bg-[#2e85c8] focus-visible:ring-[#1b6ca8]",
  secondary:
    "bg-transparent border border-[#1e2d3d] text-[#f0f4f8] hover:border-[#1b6ca8] hover:text-[#29abe2] focus-visible:ring-[#1b6ca8]",
  gold: "bg-orange text-warm-white hover:opacity-90 focus-visible:ring-orange",
  ghost:
    "bg-transparent text-[#8fa3b8] hover:text-[#f0f4f8] focus-visible:ring-[#1b6ca8]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[44px]",
  md: "px-6 py-3 text-sm min-h-[44px]",
  lg: "px-8 py-4 text-base min-h-[52px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled,
  className = "",
  children,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium tracking-wide rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] disabled:opacity-50 disabled:pointer-events-none";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
