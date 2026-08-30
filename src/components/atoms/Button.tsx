"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { Icon } from "./Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "light" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-tight rounded-xl transition-all duration-250 select-none focus:outline-none focus:ring-2 focus:ring-teal-700/20 active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-xs md:text-sm px-5 py-3 gap-2.5",
      lg: "text-sm md:text-base px-6 py-3.5 gap-3",
    }[size];

    const variantStyles = {
      primary:
        "bg-teal-900 text-white hover:bg-teal-950 shadow-md shadow-teal-900/15 hover:shadow-xl hover:shadow-teal-900/25 hover:-translate-y-0.5 border border-teal-800/40",
      ghost:
        "bg-transparent text-brand-ink hover:text-teal-900 hover:bg-teal-50/60 transition-colors",
      light:
        "bg-white text-teal-950 hover:bg-teal-50 shadow-md shadow-black/5 hover:shadow-lg hover:-translate-y-0.5 border border-white/60",
      outline:
        "bg-white/80 backdrop-blur-sm border border-brand-line text-brand-ink hover:border-teal-700 hover:text-teal-900 shadow-sm",
      gold:
        "bg-gold text-teal-950 hover:bg-gold-light shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 hover:-translate-y-0.5 font-extrabold",
    }[variant];

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <Icon name={icon} className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <Icon name={icon} className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
