"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { problemSectionData } from "@/data/problems";

export function ProblemSection() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, cards, valueBanner } =
    problemSectionData;
  const [activeMobileCard, setActiveMobileCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveMobileCard(Math.min(index, cards.length - 1));
  };

  return (
    <section id="product" className="relative bg-white py-16 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-2xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {titlePrimary} <br />
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* MOBILE ONLY (< md): Horizontal Snap Carousel (Eliminates vertical scroll fatigue) */}
        <div className="mt-10 md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-5 px-5 no-scrollbar"
          >
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="relative flex-none w-[82vw] max-w-[320px] snap-center flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-gradient-to-b from-white to-[#fbfcfc] p-6 shadow-sm min-h-[260px]"
              >
                <span className="absolute right-5 top-4 font-sora text-3xl font-black text-slate-100 select-none">
                  {card.number}
                </span>

                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-teal-100 bg-teal-50 text-teal-800 shadow-xs">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-sora text-base font-bold text-brand-ink leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-brand-muted">
                    {card.description}
                  </p>
                </div>

                {/* Progress Line */}
                <div className="mt-4 h-1 w-full rounded-full bg-slate-100 overflow-hidden">
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

          {/* Mobile Pagination Dots */}
          <div className="mt-3 flex items-center justify-center gap-1.5">
            {cards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: idx * (scrollRef.current.offsetWidth * 0.85),
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileCard === idx ? "w-6 bg-teal-800" : "w-1.5 bg-slate-200"
                }`}
                aria-label={`Voir problème ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* TABLET & DESKTOP (md+): Full 3-column Grid */}
        <div className="mt-16 hidden md:grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-gradient-to-b from-white to-[#fbfcfc] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-card overflow-hidden min-h-[280px]"
            >
              <span className="absolute right-6 top-5 font-sora text-4xl font-black text-slate-100 select-none">
                {card.number}
              </span>

              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-800 shadow-xs">
                  <Icon name={card.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-sora text-lg font-bold text-brand-ink leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-brand-muted">
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
        <div className="relative mt-8 sm:mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#082f2e] via-[#0d4b49] to-[#126a65] p-5 sm:p-8 md:p-12 text-white shadow-glow">
          {/* Decorative radial circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[30px] border-white/5 shadow-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6 lg:gap-8">
            <div className="flex items-center gap-3.5 sm:gap-6">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 flex-none items-center justify-center rounded-2xl bg-white p-2 sm:p-2.5 shadow-md">
                <Image
                  src="/assets/logo-mark.png"
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-teal-200 uppercase">
                  {valueBanner.eyebrow}
                </span>
                <h3 className="mt-0.5 font-sora text-lg sm:text-xl md:text-2xl font-bold leading-snug">
                  {valueBanner.title}
                </h3>
                <p className="mt-0.5 text-xs md:text-sm text-teal-100/80">
                  {valueBanner.subtitle}
                </p>
              </div>
            </div>

            {/* Flow sequence - 100% visible and adaptive on all mobile and desktop screens */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-1 sm:gap-2 pt-2 sm:pt-0">
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
