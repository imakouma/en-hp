"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { categoryLabels } from "@/lib/contact";

type FormState = {
  name: string;
  email: string;
  company: string;
  category: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  category: "ai-solution",
  message: "",
};

const categories = [
  { value: "ai-solution", label: "AI Solution" },
  { value: "event-marketing", label: "Event Marketing" },
  { value: "renovation", label: "Renovation Project" },
  { value: "other", label: "その他" },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setError(
        "メール送信の設定が未完了です。.env.local に NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY を設定し、サーバーを再起動してください。"
      );
      setIsSubmitting(false);
      return;
    }

    const categoryLabel = categoryLabels[form.category] ?? form.category;
    const messageBody = [
      `お名前: ${form.name}`,
      `メール: ${form.email}`,
      `会社名: ${form.company || "（未入力）"}`,
      `種別: ${categoryLabel}`,
      "",
      "【お問い合わせ内容】",
      form.message,
    ].join("\n");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `【お問い合わせ】${categoryLabel} — ${form.name} 様`,
          from_name: form.name,
          email: form.email,
          replyto: form.email,
          message: messageBody,
        }),
      });

      const data = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !data.success) {
        setError(data.message ?? "送信に失敗しました。しばらくしてから再度お試しください。");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("通信エラーが発生しました。ネットワークをご確認のうえ再度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="relative scroll-mt-20 py-16 sm:py-24 lg:scroll-mt-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-950/20 to-transparent" aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-100 sm:mt-3 sm:text-3xl lg:text-4xl">
            お問い合わせ
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            ご質問・ご相談はこちらのフォームよりお気軽にどうぞ。
            通常2営業日以内にご返信いたします。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20"
              >
                <svg className="h-7 w-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-100">
                送信が完了しました
              </h3>
              <p className="mt-2 text-slate-400">
                お問い合わせありがとうございます。担当より折り返しご連絡いたします。
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm(initialForm);
                  setError(null);
                }}
                className="mt-6 text-sm text-blue-400 underline-offset-4 hover:underline"
              >
                別のお問い合わせを送る
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm sm:space-y-6 sm:p-8 lg:p-10"
            >
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                    お名前 <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="山田 太郎"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.005 }}>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                    メールアドレス <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="example@company.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </motion.div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.005 }}>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                  会社名
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  placeholder="株式会社〇〇"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.005 }}>
                <label htmlFor="category" className="mb-2 block text-sm font-medium text-slate-300">
                  お問い合わせ種別 <span className="text-blue-400">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.005 }}>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  お問い合わせ内容 <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="ご相談内容をご記入ください"
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-600 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </motion.div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  {error}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
                className="w-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-500/25 transition-shadow hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
