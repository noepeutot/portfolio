import Image from "next/image";
import { USER } from "@/app/data/user";
import { TextFlip } from "./text-flip";

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom flex border-x border-line">
      <div className="shrink-0 border-r border-line">
        <div className="mx-0.5 my-0.75 flex items-center justify-center">
          <Image
            src="/moi.jpg"
            alt={USER.displayName}
            width={160}
            height={160}
            priority
            className="size-30 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground select-none max-sm:hidden">
            <span className="relative flex items-center justify-center">
              <span className="absolute inline-flex size-3 animate-ping rounded-full bg-green-500 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            <span>Disponible pour un emploi</span>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold tracking-tight">
              {USER.displayName}
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4.5 select-none" style={{ color: "oklch(0.67 0.17 244.98)" }} aria-label="Verified">
              <path fill="currentColor" d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z" />
            </svg>
          </div>

          <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            <TextFlip
              className="font-pixel-square text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
              interval={1.5}
            >
              {USER.flipSentences}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>
  );
}
