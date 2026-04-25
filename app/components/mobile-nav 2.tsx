"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { NAV_ITEMS } from "./navbar";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {open ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-14 border-b border-line bg-background/95 backdrop-blur-sm">
          <nav className="mx-auto flex max-w-3xl flex-col px-4 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
