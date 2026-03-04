"use client";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center space-y-4 mb-12 lg:mb-16">
      {tag && (
        <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wide">
          {tag}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
