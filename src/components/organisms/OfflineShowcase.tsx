import React from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { offlineSectionData } from "@/data/offline";

export function OfflineShowcase() {
  const { eyebrow, titlePrimary, titleHighlight, description, highlights, ctaText } =
    offlineSectionData;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#052e2d] via-[#083b39] to-[#0e5551] py-16 sm:py-24 lg:py-32 text-white">
      {/* Background Signal Lines & Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* MOBILE ONLY (< lg): Clean, Fast & Compact Offline Showcase (no heavy image) */}
        <div className="lg:hidden flex flex-col items-start text-left">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-extrabold tracking-widest text-teal-200 uppercase backdrop-blur-md">
            {eyebrow}
          </span>

          <h2 className="mt-3 font-sora text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            {titlePrimary} <br />
            <span className="text-teal-200 font-normal">{titleHighlight}</span>
          </h2>

          <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-teal-100/80">
            {description}
          </p>

          {/* 3 Compact Checklist Points */}
          <div className="my-5 space-y-3 w-full">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs text-teal-50">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-lg bg-white/10 text-emerald-400 border border-white/10 mt-0.5">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <div>
                  <b className="font-semibold text-xs text-white leading-tight block">{item.title}</b>
                  <small className="text-[11px] text-teal-100/70 leading-relaxed block mt-0.5">{item.description}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 w-full">
            <Button
              href="#contact"
              size="md"
              variant="light"
              icon="arrow"
              iconPosition="right"
              className="w-full justify-center text-xs font-bold py-3"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        {/* DESKTOP VIEW (lg+): Full 2-Column Experience with Large High-Impact Mockup */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[560px]">
          {/* Left Column */}
          <div className="col-span-6 flex flex-col items-start z-10">
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-extrabold tracking-widest text-teal-200 uppercase backdrop-blur-md">
              {eyebrow}
            </span>

            <h2 className="mt-4 font-sora text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              {titlePrimary} <br />
              <span className="text-teal-200/80 font-normal">{titleHighlight}</span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-teal-100/80 max-w-xl">
              {description}
            </p>

            <ul className="mt-8 space-y-4 w-full">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-xl border border-white/15 bg-white/10 text-emerald-400 shadow-inner">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <div>
                    <b className="block text-sm font-bold text-white leading-tight">
                      {item.title}
                    </b>
                    <small className="block text-xs text-teal-100/70 mt-0.5 leading-relaxed">
                      {item.description}
                    </small>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button
                href="#contact"
                size="md"
                variant="light"
                icon="arrow"
                iconPosition="right"
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Right Column: Significantly Enlarged Smartphone Mockup */}
          <div className="col-span-6 relative flex items-center justify-center h-full">
            <div className="relative w-[180%] xl:w-[200%] max-w-none flex items-center justify-center scale-[1.75] xl:scale-[1.95] origin-center">
              <Image
                src="/assets/offline.png"
                alt="WËR ASSET Application Technicien Mode Hors Ligne"
                width={1600}
                height={900}
                priority
                quality={100}
                className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
