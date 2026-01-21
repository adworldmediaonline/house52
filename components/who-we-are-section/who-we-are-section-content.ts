export interface WhoWeAreSectionItem {
  heading: string;
  content: string;
}

export interface WhoWeAreSectionContent {
  label: string;
  brandInfo: string;
  items: WhoWeAreSectionItem[];
}

export const whoWeAreSectionContent: WhoWeAreSectionContent = {
  label: "Who We Are",
  brandInfo: "House 52 is a brand owned by SSG Skills Arena Private Limited",
  items: [
    {
      heading: "Quick and Easy Entry",
      content:
        "Getting into the action has never been easier. Simply walk in, register your name, and place your buy-in — you'll be seated and playing in minutes. Winnings are paid out right after the game ends, so you can enjoy your rewards without delay.",
    },
    {
      heading: "Fair Play & Transparent Rules",
      content:
        "Every match is run with integrity. Our rules are clear, our dealers are trained professionals, and the atmosphere is designed to give all players a fair and enjoyable experience. We believe the best games are played with a clear head and a balanced approach. That's why we promote responsible gaming, encouraging players to set limits and enjoy the game within their means.",
    },
  ],
};
