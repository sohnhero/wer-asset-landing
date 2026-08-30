import React from "react";
import { Icon } from "../atoms/Icon";

interface FloatPillProps {
  icon?: string;
  iconColor?: string;
  hasLiveDot?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function FloatPill({
  icon,
  iconColor = "text-gold",
  hasLiveDot = false,
  children,
  className = "",
}: FloatPillProps) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-2 rounded-xl border border-white/80 bg-white/95 px-3 py-2 text-xs font-bold text-brand-ink shadow-card backdrop-blur-md transition-transform duration-300 ${className}`}
    >
      {hasLiveDot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
        </span>
      )}
      {icon && <Icon name={icon} className={`h-4 w-4 ${iconColor}`} />}
      <span>{children}</span>
    </div>
  );
}
