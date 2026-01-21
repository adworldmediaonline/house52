export interface SocialMediaLink {
  platform: string;
  url: string;
  icon: "facebook" | "instagram" | "linkedin" | "pinterest" | "youtube" | "twitter";
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: "location" | "clock" | "phone" | "email";
}

export interface ContactPageContent {
  label: string;
  title: string;
  brandInfo: string;
  description: string;
  contactInfo: ContactInfo[];
  socialMediaLabel: string;
  socialMediaLinks: SocialMediaLink[];
}

export const contactPageContent: ContactPageContent = {
  label: "Get in Touch",
  title: "Contact Us to Get Better Information About Our Service",
  brandInfo: "House 52 is a brand owned by SSG Skills Arena Private Limited",
  description:
    "House 52 operates under the terms of our agreement to offer offline poker games. We are committed to providing a professional, regulated, and enjoyable gaming experience for all our members.",
  contactInfo: [
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
    {
      label: "Phone Number",
      value: "9998070792",
      icon: "phone",
    },
    {
      label: "Drop Us a Line",
      value: "house52noida@gmail.com",
      icon: "email",
    },
  ],
  socialMediaLabel: "Official Social Media",
  socialMediaLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/house.52.noida",
      icon: "facebook",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/house.52.noida/",
      icon: "instagram",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/company/house-52-noida/",
      icon: "linkedin",
    },
    {
      platform: "Pinterest",
      url: "https://www.pinterest.com/house52noida/",
      icon: "pinterest",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@House.52Noida",
      icon: "youtube",
    },
    {
      platform: "Twitter",
      url: "https://x.com/House52Noida",
      icon: "twitter",
    },
  ],
};
