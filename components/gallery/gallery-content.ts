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
      src: "/poker.jpg",
      alt: "Four aces held in hand with poker chips in background",
    },
    {
      id: "2",
      src: "/poker.jpg",
      alt: "Close-up of poker table with cards, chips, and wine glass",
    },
    {
      id: "3",
      src: "/poker.jpg",
      alt: "Dice and poker chips on green felt table",
    },
    {
      id: "4",
      src: "/poker.jpg",
      alt: "Multiple hands playing poker with cocktails",
    },
    {
      id: "5",
      src: "/poker.jpg",
      alt: "Overhead view of poker table with dealer button",
    },
    {
      id: "6",
      src: "/poker.jpg",
      alt: "Stack of cards with royal flush of hearts",
    },
    {
      id: "7",
      src: "/poker.jpg",
      alt: "Tattooed hand reaching for cards on poker table",
    },
    {
      id: "8",
      src: "/poker.jpg",
      alt: "Four aces fanned out with colorful poker chips",
    },
  ],
};
