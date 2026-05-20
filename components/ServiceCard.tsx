"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type ServiceDetail = {
  heading: string;
  description: string;
};

type ServiceCardProps = {
  title: string;
  category: string;
  target: string;
  value: string;
  icon: LucideIcon;
  secondaryIcon?: LucideIcon;
  details: ServiceDetail[];
  accent: "blue" | "emerald" | "violet";
  index: number;
};

const accentStyles = {
  blue: {
    gradient:
      "from-blue-500 via-cyan-400 to-emerald-500 group-hover:shadow-[0_0_28px_rgba(59,130,246,0.45)]",
    icon: "from-blue-500/25 to-cyan-500/10 text-blue-400 ring-blue-500/20",
    value: "text-blue-400",
  },
  emerald: {
    gradient:
      "from-emerald-500 via-teal-400 to-blue-500 group-hover:shadow-[0_0_28px_rgba(16,185,129,0.45)]",
    icon: "from-emerald-500/25 to-teal-500/10 text-emerald-400 ring-emerald-500/20",
    value: "text-emerald-400",
  },
  violet: {
    gradient:
      "from-violet-500 via-blue-400 to-emerald-500 group-hover:shadow-[0_0_28px_rgba(139,92,246,0.45)]",
    icon: "from-violet-500/25 to-blue-500/10 text-violet-400 ring-violet-500/20",
    value: "text-violet-400",
  },
};

export default function ServiceCard({
  title,
  category,
  target,
  value,
  icon: Icon,
  secondaryIcon: SecondaryIcon,
  details,
  accent,
  index,
}: ServiceCardProps) {
  const styles = accentStyles[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <motion.div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 blur-[1px] transition-all duration-500 group-hover:opacity-100 ${styles.gradient}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.gradient}`}
        aria-hidden
      />

      <motion.article
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-shadow duration-500 group-hover:border-transparent group-hover:shadow-2xl sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.06] via-transparent to-emerald-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />

        <div
          className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ring-1 transition-transform duration-300 group-hover:scale-105 sm:mb-6 sm:h-16 sm:w-16 ${styles.icon}`}
        >
          <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.5} aria-hidden />
          {SecondaryIcon && (
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900 shadow-md">
              <SecondaryIcon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </span>
          )}
        </div>

        <div className="relative">
          <h3 className="text-lg font-bold text-slate-100 sm:text-xl">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">（{category}）</p>
        </div>

        <div className="relative mt-4 space-y-2 rounded-xl border border-slate-800/80 bg-slate-950/50 px-4 py-3 sm:mt-5">
          <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
            <span className="font-medium text-slate-500">ターゲット</span>
            <br />
            {target}
          </p>
          <p className={`text-sm font-semibold leading-snug sm:text-base ${styles.value}`}>
            {value}
          </p>
        </div>

        <ul className="relative mt-5 flex flex-1 flex-col gap-4 sm:mt-6 sm:gap-5">
          {details.map((item) => (
            <li key={item.heading} className="border-t border-slate-800/60 pt-4 first:border-0 first:pt-0">
              <p className="text-sm font-bold leading-snug text-slate-100">
                {item.heading}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </motion.article>
    </motion.div>
  );
}
