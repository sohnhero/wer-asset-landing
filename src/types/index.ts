export interface NavItem {
  label: string;
  href: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ProblemItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
  impact?: string;
  severityColor?: "teal" | "amber" | "red";
  progressWidth?: string;
}

export interface BentoFeature {
  id: string;
  kicker: string;
  title: string;
  description: string;
  icon: string;
  iconBg: "teal" | "amber" | "green" | "blue" | "violet";
  size?: "large" | "normal" | "wide";
  isDark?: boolean;
}

export interface HowItWorksStep {
  step: number;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  screenData: {
    title: string;
    assetCode?: string;
    assetName?: string;
    site?: string;
    metrics?: Record<string, string>;
  };
}

export interface PersonaProfile {
  id: string;
  tabLabel: string;
  kicker: string;
  title: string;
  description: string;
  highlights: string[];
  dashboardLabel: string;
  siteName: string;
  kpis: Array<{
    label: string;
    value: string;
    trend: string;
    isNegative?: boolean;
    isAction?: boolean;
  }>;
  chartData: {
    title: string;
    subtitle: string;
  };
  topAssets: Array<{
    name: string;
    cost: string;
  }>;
}

export interface AdvantageItem {
  icon: string;
  title: string;
  description: string;
  tag?: string;
  highlight?: string;
  isCurrency?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  range: string;
  unit: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  isEnterprise?: boolean;
}

export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface DemoStepData {
  id: "scan" | "ticket" | "work" | "history";
  stepNumber: string;
  label: string;
  subtitle: string;
  title: string;
  description: string;
}
