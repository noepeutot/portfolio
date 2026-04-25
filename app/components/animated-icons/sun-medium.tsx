"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

const pathVariants: Variants = {
  normal: { opacity: 1 },
  animate: (i: number) => ({
    opacity: [0, 1],
    transition: { delay: i * 0.1, duration: 0.3 },
  }),
};

const RAYS = [
  "M12 3v1",
  "M12 20v1",
  "M3 12h1",
  "M20 12h1",
  "m18.364 5.636-.707.707",
  "m6.343 17.657-.707.707",
  "m5.636 5.636.707.707",
  "m17.657 17.657.707.707",
];

export function SunMediumIcon({
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        {RAYS.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            animate={controls}
            variants={pathVariants}
            custom={index + 1}
          />
        ))}
      </svg>
    </div>
  );
}
