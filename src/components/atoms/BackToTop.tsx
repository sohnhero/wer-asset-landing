"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Icon } from "./Icon";

export function BackToTop() {
  const { isScrolled } = useScrollPosition(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isScrolled) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut de page"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-teal-800/30 bg-teal-900/90 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-teal-950 hover:shadow-teal-900/30 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
    >
      <Icon name="arrow" className="h-5 w-5 -rotate-90" />
    </button>
  );
}
