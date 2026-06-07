import { LanguagesIcon } from "lucide-react";
import { IconBadge } from "./icon-badge";

export function LanguagesItem() {
  return (
    <div className="flex items-center gap-4 font-mono text-sm">
      <IconBadge icon={LanguagesIcon} />
      <p className="text-balance">Français · Anglais (B2) · Laotien</p>
    </div>
  );
}
