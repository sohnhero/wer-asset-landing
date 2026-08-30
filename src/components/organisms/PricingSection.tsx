"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../atoms/Button";
import { pricingSectionData } from "@/data/pricing";
import { MotionFadeIn, MotionStagger, fadeInUpVariants } from "../atoms/Motion";

export function PricingSection() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, plans } =
    pricingSectionData;
  const [selectedMobilePlan, setSelectedMobilePlan] = useState("essentiel");

  const currentPlan = plans.find((p) => p.id === selectedMobilePlan) || plans[1];

  return (
    <section id="pricing" className="relative bg-white py-16 sm:py-28 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <MotionFadeIn className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-ink">
            {titlePrimary} <br />
            <span className="text-[#F2B01E] font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </MotionFadeIn>

        {/* MOBILE ONLY (< sm): Interactive Pricing Switcher */}
        <div className="sm:hidden">
          {/* Mobile Plan Segmented Tabs */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-2xl border border-brand-line mb-4">
            {plans.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedMobilePlan(plan.id)}
                className={`flex items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-bold transition-all ${
                  selectedMobilePlan === plan.id
                    ? "bg-teal-900 text-white shadow-sm font-extrabold"
                    : "text-brand-muted hover:text-brand-ink"
                }`}
              >
                <span>{plan.name}</span>
              </button>
            ))}
          </div>

          {/* Active Mobile Card */}
          <article
            className={`relative flex flex-col justify-between rounded-3xl p-6 transition-all duration-300 ${
              currentPlan.isFeatured
                ? "bg-gradient-to-b from-[#073a38] via-[#0d4d4a] to-[#0e4b4a] text-white shadow-2xl border border-teal-600/40"
                : "border border-brand-line bg-white shadow-sm"
            }`}
          >
            {currentPlan.isFeatured && currentPlan.featuredBadge && (
              <span className="self-start mb-2 rounded-full bg-emerald-400 text-teal-950 px-3 py-1 text-[10px] font-extrabold tracking-wider">
                {currentPlan.featuredBadge}
              </span>
            )}

            <div>
              <div className="border-b pb-4 mb-4 border-brand-line/40">
                <span
                  className={`text-xs font-extrabold uppercase tracking-wider ${
                    currentPlan.isFeatured ? "text-teal-200" : "text-teal-800"
                  }`}
                >
                  {currentPlan.name}
                </span>
                <strong className="mt-1 block font-sora text-2xl font-bold">
                  {currentPlan.range}
                </strong>
                <small
                  className={`text-xs ${
                    currentPlan.isFeatured ? "text-teal-200/80" : "text-brand-muted"
                  }`}
                >
                  {currentPlan.unit}
                </small>
              </div>

              <p
                className={`text-xs leading-relaxed ${
                  currentPlan.isFeatured ? "text-teal-100/80" : "text-brand-muted"
                }`}
              >
                {currentPlan.description}
              </p>

              <ul className="my-5 space-y-2.5 text-xs">
                {currentPlan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full text-[9px] font-bold ${
                        currentPlan.isFeatured
                          ? "bg-teal-400/20 text-teal-200"
                          : "bg-teal-50 text-teal-800"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        currentPlan.isFeatured
                          ? "text-teal-50"
                          : "text-brand-ink font-medium"
                      }
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href={currentPlan.ctaHref}
              size="md"
              variant={currentPlan.isFeatured ? "light" : "primary"}
              className="w-full justify-center text-xs font-bold py-3 mt-2"
            >
              {currentPlan.ctaLabel}
            </Button>
          </article>
        </div>

        {/* TABLET & DESKTOP (sm+): 4 Pricing Cards Grid with Staggered Scroll Reveal */}
        <MotionStagger stagger={0.12} className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isFeatured;

            return (
              <motion.article
                key={plan.id}
                variants={fadeInUpVariants}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#073a38] via-[#0d4d4a] to-[#0e4b4a] text-white shadow-2xl lg:-translate-y-3 border border-teal-600/40 hover:-translate-y-4"
                    : "border border-brand-line/80 bg-white shadow-sm hover:border-teal-300 hover:shadow-card hover:-translate-y-1.5"
                }`}
              >
                {isFeatured && plan.featuredBadge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-emerald-400 px-3 py-1 text-[9.5px] font-extrabold tracking-wider text-teal-950 shadow-md">
                    {plan.featuredBadge}
                  </span>
                )}

                <div>
                  <div className="border-b pb-6 mb-6 border-brand-line/50">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider ${
                        isFeatured ? "text-teal-200" : "text-teal-800"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <strong className="mt-3 block font-sora text-3xl font-bold">
                      {plan.range}
                    </strong>
                    <small
                      className={`text-xs ${
                        isFeatured ? "text-teal-200/80" : "text-brand-muted"
                      }`}
                    >
                      {plan.unit}
                    </small>
                  </div>

                  <p
                    className={`text-xs leading-relaxed min-h-[50px] ${
                      isFeatured ? "text-teal-100/80" : "text-brand-muted"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="my-6 space-y-3 text-xs">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full text-[9px] font-bold ${
                            isFeatured
                              ? "bg-teal-400/20 text-teal-200"
                              : "bg-teal-50 text-teal-800"
                          }`}
                        >
                          ✓
                        </span>
                        <span
                          className={
                            isFeatured
                              ? "text-teal-50"
                              : "text-brand-ink font-medium"
                          }
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={plan.ctaHref}
                  size="md"
                  variant={isFeatured ? "light" : "primary"}
                  className="w-full justify-center text-xs font-bold"
                >
                  {plan.ctaLabel}
                </Button>
              </motion.article>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
