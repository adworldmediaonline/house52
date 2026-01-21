export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface GalleryContent {
  label: string;
  title: string;
  images: GalleryImage[];
}

export const galleryContent: GalleryContent = {
  label: "Our Gallery",
  title: "Captured Moments from Players & Members",
  images: [
    {
      id: "1",
      src: "/images/landing/gallery/g-1.webp",
      alt: "Poker game moment with cards and chips",
    },
    {
      id: "2",
      src: "/images/landing/gallery/g-2.webp",
      alt: "Close-up of poker table with cards and chips",
    },
    {
      id: "3",
      src: "/images/landing/gallery/g-3.webp",
      alt: "Poker table scene with players and cards",
    },
    {
      id: "4",
      src: "/images/landing/gallery/g-4.webp",
      alt: "Poker game in progress with chips and cards",
    },
    {
      id: "5",
      src: "/images/landing/gallery/g-5.webp",
      alt: "Poker table with cards and gaming elements",
    },
    {
      id: "6",
      src: "/images/landing/gallery/g-6.webp",
      alt: "Poker game moment with cards and chips",
    },
    {
      id: "7",
      src: "/images/landing/gallery/g-7.webp",
      alt: "Poker table scene with players and cards",
    },
    {
      id: "8",
      src: "/images/landing/gallery/g-8.webp",
      alt: "Poker game moment with cards and chips",
    },
  ],
};
