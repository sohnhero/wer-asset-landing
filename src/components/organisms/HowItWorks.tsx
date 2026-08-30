"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { TabButton } from "../molecules/TabButton";
import { howItWorksData } from "@/data/howItWorks";

import { MotionFadeIn } from "../atoms/Motion";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = howItWorksData.steps[activeStep] || howItWorksData.steps[1];

  return (
    <section id="how" className="relative bg-white py-16 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <MotionFadeIn className="mx-auto max-w-3xl text-center mb-8 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {howItWorksData.eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
            {howItWorksData.titlePrimary} <br />
            <span className="text-[#F2B01E] font-normal">{howItWorksData.titleHighlight}</span>
          </h2>
        </MotionFadeIn>

        {/* MOBILE ONLY (< lg): Compact, App-Like Interactive Step Experience */}
        <div className="lg:hidden">
          {/* Mobile 4-Step Segmented Navigator - Zero Horizontal Scroll */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100/90 rounded-2xl border border-brand-line mb-4">
            {[1, 2, 3, 4].map((stepNum) => {
              const step = howItWorksData.steps[stepNum];
              const isActive = activeStep === stepNum;
              return (
                <button
                  key={stepNum}
                  type="button"
                  onClick={() => setActiveStep(stepNum)}
                  className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all ${
                    isActive
                      ? "bg-teal-900 text-white shadow-sm font-bold"
                      : "text-brand-muted hover:text-brand-ink"
                  }`}
                >
                  <span className={`text-[9px] font-extrabold ${isActive ? "text-teal-200" : "text-brand-muted"}`}>
                    0{stepNum}
                  </span>
                  <span className="text-[10px] truncate max-w-full font-medium">
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Unified Compact Mobile Card */}
          <div className="rounded-3xl border border-brand-line/80 bg-gradient-to-br from-[#fbfdfc] to-[#f2f7f6] p-5 shadow-sm">
            <span className="inline-block rounded-full border border-teal-200 bg-white px-3 py-0.5 text-[10px] font-bold text-teal-800 shadow-xs mb-2">
              ÉTAPE <b className="text-teal-950">0{activeStep}</b>
            </span>

            <h3 className="font-sora text-lg sm:text-xl font-bold text-brand-ink leading-snug">
              {current.title}
            </h3>

            <p className="mt-1.5 text-xs leading-relaxed text-brand-muted">
              {current.description}
            </p>

            {/* Compact Step Highlights */}
            <div className="my-4 space-y-1.5 border-t border-b border-brand-line/60 py-3 text-xs">
              {current.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2 text-brand-ink text-[11px] font-medium">
                  <span className="flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <Icon name="check" className="h-2.5 w-2.5" />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Compact Interactive Screen Box */}
            <div className="rounded-2xl border border-teal-900/15 bg-white p-3.5 shadow-sm">
              {activeStep === 1 && (
                <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 p-4 text-center text-white">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-xl border border-dashed border-teal-400/60 bg-black/40 p-2">
                    <Icon name="qr" className="h-14 w-14 text-teal-100" />
                    <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-teal-300" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-teal-300" />
                    <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-teal-300" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-teal-300" />
                  </div>
                  <span className="mt-2 text-[9.5px] text-teal-200 font-mono">
                    Cadrez le QR code de l'actif
                  </span>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center gap-2 rounded-lg border border-brand-line bg-brand-bg/60 p-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-teal-50 font-bold text-teal-800 text-[8px]">
                      GE
                    </span>
                    <div>
                      <b className="block text-brand-ink text-[10px] leading-tight">Groupe 500 KVA</b>
                      <small className="text-brand-muted text-[8px]">EQP-0001 · Hôtel Savana</small>
                    </div>
                  </div>
                  <div className="rounded-lg bg-rose-50 border border-rose-200 p-2 text-rose-700 font-semibold flex items-center justify-between">
                    <span>Niveau d'urgence : Critique</span>
                    <span>1 photo jointe</span>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center justify-between border-b border-brand-line/60 pb-1.5">
                    <b className="text-brand-ink text-[10px]">Service 500H en cours</b>
                    <span className="font-mono font-bold text-teal-900">00:36:24</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 p-1.5 text-emerald-800 text-[9px] font-medium">
                      ✓ Contrôle huile
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 border border-emerald-200 p-1.5 text-emerald-800 text-[9px] font-medium">
                      ✓ Filtre remplacé
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-2 text-[10px]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[8px] text-brand-muted">TCO Global</span>
                      <strong className="block font-sora text-sm font-bold text-teal-900">18,4 M FCFA</strong>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
                      −8.6% ce mois
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW (lg+): Full 2-Column Experience with Large Phone Simulation */}
        <MotionFadeIn delay={0.1} className="hidden lg:block overflow-hidden rounded-3xl border border-brand-line/80 bg-gradient-to-br from-[#fbfdfc] to-[#f2f7f6] shadow-glow">
          {/* Top Step Tabs */}
          <div className="grid grid-cols-4 border-b border-brand-line bg-white/70 backdrop-blur-md">
            {[1, 2, 3, 4].map((stepNum) => {
              const step = howItWorksData.steps[stepNum];
              return (
                <TabButton
                  key={stepNum}
                  variant="line"
                  active={activeStep === stepNum}
                  onClick={() => setActiveStep(stepNum)}
                  stepNumber={`0${stepNum}`}
                >
                  {step.label}
                </TabButton>
              );
            })}
          </div>

          {/* Step Content: Left Copy + Right Mobile Simulation */}
          <div className="grid grid-cols-12 gap-12 p-12 lg:p-16 items-center">
            {/* Left Copy */}
            <div className="col-span-6 flex flex-col items-start">
              <span className="rounded-full border border-teal-200 bg-white px-3.5 py-1 text-xs font-bold text-teal-800 shadow-xs">
                ÉTAPE <b className="text-teal-950">0{activeStep}</b>
              </span>

              <h3 className="mt-4 font-sora text-3xl lg:text-4xl font-bold text-brand-ink leading-tight">
                {current.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                {current.description}
              </p>

              <ul className="mt-8 space-y-3.5 w-full">
                {current.highlights.map((highlight, idx) => (
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

            {/* Right Visual Phone Simulation */}
            <div className="col-span-6 relative flex items-center justify-center">
              {/* Decorative floating orbit badges */}
              <div className="absolute -left-4 top-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-100 bg-white text-teal-700 shadow-card animate-float">
                <Icon name="qr" className="h-6 w-6" />
              </div>
              <div className="absolute -right-4 top-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-100 bg-white text-gold-dark shadow-card animate-float-delayed">
                <Icon name="wrench" className="h-6 w-6" />
              </div>
              <div className="absolute right-8 -bottom-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-100 bg-white text-sky-700 shadow-card animate-float">
                <Icon name="chart" className="h-6 w-6" />
              </div>

              {/* Smartphone Frame */}
              <div className="relative w-[300px] rounded-[40px] border-4 border-slate-950 bg-slate-950 p-2.5 shadow-2xl overflow-hidden z-10">
                <div className="relative h-[480px] rounded-[32px] bg-[#f7f9f9] overflow-hidden flex flex-col">
                  {/* Phone Header */}
                  <div className="flex h-8 items-center justify-between bg-teal-900 px-4 text-[9px] text-white">
                    <span>9:41</span>
                    <div className="h-1.5 w-12 rounded-full bg-black/40" />
                    <span>⚡ 100%</span>
                  </div>

                  <div className="flex items-center justify-between bg-teal-900 px-3.5 pb-2.5 text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded bg-white p-0.5">
                        <Image src="/assets/logo-mark.png" alt="" width={16} height={16} />
                      </div>
                      <b className="text-[10px]">
                        {activeStep === 1
                          ? "Scanner un QR"
                          : activeStep === 2
                          ? "Nouveau ticket"
                          : activeStep === 3
                          ? "Ordre de travail"
                          : "Tableau TCO"}
                      </b>
                    </div>
                    <span className="text-teal-200 text-xs">●</span>
                  </div>

                  {/* Dynamic Screen Content */}
                  <div className="flex-1 p-3.5 overflow-y-auto">
                    {/* Screen 1: QR Scanner */}
                    {activeStep === 1 && (
                      <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-slate-700 to-slate-950 p-4 text-center text-white">
                        <div className="relative flex h-36 w-36 items-center justify-center rounded-2xl border-2 border-dashed border-teal-400/60 bg-black/40 p-4">
                          <Icon name="qr" className="h-20 w-20 text-teal-100" />
                          <span className="absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-teal-300" />
                          <span className="absolute -top-1.5 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-teal-300" />
                          <span className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-teal-300" />
                          <span className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-teal-300" />
                        </div>
                        <p className="mt-4 text-[10px] text-teal-200 font-mono">
                          Cadrez le QR code de l'actif
                        </p>
                      </div>
                    )}

                    {/* Screen 2: Signalement Ticket */}
                    {activeStep === 2 && (
                      <div className="space-y-2.5 text-[10px]">
                        <div className="flex items-center gap-2 rounded-xl border border-brand-line bg-white p-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-50 font-bold text-teal-800 text-[9px]">
                            GE
                          </span>
                          <div>
                            <b className="block text-brand-ink text-[11px] leading-tight">
                              Groupe 500 KVA
                            </b>
                            <small className="text-brand-muted text-[8.5px]">
                              EQP-0001 · Hôtel Savana
                            </small>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[8.5px] font-bold text-brand-muted mb-1">
                            Description du problème
                          </label>
                          <textarea
                            readOnly
                            rows={3}
                            value="La température monte anormalement en charge..."
                            className="w-full rounded-xl border border-brand-line bg-white p-2 text-[10px] text-brand-ink outline-none resize-none"
                          />
                        </div>

                        <div>
                          <span className="block text-[8.5px] font-bold text-brand-muted mb-1">
                            Niveau d'urgence
                          </span>
                          <div className="flex gap-2">
                            <span className="rounded-lg border border-brand-line bg-white px-2.5 py-1 text-[9px] font-semibold text-brand-muted">
                              Faible
                            </span>
                            <span className="rounded-lg bg-rose-50 border border-rose-200 px-2.5 py-1 text-[9px] font-bold text-rose-700">
                              Critique
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-300 bg-white p-2.5 text-brand-muted">
                          <Icon name="plus" className="h-3.5 w-3.5" />
                          <span className="text-[9px] font-bold">1 photo jointe</span>
                        </div>

                        <button className="w-full rounded-xl bg-teal-900 py-2.5 text-[10px] font-bold text-white shadow-md">
                          Créer le ticket
                        </button>
                      </div>
                    )}

                    {/* Screen 3: Work Order */}
                    {activeStep === 3 && (
                      <div className="space-y-3 text-[10px]">
                        <div className="border-b border-brand-line pb-2">
                          <span className="text-[8px] font-bold uppercase tracking-wider text-brand-muted">
                            ORDRE DE TRAVAIL
                          </span>
                          <h4 className="font-sora text-sm font-bold text-brand-ink">
                            Service 500H
                          </h4>
                          <p className="text-[8.5px] text-brand-muted">
                            GE-001 · Hôtel Savana
                          </p>
                        </div>

                        <div className="rounded-xl bg-teal-50 border border-teal-100 p-3 text-center">
                          <span className="font-sora text-xl font-bold text-teal-900 block">
                            00:36:24
                          </span>
                          <small className="text-[8px] uppercase tracking-wider text-teal-700 font-bold">
                            Intervention en cours
                          </small>
                        </div>

                        <ul className="space-y-1.5">
                          <li className="flex items-center gap-2 rounded-lg bg-white border border-brand-line p-2">
                            <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Contrôle niveau huile</span>
                          </li>
                          <li className="flex items-center gap-2 rounded-lg bg-white border border-brand-line p-2">
                            <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Remplacement filtre</span>
                          </li>
                          <li className="flex items-center gap-2 rounded-lg bg-white border border-brand-line p-2 text-brand-muted">
                            <span className="h-3.5 w-3.5 rounded-full border border-slate-300" />
                            <span>Inspection fuite</span>
                          </li>
                        </ul>

                        <button className="w-full rounded-xl bg-teal-900 py-2.5 text-[10px] font-bold text-white shadow-md">
                          Clôturer l'intervention
                        </button>
                      </div>
                    )}

                    {/* Screen 4: Analytics */}
                    {activeStep === 4 && (
                      <div className="space-y-3 text-[10px]">
                        <div>
                          <small className="text-[8.5px] text-brand-muted uppercase tracking-wider">
                            ÉQUIPEMENT
                          </small>
                          <h4 className="font-sora text-sm font-bold text-brand-ink">
                            GE-001
                          </h4>
                          <p className="text-[8.5px] text-brand-muted">
                            Coût total de possession (TCO)
                          </p>
                          <strong className="block font-sora text-xl font-bold text-teal-900 mt-1">
                            18,4 M <em className="text-xs font-normal not-italic text-brand-muted">FCFA</em>
                          </strong>
                        </div>

                        {/* Bar chart */}
                        <div className="h-28 rounded-xl bg-white border border-brand-line p-2 flex items-end justify-between gap-1.5">
                          <span className="h-[45%] flex-1 rounded-t bg-teal-700/40" />
                          <span className="h-[60%] flex-1 rounded-t bg-teal-700/60" />
                          <span className="h-[52%] flex-1 rounded-t bg-teal-700/50" />
                          <span className="h-[78%] flex-1 rounded-t bg-teal-700/80" />
                          <span className="h-[65%] flex-1 rounded-t bg-teal-700/70" />
                          <span className="h-[86%] flex-1 rounded-t bg-teal-900" />
                        </div>

                        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 p-2 text-emerald-800">
                          <Icon name="trending-down" className="h-4 w-4 text-emerald-600" />
                          <div>
                            <b className="block text-[9.5px] leading-tight">Coût mensuel en baisse</b>
                            <small className="text-[8px] text-emerald-700">−8.6% vs mois précédent</small>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
