import { AboutSection } from "./about-section";
import { AboutImage } from "./about-image";
import { aboutContent } from "./about-content";

export function About() {
  const { title, sections } = aboutContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <AboutImage />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center lg:h-full lg:min-h-[700px] space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground uppercase tracking-wide">
                {title}
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full" />
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <AboutSection key={index} section={section} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
