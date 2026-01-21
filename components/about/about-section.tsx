interface AboutSectionProps {
  section: {
    heading: string;
    content: string;
  };
}

export function AboutSection({ section }: AboutSectionProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-tight">
        {section.heading}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {section.content}
      </p>
    </div>
  );
}
