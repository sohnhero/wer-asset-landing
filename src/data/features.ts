export const featuresSectionData = {
  eyebrow: "TOUT CE QU'IL FAUT. RIEN DE SUPERFLU.",
  titlePrimary: "Une GMAO légère,",
  titleHighlight: "pensée pour le réel.",
  subtitle:
    "De l'identification de l'actif à l'analyse des coûts, WËR ASSET couvre la chaîne opérationnelle sans la complexité des GMAO lourdes.",
  bentoItems: {
    qrFirst: {
      kicker: "QR-FIRST",
      title: "Un scan. Toute l'histoire de l'équipement.",
      description:
        "Chaque actif possède une identité numérique unique. Scannez l'étiquette pour voir son état, son historique, ses documents ou signaler un problème.",
      assetCode: "EQP-0001",
      assetName: "Groupe électrogène · 500 KVA",
    },
    preventive: {
      kicker: "MAINTENANCE PRÉVENTIVE",
      title: "Planifiez avant la panne.",
      description:
        "Date, périodicité ou compteur : les ordres de travail se déclenchent au bon moment.",
      monthLabel: "Mai 2026",
      taskCount: "18 tâches",
      tasks: [
        { name: "Service 500H", code: "GE-001", time: "08:00", tag: "Critique", color: "red" },
        { name: "Nettoyage filtres", code: "AC-014", time: "11:30", tag: "Préventif", color: "teal" },
      ],
    },
    tickets: {
      kicker: "TICKETS & ORDRES DE TRAVAIL",
      title: "Du signalement à la preuve d'intervention.",
      flow: [
        { label: "Nouveau", count: "3", color: "gray" },
        { label: "Affecté", count: "2", color: "blue" },
        { label: "Intervention", count: "1", color: "amber" },
        { label: "Résolu", count: "1", color: "green" },
      ],
    },
    costs: {
      kicker: "COÛTS & PILOTAGE",
      title: "Transformez chaque intervention en décision.",
      description:
        "Disponibilité, top équipements coûteux, coûts par site, catégorie ou fournisseur et TCO : la direction voit enfin où part le budget maintenance.",
      monthlyCost: "1,25 M",
      currency: "FCFA",
      trend: "↓ 8.6%",
      trendLabel: "Coût ce mois",
      months: ["Déc", "Jan", "Fév", "Mar", "Avr", "Mai"],
    },
    stock: {
      kicker: "PIÈCES & STOCK",
      title: "Anticipez les ruptures critiques.",
      description:
        "Chaque sortie est rattachée à un ordre de travail. Les seuils déclenchent les alertes de réapprovisionnement.",
      items: [
        { name: "Filtre huile GE", qty: 12, threshold: 5, status: "ok" },
        { name: "Filtre clim 600×600", qty: 4, threshold: 6, status: "low" },
        { name: "Courroie AX52", qty: 0, threshold: 2, status: "out" },
      ],
    },
  },
};
