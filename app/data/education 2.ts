export type Education = {
  id: string;
  school: string;
  degree: string;
  period: { start: string; end: string };
  description?: string;
  honors?: string;
};

export const EDUCATION: Education[] = [
  {
    id: "but",
    school: "IUT2 de Grenoble",
    degree: "BUT Informatique",
    period: { start: "2020", end: "2024" },
    description:
      "Parcours Réalisation d'Applications : Conception, Développement, Validation",
  },
  {
    id: "bac",
    school: "Lycée Champollion",
    degree: "Baccalauréat Scientifique",
    period: { start: "2017", end: "2020" },
    honors: "Mention Bien",
    description: "Spécialités : Mathématiques, Physique-Chimie",
  },
];
