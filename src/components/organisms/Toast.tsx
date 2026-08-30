"use client";

import { Icon } from "../atoms/Icon";

interface ToastProps {
  show: boolean;
  title: string;
  message: string;
  onClose?: () => void;
}

export function Toast({ show, title, message }: ToastProps) {
  if (!show) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md animate-float max-w-sm"
    >
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
        <Icon name="check" className="h-5 w-5" />
      </div>
      <div>
        <b className="block text-xs font-bold text-brand-ink leading-tight">
          {title}
        </b>
        <small className="block text-[10.5px] text-brand-muted mt-0.5 leading-snug">
          {message}
        </small>
      </div>
    </div>
  );
}
