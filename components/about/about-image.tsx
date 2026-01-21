import Image from "next/image";

export function AboutImage() {
  return (
    <div className="relative w-full h-full min-h-[600px] lg:min-h-[700px] rounded-2xl overflow-hidden bg-muted/20 border border-border/50 shadow-lg">
      <Image
        src="/poker.jpg"
        alt="Poker game in progress on a green felt table"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
      {/* Decorative overlay elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
