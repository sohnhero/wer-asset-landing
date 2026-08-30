"use client";

import React from "react";
import { Icon } from "../atoms/Icon";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
  index?: number;
}

export function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
  index = 1,
}: FaqItemProps) {
  return (
    <article
      className={`group rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-teal-600/40 bg-gradient-to-br from-teal-50/50 via-white to-white shadow-md ring-1 ring-teal-600/15"
          : "border-brand-line/80 bg-white shadow-xs hover:border-teal-200 hover:shadow-sm"
      }`}
    >
      <h3>
        <button
          onClick={onToggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-btn-${id}`}
          className="flex w-full items-center justify-between gap-3 p-3.5 sm:p-5 text-left transition-colors"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span
              className={`flex h-5 w-5 sm:h-6 sm:w-6 flex-none items-center justify-center rounded-lg text-[9.5px] sm:text-[10px] font-extrabold transition-colors ${
                isOpen
                  ? "bg-teal-900 text-white"
                  : "bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-800"
              }`}
            >
              0{index}
            </span>
            <span
              className={`font-sora text-xs sm:text-base font-bold transition-colors leading-snug ${
                isOpen ? "text-teal-950" : "text-brand-ink group-hover:text-teal-900"
              }`}
            >
              {question}
            </span>
          </div>

          <span
            className={`flex h-7 w-7 sm:h-8 sm:w-8 flex-none items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-teal-900 text-white rotate-45 shadow-xs"
                : "bg-slate-100 text-slate-500 group-hover:bg-teal-800 group-hover:text-white"
            }`}
          >
            <Icon name="plus" className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300" />
          </span>
        </button>
      </h3>

      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 px-3.5 pb-3.5 sm:px-5 sm:pb-5"
            : "grid-rows-[0fr] opacity-0 px-3.5 pb-0 sm:px-5 sm:pb-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-l-2 border-teal-600/40 pl-3 sm:pl-4 pt-1 ml-1 sm:ml-2">
            <p className="text-xs sm:text-sm leading-relaxed text-brand-muted">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
