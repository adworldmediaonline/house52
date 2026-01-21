export interface LocationInfo {
  label: string;
  value: string;
  icon: "location" | "clock";
}

export interface FeatureCard {
  id: string;
  number: string;
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
  isHighlighted?: boolean;
}

export interface FeaturesContent {
  locationInfo: LocationInfo[];
  featureCards: FeatureCard[];
}

export const featuresContent: FeaturesContent = {
  locationInfo: [
    {
      label: "Location",
      value: "G/F, Hotel Chhavvi, Sector 104, Hajipur, Noida, Gautam Buddha Nagar, Uttar Pradesh - 201304",
      icon: "location",
    },
    {
      label: "Open Hours",
      value: "Everyday",
      icon: "clock",
    },
  ],
  featureCards: [
    {
      id: "affordable-pricing",
      number: "01",
      title: "Affordable Pricing",
      description:
        "Experience premium poker gaming without breaking the bank. Our competitive pricing structure ensures that both casual players and serious enthusiasts can enjoy high-quality games at accessible rates. We believe exceptional entertainment should be within everyone's reach.",
      cta: {
        label: "Read More",
        href: "/features/affordable-pricing",
      },
    },
    {
      id: "regular-competitions",
      number: "02",
      title: "Regular Competitions",
      description:
        "Join our exciting tournament schedule featuring weekly competitions and special events. Test your skills against players of all levels, compete for impressive prizes, and climb the leaderboards. Whether you're aiming for glory or just love the thrill of competition, there's always an event waiting for you.",
      cta: {
        label: "Read More",
        href: "/features/regular-competitions",
      },
      isHighlighted: true,
    },
  ],
};
