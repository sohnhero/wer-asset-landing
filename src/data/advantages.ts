import { AdvantageItem } from "@/types";

export const advantagesSectionData = {
  eyebrow: "FAIT POUR LE MARCHÉ LOCAL",
  titlePrimary: "La puissance d'un SaaS moderne.",
  titleHighlight: "Avec les réalités africaines en tête.",
  advantages: [
    {
      icon: "mobile",
      title: "Mobile d'abord",
      description:
        "Des parcours courts et lisibles pour des utilisateurs terrain qui n'ont pas besoin d'être experts du logiciel.",
    },
    {
      icon: "cloud",
      title: "Hors ligne",
      description:
        "Le technicien reste opérationnel dans les locaux techniques et sous-sols où le réseau est faible ou absent.",
    },
    {
      icon: "bell",
      title: "Notifications utiles",
      description:
        "Application, email et WhatsApp pour toucher l'utilisateur sur les canaux réellement utilisés au quotidien.",
    },
    {
      icon: "money",
      isCurrency: true,
      title: "Facturation locale",
      description:
        "Tarification en FCFA et intégration prévue des moyens de paiement adaptés aux entreprises sénégalaises.",
    },
  ] as AdvantageItem[],
};
