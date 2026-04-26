import {
  CakeIcon,
  CodeXmlIcon,
  GlobeIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "lucide-react";
import { USER } from "@/app/data/user";
import { cn } from "@/lib/utils";
import { Age } from "./age";
import { CurrentLocalTime } from "./current-local-time";
import { EmailItem } from "./email-item";
import { IconBadge } from "./icon-badge";
import { LanguagesItem } from "./languages-item";

function OverviewItem({
  icon,
  children,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4 font-mono text-sm", className)}>
      <IconBadge icon={icon} />
      <p className="text-balance">{children}</p>
    </div>
  );
}

export function Overview() {
  return (
    <section className="screen-line-top screen-line-bottom border-x border-line after:content-none">
      <h2 className="sr-only">Aperçu</h2>
      <div className="space-y-2.5 p-4">
        <OverviewItem icon={CodeXmlIcon}>
          {USER.jobTitle}
        </OverviewItem>

        <OverviewItem icon={GraduationCapIcon}>
          Étudiant en M2 MIASHS à l'Université Grenoble Alpes
        </OverviewItem>

        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <OverviewItem icon={MapPinIcon}>
            <a
              className="underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.location)}`}
            >
              {USER.location}
            </a>
          </OverviewItem>

          <CurrentLocalTime timeZone={USER.timeZone} />

          <EmailItem email={USER.email} />

          <OverviewItem icon={CakeIcon}>
            <Age birthDate={USER.birthDate} />
          </OverviewItem>

          <OverviewItem icon={GlobeIcon}>
            <a
              className="underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener"
              href={USER.website}
            >
              {USER.website.replace("https://www.", "")}
            </a>
          </OverviewItem>

          <LanguagesItem />
        </div>
      </div>
    </section>
  );
}
