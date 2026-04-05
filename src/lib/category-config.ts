import type { Story } from "@/lib/content";

type CategoryConfig = {
  image: string;
  eyebrow: string;
  cue: string;
  accentClass: string;
  tintClass: string;
};

export const categoryConfig: Record<Story["category"], CategoryConfig> = {
  AI: {
    image: "/visuals/ai-grid.svg",
    eyebrow: "Systems",
    cue: "Models, infrastructure, and deployment patterns",
    accentClass: "text-[#a7653d]",
    tintClass: "bg-[#efe0d0]",
  },
  Geopolitics: {
    image: "/visuals/geopolitics-lines.svg",
    eyebrow: "Statecraft",
    cue: "Power shifts, policy moves, and strategic risk",
    accentClass: "text-[#5c6a8f]",
    tintClass: "bg-[#e5e9ef]",
  },
  Startups: {
    image: "/visuals/startups-rise.svg",
    eyebrow: "Momentum",
    cue: "Capital, company formation, and market appetite",
    accentClass: "text-[#6b7c54]",
    tintClass: "bg-[#ece6d4]",
  },
};
