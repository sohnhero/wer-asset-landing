import { PersonaProfile } from "@/types";

export const personasSectionData = {
  eyebrow: "UNE PLATEFORME. PLUSIEURS MÉTIERS.",
  titlePrimary: "Chacun voit ce dont",
  titleHighlight: "il a réellement besoin.",
  subtitle:
    "WËR ASSET adapte l'information et les actions aux rôles terrain et décisionnels, sans noyer les utilisateurs dans des écrans inutiles.",
  personas: {
    direction: {
      id: "direction",
      tabLabel: "Direction",
      kicker: "DIRECTION GÉNÉRALE",
      title: "Pilotez le parc au lieu de subir les coûts.",
      description:
        "Une lecture consolidée de la disponibilité, des coûts, des dérives et des équipements qui commencent à coûter trop cher.",
      highlights: [
        "Disponibilité globale du parc",
        "Coûts par site, catégorie et fournisseur",
        "TCO et top équipements coûteux",
      ],
      dashboardLabel: "Vue Direction",
      siteName: "Hôtel Savana",
      kpis: [
        { label: "Disponibilité", value: "86%", trend: "+7 pts" },
        { label: "Coût / actif", value: "4 883 F", trend: "−8.6%" },
        { label: "Tickets critiques", value: "2", trend: "Action", isAction: true },
      ],
      chartData: {
        title: "Coûts de maintenance",
        subtitle: "6 derniers mois",
      },
      topAssets: [
        { name: "GE-001", cost: "2.84M" },
        { name: "AC-014", cost: "1.62M" },
        { name: "EL-002", cost: "1.18M" },
      ],
    },
    maintenance: {
      id: "maintenance",
      tabLabel: "Responsable maintenance",
      kicker: "RESPONSABLE MAINTENANCE",
      title: "Planifiez, affectez et gardez la maîtrise.",
      description:
        "Un espace unique pour piloter les maintenances préventives, affecter les interventions et suivre les délais.",
      highlights: [
        "Plans de maintenance automatisés",
        "Ordres de travail et affectations",
        "Suivi des maintenances en retard",
      ],
      dashboardLabel: "Vue Maintenance",
      siteName: "Hôtel Savana",
      kpis: [
        { label: "Préventif à jour", value: "92%", trend: "+4 pts" },
        { label: "OT en cours", value: "5", trend: "En délai" },
        { label: "Urgences traitées", value: "100%", trend: "< 2h" },
      ],
      chartData: {
        title: "Temps moyen de résolution",
        subtitle: "Heures par ticket",
      },
      topAssets: [
        { name: "GE-001 (500H)", cost: "Terminé" },
        { name: "AC-014 (Filtres)", cost: "En cours" },
        { name: "PM-008 (Pression)", cost: "Planifié" },
      ],
    },
    technicien: {
      id: "technicien",
      tabLabel: "Technicien",
      kicker: "TECHNICIEN",
      title: "Un outil terrain qui va droit au but.",
      description:
        "Planning du jour, scan QR, diagnostic, photos, compteurs et clôture d'intervention — même hors connexion.",
      highlights: [
        "Application mobile offline-first",
        "Diagnostic et photos d'intervention",
        "Synchronisation automatique",
      ],
      dashboardLabel: "Vue Technicien",
      siteName: "Hôtel Savana",
      kpis: [
        { label: "Interventions du jour", value: "3", trend: "1 critique" },
        { label: "Temps moyen / OT", value: "42 min", trend: "Optimal" },
        { label: "Sync hors-ligne", value: "100%", trend: "À jour" },
      ],
      chartData: {
        title: "Activité d'intervention",
        subtitle: "Cette semaine",
      },
      topAssets: [
        { name: "GE-001", cost: "08:00" },
        { name: "AC-014", cost: "11:30" },
        { name: "PM-008", cost: "16:00" },
      ],
    },
    site: {
      id: "site",
      tabLabel: "Responsable de site",
      kicker: "RESPONSABLE DE SITE",
      title: "Signalez un problème en 30 secondes.",
      description:
        "Un scan, une description et éventuellement une photo. Le ticket arrive au bon interlocuteur et son statut reste visible.",
      highlights: [
        "Signalement QR simplifié",
        "Suivi du statut du ticket",
        "Aucune expertise technique requise",
      ],
      dashboardLabel: "Vue Site",
      siteName: "Hôtel Savana",
      kpis: [
        { label: "Tickets créés", value: "4", trend: "Ce mois" },
        { label: "Prise en charge", value: "14 min", trend: "Moyenne" },
        { label: "Satisfaction", value: "4.9/5", trend: "Élevée" },
      ],
      chartData: {
        title: "Historique des demandes",
        subtitle: "Statut en direct",
      },
      topAssets: [
        { name: "Clim Chambre 204", cost: "Résolu" },
        { name: "Fuite Salle d'eau", cost: "Pris en charge" },
        { name: "Lumière Couloir", cost: "Nouveau" },
      ],
    },
    magasin: {
      id: "magasin",
      tabLabel: "Magasinier",
      kicker: "MAGASINIER",
      title: "Les pièces consommées cessent de disparaître.",
      description:
        "Chaque mouvement est lié à une intervention. Les seuils permettent d'anticiper les ruptures avant qu'elles bloquent le terrain.",
      highlights: [
        "Catalogue et emplacements",
        "Seuils de réapprovisionnement",
        "Consommation par équipement",
      ],
      dashboardLabel: "Vue Stock",
      siteName: "Magasin Central",
      kpis: [
        { label: "Références actives", value: "148", trend: "Suivies" },
        { label: "Alertes seuil", value: "2", trend: "À commander", isAction: true },
        { label: "Valeur stock", value: "4.2M", trend: "FCFA" },
      ],
      chartData: {
        title: "Rotations de pièces",
        subtitle: "30 derniers jours",
      },
      topAssets: [
        { name: "Filtres Huile", cost: "12 en stock" },
        { name: "Filtres Clim", cost: "4 (Seuil 6)" },
        { name: "Courroie AX52", cost: "0 (Alerte)" },
      ],
    },
  } as Record<string, PersonaProfile>,
};
