"use client";

import type { Transition, Variants } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { Children, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  initial: { y: -8, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 8, opacity: 0 },
};

export function TextFlip({
  className,
  children,
  interval = 2,
  transition = { duration: 0.3 },
  variants = defaultVariants,
}: {
  className?: string;
  children: React.ReactNode[];
  interval?: number;
  transition?: Transition;
  variants?: Variants;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.p
        key={currentIndex}
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </motion.p>
    </AnimatePresence>
  );
}
