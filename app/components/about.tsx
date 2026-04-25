import { USER } from "@/app/data/user";
import { MarkdownContent } from "./markdown-content";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>À propos</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <MarkdownContent>{USER.about}</MarkdownContent>
      </PanelContent>
    </Panel>
  );
}
