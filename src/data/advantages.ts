import { AdvantageItem } from "@/types";

export const advantagesSectionData = {
  eyebrow: "FAIT POUR LE MARCHÉ LOCAL",
  titlePrimary: "La puissance d'un SaaS moderne.",
  titleHighlight: "Avec les réalités africaines en tête.",
  advantages: [
    {
      icon: "mobile",
      title: "Mobile d'abord",
      tag: "Terrain",
      highlight: "Prise en main < 5 min",
      description:
        "Des parcours courts et lisibles pour des techniciens qui n'ont pas besoin d'être experts du logiciel.",
    },
    {
      icon: "cloud",
      title: "Hors ligne",
      tag: "Offline",
      highlight: "Sync automatique",
      description:
        "Opérationnel dans les sous-sols et chambres froides où le réseau mobile est faible ou absent.",
    },
    {
      icon: "bell",
      title: "Notifications utiles",
      tag: "WhatsApp",
      highlight: "Temps réel",
      description:
        "Alertes push, email et WhatsApp directement sur les canaux utilisés par vos équipes au quotidien.",
    },
    {
      icon: "money",
      isCurrency: true,
      title: "Facturation locale",
      tag: "FCFA",
      highlight: "Paiements locaux",
      description:
        "Tarification en FCFA et intégration des moyens de paiement adaptés aux entreprises sénégalaises.",
    },
  ] as AdvantageItem[],
};
