import { WhoWeAreSectionImage } from "./who-we-are-section-image";
import { WhoWeAreSectionItem } from "./who-we-are-section-item";
import { whoWeAreSectionContent } from "./who-we-are-section-content";

export function WhoWeAreSection() {
  const { label, brandInfo, items } = whoWeAreSectionContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <WhoWeAreSectionImage />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Label */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </p>
              <div className="w-12 h-0.5 bg-accent rounded-full" />
            </div>

            {/* Brand Info */}
            <p className="text-sm sm:text-base text-muted-foreground italic">
              {brandInfo}
            </p>

            {/* Items */}
            <div className="space-y-8">
              {items.map((item, index) => (
                <WhoWeAreSectionItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
