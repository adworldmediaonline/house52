export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface StatsContent {
  stats: StatItem[];
}

export const statsContent: StatsContent = {
  stats: [
    {
      id: "members",
      value: "500+",
      label: "Active Members",
    },
    {
      id: "games",
      value: "1000+",
      label: "Games Played",
    },
    {
      id: "tournaments",
      value: "50+",
      label: "Tournaments Hosted",
    },
    {
      id: "years",
      value: "5+",
      label: "Years of Excellence",
    },
  ],
};
