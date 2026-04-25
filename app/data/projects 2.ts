export type Project = {
  id: string;
  title: string;
  period: { start: string; end?: string };
  description: string;
  skills: string[];
  context?: string;
  team?: string;
  link?: string;
  images?: string[];
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "gadi",
    title: "GADI",
    period: { start: "2023", end: "2024" },
    skills: ["Angular", "TypeScript", "Symfony", "PHP", "PostgreSQL", "PHPUnit", "SUS", "Agile"],
    context: "Projet universitaire — IUT2 Grenoble",
    description:
      "Refonte from-scratch d'une application de gestion pédagogique utilisée depuis ~10 ans par les enseignants du département informatique de l'IUT2 de Grenoble, pour intégrer les Situations d'Apprentissage et d'Évaluation (SAÉ) du nouveau programme national. Projet d'année universitaire en équipe de 7, méthode Agile (sprints de 6 semaines, Jira, GitLab).\n\n- API backend Symfony/PHP avec PostgreSQL, SPA frontend Angular/TypeScript\n- Planification des cours, SAÉ et évaluations avec drag & drop, gestion des intervenants et des indisponibilités\n- Tableau de bord enseignant et back-office de gestion des ressources\n- Mon rôle : co-chef de projet, sous-groupes base de données, front-end et IHM\n- Tests unitaires API (PHPUnit) et tests utilisateurs (SUS)",
    images: [
      "/projects/gadi/TableauDeBord.png",
      "/projects/gadi/Ressource.png",
      "/projects/gadi/Seances.png",
      "/projects/gadi/backofficeRessource.png",
      "/projects/gadi/creationRessource.png",
    ],
  },
  {
    id: "space-charity",
    title: "Space Charity",
    period: { start: "2023", end: "2023" },
    skills: ["PHP", "Node.js", "PostgreSQL", "Socket.io", "THREE.js", "Stripe API", "JavaScript"],
    context: "Projet de 2ème année — BUT Informatique",
    team: "6 personnes",
    description:
      "Application web (PWA) d'enchères caritatives en temps réel sur le thème des exoplanètes, développée à 6 en BUT2. Architecture MVC modulaire développée sans framework central (from-scratch).\n\n- Enchères en direct (anti-collision) gérées via WebSockets grâce à un serveur Node.js/Socket.io qui dialogue avec le back-end PHP 8.2.\n- Génération procédurale des textures (bruit de Perlin) et rendu 3D optimisé via THREE.js.\n- Intégration de paiements sécurisés via l'API Stripe (Webhooks) pour la récolte des dons.\n- Mon rôle : modélisation et gestion complète de la base de données PostgreSQL (import via API de la NASA) et développement back-end.",
    images: [
      "/projects/spacecharity/PageAccueil.png",
      "/projects/spacecharity/planete.png",
      "/projects/spacecharity/classement.png",
      "/projects/spacecharity/login.png",
      "/projects/spacecharity/TableauDeBord.png",
      "/projects/spacecharity/GestionEditions.png",
    ],
  },
];
