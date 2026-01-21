import { StatItem } from "./stat-item";
import { statsContent } from "./stats-content";

export function Stats() {
  const { stats } = statsContent;

  return (
    <section className="py-16 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
