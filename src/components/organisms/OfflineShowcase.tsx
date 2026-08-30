import React from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { offlineSectionData } from "@/data/offline";

export function OfflineShowcase() {
  const { eyebrow, titlePrimary, titleHighlight, description, highlights, ctaText, fieldPhone } =
    offlineSectionData;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#052e2d] via-[#083b39] to-[#0e5551] py-24 sm:py-32 text-white">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-extrabold tracking-widest text-teal-200 uppercase backdrop-blur-md">
              {eyebrow}
            </span>

            <h2 className="mt-4 font-sora text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              {titlePrimary} <br />
              <span className="text-teal-200/80 font-normal">{titleHighlight}</span>
            </h2>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-teal-100/80 max-w-xl">
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
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[540px]">
            {/* Floating Sync Pill */}
            <div className="absolute -left-2 sm:left-4 top-16 z-20 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3 text-brand-ink shadow-2xl backdrop-blur-md">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100">
                <Icon name="cloud" className="h-5 w-5" />
              </div>
              <div>
                <b className="block text-xs font-bold leading-tight">
                  {fieldPhone.syncActionsCount} actions en attente
                </b>
                <small className="block text-[10px] text-brand-muted">
                  Synchronisation automatique
                </small>
              </div>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-200 border-t-teal-700 ml-1" />
            </div>

            {/* Floating Battery Pill */}
            <div className="absolute -right-2 sm:right-4 bottom-16 z-20 flex flex-col rounded-2xl border border-white/80 bg-white/95 px-4 py-2.5 text-brand-ink shadow-2xl backdrop-blur-md">
              <b className="font-sora text-sm font-bold text-teal-900 leading-tight">
                {fieldPhone.batteryLevel}
              </b>
              <span className="text-[9.5px] text-brand-muted font-medium">
                Fonctionnel hors réseau
              </span>
            </div>

            {/* Field Phone Frame */}
            <div className="relative w-[300px] sm:w-[320px] rounded-[42px] border-4 border-slate-950 bg-slate-950 p-2.5 shadow-2xl rotate-2">
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
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-[8.5px] font-bold text-gold-light border border-amber-300/30">
                    <i className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Hors ligne
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-4 overflow-y-auto pb-16">
                  <small className="text-[8.5px] font-bold uppercase tracking-wider text-brand-muted">
                    {fieldPhone.userName}
                  </small>
                  <h4 className="font-sora text-sm font-bold text-brand-ink mb-3">
                    {fieldPhone.summary}
                  </h4>

                  <div className="space-y-2">
                    {fieldPhone.jobs.map((job, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between rounded-xl border p-2.5 shadow-xs transition-colors bg-white ${
                          job.isCritical
                            ? "border-rose-200 bg-rose-50/20"
                            : "border-brand-line"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <time className="font-mono text-[10px] font-bold text-brand-muted border-r border-brand-line pr-2">
                            {job.time}
                          </time>
                          <div>
                            <span
                              className={`inline-block text-[7.5px] font-bold px-1.5 py-0.5 rounded ${
                                job.isCritical
                                  ? "bg-rose-100 text-rose-800"
                                  : "bg-teal-100 text-teal-800"
                              }`}
                            >
                              {job.type}
                            </span>
                            <b className="block text-[11px] font-bold text-brand-ink leading-tight mt-0.5">
                              {job.title}
                            </b>
                            <small className="text-[8.5px] text-brand-muted">
                              {job.location}
                            </small>
                          </div>
                        </div>
                        <span className="text-brand-muted text-xs font-bold">›</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Navigation Bar */}
                <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-around border-t border-brand-line bg-white/95 px-2 text-brand-muted">
                  <div className="flex flex-col items-center text-[8px]">
                    <Icon name="box" className="h-4 w-4 text-teal-800" />
                    <span>Accueil</span>
                  </div>
                  <div className="flex flex-col items-center text-[8px]">
                    <Icon name="ticket" className="h-4 w-4" />
                    <span>Tickets</span>
                  </div>
                  {/* Floating Action Button */}
                  <div className="-mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-teal-800 text-white shadow-lg shadow-teal-900/30">
                    <Icon name="qr" className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-center text-[8px]">
                    <Icon name="stock" className="h-4 w-4" />
                    <span>Actifs</span>
                  </div>
                  <div className="flex flex-col items-center text-[8px]">
                    <Icon name="users" className="h-4 w-4" />
                    <span>Profil</span>
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
