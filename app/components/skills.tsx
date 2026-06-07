"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TECH_CATEGORIES, TECH_STACK, type TechStack } from "@/app/data/skills";
import { Panel, PanelHeader, PanelTitle } from "./panel";
import { Tooltip } from "./tooltip";

function TechIcon({ tech }: { tech: TechStack }) {
  const [hasError, setHasError] = useState(false);

  return (
    <li className="flex">
      <Tooltip content={tech.title}>
        <a
          href={tech.href}
          target="_blank"
          rel="noopener"
          aria-label={tech.title}
          title={tech.title}
          className="flex size-8 items-center justify-center rounded transition-transform hover:scale-110 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {hasError ? (
            <span className="flex size-8 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground">
              {tech.title.slice(0, 2)}
            </span>
          ) : tech.localIcon ? (
            <img
              src={tech.localIcon}
              alt={tech.title}
              width={32}
              height={32}
              className="size-8"
              loading="lazy"
              onError={() => setHasError(true)}
            />
          ) : tech.whiteOnDark ? (
            <>
              <img
                src={`https://cdn.simpleicons.org/${tech.key}`}
                alt={tech.title}
                width={32}
                height={32}
                className="size-8 dark:hidden"
                loading="lazy"
                onError={() => setHasError(true)}
              />
              <img
                src={`https://cdn.simpleicons.org/${tech.key}/white`}
                alt={tech.title}
                width={32}
                height={32}
                className="hidden size-8 dark:block"
                loading="lazy"
                onError={() => setHasError(true)}
              />
            </>
          ) : (
            <img
              src={`https://cdn.simpleicons.org/${tech.key}`}
              alt={tech.title}
              width={32}
              height={32}
              className="size-8"
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
  const rows: (typeof TECH_CATEGORIES)[number][][] = [];
  for (let i = 0; i < TECH_CATEGORIES.length; i += 2) {
    rows.push(TECH_CATEGORIES.slice(i, i + 2));
  }

  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <div>
        {rows.map((row, rowIdx) => {
          const isLastRow = rowIdx === rows.length - 1;
          return (
            <div
              key={rowIdx}
              className={cn(
                "grid grid-cols-1 md:grid-cols-2",
                !isLastRow && "screen-line-bottom"
              )}
            >
              {row.map((category, colIdx) => {
                const techs = TECH_STACK.filter(
                  (t) => t.category === category.key
                );
                if (techs.length === 0) return null;

                const isLastInRow = colIdx === row.length - 1;

                return (
                  <div
                    key={category.key}
                    className={cn(
                      "flex flex-col gap-2.5 px-4 py-4",
                      !isLastInRow && "screen-line-bottom md:after:hidden",
                      colIdx === 1 && "md:border-l md:border-line"
                    )}
                  >
                    <h3 className="text-sm font-semibold">{category.label}</h3>
                    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 select-none">
                      {techs.map((tech) => (
                        <TechIcon key={tech.key} tech={tech} />
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}
