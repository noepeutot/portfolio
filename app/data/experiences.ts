export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: { start: string; end?: string };
  employmentType?: string;
  description?: string;
  icon?: "code" | "education" | "business";
  skills?: string[];
  images?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  positions: ExperiencePosition[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: "me-group",
    companyName: "ME GROUP GSS — Échirolles",
    positions: [
      {
        id: "1",
        title: "Développeur Full-Stack — Stagiaire M2",
        employmentPeriod: { start: "02.2026" },
        employmentType: "Stage",
        icon: "code",
        description:
          "Solution de maintenance prédictive pour optimiser les tournées de réapprovisionnement d'un parc de 35 000+ machines et réduire les pertes.\n\n- Pipeline ETL de nettoyage et génération de séries temporelles (Python, MariaDB)\n- Modèle ML de prédiction du taux de consommation journalier (scikit-learn, gradient boosting)\n- API asynchrone d'entraînement et de prédiction (FastAPI)\n- Interface de visualisation et de pilotage du pipeline (React, TypeScript, Tailwind)\n- Conteneurisation Docker et déploiement Kubernetes avec CI/CD GitLab",
        skills: [
          "Python",
          "MariaDB",
          "scikit-learn",
          "FastAPI",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Docker",
          "Kubernetes",
          "GitLab CI/CD",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "lig",
    companyName:
      "LIG (Laboratoire d'Informatique de Grenoble) — Saint-Martin-d'Hères",
    positions: [
      {
        id: "1",
        title: "Développeur Web Full-Stack — Stagiaire M1",
        employmentPeriod: { start: "05.2025", end: "06.2025" },
        employmentType: "Stage",
        icon: "code",
        description:
          "Application web back-office pour la gestion de parcours d'apprentissage adaptatifs, développée en binôme avec 2 chercheurs en didactique.\n\n- Développement des interfaces (Python, Dash, Cytoscape)\n- Modélisation et gestion de la base de données (MongoDB)\n- Déploiement production sur serveur Linux (Nginx, Gunicorn)",
        skills: [
          "Python",
          "Dash",
          "Cytoscape",
          "MongoDB",
          "Linux",
          "Nginx",
          "Gunicorn",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "g2elab",
    companyName:
      "G2Elab (Laboratoire de Génie Électrique de Grenoble) — Grenoble",
    positions: [
      {
        id: "1",
        title: "Développeur Web Full-Stack — Stagiaire BUT3",
        employmentPeriod: { start: "03.2024", end: "06.2024" },
        employmentType: "Stage",
        icon: "code",
        description:
          "Refonte complète d'un trombinoscope interne obsolète, incluant back-office de modération et synchronisation du personnel.\n\n- Développement full-stack en architecture MVC (PHP, CodeIgniter, Bootstrap, jQuery, MySQL)\n- Intégration de l'API SILOSE pour la synchronisation des données du personnel\n- Authentification LDAP (Active Directory) et système de rôles pour le workflow de validation",
        skills: ["PHP", "CodeIgniter", "Bootstrap", "jQuery", "MySQL", "LDAP"],
        images: [
          "/projects/trombi/PageAccueil.png",
          "/projects/trombi/page_profile.png",
          "/projects/trombi/page_modification.png",
          "/projects/trombi/page_login.png",
          "/projects/trombi/dashboard.png",
          "/projects/trombi/users.png",
          "/projects/trombi/moderation.png",
          "/projects/trombi/modearation_en_attente.png",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "cermav",
    companyName:
      "CERMAV (Centre de Recherches sur les Macromolécules Végétales) — Gières",
    positions: [
      {
        id: "1",
        title: "Développeur Web Full-Stack — Stagiaire BUT2",
        employmentPeriod: { start: "04.2023", end: "06.2023" },
        employmentType: "Stage",
        icon: "code",
        description:
          "Application web de recherche métagénomique pour des chercheurs en biologie, explorant une base de 600+M séquences génomiques.\n\n- Maquettage et refonte de l'interface, développement d'un panel admin sécurisé (PHP, MySQL, Python)\n- Intégration de l'outil BLAST via SequenceServer (Apache)\n- Pipeline de création de bases de données BLAST sur 600 Go de données FASTA",
        skills: ["PHP", "MySQL", "Python", "BLAST", "SequenceServer", "Apache"],
        images: [
          "/projects/mappul/Recherche.png",
          "/projects/mappul/blast.png",
          "/projects/mappul/backoffice.png",
        ],
        isExpanded: true,
      },
    ],
  },
];
