export type ProjectResult = {
  text: string;
  highlight?: "award" | "metric";
};

export type Project = {
  id: string;
  title: string;
  period: { start: string; end?: string };
  description: string;
  skills: string[];
  context?: string;
  team?: string;
  link?: string;
  logo?: string;
  images?: string[];
  isExpanded?: boolean;
  missions?: string[];
  role?: string;
  results?: ProjectResult[];
};

export const PROJECTS: Project[] = [
  {
    id: "tron",
    title: "Tron",
    period: { start: "2025", end: "2026" },
    skills: ["Node.js", "JavaScript", "WebSocket", "MongoDB", "Cordova", "HTML/CSS"],
    context: "Master M2 — Programmation Web Client 2 (UGA)",
    team: "5 personnes",
    description:
      "Application web et mobile (Cordova/Android) permettant de jouer à Tron en solo ou en multijoueur (jusqu'à 4 joueurs) en temps réel. Architecture client-serveur avec logique de jeu centralisée côté serveur, communication WebSocket et persistance des comptes, statistiques et historique des parties.",
    missions: [
      "Conception et développement du serveur de jeu en Node.js : logique de jeu, gestion simultanée de plusieurs parties isolées et synchronisation temps réel via WebSocket",
      "Implémentation du système de lobbies et de file d'attente pour le matchmaking multijoueur",
      "Rédaction de la documentation de l'API pour faciliter le développement parallèle entre les équipes front et back",
      "Contributions frontend : développement de la page de lobby, ajustements visuels et fonctionnels lors des phases d'intégration",
      "Coordination technique au sein de l'équipe : gestion des merges et débogage en appui des autres membres",
    ],
    role: "Développeur principal côté serveur et contributeur frontend, avec un rôle de référent technique auprès de l'équipe",
  },
  {
    id: "multimodal-classification",
    title: "Classification multimodale image et son",
    period: { start: "2025", end: "2025" },
    skills: ["Python", "PyTorch", "torchaudio", "Deep Learning", "Matplotlib"],
    context: "Master M2 — Perception multimodale (UGA)",
    team: "1 personne",
    description:
      "Conception d'un système de reconnaissance de chiffres combinant deux sources d'information (images manuscrites et enregistrements vocaux), avec comparaison de deux approches d'intégration des modalités.",
    missions: [
      "Préparation des données : implémentation d'un dataloader personnalisé appariant chaque image à un enregistrement audio du même chiffre, avec mise en cache pour accélérer l'entraînement",
      "Conception et entraînement de deux modèles de deep learning combinant image et audio selon deux stratégies différentes (fusion précoce et fusion tardive)",
      "Analyse comparative des performances des deux approches et discussion de leur capacité de généralisation",
    ],
    results: [
      { text: "Modèle multimodal atteignant ~99,6 % de précision sur le test, contre ~50 % pour le modèle audio seul", highlight: "metric" },
    ],
  },
  {
    id: "baradventure",
    title: "BarAdventure",
    period: { start: "2025", end: "2025" },
    skills: ["Figma", "UX/UI", "Critères de Nielsen", "Tests utilisateurs"],
    context: "Master M1 — Interface Humain-Machine (UGA)",
    team: "5 personnes",
    logo: "/projects/baradventure/logo.png",
    description:
      "Conception ergonomique et centrée utilisateur d'une application mobile facilitant l'organisation spontanée de sorties en groupe. Le projet a couvert le cycle UX/UI complet en deux itérations, de l'étude des besoins initiaux jusqu'aux tests d'utilisabilité sur un prototype interactif.",
    missions: [
      "Conduite d'entretiens auprès du public cible pour modéliser les besoins via la création d'un persona et de scénarios d'usage",
      "Conception de maquettes basse fidélité puis moyenne fidélité intégrant des mécaniques de navigation standards (vote par swipe, carte interactive)",
      "Inspection heuristique du premier prototype selon les critères de Nielsen pour corriger les défaillances de navigation en amont",
      "Élaboration et passation de protocoles de tests utilisateurs pour mesurer le temps d'exécution et les erreurs d'interaction",
    ],
    role: "Lead conception UI",
    results: [
      { text: "Validation des parcours clés auprès de 7 utilisateurs cibles, avec exécution des tâches principales (création de groupe, choix de destination) en moins de 2 minutes", highlight: "metric" },
      { text: "Correction de 6 problèmes d'utilisabilité majeurs identifiés entre les deux itérations du prototype" },
    ],
  },
  {
    id: "beecook",
    title: "Beecook",
    period: { start: "2025", end: "2025" },
    skills: ["PHP", "Laravel", "TailwindCSS", "SQLite"],
    context: "Master M1 — Programmation Web (UGA)",
    team: "3 personnes",
    logo: "/projects/beecook/logo.png",
    description:
      "Développement complet d'un site web de recettes culinaires avec front-office public et back-office administrateur. Projet pédagogique visant à mettre en œuvre l'ensemble du cycle d'une application web Laravel : modélisation des données, CRUD complet, gestion d'uploads médias, système d'authentification multi-rôles et direction artistique soignée.",
    missions: [
      "Conception et développement d'un back-office administrateur complet : gestion des recettes avec uploads médias, gestion des utilisateurs et tableau de bord d'activité",
      "Mise en place d'un système d'authentification et de gestion des rôles à trois niveaux avec protection des routes sensibles",
      "Modélisation d'un système de catégorisation à deux niveaux (catégories prédéfinies et tags libres) intégré au moteur de recherche",
      "Conception et déclinaison d'une direction artistique sur le thème des abeilles : univers visuel, charte graphique et illustrations SVG",
      "Implémentation d'un système de notation et de commentaires",
    ],
  },
  {
    id: "stroop-experiment",
    title: "Plateforme d'expérimentation comportementale",
    period: { start: "2024", end: "2024" },
    skills: ["JavaScript", "HTML", "CSS", "R", "Modèles mixtes"],
    context: "Master M1 — Outils et méthodes en sciences cognitives (UGA)",
    team: "2 personnes",
    description:
      "Développement d'une plateforme web destinée à reproduire en ligne une expérience de psychologie cognitive sur le contrôle cognitif (tâche de Stroop adaptée), publiée par Bundt et al. en 2018.",
    missions: [
      "Conception et développement de l'interface d'expérimentation web : affichage des stimuli, capture des réponses, gestion du consentement et collecte des données démographiques",
      "Implémentation du protocole expérimental : génération contrôlée de 160 essais en 8 blocs, avec deux conditions expérimentales et reprise automatique des essais erronés",
      "Capture des coordonnées de la souris associées à un timestamp pour analyse a posteriori des trajectoires",
      "Analyse statistique des données collectées en R (modèles mixtes) et rédaction d'un rapport confrontant les résultats à l'étude originale",
    ],
    results: [
      { text: "Plateforme fonctionnelle ayant permis la collecte de données auprès de 117 participants recrutés à distance", highlight: "metric" },
    ],
  },
  {
    id: "maze-runner",
    title: "Maze Runner",
    period: { start: "2024", end: "2024" },
    skills: ["JavaScript", "HTML/CSS", "Algorithmes", "Node.js"],
    context: "Master M1 — Intelligence Artificielle (UGA)",
    team: "3 personnes",
    link: "https://github.com/noepeutot/Projet-IA",
    description:
      "Jeu de labyrinthe sur navigateur web avec génération procédurale et résolution algorithmique. Deux modes de jeu : speedrun chronométré et joueur contre IA.",
    missions: [
      "4 algorithmes de génération : Recursive Backtracking, aléatoire, Prim, Kruskal",
      "4 algorithmes de résolution : BFS, DFS, A* (heuristique de Manhattan) et Dijkstra",
      "Mode Player vs IA avec 3 niveaux de difficulté et visualisation temps réel du chemin sur le labyrinthe",
      "Suite de benchmarks Node.js mesurant temps d'exécution, mémoire et nœuds explorés sur labyrinthes 10×10, 50×50 et 100×100",
    ],
    role: "Génération de labyrinthe (Recursive Backtracking, Prim, Kruskal), résolutions BFS, A* et Dijkstra, développement des interfaces et de la suite de benchmarks",
    images: [
      "/projects/maze-runner/demo.gif",
      "/projects/maze-runner/home.png",
      "/projects/maze-runner/game.png",
      "/projects/maze-runner/ai.png",
      "/projects/maze-runner/rules.png",
    ],
  },
  {
    id: "gadi",
    title: "GADI",
    period: { start: "2023", end: "2024" },
    skills: ["Angular", "TypeScript", "Symfony", "PHP", "PostgreSQL", "PHPUnit", "SUS", "Agile"],
    context: "BUT3 — Projet annuel (IUT2 Grenoble)",
    team: "7 personnes",
    logo: "/projects/gadi/logo.jpg",
    description:
      "Refonte complète de GADI, application interne utilisée par les enseignants du département informatique de l'IUT2 Grenoble pour la gestion de leurs ressources et activités pédagogiques : planification des ressources/SAÉ, évaluations, indisponibilités, attribution d'enseignants. L'application existante, en service depuis une décennie, ne prenait plus en compte les évolutions du programme national (notamment l'intégration des SAÉ). Projet mené en méthode Agile.",
    missions: [
      "Recueil des besoins via entretiens individuels avec les enseignants (responsables de ressources, non-responsables, secrétariat)",
      "Maquettage IHM puis développement frontend en architecture single page",
      "Coordination avec l'équipe backend sur la définition des endpoints",
      "Co-conception du schéma relationnel : modélisation unifiée Ressources/SAÉ, multi-responsables par enseignement, planification des séances, fiches d'indisponibilité",
      "Tests utilisateurs SUS auprès des enseignants et itérations IHM en réponse aux retours",
    ],
    role: "Lead frontend et co-concepteur de la base de données",
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
    skills: ["PHP", "PostgreSQL", "PL/pgSQL", "BCrypt", "RGPD", "Node.js", "Socket.io", "THREE.js", "Stripe API"],
    context: "BUT2 — Projet d'équipe (IUT2 Grenoble)",
    team: "6 personnes",
    logo: "/projects/spacecharity/logo.png",
    description:
      "Plateforme web (PWA) d'enchères caritatives en temps réel sur des planètes importées depuis l'API NASA, dans un scénario fictif de reversement à des associations environnementales. Cycle complet couvert : analyse du besoin, conception, développement, tests qualité, déploiement HTTPS et soutenance.",
    missions: [
      "Modélisation complète du schéma relationnel PostgreSQL (utilisateurs multi-rôles, enchères temps réel, traçabilité) avec triggers PL/pgSQL pour la cohérence métier",
      "Import et nettoyage des données depuis l'API NASA Exoplanet Archive",
      "Mise en conformité RGPD : BCrypt, droits BDD restreints par rôle, purge automatique des comptes inactifs",
      "Cartographie et suivi des risques projet via matrice impact × probabilité",
      "Contributions backend en fin de projet pour soutenir l'avancement de l'équipe",
    ],
    role: "Lead base de données, en charge de la gestion des risques projet, avec contributions backend en fin de développement",
    results: [
      { text: "Élu « Meilleur projet du public » au concours interpromotion BUT2 (vote des étudiants)", highlight: "award" },
      { text: "Tests d'utilisabilité SUS auprès de 12 utilisateurs : score moyen 81–88 (« Excellente » sur l'échelle SUS)", highlight: "metric" },
    ],
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
