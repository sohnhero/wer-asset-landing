"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "../atoms/Icon";
import { featuresSectionData } from "@/data/features";

export function BentoFeatures() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, bentoItems } =
    featuresSectionData;
  const [activeMobileTab, setActiveMobileTab] = useState<
    "qr" | "preventive" | "tickets" | "costs" | "stock"
  >("qr");

  const mobileTabs = [
    { id: "qr", label: "QR-First", icon: "qr" },
    { id: "preventive", label: "Préventif", icon: "wrench" },
    { id: "tickets", label: "Tickets", icon: "ticket" },
    { id: "costs", label: "Coûts & KPI", icon: "chart" },
    { id: "stock", label: "Stocks", icon: "stock" },
  ] as const;

  return (
    <section id="features" className="relative bg-[#f4f7f6] py-16 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 lg:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
              {titlePrimary} <br />
              <span className="text-brand-muted font-normal">{titleHighlight}</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* MOBILE ONLY (< lg): Interactive Feature Switcher (Replaces 2,500px of scrolling with a single engaging 400px card) */}
        <div className="lg:hidden">
          {/* Mobile Horizontal Pill Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 -mx-5 px-5">
            {mobileTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveMobileTab(tab.id)}
                className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold whitespace-nowrap transition-all duration-200 shadow-xs ${
                  activeMobileTab === tab.id
                    ? "bg-teal-900 text-white shadow-md"
                    : "bg-white text-brand-muted border border-brand-line hover:border-teal-300"
                }`}
              >
                <Icon name={tab.icon} className="h-3.5 w-3.5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Active Feature Card Container */}
          <div className="transition-all duration-300">
            {/* 1. QR First */}
            {activeMobileTab === "qr" && (
              <article className="rounded-3xl border border-teal-900/20 bg-gradient-to-br from-[#062e2d] via-[#0b4745] to-[#083533] p-6 text-white shadow-glow">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-teal-200 border border-white/10">
                  <Icon name="qr" className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-teal-300 uppercase">
                  {bentoItems.qrFirst.kicker}
                </span>
                <h3 className="mt-1 font-sora text-xl font-bold">
                  {bentoItems.qrFirst.title}
                </h3>
                <p className="mt-2 text-xs text-teal-100/80 leading-relaxed">
                  {bentoItems.qrFirst.description}
                </p>

                <div className="mt-6 flex items-center justify-center rounded-2xl bg-black/20 p-4 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white p-2 shadow">
                      <Icon name="qr" className="h-10 w-10 text-brand-ink" />
                      <span className="text-[7px] font-mono font-bold text-brand-ink">EQP-0001</span>
                    </div>
                    <div>
                      <strong className="block text-xs font-bold text-white">Scanner 1 clic</strong>
                      <span className="block text-[10px] text-teal-200">Accès instantané à l'historique complet</span>
                    </div>
                  </div>
                </div>
              </article>
            )}

            {/* 2. Preventive */}
            {activeMobileTab === "preventive" && (
              <article className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                  <Icon name="wrench" className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-amber-800 uppercase">
                  {bentoItems.preventive.kicker}
                </span>
                <h3 className="mt-1 font-sora text-xl font-bold text-brand-ink">
                  {bentoItems.preventive.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  {bentoItems.preventive.description}
                </p>

                <div className="mt-5 space-y-2">
                  {bentoItems.preventive.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-xl bg-brand-bg/60 border border-brand-line p-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${task.color === "red" ? "bg-rose-500" : "bg-teal-600"}`} />
                        <div>
                          <b className="block text-brand-ink text-[11px] leading-tight">{task.name}</b>
                          <small className="text-[9px] text-brand-muted">{task.code} · {task.time}</small>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800">
                        {task.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* 3. Tickets */}
            {activeMobileTab === "tickets" && (
              <article className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100">
                  <Icon name="ticket" className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-emerald-800 uppercase">
                  {bentoItems.tickets.kicker}
                </span>
                <h3 className="mt-1 font-sora text-xl font-bold text-brand-ink">
                  {bentoItems.tickets.title}
                </h3>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  {bentoItems.tickets.flow.map((step, idx) => (
                    <div key={idx} className="flex flex-col rounded-xl border border-brand-line bg-brand-bg/50 p-3 text-center">
                      <span className={`mx-auto mb-1 h-2 w-2 rounded-full ${
                        step.color === "gray" ? "bg-slate-400" :
                        step.color === "blue" ? "bg-sky-500" :
                        step.color === "amber" ? "bg-gold" : "bg-emerald-500"
                      }`} />
                      <span className="text-[10px] font-bold text-brand-muted">{step.label}</span>
                      <b className="font-sora text-lg font-bold text-brand-ink">{step.count}</b>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* 4. Costs */}
            {activeMobileTab === "costs" && (
              <article className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-sky-800 border border-sky-100">
                  <Icon name="chart" className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-sky-800 uppercase">
                  {bentoItems.costs.kicker}
                </span>
                <h3 className="mt-1 font-sora text-xl font-bold text-brand-ink">
                  {bentoItems.costs.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  {bentoItems.costs.description}
                </p>

                <div className="mt-5 rounded-2xl border border-brand-line bg-brand-bg/60 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <small className="text-[9px] text-brand-muted">{bentoItems.costs.trendLabel}</small>
                      <strong className="block font-sora text-base font-bold text-brand-ink">
                        {bentoItems.costs.monthlyCost} {bentoItems.costs.currency}
                      </strong>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      {bentoItems.costs.trend}
                    </span>
                  </div>
                </div>
              </article>
            )}

            {/* 5. Stock */}
            {activeMobileTab === "stock" && (
              <article className="rounded-3xl border border-brand-line bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-800 border border-purple-100">
                  <Icon name="stock" className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-purple-800 uppercase">
                  {bentoItems.stock.kicker}
                </span>
                <h3 className="mt-1 font-sora text-xl font-bold text-brand-ink">
                  {bentoItems.stock.title}
                </h3>
                <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                  {bentoItems.stock.description}
                </p>

                <div className="mt-5 space-y-2">
                  {bentoItems.stock.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between rounded-xl border border-brand-line bg-brand-bg/50 px-3.5 py-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${
                          item.status === "ok" ? "bg-emerald-500" :
                          item.status === "low" ? "bg-gold" : "bg-rose-500"
                        }`} />
                        <b className="text-brand-ink text-[11px]">{item.name}</b>
                      </div>
                      <strong className="text-brand-ink font-sora text-xs">
                        {item.qty} <small className="text-brand-muted font-normal text-[9px]">/ {item.threshold}</small>
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            )}
          </div>
        </div>

        {/* DESKTOP VIEW (lg+): Full Asymmetric 5-Block Bento Grid */}
        <div className="hidden lg:grid grid-cols-12 gap-6">
          {/* Bento 1: QR-First (Large Dark Card) */}
          <article className="relative col-span-7 flex flex-col justify-between overflow-hidden rounded-3xl border border-teal-900/20 bg-gradient-to-br from-[#062e2d] via-[#0b4745] to-[#083533] p-8 sm:p-10 text-white shadow-glow min-h-[440px]">
            <div className="relative z-10 max-w-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-200 border border-white/10 shadow-inner">
                <Icon name="qr" className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-teal-300 uppercase">
                {bentoItems.qrFirst.kicker}
              </span>
              <h3 className="mt-2 font-sora text-2xl sm:text-3xl font-bold leading-tight">
                {bentoItems.qrFirst.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-teal-100/80 leading-relaxed">
                {bentoItems.qrFirst.description}
              </p>
            </div>

            {/* QR Scanner Scene Mockup */}
            <div className="relative mt-8 sm:mt-0 sm:absolute sm:right-6 sm:bottom-6 flex items-center justify-center">
              {/* Device Frame */}
              <div className="relative w-44 h-72 rounded-[28px] border-4 border-slate-950 bg-slate-900 p-2 shadow-2xl rotate-[-4deg] overflow-hidden">
                <div className="flex h-full flex-col items-center justify-center rounded-[20px] bg-gradient-to-b from-slate-700 to-slate-900 p-3 text-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-xl border border-dashed border-teal-400/50 bg-black/30 p-2">
                    <Icon name="qr" className="h-16 w-16 text-teal-100" />
                    <span className="absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-teal-400" />
                    <span className="absolute -top-1 -right-1 h-3 w-3 border-t-2 border-r-2 border-teal-400" />
                    <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-teal-400" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-teal-400" />
                  </div>
                  <span className="mt-2 font-mono text-[9px] font-bold text-teal-200">
                    {bentoItems.qrFirst.assetCode}
                  </span>
                </div>
              </div>

              {/* Physical Tag Plate */}
              <div className="absolute -right-2 bottom-4 flex w-36 flex-col gap-1 rounded-xl bg-white p-2.5 text-brand-ink shadow-2xl rotate-[6deg] border border-slate-200">
                <div className="flex items-center gap-1.5">
                  <Image src="/assets/logo-mark.png" alt="" width={14} height={14} />
                  <span className="text-[7.5px] font-bold">WËR ASSET</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div>
                    <strong className="block text-[8px] font-mono font-bold">
                      {bentoItems.qrFirst.assetCode}
                    </strong>
                    <small className="block text-[6.5px] text-brand-muted">
                      {bentoItems.qrFirst.assetName}
                    </small>
                  </div>
                  <Icon name="qr" className="h-7 w-7 text-brand-ink" />
                </div>
              </div>
            </div>
          </article>

          {/* Bento 2: Maintenance Préventive */}
          <article className="col-span-5 flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-card">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800 border border-amber-100">
                <Icon name="wrench" className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-amber-800 uppercase">
                {bentoItems.preventive.kicker}
              </span>
              <h3 className="mt-2 font-sora text-2xl font-bold text-brand-ink">
                {bentoItems.preventive.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-brand-muted leading-relaxed">
                {bentoItems.preventive.description}
              </p>
            </div>

            {/* Mini Calendar Schedule */}
            <div className="mt-6 rounded-2xl border border-brand-line bg-brand-bg/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-brand-ink">
                  {bentoItems.preventive.monthLabel}
                </span>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
                  {bentoItems.preventive.taskCount}
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-brand-muted font-semibold mb-2">
                <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
                <span className="py-1">18</span>
                <span className="py-1">19</span>
                <span className="py-1 rounded-md bg-teal-900 text-white font-bold">20</span>
                <span className="py-1 relative font-bold text-amber-800">21 <i className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-gold" /></span>
                <span className="py-1 relative font-bold text-emerald-800">22 <i className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-emerald-500" /></span>
                <span className="py-1">23</span>
                <span className="py-1">24</span>
              </div>
              <div className="space-y-1.5 mt-3">
                {bentoItems.preventive.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-xl bg-white border border-brand-line p-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${task.color === "red" ? "bg-rose-500" : "bg-teal-600"}`} />
                      <div>
                        <b className="block text-brand-ink text-[11px] leading-tight">{task.name}</b>
                        <small className="text-[9px] text-brand-muted">{task.code} · {task.time}</small>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${task.color === "red" ? "bg-rose-500/10 text-rose-700" : "bg-teal-50 text-teal-800"}`}>
                      {task.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Bento 3: Tickets & Ordres de Travail */}
          <article className="col-span-4 flex flex-col justify-between rounded-3xl border border-brand-line/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-card">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-100">
                <Icon name="ticket" className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-emerald-800 uppercase">
                {bentoItems.tickets.kicker}
              </span>
              <h3 className="mt-2 font-sora text-xl sm:text-2xl font-bold text-brand-ink">
                {bentoItems.tickets.title}
              </h3>
            </div>

            {/* Kanban Step Mini Cards */}
            <div className="mt-6 grid grid-cols-4 gap-1.5 items-center">
              {bentoItems.tickets.flow.map((step, idx) => (
                <div key={idx} className="flex flex-col rounded-xl border border-brand-line bg-brand-bg/50 p-2.5 text-center">
                  <span className={`mx-auto mb-1 h-2 w-2 rounded-full ${
                    step.color === "gray" ? "bg-slate-400" :
                    step.color === "blue" ? "bg-sky-500" :
                    step.color === "amber" ? "bg-gold" : "bg-emerald-500"
                  }`} />
                  <span className="text-[9px] font-bold text-brand-muted truncate">{step.label}</span>
                  <b className="font-sora text-base font-bold text-brand-ink">{step.count}</b>
                </div>
              ))}
            </div>
          </article>

          {/* Bento 4: Coûts & Pilotage (Wide Card) */}
          <article className="col-span-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-brand-line/80 bg-white p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-card">
            <div className="max-w-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-800 border border-sky-100">
                <Icon name="chart" className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-sky-800 uppercase">
                {bentoItems.costs.kicker}
              </span>
              <h3 className="mt-2 font-sora text-2xl sm:text-3xl font-bold text-brand-ink">
                {bentoItems.costs.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-brand-muted leading-relaxed">
                {bentoItems.costs.description}
              </p>
            </div>

            {/* Analytics Scene Preview */}
            <div className="w-full md:w-72 flex flex-col rounded-2xl border border-brand-line bg-brand-bg/60 p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <small className="text-[10px] text-brand-muted">{bentoItems.costs.trendLabel}</small>
                  <strong className="block font-sora text-xl font-bold text-brand-ink">
                    {bentoItems.costs.monthlyCost} <em className="text-xs font-normal not-italic text-brand-muted">{bentoItems.costs.currency}</em>
                  </strong>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                  {bentoItems.costs.trend}
                </span>
              </div>

              {/* Vector Cost Curve */}
              <div className="h-28 w-full rounded-xl bg-white border border-brand-line p-2">
                <svg viewBox="0 0 520 180" className="h-full w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0E4B4A" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#0E4B4A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 40H520M0 80H520M0 120H520M0 160H520" stroke="#f1f5f9" strokeWidth="1" />
                  <path
                    d="M0 130 C60 110, 80 70, 130 85 S210 140, 255 105 S330 50, 390 72 S455 110, 520 50 L520 180 L0 180 Z"
                    fill="url(#areaGrad)"
                  />
                  <path
                    d="M0 130 C60 110, 80 70, 130 85 S210 140, 255 105 S330 50, 390 72 S455 110, 520 50"
                    fill="none"
                    stroke="#12625f"
                    strokeWidth="3.5"
                  />
                </svg>
                <div className="flex justify-between text-[8px] text-brand-muted mt-1 px-1">
                  {bentoItems.costs.months.map((m, i) => (
                    <span key={i}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Bento 5: Pièces & Stock */}
          <article className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-brand-line/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-card">
            <div className="max-w-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-800 border border-purple-100">
                <Icon name="stock" className="h-5 w-5" />
              </div>
              <span className="text-[11px] font-extrabold tracking-wider text-purple-800 uppercase">
                {bentoItems.stock.kicker}
              </span>
              <h3 className="mt-2 font-sora text-2xl font-bold text-brand-ink">
                {bentoItems.stock.title}
              </h3>
              <p className="mt-3 text-xs md:text-sm text-brand-muted leading-relaxed">
                {bentoItems.stock.description}
              </p>
            </div>

            {/* Stock status rows */}
            <div className="w-full md:w-96 space-y-2.5">
              {bentoItems.stock.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-xl border border-brand-line bg-brand-bg/50 px-4 py-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2.5 w-2.5 rounded-full ${
                      item.status === "ok" ? "bg-emerald-500" :
                      item.status === "low" ? "bg-gold" : "bg-rose-500"
                    }`} />
                    <b className="text-brand-ink">{item.name}</b>
                  </div>
                  <strong className="text-brand-ink font-sora">
                    {item.qty} <small className="text-brand-muted font-normal text-[10px]">/ seuil {item.threshold}</small>
                  </strong>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
