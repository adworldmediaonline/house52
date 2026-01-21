import { InfoCard } from "./info-card";
import { FeatureCard } from "./feature-card";
import { FeaturesImage } from "./features-image";
import { featuresContent } from "./features-content";

export function Features() {
  const { locationInfo, featureCards } = featuresContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Location Info */}
          <div className="space-y-6">
            {locationInfo.map((info) => (
              <InfoCard key={info.label} info={info} />
            ))}
          </div>

          {/* Middle Column - Image */}
          <div className="hidden lg:block">
            <FeaturesImage />
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {featureCards.map((card) => (
              <FeatureCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
