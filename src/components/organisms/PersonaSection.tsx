"use client";

import React, { useState } from "react";
import { Icon } from "../atoms/Icon";
import { TabButton } from "../molecules/TabButton";
import { personasSectionData } from "@/data/personas";

export function PersonaSection() {
  const [activePersonaKey, setActivePersonaKey] = useState<string>("direction");
  const persona =
    personasSectionData.personas[activePersonaKey] ||
    personasSectionData.personas.direction;

  const personaKeys = Object.keys(personasSectionData.personas);

  return (
    <section id="solutions" className="relative bg-white py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              {personasSectionData.eyebrow}
            </span>
            <h2 className="mt-2 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
              {personasSectionData.titlePrimary} <br />
              <span className="text-brand-muted font-normal">
                {personasSectionData.titleHighlight}
              </span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {personasSectionData.subtitle}
          </p>
        </div>

        {/* Persona Tabs Switcher - Zero Horizontal Scroll */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
          {personaKeys.map((key) => {
            const item = personasSectionData.personas[key];
            return (
              <TabButton
                key={key}
                variant="pill"
                active={activePersonaKey === key}
                onClick={() => setActivePersonaKey(key)}
                className="text-xs font-bold"
              >
                {item.tabLabel}
              </TabButton>
            );
          })}
        </div>

        {/* MOBILE ONLY (< lg): Compact Unified Role Card (~340px height) */}
        <div className="lg:hidden rounded-3xl border border-brand-line/80 bg-gradient-to-br from-[#f8fbfa] to-[#eef5f4] p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-brand-line/60 pb-2.5 mb-3">
            <span className="text-[10px] font-extrabold tracking-wider text-teal-800 uppercase">
              {persona.kicker}
            </span>
            <span className="text-[10px] font-bold text-brand-muted">
              {persona.siteName}
            </span>
          </div>

          <h3 className="font-sora text-base sm:text-lg font-bold text-brand-ink leading-snug">
            {persona.title}
          </h3>

          <p className="mt-1 text-xs text-brand-muted leading-relaxed">
            {persona.description}
          </p>

          {/* 3 Compact KPIs in 1 Responsive Row */}
          <div className="mt-3.5 grid grid-cols-3 gap-2 bg-white rounded-2xl p-2.5 border border-brand-line shadow-xs">
            {persona.kpis.map((kpi, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-[8.5px] text-brand-muted truncate max-w-full">
                  {kpi.label}
                </span>
                <b className="font-sora text-sm font-bold text-brand-ink my-0.5">
                  {kpi.value}
                </b>
                <span
                  className={`text-[8px] font-bold px-1.5 py-0.2 rounded-full ${
                    kpi.isAction
                      ? "bg-rose-50 text-rose-700 border border-rose-200"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  }`}
                >
                  {kpi.trend}
                </span>
              </div>
            ))}
          </div>

          {/* Key Bullet Highlights */}
          <div className="mt-3.5 space-y-1.5 border-t border-brand-line/60 pt-2.5">
            {persona.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-brand-ink">
                <span className="flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <Icon name="check" className="h-2 w-2" />
                </span>
                <span className="truncate">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW (lg+): Full 2-Column Experience with Rich Dashboard Mockup */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-brand-line/80 bg-gradient-to-br from-[#f8fbfa] to-[#eef5f4] p-10 lg:p-12 shadow-glow">
          <div className="grid grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="col-span-5 flex flex-col items-start">
              <span className="text-xs font-extrabold tracking-wider text-teal-800 uppercase">
                {persona.kicker}
              </span>

              <h3 className="mt-3 font-sora text-3xl font-bold text-brand-ink leading-tight">
                {persona.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                {persona.description}
              </p>

              <ul className="mt-8 space-y-3.5 w-full">
                {persona.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm font-semibold text-brand-ink"
                  >
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Persona Dashboard Mockup */}
            <div className="col-span-7">
              <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-brand-line/60 pb-3">
                  <span className="text-xs font-semibold text-brand-muted">
                    {persona.dashboardLabel}
                  </span>
                  <strong className="font-sora text-xs font-bold text-brand-ink">
                    {persona.siteName}
                  </strong>
                </div>

                {/* 3 KPIs */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {persona.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-brand-line bg-brand-bg/50 p-3"
                    >
                      <small className="block text-[10px] text-brand-muted">
                        {kpi.label}
                      </small>
                      <strong className="block font-sora text-xl font-bold text-brand-ink my-1">
                        {kpi.value}
                      </strong>
                      <span
                        className={`inline-block text-[9.5px] font-bold px-2 py-0.5 rounded-full ${
                          kpi.isAction
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {kpi.trend}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Main Area: Vector Chart + Top items ranking */}
                <div className="mt-4 grid grid-cols-12 gap-3">
                  {/* Vector Chart */}
                  <div className="col-span-7 rounded-xl border border-brand-line bg-brand-bg/30 p-3">
                    <div className="mb-2">
                      <b className="block text-xs font-bold text-brand-ink">
                        {persona.chartData.title}
                      </b>
                      <small className="text-[9.5px] text-brand-muted">
                        {persona.chartData.subtitle}
                      </small>
                    </div>
                    <div className="h-28 w-full bg-white rounded-lg border border-brand-line p-2">
                      <svg viewBox="0 0 480 160" className="h-full w-full" preserveAspectRatio="none">
                        <path d="M0 30H480M0 70H480M0 110H480M0 150H480" stroke="#f1f5f9" strokeWidth="1" />
                        <path
                          d="M0 120 C60 100, 80 70, 140 82 S230 130, 280 96 S360 65, 410 80 S445 82, 480 50 L480 160 H0 Z"
                          fill="rgba(14,75,74,0.08)"
                        />
                        <path
                          d="M0 120 C60 100, 80 70, 140 82 S230 130, 280 96 S360 65, 410 80 S445 82, 480 50"
                          fill="none"
                          stroke="#12625f"
                          strokeWidth="3"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Top Assets */}
                  <div className="col-span-5 rounded-xl border border-brand-line bg-brand-bg/30 p-3">
                    <b className="block text-xs font-bold text-brand-ink mb-2">
                      Actifs à surveiller
                    </b>
                    <div className="space-y-1.5 text-xs">
                      {persona.topAssets.map((asset, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between border-t border-brand-line/60 pt-2 first:border-t-0 first:pt-0"
                        >
                          <span className="font-semibold text-brand-muted truncate">
                            {asset.name}
                          </span>
                          <strong className="font-mono font-bold text-brand-ink">
                            {asset.cost}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
