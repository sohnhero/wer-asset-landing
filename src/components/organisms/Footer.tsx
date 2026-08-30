import Link from "next/link";
import { BrandLogo } from "../atoms/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#071f1f] text-white pt-20 pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandLogo variant="footer" />
            <p className="mt-4 font-sora text-sm sm:text-base text-teal-100/80 max-w-sm leading-relaxed">
              Chaque équipement a une histoire. <br />
              Wër Asset la garde.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-teal-200/70 font-medium">
              <span>🇸🇳</span> Conçu au Sénégal, pensé pour les organisations africaines.
            </div>
          </div>

          {/* Nav Links Col 1: Produit */}
          <div className="md:col-span-2 flex flex-col gap-3 text-xs">
            <b className="text-sm font-bold text-white mb-1">Produit</b>
            <Link href="#features" className="text-teal-100/70 hover:text-white transition-colors">
              Fonctionnalités
            </Link>
            <Link href="#how" className="text-teal-100/70 hover:text-white transition-colors">
              Comment ça marche
            </Link>
            <Link href="#pricing" className="text-teal-100/70 hover:text-white transition-colors">
              Offres
            </Link>
            <Link href="#contact" className="text-teal-100/70 hover:text-white transition-colors">
              Pilote
            </Link>
          </div>

          {/* Nav Links Col 2: Solutions */}
          <div className="md:col-span-2 flex flex-col gap-3 text-xs">
            <b className="text-sm font-bold text-white mb-1">Solutions</b>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Direction
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Maintenance
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Techniciens
            </Link>
            <Link href="#solutions" className="text-teal-100/70 hover:text-white transition-colors">
              Multi-sites
            </Link>
          </div>

          {/* Nav Links Col 3: Ressources */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs">
            <b className="text-sm font-bold text-white mb-1">Ressources</b>
            <Link href="#faq" className="text-teal-100/70 hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="#product" className="text-teal-100/70 hover:text-white transition-colors">
              À propos du produit
            </Link>
            <Link href="#contact" className="text-teal-100/70 hover:text-white transition-colors">
              Nous contacter
            </Link>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-teal-200/60 font-medium">
          <span>© 2026 WËR ASSET. Tous droits réservés.</span>
          <span>Scannez. Identifiez. Maintenez. Tracez.</span>
        </div>
      </div>
    </footer>
  );
}
