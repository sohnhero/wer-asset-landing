"use client";

import { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "../atoms/BrandLogo";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { navItems, headerActions } from "@/data/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";

interface HeaderNavProps {
  onOpenDemo: () => void;
}

export function HeaderNav({ onOpenDemo }: HeaderNavProps) {
  const { isScrolled } = useScrollPosition(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-brand-line/80 bg-white/85 py-3.5 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <BrandLogo variant="header" />

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold text-brand-muted transition-colors hover:text-teal-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-3 py-2 text-xs font-bold text-brand-ink transition-colors hover:text-teal-800"
          >
            {headerActions.demoBtn}
          </button>
          <Button
            href={headerActions.pilotHref}
            size="sm"
            variant="primary"
            icon="arrow"
            iconPosition="right"
          >
            {headerActions.pilotBtn}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line bg-white text-brand-ink shadow-sm md:hidden"
        >
          <Icon name={mobileMenuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-4 top-full mt-2 rounded-2xl border border-brand-line bg-white/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-brand-line/50 pb-2 text-sm font-bold text-brand-ink transition-colors hover:text-teal-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full rounded-xl border border-brand-line py-3 text-center text-xs font-bold text-brand-ink"
              >
                {headerActions.demoBtn}
              </button>
              <Button
                href={headerActions.pilotHref}
                size="md"
                variant="primary"
                icon="arrow"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full justify-center"
              >
                {headerActions.pilotBtn}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
