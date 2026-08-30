import React from "react";

interface GlowMeshProps {
  variant?: "hero" | "dark" | "section";
  className?: string;
}

export function GlowMesh({ variant = "hero", className = "" }: GlowMeshProps) {
  if (variant === "dark") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="hidden sm:block absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-3xl" />
        <div className="hidden sm:block absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
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
      {/* Lightweight GPU-friendly ambient glow (zero-lag on mobile) */}
      <div className="hidden sm:block absolute right-[-60px] top-10 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="hidden sm:block absolute left-[-100px] top-[240px] h-[350px] w-[350px] rounded-full bg-emerald-500/8 blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(14,75,74,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,75,74,0.05) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />
    </div>
  );
}
