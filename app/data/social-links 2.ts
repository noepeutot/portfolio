import { USER } from "./user";

export type SocialLink = {
  title: string;
  href: string;
  iconType: "simpleicon" | "lucide" | "image";
  iconKey: string;
  iconSrc?: string;
  color: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    title: "GitHub",
    href: USER.github,
    iconType: "simpleicon",
    iconKey: "github",
    color: "#181717",
  },
  {
    title: "LinkedIn",
    href: USER.linkedin,
    iconType: "image",
    iconKey: "linkedin",
    iconSrc: "/linkedin.webp",
    color: "#0A66C2",
  },
];
