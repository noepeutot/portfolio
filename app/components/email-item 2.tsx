"use client";

import { CheckIcon, CopyIcon, MailIcon } from "lucide-react";
import { useCopyToClipboard } from "@/lib/use-copy-to-clipboard";
import { IconBadge } from "./icon-badge";

export function EmailItem({ email }: { email: string }) {
  const { state, copy } = useCopyToClipboard();

  return (
    <div className="group flex items-center gap-4 font-mono text-sm">
      <IconBadge icon={MailIcon} />
      <p className="text-balance">
        <a
          className="underline-offset-4 hover:underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </p>
      <button
        type="button"
        onClick={() => copy(email)}
        className="-translate-x-3 cursor-pointer rounded-md p-1 text-muted-foreground opacity-0 transition-opacity ease-out hover:text-foreground group-hover:opacity-100"
        aria-label="Copier l'email"
      >
        {state === "done" ? (
          <CheckIcon className="size-3.5 text-green-500" />
        ) : (
          <CopyIcon className="size-3.5" />
        )}
      </button>
    </div>
  );
}
