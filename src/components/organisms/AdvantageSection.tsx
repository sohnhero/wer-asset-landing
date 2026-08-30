"use client";

import React, { useState, useRef } from "react";
import { AdvantageCard } from "../molecules/AdvantageCard";
import { advantagesSectionData } from "@/data/advantages";

export function AdvantageSection() {
  const { eyebrow, titlePrimary, titleHighlight, advantages } =
    advantagesSectionData;
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.85;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveCard(Math.min(index, advantages.length - 1));
  };

  return (
    <section className="relative bg-[#f4f7f6] py-16 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
            {titlePrimary} <br />
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
        </div>

        {/* MOBILE ONLY (< sm): Horizontal Snap Carousel */}
        <div className="sm:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-2 -mx-5 px-5 no-scrollbar"
          >
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex-none w-[80vw] max-w-[290px] snap-center">
                <AdvantageCard
                  icon={adv.icon}
                  title={adv.title}
                  description={adv.description}
                  isCurrency={adv.isCurrency}
                />
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5">
            {advantages.map((_, idx) => (
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
                  activeCard === idx ? "w-6 bg-teal-800" : "w-1.5 bg-slate-300"
                }`}
                aria-label={`Voir avantage ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* TABLET & DESKTOP (sm+): Grid 2x2 and 4 columns */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <AdvantageCard
              key={idx}
              icon={adv.icon}
              title={adv.title}
              description={adv.description}
              isCurrency={adv.isCurrency}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
