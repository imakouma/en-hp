"use client";

import { motion } from "framer-motion";

const companyInfo = [
  { label: "会社名", value: "株式会社En（仮）" },
  { label: "代表者", value: "今村 宏麻" },
  { label: "所在地", value: "東京都小平市" },
  {
    label: "事業内容",
    value:
      "AIシステム開発・導入支援 / 通信催事・イベントマーケティング / 不動産リノベーションコミュニティ事業",
  },
];

export default function Company() {
  return (
    <section id="company" className="relative scroll-mt-20 py-16 sm:py-24 lg:scroll-mt-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
            Company
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 sm:mt-3 sm:text-3xl lg:text-4xl">
            会社概要
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
        >
          <dl className="divide-y divide-slate-800">
            {companyInfo.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="grid gap-1 px-4 py-4 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:px-8 sm:py-5"
              >
                <dt className="text-sm font-medium text-slate-400">{row.label}</dt>
                <dd className="text-sm leading-relaxed text-slate-200 sm:text-base">
                  {row.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
