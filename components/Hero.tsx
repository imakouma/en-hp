"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden scroll-mt-14 pt-16 sm:scroll-mt-16 sm:pt-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-1/3 h-[32rem] w-[32rem] rounded-full bg-emerald-500/15 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgb(3_7_18)_70%)]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,rgb(148_163_184/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          AI × Real Fusion Venture
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          <span className="bg-gradient-to-r from-slate-100 via-blue-200 to-emerald-200 bg-clip-text text-transparent">
            人とAIを繋ぎ、
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
            リアルを動かす。
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          株式会社　縁RIGHTは、最先端のAI技術とリアルな現場体験を融合し、
          ビジネスの成長と人々の暮らしに新しい価値を届けるベンチャーです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#service"
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-3.5 text-base font-medium text-white shadow-xl shadow-blue-500/25 transition-all hover:shadow-blue-500/40 hover:brightness-110 sm:w-auto"
          >
            事業内容を見る
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full border border-slate-600 bg-slate-900/50 px-8 py-3.5 text-base font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-slate-500 hover:bg-slate-800/60 sm:w-auto"
          >
            お問い合わせ
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 md:bottom-10 md:block"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-600 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gradient-to-b from-blue-400 to-emerald-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
