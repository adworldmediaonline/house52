import { GalleryItem } from "./gallery-item";
import { galleryContent } from "./gallery-content";

export function Gallery() {
  const { label, title, images } = galleryContent;

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex flex-col items-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {label}
            </p>
            <div className="w-12 h-0.5 bg-accent rounded-full mt-2" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-tight">
            {title}
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
