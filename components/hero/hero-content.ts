export interface HeroContent {
  headline: {
    part1: string;
    part2: string;
    part3: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export const heroContent: HeroContent = {
  headline: {
    part1: "Multiple Games",
    part2: "Every Day",
    part3: "House 52",
  },
  description:
    "Our tables welcome players of all skill levels, from newcomers to experienced professionals. Whether you prefer relaxed low-stakes sessions or competitive high-energy games, you'll find the perfect match. Our friendly dealers, welcoming atmosphere, and the excitement of every hand create an unforgettable experience. Join us and discover why House 52 is the premier destination for live poker in the region.",
  cta: {
    label: "Register Now",
    href: "/register",
  },
};
