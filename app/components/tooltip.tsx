"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Tooltip({
  content,
  children,
  className,
  delay = 120,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShow(true), delay);
  };

  const handleLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShow(false);
  };

  return (
    <span
      className={cn("relative cursor-default", className)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, scale: 0.95, y: 2 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 2 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-md bg-foreground px-3 py-1.5 text-xs text-background whitespace-nowrap before:absolute before:-bottom-1 before:left-1/2 before:size-2 before:-translate-x-1/2 before:rotate-45 before:rounded-xs before:bg-foreground before:content-['']"
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
