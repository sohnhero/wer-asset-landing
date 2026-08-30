"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

// Custom premium Apple / Stripe style easing curve
export const EASING_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.65,
      delay: custom.delay ?? 0,
      ease: EASING_PREMIUM,
    },
  }),
};

export const fadeInScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 0.7,
      delay: custom.delay ?? 0,
      ease: EASING_PREMIUM,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.1,
      delayChildren: custom.delay ?? 0.05,
    },
  }),
};

interface MotionFadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  viewportAmount?: number;
}

export function MotionFadeIn({
  children,
  delay = 0,
  duration = 0.65,
  direction = "up",
  distance = 28,
  viewportAmount = 0.15,
  className = "",
  ...rest
}: MotionFadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{
        duration,
        delay,
        ease: EASING_PREMIUM,
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MotionStaggerProps extends HTMLMotionProps<"div"> {
  stagger?: number;
  delay?: number;
  viewportAmount?: number;
}

export function MotionStagger({
  children,
  stagger = 0.1,
  delay = 0,
  viewportAmount = 0.15,
  className = "",
  ...rest
}: MotionStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={staggerContainerVariants}
      custom={{ stagger, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MotionItemProps extends HTMLMotionProps<"div"> {
  className?: string;
  duration?: number;
}

export function MotionItem({
  children,
  className = "",
  duration = 0.6,
  ...rest
}: MotionItemProps) {
  return (
    <motion.div
      variants={fadeInUpVariants}
      custom={{ duration }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MotionFloatProps extends HTMLMotionProps<"div"> {
  yOffset?: number;
  duration?: number;
}

export function MotionFloat({
  children,
  yOffset = 10,
  duration = 5,
  className = "",
  ...rest
}: MotionFloatProps) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
