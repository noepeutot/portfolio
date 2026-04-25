import { USER } from "@/app/data/user";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

const NAV_ITEMS = [
  { label: "À propos", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projets", href: "#projects" },
  { label: "Expériences", href: "#experiences" },
  { label: "Formation", href: "#education" },
];

export { NAV_ITEMS };

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background px-2 pt-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 sm:gap-4 md:max-w-3xl">
        <a href="#" className="font-semibold tracking-tight">
          {USER.displayName}
        </a>

        <div className="flex-1" />

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
