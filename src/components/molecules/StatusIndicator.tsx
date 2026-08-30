import React from "react";

interface StatusIndicatorProps {
  status: "green" | "amber" | "red" | "gray" | "blue";
  label: string;
  className?: string;
}

export function StatusIndicator({
  status,
  label,
  className = "",
}: StatusIndicatorProps) {
  const dotColor = {
    green: "bg-emerald-500",
    amber: "bg-gold",
    red: "bg-rose-500",
    gray: "bg-slate-400",
    blue: "bg-sky-500",
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold text-brand-ink ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${dotColor}`} />
      {label}
    </span>
  );
}
