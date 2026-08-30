"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "../atoms/Icon";
import { demoModalData } from "@/data/demo";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [activeTab, setActiveTab] = useState<"scan" | "ticket" | "work" | "history">("scan");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentStep = demoModalData.steps.find((s) => s.id === activeTab) || demoModalData.steps[0];
  const stepIds: ("scan" | "ticket" | "work" | "history")[] = ["scan", "ticket", "work", "history"];
  const currentStepIndex = stepIds.indexOf(activeTab);

  const handleNext = () => {
    if (currentStepIndex < stepIds.length - 1) {
      setActiveTab(stepIds[currentStepIndex + 1]);
    } else {
      onClose();
      const contactEl = document.getElementById("contact");
      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#051c1b]/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-white/40 bg-[#f6f9f8] p-4 sm:p-8 shadow-2xl z-10 overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fermer l'aperçu"
          className="absolute right-4 top-4 sm:right-6 sm:top-6 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full sm:rounded-xl border border-brand-line bg-white text-brand-muted hover:text-brand-ink shadow-xs transition-colors z-20"
        >
          <Icon name="close" className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Modal Heading */}
        <div className="text-center max-w-lg mx-auto mb-3 sm:mb-6 pr-8 pl-2 sm:px-0">
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-teal-800 uppercase">
            {demoModalData.eyebrow}
          </span>
          <h3 id="demo-modal-title" className="mt-0.5 font-sora text-lg sm:text-2xl lg:text-3xl font-bold text-brand-ink">
            {demoModalData.title}
          </h3>
          <p className="mt-0.5 text-[11px] sm:text-xs text-brand-muted">
            {demoModalData.subtitle}
          </p>
        </div>

        {/* Step Selector Tabs - 4 Symmetrical Columns on all screens */}
        <div className="grid grid-cols-4 gap-1 p-1 max-w-lg mx-auto w-full rounded-2xl border border-brand-line bg-white mb-4 shadow-xs">
          {demoModalData.steps.map((step) => {
            const isActive = activeTab === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveTab(step.id)}
                className={`flex items-center justify-center gap-1 sm:gap-1.5 rounded-xl py-1.5 sm:py-2 text-[10.5px] sm:text-xs font-bold transition-all ${
                  isActive
                    ? "bg-teal-900 text-white shadow-sm font-extrabold"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                <span className={`text-[9px] sm:text-[10px] ${isActive ? "text-teal-200" : "opacity-60"}`}>
                  {step.stepNumber}
                </span>
                <span className="truncate">{step.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Stage View (Adaptive Mobile + Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-8 items-center rounded-2xl border border-brand-line bg-white p-4 sm:p-8 shadow-xs">
          {/* Left Visual Scene */}
          <div className="md:col-span-6 flex justify-center">
            {activeTab === "scan" && (
              <div className="w-full max-w-[240px] sm:max-w-xs rounded-2xl border border-slate-900 bg-slate-950 p-2 shadow-lg">
                <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-b from-slate-800 to-slate-950 p-3 text-center text-white min-h-[160px] sm:min-h-[220px]">
                  <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-xl border border-dashed border-teal-400 bg-black/40 p-2">
                    <Icon name="qr" className="h-12 w-12 sm:h-14 sm:w-14 text-teal-100" />
                    <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-teal-300" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-teal-300" />
                    <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-teal-300" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-teal-300" />
                  </div>
                  <span className="mt-2 font-mono text-[9px] text-teal-300">
                    EQP-0001 détecté · Hôtel Savana
                  </span>
                </div>
              </div>
            )}

            {activeTab === "ticket" && (
              <div className="w-full max-w-[260px] sm:max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-3.5 sm:p-5 shadow-sm">
                <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[8.5px] sm:text-[9px] font-bold text-rose-800">
                  CRITIQUE
                </span>
                <h4 className="mt-1.5 font-sora text-xs sm:text-sm font-bold text-brand-ink">
                  Climatisation ne refroidit plus
                </h4>
                <p className="text-[10px] sm:text-[11px] text-brand-muted">
                  AC-014 · Hôtel Savana · Bloc principal
                </p>
                <div className="my-2.5 flex gap-3 text-[9.5px] text-brand-muted border-y border-brand-line/60 py-1.5">
                  <span>📷 2 photos</span>
                  <span>⏱ il y a 2 min</span>
                </div>
                <div className="rounded-lg bg-teal-900 py-1.5 text-[10px] font-bold text-white text-center shadow-xs">
                  Ordre de travail généré
                </div>
              </div>
            )}

            {activeTab === "work" && (
              <div className="w-full max-w-[260px] sm:max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-3.5 sm:p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-brand-line/60 pb-1.5 mb-2">
                  <span className="text-[8.5px] font-bold text-brand-muted uppercase">
                    INTERVENTION EN COURS
                  </span>
                  <strong className="font-sora text-xs sm:text-sm text-teal-800">
                    00:36:24
                  </strong>
                </div>
                <h4 className="font-sora text-xs sm:text-sm font-bold text-brand-ink mb-1.5">
                  Service 500H · GE-001
                </h4>
                <ul className="space-y-1 text-[10px] sm:text-xs">
                  <li className="flex items-center gap-1.5 rounded-lg bg-emerald-50 text-emerald-800 p-1.5 font-medium">
                    <Icon name="check" className="h-3 w-3 text-emerald-600" />
                    <span>Contrôle niveau huile</span>
                  </li>
                  <li className="flex items-center gap-1.5 rounded-lg bg-emerald-50 text-emerald-800 p-1.5 font-medium">
                    <Icon name="check" className="h-3 w-3 text-emerald-600" />
                    <span>Remplacement filtre</span>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "history" && (
              <div className="w-full max-w-[260px] sm:max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-3.5 sm:p-5 shadow-sm space-y-2.5 text-[10px] sm:text-xs">
                <div className="relative pl-4 border-l-2 border-teal-700 space-y-2.5">
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-teal-700 ring-2 ring-teal-100" />
                    <small className="text-[8px] font-bold text-brand-muted">18 MAI 2026</small>
                    <b className="block text-[11px] font-bold text-brand-ink leading-tight">Maintenance 500H terminée</b>
                    <p className="text-[9.5px] text-brand-muted">Filtre remplacé · 128 500 FCFA</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full bg-teal-700 ring-2 ring-teal-100" />
                    <small className="text-[8px] font-bold text-brand-muted">02 AVRIL 2026</small>
                    <b className="block text-[11px] font-bold text-brand-ink leading-tight">Incident batterie résolu</b>
                    <p className="text-[9.5px] text-brand-muted">Sous garantie</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right / Bottom Explanation */}
          <div className="md:col-span-6 flex flex-col justify-center text-left">
            <span className="text-[10px] sm:text-xs font-extrabold tracking-wider text-teal-800 uppercase">
              {currentStep.subtitle}
            </span>
            <h4 className="mt-1 font-sora text-base sm:text-xl font-bold text-brand-ink leading-snug">
              {currentStep.title}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-brand-muted">
              {currentStep.description}
            </p>

            <div className="mt-4 flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-teal-900 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-teal-950 transition-all"
              >
                <span>{currentStepIndex === 3 ? "Rejoindre le pilote" : "Étape suivante"}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
