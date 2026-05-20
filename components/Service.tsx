"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Hammer, Home, Layers, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "AI Solution",
    category: "AI開発・導入支援",
    target: "中小企業・営業会社向け",
    value: "利益直結型AIソリューション",
    accent: "blue" as const,
    icon: Cpu,
    secondaryIcon: Bot,
    details: [
      {
        heading: "AI営業リスト自動生成・アプローチツール",
        description:
          "ターゲット層をAIがWebから自動抽出し、アポ率を最大化するアプローチ文面を自動生成。",
      },
      {
        heading: "社内業務自動化・LINE AIコンシェルジュ",
        description:
          "過去マニュアルやデータをAIが学習。LINEやSlackから社内知識に1秒でアクセス。",
      },
      {
        heading: "先端AI受託開発",
        description:
          "業務プロセスの徹底的なヒアリングに基づき、個別最適化したAIシステムをゼロから構築。",
      },
    ],
  },
  {
    title: "Event Marketing",
    category: "携帯催事・イベント企画",
    target: "通信キャリア・販売代理店向け",
    value: "AI管理による高効率運営",
    accent: "emerald" as const,
    icon: Sparkles,
    secondaryIcon: Layers,
    details: [
      {
        heading: "2年半以上の現場実績",
        description:
          "豊富な現場ノウハウに基づく、圧倒的なキャッチ力とクローザー力。",
      },
      {
        heading: "90% AI化された次世代管理",
        description:
          "スタッフ教育、シフト管理、現場フィードバックをAIで自動化。人的ミスを極限まで減らし、常に質の高い稼働を担保。",
      },
    ],
  },
  {
    title: "Renovation Project",
    category: "DIYリフォーム×旅コミュニティ",
    target: "大学生・建築学生向け",
    value: "体験型リアルコミュニティ",
    accent: "violet" as const,
    icon: Home,
    secondaryIcon: Hammer,
    details: [
      {
        heading: "「DIYのお手伝い×旅」という新しい選択肢",
        description:
          "全国の空き家やリノベーション物件を舞台に、大学生が主体となって施工に携わる体験型プロジェクト。",
      },
      {
        heading: "建築学生のナレッジ蓄積",
        description:
          "実践的なリフォーム現場を通じて、設計から施工、売却プロセスまでをトータルで学ぶ育成環境の提供。",
      },
    ],
  },
];

export default function Service() {
  return (
    <section id="service" className="relative scroll-mt-20 py-16 sm:py-24 lg:scroll-mt-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-blue-400 sm:text-sm">
            Service
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 sm:mt-3 sm:text-3xl lg:text-4xl">
            事業内容
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-2 text-sm leading-relaxed text-slate-400 sm:mt-4 sm:text-base">
            AIの知性とリアルな現場力を掛け合わせ、3つの領域で価値を創出しています。
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 lg:mt-16 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
