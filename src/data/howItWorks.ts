import { HowItWorksStep } from "@/types";

export const howItWorksData: {
  eyebrow: string;
  titlePrimary: string;
  titleHighlight: string;
  steps: Record<number, HowItWorksStep>;
} = {
  eyebrow: "UN PARCOURS QUI COLLE AU TERRAIN",
  titlePrimary: "De la machine au tableau de bord.",
  titleHighlight: "Sans friction.",
  steps: {
    1: {
      step: 1,
      label: "Scanner",
      title: "Scannez le QR code de l'équipement.",
      description:
        "Pas de recherche complexe ni de navigation interminable. Le technicien ou le responsable de site arrive directement sur la bonne fiche.",
      highlights: [
        "Identification immédiate de l'actif",
        "Accès adapté au rôle de l'utilisateur",
        "Historique et documents disponibles",
      ],
      screenData: {
        title: "Scanner un QR code",
        assetCode: "EQP-0001",
      },
    },
    2: {
      step: 2,
      label: "Signaler",
      title: "Signalez le problème en moins d'une minute.",
      description:
        "Description, photo et niveau d'urgence sont immédiatement rattachés au bon équipement et horodatés.",
      highlights: [
        "Création automatique du ticket",
        "Numérotation et priorité",
        "Notification du responsable maintenance",
      ],
      screenData: {
        title: "Nouveau signalement",
        assetCode: "EQP-0001",
        assetName: "Groupe 500 KVA",
        site: "Hôtel Savana",
      },
    },
    3: {
      step: 3,
      label: "Intervenir",
      title: "Transformez le ticket en intervention tracée.",
      description:
        "Le responsable affecte l'ordre de travail. Le technicien documente le diagnostic, le temps passé, les pièces, les photos et les compteurs.",
      highlights: [
        "Planning du jour",
        "Fonctionnement hors ligne",
        "Clôture d'intervention documentée",
      ],
      screenData: {
        title: "ORDRE DE TRAVAIL",
        assetName: "Service 500H",
        site: "GE-001 · Hôtel Savana",
      },
    },
    4: {
      step: 4,
      label: "Analyser",
      title: "L'historique devient une donnée de pilotage.",
      description:
        "Chaque action alimente automatiquement le coût, le TCO, l'historique et la prochaine échéance de maintenance.",
      highlights: [
        "Coûts par actif et par site",
        "Historique complet de l'équipement",
        "Décisions de remplacement objectivées",
      ],
      screenData: {
        title: "GE-001",
        assetName: "Coût total de possession",
      },
    },
  },
};
