import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", className)}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          <span className="section-label">{eyebrow}</span>
        </div>
      )}
      <h2 className="group/title inline-flex text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] animated-underline transition-all duration-300 hover:text-gradient hover:tracking-[-0.02em]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl text-[15px] leading-relaxed">{description}</p>
      )}
    </div>
  );
}
