import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GalleryImage } from "./gallery-content";

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
}

export function GalleryItem({ image, index }: GalleryItemProps) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl bg-muted/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
    </div>
  );
}
