"use client";

import React, { useState } from "react";
import { FaqItem } from "../molecules/FaqItem";
import { faqSectionData } from "@/data/faq";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? "" : id);
  };

  const { eyebrow, titlePrimary, titleHighlight, subtitle, items } =
    faqSectionData;

  return (
    <section id="faq" className="relative bg-[#f5f8f7] py-16 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
            <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
              {titlePrimary} <br />
              <span className="text-brand-muted font-normal">{titleHighlight}</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted max-w-md">
              {subtitle}
            </p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 divide-y divide-brand-line/80 rounded-2xl bg-white p-4 sm:p-8 shadow-sm border border-brand-line/80">
            {items.map((item) => (
              <FaqItem
                key={item.id}
                id={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openFaqId === item.id}
                onToggle={() => toggleFaq(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
