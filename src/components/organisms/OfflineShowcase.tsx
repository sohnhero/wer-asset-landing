import React from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { offlineSectionData } from "@/data/offline";

export function OfflineShowcase() {
  const { eyebrow, titlePrimary, titleHighlight, description, highlights, ctaText, fieldPhone } =
    offlineSectionData;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#052e2d] via-[#083b39] to-[#0e5551] py-14 sm:py-24 lg:py-32 text-white">
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
        {/* MOBILE ONLY (< lg): Compact & Impactful Offline Showcase (~420px total height) */}
        <div className="lg:hidden flex flex-col items-start text-left">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-extrabold tracking-widest text-teal-200 uppercase backdrop-blur-md">
            {eyebrow}
          </span>

          <h2 className="mt-3 font-sora text-2xl font-bold tracking-tight leading-tight">
            {titlePrimary} <br />
            <span className="text-teal-200 font-normal">{titleHighlight}</span>
          </h2>

          <p className="mt-2.5 text-xs leading-relaxed text-teal-100/80">
            {description}
          </p>

          {/* 3 Compact Checklist Points */}
          <div className="my-4 space-y-2 w-full">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs text-teal-50">
                <span className="flex h-5 w-5 flex-none items-center justify-center rounded-lg bg-white/10 text-emerald-400 border border-white/10">
                  <Icon name="check" className="h-3 w-3" />
                </span>
                <b className="font-semibold text-[11px] leading-tight">{item.title}</b>
              </div>
            ))}
          </div>

          {/* Compact Mobile Offline Status Box */}
          <div className="w-full rounded-2xl border border-white/15 bg-black/25 p-3.5 backdrop-blur-md my-2">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[11px] font-bold text-amber-200">Mode Hors Ligne Actif</span>
              </div>
              <span className="text-[10px] text-teal-200 font-mono">3 actions en attente</span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-teal-100/90">
              <span>EQP-0001 · Service 500H validé</span>
              <span className="text-emerald-400 font-bold">✓ Enregistré local</span>
            </div>
          </div>

          <div className="mt-4 w-full">
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

        {/* DESKTOP VIEW (lg+): Full 2-Column Experience with Large Smartphone Frame */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="col-span-6 flex flex-col items-start">
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

          {/* Right Column: Field Smartphone + Floating Sync badges */}
          <div className="col-span-6 relative flex items-center justify-center min-h-[540px]">
            {/* Floating Sync Pill */}
            <div className="absolute left-4 top-16 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-brand-ink shadow-xl backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100">
                <Icon name="cloud" className="h-5 w-5" />
              </div>
              <div>
                <b className="block text-xs font-bold leading-tight">
                  {fieldPhone.syncActionsCount} actions en attente
                </b>
                <small className="block text-[10px] text-brand-muted">
                  Synchronisation auto
                </small>
              </div>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-teal-700 ml-1" />
            </div>

            {/* Floating Battery Pill */}
            <div className="absolute right-4 bottom-16 z-20 flex flex-col rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 text-brand-ink shadow-xl backdrop-blur-md">
              <b className="font-sora text-sm font-bold text-teal-900 leading-tight">
                {fieldPhone.batteryLevel}
              </b>
              <span className="text-[9.5px] text-brand-muted font-medium">
                Fonctionnel hors réseau
              </span>
            </div>

            {/* Field Phone Frame */}
            <div className="relative w-[320px] rounded-[42px] border-4 border-slate-950 bg-slate-950 p-2.5 shadow-2xl rotate-2">
              <div className="relative h-[520px] rounded-[34px] bg-[#f6f8f8] overflow-hidden flex flex-col text-brand-ink">
                {/* Status Bar */}
                <div className="flex h-8 items-center justify-between bg-teal-900 px-4 text-[9px] text-white">
                  <span>9:41</span>
                  <div className="h-1.5 w-12 rounded-full bg-black/40" />
                  <span>● ● ▰</span>
                </div>

                {/* Head */}
                <div className="flex items-center justify-between bg-teal-900 px-3.5 pb-2.5 text-white">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white p-0.5">
                      <Image src="/assets/logo-mark.png" alt="" width={18} height={18} />
                    </div>
                    <span className="text-[10px] font-bold">WËR ASSET</span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[8.5px] font-bold text-amber-300 border border-amber-300/30">
                    <i className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    Hors ligne
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 overflow-y-auto pb-16">
                  {/* Warning Strip */}
                  <div className="mb-3 flex items-center justify-between rounded-xl bg-amber-50 border border-amber-200 p-2.5 text-[9px] text-amber-800 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <span>⚠</span>
                      <span>Mode déconnecté actif</span>
                    </div>
                    <b className="text-[8px] bg-white px-1.5 py-0.5 rounded border border-amber-200">
                      {fieldPhone.syncActionsCount} en attente
                    </b>
                  </div>

                  <span className="text-[8px] uppercase tracking-wider text-brand-muted font-bold">
                    ORDRES DE TRAVAIL DU JOUR
                  </span>

                  <div className="mt-2 space-y-2">
                    {fieldPhone.jobs.map((job, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-brand-line bg-white p-2.5 shadow-xs"
                      >
                        <div className="flex items-center justify-between">
                          <b className="font-sora text-[10.5px] text-brand-ink">
                            {job.title}
                          </b>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[7.5px] font-bold ${
                              job.isCritical
                                ? "bg-rose-50 text-rose-700 border border-rose-200"
                                : "bg-teal-50 text-teal-800 border border-teal-200"
                            }`}
                          >
                            {job.type}
                          </span>
                        </div>
                        <small className="block text-[8px] text-brand-muted mt-0.5">
                          {job.location} · {job.time}
                        </small>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-dashed border-teal-300 bg-teal-50/50 p-3 text-center">
                    <span className="block text-[9px] font-bold text-teal-900">
                      Photos & relevés stockés en local
                    </span>
                    <small className="block text-[7.5px] text-teal-700 mt-0.5">
                      Envoi automatique au retour du réseau
                    </small>
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
