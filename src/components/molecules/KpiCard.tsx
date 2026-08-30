import React from "react";
import { Icon } from "../atoms/Icon";

interface KpiCardProps {
  symbol: string;
  color: "teal" | "green" | "amber" | "red" | "blue" | "violet";
  label: string;
  value: string;
  detail: string;
  className?: string;
}

export function KpiCard({
  symbol,
  color,
  label,
  value,
  detail,
  className = "",
}: KpiCardProps) {
  const colorStyles = {
    teal: "bg-teal-50 text-teal-800 border-teal-100",
    green: "bg-emerald-50 text-emerald-700 border-emerald-100",
    amber: "bg-amber-50 text-amber-800 border-amber-100",
    red: "bg-rose-50 text-rose-700 border-rose-100",
    blue: "bg-sky-50 text-sky-700 border-sky-100",
    violet: "bg-purple-50 text-purple-700 border-purple-100",
  }[color];

  return (
    <article
      className={`flex flex-col rounded-xl border border-brand-line/80 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md ${className}`}
    >
      <div
        className={`mb-2.5 flex h-7 w-7 items-center justify-center rounded-lg border ${colorStyles}`}
      >
        <Icon name={symbol} className="h-3.5 w-3.5" />
      </div>
      <span className="text-[11px] font-medium text-brand-muted">{label}</span>
      <strong className="my-0.5 font-sora text-lg font-bold text-brand-ink">
        {value}
      </strong>
      <small className="text-[10px] text-brand-muted/80">{detail}</small>
    </article>
  );
}
