import React from "react";
import { Icon } from "../atoms/Icon";

interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
  isCurrency?: boolean;
  className?: string;
}

export function AdvantageCard({
  icon,
  title,
  description,
  isCurrency = false,
  className = "",
}: AdvantageCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-brand-line/80 bg-gradient-to-b from-white via-white to-[#fbfcfc] p-3.5 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-card overflow-hidden ${className}`}
    >
      {/* Top subtle ambient glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-teal-500/5 blur-xl group-hover:bg-teal-500/15 transition-all" />

      <div>
        {/* Icon container */}
        <div className="mb-2.5 sm:mb-5 flex h-8 w-8 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl border border-teal-100/80 bg-gradient-to-br from-teal-50 to-emerald-50 text-teal-800 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-teal-900 group-hover:text-white group-hover:border-teal-900">
          {isCurrency ? (
            <span className="font-sora text-[11px] sm:text-base font-extrabold tracking-tight">
              F
            </span>
          ) : (
            <Icon name={icon} className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
          )}
        </div>

        {/* Title */}
        <h3 className="font-sora text-xs sm:text-base font-bold text-brand-ink transition-colors group-hover:text-teal-950 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs leading-relaxed text-brand-muted">
          {description}
        </p>
      </div>

      {/* Subtle bottom accent line */}
      <div className="mt-3 sm:mt-4 h-0.5 w-5 sm:w-6 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:bg-teal-600" />
    </article>
  );
}
