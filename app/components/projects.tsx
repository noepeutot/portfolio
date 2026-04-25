import { BoxIcon, InfinityIcon, LinkIcon, UsersIcon } from "lucide-react";
import { PROJECTS } from "@/app/data/projects";
import { Collapsible } from "./collapsible";
import { IconBadge } from "./icon-badge";
import { MarkdownContent } from "./markdown-content";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { ProjectCarousel } from "./project-carousel";
import { Tag } from "./tag";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle count={PROJECTS.length}>Projets</PanelTitle>
      </PanelHeader>

      <div>
        {PROJECTS.map((project, index) => {
          const { start, end } = project.period;
          const isSinglePeriod = end === start;
          const isOngoing = !end;

          return (
            <div
              key={project.id}
              className={
                index < PROJECTS.length - 1 ? "border-b border-line" : ""
              }
            >
              <Collapsible
                defaultOpen={project.isExpanded}
                trigger={
                  <div className="flex items-center hover:bg-accent-muted">
                    <IconBadge icon={BoxIcon} className="mx-4 select-none" />

                    <div className="flex-1 border-l border-dashed border-line">
                      <div className="flex w-full items-center gap-2 p-4 pr-2 text-left">
                        <div className="flex-1">
                          <h3 className="mb-1 font-medium leading-snug text-balance">
                            {project.title}
                          </h3>

                          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-0.5">
                              <span>{start}</span>
                              {!isSinglePeriod && (
                                <>
                                  <span className="font-mono">—</span>
                                  {isOngoing ? (
                                    <InfinityIcon className="size-4.5 translate-y-[0.5px]" />
                                  ) : (
                                    <span>{end}</span>
                                  )}
                                </>
                              )}
                            </span>
                            {project.context && (
                              <>
                                <span className="h-4 w-px bg-border" />
                                <span>{project.context}</span>
                              </>
                            )}
                            {project.team && (
                              <>
                                <span className="h-4 w-px bg-border" />
                                <span className="flex items-center gap-1">
                                  <UsersIcon className="size-3" />
                                  {project.team}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener"
                            className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <LinkIcon className="size-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="space-y-3 border-t border-line p-4">
                  <MarkdownContent>{project.description}</MarkdownContent>

                  {project.images && project.images.length > 0 && (
                    <ProjectCarousel
                      images={project.images}
                      alt={project.title}
                    />
                  )}

                  {project.skills.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {project.skills.map((skill) => (
                        <li key={skill} className="flex">
                          <Tag>{skill}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Collapsible>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
