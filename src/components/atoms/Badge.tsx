import React from "react";

interface BadgeProps {
  variant?: "hero" | "dark" | "teal" | "gold" | "green" | "red" | "blue" | "violet" | "outline";
  dot?: boolean;
  dotColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "hero",
  dot = false,
  dotColor,
  children,
  className = "",
}: BadgeProps) {
  const variantStyles = {
    hero: "border border-teal-200/80 bg-white/80 backdrop-blur-md text-brand-muted shadow-sm",
    dark: "border border-white/10 bg-white/5 text-teal-100/90 backdrop-blur-md",
    teal: "border border-teal-200 bg-teal-50 text-teal-800",
    gold: "border border-gold/30 bg-gold-100 text-gold-dark font-semibold",
    green: "border border-emerald-200 bg-emerald-50 text-emerald-700",
    red: "border border-rose-200 bg-rose-50 text-rose-700",
    blue: "border border-sky-200 bg-sky-50 text-sky-700",
    violet: "border border-purple-200 bg-purple-50 text-purple-700",
    outline: "border border-brand-line bg-white text-brand-muted",
  }[variant];

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-tight uppercase transition-all ${variantStyles} ${className}`}
    >
      {dot && (
        <span
          className={`h-2 w-2 rounded-full ring-4 ${
            dotColor ||
            (variant === "hero" || variant === "gold"
              ? "bg-gold ring-gold/15"
              : variant === "green"
              ? "bg-emerald-500 ring-emerald-500/15"
              : variant === "red"
              ? "bg-rose-500 ring-rose-500/15"
              : "bg-teal-600 ring-teal-600/15")
          }`}
        />
      )}
      {children}
    </div>
  );
}
