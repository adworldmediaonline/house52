interface WhoWeAreSectionItemProps {
  item: {
    heading: string;
    content: string;
  };
}

export function WhoWeAreSectionItem({ item }: WhoWeAreSectionItemProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground uppercase tracking-tight">
        {item.heading}
      </h3>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
        {item.content}
      </p>
    </div>
  );
}
