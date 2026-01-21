import { HeroBackground } from "./hero-background";
import { HeroCta } from "./hero-cta";
import { heroContent } from "./hero-content";

export function Hero() {
  const { headline, description, cta } = heroContent;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-24 overflow-hidden">
      <HeroBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <div className="space-y-2 mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[1.1]">
              <span className="block text-foreground">{headline.part1}</span>
              <span className="block text-accent">{headline.part2}</span>
              <span className="block text-foreground">{headline.part3}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
            {description}
          </p>

          {/* CTA */}
          <HeroCta label={cta.label} href={cta.href} />
        </div>
      </div>
    </section>
  );
}
