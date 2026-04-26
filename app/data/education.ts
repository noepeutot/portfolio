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
    id: "master",
    school: "Université Grenoble Alpes",
    degree: "Master Mathématiques et informatique appliquées aux sciences humaines et sociales (MIASHS)",
    period: { start: "2024", end: "2026" },
    description: "Parcours Informatique et Cognition",
  },
  {
    id: "but",
    school: "IUT2 de Grenoble",
    degree: "BUT Informatique",
    period: { start: "2021", end: "2024" },
    description:
      "Parcours Réalisation d'Applications : Conception, Réalisation et Validation",
  },
  {
    id: "bac",
    school: "Lycée Champollion",
    degree: "Baccalauréat Général",
    period: { start: "2018", end: "2021" },
    honors: "Mention Bien",
    description: "Spécialités : Mathématiques, Physique-Chimie",
  },
];
