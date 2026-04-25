"use client";

import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

const svgVariants: Variants = {
  normal: { rotate: 0 },
  animate: { rotate: [0, -10, 10, -5, 5, 0] },
};

const svgTransition: Transition = {
  duration: 1.2,
  ease: "easeInOut",
};

export function MoonIcon({
  className,
  size = 16,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { size?: number }) {
  const controls = useAnimation();

  const handleMouseEnter = useCallback(() => {
    controls.start("animate");
  }, [controls]);

  const handleMouseLeave = useCallback(() => {
    controls.start("normal");
  }, [controls]);

  return (
    <div
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={svgVariants}
        animate={controls}
        transition={svgTransition}
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </motion.svg>
    </div>
  );
}
