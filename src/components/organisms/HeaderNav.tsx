"use client";

import { useState, useEffect } from "react";
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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const mobileNavLinks = [
    { label: "Fonctionnalités", href: "#features", num: "01", tag: "QR & TCO" },
    { label: "Comment ça marche", href: "#how", num: "02", tag: "4 étapes" },
    { label: "Solutions Métiers", href: "#solutions", num: "03", tag: "Rôles" },
    { label: "Offres & Tarifs", href: "#pricing", num: "04", tag: "FCFA" },
    { label: "Questions Fréquentes", href: "#faq", num: "05", tag: "Pilote" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-brand-line/80 bg-white/90 py-3.5 shadow-xs backdrop-blur-xl"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
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

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-ink shadow-xs md:hidden transition-all duration-200 active:scale-95"
        >
          <Icon name={mobileMenuOpen ? "close" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {/* 2026 Clean Fullscreen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pt-24 pb-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          {/* Top Brand Header inside Fullscreen Overlay */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-brand-ink uppercase tracking-wider">
                Menu de navigation
              </span>
            </div>
            <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
              🇸🇳 Dakar
            </span>
          </div>

          {/* Clean Modern Navigation List */}
          <nav className="my-auto py-6 space-y-1">
            {mobileNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-3.5 border-b border-slate-100/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-teal-700/60 group-hover:text-teal-900 transition-colors">
                    {item.num}
                  </span>
                  <span className="font-sora text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                    {item.label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    {item.tag}
                  </span>
                  <span className="text-slate-600 group-hover:text-teal-900 group-hover:translate-x-1 transition-all text-sm font-bold">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Bottom Action Hub */}
          <div className="space-y-2.5 pt-4 border-t border-slate-100">
            <Button
              href={headerActions.pilotHref}
              size="md"
              variant="primary"
              icon="arrow"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center text-sm font-bold py-3.5 rounded-2xl shadow-md"
            >
              {headerActions.pilotBtn}
            </Button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="flex items-center justify-center gap-2 w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-800 hover:bg-slate-100 transition-all shadow-xs active:scale-98"
            >
              <span>▶</span>
              <span>{headerActions.demoBtn} (30s)</span>
            </button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-medium text-slate-600 text-center">
              <span>WËR ASSET</span>
              <span>·</span>
              <span>Chaque équipement a une histoire</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
