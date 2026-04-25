"use client";

import { useState } from "react";
import {
  ArrowUpRightIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { SOCIAL_LINKS, type SocialLink } from "@/app/data/social-links";

const LUCIDE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: LinkedinIcon,
  mail: MailIcon,
};

function SocialLinkIcon({ link }: { link: SocialLink }) {
  const [hasError, setHasError] = useState(false);

  if (link.iconType === "lucide") {
    const Icon = LUCIDE_ICONS[link.iconKey];
    return <Icon className="size-4 text-white" />;
  }

  if (link.iconType === "image" && link.iconSrc) {
    return (
      <img
        src={link.iconSrc}
        alt={link.title}
        width={32}
        height={32}
        className="size-8 rounded-lg"
      />
    );
  }

  if (hasError) {
    return (
      <span className="text-xs font-medium text-white">
        {link.title.slice(0, 2)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${link.iconKey}/white`}
      alt={link.title}
      width={16}
      height={16}
      className="size-4"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}

function SocialLinkItem({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener"
      className="group flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-muted max-md:odd:screen-line-top max-md:odd:screen-line-bottom md:first:screen-line-top md:first:screen-line-bottom"
    >
      {link.iconType === "image" && link.iconSrc ? (
        <div className="relative size-8 shrink-0 select-none">
          <img
            src={link.iconSrc}
            alt={link.title}
            width={32}
            height={32}
            className="size-8 rounded-lg"
          />
          <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/15" />
        </div>
      ) : (
        <div
          className="relative flex size-8 shrink-0 items-center justify-center rounded-lg select-none"
          style={{ backgroundColor: link.color }}
        >
          <SocialLinkIcon link={link} />
          <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/15" />
        </div>
      )}
      <h3 className="flex-1 font-medium">{link.title}</h3>
      <ArrowUpRightIcon className="size-4 text-muted-foreground transition-[rotate] duration-300 group-hover:rotate-45" />
    </a>
  );
}

export function SocialLinks() {
  return (
    <section className="screen-line-top screen-line-bottom border-x border-line before:content-none after:content-none">
      <h2 className="sr-only">Liens</h2>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 gap-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkItem key={link.title} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
