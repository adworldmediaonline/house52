import { BookingCta } from "./booking-cta";
import { BookingImage } from "./booking-image";
import { bookingContent } from "./booking-content";

export function Booking() {
  const { label, title, description, cta } = bookingContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </p>
              <div className="w-12 h-0.5 bg-accent rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight leading-[1.1]">
              {title}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {description}
            </p>

            {/* CTA */}
            <div className="pt-2">
              <BookingCta label={cta.label} href={cta.href} />
            </div>
          </div>

          {/* Right Column - Image */}
          <div>
            <BookingImage />
          </div>
        </div>
      </div>
    </section>
  );
}
