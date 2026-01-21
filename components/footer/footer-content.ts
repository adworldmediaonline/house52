export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  quickLinks: FooterLink[];
  contact: {
    email: string;
    phone: string;
    address: string[];
  };
}

export const footerContent: FooterContent = {
  quickLinks: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "house52noida@gmail.com",
    phone: "9998070792",
    address: [
      "G/F, Hotel Chhavvi",
      "Sector 104, Hajipur",
      "Noida, Gautam Buddha Nagar",
      "Uttar Pradesh - 201304",
    ],
  },
};
