import Image from "next/image";
import {
  BriefcaseIcon,
  ChevronDownIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  InfinityIcon,
} from "lucide-react";
import { EXPERIENCES, type ExperiencePosition } from "@/app/data/experiences";
import { Collapsible } from "./collapsible";
import { IconBadge } from "./icon-badge";
import { MarkdownContent } from "./markdown-content";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { ProjectCarousel } from "./project-carousel";
import { Tag } from "./tag";

const iconMap = {
  code: CodeXmlIcon,
  education: GraduationCapIcon,
  business: BriefcaseIcon,
} as const;

function PositionItem({ position }: { position: ExperiencePosition }) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  const Icon = position.icon ? iconMap[position.icon] : BriefcaseIcon;
  const hasImages = !!position.images && position.images.length > 0;
  const hasContent = !!position.description || hasImages;

  return (
    <Collapsible
      className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background"
      defaultOpen={position.isExpanded}
      hideChevron
      trigger={
        <div className="group relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-10 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-accent-muted">
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <IconBadge icon={Icon} className="ml-2" />

            <h4 className="flex-1 font-medium text-balance">
              {position.title}
            </h4>

            {hasContent && (
              <div className="shrink-0 text-muted-foreground [&_svg]:size-4">
                <ChevronDownIcon className="transition-transform duration-150 group-data-open:rotate-180" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 pl-12 text-sm text-muted-foreground">
            {position.employmentType && (
              <>
                <span>{position.employmentType}</span>
                <span className="h-4 w-px bg-border" />
              </>
            )}
            <span className="flex items-center gap-0.5">
              <span>{start}</span>
              <span className="font-mono">—</span>
              {isOngoing ? (
                <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
              ) : (
                <span>{end}</span>
              )}
            </span>
          </div>
        </div>
      }
    >
      {hasContent && (
        <div className="pl-12 pb-2 pt-2 space-y-3">
          {position.description && (
            <MarkdownContent>{position.description}</MarkdownContent>
          )}

          {hasImages && (
            <ProjectCarousel
              images={position.images!}
              alt={position.title}
            />
          )}
        </div>
      )}
    </Collapsible>
  );
}

export function Experiences() {
  return (
    <Panel id="experiences">
      <PanelHeader>
        <PanelTitle>Expériences</PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4">
        {EXPERIENCES.map((experience) => (
          <div
            key={experience.id}
            className="screen-line-bottom scroll-mt-14 space-y-4 py-4"
          >
            <div className="flex items-center gap-3">
              {experience.logo ? (
                experience.url ? (
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex size-10 shrink-0 items-center justify-center rounded-md transition-all hover:scale-110 hover:bg-accent/50 focus:scale-95"
                  >
                    <Image
                      src={experience.logo}
                      alt={`Logo ${experience.companyName}`}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </a>
                ) : (
                  <div className="relative flex size-10 shrink-0 items-center justify-center">
                    <Image
                      src={experience.logo}
                      alt={`Logo ${experience.companyName}`}
                      fill
                      sizes="40px"
                      className="object-contain p-1"
                    />
                  </div>
                )
              ) : (
                <div className="flex size-10 shrink-0 items-center justify-center p-1">
                  <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>
              )}
              <h3 className="flex items-center gap-3 text-lg font-semibold leading-snug">
                {experience.companyName}
                {experience.isCurrent && (
                  <span className="relative flex size-2 shrink-0 items-center justify-center">
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-sky-500 opacity-50" />
                    <span className="relative inline-flex size-2 rounded-full bg-sky-500" />
                  </span>
                )}
              </h3>
            </div>

            <div className="relative space-y-1 before:absolute before:left-5 before:h-full before:w-px before:bg-border">
              {experience.positions.map((position) => (
                <div key={position.id}>
                  <PositionItem position={position} />

                  {position.skills && position.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5 pt-3 pl-12">
                      {position.skills.map((skill) => (
                        <li key={skill} className="flex">
                          <Tag>{skill}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}
