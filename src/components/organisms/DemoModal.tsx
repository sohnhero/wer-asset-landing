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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#051c1b]/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/40 bg-[#f6f9f8] p-6 sm:p-10 shadow-2xl z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Fermer l'aperçu"
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line bg-white text-brand-muted hover:text-brand-ink shadow-xs transition-colors"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>

        {/* Modal Heading */}
        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="text-[11px] font-extrabold tracking-widest text-teal-800 uppercase">
            {demoModalData.eyebrow}
          </span>
          <h3 id="demo-modal-title" className="mt-1 font-sora text-2xl sm:text-3xl font-bold text-brand-ink">
            {demoModalData.title}
          </h3>
          <p className="mt-2 text-xs md:text-sm text-brand-muted">
            {demoModalData.subtitle}
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="grid grid-cols-4 gap-1.5 max-w-xl mx-auto rounded-2xl border border-brand-line bg-white p-1.5 mb-8 shadow-xs">
          {demoModalData.steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs font-bold transition-all ${
                activeTab === step.id
                  ? "bg-teal-900 text-white shadow-sm"
                  : "text-brand-muted hover:text-brand-ink"
              }`}
            >
              <span className="text-[10px] opacity-75">{step.stepNumber}</span>
              <span className="hidden sm:inline">{step.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Stage View */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-2xl border border-brand-line bg-white p-6 sm:p-10 shadow-sm min-h-[380px]">
          {/* Left Visual Scene */}
          <div className="md:col-span-6 flex justify-center">
            {activeTab === "scan" && (
              <div className="w-52 h-80 rounded-[32px] border-4 border-slate-950 bg-slate-950 p-2 shadow-xl">
                <div className="flex h-full flex-col rounded-[24px] bg-gradient-to-b from-slate-700 to-slate-950 p-3 text-center text-white">
                  <div className="flex items-center justify-between text-[8px] text-teal-200 mb-4">
                    <span>Scanner QR</span>
                    <span>⚡</span>
                  </div>
                  <div className="my-auto flex flex-col items-center justify-center">
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-xl border border-dashed border-teal-400 bg-black/40 p-2">
                      <Icon name="qr" className="h-14 w-14 text-teal-100" />
                      <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-teal-300" />
                      <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-teal-300" />
                      <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-teal-300" />
                      <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-teal-300" />
                    </div>
                    <span className="mt-3 font-mono text-[9px] text-teal-300">
                      EQP-0001 détecté
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ticket" && (
              <div className="w-full max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-5 shadow-md">
                <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[9px] font-bold text-rose-800">
                  CRITIQUE
                </span>
                <h4 className="mt-2 font-sora text-sm font-bold text-brand-ink">
                  Climatisation ne refroidit plus
                </h4>
                <p className="text-[11px] text-brand-muted mt-0.5">
                  AC-014 · Hôtel Savana · Bloc principal
                </p>
                <div className="my-4 flex gap-4 text-[10px] text-brand-muted border-y border-brand-line/60 py-2">
                  <span>📷 2 photos</span>
                  <span>⏱ il y a 2 min</span>
                </div>
                <button className="w-full rounded-xl bg-teal-900 py-2.5 text-xs font-bold text-white shadow-sm">
                  Créer l'ordre de travail →
                </button>
              </div>
            )}

            {activeTab === "work" && (
              <div className="w-full max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-5 shadow-md">
                <div className="flex items-center justify-between border-b border-brand-line/60 pb-2 mb-3">
                  <span className="text-[9px] font-bold text-brand-muted uppercase">
                    INTERVENTION EN COURS
                  </span>
                  <strong className="font-sora text-sm text-teal-800">
                    00:36:24
                  </strong>
                </div>
                <h4 className="font-sora text-sm font-bold text-brand-ink mb-2">
                  Service 500H · GE-001
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-center gap-2 rounded-lg bg-emerald-50 text-emerald-800 p-2 font-medium">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Contrôle niveau huile</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg bg-emerald-50 text-emerald-800 p-2 font-medium">
                    <Icon name="check" className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Remplacement filtre</span>
                  </li>
                  <li className="flex items-center gap-2 rounded-lg bg-slate-50 text-brand-muted p-2 font-medium">
                    <span className="h-3 w-3 rounded-full border border-slate-300" />
                    <span>Inspection fuite</span>
                  </li>
                </ul>
                <button className="w-full rounded-xl bg-teal-900 py-2.5 text-xs font-bold text-white shadow-sm mt-4">
                  Clôturer l'intervention
                </button>
              </div>
            )}

            {activeTab === "history" && (
              <div className="w-full max-w-sm rounded-2xl border border-brand-line bg-[#fbfcfc] p-5 shadow-md space-y-4">
                <div className="relative pl-6 border-l-2 border-teal-700 space-y-4">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-3 w-3 rounded-full bg-teal-700 ring-4 ring-teal-100" />
                    <small className="text-[9px] font-bold text-brand-muted">18 MAI 2026</small>
                    <b className="block text-xs font-bold text-brand-ink leading-tight">Maintenance 500H terminée</b>
                    <p className="text-[10px] text-brand-muted">Filtre huile remplacé · 2h14 · 128 500 FCFA</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-3 w-3 rounded-full bg-teal-700 ring-4 ring-teal-100" />
                    <small className="text-[9px] font-bold text-brand-muted">02 AVRIL 2026</small>
                    <b className="block text-xs font-bold text-brand-ink leading-tight">Incident batterie</b>
                    <p className="text-[10px] text-brand-muted">Batterie remplacée sous garantie</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 h-3 w-3 rounded-full bg-teal-700 ring-4 ring-teal-100" />
                    <small className="text-[9px] font-bold text-brand-muted">12 MAI 2021</small>
                    <b className="block text-xs font-bold text-brand-ink leading-tight">Équipement installé</b>
                    <p className="text-[10px] text-brand-muted">Groupe SDMO · 15 000 000 FCFA</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Explanation */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-extrabold tracking-wider text-teal-800 uppercase">
              {currentStep.subtitle}
            </span>
            <h4 className="mt-2 font-sora text-xl sm:text-2xl font-bold text-brand-ink leading-snug">
              {currentStep.title}
            </h4>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-brand-muted">
              {currentStep.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
