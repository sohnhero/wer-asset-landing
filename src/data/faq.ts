import { FaqItemData } from "@/types";

export const faqSectionData = {
  eyebrow: "QUESTIONS FRÉQUENTES",
  titlePrimary: "Avant de",
  titleHighlight: "commencer.",
  subtitle: "Les réponses essentielles sur le fonctionnement de WËR ASSET et le pilote.",
  items: [
    {
      id: "faq-1",
      question: "Faut-il installer une application pour scanner un équipement ?",
      answer:
        "Non pour le signalement simple : le scan QR peut ouvrir directement la fiche équipement dans le navigateur mobile. L'application technicien est conçue comme une PWA pour les usages terrain avancés et hors ligne.",
    },
    {
      id: "faq-2",
      question: "WËR ASSET fonctionne-t-il sans connexion internet ?",
      answer:
        "La version technicien est pensée offline-first : les ordres de travail, diagnostics, photos, relevés de compteur et clôtures peuvent être saisis hors ligne puis synchronisés au retour du réseau.",
    },
    {
      id: "faq-3",
      question: "Quels types d'équipements peut-on suivre ?",
      answer:
        "Le produit cible les équipements techniques critiques : groupes électrogènes, climatisation, pompes, chambres froides, ascenseurs et autres actifs nécessitant un historique et une maintenance régulière.",
    },
    {
      id: "faq-4",
      question: "À qui s'adresse le pilote ?",
      answer:
        "Le premier vertical est l'hôtellerie. Le profil recherché est un hôtel à Dakar ou environs disposant d'environ 50 à 300 équipements et d'une équipe technique interne ou de prestataires réguliers.",
    },
    {
      id: "faq-5",
      question: "Les prix sont-ils déjà fixés ?",
      answer:
        "Les paliers sont définis, mais les montants précis doivent être validés avec le premier client pilote afin d'aligner la tarification sur la valeur réellement perçue.",
    },
  ] as FaqItemData[],
};
