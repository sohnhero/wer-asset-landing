import React from "react";

interface GlowMeshProps {
  variant?: "hero" | "dark" | "section";
  className?: string;
}

export function GlowMesh({ variant = "hero", className = "" }: GlowMeshProps) {
  if (variant === "dark") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Pristine Ambient Luminous Aura (No dirty yellow/orange) */}
      <div className="absolute right-[-60px] top-10 h-[500px] w-[500px] rounded-full bg-teal-500/10 blur-[140px]" />
      <div className="absolute left-[-100px] top-[240px] h-[450px] w-[450px] rounded-full bg-emerald-500/8 blur-[130px]" />
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-teal-600/5 blur-[160px]" />

      {/* Grid Pattern with smooth radial mask */}
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage: `linear-gradient(rgba(14,75,74,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,75,74,0.06) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
