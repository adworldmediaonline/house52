import { WhoWeAreImage } from "./who-we-are-image";
import { whoWeAreContent } from "./who-we-are-content";

export function WhoWeAre() {
  const { label, title, paragraphs } = whoWeAreContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <WhoWeAreImage />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </p>
              <div className="w-12 h-0.5 bg-accent rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight leading-[1.1]">
              {title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
