export interface AboutSection {
  heading: string;
  content: string;
}

export interface AboutContent {
  title: string;
  sections: AboutSection[];
}

export const aboutContent: AboutContent = {
  title: "About Us",
  sections: [
    {
      heading: "What is Poker",
      content:
        "Poker is a globally renowned card game that combines skill, strategy, and psychological insight. Unlike games purely based on chance, poker rewards players who think strategically, calculate probabilities, and understand their opponents. Recognized internationally as a skill-based sport, poker has gained legal acceptance in numerous countries, including Thailand. It's a competitive yet social experience that appeals to both casual enthusiasts and professional players. Regulated under gaming authorities, poker continues to grow in popularity across India. At House 52, we deliver this exciting experience in a professional, fair, and welcoming environment where everyone can appreciate the true essence of the game.",
    },
    {
      heading: "Daily Games Happening / Join the Club",
      content:
        "At House 52, the excitement never ends. We host daily poker games with tables available for players of every skill level. Whether you're looking for a relaxed game after work or an intense competitive session, you'll find the perfect table waiting for you. Our community is rapidly expanding, with friendly members who share a genuine passion for the game. Becoming a member grants you access to regular games, exclusive events, and special member benefits. Step into our vibrant poker environment, enhance your skills, and experience the thrill of every hand while being part of the most exciting poker destination in the region.",
    },
  ],
};
