"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { GlowMesh } from "../atoms/GlowMesh";
import { heroContent, heroDashboardData } from "@/data/hero";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "rotateY(-4deg) rotateX(2deg) rotateZ(0.3deg)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !window.matchMedia("(pointer: fine)").matches)
      return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltStyle({
      transform: `rotateY(${(-4 + x * 5).toFixed(2)}deg) rotateX(${(
        2 -
        y * 4
      ).toFixed(2)}deg) rotateZ(0.3deg) translate3d(${x * 5}px, ${y * 5}px, 0)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "rotateY(-4deg) rotateX(2deg) rotateZ(0.3deg)",
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfcfb] via-[#f4f8f7] to-[#f7f9f8] pt-28 pb-16 lg:pt-36 lg:pb-24">
      <GlowMesh variant="hero" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Copy Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:col-span-5">
            {/* Top Pill Badge with Live Emerald Indicator */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/85 px-3.5 py-1.5 text-xs font-bold text-teal-900 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>{heroContent.badge}</span>
            </div>

            {/* Hero Main Heading - Clean High-End Dual-Tone Gradient */}
            <h1 className="font-sora text-3xl font-extrabold tracking-tight text-brand-ink sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              {heroContent.titlePrimary} <br />
              <span className="bg-gradient-to-r from-teal-900 via-teal-700 to-emerald-600 bg-clip-text text-transparent">
                {heroContent.titleHighlight}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
              {heroContent.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                size="md"
                variant="primary"
                icon="arrow"
                iconPosition="right"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-950 via-teal-900 to-teal-900 shadow-lg shadow-teal-950/20 hover:shadow-xl hover:shadow-teal-950/30"
              >
                {heroContent.ctaPrimary}
              </Button>

              <button
                type="button"
                onClick={onOpenDemo}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-brand-line/80 bg-white/80 px-4 py-2.5 text-xs md:text-sm font-bold text-brand-ink shadow-xs backdrop-blur-md transition-all duration-200 hover:border-teal-700/40 hover:bg-white hover:text-teal-900 hover:shadow-md w-full sm:w-auto"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-800 transition-transform duration-200 group-hover:scale-110">
                  <Icon name="play" className="h-3.5 w-3.5 fill-teal-800 ml-0.5" />
                </span>
                <span>{heroContent.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-brand-line/60 pt-6 w-full text-left">
              {heroContent.trustItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-brand-line/70 bg-white/70 p-2.5 shadow-xs backdrop-blur-xs transition-all hover:border-teal-300 hover:bg-white"
                >
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-teal-100 bg-teal-50 text-teal-800 shadow-xs">
                    <Icon name={item.icon} className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <b className="text-xs font-bold text-brand-ink">{item.title}</b>
                    <small className="text-[10px] text-brand-muted leading-tight">
                      {item.subtitle}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual 3D Column */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative lg:col-span-7 h-[480px] sm:h-[650px] flex items-center justify-center sm:block perspective-[1400px]"
          >
            {/* Main 3D Dashboard Shell */}
            <div
              style={tiltStyle}
              className="absolute left-0 sm:left-2 top-8 w-full max-w-[610px] rounded-3xl border border-teal-900/10 bg-[#eef3f2] p-1.5 shadow-glow transition-transform duration-200 ease-out overflow-hidden hidden sm:block"
            >
              {/* Window Header */}
              <div className="flex h-9 items-center justify-between rounded-t-2xl border-b border-brand-line/80 bg-white px-4 text-[10px] text-brand-muted">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono font-medium text-brand-muted/80">
                  app.wer-asset.com
                </span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-[9px] font-extrabold text-teal-800">
                  {heroDashboardData.userInitials}
                </div>
              </div>

              {/* Window Body with Sidebar + Main content */}
              <div className="flex h-[440px] overflow-hidden rounded-b-2xl bg-brand-bg">
                {/* Dashboard Sidebar */}
                <aside className="flex w-32 flex-col gap-1 bg-gradient-to-b from-[#0b4442] to-[#073835] p-3 text-[10px] text-teal-100/80">
                  <div className="mb-3 flex items-center gap-2 text-white font-bold">
                    <div className="flex h-5 w-5 items-center justify-center rounded bg-white p-0.5 shadow-xs">
                      <Image
                        src="/assets/logo-mark.png"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </div>
                    <span className="text-[10px] tracking-tight">WËR ASSET</span>
                  </div>

                  <button className="flex items-center gap-2 rounded-lg bg-white/10 px-2 py-1.5 text-left font-bold text-white shadow-inner">
                    <span>◈</span> Dashboard
                  </button>
                  <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-white/5">
                    <span>▣</span> Équipements
                  </button>
                  <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-white/5">
                    <span>⌁</span> Maintenances
                  </button>
                  <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-white/5">
                    <span>◇</span> Tickets
                  </button>
                  <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-white/5">
                    <span>▦</span> Stocks
                  </button>
                  <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-white/5">
                    <span>↗</span> Rapports
                  </button>

                  <div className="mt-auto flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-1.5 text-[9px] text-teal-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Synchronisé</span>
                  </div>
                </aside>

                {/* Dashboard Main Content */}
                <div className="flex-1 overflow-y-auto p-4">
                  {/* Top Bar */}
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <small className="text-[9px] text-brand-muted">
                        {heroDashboardData.siteLocation}
                      </small>
                      <h3 className="font-sora text-xs font-bold text-brand-ink">
                        {heroDashboardData.welcomeUser}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-brand-muted text-[10px]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-brand-line bg-white">
                        ⌕
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-md border border-brand-line bg-white">
                        ♢
                      </span>
                      <b className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-[9px] text-teal-800">
                        MD
                      </b>
                    </div>
                  </div>

                  {/* 4 Mini KPI Cards */}
                  <div className="grid grid-cols-4 gap-2">
                    {heroDashboardData.kpis.map((kpi, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-brand-line bg-white p-2 text-left shadow-xs"
                      >
                        <div
                          className={`mb-1 flex h-5 w-5 items-center justify-center rounded text-[10px] ${
                            kpi.color === "teal"
                              ? "bg-teal-50 text-teal-800"
                              : kpi.color === "green"
                              ? "bg-emerald-50 text-emerald-700"
                              : kpi.color === "amber"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-rose-50 text-rose-700"
                          }`}
                        >
                          <Icon name={kpi.symbol} className="h-3 w-3" />
                        </div>
                        <span className="block text-[8px] text-brand-muted">
                          {kpi.label}
                        </span>
                        <strong className="block font-sora text-xs font-bold text-brand-ink">
                          {kpi.value}
                        </strong>
                        <small className="block text-[7px] text-brand-muted">
                          {kpi.detail}
                        </small>
                      </div>
                    ))}
                  </div>

                  {/* Fleet status & upcoming maintenance */}
                  <div className="mt-2.5 grid grid-cols-2 gap-2">
                    {/* Donut card */}
                    <div className="rounded-lg border border-brand-line bg-white p-2">
                      <div className="mb-1 flex items-center justify-between text-[9px]">
                        <b>État du parc</b>
                        <span className="text-[8px] text-brand-muted">
                          256 actifs
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[conic-gradient(#23a66a_0_86%,#d97706_86%_94%,#e55e5e_94%_98%,#cbd5e1_98%)]">
                          <div className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-white text-center">
                            <b className="text-[9px] font-bold text-brand-ink leading-tight">
                              86%
                            </b>
                            <span className="text-[6px] text-brand-muted leading-tight">
                              en service
                            </span>
                          </div>
                        </div>
                        <ul className="flex-1 text-[7.5px] space-y-0.5">
                          <li className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <i className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              En service
                            </span>
                            <b>220</b>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <i className="h-1.5 w-1.5 rounded-full bg-amber-500" />À surveiller
                            </span>
                            <b>20</b>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="flex items-center gap-1">
                              <i className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                              Maintenance
                            </span>
                            <b>10</b>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Upcoming maintenance */}
                    <div className="rounded-lg border border-brand-line bg-white p-2">
                      <div className="mb-1 flex items-center justify-between text-[9px]">
                        <b>À venir</b>
                        <span className="text-[7px] text-teal-800 font-bold">
                          Voir tout
                        </span>
                      </div>
                      <div className="space-y-1 text-[7.5px]">
                        {heroDashboardData.upcomingMaintenances.map((m, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between border-b border-brand-line/50 pb-1 last:border-b-0"
                          >
                            <div className="flex items-center gap-1.5">
                              <span className="flex h-4 w-4 items-center justify-center rounded bg-teal-50 font-bold text-teal-800 text-[6px]">
                                {m.code}
                              </span>
                              <div>
                                <b className="block text-brand-ink leading-tight">
                                  {m.name}
                                </b>
                                <span className="block text-brand-muted text-[6.5px]">
                                  {m.task}
                                </span>
                              </div>
                            </div>
                            <time className="font-bold text-teal-900 text-[7px]">
                              {m.date}
                            </time>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Table of recent equipment */}
                  <div className="mt-2.5 rounded-lg border border-brand-line bg-white p-2">
                    <div className="mb-1.5 flex items-center justify-between text-[9px]">
                      <b>Derniers équipements</b>
                      <span className="text-[7.5px] text-brand-muted">
                        Activité récente
                      </span>
                    </div>
                    <div className="space-y-1 text-[7.5px]">
                      {heroDashboardData.recentAssets.map((asset, idx) => (
                        <div
                          key={idx}
                          className="grid grid-cols-4 items-center gap-1 border-t border-brand-line/50 pt-1"
                        >
                          <span className="font-bold text-brand-ink truncate">
                            {asset.name}
                          </span>
                          <span className="text-brand-muted truncate">
                            {asset.site}
                          </span>
                          <span
                            className={`font-semibold ${
                              asset.statusType === "green"
                                ? "text-emerald-700"
                                : "text-amber-700"
                            }`}
                          >
                            ● {asset.status}
                          </span>
                          <span className="text-right text-brand-muted">
                            {asset.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smartphone PWA Mockup Overlay */}
            <div className="absolute right-0 sm:right-2 bottom-4 w-[195px] sm:w-[215px] rounded-[34px] border-4 border-slate-950 bg-slate-950 p-2 shadow-2xl transition-all duration-300 hover:scale-[1.02] z-30">
              <div className="relative overflow-hidden rounded-[26px] bg-[#f7f9f9]">
                {/* Phone Notch & Header */}
                <div className="flex h-7 items-center justify-between bg-teal-900 px-3 text-[8px] text-white">
                  <span>9:41</span>
                  <div className="h-1.5 w-10 rounded-full bg-black/40" />
                  <span>100%</span>
                </div>

                <div className="flex items-center gap-1.5 bg-teal-900 px-3 pb-2 text-white">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-white p-0.5">
                    <Image
                      src="/assets/logo-mark.png"
                      alt=""
                      width={14}
                      height={14}
                    />
                  </div>
                  <span className="text-[9px] font-bold">WËR ASSET</span>
                </div>

                {/* Phone Body */}
                <div className="p-3 text-[9px]">
                  <span className="text-[7.5px] uppercase tracking-wider text-brand-muted">
                    ÉQUIPEMENT
                  </span>

                  {/* Machine Graphic with QR Label */}
                  <div className="relative my-2 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-teal-50 border border-brand-line">
                    <div className="relative flex h-14 w-28 items-center justify-between rounded-lg bg-gradient-to-b from-slate-700 to-slate-900 p-2 shadow-md">
                      <div className="space-y-1">
                        <div className="h-1 w-8 rounded-full bg-slate-500" />
                        <div className="h-1 w-8 rounded-full bg-slate-500" />
                        <div className="h-1 w-8 rounded-full bg-slate-500" />
                      </div>
                      <div className="flex h-10 w-10 flex-col items-center justify-center rounded bg-white p-1 text-center shadow">
                        <Icon name="qr" className="h-6 w-6 text-brand-ink" />
                        <span className="text-[5px] font-mono font-bold text-brand-ink">
                          EQP-0001
                        </span>
                      </div>
                    </div>

                    <span className="absolute right-2 top-2 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[6.5px] font-bold text-emerald-700 border border-emerald-200">
                      ● En service
                    </span>
                  </div>

                  <h4 className="font-sora text-[11px] font-bold text-brand-ink leading-tight">
                    Groupe électrogène <br />
                    500 KVA
                  </h4>
                  <p className="text-[8px] text-brand-muted">
                    EQP-0001 · Hôtel Savana
                  </p>

                  <div className="my-2 rounded-lg border border-brand-line bg-white p-2">
                    <span className="block text-[7px] text-brand-muted">
                      Prochaine maintenance
                    </span>
                    <b className="block text-[9px] text-brand-ink">
                      Service 500H
                    </b>
                    <small className="block text-[7.5px] text-teal-800 font-bold">
                      Dans 2 jours
                    </small>
                  </div>

                  <Button
                    size="sm"
                    variant="primary"
                    className="w-full text-[8.5px] py-2 font-bold"
                  >
                    Démarrer l'intervention
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
