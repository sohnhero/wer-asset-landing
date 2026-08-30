import Link from "next/link";
import { BrandLogo } from "../atoms/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-[#071f1f] text-white pt-14 pb-10 sm:pt-20 sm:pb-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-10 sm:pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-5 flex flex-col items-start">
            <BrandLogo variant="footer" />
            <p className="mt-3 sm:mt-4 font-sora text-sm sm:text-base text-teal-100/80 max-w-sm leading-relaxed">
              Chaque équipement a une histoire. <br />
              Wër Asset la garde.
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 text-xs text-teal-200/70 font-medium">
              <span>🇸🇳</span> Conçu au Sénégal, pensé pour les organisations africaines.
            </div>
          </div>

          {/* Nav Links Col 1: Produit */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5 sm:gap-3 text-xs">
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
          <div className="col-span-1 md:col-span-2 flex flex-col gap-2.5 sm:gap-3 text-xs">
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
          <div className="col-span-2 md:col-span-3 flex flex-col gap-2.5 sm:gap-3 text-xs">
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
