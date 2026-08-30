import Link from "next/link";
import { BrandLogo } from "../atoms/BrandLogo";

export function Footer() {
  return (
    <footer className="relative bg-[#061e1e] text-white pt-12 pb-10 sm:pt-20 sm:pb-14 border-t border-white/10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Status Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 sm:pb-14 border-b border-white/10">
          <div className="flex flex-col items-start max-w-md">
            <BrandLogo variant="footer" />
            <p className="mt-3 font-sora text-xs sm:text-sm text-teal-100/80 leading-relaxed">
              Chaque équipement a une histoire. <br className="hidden sm:inline" />
              Wër Asset la garde.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-teal-200 backdrop-blur-sm">
              <span>🇸🇳</span>
              <span>Conçu à Dakar · Fait pour l'Afrique</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Système 100% opérationnel</span>
            </div>
          </div>
        </div>

        {/* 4 Balanced Symmetrical Navigation Columns (2x2 on mobile, 4 cols on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 py-10 sm:py-14 border-b border-white/10">
          {/* Col 1: Produit */}
          <div className="flex flex-col gap-2.5 sm:gap-3 text-xs">
            <b className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
              Produit
            </b>
            <Link href="#features" className="text-teal-100/70 hover:text-white transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#how" className="text-teal-100/70 hover:text-white transition-colors">
              Comment ça marche
            </Link>
            <Link href="#pricing" className="text-teal-100/70 hover:text-white transition-colors">
              Offres & Tarifs
            </Link>
            <Link href="#contact" className="text-teal-100/70 hover:text-white transition-colors">
              Programme Pilote
            </Link>
          </div>

          {/* Col 2: Solutions */}
          <div className="flex flex-col gap-2.5 sm:gap-3 text-xs">
            <b className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
              Solutions
            </b>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Direction Générale
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Responsables Maintenance
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Techniciens Terrain
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Gestion Multi-sites
            </Link>
          </div>

          {/* Col 3: Ressources */}
          <div className="flex flex-col gap-2.5 sm:gap-3 text-xs">
            <b className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
              Ressources
            </b>
            <Link href="#faq" className="text-teal-100/70 hover:text-white transition-colors">
              Questions Fréquentes
            </Link>
            <Link href="#product" className="text-teal-100/70 hover:text-white transition-colors">
              À propos du produit
            </Link>
            <Link href="#how" className="text-teal-100/70 hover:text-white transition-colors">
              Parcours QR-Code
            </Link>
            <Link href="#features" className="text-teal-100/70 hover:text-white transition-colors">
              Mode Hors Ligne
            </Link>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="flex flex-col gap-2.5 sm:gap-3 text-xs">
            <b className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">
              Contact
            </b>
            <Link href="#contact" className="text-teal-100/70 hover:text-white transition-colors">
              Demander une démo
            </Link>
            <a
              href="https://wa.me/221770000000"
              target="_blank"
              rel="noreferrer"
              className="text-teal-100/70 hover:text-emerald-300 transition-colors"
            >
              Support WhatsApp
            </a>
            <span className="text-teal-100/70">
              Dakar, Sénégal
            </span>
            <span className="text-teal-100/70">
              contact@wer-asset.com
            </span>
          </div>
        </div>

        {/* Bottom Symmetrical Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-teal-200/60 font-medium">
          <span>© 2026 WËR ASSET. Tous droits réservés.</span>
          <div className="flex items-center gap-2 text-[11px] text-teal-300/80">
            <span>Scanner</span>
            <span>·</span>
            <span>Identifier</span>
            <span>·</span>
            <span>Maintenir</span>
            <span>·</span>
            <span>Tracer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
