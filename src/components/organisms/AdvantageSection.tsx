import React from "react";
import { AdvantageCard } from "../molecules/AdvantageCard";
import { advantagesSectionData } from "@/data/advantages";

export function AdvantageSection() {
  const { eyebrow, titlePrimary, titleHighlight, advantages } =
    advantagesSectionData;

  return (
    <section className="relative bg-[#f4f7f6] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {titlePrimary} <br />
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
