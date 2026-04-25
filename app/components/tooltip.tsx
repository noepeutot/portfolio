"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Tooltip({
  content,
  children,
  className,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <span
      className={cn("relative cursor-default", className)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, scale: 0.95, y: 2 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 2 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-md bg-foreground px-3 py-1.5 text-xs text-background whitespace-nowrap"
          >
            {content}
            <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-xs bg-foreground" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
