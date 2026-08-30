"use client";

import React, { useState } from "react";
import { FaqItem } from "../molecules/FaqItem";
import { faqSectionData } from "@/data/faq";
import { Icon } from "../atoms/Icon";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? "" : id);
  };

  const { eyebrow, titlePrimary, titleHighlight, subtitle, items } =
    faqSectionData;

  return (
    <section id="faq" className="relative bg-[#f5f8f7] py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Intro */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
            <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              {eyebrow}
            </span>
            <h2 className="mt-2.5 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
              {titlePrimary} <br />
              <span className="text-brand-muted font-normal">{titleHighlight}</span>
            </h2>
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted max-w-md">
              {subtitle}
            </p>

            {/* Direct Support Card on Desktop */}
            <div className="hidden lg:flex items-center gap-3 mt-8 p-4 rounded-2xl border border-brand-line bg-white shadow-xs">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100">
                <Icon name="chat" className="h-5 w-5" />
              </div>
              <div>
                <b className="block text-xs font-bold text-brand-ink">Autre question ?</b>
                <a href="#contact" className="text-[11px] font-semibold text-teal-800 hover:underline">
                  Discutez avec notre équipe →
                </a>
              </div>
            </div>
          </div>

          {/* Right Accordion Cards */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {items.map((item, idx) => (
              <FaqItem
                key={item.id}
                id={item.id}
                index={idx + 1}
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
