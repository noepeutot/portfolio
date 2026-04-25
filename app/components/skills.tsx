"use client";

import { useState } from "react";
import { TECH_STACK } from "@/app/data/skills";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { Tooltip } from "./tooltip";

function TechIcon({ tech }: { tech: (typeof TECH_STACK)[number] }) {
  const [hasError, setHasError] = useState(false);

  return (
    <li className="flex">
      <Tooltip content={tech.title}>
        <a
          href={tech.href}
          target="_blank"
          rel="noopener"
          aria-label={tech.title}
          className="flex size-8 items-center justify-center"
        >
          {hasError ? (
            <span className="flex size-8 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground">
              {tech.title.slice(0, 2)}
            </span>
          ) : (
            <img
              src={tech.localIcon ?? `https://cdn.simpleicons.org/${tech.key}`}
              alt={tech.title}
              width={32}
              height={32}
              className={tech.localIcon ? "size-8" : "size-8 dark:invert dark:brightness-200 dark:contrast-75"}
              loading="lazy"
              onError={() => setHasError(true)}
            />
          )}
        </a>
      </Tooltip>
    </li>
  );
}

export function Skills() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => (
            <TechIcon key={tech.key} tech={tech} />
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
