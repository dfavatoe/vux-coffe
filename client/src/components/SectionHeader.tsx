import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeader({ title, subtitle, className, dark = false }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-20", className)}>
      <h2 className={cn(
        "text-4xl md:text-6xl font-display uppercase font-bold tracking-tight mb-4",
        dark ? "text-white" : "text-black"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-serif text-lg md:text-xl italic max-w-2xl",
          dark ? "text-neutral-400" : "text-neutral-600"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-24 mt-6",
        dark ? "bg-white" : "bg-black"
      )} />
    </div>
  );
}
