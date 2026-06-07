export type TechCategory =
  | "languages"
  | "frontend"
  | "backend"
  | "data-ai"
  | "databases"
  | "devops";

export type TechStack = {
  key: string;
  title: string;
  href: string;
  category: TechCategory;
  localIcon?: string;
  whiteOnDark?: boolean;
};

export const TECH_CATEGORIES: { key: TechCategory; label: string }[] = [
  { key: "languages", label: "Langages" },
  { key: "frontend", label: "Front & UI" },
  { key: "backend", label: "Back & API" },
  { key: "data-ai", label: "Data & IA" },
  { key: "databases", label: "Bases de données" },
  { key: "devops", label: "DevOps" },
];

export const TECH_STACK: TechStack[] = [
  // Langages
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", category: "languages" },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "languages" },
  { key: "python", title: "Python", href: "https://www.python.org/", category: "languages" },
  { key: "php", title: "PHP", href: "https://www.php.net/", category: "languages" },
  { key: "java", title: "Java", href: "https://www.java.com/", category: "languages", localIcon: "/java.png" },
  { key: "cplusplus", title: "C++", href: "https://isocpp.org/", category: "languages" },
  { key: "html5", title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", category: "languages" },
  { key: "css", title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", category: "languages" },

  // Front & UI
  { key: "react", title: "React", href: "https://react.dev/", category: "frontend" },
  { key: "nextdotjs", title: "Next.js", href: "https://nextjs.org/", category: "frontend", whiteOnDark: true },
  { key: "angular", title: "Angular", href: "https://angular.io/", category: "frontend", whiteOnDark: true },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", category: "frontend" },
  { key: "bootstrap", title: "Bootstrap", href: "https://getbootstrap.com/", category: "frontend" },

  // Back & API
  { key: "nodedotjs", title: "Node.js", href: "https://nodejs.org/", category: "backend" },
  { key: "fastapi", title: "FastAPI", href: "https://fastapi.tiangolo.com/", category: "backend" },
  { key: "symfony", title: "Symfony", href: "https://symfony.com/", category: "backend", whiteOnDark: true },
  { key: "codeigniter", title: "CodeIgniter", href: "https://codeigniter.com/", category: "backend" },

  // Data & IA
  { key: "scikitlearn", title: "scikit-learn", href: "https://scikit-learn.org/", category: "data-ai", whiteOnDark: true },
  { key: "plotly", title: "Plotly Dash", href: "https://dash.plotly.com/", category: "data-ai" },
  { key: "langgraph", title: "LangGraph", href: "https://www.langchain.com/langgraph", category: "data-ai", localIcon: "/langgraph_logo.svg" },
  { key: "ollama", title: "Ollama", href: "https://ollama.com/", category: "data-ai", whiteOnDark: true },
  { key: "elasticsearch", title: "Elasticsearch", href: "https://www.elastic.co/elasticsearch", category: "data-ai" },

  // Bases de données
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/", category: "databases" },
  { key: "mysql", title: "MySQL", href: "https://www.mysql.com/", category: "databases" },
  { key: "mariadb", title: "MariaDB", href: "https://mariadb.org/", category: "databases" },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", category: "databases" },

  // DevOps
  { key: "docker", title: "Docker", href: "https://www.docker.com/", category: "devops" },
  { key: "git", title: "Git", href: "https://git-scm.com/", category: "devops" },
  { key: "gitlab", title: "GitLab CI/CD", href: "https://docs.gitlab.com/ee/ci/", category: "devops", localIcon: "/gitlab_logo.webp" },
];
