import React from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { problemSectionData } from "@/data/problems";

export function ProblemSection() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, cards, valueBanner } =
    problemSectionData;

  return (
    <section id="product" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {titlePrimary} <br />
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
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
        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#082f2e] via-[#0d4b49] to-[#126a65] p-8 md:p-12 text-white shadow-glow">
          {/* Decorative radial circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[30px] border-white/5 shadow-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="flex items-start md:items-center gap-6">
              <div className="flex h-16 w-16 flex-none items-center justify-center rounded-2xl bg-white p-2.5 shadow-md">
                <Image
                  src="/assets/logo-mark.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-extrabold tracking-widest text-teal-200 uppercase">
                  {valueBanner.eyebrow}
                </span>
                <h3 className="mt-1 font-sora text-xl md:text-2xl font-bold">
                  {valueBanner.title}
                </h3>
                <p className="mt-1 text-xs md:text-sm text-teal-100/80">
                  {valueBanner.subtitle}
                </p>
              </div>
            </div>

            {/* Flow sequence - Always on a single line */}
            <div className="flex flex-nowrap items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar flex-none">
              {valueBanner.flowSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-bold tracking-tight backdrop-blur-md whitespace-nowrap flex-none">
                    {step}
                  </span>
                  {idx < valueBanner.flowSteps.length - 1 && (
                    <span className="text-teal-200 font-bold px-0.5 text-xs select-none">→</span>
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
