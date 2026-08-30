import React from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { pricingSectionData } from "@/data/pricing";

export function PricingSection() {
  const { eyebrow, titlePrimary, titleHighlight, subtitle, plans } =
    pricingSectionData;

  return (
    <section id="pricing" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-teal-800 uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-sora text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            {titlePrimary} <br />
            <span className="text-brand-muted font-normal">{titleHighlight}</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-brand-muted">
            {subtitle}
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {plans.map((plan) => {
            const isFeatured = plan.isFeatured;

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#073a38] via-[#0d4d4a] to-[#0e4b4a] text-white shadow-2xl lg:-translate-y-3 border border-teal-600/40"
                    : "border border-brand-line/80 bg-white shadow-sm hover:border-teal-300 hover:shadow-card"
                }`}
              >
                {isFeatured && plan.featuredBadge && (
                  <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[9.5px] font-extrabold tracking-wider text-teal-950 shadow-md">
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

                  {/* Feature list */}
                  <ul className="mt-6 space-y-3.5 border-t border-brand-line/50 pt-6">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-medium"
                      >
                        <span
                          className={`flex h-4 w-4 flex-none items-center justify-center rounded-full mt-0.5 ${
                            isFeatured
                              ? "bg-teal-500/20 text-emerald-300"
                              : "bg-emerald-50 text-emerald-600"
                          }`}
                        >
                          <Icon name="check" className="h-3 w-3" />
                        </span>
                        <span
                          className={
                            isFeatured ? "text-white" : "text-brand-ink"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <Button
                    href={plan.ctaHref}
                    variant={isFeatured ? "light" : "outline"}
                    size="md"
                    icon="arrow"
                    iconPosition="right"
                    className="w-full justify-center"
                  >
                    {plan.ctaLabel}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
