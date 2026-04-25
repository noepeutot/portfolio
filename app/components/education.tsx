import { GraduationCapIcon } from "lucide-react";
import { EDUCATION } from "@/app/data/education";
import { IconBadge } from "./icon-badge";
import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle count={EDUCATION.length}>Formation</PanelTitle>
      </PanelHeader>

      <div>
        {EDUCATION.map((edu, index) => (
          <div
            key={edu.id}
            className={index < EDUCATION.length - 1 ? "border-b border-line" : ""}
          >
            <div className="flex items-center">
              <IconBadge icon={GraduationCapIcon} className="mx-4 select-none" />

              <div className="flex-1 border-l border-dashed border-line">
                <div className="p-4">
                  <h3 className="mb-0.5 font-medium leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground/70">
                      {edu.school}
                    </span>
                    <span className="text-line">|</span>
                    <span>
                      {edu.period.start}{" "}
                      <span className="font-mono">—</span> {edu.period.end}
                    </span>
                    {edu.honors && (
                      <>
                        <span className="text-line">|</span>
                        <span className="text-foreground/70">{edu.honors}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {edu.description && (
              <div className="border-t border-line p-4">
                <p className="font-mono text-sm text-muted-foreground">
                  {edu.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Panel>
  );
}
