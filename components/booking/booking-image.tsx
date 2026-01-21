import Image from "next/image";

export function BookingImage() {
  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-2xl overflow-hidden bg-muted/20 border border-border/50 shadow-lg">
      <Image
        src="/poker.jpg"
        alt="Private poker table for family and friends"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Decorative overlay elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
