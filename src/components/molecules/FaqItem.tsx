"use client";

import React from "react";
import { Icon } from "../atoms/Icon";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

export function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: FaqItemProps) {
  return (
    <article className="border-b border-brand-line/80 transition-colors last:border-b-0">
      <h3>
        <button
          onClick={onToggle}
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-btn-${id}`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-teal-800"
        >
          <span className="font-sora text-sm md:text-base font-bold text-brand-ink">
            {question}
          </span>
          <span
            className={`flex h-7 w-7 flex-none items-center justify-center rounded-lg border transition-all duration-200 ${
              isOpen
                ? "border-teal-700 bg-teal-50 text-teal-800"
                : "border-brand-line bg-white text-brand-muted"
            }`}
          >
            <Icon name={isOpen ? "minus" : "plus"} className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs md:text-sm leading-relaxed text-brand-muted pr-4 md:pr-10">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}
