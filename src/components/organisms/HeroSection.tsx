"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { GlowMesh } from "../atoms/GlowMesh";
import { heroContent } from "@/data/hero";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfcfb] via-[#f4f8f7] to-[#f7f9f8] min-h-[90vh] lg:min-h-[100dvh] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-20 lg:pb-20">
      <GlowMesh variant="hero" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left Copy Column - Scaled up proportionally like a clean zoom */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-6 xl:col-span-5 z-10 scale-[1.05] sm:scale-[1.08] lg:scale-[1.14] xl:scale-[1.18] origin-center lg:origin-left">
            {/* Top Pill Badge with Live Emerald Indicator */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/90 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-teal-900 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{heroContent.badge}</span>
            </div>

            {/* Hero Main Heading - 2 clean lines */}
            <h1 className="font-sora text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-brand-ink leading-[1.15]">
              {heroContent.titlePrimary}{" "}
              <span className="block bg-gradient-to-r from-teal-900 via-teal-700 to-emerald-600 bg-clip-text text-transparent">
                {heroContent.titleHighlight}
              </span>
            </h1>

            {/* Concise Description */}
            <p className="mt-3.5 max-w-lg text-xs sm:text-sm lg:text-base leading-relaxed text-brand-muted">
              {heroContent.description}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
              <Button
                href="#contact"
                size="md"
                variant="primary"
                icon="arrow"
                iconPosition="right"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-950 via-teal-900 to-teal-900 shadow-md shadow-teal-950/20 hover:shadow-lg hover:shadow-teal-950/30 justify-center py-3"
              >
                {heroContent.ctaPrimary}
              </Button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-brand-line/80 bg-white/80 px-4 py-3 text-xs md:text-sm font-bold text-brand-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:border-teal-700/40 hover:bg-white hover:text-teal-900 hover:shadow-md w-full sm:w-auto"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition-transform duration-200 group-hover:scale-110">
                  <Icon name="play" className="h-2.5 w-2.5 fill-teal-800 ml-0.5" />
                </span>
                <span>{heroContent.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Badges: Symmetrical & Compact Micro-Cards */}
            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-2.5 border-t border-brand-line/60 pt-5 w-full">
              {heroContent.trustItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5 rounded-xl border border-slate-200/90 bg-gradient-to-b from-white via-[#fcfdfd] to-[#f7f9f9] p-2.5 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400 hover:shadow-sm hover:bg-white overflow-hidden"
                >
                  <div className="flex items-center gap-2 w-full justify-center sm:justify-start">
                    <div className="flex h-6 w-6 sm:h-7 sm:w-7 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-700 text-teal-100 shadow-xs border border-teal-800/40">
                      <Icon name={item.icon} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <b className="font-sora text-[11px] sm:text-xs font-bold text-slate-900 group-hover:text-teal-950 transition-colors leading-tight truncate">
                      {item.title}
                    </b>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight hidden sm:block whitespace-nowrap truncate w-full">
                    {item.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Column: Enlarged on Mobile, Unchanged on Desktop */}
          <div className="relative lg:col-span-6 xl:col-span-7 mt-6 lg:mt-0 flex items-center justify-center lg:justify-end">
            <div className="relative w-[150%] sm:w-[165%] lg:w-[170%] xl:w-[185%] max-w-none flex items-center justify-center lg:justify-end lg:-mr-24 xl:-mr-36 translate-x-0 lg:translate-x-10 xl:translate-x-14 scale-110 sm:scale-115 lg:scale-110 xl:scale-120 origin-center lg:origin-right">
              <Image
                src="/assets/good-one.png"
                alt="Plateforme WËR ASSET - Tableau de bord et application mobile"
                width={2200}
                height={1238}
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
