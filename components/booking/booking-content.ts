export interface BookingContent {
  label: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export const bookingContent: BookingContent = {
  label: "Booking",
  title: "Play with Family & Friends",
  description:
    "Reserve a private poker table at House 52 for your family and friends. Our exclusive Table + Food Packages include delicious snacks and meals, creating the perfect blend of entertainment and hospitality. Whether you're celebrating a special occasion or simply enjoying quality time together, our private tables offer a unique social experience. Gather your loved ones for an evening filled with laughter, strategy, and unforgettable moments around the poker table.",
  cta: {
    label: "Book Now",
    href: "/contact",
  },
};
