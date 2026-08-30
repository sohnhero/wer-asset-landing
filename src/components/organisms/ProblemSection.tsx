"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { problemSectionData } from "@/data/problems";

export function ProblemSection() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, cards, valueBanner } =
    problemSectionData;
  const [activeProblem, setActiveProblem] = useState(0);
  const currentCard = cards[activeProblem];

  return (
    <section id="product" className="relative bg-white py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-2.5 font-sora text-2xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {titlePrimary} <br />
            <span className="text-[#F2B01E] font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* MOBILE ONLY (< md): Interactive Problem Switcher */}
        <div className="md:hidden mt-6">
          {/* 3 Symmetrical Problem Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100/90 rounded-2xl border border-brand-line mb-3">
            {cards.map((card, idx) => {
              const isActive = activeProblem === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveProblem(idx)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl transition-all duration-200 text-center ${
                    isActive
                      ? "bg-white text-teal-950 font-bold shadow-sm"
                      : "text-slate-500 font-normal hover:text-slate-900"
                  }`}
                >
                  <span className="text-[10px] font-bold text-teal-700">
                    {card.number}
                  </span>
                  <span className="text-[10.5px] truncate max-w-full font-medium">
                    {idx === 0 ? "Pannes" : idx === 1 ? "Préventif" : "Coûts"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Mobile Problem Card */}
          <article className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-[#fbfcfc] p-5 shadow-xs overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-teal-100 shadow-xs border border-teal-800/40">
                  <Icon name={currentCard.icon} className="h-4 w-4" />
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 border border-slate-200/60">
                  {currentCard.tag}
                </span>
              </div>

              <h3 className="font-sora text-base font-bold text-slate-900 leading-snug">
                {currentCard.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                {currentCard.description}
              </p>
            </div>

            {/* Clear Consequence Chip (Replaced confusing progress bar) */}
            <div className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/70 p-2.5 flex items-center gap-2">
              <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-amber-100 text-amber-800 text-[10px] font-bold">
                ⚠
              </span>
              <span className="text-[11px] font-semibold text-amber-900 leading-tight">
                Impact : {currentCard.impact}
              </span>
            </div>
          </article>
        </div>

        {/* DESKTOP ONLY (md+): 3 High-End Problem Cards Grid */}
        <div className="hidden md:grid mt-12 lg:mt-16 grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-[#fcfdfd] to-[#f8faf9] p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-md overflow-hidden min-h-[290px]"
            >
              <div>
                {/* Card Header: Icon + Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-teal-100 shadow-xs border border-teal-800/40 group-hover:scale-105 transition-transform">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100/90 px-3 py-1 text-[11px] font-bold text-slate-600 border border-slate-200/60">
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-sora text-lg font-bold text-slate-900 leading-snug group-hover:text-teal-950 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>

              {/* Concrete Impact Consequence Pill (Zero confusion) */}
              <div className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 flex items-center gap-2.5 transition-colors group-hover:bg-amber-50">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold">
                  ⚠
                </span>
                <span className="text-xs font-semibold text-amber-950 leading-tight">
                  Impact : {card.impact}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Value Response Banner */}
        <div className="relative mt-6 sm:mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#082f2e] via-[#0d4b49] to-[#126a65] p-4 sm:p-8 md:p-12 text-white shadow-glow">
          {/* Decorative radial circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[30px] border-white/5 shadow-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="flex h-11 w-11 sm:h-16 sm:w-16 flex-none items-center justify-center rounded-2xl bg-white p-2 sm:p-2.5 shadow-md">
                <Image
                  src="/assets/logo-mark.png"
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[9.5px] sm:text-[11px] font-extrabold tracking-widest text-teal-200 uppercase">
                  {valueBanner.eyebrow}
                </span>
                <h3 className="mt-0.5 font-sora text-base sm:text-xl md:text-2xl font-bold leading-snug">
                  {valueBanner.title}
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-sm text-teal-100/80">
                  {valueBanner.subtitle}
                </p>
              </div>
            </div>

            {/* Flow sequence */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-1 sm:gap-2 pt-1 sm:pt-0">
              {valueBanner.flowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="flex-1 lg:flex-none text-center rounded-xl border border-white/15 bg-white/10 py-1.5 sm:py-2 px-1 sm:px-3 text-[10px] sm:text-xs font-bold tracking-tight backdrop-blur-md whitespace-nowrap shadow-xs">
                    {step}
                  </span>
                  {idx < valueBanner.flowSteps.length - 1 && (
                    <span className="text-teal-200/90 font-bold text-[9px] sm:text-xs flex-none px-0.5 select-none">
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
