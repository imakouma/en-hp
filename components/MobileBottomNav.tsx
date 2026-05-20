"use client";

import { Building2, Home, Mail, Sparkles } from "lucide-react";
import { navItems } from "@/lib/nav";

const bottomNavItems = [
  { ...navItems[0], icon: Home },
  { ...navItems[1], icon: Sparkles },
  { ...navItems[2], icon: Building2 },
  { ...navItems[3], icon: Mail },
] as const;

export default function MobileBottomNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/90 bg-gray-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-lg md:hidden"
      aria-label="モバイルナビゲーション"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-around px-1 py-1.5">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1">
              <a
                href={item.href}
                className="flex flex-col items-center gap-0.5 rounded-xl px-1 py-2 text-[10px] font-medium text-slate-400 transition-colors active:bg-slate-800/60 active:text-white"
              >
                <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
                <span className="truncate">{item.shortLabel}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
