export type TechStack = {
  key: string;
  title: string;
  href: string;
  localIcon?: string;
  whiteOnDark?: boolean;
};

export const TECH_STACK: TechStack[] = [
  { key: "angular", title: "Angular", href: "https://angular.io/", whiteOnDark: true },
  { key: "symfony", title: "Symfony", href: "https://symfony.com/", whiteOnDark: true },
  { key: "codeigniter", title: "CodeIgniter", href: "https://codeigniter.com/" },
  { key: "nextdotjs", title: "Next.js", href: "https://nextjs.org/", whiteOnDark: true },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/" },
  { key: "php", title: "PHP", href: "https://www.php.net/" },
  { key: "html5", title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { key: "css", title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { key: "java", title: "Java", href: "https://www.java.com/", localIcon: "/java.png" },
  { key: "cplusplus", title: "C++", href: "https://isocpp.org/" },
  { key: "python", title: "Python", href: "https://www.python.org/" },
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/" },
  { key: "mysql", title: "MySQL", href: "https://www.mysql.com/" },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/" },
  { key: "git", title: "Git", href: "https://git-scm.com/" },
  { key: "docker", title: "Docker", href: "https://www.docker.com/" },
  { key: "react", title: "React", href: "https://react.dev/" },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { key: "nodedotjs", title: "Node.js", href: "https://nodejs.org/" },
  { key: "fastapi", title: "FastAPI", href: "https://fastapi.tiangolo.com/" },
  { key: "scikitlearn", title: "scikit-learn", href: "https://scikit-learn.org/", whiteOnDark: true },
  { key: "mariadb", title: "MariaDB", href: "https://mariadb.org/" },
  { key: "plotly", title: "Plotly Dash", href: "https://dash.plotly.com/" },
  { key: "kubernetes", title: "Kubernetes", href: "https://kubernetes.io/" },
];
