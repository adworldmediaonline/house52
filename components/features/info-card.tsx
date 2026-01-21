import { MapPinIcon, ClockIcon } from "lucide-react";
import type { LocationInfo } from "./features-content";

interface InfoCardProps {
  info: LocationInfo;
}

const iconMap = {
  location: MapPinIcon,
  clock: ClockIcon,
};

export function InfoCard({ info }: InfoCardProps) {
  const Icon = iconMap[info.icon];

  return (
    <div className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50">
      <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 border border-primary/20">
        <Icon className="size-5 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-foreground mb-1">
          {info.label}
        </h3>
        <p className="text-sm text-muted-foreground">{info.value}</p>
      </div>
    </div>
  );
}
