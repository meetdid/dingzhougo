import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({ title, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={cn(center && "text-center")}>
      <h2 className="bg-gradient-to-r from-primary-500 to-teal-500 bg-clip-text font-serif text-3xl text-transparent md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-ink-300">{subtitle}</p>}
      <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-primary-400 to-accent-400" />
    </div>
  );
}
