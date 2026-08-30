"use client";

import React from "react";
import { AdvantageCard } from "../molecules/AdvantageCard";
import { advantagesSectionData } from "@/data/advantages";
import { MotionFadeIn, MotionStagger, MotionItem } from "../atoms/Motion";

export function AdvantageSection() {
  const { eyebrow, titlePrimary, titleHighlight, advantages } =
    advantagesSectionData;

  return (
    <section className="relative bg-[#f4f7f6] py-14 sm:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <MotionFadeIn className="mx-auto max-w-3xl text-center mb-6 sm:mb-14">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-2.5 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
            {titlePrimary} <br />
            <span className="text-[#F2B01E] font-normal">{titleHighlight}</span>
          </h2>
        </MotionFadeIn>

        {/* 4 Cards Grid - 2 per line on mobile, 4 on desktop with Staggered Scroll Reveal */}
        <MotionStagger stagger={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {advantages.map((adv, idx) => (
            <MotionItem key={idx}>
              <AdvantageCard
                icon={adv.icon}
                title={adv.title}
                description={adv.description}
                tag={adv.tag}
                highlight={adv.highlight}
                isCurrency={adv.isCurrency}
              />
            </MotionItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
