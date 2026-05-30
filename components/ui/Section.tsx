interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "article" | "div";
  fullWidth?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  as: Tag = "section",
  fullWidth = false,
}: SectionProps) {
  return (
    <Tag id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={fullWidth ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {children}
      </div>
    </Tag>
  );
}
