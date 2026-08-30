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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfcfb] via-[#f4f8f7] to-[#f7f9f8] min-h-[92vh] lg:min-h-[100dvh] flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-20 lg:pb-20">
      <GlowMesh variant="hero" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Main Hero Copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left col-span-12 lg:col-span-6 xl:col-span-5 z-10 max-w-lg mx-auto lg:mx-0 lg:scale-[1.14] xl:scale-[1.18] origin-center lg:origin-left">
            
            {/* Top Pill Badge */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/90 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold text-teal-900 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{heroContent.badge}</span>
            </div>

            {/* Hero Main Heading */}
            <h1 className="font-sora text-[30px] xs:text-[34px] sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-brand-ink leading-[1.16] sm:leading-[1.15]">
              {heroContent.titlePrimary}{" "}
              <span className="block bg-gradient-to-r from-teal-900 via-teal-700 to-emerald-600 bg-clip-text text-transparent mt-1 sm:mt-0">
                {heroContent.titleHighlight}
              </span>
            </h1>

            {/* Concise Description */}
            <p className="mt-3 max-w-md lg:max-w-lg text-xs sm:text-sm lg:text-base leading-relaxed text-brand-muted">
              {heroContent.description}
            </p>

            {/* Actions */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto">
              <Button
                href="#contact"
                size="md"
                variant="primary"
                icon="arrow"
                iconPosition="right"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-950 via-teal-900 to-teal-900 shadow-md shadow-teal-950/20 hover:shadow-lg hover:shadow-teal-950/30 justify-center py-3.5 sm:py-3 text-xs sm:text-sm font-bold"
              >
                {heroContent.ctaPrimary}
              </Button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-brand-line/80 bg-white/90 px-4 py-3 sm:py-3 text-xs sm:text-sm font-bold text-brand-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:border-teal-700/40 hover:bg-white hover:text-teal-900 hover:shadow-md w-full sm:w-auto"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition-transform duration-200 group-hover:scale-110">
                  <Icon name="play" className="h-2.5 w-2.5 fill-teal-800 ml-0.5" />
                </span>
                <span>{heroContent.ctaSecondary}</span>
              </button>
            </div>

            {/* MOBILE ONLY: Live Interactive Micro-Preview Card (Brings real visual punch to mobile) */}
            <div className="lg:hidden w-full max-w-sm mt-5 rounded-2xl border border-slate-200/90 bg-gradient-to-b from-white to-[#f8faf9] p-3.5 shadow-lg shadow-teal-950/5 text-left">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-800">Équipement identifié</span>
                </div>
                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[9.5px] font-bold text-teal-800 border border-teal-200/60">
                  ● 100% Hors ligne
                </span>
              </div>

              <div className="mt-2.5 flex items-center gap-3">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 text-white shadow-xs">
                  <Icon name="qr" className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <b className="block text-xs font-bold text-slate-900 truncate">Pompe de relevage (PM-098)</b>
                  <span className="block text-[10.5px] text-slate-500 truncate">Hôtel Savana · Local Technique</span>
                </div>
              </div>

              <div className="mt-2.5 grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100 text-[10px]">
                <div className="rounded-lg bg-emerald-50/60 border border-emerald-100/60 px-2 py-1.5 text-center">
                  <span className="text-slate-500 block text-[9px]">Disponibilité</span>
                  <b className="text-emerald-700 font-bold text-[10.5px]">En service (98%)</b>
                </div>
                <div className="rounded-lg bg-teal-50/60 border border-teal-100/60 px-2 py-1.5 text-center">
                  <span className="text-slate-500 block text-[9px]">Prochaine action</span>
                  <b className="text-teal-900 font-bold text-[10.5px]">Service 500H</b>
                </div>
              </div>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-4 sm:mt-7 grid grid-cols-3 gap-1.5 sm:gap-2.5 border-t border-brand-line/60 pt-3.5 sm:pt-5 w-full max-w-sm sm:max-w-none">
              {heroContent.trustItems.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center sm:items-start text-center sm:text-left gap-1 rounded-xl border border-slate-200/90 bg-gradient-to-b from-white via-[#fcfdfd] to-[#f7f9f9] p-2 sm:p-2.5 shadow-xs backdrop-blur-md transition-all duration-300 hover:border-teal-400 hover:bg-white"
                >
                  <div className="flex items-center gap-1.5 w-full justify-center sm:justify-start">
                    <div className="flex h-5 w-5 sm:h-7 sm:w-7 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-700 text-teal-100 shadow-xs border border-teal-800/40">
                      <Icon name={item.icon} className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                    </div>
                    <b className="font-sora text-[10px] sm:text-xs font-bold text-slate-900 group-hover:text-teal-950 transition-colors leading-tight whitespace-nowrap">
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

          {/* Right Visual Column: Displayed ONLY on Desktop (Unchanged) */}
          <div className="hidden lg:flex relative lg:col-span-6 xl:col-span-7 mt-6 lg:mt-0 items-center justify-end">
            <div className="relative w-[130%] sm:w-[150%] lg:w-[170%] xl:w-[185%] max-w-none flex items-center justify-end lg:-mr-24 xl:-mr-36 translate-x-3 sm:translate-x-6 lg:translate-x-10 xl:translate-x-14 lg:scale-110 xl:scale-120 origin-center lg:origin-right">
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
