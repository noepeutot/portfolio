"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ProjectCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxOpen && e.key === "Escape") {
        setLightboxOpen(false);
        return;
      }
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [lightboxOpen]);

  if (total === 0) return null;

  const isAnimated = (src: string) => /\.gif($|\?)/i.test(src);

  return (
    <div className="space-y-2">
      <div className="group relative overflow-hidden rounded-md border border-line bg-muted/30">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Agrandir l'image ${i + 1}`}
              tabIndex={i === index ? 0 : -1}
              className="relative w-full shrink-0 cursor-zoom-in"
            >
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 720px, 100vw"
                className="h-auto w-full object-contain"
                priority={i === 0}
                unoptimized={isAnimated(src)}
              />
            </button>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Image précédente"
              className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-background/80 text-muted-foreground opacity-100 backdrop-blur-sm transition-all hover:text-foreground active:scale-95 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Image suivante"
              className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-background/80 text-muted-foreground opacity-100 backdrop-blur-sm transition-all hover:text-foreground active:scale-95 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
            >
              <ChevronRightIcon className="size-4" />
            </button>

            <div className="pointer-events-none absolute right-2 bottom-2 rounded-md border border-line bg-background/80 px-1.5 py-0.5 font-mono text-xs tabular-nums text-muted-foreground backdrop-blur-sm">
              {index + 1} / {total}
            </div>
          </>
        )}
      </div>

      {total > 1 && (
        <ul className="flex flex-wrap gap-1.5">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Afficher l'image ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "relative block size-14 overflow-hidden rounded-md border transition-all",
                  i === index
                    ? "border-foreground opacity-100"
                    : "border-line opacity-60 hover:opacity-100"
                )}
              >
                <Image
                  src={src}
                  alt=""
                  width={120}
                  height={80}
                  sizes="56px"
                  className="h-full w-full object-cover"
                  unoptimized={isAnimated(src)}
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      <AnimatePresence>
        {lightboxOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — image ${index + 1} sur ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div className="font-mono text-xs tabular-nums text-muted-foreground">
              {alt} · {index + 1} / {total}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              aria-label="Fermer"
              className="flex size-8 items-center justify-center rounded-md border border-line text-muted-foreground transition-[colors,transform] hover:bg-muted hover:text-foreground active:scale-95"
            >
              <XIcon className="size-4" />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={images[index]}
              src={images[index]}
              alt={`${alt} — image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              unoptimized={isAnimated(images[index])}
            />

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Image précédente"
                  className="absolute top-1/2 left-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-background/80 text-muted-foreground backdrop-blur-sm transition-[colors,transform] hover:text-foreground active:scale-95 sm:left-4 sm:size-12"
                >
                  <ChevronLeftIcon className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Image suivante"
                  className="absolute top-1/2 right-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-md border border-line bg-background/80 text-muted-foreground backdrop-blur-sm transition-[colors,transform] hover:text-foreground active:scale-95 sm:right-4 sm:size-12"
                >
                  <ChevronRightIcon className="size-5" />
                </button>
              </>
            )}
          </div>

          {total > 1 && (
            <div
              className="border-t border-line px-4 py-3"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-wrap justify-center gap-1.5">
                {images.map((src, i) => (
                  <li key={src}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Afficher l'image ${i + 1}`}
                      aria-current={i === index}
                      className={cn(
                        "relative block size-14 overflow-hidden rounded-md border transition-all",
                        i === index
                          ? "border-foreground opacity-100"
                          : "border-line opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={src}
                        alt=""
                        width={120}
                        height={80}
                        sizes="56px"
                        className="h-full w-full object-cover"
                        unoptimized={isAnimated(src)}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
