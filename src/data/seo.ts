export const seoConfig = {
  siteName: "WËR ASSET",
  title: "WËR ASSET — Chaque équipement a une histoire.",
  titleTemplate: "%s | WËR ASSET",
  description:
    "WËR ASSET est la GMAO légère et plateforme de gestion d'actifs pensée pour le terrain en Afrique. QR-first, offline-first, traçabilité des coûts et maintenance préventive.",
  url: "https://wer-asset.com",
  locale: "fr_FR",
  twitterHandle: "@werasset",
  author: "WËR ASSET Technologies",
  keywords: [
    "GMAO",
    "gestion d'actifs",
    "maintenance préventive",
    "QR code équipement",
    "GMAO Afrique",
    "GMAO Sénégal",
    "GMAO Dakar",
    "gestion de parc technique",
    "logiciel maintenance hôtellerie",
    "offline-first GMAO",
    "TCO équipements",
  ],
};

export const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://wer-asset.com/#software",
      "name": "WËR ASSET",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android, PWA",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "XOF",
        "price": "0",
        "availability": "https://schema.org/InStock",
      },
      "description":
        "GMAO légère et plateforme de gestion d'équipements pour les entreprises africaines. QR-first, offline-first et traçabilité des coûts.",
      "featureList": [
        "Identification numérique par QR code",
        "Application technicien offline-first",
        "Gestion de tickets et ordres de travail",
        "Plans de maintenance préventive",
        "Suivi des stocks et pièces détachées",
        "Calcul du TCO et reporting des coûts",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://wer-asset.com/#organization",
      "name": "WËR ASSET",
      "url": "https://wer-asset.com",
      "logo": "https://wer-asset.com/assets/logo-mark.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://wer-asset.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Faut-il installer une application pour scanner un équipement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non pour le signalement simple : le scan QR peut ouvrir directement la fiche équipement dans le navigateur mobile. L'application technicien est conçue comme une PWA pour les usages terrain avancés et hors ligne.",
          },
        },
        {
          "@type": "Question",
          "name": "WËR ASSET fonctionne-t-il sans connexion internet ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La version technicien est pensée offline-first : les ordres de travail, diagnostics, photos, relevés de compteur et clôtures peuvent être saisis hors ligne puis synchronisés au retour du réseau.",
          },
        },
        {
          "@type": "Question",
          "name": "Quels types d'équipements peut-on suivre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le produit cible les équipements techniques critiques : groupes électrogènes, climatisation, pompes, chambres froides, ascenseurs et autres actifs nécessitant un historique et une maintenance régulière.",
          },
        },
        {
          "@type": "Question",
          "name": "À qui s'adresse le pilote ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le premier vertical est l'hôtellerie. Le profil recherché est un hôtel à Dakar ou environs disposant d'environ 50 à 300 équipements et d'une équipe technique interne ou de prestataires réguliers.",
          },
        },
        {
          "@type": "Question",
          "name": "Les prix sont-ils déjà fixés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les paliers sont définis, mais les montants précis doivent être validés avec le premier client pilote afin d'aligner la tarification sur la valeur réellement perçue.",
          },
        },
      ],
    },
  ],
};
