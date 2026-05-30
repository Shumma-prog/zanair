type BadgeVariant = "default" | "gold" | "blue" | "exclusive";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  default: "bg-[#1a2535] text-[#8fa3b8] border border-[#1e2d3d]",
  gold: "bg-zanair-blue/10 text-zanair-blue border border-zanair-blue/30",
  blue: "bg-zanair-blue/10 text-zanair-blue border border-zanair-blue/30",
  exclusive:
    "bg-zanair-blue/10 text-zanair-blue border border-zanair-blue/30 font-medium",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs tracking-wide uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
