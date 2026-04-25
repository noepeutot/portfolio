import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { USER } from "@/app/data/user";

const FOOTER_LINKS = [
  {
    label: "GitHub",
    href: USER.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: USER.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: `mailto:${USER.email}`,
    icon: MailIcon,
  },
];

export function Footer() {
  return (
    <footer className="screen-line-top border-x border-line">
      <div className="p-4 font-mono text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {USER.displayName}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
          {FOOTER_LINKS.map((link, index) => (
            <span key={link.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>·</span>}
              <a
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener" : undefined}
                className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
              >
                <link.icon className="size-3" />
                <span>{link.label}</span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
