"use client";

import {
  BoxIcon,
  GaugeIcon,
  InfinityIcon,
  LinkIcon,
  TrophyIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import { PROJECTS, type Project } from "@/app/data/projects";
import { Collapsible } from "./collapsible";
import { MarkdownContent } from "./markdown-content";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { ProjectCarousel } from "./project-carousel";
import { Tag } from "./tag";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className="h-px w-3 bg-foreground/30" />
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function ProjectSections({ project }: { project: Project }) {
  const { missions, role, results } = project;
  return (
    <div className="space-y-5 font-mono text-sm">
      {missions && missions.length > 0 && (
        <section>
          <SectionLabel>Missions</SectionLabel>
          <ul className="space-y-1.5 text-foreground">
            {missions.map((m, i) => (
              <li key={i} className="flex gap-2 text-pretty">
                <span aria-hidden className="select-none text-muted-foreground">
                  ›
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {role && (
        <section>
          <SectionLabel>Mon rôle</SectionLabel>
          <p className="border-l-2 border-foreground/40 pl-3 italic text-foreground text-pretty">
            {role}
          </p>
        </section>
      )}

      {results && results.length > 0 && (
        <section className="rounded-md border border-line bg-accent-muted px-4 py-3">
          <SectionLabel>Résultats</SectionLabel>
          <ul className="space-y-2">
            {results.map((r, i) => {
              const Icon =
                r.highlight === "award"
                  ? TrophyIcon
                  : r.highlight === "metric"
                  ? GaugeIcon
                  : null;
              return (
                <li key={i} className="flex items-start gap-2.5 text-foreground text-pretty">
                  {Icon ? (
                    <Icon className="mt-0.5 size-4 shrink-0 text-foreground/80" />
                  ) : (
                    <span aria-hidden className="select-none text-muted-foreground">
                      ›
                    </span>
                  )}
                  <span>{r.text}</span>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

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
                    {project.logo ? (
                      <div className="relative mx-4 flex size-10 shrink-0 items-center justify-center select-none">
                        <Image
                          src={project.logo}
                          alt={`Logo ${project.title}`}
                          fill
                          sizes="40px"
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="mx-4 flex size-10 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
                        <BoxIcon className="size-5" />
                      </div>
                    )}

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
                <div className="space-y-4 border-t border-line p-4">
                  <MarkdownContent>{project.description}</MarkdownContent>

                  {(project.missions || project.role || project.results) && (
                    <ProjectSections project={project} />
                  )}

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
