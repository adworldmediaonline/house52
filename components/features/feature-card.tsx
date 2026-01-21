import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FeatureCard as FeatureCardType } from "./features-content";

interface FeatureCardProps {
  card: FeatureCardType;
}

export function FeatureCard({ card }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg",
        card.isHighlighted
          ? "bg-accent border-accent/50 text-accent-foreground"
          : "bg-card border-border/50"
      )}
    >
      {/* Decorative Number */}
      <div
        className={cn(
          "absolute bottom-4 right-4 text-8xl font-bold opacity-10 select-none pointer-events-none",
          card.isHighlighted ? "text-accent-foreground" : "text-foreground"
        )}
      >
        {card.number}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3
          className={cn(
            "text-2xl font-bold mb-4",
            card.isHighlighted ? "text-accent-foreground" : "text-foreground"
          )}
        >
          {card.title}
        </h3>
        <p
          className={cn(
            "text-base leading-relaxed mb-6",
            card.isHighlighted
              ? "text-accent-foreground/90"
              : "text-muted-foreground"
          )}
        >
          {card.description}
        </p>
        <Link
          href={card.cta.href}
          className={cn(
            "inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide transition-colors group/link",
            card.isHighlighted
              ? "text-accent-foreground hover:text-accent-foreground/80"
              : "text-primary hover:text-primary/80"
          )}
        >
          {card.cta.label}
          <ArrowRightIcon className="size-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
