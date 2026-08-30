import React from "react";
import {
  ArrowRight,
  Play,
  Check,
  QrCode,
  Wrench,
  BarChart3,
  Box,
  Ticket,
  Cloud,
  ShieldCheck,
  Bell,
  Layers,
  Smartphone,
  Users,
  Clock,
  X,
  Menu,
  Minus,
  Plus,
  Zap,
  Sparkles,
  Search,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "w-5 h-5", size }: IconProps) {
  const props = { className, size };

  switch (name.toLowerCase()) {
    case "arrow":
    case "arrow-right":
      return <ArrowRight {...props} />;
    case "play":
      return <Play {...props} />;
    case "check":
      return <Check {...props} />;
    case "qr":
    case "qrcode":
      return <QrCode {...props} />;
    case "wrench":
      return <Wrench {...props} />;
    case "chart":
    case "barchart":
      return <BarChart3 {...props} />;
    case "box":
      return <Box {...props} />;
    case "ticket":
      return <Ticket {...props} />;
    case "cloud":
      return <Cloud {...props} />;
    case "shield":
      return <ShieldCheck {...props} />;
    case "bell":
      return <Bell {...props} />;
    case "stock":
    case "layers":
      return <Layers {...props} />;
    case "mobile":
    case "smartphone":
      return <Smartphone {...props} />;
    case "users":
      return <Users {...props} />;
    case "clock":
      return <Clock {...props} />;
    case "close":
    case "x":
      return <X {...props} />;
    case "menu":
      return <Menu {...props} />;
    case "minus":
      return <Minus {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "sparkles":
      return <Sparkles {...props} />;
    case "search":
      return <Search {...props} />;
    case "external-link":
      return <ExternalLink {...props} />;
    case "chevron-down":
      return <ChevronDown {...props} />;
    case "chevron-right":
      return <ChevronRight {...props} />;
    case "alert":
      return <AlertCircle {...props} />;
    case "trending-down":
      return <TrendingDown {...props} />;
    case "trending-up":
      return <TrendingUp {...props} />;
    default:
      return <Check {...props} />;
  }
}
