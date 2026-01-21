interface StatItemProps {
  stat: {
    value: string;
    label: string;
  };
}

export function StatItem({ stat }: StatItemProps) {
  return (
    <div className="text-center space-y-2">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
        {stat.value}
      </div>
      <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}
