"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { problemSectionData } from "@/data/problems";

export function ProblemSection() {
  const [activeProblem, setActiveProblem] = useState<number>(0);
  const { eyebrow, titlePrimary, titleHighlight, subtitle, cards, valueBanner } =
    problemSectionData;

  const currentCard = cards[activeProblem] || cards[0];

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
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* MOBILE ONLY (< md): Interactive Problem Switcher (Reduces height from 750px to 210px) */}
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
                  className={`flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl text-center transition-all ${
                    isActive
                      ? "bg-teal-900 text-white shadow-sm font-bold"
                      : "text-brand-muted hover:text-brand-ink"
                  }`}
                >
                  <span className={`text-[9.5px] font-extrabold ${isActive ? "text-teal-200" : "text-brand-muted"}`}>
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
          <article className="relative flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-gradient-to-b from-white to-[#fbfcfc] p-5 shadow-xs overflow-hidden min-h-[175px]">
            <span className="absolute right-4 top-3 font-sora text-3xl font-black text-slate-100 select-none">
              {currentCard.number}
            </span>

            <div>
              <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-800 shadow-xs">
                <Icon name={currentCard.icon} className="h-4 w-4" />
              </div>
              <h3 className="font-sora text-base font-bold text-brand-ink leading-snug">
                {currentCard.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
                {currentCard.description}
              </p>
            </div>

            {/* Progress Line */}
            <div className="mt-4 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                style={{ width: currentCard.progressWidth }}
                className={`h-full rounded-full ${
                  currentCard.severityColor === "teal"
                    ? "bg-teal-600"
                    : currentCard.severityColor === "amber"
                    ? "bg-gold"
                    : "bg-rose-500"
                }`}
              />
            </div>
          </article>
        </div>

        {/* DESKTOP ONLY (md+): 3 Problem Cards Grid Side-by-Side */}
        <div className="hidden md:grid mt-12 lg:mt-16 grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-gradient-to-b from-white to-[#fbfcfc] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-card overflow-hidden min-h-[280px]"
            >
              <span className="absolute right-5 top-4 font-sora text-4xl font-black text-slate-100 select-none">
                {card.number}
              </span>

              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-800 shadow-xs">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-sora text-lg font-bold text-brand-ink leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {card.description}
                </p>
              </div>

              {/* Progress Line */}
              <div className="mt-6 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  style={{ width: card.progressWidth }}
                  className={`h-full rounded-full ${
                    card.severityColor === "teal"
                      ? "bg-teal-600"
                      : card.severityColor === "amber"
                      ? "bg-gold"
                      : "bg-rose-500"
                  }`}
                />
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

            {/* Flow sequence - 100% visible and adaptive on all mobile and desktop screens */}
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
