"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mobileNavLinks = [
    { label: "Fonctionnalités", href: "#features", num: "01", tag: "QR & TCO" },
    { label: "Comment ça marche", href: "#how", num: "02", tag: "4 étapes" },
    { label: "Solutions Métiers", href: "#solutions", num: "03", tag: "Rôles" },
    { label: "Offres & Tarifs", href: "#pricing", num: "04", tag: "FCFA" },
    { label: "Questions Fréquentes", href: "#faq", num: "05", tag: "Pilote" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-brand-line/80 bg-white/95 py-3.5 shadow-xs backdrop-blur-md"
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
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-line bg-white text-brand-ink shadow-xs md:hidden transition-all duration-200 active:scale-95"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu (Mounted via React Portal directly into body with zero touch interference) */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[99999] w-full h-full min-h-screen bg-white text-slate-900 px-6 py-6 flex flex-col justify-between md:hidden animate-in fade-in duration-150 overflow-y-auto">
            {/* Top Bar inside Menu */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <BrandLogo variant="header" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-line bg-slate-50 text-brand-ink shadow-xs transition-all active:scale-95"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            {/* Location & Status indicator */}
            <div className="flex items-center justify-between pt-3">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-brand-ink uppercase tracking-wider">
                  Menu de navigation
                </span>
              </div>
              <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 border border-teal-100 px-2.5 py-0.5 rounded-full">
                🇸🇳 Dakar
              </span>
            </div>

            {/* Clean Modern Navigation List */}
            <nav className="my-auto py-4 space-y-1">
              {mobileNavLinks.map((item) => (
                <a
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
                </a>
              ))}
            </nav>

            {/* Bottom Action Hub */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <a
                href={headerActions.pilotHref}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-teal-900 py-3.5 text-sm font-bold text-white shadow-md active:scale-98 transition-all"
              >
                <span>{headerActions.pilotBtn}</span>
                <span>→</span>
              </a>

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

              <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-medium text-slate-500 text-center">
                <span>WËR ASSET</span>
                <span>·</span>
                <span>Chaque équipement a une histoire</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
