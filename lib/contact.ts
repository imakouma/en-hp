export const CONTACT_TO_EMAIL = "imamurakouma623@gmail.com";

export const categoryLabels: Record<string, string> = {
  "ai-solution": "AI Solution",
  "event-marketing": "Event Marketing",
  renovation: "Renovation Project",
  other: "その他",
};

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  category: string;
  message: string;
};

export function validateContactPayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "リクエストが不正です。" };
  }

  const { name, email, company, category, message } = body as Record<
    string,
    unknown
  >;

  if (typeof name !== "string" || name.trim().length < 1) {
    return { ok: false, error: "お名前を入力してください。" };
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "有効なメールアドレスを入力してください。" };
  }
  if (typeof category !== "string" || !categoryLabels[category]) {
    return { ok: false, error: "お問い合わせ種別を選択してください。" };
  }
  if (typeof message !== "string" || message.trim().length < 1) {
    return { ok: false, error: "お問い合わせ内容を入力してください。" };
  }

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      company:
        typeof company === "string" && company.trim()
          ? company.trim()
          : undefined,
      category,
      message: message.trim(),
    },
  };
}

export function buildContactEmailHtml(data: ContactPayload): string {
  const categoryLabel = categoryLabels[data.category] ?? data.category;

  return `
    <h2>【株式会社　縁RIGHT】お問い合わせ</h2>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">
      <tr><td style="padding:8px 12px;font-weight:bold;color:#64748b;">お名前</td><td style="padding:8px 12px;">${escapeHtml(data.name)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:bold;color:#64748b;">メール</td><td style="padding:8px 12px;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:8px 12px;font-weight:bold;color:#64748b;">会社名</td><td style="padding:8px 12px;">${escapeHtml(data.company ?? "（未入力）")}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:bold;color:#64748b;">種別</td><td style="padding:8px 12px;">${escapeHtml(categoryLabel)}</td></tr>
    </table>
    <h3 style="margin-top:24px;">お問い合わせ内容</h3>
    <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.message)}</p>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
