# WËR ASSET — Landing Page SaaS Next.js

Plateforme de gestion d'équipements et GMAO légère conçue pour les équipes terrain en Afrique.

## 🚀 Technologies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Langage**: [TypeScript](https://www.typescriptlang.org/)
- **Styles**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS animations & micro-interactions

## 📁 Architecture (Atomic Design)

- `src/components/atoms/` : Composants de base (Button, Badge, Icon, GlowMesh, AnimatedNumber, BackToTop, BrandLogo)
- `src/components/molecules/` : Composants intermédiaires (KpiCard, StatusIndicator, TabButton, FaqItem, FormField, AdvantageCard)
- `src/components/organisms/` : Sections & blocs complexes (HeaderNav, HeroSection, ProblemSection, BentoFeatures, HowItWorks, OfflineShowcase, PersonaSection, AdvantageSection, PricingSection, PilotSection, FaqSection, DemoModal, Footer)
- `src/components/templates/` : `LandingTemplate`
- `src/data/` : Données structurées et typées
- `src/types/` : Interfaces TypeScript

## 🛠️ Démarrage Local

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Construction de la version de production
npm run build
```
