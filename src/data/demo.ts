import { DemoStepData } from "@/types";

export const demoModalData = {
  eyebrow: "APERÇU PRODUIT",
  title: "WËR ASSET en 30 secondes.",
  subtitle: "Le cœur de l'expérience : identifier l'actif, agir rapidement, garder une trace exploitable.",
  steps: [
    {
      id: "scan",
      stepNumber: "01",
      label: "Scanner",
      subtitle: "01 — IDENTIFICATION",
      title: "La bonne fiche, instantanément.",
      description: "Le QR code élimine les recherches manuelles et réduit les erreurs d'identification.",
    },
    {
      id: "ticket",
      stepNumber: "02",
      label: "Ticket",
      subtitle: "02 — SIGNALEMENT",
      title: "Un ticket complet en moins d'une minute.",
      description: "Description, photo, urgence et équipement sont rattachés dès la création.",
    },
    {
      id: "work",
      stepNumber: "03",
      label: "Intervention",
      subtitle: "03 — EXÉCUTION",
      title: "Le terrain documente ce qui a vraiment été fait.",
      description: "Temps, diagnostic, opérations, pièces, compteurs et photos alimentent automatiquement l'historique.",
    },
    {
      id: "history",
      stepNumber: "04",
      label: "Historique",
      subtitle: "04 — TRAÇABILITÉ",
      title: "Chaque équipement garde sa mémoire.",
      description: "La direction peut enfin comprendre les coûts et prendre des décisions à partir de faits.",
    },
  ] as DemoStepData[],
};
