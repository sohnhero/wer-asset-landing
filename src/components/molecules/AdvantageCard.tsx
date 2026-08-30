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
      className={`group flex flex-col rounded-2xl border border-brand-line/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-card ${className}`}
    >
      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-800 transition-colors group-hover:bg-teal-900 group-hover:text-white">
        {isCurrency ? (
          <span className="font-sora text-lg font-extrabold">F</span>
        ) : (
          <Icon name={icon} className="h-5 w-5" />
        )}
      </div>
      <h3 className="mb-2 font-sora text-base font-bold text-brand-ink transition-colors group-hover:text-teal-950">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-brand-muted">{description}</p>
    </article>
  );
}
