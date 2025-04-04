"use client"
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientTextProps extends Omit<HTMLMotionProps<"span">, "children"> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

function GradientText({
  className,
  children,
  as: Component = "span",
  ...props
}: GradientTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-flex overflow-hidden",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--color-1))] to-[hsl(var(--color-2))]">
        {children}
      </span>
    </motion.span>
  );
}

export { GradientText }
