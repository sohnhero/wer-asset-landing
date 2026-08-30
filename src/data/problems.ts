import { ProblemItem } from "@/types";

export const problemSectionData = {
  eyebrow: "LE PROBLÈME",
  titlePrimary: "Excel, WhatsApp, carnets papier.",
  titleHighlight: "Vos équipements méritent mieux.",
  subtitle:
    "Quand l'information est dispersée, la maintenance devient réactive, coûteuse et impossible à auditer.",
  cards: [
    {
      number: "01",
      icon: "ticket",
      title: "Les pannes arrivent sans contexte",
      description:
        "Dernière intervention, garantie, pièce remplacée, coût cumulé : l'information est souvent introuvable au moment où elle compte.",
      tag: "Manque d'historique",
      impact: "Diagnostic ralenti & erreurs récurrentes",
    },
    {
      number: "02",
      icon: "clock",
      title: "Le préventif est oublié",
      description:
        "Les échéances sont suivies manuellement, les compteurs ne sont pas consolidés et une maintenance retardée devient une panne coûteuse.",
      tag: "Suivi manuel aléatoire",
      impact: "Arrêts d'activité imprévus",
    },
    {
      number: "03",
      icon: "chart",
      title: "Les coûts restent invisibles",
      description:
        "Sans historique fiable, difficile de savoir quel équipement coûte trop cher, quel prestataire respecte son SLA ou quand remplacer un actif.",
      tag: "Zéro visibilité TCO",
      impact: "Budgets de maintenance incontrôlés",
    },
  ] as ProblemItem[],
  valueBanner: {
    eyebrow: "LA RÉPONSE",
    title: "Le carnet de santé numérique de vos équipements.",
    subtitle:
      "Une seule source de vérité, du QR code sur la machine jusqu'au tableau de bord de la direction.",
    flowSteps: ["Scanner", "Identifier", "Maintenir", "Tracer"],
  },
};
