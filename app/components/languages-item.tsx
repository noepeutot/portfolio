import { LanguagesIcon } from "lucide-react";
import { IconBadge } from "./icon-badge";
import { Tooltip } from "./tooltip";

export function LanguagesItem() {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IconBadge icon={LanguagesIcon} />
      <p className="text-balance">
        <Tooltip content="Français (natif) · Anglais (B2) · Laotien (origine)">
          Français, Anglais, Laotien
        </Tooltip>
      </p>
    </div>
  );
}
