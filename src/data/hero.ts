import { TrustItem } from "@/types";

export const heroContent = {
  badge: "GMAO légère & gestion d'actifs · conçue au Sénégal",
  titlePrimary: "Vos équipements.",
  titleHighlight: "Enfin sous contrôle.",
  description:
    "WËR ASSET donne à chaque équipement une identité numérique, un historique et un plan de maintenance. Scannez un QR code, intervenez, tracez les coûts et anticipez les pannes.",
  ctaPrimary: "Lancer un pilote",
  ctaSecondary: "Voir l'expérience produit",
  trustItems: [
    {
      icon: "qr",
      title: "QR-first",
      subtitle: "Scan en quelques secondes",
    },
    {
      icon: "cloud",
      title: "Offline-first",
      subtitle: "Le terrain reste opérationnel",
    },
    {
      icon: "shield",
      title: "Traçable",
      subtitle: "Chaque action est historisée",
    },
  ] as TrustItem[],
  sectorTags: [
    "Hôtellerie",
    "Cliniques",
    "Immeubles",
    "Industrie",
    "Retail",
    "ONG",
  ],
  footerTagline:
    "Une plateforme pour ceux qui doivent garder les équipements critiques en état de marche.",
};

export const heroDashboardData = {
  userInitials: "MD",
  siteLocation: "18 Mai 2026 · Dakar",
  welcomeUser: "Bonjour, Admin",
  kpis: [
    {
      symbol: "box",
      color: "teal",
      label: "Équipements",
      value: "256",
      detail: "Actifs suivis",
    },
    {
      symbol: "check",
      color: "green",
      label: "Disponibilité",
      value: "86%",
      detail: "+7 pts ce mois",
    },
    {
      symbol: "wrench",
      color: "amber",
      label: "Maintenances",
      value: "18",
      detail: "À planifier",
    },
    {
      symbol: "ticket",
      color: "red",
      label: "Tickets",
      value: "7",
      detail: "2 critiques",
    },
  ],
  fleetStatus: {
    inService: 220,
    toMonitor: 20,
    maintenance: 10,
    outOfService: 6,
    total: 256,
    percentage: "86%",
  },
  upcomingMaintenances: [
    { code: "GE", name: "Groupe 500 KVA", task: "Service 500H", date: "20 Mai", color: "teal" },
    { code: "AC", name: "Climatisation", task: "Nettoyage filtres", date: "21 Mai", color: "blue" },
    { code: "PM", name: "Pompe", task: "Inspection", date: "22 Mai", color: "violet" },
  ],
  recentAssets: [
    { code: "GE", name: "Groupe électrogène 500KVA", site: "Hôtel Savana", status: "En service", statusType: "green", date: "20 Mai" },
    { code: "AC", name: "Climatisation centrale", site: "Hôtel Ndakar", status: "À surveiller", statusType: "amber", date: "21 Mai" },
    { code: "PM", name: "Pompe de surpression", site: "Rés. Almadies", status: "En service", statusType: "green", date: "22 Mai" },
  ],
};
