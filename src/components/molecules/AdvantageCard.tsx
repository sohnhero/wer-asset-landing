import React from "react";
import { Icon } from "../atoms/Icon";

interface AdvantageCardProps {
  icon: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: string;
  isCurrency?: boolean;
  className?: string;
}

export function AdvantageCard({
  icon,
  title,
  description,
  tag,
  highlight,
  className = "",
}: AdvantageCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-[#fcfdfd] to-[#f7f9f9] p-4 sm:p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg hover:bg-white overflow-hidden ${className}`}
    >
      {/* Top subtle ambient shine on hover */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-teal-500/10 blur-xl group-hover:bg-teal-500/20 transition-all" />

      <div>
        {/* Top Header: Icon Container + Category Tag */}
        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-700 text-white shadow-sm border border-teal-800/40 transition-transform duration-300 group-hover:scale-105">
            <Icon name={icon} className="h-4 w-4 sm:h-5 sm:w-5 text-teal-100" />
          </div>

          {tag && (
            <span className="rounded-md border border-slate-200 bg-slate-100/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-wider">
              {tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sora text-xs sm:text-base font-bold text-brand-ink transition-colors group-hover:text-teal-950 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-1 sm:mt-2 text-[10.5px] sm:text-xs leading-relaxed text-brand-muted">
          {description}
        </p>
      </div>

      {/* Bottom Highlight Feature Pill */}
      {highlight && (
        <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[9px] sm:text-[10.5px] font-semibold text-teal-900">
          <span className="flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
            ✓
          </span>
          <span className="truncate">{highlight}</span>
        </div>
      )}
    </article>
  );
}
