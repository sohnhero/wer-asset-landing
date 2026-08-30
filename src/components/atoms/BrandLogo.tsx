import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "header" | "footer" | "mini";
  className?: string;
}

export function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  const isFooter = variant === "footer";
  const isMini = variant === "mini";

  return (
    <Link
      href="#top"
      className={`inline-flex items-center gap-2.5 font-sora font-bold tracking-tight transition-transform duration-200 hover:scale-[1.02] ${className}`}
      aria-label="WËR ASSET Accueil"
    >
      <div className="relative flex items-center justify-center">
        <Image
          src="/assets/logo-mark.png"
          alt="Logo WËR ASSET"
          width={isMini ? 26 : isFooter ? 36 : 38}
          height={isMini ? 26 : isFooter ? 36 : 38}
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>
      {!isMini && (
        <span
          className={`text-base tracking-tight ${
            isFooter ? "text-white" : "text-teal-900"
          }`}
        >
          WËR <b className={isFooter ? "text-white font-extrabold" : "text-brand-ink font-extrabold"}>ASSET</b>
        </span>
      )}
    </Link>
  );
}
