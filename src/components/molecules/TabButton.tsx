"use client";

import React from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  stepNumber?: string | number;
  children: React.ReactNode;
  variant?: "pill" | "line" | "box";
  className?: string;
}

export function TabButton({
  active,
  onClick,
  stepNumber,
  children,
  variant = "pill",
  className = "",
}: TabButtonProps) {
  if (variant === "line") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`group relative flex items-center justify-center gap-2.5 py-4 text-xs md:text-sm font-bold transition-all duration-200 ${
          active
            ? "text-teal-900"
            : "text-brand-muted hover:text-teal-800"
        } ${className}`}
      >
        {stepNumber && (
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-all ${
              active
                ? "bg-teal-900 text-white"
                : "border border-brand-line bg-white text-brand-muted group-hover:border-teal-700"
            }`}
          >
            {stepNumber}
          </span>
        )}
        <span>{children}</span>
        {active && (
          <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-teal-900 transition-all" />
        )}
      </button>
    );
  }

  // Pill variant
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs md:text-sm font-bold transition-all duration-200 ${
        active
          ? "bg-teal-900 text-white shadow-md shadow-teal-900/15"
          : "border border-brand-line bg-white/80 text-brand-muted hover:border-teal-700/50 hover:bg-white hover:text-brand-ink"
      } ${className}`}
    >
      {stepNumber && (
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
            active ? "bg-white/20 text-white" : "bg-teal-50 text-teal-800"
          }`}
        >
          {stepNumber}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
