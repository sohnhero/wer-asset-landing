import React from "react";
import { AdvantageCard } from "../molecules/AdvantageCard";
import { advantagesSectionData } from "@/data/advantages";

export function AdvantageSection() {
  const { eyebrow, titlePrimary, titleHighlight, advantages } =
    advantagesSectionData;

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

        {/* 4 Cards Grid - Fully Visible Without Horizontal Scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
