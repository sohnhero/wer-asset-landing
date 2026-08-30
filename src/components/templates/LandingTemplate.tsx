"use client";

import React, { useState } from "react";
import { HeaderNav } from "../organisms/HeaderNav";
import { HeroSection } from "../organisms/HeroSection";
import { ProblemSection } from "../organisms/ProblemSection";
import { BentoFeatures } from "../organisms/BentoFeatures";
import { HowItWorks } from "../organisms/HowItWorks";
import { OfflineShowcase } from "../organisms/OfflineShowcase";
import { PersonaSection } from "../organisms/PersonaSection";
import { AdvantageSection } from "../organisms/AdvantageSection";
import { PricingSection } from "../organisms/PricingSection";
import { PilotSection } from "../organisms/PilotSection";
import { FaqSection } from "../organisms/FaqSection";
import { Footer } from "../organisms/Footer";
import { DemoModal } from "../organisms/DemoModal";
import { BackToTop } from "../atoms/BackToTop";

export function LandingTemplate() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-ink selection:bg-teal-700 selection:text-white">
      {/* Sticky Header */}
      <HeaderNav onOpenDemo={() => setDemoOpen(true)} />

      {/* Main Sections */}
      <main id="top">
        <HeroSection onOpenDemo={() => setDemoOpen(true)} />
        <ProblemSection />
        <BentoFeatures />
        <HowItWorks />
        <OfflineShowcase />
        <PersonaSection />
        <AdvantageSection />
        <PricingSection />
        <PilotSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 30s Product Demo Modal */}
      <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />

      {/* Back to top floating button */}
      <BackToTop />
    </div>
  );
}
