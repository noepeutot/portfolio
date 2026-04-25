"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Collapsible({
  trigger,
  children,
  defaultOpen = false,
  hideChevron = false,
  className,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  hideChevron?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className} data-open={open ? "" : undefined}>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex w-full items-center text-left",
          !hideChevron && "transition-colors hover:bg-muted/50"
        )}
      >
        <div className="flex-1">{trigger}</div>
        {!hideChevron && (
          <div className="shrink-0 pr-4">
            <ChevronDownIcon
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-200",
                open && "rotate-180"
              )}
            />
          </div>
        )}
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
