"use client";

import React, { useState } from "react";
import { FaqItem } from "../molecules/FaqItem";
import { faqSectionData } from "@/data/faq";
import { Icon } from "../atoms/Icon";
import { MotionFadeIn, MotionStagger, MotionItem } from "../atoms/Motion";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? "" : id);
  };

  const { eyebrow, titlePrimary, titleHighlight, subtitle, items } =
    faqSectionData;

  return (
    <section id="faq" className="relative bg-[#f5f8f7] py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          {/* Left Intro */}
          <MotionFadeIn className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32">
            <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              {eyebrow}
            </span>
            <h2 className="mt-2.5 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
              {titlePrimary} <br />
              <span className="text-[#F2B01E] font-normal">{titleHighlight}</span>
            </h2>
            <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted max-w-md">
              {subtitle}
            </p>

            {/* Direct Support Card on Desktop */}
            <a
              href="#contact"
              className="group hidden lg:flex items-center justify-between gap-4 mt-8 p-4 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white via-[#fcfdfd] to-[#f4f8f6] shadow-xs hover:shadow-md hover:border-teal-400/80 transition-all duration-300 -translate-y-0 hover:-translate-y-0.5 max-w-sm w-full"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-teal-100 shadow-xs border border-teal-800/40 group-hover:scale-105 transition-transform">
                  <Icon name="chat" className="h-5 w-5" />
                </div>
                <div>
                  <b className="block text-xs sm:text-sm font-bold text-slate-900 leading-tight group-hover:text-teal-950 transition-colors">
                    Autre question ?
                  </b>
                  <span className="block text-[11px] text-slate-500 mt-0.5 font-medium">
                    Discutez avec notre équipe
                  </span>
                </div>
              </div>
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-teal-50 text-teal-900 border border-teal-200/60 group-hover:bg-teal-900 group-hover:text-white transition-all shadow-xs">
                <Icon name="arrow" className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </MotionFadeIn>

          {/* Right Accordion Cards */}
          <MotionStagger stagger={0.08} className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            {items.map((item, idx) => (
              <MotionItem key={item.id}>
                <FaqItem
                  id={item.id}
                  index={idx + 1}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openFaqId === item.id}
                  onToggle={() => toggleFaq(item.id)}
                />
              </MotionItem>
            ))}

            {/* Mobile Direct Support Card */}
            <div className="lg:hidden mt-5 pt-2">
              <a
                href="#contact"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-[#f4f8f6] shadow-xs hover:border-teal-400 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-teal-950 to-teal-800 text-teal-100 shadow-xs">
                    <Icon name="chat" className="h-4 w-4" />
                  </div>
                  <div>
                    <b className="block text-xs font-bold text-slate-900 leading-tight">
                      Autre question ?
                    </b>
                    <span className="block text-[10.5px] text-slate-500 mt-0.5">
                      Discutez avec notre équipe
                    </span>
                  </div>
                </div>
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-teal-50 text-teal-900 border border-teal-200/60">
                  <Icon name="arrow" className="h-3 w-3" />
                </span>
              </a>
            </div>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
